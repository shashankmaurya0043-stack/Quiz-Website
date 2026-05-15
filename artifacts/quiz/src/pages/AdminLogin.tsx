import { useEffect } from "react";
import { useLocation } from "wouter";
import { Loader2, ShieldCheck, LogIn, ArrowLeft } from "lucide-react";
import { useAuth } from "@workspace/replit-auth-web";

export default function AdminLogin() {
  const [, navigate] = useLocation();
  const { isLoading, isAuthenticated, isAdmin, login, user } = useAuth();

  useEffect(() => {
    if (!isLoading && isAuthenticated && isAdmin) {
      navigate("/shashank-secure-admin-2026");
    }
  }, [isLoading, isAuthenticated, isAdmin, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" strokeWidth={2.5} />
      </div>
    );
  }

  const isSignedInButNotAdmin = isAuthenticated && !isAdmin;

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

        <p className="mt-5 text-sm text-zinc-700 leading-relaxed">
          Sign in to manage the question bank. Only authorised accounts can
          access the admin console.
        </p>

        {isSignedInButNotAdmin && (
          <div
            data-testid="admin-not-allowed"
            className="mt-4 bg-yellow-100 nb-border rounded-xl px-3 py-2.5 text-sm text-yellow-900"
          >
            <div className="font-bold">Signed in, but not an admin</div>
            <div className="mt-1">
              Your account ({user?.email ?? "unknown"}) doesn&apos;t have admin
              access. Ask the project owner to add your email to{" "}
              <code className="font-mono text-xs">ADMIN_EMAILS</code>.
            </div>
          </div>
        )}

        <button
          data-testid="admin-login-submit"
          onClick={() => navigate("/shashank-secure-admin-2026")}
          className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-black text-white font-heading font-bold px-5 py-3 rounded-xl nb-border nb-shadow nb-hover"
        >
          <LogIn className="w-4 h-4" strokeWidth={2.5} />
          {isAuthenticated ? "Switch account" : "Sign In"}
        </button>

        <button
          onClick={() => navigate("/")}
          className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-white text-zinc-700 font-heading font-bold px-5 py-2 rounded-xl nb-border nb-shadow-sm nb-hover"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
          Back to Home
        </button>
      </div>
    </div>
  );
}
