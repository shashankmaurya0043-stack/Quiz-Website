import { useState, useEffect, useCallback } from "react";

const questions = [
  { question: "Which was the first electronic digital computer?", options: ["ENIAC", "UNIVAC", "EDVAC", "Harvard Mark I"], answer: "ENIAC" },
  { question: "Which was the first microprocessor chip released commercially?", options: ["Intel 8080", "Intel 4004", "Motorola 6800", "Zilog Z80"], answer: "Intel 4004" },
  { question: "In which generation of computers were vacuum tubes used?", options: ["First generation", "Second generation", "Third generation", "Fourth generation"], answer: "First generation" },
  { question: "In which generation were integrated circuits used in computers?", options: ["First generation", "Second generation", "Third generation", "Fourth generation"], answer: "Third generation" },
  { question: "Which computer generation first used microprocessors?", options: ["First generation", "Second generation", "Third generation", "Fourth generation"], answer: "Fourth generation" },
  { question: "What was the first computer network in the world?", options: ["ARPANET", "Internet", "Ethernet", "World Wide Web"], answer: "ARPANET" },
  { question: "Who is credited with inventing the computer mouse?", options: ["Douglas Engelbart", "Bill Gates", "Steve Jobs", "Tim Berners-Lee"], answer: "Douglas Engelbart" },
  { question: "Which was the first computer programming language to be developed?", options: ["BASIC", "FORTRAN", "COBOL", "C"], answer: "FORTRAN" },
  { question: "Which company introduced the first commercial personal computer?", options: ["IBM", "Apple", "Microsoft", "Dell"], answer: "IBM" },
  { question: "Which was the first programming language created specifically for web development?", options: ["HTML", "JavaScript", "PHP", "Python"], answer: "HTML" },
  { question: "Which operating system was originally developed by Linus Torvalds?", options: ["Windows", "MacOS", "Linux", "Unix"], answer: "Linux" },
  { question: "In which year was the world's first smartphone launched?", options: ["1992", "1994", "1998", "1999"], answer: "1992" },
  { question: "Who is known as the father of computer science?", options: ["Charles Babbage", "Alan Turing", "Ada Lovelace", "John von Neumann"], answer: "Alan Turing" },
  { question: "Who is credited with the invention of the World Wide Web?", options: ["Tim Berners-Lee", "Al Gore", "Bill Gates", "Larry Page"], answer: "Tim Berners-Lee" },
  { question: "In which computer generation were time sharing, real-time networking, and distributed operating systems used?", options: ["First", "Fourth", "Second", "Fifth"], answer: "Fifth" },
  { question: "The Arithmetic and Logic Unit of a computer responds to instructions coming from:", options: ["Primary memory", "Control unit", "Cache memory", "External memory"], answer: "Control unit" },
  { question: "Which of the following storage devices can store the highest amount of data?", options: ["Floppy Disk", "Compact Disk", "Hard Disk", "Magnetic Optical Disk"], answer: "Hard Disk" },
  { question: "The function of saving data and instructions for future use is performed by the:", options: ["Cache unit", "Input unit", "Output unit", "Storage unit"], answer: "Storage unit" },
  { question: "What is another name for application software?", options: ["End-user software", "Utility software", "Specific software", "All of these"], answer: "End-user software" },
  { question: "In a computer, the operating system acts as a software interface between the user and which of the following?", options: ["Memory", "Hardware", "Peripheral", "Screen"], answer: "Hardware" },
  { question: "What is the shortcut key to snap a window/app to the right side of the screen?", options: ["Windows key + Right Arrow", "Windows key + Up Arrow", "Windows key + Left Arrow", "Windows key + Down Arrow"], answer: "Windows key + Right Arrow" },
  { question: "Which component allows access to all computer settings and enables installing or removing programs?", options: ["Start menu", "File explorer", "Control panel", "Default programs"], answer: "Control panel" },
  { question: "Where can you find the option to add a printer or scanner?", options: ["Control panel", "Dynamic data exchange", "File manager", "None of the above"], answer: "Control panel" },
  { question: "What is the shortcut key to take a screenshot of the full screen and save it automatically?", options: ["Windows key + PrtScr", "Windows key + L", "Windows key + D", "Windows key + M"], answer: "Windows key + PrtScr" },
  { question: "Which option is used to send the same letter to multiple people?", options: ["Mail Merge", "Macros", "Multiple Letter", "Template"], answer: "Mail Merge" },
    { question: "What is the shortcut key for applying superscript to text?", options: ["Ctrl + Shift + P", "Ctrl + Shift + D", "Ctrl + P", "Shift + P"], answer: "Ctrl + Shift + P" },
  { question: "Which option is selected to perform case-sensitive matching during a search?", options: ["Match only", "Case match", "Match case", "Case only"], answer: "Match case" },
  { question: "What is the maximum zoom-in level in LibreOffice Writer?", options: ["500", "600", "550", "700"], answer: "500" },
  { question: "What is the shortcut key to show or hide the ruler in LibreOffice Writer?", options: ["Ctrl + Shift + R", "Ctrl + S", "Ctrl + Shift + N", "Alt + R"], answer: "Ctrl + Shift + R" },
  { question: "What is the default font used in LibreOffice Writer?", options: ["Amiri", "Linux Biolinum G", "Calibri", "Liberation Serif"], answer: "Liberation Serif" },
  { question: "Which of the following is not a part of the comment pop-up in LibreOffice Writer?", options: ["Reply comment", "Delete Comment", "Delete All Comments", "Reply and delete comment"], answer: "Reply and delete comment" },
  { question: "What is the default highlighter color in LibreOffice Writer?", options: ["Red", "Green", "Blue", "Yellow"], answer: "Yellow" },
  { question: "Which bar appears directly below the title bar?", options: ["Status bar", "Menu bar", "Tool bar", "Formatting bar"], answer: "Menu bar" },
  { question: "What is the shortcut key to open LibreOffice Help?", options: ["F11", "F12", "F1", "F7"], answer: "F1" },
  { question: "What is the shortcut key for the 'Save As' option in LibreOffice?", options: ["Ctrl + Shift + S", "Ctrl + S", "Ctrl + Shift + N", "Shift + S"], answer: "Ctrl + Shift + S" },
  { question: "In which menu is the Template option available in LibreOffice Writer?", options: ["Edit", "Insert", "File", "View"], answer: "File" },
  { question: "Which of the following features is not available under the 'Export As' option in LibreOffice Writer?", options: ["Export As PDF", "Export As EPUB", "Export As Image", "Export Directly As PDF"], answer: "Export As Image" },
  { question: "What is the default file extension for LibreOffice Writer files?", options: [".oft", ".odt", ".oot", ".obd"], answer: ".odt" },
  { question: "What is the default view mode in LibreOffice Writer?", options: ["Normal view", "Web view", "Slide view", "Print Layout view"], answer: "Print Layout view" },
  { question: "Under which menu is the Ruler option found in LibreOffice Writer?", options: ["File", "Insert", "Table", "View"], answer: "View" },
  { question: "Which of the following options is not available in the Hyperlink dialog box?", options: ["Internet", "Mail", "Document", "File Attachment"], answer: "File Attachment" },
  { question: "By default, what is the page size in LibreOffice Writer?", options: ["A4", "A5", "Legal", "Letter"], answer: "A4" },
  { question: "What is the default alignment of text in LibreOffice Writer?", options: ["Right", "Left", "Center", "Justify"], answer: "Left" },
  { question: "In LibreOffice Writer, under which menu is the watermark option available?", options: ["File", "Tools", "Insert", "Format"], answer: "Format" },
  { question: "What is the shortcut key for 'Paste Special' in LibreOffice Calc?", options: ["Ctrl+Shift+V", "Ctrl+V", "Ctrl+C", "Ctrl+Shift+S"], answer: "Ctrl+Shift+V" },
  { question: "What is the use of Filter in LibreOffice Calc?", options: ["To view only specific data", "To arrange data", "To copy data", "To make charts"], answer: "To view only specific data" },
  { question: "Which of the following is a correct formula?", options: ["=SUM(J14:J16)", "=SUM(J14?J16)", "SUM(J14:J16)", "J14+J15+J16"], answer: "=SUM(J14:J16)" },
  { question: "What is the default alignment of numeric data in LibreOffice Calc?", options: ["Left", "Right", "Center", "Justified"], answer: "Right" },
  { question: "What is the shortcut key to open 'Format Cells' dialog box in Calc?", options: ["Ctrl+F", "Ctrl+D", "Ctrl+L", "Ctrl+1"], answer: "Ctrl+1" },
  { question: "In LibreOffice Spreadsheet, how are rows labeled?", options: ["A, B, C...", "1, 2, 3...", "A1, B1, C1...", "1A, 1B, 1C..."], answer: "1, 2, 3..." },
    { question: "What is the shortcut key to insert the current date in a cell in LibreOffice Calc?", options: ["Ctrl + ]", "Alt + D", "Ctrl + ;", "Shift + K"], answer: "Ctrl + ;" },
  { question: "What is the shortcut key to open Extension Manager in LibreOffice?", options: ["Ctrl+Alt+E", "Ctrl+Shift+E", "Alt + Shift + F5", "Ctrl+F5"], answer: "Ctrl+F5" },
  { question: "What is the default highlight color in LibreOffice Writer?", options: ["Red", "Yellow", "Green", "Black"], answer: "Yellow" },
  { question: "Which shortcut key is used to increase the width of a table in LibreOffice Writer?", options: ["Alt + Right Arrow", "Alt + Shift + Right Arrow", "Shift + Right Arrow", "Ctrl + Right Arrow"], answer: "Alt + Shift + Right Arrow" },
  { question: "What is the file extension used for saving a template in LibreOffice Writer?", options: [".ott", ".odf", ".odt", ".otd"], answer: ".ott" },
  { question: "In LibreOffice Writer or Calc, the 'Donate' option is found under which menu?", options: ["File", "Style", "Help", "Window"], answer: "Help" },
  { question: "What type of information is commonly included in a document header?", options: ["Date", "Time", "Page Number", "All of the above"], answer: "All of the above" },
  { question: "What is the default font style in LibreOffice Calc?", options: ["Liberation Sans", "Liberation Serif", "Arial", "Times New Roman"], answer: "Liberation Sans" },
  { question: "What is the minimum font size allowed in LibreOffice Calc?", options: ["2", "5", "10", "12"], answer: "2" },
  { question: "What is the shortcut key to insert a hyperlink in LibreOffice Calc?", options: ["Shift + K", "Ctrl + K", "Alt + K", "Ctrl + Shift + K"], answer: "Ctrl + K" },
  { question: "What is the shortcut key to increase column width in LibreOffice Calc?", options: ["Ctrl + Right Arrow", "Ctrl + Shift + Right Arrow", "Alt + Right Arrow", "Shift + Right Arrow"], answer: "Alt + Right Arrow" },
  { question: "What is the result of =MIN(5, 2, 8) * MAX(5, 2, 8)?", options: ["4", "8", "10", "16"], answer: "16" },
  { question: "What is the result of =SUM(2, PRODUCT(5, 7))?", options: ["12", "37", "14", "10"], answer: "37" },
  { question: "What is the maximum number of rows and columns in LibreOffice Calc?", options: ["1048576, AMJ", "1048776, AMH", "1048556, AME", "1047576, AMJ"], answer: "1048576, AMJ" },
  { question: "What is the shortcut key to insert a new cell in Calc?", options: ["Ctrl + +", "Ctrl + -", "Ctrl + :", "Ctrl + ;"], answer: "Ctrl + +" },
  { question: "In LibreOffice Calc, which menu provides the option to insert a new column?", options: ["Insert", "Format", "Sheet", "Styles"], answer: "Insert" },
  { question: "Is the Find and Replace option not available in LibreOffice Calc?", options: ["Yes", "No", "May be", "Can't say"], answer: "No" },
  { question: "The Normal View option is found in which menu?", options: ["Design", "Insert", "View", "Style"], answer: "View" },
  { question: "Can we only read the name of a hidden slide but not view the slide itself?", options: ["Yes", "No", "Maybe", "Can't say"], answer: "No" },
  { question: "Which option is used to set timing on slides in a presentation?", options: ["Rehearsal Timing", "Slide Timer", "Slide Timing Tool", "Slide Tool"], answer: "Rehearsal Timing" },
  { question: "What is the minimum zoom level available in LibreOffice Impress?", options: ["5%", "10%", "20%", "30%"], answer: "5%" },
  { question: "What is the shortcut key to open Navigator in LibreOffice Impress?", options: ["Shift + F5", "Ctrl + Shift + F5", "Alt + F5", "None of these"], answer: "Alt + F5" },
  { question: "In which menu of LibreOffice can you find the option to add comments?", options: ["Style", "Format", "Insert", "View"], answer: "Insert" },
  { question: "Can you hide all rows at once in LibreOffice Calc?", options: ["Yes", "No", "Maybe", "Can't say"], answer: "Yes" },
  { question: "What is the maximum number of handouts that can be printed on a single page in LibreOffice Impress?", options: ["4", "9", "16", "32"], answer: "9" },
    { question: "In which menu is the Find & Replace option found in LibreOffice?", options: ["File", "Edit", "View", "Window"], answer: "Edit" },
  { question: "How do you change the column width to fit the contents?", options: ["Single-click the boundary to the left of the column heading", "Double click the boundary to the right of the column heading", "Press Alt and single click anywhere in the column", "Press CTRL and double click anywhere in the column"], answer: "Double click the boundary to the right of the column heading" },
  { question: "In which generation of computers was batch processing mainly used?", options: ["1st", "2nd", "3rd", "4th"], answer: "1st" },
  { question: "What does ULSI stand for?", options: ["Ultra Large Scale Integration", "Under Lower Scale Integration", "Ultra Lower Scale Integration", "Under Large Scale Integration"], answer: "Ultra Large Scale Integration" },
  { question: "What was the first electronic spreadsheet program called?", options: ["Microsoft Excel", "Lotus 1-2-3", "VisiCalc", "Calc"], answer: "VisiCalc" },
  { question: "What was the first microcomputer in the world?", options: ["ALTAIR 8800", "HP", "ENIAC", "UNIVAC"], answer: "ALTAIR 8800" },
  { question: "Can handouts be printed for all slides in a presentation?", options: ["Yes", "No", "Never", "None"], answer: "Yes" },
  { question: "Does a search engine use indexing to follow every link on the site?", options: ["Yes", "No", "Never", "None"], answer: "Yes" },
  { question: "Which button is clicked to add up a series of numbers?", options: ["The total button", "The autosum button", "The quicktotal button", "The formula button"], answer: "The autosum button" },
  { question: "Can a computer virus cause a motherboard crash?", options: ["Yes", "No", "Never", "None"], answer: "Yes" },
  { question: "Is the storage capacity of a CD greater than that of a DVD?", options: ["Yes", "No", "Never", "None"], answer: "No" },
  { question: "Which type of semiconductor memory allows changing contents of selected memory locations by applying suitable electrical signals?", options: ["CAM", "ROM", "EAROM", "ANACUS"], answer: "EAROM" },
  { question: "What is true about the size of an icon?", options: ["It can be changed whenever required", "It can be changed only at the time of creation", "It is always fixed", "It cannot be changed"], answer: "It can be changed whenever required" },
  { question: "Does EBCDIC (Extended Binary Coded Decimal Interchange Code) exist?", options: ["No", "Yes", "Never", "None"], answer: "Yes" },
  { question: "Which option is used to hide a slide in a presentation?", options: ["Cut", "Hide slide", "Hide", "Slide"], answer: "Hide slide" },
  { question: "What is the term for a function placed inside another function?", options: ["Sum", "Round", "Nested", "Text"], answer: "Nested" },
  { question: "Does EBCDIC use 8 bits?", options: ["No", "Yes", "Never", "None"], answer: "No" },
  { question: "Which font size option is NOT available in the font size drop-down menu in LibreOffice Writer?", options: ["10", "13", "19", "24"], answer: "19" },
  { question: "What is Blockchain?", options: ["A digital global ledger where transactions are recorded chronologically and viewable by all with access", "A type of virus", "A programming language", "An operating system"], answer: "A digital global ledger where transactions are recorded chronologically and viewable by all with access" },
  { question: "In which menu of LibreOffice Writer is the 'Restart in Safe Mode' option found?", options: ["Insert", "Edit", "File", "Help"], answer: "Help" },
  { question: "Which of the following protocols is lightweight?", options: ["SPI", "HTTP", "MQTT", "COAP"], answer: "COAP" },
  { question: "Which was the first graphical web browser?", options: ["Internet Explorer (IE)", "Mozilla", "Netscape", "Opera"], answer: "Netscape" },
  { question: "Which of the following is NOT a valid zoom percentage in LibreOffice Calc?", options: ["400", "100", "300", "500"], answer: "500" },
  { question: "What is cipher text?", options: ["Non-readable form of encrypted data", "Undecorated text", "Readable form of encrypted data", "Decorated text"], answer: "Non-readable form of encrypted data" },
  { question: "Does File Explorer not provide an option to rename a file?", options: ["No", "Yes", "Never", "None"], answer: "No" },
];

const TOTAL_TIME = questions.length * 60;
type QuizState = "home" | "quiz" | "result";

function formatTime(secs: number) {
  const m = Math.floor(secs / 60).toString().padStart(2, "0");
  const s = (secs % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

const S = {
  bg: "#0f172a",
  card: "#111827",
  cardBorder: "#1e293b",
  yellow: "#facc15",
  yellowDim: "rgba(250,204,21,0.12)",
  yellowBorder: "rgba(250,204,21,0.35)",
  white: "#ffffff",
  secondary: "#d1d5db",
  muted: "#6b7280",
  correct: "#22c55e",
  correctDim: "rgba(34,197,94,0.12)",
  correctBorder: "rgba(34,197,94,0.4)",
  wrong: "#ef4444",
  wrongDim: "rgba(239,68,68,0.12)",
  wrongBorder: "rgba(239,68,68,0.4)",
  optBorder: "#334155",
  optHoverBg: "#1e293b",
  headerBg: "#0b1221",
};
export default function M1PYQ2025() {
  const [state, setState] = useState<QuizState>("home");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
    setState("result");
  }, []);

  useEffect(() => {
    if (state !== "quiz" || submitted) return;
    if (timeLeft <= 0) { handleSubmit(); return; }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, state, submitted, handleSubmit]);

  function startQuiz() {
    setSelected(Array(questions.length).fill(null));
    setCurrent(0);
    setTimeLeft(TOTAL_TIME);
    setSubmitted(false);
    setState("quiz");
  }

  function selectOption(opt: string) {
    if (submitted) return;
    setSelected((prev) => { const next = [...prev]; next[current] = opt; return next; });
  }

  const score = questions.filter((q, i) => selected[i] === q.answer).length;
  const pct = Math.round((score / questions.length) * 100);
  const timerPct = (timeLeft / TOTAL_TIME) * 100;
  const timerColor = timerPct > 50 ? S.yellow : timerPct > 20 ? "#f97316" : S.wrong;

  if (state === "home") {
    return (
      <div style={{ minHeight: "100vh", background: S.bg, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 16px" }}>
        <div style={{ maxWidth: 560, width: "100%", textAlign: "center" }}>
          <span style={{ display: "inline-block", background: S.yellow, color: "#000", fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>
            O Level • M1 • 2024–25
          </span>
          <h1 style={{ color: S.white, fontSize: "clamp(28px,6vw,44px)", fontWeight: 800, lineHeight: 1.2, margin: "0 0 12px" }}>
            M1 Previous Year <span style={{ color: S.yellow }}>Questions</span>
          </h1>
          <p style={{ color: S.secondary, fontSize: 16, margin: "0 0 32px", lineHeight: 1.6 }}>
            100 MCQs from the O Level M1 syllabus. Test your preparation with a timed mock exam experience.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 32 }}>
            {[{ label: "Questions", value: "100" }, { label: "Time", value: `${Math.floor(TOTAL_TIME / 60)} min` }, { label: "Marks", value: "100" }].map((s) => (
              <div key={s.label} style={{ background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 14, padding: "16px 8px" }}>
                <div style={{ color: S.yellow, fontSize: 26, fontWeight: 800 }}>{s.value}</div>
                <div style={{ color: S.secondary, fontSize: 13, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button onClick={startQuiz} style={{ background: S.yellow, color: "#000", fontWeight: 700, fontSize: 17, padding: "16px 32px", borderRadius: 14, border: "none", cursor: "pointer" }}>
              Attempt Mock Test
            </button>
            <a href="#" style={{ border: `2px solid ${S.yellowBorder}`, color: S.yellow, fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 14, textDecoration: "none", display: "block" }}>
              View PDF
            </a>
          </div>
        </div>
      </div>
    );
  }
    if (state === "result") {
    const grade = pct >= 80 ? "Excellent!" : pct >= 60 ? "Good Job!" : pct >= 40 ? "Average" : "Needs Improvement";
    const gradeColor = pct >= 80 ? S.correct : pct >= 60 ? S.yellow : pct >= 40 ? "#f97316" : S.wrong;
    const wrongCount = questions.filter((q, i) => selected[i] !== null && selected[i] !== q.answer).length;
    const skippedCount = selected.filter((s) => s === null).length;
    return (
      <div style={{ minHeight: "100vh", background: S.bg, padding: "24px 16px 48px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 20, padding: "32px 24px", textAlign: "center", marginBottom: 20 }}>
            <div style={{ color: S.yellow, fontSize: 64, fontWeight: 900, lineHeight: 1 }}>
              {score}<span style={{ fontSize: 32, color: S.muted }}>/{questions.length}</span>
            </div>
            <div style={{ color: gradeColor, fontSize: 22, fontWeight: 700, marginTop: 10 }}>{grade}</div>
            <div style={{ color: S.secondary, fontSize: 15, marginTop: 6 }}>You scored {pct}%</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 24 }}>
              {[
                { label: "Correct", value: score, color: S.correct, bg: S.correctDim, border: S.correctBorder },
                { label: "Wrong", value: wrongCount, color: S.wrong, bg: S.wrongDim, border: S.wrongBorder },
                { label: "Skipped", value: skippedCount, color: S.muted, bg: "rgba(107,114,128,0.1)", border: "rgba(107,114,128,0.3)" },
              ].map((s) => (
                <div key={s.label} style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: 12, padding: "14px 8px" }}>
                  <div style={{ color: s.color, fontSize: 30, fontWeight: 800 }}>{s.value}</div>
                  <div style={{ color: S.secondary, fontSize: 12, marginTop: 4, fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
            <button onClick={startQuiz} style={{ flex: 1, background: S.yellow, color: "#000", fontWeight: 700, fontSize: 15, padding: "14px", borderRadius: 12, border: "none", cursor: "pointer", minWidth: 140 }}>
              Retry Quiz
            </button>
            <button onClick={() => setState("home")} style={{ flex: 1, background: "transparent", color: S.yellow, fontWeight: 700, fontSize: 15, padding: "14px", borderRadius: 12, border: `2px solid ${S.yellowBorder}`, cursor: "pointer", minWidth: 140 }}>
              Back to Home
            </button>
          </div>
          <div style={{ color: S.yellow, fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Answer Review</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {questions.map((q, i) => {
              const userAns = selected[i];
              const correct = userAns === q.answer;
              const skipped = userAns === null;
              return (
                <div key={i} style={{ background: skipped ? S.card : correct ? S.correctDim : S.wrongDim, border: `1px solid ${skipped ? S.cardBorder : correct ? S.correctBorder : S.wrongBorder}`, borderRadius: 14, padding: "16px" }}>
                  <div style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start" }}>
                    <span style={{ background: S.yellow, color: "#000", fontWeight: 800, fontSize: 12, width: 26, height: 26, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
                    <p style={{ color: S.white, fontSize: 14, fontWeight: 600, lineHeight: 1.5, margin: 0 }}>{q.question}</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {q.options.map((opt) => {
                      const isCorrect = opt === q.answer;
                      const isUser = opt === userAns;
                      return (
                        <div key={opt} style={{ background: isCorrect ? S.correctDim : isUser && !correct ? S.wrongDim : "transparent", border: `1px solid ${isCorrect ? S.correct : isUser && !correct ? S.wrong : S.optBorder}`, borderRadius: 8, padding: "8px 10px", fontSize: 13, color: isCorrect ? S.correct : isUser && !correct ? S.wrong : S.muted, fontWeight: isCorrect ? 700 : 400 }}>
                          {isCorrect ? "✓ " : isUser && !correct ? "✗ " : ""}{opt}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
    }
    const q = questions[current];
  const answered = selected.filter((s) => s !== null).length;

  return (
    <div style={{ minHeight: "100vh", background: S.bg, display: "flex", flexDirection: "column" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: S.headerBg, borderBottom: `1px solid ${S.cardBorder}`, padding: "12px 16px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ color: S.secondary, fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0 }}>
            <span style={{ color: S.yellow, fontWeight: 800, fontSize: 15 }}>{current + 1}</span>
            <span style={{ color: S.muted }}> / {questions.length}</span>
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ flex: 1, height: 8, background: "#1e293b", borderRadius: 999, overflow: "hidden" }}>
              <div style={{ height: 8, borderRadius: 999, background: timerColor, width: `${timerPct}%`, transition: "width 1s linear, background 0.5s" }} />
            </div>
            <span style={{ color: timerColor, fontFamily: "monospace", fontWeight: 800, fontSize: 15, whiteSpace: "nowrap", flexShrink: 0 }}>
              {formatTime(timeLeft)}
            </span>
          </div>
          <div style={{ color: S.secondary, fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0 }}>
            <span style={{ color: S.correct, fontWeight: 800 }}>{answered}</span>
            <span style={{ color: S.muted }}> done</span>
          </div>
        </div>
      </header>

      <div style={{ flex: 1, maxWidth: 900, margin: "0 auto", width: "100%", display: "flex", gap: 20, padding: "20px 16px", boxSizing: "border-box" }}>
        <main style={{ flex: 1, minWidth: 0 }}>
          <div style={{ background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 16, padding: "20px", marginBottom: 16 }}>
            <div style={{ color: S.yellow, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>
              Question {current + 1} of {questions.length}
            </div>
            <p style={{ color: S.white, fontSize: "clamp(15px,3vw,17px)", fontWeight: 600, lineHeight: 1.6, margin: 0 }}>{q.question}</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
            {q.options.map((opt, idx) => {
              const label = ["A", "B", "C", "D"][idx];
              const isSelected = selected[current] === opt;
              return (
                <button key={opt} onClick={() => selectOption(opt)} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", borderRadius: 12, border: isSelected ? `2px solid ${S.yellow}` : `2px solid ${S.optBorder}`, background: isSelected ? S.yellowDim : S.card, cursor: "pointer", textAlign: "left", width: "100%" }}>
                  <span style={{ flexShrink: 0, width: 32, height: 32, borderRadius: "50%", border: isSelected ? `2px solid ${S.yellow}` : `2px solid ${S.optBorder}`, background: isSelected ? S.yellow : "transparent", color: isSelected ? "#000" : S.secondary, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13 }}>
                    {label}
                  </span>
                  <span style={{ color: isSelected ? S.yellow : S.white, fontWeight: isSelected ? 700 : 500, fontSize: "clamp(14px,2.5vw,15px)", lineHeight: 1.4 }}>
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => setCurrent((c) => Math.max(0, c - 1))} disabled={current === 0} style={{ flex: 1, padding: "14px", borderRadius: 12, border: `2px solid ${current === 0 ? "#1e293b" : S.yellowBorder}`, background: "transparent", color: current === 0 ? S.muted : S.yellow, fontWeight: 700, fontSize: 15, cursor: current === 0 ? "not-allowed" : "pointer", opacity: current === 0 ? 0.5 : 1 }}>
              ← Previous
            </button>
            {current < questions.length - 1 ? (
              <button onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))} style={{ flex: 1, padding: "14px", borderRadius: 12, border: "none", background: S.yellow, color: "#000", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                Next →
              </button>
            ) : (
              <button onClick={handleSubmit} style={{ flex: 1, padding: "14px", borderRadius: 12, border: "none", background: S.correct, color: "#000", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                Submit Quiz
              </button>
            )}
          </div>
        </main>
                <aside style={{ width: 210, flexShrink: 0, display: "none" }} className="quiz-nav-desktop">
          <div style={{ position: "sticky", top: 80, background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 16, padding: 16 }}>
            <div style={{ color: S.secondary, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Navigator</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6 }}>
              {questions.map((_, i) => {
                const isActive = i === current;
                const isAnswered = selected[i] !== null;
                return (
                  <button key={i} onClick={() => setCurrent(i)} style={{ aspectRatio: "1", fontSize: 11, fontWeight: 700, borderRadius: 8, border: isActive ? `2px solid ${S.yellow}` : isAnswered ? `1px solid ${S.yellowBorder}` : `1px solid ${S.optBorder}`, background: isActive ? S.yellow : isAnswered ? S.yellowDim : "#1e293b", color: isActive ? "#000" : isAnswered ? S.yellow : S.muted, cursor: "pointer", padding: "6px 0" }}>
                    {i + 1}
                  </button>
                );
              })}
            </div>
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { color: S.yellow, bg: S.yellow, label: "Current" },
                { color: S.yellow, bg: S.yellowDim, label: "Answered" },
                { color: S.muted, bg: "#1e293b", label: "Not visited" },
              ].map((l) => (
                <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 14, height: 14, borderRadius: 4, background: l.bg, border: `1px solid ${l.color}`, flexShrink: 0 }} />
                  <span style={{ color: S.secondary, fontSize: 12 }}>{l.label}</span>
                </div>
              ))}
            </div>
            <button onClick={handleSubmit} style={{ marginTop: 16, width: "100%", padding: "12px", borderRadius: 12, border: "none", background: S.correct, color: "#000", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
              Submit Quiz
            </button>
          </div>
        </aside>
      </div>

      <div style={{ position: "sticky", bottom: 0, background: S.headerBg, borderTop: `1px solid ${S.cardBorder}`, padding: "10px 16px" }} className="quiz-nav-mobile">
        <div style={{ overflowX: "auto" }}>
          <div style={{ display: "flex", gap: 6, width: "max-content", margin: "0 auto" }}>
            {questions.map((_, i) => {
              const isActive = i === current;
              const isAnswered = selected[i] !== null;
              return (
                <button key={i} onClick={() => setCurrent(i)} style={{ width: 32, height: 32, flexShrink: 0, fontSize: 11, fontWeight: 700, borderRadius: 8, border: isActive ? `2px solid ${S.yellow}` : isAnswered ? `1px solid ${S.yellowBorder}` : `1px solid ${S.optBorder}`, background: isActive ? S.yellow : isAnswered ? S.yellowDim : "#1e293b", color: isActive ? "#000" : isAnswered ? S.yellow : S.muted, cursor: "pointer" }}>
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .quiz-nav-desktop { display: block !important; }
          .quiz-nav-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}
