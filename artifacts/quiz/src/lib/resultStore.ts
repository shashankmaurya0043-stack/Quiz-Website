import type { QuizResult } from "./quiz";

const KEY = "olevel_quiz_last_result_v1";
const AUTO_KEY = "olevel_quiz_last_result_auto_v1";

let memoryResult: QuizResult | null = null;
let memoryAuto = false;

export function setLastResult(result: QuizResult, auto: boolean) {
  memoryResult = result;
  memoryAuto = auto;
  try {
    sessionStorage.setItem(KEY, JSON.stringify(result));
    sessionStorage.setItem(AUTO_KEY, JSON.stringify(auto));
  } catch {
    /* ignore */
  }
}

export function getLastResult(): { result: QuizResult | null; auto: boolean } {
  if (memoryResult) return { result: memoryResult, auto: memoryAuto };
  try {
    const raw = sessionStorage.getItem(KEY);
    const autoRaw = sessionStorage.getItem(AUTO_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as QuizResult;
      memoryResult = parsed;
      memoryAuto = autoRaw === "true";
      return { result: parsed, auto: memoryAuto };
    }
  } catch {
    /* ignore */
  }
  return { result: null, auto: false };
}

export function clearLastResult() {
  memoryResult = null;
  memoryAuto = false;
  try {
    sessionStorage.removeItem(KEY);
    sessionStorage.removeItem(AUTO_KEY);
  } catch {
    /* ignore */
  }
}
