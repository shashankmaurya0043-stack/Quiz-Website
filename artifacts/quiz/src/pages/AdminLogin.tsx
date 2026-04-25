import { useEffect, useState, type FormEvent } from "react";
import { useLocation } from "wouter";
import { Loader2, ShieldCheck, AlertTriangle, ArrowLeft } from "lucide-react";
import { isFirebaseConfigured } from "@/lib/firebase";
import { adminSignIn, useAdminAuth } from "@/lib/adminAuth";

export default function AdminLogin() {
  const [, navigate] = useLocation();
  const { ready, user } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (ready && user) {
      navigate("/admin");
    }
  }, [ready, user, navigate]);

  if (!isFirebaseConfigured) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white nb-border rounded-2xl p-7 nb-shadow text-center">
          <div className="mx-auto w-12 h-12 bg-yellow-300 nb-border rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <h1 className="font-heading font-black text-2xl mt-4">
            Firebase not configured
          </h1>
          <p className="mt-3 text-sm text-zinc-700 leading-relaxed">
            The admin panel needs Firebase credentials. Please add the
            following secrets to enable it:
          </p>
          <ul className="mt-3 text-left text-xs font-mono bg-zinc-50 nb-border rounded-lg p-3 space-y-1">
            <li>VITE_FIREBASE_API_KEY</li>
            <li>VITE_FIREBASE_AUTH_DOMAIN</li>
            <li>VITE_FIREBASE_PROJECT_ID</li>
            <li>VITE_FIREBASE_STORAGE_BUCKET</li>
            <li>VITE_FIREBASE_MESSAGING_SENDER_ID</li>
            <li>VITE_FIREBASE_APP_ID</li>
          </ul>
          <button
            onClick={() => navigate("/")}
            className="mt-5 inline-flex items-center gap-2 bg-black text-white font-heading font-bold px-5 py-2 rounded-xl nb-border nb-shadow nb-hover"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError(null);
    try {
      await adminSignIn(email.trim(), password);
      navigate("/admin");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Sign-in failed.";
      setError(msg.replace("Firebase: ", ""));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white nb-border rounded-2xl p-7 nb-shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-500 text-white nb-border rounded-xl flex items-center justify-center nb-shadow-sm">
            <ShieldCheck className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="font-heading font-black text-2xl leading-tight">
              Admin Sign In
            </h1>
            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mt-0.5">
              OLevel.Quiz Console
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-1">
              Email
            </label>
            <input
              data-testid="admin-email-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white nb-border rounded-xl px-4 py-2.5 font-body focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-1">
              Password
            </label>
            <input
              data-testid="admin-password-input"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white nb-border rounded-xl px-4 py-2.5 font-body focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div
              data-testid="admin-login-error"
              className="bg-red-100 nb-border rounded-xl px-3 py-2 text-sm text-red-800 font-medium flex items-start gap-2"
            >
              <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={2.5} />
              <span>{error}</span>
            </div>
          )}

          <button
            data-testid="admin-login-submit"
            type="submit"
            disabled={busy}
            className="w-full inline-flex items-center justify-center gap-2 bg-black text-white font-heading font-bold px-5 py-2.5 rounded-xl nb-border nb-shadow nb-hover disabled:opacity-60"
          >
            {busy && <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2.5} />}
            Sign In
          </button>
        </form>

        <p className="mt-5 text-xs text-zinc-500 text-center">
          Create the admin user in your Firebase project's Authentication
          console (Email/Password provider).
        </p>
      </div>
    </div>
  );
}
