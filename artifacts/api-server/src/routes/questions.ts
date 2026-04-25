import { Router, type IRouter, type Request, type Response } from "express";
import { eq, asc } from "drizzle-orm";
import { db, questionsTable } from "@workspace/db";
import {
  ListQuestionsResponse,
  CreateQuestionBody,
  CreateQuestionResponse,
  UpdateQuestionBody,
  UpdateQuestionResponse,
  DeleteQuestionResponse,
  DeleteAllQuestionsResponse,
  SeedQuestionsBody,
  SeedQuestionsResponse,
} from "@workspace/api-zod";
import { requireAdmin } from "../lib/admin";

const router: IRouter = Router();

interface DbRow {
  id: string;
  subjectCode: string;
  qEn: string;
  qHi: string;
  optionsEn: string[];
  optionsHi: string[];
  a: number;
  expEn: string;
  expHi: string;
}

function rowToApi(row: DbRow) {
  return {
    id: row.id,
    subject_code: row.subjectCode,
    q_en: row.qEn,
    q_hi: row.qHi,
    options_en: row.optionsEn,
    options_hi: row.optionsHi,
    a: row.a,
    exp_en: row.expEn ?? "",
    exp_hi: row.expHi ?? "",
  };
}

router.get("/questions", async (_req: Request, res: Response) => {
  const rows = await db
    .select()
    .from(questionsTable)
    .orderBy(asc(questionsTable.subjectCode));
  res.json(ListQuestionsResponse.parse({ questions: rows.map(rowToApi) }));
});

router.post(
  "/questions",
  requireAdmin,
  async (req: Request, res: Response) => {
    const parsed = CreateQuestionBody.safeParse(req.body);
    if (!parsed.success) {
      res
        .status(400)
        .json({ error: parsed.error.issues[0]?.message ?? "Invalid input" });
      return;
    }
    const data = parsed.data;
    const [row] = await db
      .insert(questionsTable)
      .values({
        subjectCode: data.subject_code,
        qEn: data.q_en,
        qHi: data.q_hi,
        optionsEn: data.options_en,
        optionsHi: data.options_hi,
        a: data.a,
        expEn: data.exp_en ?? "",
        expHi: data.exp_hi ?? "",
      })
      .returning();
    res.json(CreateQuestionResponse.parse(rowToApi(row)));
  },
);

router.patch(
  "/questions/:id",
  requireAdmin,
  async (req: Request, res: Response) => {
    const parsed = UpdateQuestionBody.safeParse(req.body);
    if (!parsed.success) {
      res
        .status(400)
        .json({ error: parsed.error.issues[0]?.message ?? "Invalid input" });
      return;
    }
    const data = parsed.data;
    const id = String(req.params.id);
    const [row] = await db
      .update(questionsTable)
      .set({
        subjectCode: data.subject_code,
        qEn: data.q_en,
        qHi: data.q_hi,
        optionsEn: data.options_en,
        optionsHi: data.options_hi,
        a: data.a,
        expEn: data.exp_en ?? "",
        expHi: data.exp_hi ?? "",
      })
      .where(eq(questionsTable.id, id))
      .returning();
    if (!row) {
      res.status(404).json({ error: "Question not found." });
      return;
    }
    res.json(UpdateQuestionResponse.parse(rowToApi(row)));
  },
);

router.delete(
  "/questions/:id",
  requireAdmin,
  async (req: Request, res: Response) => {
    const id = String(req.params.id);
    const result = await db
      .delete(questionsTable)
      .where(eq(questionsTable.id, id))
      .returning({ id: questionsTable.id });
    if (result.length === 0) {
      res.status(404).json({ error: "Question not found." });
      return;
    }
    res.json(DeleteQuestionResponse.parse({ success: true }));
  },
);

router.delete(
  "/questions",
  requireAdmin,
  async (_req: Request, res: Response) => {
    const result = await db
      .delete(questionsTable)
      .returning({ id: questionsTable.id });
    res.json(DeleteAllQuestionsResponse.parse({ deleted: result.length }));
  },
);

router.post(
  "/questions/seed",
  requireAdmin,
  async (req: Request, res: Response) => {
    const parsed = SeedQuestionsBody.safeParse(req.body);
    if (!parsed.success) {
      res
        .status(400)
        .json({ error: parsed.error.issues[0]?.message ?? "Invalid input" });
      return;
    }
    const items = parsed.data.questions;
    if (items.length === 0) {
      res.json(SeedQuestionsResponse.parse({ inserted: 0 }));
      return;
    }
    const CHUNK = 200;
    let inserted = 0;
    for (let i = 0; i < items.length; i += CHUNK) {
      const slice = items.slice(i, i + CHUNK);
      const values = slice.map((d) => ({
        subjectCode: d.subject_code,
        qEn: d.q_en,
        qHi: d.q_hi,
        optionsEn: d.options_en,
        optionsHi: d.options_hi,
        a: d.a,
        expEn: d.exp_en ?? "",
        expHi: d.exp_hi ?? "",
      }));
      const out = await db
        .insert(questionsTable)
        .values(values)
        .returning({ id: questionsTable.id });
      inserted += out.length;
    }
    res.json(SeedQuestionsResponse.parse({ inserted }));
  },
);

export default router;
