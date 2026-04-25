import type { QuestionRaw } from "@/data/questions";
import { SUBJECTS, MOCK_TEST, getSubjectMeta } from "@/data/subjects";

export interface QuizQuestion {
  id: string;
  q_en: string;
  q_hi: string;
  options_en: string[];
  options_hi: string[];
}

export interface QuizSession {
  session_id: string;
  subject_code: string;
  subject_name: string;
  subject_name_hi: string;
  duration_min: number;
  questions: QuizQuestion[];
  answer_key: Record<string, number>;
  source: Record<string, QuestionRaw>;
}

export interface QuizReviewItem {
  id: string;
  q_en: string;
  q_hi: string;
  options_en: string[];
  options_hi: string[];
  correct: number;
  selected: number | null;
  is_correct: boolean;
  explanation_en: string;
  explanation_hi: string;
}

export interface QuizResult {
  session_id: string;
  subject_code: string;
  subject_name: string;
  subject_name_hi: string;
  score: number;
  total: number;
  percentage: number;
  correct_count: number;
  wrong_count: number;
  unattempted: number;
  time_taken_sec: number;
  review: QuizReviewItem[];
}

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function newId(prefix = "id"): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
}

export function startQuiz(
  code: string,
  bySubject: Record<string, QuestionRaw[]>,
): QuizSession {
  const upper = code.toUpperCase();
  let pool: QuestionRaw[] = [];
  let count = 0;
  let duration = 0;
  let name = "";
  let name_hi = "";

  if (upper === "MOCK") {
    const all: QuestionRaw[] = [];
    for (const s of SUBJECTS) {
      all.push(...(bySubject[s.code] || []));
    }
    pool = all;
    count = MOCK_TEST.num_questions;
    duration = MOCK_TEST.duration_min;
    name = MOCK_TEST.name;
    name_hi = MOCK_TEST.name_hi;
  } else {
    const subj = SUBJECTS.find((s) => s.code === upper);
    if (!subj) {
      throw new Error(`Unknown subject: ${code}`);
    }
    pool = bySubject[subj.code] || [];
    count = subj.num_questions;
    duration = subj.duration_min;
    name = subj.name;
    name_hi = subj.name_hi;
  }

  if (pool.length === 0) {
    throw new Error(
      `No questions available for ${upper}. Please add questions in the admin panel.`,
    );
  }

  const picked = shuffle(pool).slice(0, Math.min(count, pool.length));

  const questions: QuizQuestion[] = [];
  const answer_key: Record<string, number> = {};
  const source: Record<string, QuestionRaw> = {};

  for (const raw of picked) {
    const id = newId("q");
    questions.push({
      id,
      q_en: raw.q_en,
      q_hi: raw.q_hi,
      options_en: raw.options_en,
      options_hi: raw.options_hi,
    });
    answer_key[id] = raw.a;
    source[id] = raw;
  }

  return {
    session_id: newId("sess"),
    subject_code: upper,
    subject_name: name,
    subject_name_hi: name_hi,
    duration_min: duration,
    questions,
    answer_key,
    source,
  };
}

export function submitQuiz(
  session: QuizSession,
  answers: Record<string, number | null | undefined>,
  time_taken_sec: number,
): QuizResult {
  let correct = 0;
  let wrong = 0;
  let skipped = 0;
  const review: QuizReviewItem[] = [];

  for (const q of session.questions) {
    const correctIdx = session.answer_key[q.id];
    const raw = session.source[q.id];
    const sel = answers[q.id];
    const selected = sel === undefined || sel === null ? null : sel;
    const is_correct = selected !== null && selected === correctIdx;
    if (selected === null) skipped++;
    else if (is_correct) correct++;
    else wrong++;
    review.push({
      id: q.id,
      q_en: q.q_en,
      q_hi: q.q_hi,
      options_en: q.options_en,
      options_hi: q.options_hi,
      correct: correctIdx,
      selected,
      is_correct,
      explanation_en: raw.exp_en,
      explanation_hi: raw.exp_hi,
    });
  }

  const total = session.questions.length;
  const percentage = total === 0 ? 0 : Math.round((correct / total) * 100);

  return {
    session_id: session.session_id,
    subject_code: session.subject_code,
    subject_name: session.subject_name,
    subject_name_hi: session.subject_name_hi,
    score: correct,
    total,
    percentage,
    correct_count: correct,
    wrong_count: wrong,
    unattempted: skipped,
    time_taken_sec,
    review,
  };
}

export function getMockInfo() {
  return MOCK_TEST;
}

export function getSubjects() {
  return SUBJECTS;
}

export { getSubjectMeta };
