import { useLocation } from "wouter";
import {
  ArrowRight,
  Clock,
  FileText,
  Trophy,
  Sparkles,
  Code2,
  Cpu,
  Globe,
  Wrench,
  Zap,
  Target,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useLang } from "@/lib/lang";
import { getSubjects, getMockInfo } from "@/lib/quiz";

const SUBJECT_VISUALS: Record<string, { bg: string; Icon: typeof Wrench; emoji: string }> = {
  M1: { bg: "bg-m1", Icon: Wrench, emoji: "IT" },
  M2: { bg: "bg-m2", Icon: Globe, emoji: "WEB" },
  M3: { bg: "bg-m3", Icon: Code2, emoji: "PY" },
  M4: { bg: "bg-m4", Icon: Cpu, emoji: "IoT" },
};

export default function Home() {
  const [, navigate] = useLocation();
  const { isHi } = useLang();
  const subjects = getSubjects();
  const mock = getMockInfo();

  return (
    <div data-testid="home-page" className="min-h-screen bg-[#FDFBF7]">
      <Navbar />

      {/* HERO */}
      <div
  style={{
    background: "#0b1221",
    padding: "40px 20px",
    borderBottom: "1px solid #1e293b",
    overflow: "hidden",
    position: "relative",
  }}
>
  <div
    style={{
      maxWidth: 1200,
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 40,
    }}
  >

    {/* LEFT CONTENT */}
    <div style={{ flex: 1, minWidth: 280 }}>
      <div
        style={{
          display: "inline-block",
          background: "rgba(250,204,21,0.12)",
          border: "1px solid rgba(250,204,21,0.35)",
          color: "#facc15",
          padding: "8px 14px",
          borderRadius: 999,
          fontSize: 12,
          fontWeight: 700,
          marginBottom: 18,
        }}
      >
        🚀 NIELIT O Level Preparation
      </div>

      <h1
        style={{
          color: "white",
          fontSize: "clamp(34px,7vw,64px)",
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: 18,
        }}
      >
        Crack O Level Exams <br />
        like a <span style={{ color: "#facc15" }}>Pro</span>
      </h1>

      <p
        style={{
          color: "#cbd5e1",
          fontSize: 16,
          lineHeight: 1.7,
          marginBottom: 30,
          maxWidth: 540,
        }}
      >
        MCQs, PYQs, mock tests and instant results — everything in one premium learning platform.
      </p>

      <div
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        <button
          style={{
            background: "#facc15",
            color: "#000",
            border: "none",
            padding: "14px 26px",
            borderRadius: 14,
            fontWeight: 800,
            fontSize: 16,
            cursor: "pointer",
            boxShadow: "0 0 30px rgba(250,204,21,0.25)",
          }}
        >
          Start Mock Test →
        </button>

        <button
          style={{
            background: "transparent",
            color: "white",
            border: "1px solid #334155",
            padding: "14px 26px",
            borderRadius: 14,
            fontWeight: 700,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Browse Subjects
        </button>
      </div>
    </div>


    {/* RIGHT PHONE MOCKUP */}
    <div
      style={{
        flex: 1,
        minWidth: 280,
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          background: "rgba(250,204,21,0.18)",
          filter: "blur(80px)",
          borderRadius: "50%",
          top: 40,
        }}
      />

      {/* Phone */}
      <div
        style={{
          width: 270,
          background: "#111827",
          border: "2px solid #1e293b",
          borderRadius: 36,
          padding: 18,
          position: "relative",
          zIndex: 2,
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
        }}
      >

        {/* Notch */}
        <div
          style={{
            width: 100,
            height: 18,
            background: "#000",
            borderRadius: 999,
            margin: "0 auto 20px",
          }}
        />

        {/* Screen */}
        <div
          style={{
            background: "#0f172a",
            borderRadius: 24,
            padding: 20,
            textAlign: "center",
          }}
        >
          <div style={{ color: "#94a3b8", fontSize: 13 }}>
            Your Progress
          </div>

          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              border: "10px solid rgba(250,204,21,0.2)",
              borderTop: "10px solid #facc15",
              margin: "22px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: 28,
                fontWeight: 900,
              }}
            >
              85%
            </span>
            <span
              style={{
                color: "#94a3b8",
                fontSize: 12,
              }}
            >
              Score
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 10,
              color: "#cbd5e1",
              fontSize: 14,
            }}
          >
            <span>Correct</span>
            <span style={{ color: "#22c55e", fontWeight: 700 }}>42</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 10,
              color: "#cbd5e1",
              fontSize: 14,
            }}
          >
            <span>Incorrect</span>
            <span style={{ color: "#ef4444", fontWeight: 700 }}>8</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 24,
              color: "#cbd5e1",
              fontSize: 14,
            }}
          >
            <span>Skipped</span>
            <span style={{ color: "#94a3b8", fontWeight: 700 }}>10</span>
          </div>

          <button
            style={{
              width: "100%",
              background: "#facc15",
              color: "#000",
              border: "none",
              borderRadius: 14,
              padding: "14px",
              fontWeight: 800,
              cursor: "pointer",
              fontSize: 15,
            }}
          >
            View Result
          </button>
        </div>
      </div>


      {/* Floating Cards */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 0,
          background: "rgba(17,24,39,0.9)",
          border: "1px solid #334155",
          padding: 14,
          borderRadius: 16,
          color: "#facc15",
          fontSize: 22,
          zIndex: 3,
          backdropFilter: "blur(10px)",
        }}
      >
        🏆
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 10,
          background: "rgba(17,24,39,0.9)",
          border: "1px solid #334155",
          padding: 14,
          borderRadius: 16,
          color: "#facc15",
          fontSize: 22,
          zIndex: 3,
          backdropFilter: "blur(10px)",
        }}
      >
        ⏱️
      </div>
    </div>
  </div>
</div>
      
            
      {/* SUBJECTS */}
      <section
        id="subjects"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-10 scroll-mt-20"
      >
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-600">
              Pick your paper
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight mt-1">
              Subject-wise Quizzes
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 bg-white nb-border rounded-full px-4 py-2 nb-shadow-sm">
            <Clock className="w-4 h-4" strokeWidth={2.5} />
            <span className="font-heading font-bold text-sm">
              20 Qs / 20 min each
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {subjects.map((s, i) => {
            const visual = SUBJECT_VISUALS[s.code] || SUBJECT_VISUALS.M1;
            const Icon = visual.Icon;
            return (
              <button
                key={s.code}
                data-testid={`subject-card-${s.code}`}
                onClick={() => navigate(`/quiz/${s.code}`)}
                className={`text-left ${visual.bg} nb-border rounded-2xl p-6 nb-shadow-lg nb-hover-lg animate-slide-up group`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-14 h-14 bg-white nb-border rounded-xl flex items-center justify-center nb-shadow-sm">
                    <Icon className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                  <div className="text-right">
                    <div className="bg-white nb-border rounded-lg px-2 py-1 text-[10px] font-heading font-black tracking-widest">
                      {visual.emoji}
                    </div>
                  </div>
                </div>

                <h3 className="font-heading font-black text-xl sm:text-2xl mt-5 leading-tight">
                  {isHi && s.name_hi ? s.name_hi : s.name}
                </h3>
                <p className="text-sm font-medium text-zinc-800 mt-2">
                  {isHi && s.desc_hi ? s.desc_hi : s.desc}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 bg-white nb-border rounded-full px-3 py-1 text-xs font-bold">
                      <FileText className="w-3.5 h-3.5" strokeWidth={2.5} />
                      {s.num_questions} Qs
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white nb-border rounded-full px-3 py-1 text-xs font-bold">
                      <Clock className="w-3.5 h-3.5" strokeWidth={2.5} />
                      {s.duration_min} min
                    </span>
                  </div>
                  <div className="w-10 h-10 bg-black text-white rounded-full nb-border flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>
      {/* BLOG PREVIEW */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

  <div className="flex items-end justify-between mb-8">
    <div>
      <div className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
        Latest Updates
      </div>

      <h2 className="font-heading font-black text-3xl tracking-tight">
        Blog & Notes
      </h2>
    </div>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    {/* M1 */}
    <div
      onClick={() => navigate("/blog/m1-important-mcqs")}
      className="bg-white border-2 border-black rounded-2xl p-5 nb-shadow-lg cursor-pointer hover:scale-[1.02] transition-all"
    >
      <div className="relative mb-4">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
          alt="M1"
          className="w-full h-32 object-cover rounded-xl"
        />

        
      </div>

      <h3 className="font-heading font-black text-xl">
        M1 IT Tools Important MCQs
      </h3>

      <p className="mt-2 text-sm text-zinc-600">
        Most important questions for O Level M1 exam.
      </p>

      <button className="mt-4 font-bold underline">
        Read More →
      </button>
    </div>

    {/* M3 */}
<div
  onClick={() => navigate("/blog/m3-python-questions")}
  className="bg-white border-2 border-black rounded-2xl p-5 nb-shadow-lg cursor-pointer hover:scale-[1.02] transition-all"
>
  <div className="relative mb-4">
    <img
      src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"
      alt="Python"
      className="w-full h-32 object-cover rounded-xl"
    />

    
  </div>

  <h3 className="font-heading font-black text-xl">
    Top 50 M3 Python Questions
  </h3>

  <p className="mt-2 text-sm text-zinc-600">
    Important MCQs and answers for O Level Python exam.
  </p>

  <button className="mt-4 font-bold underline">
    Read More →
  </button>
</div>

    
    {/* M2 */}
<div
  onClick={() => navigate("/blog/m2-web-notes")}
  className="bg-white border-2 border-black rounded-2xl p-5 nb-shadow-lg cursor-pointer hover:scale-[1.02] transition-all"
>
  <div className="relative mb-4">
    <img
      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
      alt="Web"
      className="w-full h-32 object-cover rounded-xl"
    />

    
  </div>

  <h3 className="font-heading font-black text-xl">
    M2 Web Designing Notes
  </h3>

  <p className="mt-2 text-sm text-zinc-600">
    Quick revision notes for HTML, CSS and JavaScript.
  </p>

  <button className="mt-4 font-bold underline">
    Read More →
  </button>
</div>
    
      

    
    {/* M4 */}
<div
  onClick={() => navigate("/blog/m4-iot-mcqs")}
  className="bg-white border-2 border-black rounded-2xl p-5 nb-shadow-lg cursor-pointer hover:scale-[1.02] transition-all"
>
  <div className="relative mb-4">
    <img
      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
      alt="IoT"
      className="w-full h-32 object-cover rounded-xl"
    />

    
  </div>

  <h3 className="font-heading font-black text-xl">
    M4 IoT Important MCQs
  </h3>

  <p className="mt-2 text-sm text-zinc-600">
    Most repeated questions for O Level IoT paper.
  </p>

  <button className="mt-4 font-bold underline">
    Read More →
  </button>
</div>
</div>
    

  <div className="flex justify-center mt-8">
    <button className="bg-black text-white px-6 py-3 rounded-2xl font-bold border-2 border-black hover:bg-yellow-300 hover:text-black transition-all">
      View All Posts
    </button>
  </div>

</section>
      

      {/* MOCK TEST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div
          data-testid="mock-test-banner"
          className="relative overflow-hidden bg-black text-white nb-border rounded-3xl p-8 sm:p-12 nb-shadow-lg"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, #ffffff 0.5px, transparent 1px), radial-gradient(circle at 80% 50%, #ffffff 0.5px, transparent 1px)",
              backgroundSize: "40px 40px, 60px 60px",
            }}
          />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-300 text-black nb-border rounded-full px-3 py-1 mb-4">
                <Zap className="w-4 h-4" strokeWidth={2.5} />
                <span className="font-heading font-black text-xs uppercase tracking-widest">
                  Ultimate Challenge
                </span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
                Full Mock Test
              </h2>
              <p className="mt-4 text-white/80 text-base sm:text-lg max-w-lg">
                Sabhi subjects se mixed questions. Real exam feel. Timer on.
                Tayyar ho? Let's see your true level!
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="bg-white/10 border-2 border-white/30 rounded-xl px-4 py-2 font-heading font-bold">
                  {mock.num_questions} Questions
                </div>
                <div className="bg-white/10 border-2 border-white/30 rounded-xl px-4 py-2 font-heading font-bold">
                  {mock.duration_min} Minutes
                </div>
                <div className="bg-white/10 border-2 border-white/30 rounded-xl px-4 py-2 font-heading font-bold">
                  Mixed Subjects
                </div>
              </div>

              <button
                data-testid="mock-test-start-btn"
                onClick={() => navigate("/quiz/MOCK")}
                className="mt-8 inline-flex items-center gap-2 bg-yellow-300 text-black font-heading font-black px-6 py-3 rounded-xl border-2 border-yellow-300 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.6)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                Shuru karein
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </div>

            <div className="relative">
              <div className="bg-white/10 border-2 border-white/40 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-300 text-black nb-border rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-lg">
                      Test Strategy
                    </div>
                    <div className="text-sm text-white/70">
                      Quick tips for best results
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex gap-2">
                    <span className="text-yellow-300 font-black">→</span>
                    Easy questions pehle attempt karo
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-300 font-black">→</span>
                    Negative marking nahi hai — guess karna OK
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-300 font-black">→</span>
                    Timer watch karte raho, rush mat karo
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-300 font-black">→</span>
                    Submit ke baad detailed review milega
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 py-10 text-center border-t mt-10">
  <div className="flex justify-center gap-4 flex-wrap mb-4">
    <a href="/about" className="text-sm text-zinc-700 hover:underline">
      About
    </a>

    <a href="/privacy" className="text-sm text-zinc-700 hover:underline">
      Privacy Policy
    </a>

    <a href="/contact" className="text-sm text-zinc-700 hover:underline">
      Contact
    </a>
  </div>

  <p className="text-sm text-zinc-600 font-body">
    Built with <span className="text-red-500">♥</span> for O Level aspirants.
    All rights reserved.
  </p>
</footer>
    </div>
  );
}
