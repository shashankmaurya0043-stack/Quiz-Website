import { useLocation } from "wouter";
import { ArrowLeft, Trophy, FileText, Clock } from "lucide-react";

export default function M1BlogPage() {
  const [, navigate] = useLocation();

  const questions = [
    "Presentation file created in LibreOffice Impress is saved with extension .odp",
    "OSS means Open Source Software",
    "Shortcut for Find and Replace is CTRL + H",
    "Footnote is placed at bottom of each page",
    "DHCP provides dynamic IP addressing",
    "Twitter post length can be 280 characters",
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7]">

      <div className="max-w-6xl mx-auto px-4 py-10">

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-white border-2 border-black px-5 py-2 rounded-xl font-bold hover:bg-black hover:text-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="mt-8 bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
            alt="M1"
            className="w-full h-72 object-cover"
          />

          <div className="p-8">

            <div className="inline-flex items-center gap-2 bg-yellow-300 border-2 border-black px-4 py-2 rounded-full font-bold text-sm">
              <Trophy className="w-4 h-4" />
              O Level M1 Preparation
            </div>

            <h1 className="text-4xl font-black mt-5 leading-tight">
              M1 IT Tools & Network Basics Important MCQs
            </h1>

            <p className="mt-5 text-zinc-700 text-lg leading-relaxed">
              Yeh important MCQs previous year exam pattern aur repeated
              concepts par based hain. Daily practice se aap M1 paper me
              excellent score la sakte ho.
            </p>

            <div className="grid md:grid-cols-3 gap-5 mt-8">

              <div className="bg-[#FDFBF7] border-2 border-black rounded-2xl p-5">
                <div className="text-3xl font-black">100+</div>
                <div className="text-zinc-600 mt-1 font-medium">
                  Important Questions
                </div>
              </div>

              <div className="bg-[#FDFBF7] border-2 border-black rounded-2xl p-5">
                <div className="text-3xl font-black">PYQ</div>
                <div className="text-zinc-600 mt-1 font-medium">
                  Previous Year Based
                </div>
              </div>

              <div className="bg-[#FDFBF7] border-2 border-black rounded-2xl p-5">
                <div className="text-3xl font-black">Free</div>
                <div className="text-zinc-600 mt-1 font-medium">
                  Practice Material
                </div>
              </div>

            </div>

            <div className="flex flex-wrap gap-4 mt-10">

              <button
                onClick={() => navigate("/quiz/M1")}
                className="bg-black text-white px-6 py-3 rounded-2xl font-bold border-2 border-black hover:bg-yellow-300 hover:text-black transition-all"
              >
                Start M1 Quiz
              </button>

              <button
                className="bg-yellow-300 text-black px-6 py-3 rounded-2xl font-bold border-2 border-black"
              >
                Read Important Questions
              </button>

            </div>
            <div className="mt-14">

  <div className="flex items-center gap-3 mb-6">
    <FileText className="w-7 h-7" />

    <h2 className="text-3xl font-black">
      Previous Year Questions
    </h2>
  </div>

  <div className="space-y-4">

    {/* 2025 PYQ */}

    <div
      onClick={() => navigate("/blog/m1-2025-pyq")}
      className="cursor-pointer bg-[#FDFBF7] border-2 border-black rounded-2xl p-5 hover:scale-[1.01] transition-all"
    >
      <div className="flex items-start gap-4">

        <div className="min-w-[45px] h-[45px] rounded-full bg-black text-white flex items-center justify-center font-black">
          1
        </div>

        <div>
          <p className="font-bold text-lg leading-relaxed">
            📘 M1 Previous Year Questions 2025
          </p>

          <div className="flex items-center gap-2 mt-3 text-zinc-600">
            <Clock className="w-4 h-4" />
            Latest O Level Exam Questions
          </div>
        </div>

      </div>
    </div>

    {/* 2024 PYQ */}

    <div
      onClick={() => navigate("/blog/m1-2024-pyq")}
      className="cursor-pointer bg-[#FDFBF7] border-2 border-black rounded-2xl p-5 hover:scale-[1.01] transition-all"
    >
      <div className="flex items-start gap-4">

        <div className="min-w-[45px] h-[45px] rounded-full bg-black text-white flex items-center justify-center font-black">
          2
        </div>

        <div>
          <p className="font-bold text-lg leading-relaxed">
            📗 M1 Previous Year Questions 2024
          </p>

          <div className="flex items-center gap-2 mt-3 text-zinc-600">
            <Clock className="w-4 h-4" />
            Important PYQ Practice Set
          </div>
        </div>

      </div>
    </div>

    {/* Repeated Questions */}

    <div
      onClick={() => navigate("/blog/m1-repeated-questions")}
      className="cursor-pointer bg-[#FDFBF7] border-2 border-black rounded-2xl p-5 hover:scale-[1.01] transition-all"
    >
      <div className="flex items-start gap-4">

        <div className="min-w-[45px] h-[45px] rounded-full bg-black text-white flex items-center justify-center font-black">
          3
        </div>

        <div>
          <p className="font-bold text-lg leading-relaxed">
            🔥 M1 Repeated Questions
          </p>

          <div className="flex items-center gap-2 mt-3 text-zinc-600">
            <Clock className="w-4 h-4" />
            Most Repeated Questions in Exams
          </div>
        </div>

      </div>
    </div>

  </div>

</div>
