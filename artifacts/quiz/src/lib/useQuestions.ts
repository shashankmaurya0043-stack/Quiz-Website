import { useEffect, useState } from "react";
import type { QuestionRaw } from "@/data/questions";
import { getActiveQuestions } from "./questionsRepo";

interface QuestionsState {
  loading: boolean;
  bySubject: Record<string, QuestionRaw[]>;
  source: "firestore" | "static" | null;
  total: number;
  error: string | null;
}

let cachedPromise: Promise<{
  bySubject: Record<string, QuestionRaw[]>;
  source: "firestore" | "static";
  total: number;
}> | null = null;

export function invalidateQuestionsCache() {
  cachedPromise = null;
}

export function useQuestions(): QuestionsState {
  const [state, setState] = useState<QuestionsState>({
    loading: true,
    bySubject: {},
    source: null,
    total: 0,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;
    if (!cachedPromise) {
      cachedPromise = getActiveQuestions();
    }
    cachedPromise
      .then((res) => {
        if (cancelled) return;
        setState({
          loading: false,
          bySubject: res.bySubject,
          source: res.source,
          total: res.total,
          error: null,
        });
      })
      .catch((e) => {
        if (cancelled) return;
        cachedPromise = null;
        const msg = e instanceof Error ? e.message : "Failed to load questions";
        setState({
          loading: false,
          bySubject: {},
          source: null,
          total: 0,
          error: msg,
        });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
