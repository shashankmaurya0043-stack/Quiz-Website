import { useEffect, useMemo, useState } from "react";
import { useLocation } from "wouter";
import {
  Loader2,
  Plus,
  Pencil,
  Trash2,
  LogOut,
  Database,
  Search,
  AlertTriangle,
  CheckCircle2,
  X,
  Filter,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { useAuth } from "@workspace/replit-auth-web";
import {
  fetchAllQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  seedStaticQuestions,
  deleteAllQuestions,
  type QuestionDoc,
  type SubjectCode,
  type NewQuestionInput,
} from "@/lib/questionsRepo";
import { invalidateQuestionsCache } from "@/lib/useQuestions";
import { SUBJECTS } from "@/data/subjects";

const SUBJECT_CODES: SubjectCode[] = ["M1", "M2", "M3", "M4"];

type FormState = NewQuestionInput;

const EMPTY_FORM: FormState = {
  subject_code: "M1",
  q_en: "",
  q_hi: "",
  options_en: ["", "", "", ""],
  options_hi: ["", "", "", ""],
  a: 0,
  exp_en: "",
  exp_hi: "",
};

export default function AdminQuestions() {
  const [, navigate] = useLocation();
  const { isLoading: authLoading, isAuthenticated, isAdmin, user, logout } = useAuth();
  const [list, setList] = useState<QuestionDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"ALL" | SubjectCode>("ALL");
  const [search, setSearch] = useState("");

  const [editing, setEditing] = useState<QuestionDoc | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const [seeding, setSeeding] = useState(false);
  const [seedProgress, setSeedProgress] = useState<{ done: number; total: number } | null>(null);
  const [confirmDeleteAll, setConfirmDeleteAll] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<QuestionDoc | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
  if (authLoading) return;
  // auth bypass
}, [authLoading, isAuthenticated, isAdmin, navigate]);

  async function refresh() {
    setLoading(true);
    setError(null);
    try {
      const docs = await fetchAllQuestions();
      setList(docs);
      invalidateQuestionsCache();
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Failed to load questions.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
  void refresh();
}, []);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return list.filter((q) => {
      if (filter !== "ALL" && q.subject_code !== filter) return false;
      if (!term) return true;
      return (
        q.q_en.toLowerCase().includes(term) ||
        q.q_hi.includes(term) ||
        q.options_en.some((o) => o.toLowerCase().includes(term))
      );
    });
  }, [list, filter, search]);

  const stats = useMemo(() => {
    const out: Record<string, number> = { M1: 0, M2: 0, M3: 0, M4: 0 };
    list.forEach((q) => {
      out[q.subject_code] = (out[q.subject_code] || 0) + 1;
    });
    return out;
  }, [list]);

  function openNew() {
    setEditing(null);
    setForm(EMPTY_FORM);
    setFormError(null);
    setShowForm(true);
  }

  function openEdit(q: QuestionDoc) {
    setEditing(q);
    setForm({
      subject_code: q.subject_code,
      q_en: q.q_en,
      q_hi: q.q_hi,
      options_en: [...q.options_en],
      options_hi: [...q.options_hi],
      a: q.a,
      exp_en: q.exp_en,
      exp_hi: q.exp_hi,
    });
    setFormError(null);
    setShowForm(true);
  }

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 2400);
  }

  async function handleSave() {
    setFormError(null);
    if (!form.q_en.trim() || !form.q_hi.trim()) {
      setFormError("Both English and Hindi question text are required.");
      return;
    }
    if (form.options_en.some((o) => !o.trim()) || form.options_hi.some((o) => !o.trim())) {
      setFormError("All four English and Hindi options are required.");
      return;
    }
    if (form.a < 0 || form.a > 3) {
      setFormError("Correct answer index must be 0–3.");
      return;
    }
    setSaving(true);
    try {
      if (editing) {
        await updateQuestion(editing.id, form);
        showToast("Question updated.");
      } else {
        await createQuestion(form);
        showToast("Question added.");
      }
      setShowForm(false);
      await refresh();
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Save failed.";
      setFormError(msg);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(q: QuestionDoc) {
    try {
      await deleteQuestion(q.id);
      setConfirmDelete(null);
      showToast("Question deleted.");
      await refresh();
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Delete failed.";
      setError(msg);
    }
  }

  async function handleSeed() {
    setSeeding(true);
    setSeedProgress({ done: 0, total: 0 });
    try {
      const total = await seedStaticQuestions((done, total) =>
        setSeedProgress({ done, total }),
      );
      showToast(`Seeded ${total} questions.`);
      await refresh();
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Seed failed.";
      setError(msg);
    } finally {
      setSeeding(false);
      setSeedProgress(null);
    }
  }

  async function handleDeleteAll() {
    setConfirmDeleteAll(false);
    setLoading(true);
    try {
      const n = await deleteAllQuestions();
      showToast(`Deleted ${n} questions.`);
      await refresh();
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Delete all failed.";
      setError(msg);
    }
  }

  if (authLoading) {
  return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" strokeWidth={2.5} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <header className="sticky top-0 z-30 bg-[#FDFBF7] border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => navigate("/")}
              aria-label="Home"
              className="w-10 h-10 bg-white rounded-lg nb-border nb-shadow-sm nb-hover flex items-center justify-center shrink-0"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
            </button>
            <div className="min-w-0">
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                Admin Console
              </div>
              <h1 className="font-heading font-black text-lg sm:text-xl truncate">
                Quiz Questions
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden sm:inline-block text-xs text-zinc-600 max-w-[160px] truncate">
              {user?.email ?? user?.firstName ?? "admin"}
            </span>
            <button
              data-testid="admin-signout-btn"
              onClick={logout}
              className="h-10 px-3 bg-white rounded-lg nb-border nb-shadow-sm nb-hover flex items-center gap-1.5 font-heading font-bold text-sm"
            >
              <LogOut className="w-4 h-4" strokeWidth={2.5} />
              <span className="hidden sm:inline">Sign out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div className="bg-white nb-border rounded-xl px-4 py-3 nb-shadow-sm">
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Total
            </div>
            <div className="font-heading font-black text-2xl">{list.length}</div>
          </div>
          {SUBJECT_CODES.map((c) => (
            <div
              key={c}
              className="nb-border rounded-xl px-4 py-3 nb-shadow-sm"
              style={{
                background:
                  c === "M1"
                    ? "#A7F3D0"
                    : c === "M2"
                      ? "#FDE047"
                      : c === "M3"
                        ? "#C4B5FD"
                        : "#FDA4AF",
              }}
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-700">
                {c}
              </div>
              <div className="font-heading font-black text-2xl">
                {stats[c] || 0}
              </div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="mt-5 bg-white nb-border rounded-2xl p-4 nb-shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"
                strokeWidth={2.5}
              />
              <input
                data-testid="admin-search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions..."
                className="w-full bg-white nb-border rounded-xl pl-9 pr-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex items-center gap-1 bg-zinc-100 nb-border rounded-xl p-1">
              {(["ALL", ...SUBJECT_CODES] as const).map((c) => (
                <button
                  key={c}
                  data-testid={`admin-filter-${c}`}
                  onClick={() => setFilter(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-heading font-black transition ${
                    filter === c ? "bg-black text-white" : "text-zinc-700 hover:bg-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <button
              data-testid="admin-new-question-btn"
              onClick={openNew}
              className="inline-flex items-center gap-2 bg-blue-500 text-white font-heading font-bold px-4 py-2 rounded-xl nb-border nb-shadow nb-hover"
            >
              <Plus className="w-4 h-4" strokeWidth={2.5} />
              New question
            </button>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-zinc-600">
            <Filter className="w-3.5 h-3.5" strokeWidth={2.5} />
            <span>
              Showing <b>{filtered.length}</b> of <b>{list.length}</b>
            </span>
            <span className="ml-auto inline-flex items-center gap-2">
              <button
                data-testid="admin-seed-btn"
                onClick={handleSeed}
                disabled={seeding}
                className="inline-flex items-center gap-1.5 bg-yellow-300 text-black font-heading font-bold px-3 py-1.5 rounded-lg nb-border nb-shadow-sm nb-hover disabled:opacity-60 text-xs"
              >
                {seeding ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" strokeWidth={2.5} />
                ) : (
                  <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
                )}
                {seeding && seedProgress
                  ? `Seeding ${seedProgress.done}/${seedProgress.total}`
                  : "Seed static bank"}
              </button>
              {list.length > 0 && (
                <button
                  data-testid="admin-delete-all-btn"
                  onClick={() => setConfirmDeleteAll(true)}
                  className="inline-flex items-center gap-1.5 bg-red-100 text-red-800 font-heading font-bold px-3 py-1.5 rounded-lg nb-border nb-shadow-sm nb-hover text-xs"
                >
                  <Trash2 className="w-3.5 h-3.5" strokeWidth={2.5} />
                  Delete all
                </button>
              )}
            </span>
          </div>
        </div>

        {/* List */}
        <div className="mt-5">
          {loading ? (
            <div className="bg-white nb-border rounded-2xl p-10 nb-shadow-sm text-center">
              <Loader2 className="w-8 h-8 mx-auto animate-spin" strokeWidth={2.5} />
              <div className="font-heading font-bold mt-3">Loading...</div>
            </div>
          ) : error ? (
            <div className="bg-red-50 nb-border rounded-2xl p-6 nb-shadow-sm">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" strokeWidth={2.5} />
                <div>
                  <div className="font-heading font-black">Error</div>
                  <div className="text-sm text-zinc-700 mt-1">{error}</div>
                </div>
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="bg-white nb-border rounded-2xl p-10 nb-shadow-sm text-center">
              <Database className="w-10 h-10 mx-auto text-zinc-400" strokeWidth={2.5} />
              <div className="font-heading font-black text-xl mt-3">
                {list.length === 0 ? "No questions yet" : "No matches"}
              </div>
              <div className="text-sm text-zinc-600 mt-1">
                {list.length === 0
                  ? "Add a question or seed the static bank to get started."
                  : "Try a different filter or search term."}
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((q, i) => (
                <div
                  key={q.id}
                  data-testid={`admin-question-row-${i}`}
                  className="bg-white nb-border rounded-2xl p-4 sm:p-5 nb-shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="shrink-0 px-2 py-1 nb-border rounded-lg text-[11px] font-heading font-black"
                      style={{
                        background:
                          q.subject_code === "M1"
                            ? "#A7F3D0"
                            : q.subject_code === "M2"
                              ? "#FDE047"
                              : q.subject_code === "M3"
                                ? "#C4B5FD"
                                : "#FDA4AF",
                      }}
                    >
                      {q.subject_code}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-heading font-bold text-base leading-snug">
                        {q.q_en}
                      </div>
                      <div className="text-sm text-zinc-700 mt-0.5">
                        {q.q_hi}
                      </div>
                      <div className="mt-3 grid sm:grid-cols-2 gap-1.5 text-xs">
                        {q.options_en.map((o, idx) => {
                          const isCorrect = idx === q.a;
                          return (
                            <div
                              key={idx}
                              className={`flex items-start gap-1.5 px-2 py-1 rounded-md ${
                                isCorrect
                                  ? "bg-green-100 border border-green-700/40"
                                  : "bg-zinc-50"
                              }`}
                            >
                              <span className="font-heading font-black text-[11px]">
                                {String.fromCharCode(65 + idx)}.
                              </span>
                              <span className="leading-snug">{o}</span>
                              {isCorrect && (
                                <CheckCircle2
                                  className="w-3.5 h-3.5 text-green-700 ml-auto shrink-0"
                                  strokeWidth={2.5}
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0">
                      <button
                        data-testid={`admin-edit-${i}`}
                        onClick={() => openEdit(q)}
                        className="w-9 h-9 bg-white rounded-lg nb-border nb-shadow-sm nb-hover flex items-center justify-center"
                        aria-label="Edit"
                      >
                        <Pencil className="w-4 h-4" strokeWidth={2.5} />
                      </button>
                      <button
                        data-testid={`admin-delete-${i}`}
                        onClick={() => setConfirmDelete(q)}
                        className="w-9 h-9 bg-red-100 text-red-700 rounded-lg nb-border nb-shadow-sm nb-hover flex items-center justify-center"
                        aria-label="Delete"
                      >
                        <Trash2 className="w-4 h-4" strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Form modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-start sm:items-center justify-center p-3 overflow-y-auto">
          <div
            data-testid="admin-form-modal"
            className="bg-white nb-border rounded-2xl p-5 sm:p-6 max-w-2xl w-full nb-shadow-lg my-6"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-heading font-black text-xl">
                {editing ? "Edit question" : "New question"}
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="w-9 h-9 bg-white rounded-lg nb-border nb-shadow-sm nb-hover flex items-center justify-center"
                aria-label="Close"
              >
                <X className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-1">
                  Subject
                </label>
                <select
                  data-testid="admin-form-subject"
                  value={form.subject_code}
                  onChange={(e) =>
                    setForm({ ...form, subject_code: e.target.value as SubjectCode })
                  }
                  className="bg-white nb-border rounded-xl px-3 py-2 font-body focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {SUBJECTS.map((s) => (
                    <option key={s.code} value={s.code}>
                      {s.code} — {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-1">
                    Question (English)
                  </label>
                  <textarea
                    data-testid="admin-form-q-en"
                    value={form.q_en}
                    onChange={(e) => setForm({ ...form, q_en: e.target.value })}
                    rows={3}
                    className="w-full bg-white nb-border rounded-xl px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-1">
                    Question (Hindi)
                  </label>
                  <textarea
                    data-testid="admin-form-q-hi"
                    value={form.q_hi}
                    onChange={(e) => setForm({ ...form, q_hi: e.target.value })}
                    rows={3}
                    className="w-full bg-white nb-border rounded-xl px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-2">
                  Options (mark the correct one)
                </label>
                <div className="space-y-2">
                  {[0, 1, 2, 3].map((idx) => (
                    <div
                      key={idx}
                      className={`grid grid-cols-[auto_1fr_1fr] gap-2 items-start p-2 rounded-xl ${
                        form.a === idx ? "bg-green-50 border border-green-700/40" : ""
                      }`}
                    >
                      <button
                        type="button"
                        data-testid={`admin-form-correct-${idx}`}
                        onClick={() => setForm({ ...form, a: idx })}
                        className={`w-9 h-9 rounded-lg nb-border flex items-center justify-center font-heading font-black ${
                          form.a === idx
                            ? "bg-green-600 text-white"
                            : "bg-white"
                        }`}
                        aria-label={`Mark option ${String.fromCharCode(65 + idx)} correct`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </button>
                      <input
                        data-testid={`admin-form-option-en-${idx}`}
                        value={form.options_en[idx]}
                        onChange={(e) => {
                          const next = [...form.options_en];
                          next[idx] = e.target.value;
                          setForm({ ...form, options_en: next });
                        }}
                        placeholder={`Option ${String.fromCharCode(65 + idx)} (English)`}
                        className="bg-white nb-border rounded-lg px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <input
                        data-testid={`admin-form-option-hi-${idx}`}
                        value={form.options_hi[idx]}
                        onChange={(e) => {
                          const next = [...form.options_hi];
                          next[idx] = e.target.value;
                          setForm({ ...form, options_hi: next });
                        }}
                        placeholder={`विकल्प ${String.fromCharCode(65 + idx)} (Hindi)`}
                        className="bg-white nb-border rounded-lg px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-1">
                    Explanation (English)
                  </label>
                  <textarea
                    data-testid="admin-form-exp-en"
                    value={form.exp_en}
                    onChange={(e) => setForm({ ...form, exp_en: e.target.value })}
                    rows={2}
                    className="w-full bg-white nb-border rounded-xl px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-1">
                    Explanation (Hindi)
                  </label>
                  <textarea
                    data-testid="admin-form-exp-hi"
                    value={form.exp_hi}
                    onChange={(e) => setForm({ ...form, exp_hi: e.target.value })}
                    rows={2}
                    className="w-full bg-white nb-border rounded-xl px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              {formError && (
                <div className="bg-red-100 nb-border rounded-xl px-3 py-2 text-sm text-red-800 font-medium">
                  {formError}
                </div>
              )}
            </div>

            <div className="mt-5 flex items-center gap-2 justify-end">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-white rounded-xl nb-border nb-shadow-sm nb-hover font-heading font-bold text-sm"
              >
                Cancel
              </button>
              <button
                data-testid="admin-form-save"
                onClick={handleSave}
                disabled={saving}
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl nb-border nb-shadow nb-hover font-heading font-bold text-sm disabled:opacity-60"
              >
                {saving && <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2.5} />}
                {editing ? "Save changes" : "Add question"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete one confirm */}
      {confirmDelete && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3">
          <div className="bg-white nb-border rounded-2xl p-6 max-w-sm w-full nb-shadow-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" strokeWidth={2.5} />
              <div>
                <div className="font-heading font-black text-lg">Delete question?</div>
                <div className="text-sm text-zinc-700 mt-1">
                  This cannot be undone.
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setConfirmDelete(null)}
                className="px-4 py-2 bg-white rounded-xl nb-border nb-shadow-sm nb-hover font-heading font-bold text-sm"
              >
                Cancel
              </button>
              <button
                data-testid="admin-confirm-delete"
                onClick={() => handleDelete(confirmDelete)}
                className="px-4 py-2 bg-red-600 text-white rounded-xl nb-border nb-shadow nb-hover font-heading font-bold text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete all confirm */}
      {confirmDeleteAll && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3">
          <div className="bg-white nb-border rounded-2xl p-6 max-w-sm w-full nb-shadow-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" strokeWidth={2.5} />
              <div>
                <div className="font-heading font-black text-lg">Delete every question?</div>
                <div className="text-sm text-zinc-700 mt-1">
                  All {list.length} questions will be permanently removed. The
                  quiz will fall back to the static bank shipped in the app.
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setConfirmDeleteAll(false)}
                className="px-4 py-2 bg-white rounded-xl nb-border nb-shadow-sm nb-hover font-heading font-bold text-sm"
              >
                Cancel
              </button>
              <button
                data-testid="admin-confirm-delete-all"
                onClick={handleDeleteAll}
                className="px-4 py-2 bg-red-600 text-white rounded-xl nb-border nb-shadow nb-hover font-heading font-bold text-sm"
              >
                Delete all
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black text-white font-heading font-bold px-4 py-2 rounded-xl nb-shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
}
