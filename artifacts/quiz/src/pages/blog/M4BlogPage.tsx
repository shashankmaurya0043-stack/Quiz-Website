import { useLocation } from "wouter";
import { ArrowLeft, Trophy, FileText } from "lucide-react";

export default function M1BlogPage() {
  const [, navigate] = useLocation();

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
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="M1"
            className="w-full h-72 object-cover"
          />

          <div className="p-8">

            <div className="inline-flex items-center gap-2 bg-yellow-300 border-2 border-black px-4 py-2 rounded-full font-bold text-sm">
              <Trophy className="w-4 h-4" />
              O Level M4 Preparation
            </div>

            <h1 className="text-4xl font-black mt-5 leading-tight">
              M4 Internet of Things Important MCQs
            </h1>

            <p className="mt-5 text-zinc-700 text-lg leading-relaxed">
              Yeh important MCQs previous year exam pattern aur repeated
              concepts par based hain. Daily practice se aap M4 paper me
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
                onClick={() => navigate("/quiz/M4")}
                className="bg-black text-white px-6 py-3 rounded-2xl font-bold border-2 border-black hover:bg-yellow-300 hover:text-black transition-all"
              >
                Start M4 Quiz
              </button>

              <button
                className="bg-yellow-300 text-black px-6 py-3 rounded-2xl font-bold border-2 border-black"
              >
                Read Important Questions
              </button>

            </div>

            <div className="mt-14">

              <div className="flex items-center gap-3 mb-8">
                <FileText className="w-8 h-8" />

                <h2 className="text-4xl font-black">
                  Previous Year Questions
                </h2>
              </div>

              <div className="space-y-5">

                {/* 2025 */}

                <div
                  onClick={() => navigate("/blog/m4-2025-pyq")}
                  className="cursor-pointer bg-black text-white border-2 border-black rounded-3xl p-6 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(234,179,8,1)] transition-all"
                >
                  <div className="flex items-start gap-5">

                    <div className="min-w-[55px] h-[55px] rounded-2xl bg-yellow-300 text-black flex items-center justify-center font-black text-xl">
                      25
                    </div>

                    <div className="flex-1">

                      <div className="flex items-center justify-between gap-4 flex-wrap">

                        <h3 className="font-black text-2xl">
                          📘 M4 Previous Year Questions 2025
                        </h3>

                        <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-sm font-black">
                          Latest
                        </span>

                      </div>

                      <p className="text-zinc-300 mt-3 text-base">
                        Latest O Level exam questions with important repeated concepts.
                      </p>

                    </div>

                  </div>
                </div>

                {/* 2024 */}

                <div
                  onClick={() => navigate("/blog/m4-2024-pyq")}
                  className="cursor-pointer bg-white border-2 border-black rounded-3xl p-6 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <div className="flex items-start gap-5">

                    <div className="min-w-[55px] h-[55px] rounded-2xl bg-black text-white flex items-center justify-center font-black text-xl">
                      24
                    </div>

                    <div className="flex-1">

                      <h3 className="font-black text-2xl">
                        📗 M4 Previous Year Questions 2024
                      </h3>

                      <p className="text-zinc-600 mt-3 text-base">
                        Important PYQs asked in previous O Level examinations.
                      </p>

                    </div>

                  </div>
                </div>

                {/* Repeated */}

                <div
                  onClick={() => navigate("/blog/m4-repeated-questions")}
                  className="cursor-pointer bg-pink-300 border-2 border-black rounded-3xl p-6 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <div className="flex items-start gap-5">

                    <div className="min-w-[55px] h-[55px] rounded-2xl bg-black text-white flex items-center justify-center font-black text-xl">
                      🔥
                    </div>

                    <div className="flex-1">

                      <h3 className="font-black text-2xl">
                        M4 Most Repeated Questions
                      </h3>

                      <p className="text-zinc-800 mt-3 text-base">
                        Most repeated MCQs from previous year O Level papers.
                      </p>

                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
              
    

  
