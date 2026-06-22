import React, { useState, useEffect, useCallback } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    question: "In HTML, what is the use of the <a> tag? / एचटीएमएल में <a> टैग का प्रयोग किस लिए किया जाता है?",
    options: ["For creating lists", "For creating addresses", "For options", "For creating links"],
    answer: "For creating links",
  },
  {
    question: "Which of the following is not a new element in HTML5? / निम्न में से कौन सा एक HTML5 का नया एलिमेंट नहीं है?",
    options: ["nav", "audio", "article", "frameset"],
    answer: "frameset",
  },
  {
    question: "The ___ passes the user-provided information to the specified program. / वेब सर्वर किसका कार्य करता है?",
    options: ["User", "Browser", "Programmer", "Web server"],
    answer: "Web server",
  },
  {
    question: "Which of the following is not a photo editor? / फोटो एडिटिंग सॉफ्टवेयर की सूची में कौन सा शामिल नहीं है?",
    options: ["Luminar 4", "Adobe Reader", "Adobe Photoshop 7.0", "Capture One Pro"],
    answer: "Adobe Reader",
  },
  {
    question: "What HTML element is used to bold a text? / टेक्स्ट को बोल्ड करने के लिए HTML में कौन सा एलिमेंट प्रयोग होता है?",
    options: ["<i>", "<em>", "<bold>", "<b>"],
    answer: "<b>",
  },
  {
    question: "The <td> tag in HTML is used for: / <td> टैग HTML में किस लिए प्रयुक्त होता है?",
    options: ["Table heading", "Table row", "Row heading", "Table records"],
    answer: "Table records",
  },
  {
    question: "What is the function of Ctrl + Shift + T in Notepad++? / नोटपैड++ में Ctrl + Shift + T शॉर्टकट का क्या कार्य है?",
    options: ["Open all recent files", "Empty recent files list", "Restore recently closed file", "None"],
    answer: "Restore recently closed file",
  },
  {
    question: "What is the extension of an external CSS file? / एक्सटर्नल CSS फाइल की एक्सटेंशन क्या होती है?",
    options: [".scss", ".sass", ".html", ".css"],
    answer: ".css",
  },
  {
    question: "What is the full form of HTTPS? / HTTPS का पूर्ण रूप क्या है?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Text and Links Markup Language", "None of these"],
    answer: "None of these",
  },
  {
    question: "Which is the smallest heading tag in HTML? / HTML में सबसे छोटा heading tag कौन सा होता है?",
    options: ["<h1>", "<h4>", "<h6>", "<h9>"],
    answer: "<h6>",
  },
  {
    question: "Which selector selects all paragraph elements with lang='fr'?",
    options: ["p[lang='fr']", "P(lang~='fr')", "p(Lnag)", "P[lang] = 'fr'"],
    answer: "p[lang='fr']",
  },
  {
    question: "How is the text inside <strong> tag displayed? / HTML में <strong> टैग के भीतर टेक्स्ट कैसा दिखाई देता है?",
    options: ["Indented", "Italic", "List", "Bold"],
    answer: "Bold",
  },
  {
    question: "Which directive links and defines an AngularJS application in HTML?",
    options: ["ng-bind", "ng-app", "MVC", "ng-model"],
    answer: "ng-app",
  },
  {
    question: "How to define a hyperlink in HTML to open in a new tab?",
    options: ["target='_self'", "target='_parent'", "target='_top'", "target='_blank'"],
    answer: "target='_blank'",
  },
  {
    question: "Which protocol is used for remote login? / रिमोट लॉगिन के लिए किस प्रोटोकॉल का उपयोग होता है?",
    options: ["FTP", "SMTP", "NTP", "Telnet"],
    answer: "Telnet",
  },
  {
    question: "What is HTML? / HTML क्या है?",
    options: ["Marking Language", "Marked Language", "Markup Language", "Markedup Language"],
    answer: "Markup Language",
  },
  {
    question: "Which is the correct HTML code to set a background color?",
    options: ["<body bgcolor='yellow'>", "<body style='background-color:yellow'>", "<background>yellow</background>", "Both A and B"],
    answer: "Both A and B",
  },
  {
    question: "What is the shortcut to close multiple open sheets at once in Notepad++?",
    options: ["Ctrl + W", "Alt + F4", "Ctrl + Shift + W", "All of the above"],
    answer: "Ctrl + Shift + W",
  },
  {
    question: "Which company renamed LiveScript to JavaScript?",
    options: ["Netscape", "Cubix", "W3Schools.com", "United Infotec"],
    answer: "Netscape",
  },
  {
    question: "What is the latest version of Adobe Photoshop? / Adobe Photoshop का नवीनतम संस्करण क्या है?",
    options: ["CS6", "CS", "CC", "CS5"],
    answer: "CC",
  },
  {
    question: "Apart from <b> tag, which tag makes text bold? / <b> टैग के अलावा कौन सा टैग बोल्ड करता है?",
    options: ["<strong>", "<em>", "<bold>", "<i>"],
    answer: "<strong>",
  },
  {
    question: "The Internet is governed by: / इंटरनेट को कौन नियंत्रित करता है?",
    options: ["NIC", "I & B", "IETF", "None of above"],
    answer: "None of above",
  },
  {
    question: "What does SGML stand for? / SGML का पूर्ण रूप क्या है?",
    options: ["Standalone generalized markup", "Standalone Graphical markup", "Standard generalized markup language", "Standalone global makeup"],
    answer: "Standard generalized markup language",
  },
  {
    question: "Which pseudoclass is activated when mouse cursor moves over element?",
    options: ["mouse hover", "mouse over", "hover", "mouse move"],
    answer: "hover",
  },
  {
    question: "Which encryption algorithm is not present in Notepad++?",
    options: ["SHA-256", "MD5", "MD6", "Both (A) and (B)"],
    answer: "MD6",
  },
  {
    question: "Identify benefits provided by Photo Editing for Business. / फोटो एडिटिंग के क्या लाभ हैं?",
    options: ["Brand Building", "Better Sales", "Robust Social Media", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which statement is not true about responsive tables in W3.Table?",
    options: ["Scroll horizontally on small screens", "No difference on large screens", "w3-responsive creates responsive", "w3-table class creates responsive table"],
    answer: "w3-table class creates responsive table",
  },
  {
    question: "How are tones created in images? / इमेज में टोन कैसे बनाए जाते हैं?",
    options: ["Grey is added", "Black is added", "White is added", "None"],
    answer: "When grey is added to a color",
  },
  {
    question: "What is true about Conflicting Styles? / कॉन्फ़्लिक्टिंग स्टाइल्स के बारे में क्या सत्य है?",
    options: ["User agent precedence", "Author conflict", "Combination depends", "Styles 'cascade,' or flow together."],
    answer: "Styles 'cascade,' or flow together.",
  },
  {
    question: "Identify the basic list class in W3.css. / W3.css में बेसिक लिस्ट कौन सी है?",
    options: ["w3-ol", "w3-border", "w3-center", "all of the above"],
    answer: "w3-ol",
  },
  {
    question: "Identify the wrong statement about 'Cookies'. / 'कुकीज़' के बारे में गलत कथन पहचानें।",
    options: ["Programs in background", "Helpful in portals", "Violate privacy", "Max 4 KB"],
    answer: "Cookies are programs which run in background",
  },
  {
    question: "Which statement is true about the <iframe> tag?",
    options: ["Embed another document", "None", "Its inline frame", "Both (A) and (C) are true"],
    answer: "Both (A) and (C) are true",
  },
  {
    question: "What is not correct about the Style class? / Style class के बारे में क्या गलत है?",
    options: ["Preceded by period", "Applied to any element", "Specific types only", "Preceded by an underscore"],
    answer: "Style-class declarations are preceded by an underscore",
  },
  {
    question: "Identify the default font used in W3.Font. / W3.Font का डिफॉल्ट फॉन्ट क्या है?",
    options: ["Times New Roman", "Arial", "Verdana", "None"],
    answer: "Verdana",
  },
  {
    question: "An element can be accessed in JavaScript using: / JS में एलिमेंट एक्सेस करने के तरीके:",
    options: ["getElementsById", "getElementsByClassName", "getElementsByName", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which attribute binds value of HTML controls to application data?",
    options: ["ng-app", "ng-init", "ng-controller", "ng-model"],
    answer: "ng-model",
  },
  {
    question: "Which encoding standards is not present in Notepad++?",
    options: ["UTF-8 BOM", "ANSI", "UTF-8", "UTF-16"],
    answer: "UTF-16",
  },
  {
    question: "Directive to initialize an Angular JS application: / Angular JS को शुरू करने वाला निर्देश:",
    options: ["ng-init", "none", "ng-model", "ng-app"],
    answer: "ng-app",
  },
  {
    question: "Browsers usually underline inserted text in which tag? / रेखांकित करने वाला टैग:",
    options: ["<u>", "<ins>", "<ul>", "Both A and B"],
    answer: "<ins>",
  },
  {
    question: "Which can be used to call a JavaScript Code Snippet? / JS कोड को कॉल करने का तरीका:",
    options: ["Triggering Event", "Preprocessor", "RMI", "Function/Method"],
    answer: "Function/Method",
  },
  {
    question: "Which object is the main entry point to all client-side JavaScript features?",
    options: ["Location", "Standard", "Position", "Window"],
    answer: "Window",
  },
  {
    question: "What is the basic difference between JavaScript and Java? / JS और Java में क्या अंतर है?",
    options: ["Variables specific", "No difference", "Functions as fields", "No hard distinction between methods and fields"],
    answer: "No hard distinction between methods and fields",
  },
  {
    question: "Where is Client-side JavaScript code embedded within HTML?",
    options: ["javascript:code", "javascript:stack", "javascript:encoding", "javascript:protocol"],
    answer: "javascript:protocol",
  },
  {
    question: "JS program developed on Unix will work on Windows? / Unix पर बना JS विंडोज पर चलेगा?",
    options: ["Errors only", "Restricted to Unix", "Text only", "Will work perfectly well on Windows Machine"],
    answer: "Will work perfectly well on Windows Machine",
  },
  {
    question: "Which scoping type does JavaScript use? / JS किस प्रकार के स्कोपिंग का उपयोग करता है?",
    options: ["Segmental", "Lexical", "Sequential", "Literal"],
    answer: "Lexical",
  },
  {
    question: "Why event handlers is needed in JS? / JS में इवेंट हैंडलर क्यों चाहिए?",
    options: ["inner HTML", "Handling exceptions", "Alter behaviour of windows", "Server location"],
    answer: "Allows JS code to alter behaviour of windows",
  },
  {
    question: "Why JavaScript Engine is needed? / JS इंजन क्यों चाहिए?",
    options: ["Compiling", "Parsing", "Interpreting", "Both"],
    answer: "Interpreting",
  },
  {
    question: "Which of the following is not a framework? / कौन सा फ्रेमवर्क नहीं है?",
    options: ["JavaScript", "Cocoa JS", "JavaScript .NET", "jQuery"],
    answer: "JavaScript",
  },
  {
    question: "Which property is triggered in response to JSErrors?",
    options: ["onerror", "onmessage", "onexception", "onclick"],
    answer: "onerror",
  },
  {
    question: "<del> element browser display them as: / <del> टैग कैसा दिखता है?",
    options: ["Black", "Strikethrough", "Bold", "Red"],
    answer: "Strikethrough",
  },
  {
    question: "What is the task of DNS Name server? / DNS सर्वर का कार्य क्या है?",
    options: ["FTP address", "UDP address", "TCP address", "Translating domain names into a specific IP address"],
    answer: "Translating domain names into a specific IP address",
  },
  {
    question: "How to specify individual items in an ordered list? / OL में आइटम कैसे दर्शाते हैं?",
    options: ["LI", "None", "UL", "OL"],
    answer: "LI",
  },
  {
    question: "w3-container class adds how much padding? / w3-container कितनी पैडिंग जोड़ता है?",
    options: ["32px L/R", "16px L only", "32px R only", "16px left and right"],
    answer: "16px left and right",
  },
  {
    question: "Which is not a valid CSS type? / कौन सा CSS प्रकार मान्य नहीं है?",
    options: ["Outline", "Embedded", "Inline", "External"],
    answer: "Outline",
  },
  {
    question: "Which is not a main built-in search mechanism? / कौन सा सर्च मैकेनिज्म नहीं है?",
    options: ["Incremental", "Decremental Search", "dialog-free", "dialog-based"],
    answer: "Decremental Search",
  },
  {
    question: "Identify where a <section> element can be used. / <section> कहाँ उपयोग होता है?",
    options: ["Chapters", "Introduction", "News Item", "All the above"],
    answer: "All the above",
  },
  {
    question: "Shortcut keys for rotating canvas 90 Degree clockwise is _______",
    options: ["CTRL+Alt+Shift+10", "CTRL+Alt+Shift+F10", "CTRL+Shift+0", "CTRL+Alt+Shift+0"],
    answer: "CTRL+Alt+Shift+F10",
  },
  {
    question: "Identify the invalid image filter. / गलत इमेज फ़िल्टर पहचानें।",
    options: ["Plastic Wrap", "Liquify", "Solidify", "Motion Blur"],
    answer: "Solidify",
  },
  {
    question: "Which of the following statement is true for AngularJS?",
    options: ["Closed-source back-end", "Open-source backend", "Closed front-end", "Open-source front-end web framework"],
    answer: "Open-source front-end web framework",
  },
];
const useTimer = (initialTime: number, onEnd: () => void) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning && time > 0) {
      interval = setInterval(() => setTime((t) => t - 1), 1000);
    } else if (time === 0 && isRunning) {
      setIsRunning(false);
      onEnd();
    }
    return () => clearInterval(interval);
  }, [isRunning, time, onEnd]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = (t: number) => {
    setTime(t);
    setIsRunning(false);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return { time, formatTime: formatTime(time), start, pause, reset, isRunning };
};

type Screen = "home" | "quiz" | "result";

const M2PYQ2025: React.FC = () => {
  const TOTAL = questions.length;
  const DURATION = 60 * 60; // 60 Minutes

  const [screen, setScreen] = useState<Screen>("home");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<(string | null)[]>(Array(TOTAL).fill(null));
  const [showNav, setShowNav] = useState(false);

  const handleEnd = useCallback(() => {
    setScreen("result");
  }, []);

  const timer = useTimer(DURATION, handleEnd);

  const score = selected.reduce((acc, ans, i) => acc + (ans === questions[i].answer ? 1 : 0), 0);
  const attempted = selected.filter((a) => a !== null).length;
  const percentage = Math.round((score / TOTAL) * 100);

  const startQuiz = () => {
    setSelected(Array(TOTAL).fill(null));
    setCurrent(0);
    timer.reset(DURATION);
    timer.start();
    setScreen("quiz");
  };

  const selectOption = (opt: string) => {
    const copy = [...selected];
    copy[current] = opt;
    setSelected(copy);
  };

  const next = () => setCurrent((c) => Math.min(c + 1, TOTAL - 1));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const goTo = (i: number) => {
    setCurrent(i);
    setShowNav(false);
  };

  const submitQuiz = () => {
    timer.pause();
    setScreen("result");
  };
  if (screen === "home") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-8" style={{ backgroundColor: "#0f172a" }}>
        <div className="max-w-lg w-full rounded-3xl shadow-2xl p-6 sm:p-8 text-center space-y-5" style={{ backgroundColor: "#1e293b", border: "2px solid #facc15" }}>
          <div className="inline-block text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest" style={{ backgroundColor: "#facc15", color: "#0f172a" }}>O Level M2-R5</div>
          <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#facc15" }}>M2-R5 PYQ<br /><span style={{ color: "#ffffff" }}>Jan 2024</span></h1>
          <p style={{ color: "#d1d5db", fontSize: "14px" }}>{TOTAL} Questions • 60 Minutes • Instant Result</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[{ val: String(TOTAL), label: "Questions" }, { val: "60 min", label: "Duration" }, { val: "+1", label: "Correct" }, { val: "0", label: "Negative" }].map((item, idx) => (
              <div key={idx} className="rounded-xl p-4 bg-[#0f172a] border border-[#334155]">
                <p className="font-bold text-xl text-[#facc15]">{item.val}</p>
                <p style={{ color: "#9ca3af" }}>{item.label}</p>
              </div>
            ))}
          </div>
          <button onClick={startQuiz} className="w-full font-bold py-4 rounded-2xl text-lg bg-[#facc15] text-[#0f172a]">🚀 Attempt Mock Test</button>
          <button onClick={() => window.open("/pdfs/m2-jan-2025.pdf", "_blank")} className="block w-full font-bold py-3 rounded-2xl border-2 border-[#facc15] text-[#facc15] bg-transparent">📄 View PDF</button>
        </div>
      </div>
    );
  }

  if (screen === "result") {
    const getGrade = () => {
      if (percentage >= 90) return { label: "Excellent! 🏆", color: "#22c55e" };
      if (percentage >= 70) return { label: "Great Job! 🎯", color: "#facc15" };
      if (percentage >= 50) return { label: "Good Effort! 💪", color: "#f97316" };
      return { label: "Keep Practicing! 📚", color: "#ef4444" };
    };
    const grade = getGrade();
    return (
      <div className="min-h-screen px-4 py-6 bg-[#0f172a]">
        <div className="max-w-2xl mx-auto space-y-5">
          <div className="rounded-2xl p-6 sm:p-8 text-center space-y-4 bg-[#1e293b] border-2 border-[#facc15]">
            <h2 className="text-2xl font-bold text-white">Quiz Completed!</h2>
            <p className="text-3xl font-extrabold" style={{ color: grade.color }}>{grade.label}</p>
            <div className="relative w-36 h-36 mx-auto">
              <svg className="w-full h-full" viewBox="0 0 120 120" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="60" cy="60" r="52" fill="none" stroke="#334155" strokeWidth="10" />
                <circle cx="60" cy="60" r="52" fill="none" stroke="#facc15" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${(percentage / 100) * 327} 327`} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold text-[#facc15]">{percentage}%</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="p-3 bg-green-500/10 border border-green-500/40 rounded-xl text-green-500"><b>{score}</b><br/>Correct</div>
                <div className="p-3 bg-red-500/10 border border-red-500/40 rounded-xl text-red-500"><b>{attempted-score}</b><br/>Wrong</div>
                <div className="p-3 bg-gray-500/10 border border-gray-500/40 rounded-xl text-gray-400"><b>{TOTAL-attempted}</b><br/>Skip</div>
            </div>
          </div>
          <div className="rounded-2xl p-5 space-y-4 bg-[#1e293b] border border-[#334155]">
            <h3 className="text-lg font-bold text-[#facc15]">📋 Answer Review</h3>
            <div className="space-y-3 overflow-y-auto" style={{ maxHeight: "40vh" }}>
              {questions.map((q, i) => (
                <div key={i} className="p-3 rounded-xl bg-gray-800/30 border border-gray-700">
                  <p className="text-sm text-white"><span className="text-[#facc15]">Q{i+1}.</span> {q.question}</p>
                  <p className="text-xs text-green-500 mt-1">Ans: {q.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => setScreen("home")} className="w-full font-bold py-4 rounded-2xl bg-[#facc15] text-[#0f172a]">🏠 Home</button>
        </div>
      </div>
    );
  }
  const q = questions[current];
  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a]">
      <div className="sticky top-0 z-30 px-4 py-3 bg-[#1e293b] border-b border-[#334155] flex justify-between items-center">
          <button onClick={() => setShowNav(!showNav)} className="bg-[#facc15]/20 text-[#facc15] px-3 py-2 rounded-xl text-sm font-bold">Q{current + 1}/{TOTAL}</button>
          <div className="font-mono font-bold text-[#facc15] text-lg">⏳ {timer.formatTime}</div>
          <button onClick={submitQuiz} className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-bold">Finish</button>
      </div>
      <div className="flex-1 flex items-start justify-center px-4 py-6">
        <div className="max-w-3xl w-full space-y-6">
          <div className="rounded-2xl p-5 bg-[#1e293b] border border-[#334155] text-white text-lg">{q.question}</div>
          <div className="grid gap-3">
            {q.options.map((opt, idx) => (
              <button key={idx} onClick={() => selectOption(opt)} className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${selected[current] === opt ? "border-[#facc15] bg-[#facc15]/10 text-[#facc15]" : "border-[#334155] bg-[#111827] text-gray-300"}`}>
                <span className="w-8 h-8 rounded-lg bg-gray-800 text-center leading-8 font-bold">{String.fromCharCode(65 + idx)}</span>{opt}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 p-4 bg-[#1e293b] border-t border-[#334155] flex justify-between">
          <button onClick={prev} disabled={current === 0} className="px-6 py-3 bg-gray-700 text-white rounded-xl">Prev</button>
          <button onClick={next} disabled={current === TOTAL - 1} className="px-6 py-3 bg-[#facc15] text-[#0f172a] font-bold rounded-xl">Next</button>
      </div>
    </div>
  );
};

export default M2PYQ2024;
