import { ALL_QUESTIONS, type QuestionRaw } from "@/data/questions";

export type SubjectCode = "M1" | "M2" | "M3" | "M4";

export interface QuestionDoc extends QuestionRaw {
  id: string;
  subject_code: SubjectCode;
  source: "static" | "api";
}

export interface NewQuestionInput {
  subject_code: SubjectCode;
  q_en: string;
  q_hi: string;
  options_en: string[];
  options_hi: string[];
  a: number;
  exp_en: string;
  exp_hi: string;
}

interface ApiQuestion {
  id: string;
  subject_code: SubjectCode;
  q_en: string;
  q_hi: string;
  options_en: string[];
  options_hi: string[];
  a: number;
  exp_en: string;
  exp_hi: string;
}

async function jsonOrThrow(res: Response): Promise<unknown> {
  if (!res.ok) {
    let msg = `HTTP ${res.status}`;
    try {
      const j = (await res.json()) as { error?: string };
      if (j?.error) msg = j.error;
    } catch {
      // ignore
    }
    throw new Error(msg);
  }
  return res.json();
}

export async function fetchAllQuestions(): Promise<QuestionDoc[]> {
  const res = await fetch("https://quiz-website-api-server-ojb5.vercel.app/api/questions", { credentials: "include" });
  const data = (await jsonOrThrow(res)) as { questions: ApiQuestion[] };
  return (data.questions ?? []).map((q) => ({ ...q, source: "api" }));
}

export function staticQuestionsFlat(): QuestionDoc[] {
  const out: QuestionDoc[] = [];
  (Object.keys(ALL_QUESTIONS) as SubjectCode[]).forEach((code) => {
    (ALL_QUESTIONS[code] || []).forEach((raw, i) => {
      out.push({
        ...raw,
        id: `static_${code}_${i}`,
        subject_code: code,
        source: "static",
      });
    });
  });
  return out;
}

export function groupBySubject(
  list: QuestionDoc[],
): Record<string, QuestionRaw[]> {
  const out: Record<string, QuestionRaw[]> = { M1: [], M2: [], M3: [], M4: [] };
  for (const q of list) {
    if (!out[q.subject_code]) out[q.subject_code] = [];
    out[q.subject_code].push({
      q_en: q.q_en,
      q_hi: q.q_hi,
      options_en: q.options_en,
      options_hi: q.options_hi,
      a: q.a,
      exp_en: q.exp_en,
      exp_hi: q.exp_hi,
    });
  }
  return out;
}

export async function getActiveQuestions(): Promise<{
  bySubject: Record<string, QuestionRaw[]>;
  source: "api" | "static";
  total: number;
}> {
  try {
    const fs = await fetchAllQuestions();
    if (fs.length > 0) {
      return { bySubject: groupBySubject(fs), source: "api", total: fs.length };
    }
  } catch (e) {
    console.warn("API fetch failed, falling back to static.", e);
  }
  const stat = staticQuestionsFlat();
  return { bySubject: groupBySubject(stat), source: "static", total: stat.length };
}

export async function createQuestion(input: NewQuestionInput): Promise<QuestionDoc> {
  const res = await fetch("https://quiz-website-api-server-ojb5.vercel.app/api/questions", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  const data = (await jsonOrThrow(res)) as ApiQuestion;
  return { ...data, source: "api" };
}

export async function updateQuestion(
  id: string,
  patch: NewQuestionInput,
): Promise<QuestionDoc> {
  const res = await fetch(`https://quiz-website-api-server-ojb5.vercel.app/api/questions/${encodeURIComponent(id)}`, {
    method: "PATCH",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patch),
  });
  const data = (await jsonOrThrow(res)) as ApiQuestion;
  return { ...data, source: "api" };
}

export async function deleteQuestion(id: string): Promise<void> {
  const res = await fetch(`https://quiz-website-api-server-ojb5.vercel.app/api/questions/${encodeURIComponent(id)}`, {
    method: "DELETE",
    credentials: "include",
  });
  await jsonOrThrow(res);
}

export async function seedStaticQuestions(
  onProgress?: (done: number, total: number) => void,
): Promise<number> {
  const flat = staticQuestionsFlat().map<NewQuestionInput>((q) => ({
    subject_code: q.subject_code,
    q_en: q.q_en,
    q_hi: q.q_hi,
    options_en: q.options_en,
    options_hi: q.options_hi,
    a: q.a,
    exp_en: q.exp_en,
    exp_hi: q.exp_hi,
  }));
  if (flat.length === 0) return 0;
  onProgress?.(0, flat.length);
  const res = await fetch("https://quiz-website-api-server-ojb5.vercel.app/api/questions/seed",{
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ questions: flat }),
  });
  const data = (await jsonOrThrow(res)) as { inserted: number };
  onProgress?.(data.inserted, flat.length);
  return data.inserted;
}

export async function deleteAllQuestions(): Promise<number> {
  const res = await fetch("/api/questions", {
    method: "DELETE",
    credentials: "include",
  });
  const data = (await jsonOrThrow(res)) as { deleted: number };
  return data.deleted;
}
