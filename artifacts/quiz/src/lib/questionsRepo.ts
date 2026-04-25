import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  writeBatch,
  query,
  orderBy,
} from "firebase/firestore";
import { getDb, isFirebaseConfigured } from "./firebase";
import { ALL_QUESTIONS, type QuestionRaw } from "@/data/questions";

export type SubjectCode = "M1" | "M2" | "M3" | "M4";

export interface QuestionDoc extends QuestionRaw {
  id: string;
  subject_code: SubjectCode;
  source: "static" | "firestore";
}

const COLLECTION = "questions";

export async function fetchAllQuestionsFromFirestore(): Promise<QuestionDoc[]> {
  if (!isFirebaseConfigured) return [];
  const db = getDb();
  const q = query(collection(db, COLLECTION), orderBy("subject_code"));
  const snap = await getDocs(q);
  const out: QuestionDoc[] = [];
  snap.forEach((d) => {
    const data = d.data() as Omit<QuestionDoc, "id" | "source">;
    out.push({ ...data, id: d.id, source: "firestore" });
  });
  return out;
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
  source: "firestore" | "static";
  total: number;
}> {
  if (isFirebaseConfigured) {
    try {
      const fs = await fetchAllQuestionsFromFirestore();
      if (fs.length > 0) {
        return {
          bySubject: groupBySubject(fs),
          source: "firestore",
          total: fs.length,
        };
      }
    } catch (e) {
      console.warn("Firestore fetch failed, falling back to static.", e);
    }
  }
  const stat = staticQuestionsFlat();
  return {
    bySubject: groupBySubject(stat),
    source: "static",
    total: stat.length,
  };
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

export async function createQuestion(input: NewQuestionInput): Promise<string> {
  const db = getDb();
  const ref = await addDoc(collection(db, COLLECTION), {
    ...input,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp(),
  });
  return ref.id;
}

export async function updateQuestion(
  id: string,
  patch: Partial<NewQuestionInput>,
): Promise<void> {
  const db = getDb();
  await updateDoc(doc(db, COLLECTION, id), {
    ...patch,
    updated_at: serverTimestamp(),
  });
}

export async function deleteQuestion(id: string): Promise<void> {
  const db = getDb();
  await deleteDoc(doc(db, COLLECTION, id));
}

export async function seedStaticQuestions(
  onProgress?: (done: number, total: number) => void,
): Promise<number> {
  const db = getDb();
  const flat = staticQuestionsFlat();
  const BATCH_SIZE = 400;
  let done = 0;
  for (let i = 0; i < flat.length; i += BATCH_SIZE) {
    const batch = writeBatch(db);
    const slice = flat.slice(i, i + BATCH_SIZE);
    for (const q of slice) {
      const ref = doc(collection(db, COLLECTION));
      batch.set(ref, {
        subject_code: q.subject_code,
        q_en: q.q_en,
        q_hi: q.q_hi,
        options_en: q.options_en,
        options_hi: q.options_hi,
        a: q.a,
        exp_en: q.exp_en,
        exp_hi: q.exp_hi,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp(),
      });
    }
    await batch.commit();
    done += slice.length;
    onProgress?.(done, flat.length);
  }
  return done;
}

export async function deleteAllQuestions(): Promise<number> {
  const db = getDb();
  const snap = await getDocs(collection(db, COLLECTION));
  const ids: string[] = [];
  snap.forEach((d) => ids.push(d.id));
  const BATCH_SIZE = 400;
  for (let i = 0; i < ids.length; i += BATCH_SIZE) {
    const batch = writeBatch(db);
    for (const id of ids.slice(i, i + BATCH_SIZE)) {
      batch.delete(doc(db, COLLECTION, id));
    }
    await batch.commit();
  }
  return ids.length;
}
