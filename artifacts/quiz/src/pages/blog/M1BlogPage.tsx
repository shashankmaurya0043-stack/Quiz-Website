import { useLocation } from "wouter";
import { ArrowLeft, FileText, Trophy } from "lucide-react";

export default function M1BlogPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-[#FDFBF7] px-4 py-10">
      <div className="max-w-5xl mx-auto">

        <button
          onClick={() => navigate("/")}
          className="mb-6 flex items-center gap-2 bg-white border-2 border-black px-4 py-2 rounded-xl font-bold hover:bg-black hover:text-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
            alt="M1"
            className="w-full h-72 object-cover"
          />

          <div className="p-8">

            <div className="inline-flex items-center gap-2 bg-yellow-300 border-2 border-black px-4 py-2 rounded-full font-bold text-sm">
              <Trophy className="w-4 h-4" />
              O Level M1 Important Questions
            </div>

            <h1 className="text-4xl font-black mt-5 leading-tight">
              M1 IT Tools & Network Basics Important MCQs
            </h1>

            <p className="mt-5 text-zinc-700 text-lg leading-relaxed">
              Yeh selected MCQs previous year papers aur important exam concepts
              par based hain. In questions ko prepare karke aap O Level M1 exam
              me achha score kar sakte ho.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-8">

              <div className="bg-[#FDFBF7] border-2 border-black rounded-2xl p-5">
                <div className="text-3xl font-black">100+</div>
                <div className="text-zinc-600 font-medium mt-1">
