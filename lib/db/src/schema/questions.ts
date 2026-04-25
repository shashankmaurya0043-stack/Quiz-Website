import { sql } from "drizzle-orm";
import {
  index,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const questionsTable = pgTable(
  "questions",
  {
    id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
    subjectCode: varchar("subject_code", { length: 8 }).notNull(),
    qEn: text("q_en").notNull(),
    qHi: text("q_hi").notNull(),
    optionsEn: jsonb("options_en").notNull().$type<string[]>(),
    optionsHi: jsonb("options_hi").notNull().$type<string[]>(),
    a: integer("a").notNull(),
    expEn: text("exp_en").notNull().default(""),
    expHi: text("exp_hi").notNull().default(""),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => [index("IDX_questions_subject_code").on(table.subjectCode)],
);

export type QuestionRow = typeof questionsTable.$inferSelect;
export type NewQuestionRow = typeof questionsTable.$inferInsert;
