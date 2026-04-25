import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "@/pages/Home";
import Quiz from "@/pages/Quiz";
import Results from "@/pages/Results";
import History from "@/pages/History";
import AdminLogin from "@/pages/AdminLogin";
import AdminQuestions from "@/pages/AdminQuestions";
import { applyTheme, getInitialTheme } from "@/lib/theme";

function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-6">
      <div className="bg-white nb-border rounded-2xl p-8 nb-shadow text-center max-w-md">
        <h1 className="font-heading font-black text-3xl">404</h1>
        <p className="mt-2 text-zinc-700">Yeh page nahi mila.</p>
        <a
          href={import.meta.env.BASE_URL}
          className="inline-block mt-5 bg-black text-white font-heading font-bold px-5 py-2 rounded-xl nb-border nb-shadow nb-hover"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    applyTheme(getInitialTheme());
  }, []);

  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/quiz/:code" component={Quiz} />
        <Route path="/results" component={Results} />
        <Route path="/history" component={History} />
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin" component={AdminQuestions} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

export default App;
