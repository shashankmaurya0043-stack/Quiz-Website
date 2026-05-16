import React, { useState, useEffect, useCallback } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    question: "What is cipher text?",
    options: [
      "Readable form of encrypted text",
      "Non-readable form of encrypted text",
      "Decrypted text",
      "Decorated text",
    ],
    answer: "Non-readable form of encrypted text",
  },
  {
    question:
      "The spreadsheet file created in LibreOffice Calc is saved with the _______ extension.",
    options: [".ods", ".ott", ".odt", ".odf"],
    answer: ".ods",
  },
  {
    question:
      "A new slide that contains an unordered list from the titles of the slides that follow the selected slide is called ______.",
    options: [
      "Outline Slide",
      "Preview Slide",
      "Preview Presentation",
      "Summary Slide",
    ],
    answer: "Summary Slide",
  },
  {
    question:
      "The collection of links throughout the Internet creates an interconnected network called the ______.",
    options: ["Modem", "Router", "Hardware", "World Wide Web"],
    answer: "World Wide Web",
  },
  {
    question: "What is a blockchain?",
    options: [
      "An exchange",
      "A type of cryptocurrency",
      "A centralized ledger",
      "A distributed ledger on a peer to peer network",
    ],
    answer: "A distributed ledger on a peer to peer network",
  },
  {
    question:
      "Transport layer of OSI model lies between Network and which layer?",
    options: ["Application", "Presentation", "Data link", "Session"],
    answer: "Session",
  },
  {
    question:
      "________ represents raw facts, whereas _______ is data made meaningful.",
    options: [
      "Information, reporting",
      "Data, information",
      "Information, bits",
      "Records, bytes",
    ],
    answer: "Data, information",
  },
  {
    question:
      "Unauthorized access and viruses are which type of network issue?",
    options: ["Performance", "Security", "Reliability", "Ability"],
    answer: "Security",
  },
    {
    question:
      "On which bar default document name is shown in Libre Writer?",
    options: ["Menu bar", "Status bar", "Title bar", "Standard Toolbar"],
    answer: "Title bar",
  },
  {
    question:
      "Which of the following function is used to display current date and time?",
    options: ["Date( )", "Today( )", "Now( )", "Time( )"],
    answer: "Now( )",
  },
  {
    question:
      "In presentations, which of the following can be inserted?",
    options: [
      "Sound Clips",
      "Movie Clips",
      "Both (A) & (B)",
      "None of the above",
    ],
    answer: "Both (A) & (B)",
  },
  {
    question: "The correct full form for UPI is __________.",
    options: [
      "Unified Payment Interface",
      "Intermediate Payment Interface",
      "Unified Pay Interface",
      "Unified Peoples Interface",
    ],
    answer: "Unified Payment Interface",
  },
  {
    question: "What is slide transition?",
    options: [
      "Letters",
      "Overheads",
      "Animations",
      "Visual effect in slide show",
    ],
    answer: "Visual effect in slide show",
  },
  {
    question: "What is the default page orientation of LibreOffice?",
    options: ["Landscape", "Portrait", "A4", "A3"],
    answer: "Portrait",
  },
  {
    question: "Which among the following is not a pointing device?",
    options: ["Digitizer", "Mouse", "Joystick", "Light pen"],
    answer: "Digitizer",
  },
  {
    question: "E-mail stands for",
    options: [
      "Electronic man",
      "Electromagnetic mail",
      "Electronic mail",
      "Engine Mail",
    ],
    answer: "Electronic mail",
  },
  {
    question:
      "Any expression that begins with an equals '=' is treated as __________.",
    options: ["Function", "Formula", "Graph", "Chart"],
    answer: "Formula",
  },
  {
    question: "The full form of URL is",
    options: [
      "Useful Resource Logo",
      "Uniform Resource Locator",
      "Useful Resource Language",
      "Uniform Resource Language",
    ],
    answer: "Uniform Resource Locator",
  },
    {
    question: "The term word processing was invented by ______.",
    options: ["IBM", "HP", "Intel", "Microsoft"],
    answer: "IBM",
  },
  {
    question: "Which is not a type of e-commerce?",
    options: [
      "Business to Business (B2B)",
      "Business to Customer (B2C)",
      "Alpha-commerce",
      "M-commerce",
    ],
    answer: "Alpha-commerce",
  },
  {
    question:
      "Which option can be used to set custom timings for slides in a presentation?",
    options: [
      "Slide Timings",
      "Slide Timer",
      "Rehearsal",
      "Slide show setup",
    ],
    answer: "Rehearsal",
  },
  {
    question: "The acronym OCR stands for:",
    options: [
      "Outsized Character Reader",
      "Optical Character Reader",
      "Operational Character Reader",
      "Only Character Reader",
    ],
    answer: "Optical Character Reader",
  },
  {
    question:
      "1 Petabyte (PB) of memory is equal to how many Gigabytes (GB)?",
    options: ["1024 GB", "1048576 GB", "524288 GB", "4194304 GB"],
    answer: "1048576 GB",
  },
  {
    question:
      "What is the term used when you press and hold the left mouse key and mouse around the slide?",
    options: ["Highlighting", "Moving", "Dragging", "Monitoring"],
    answer: "Dragging",
  },
  {
    question:
      "Different options related to printing of the LibreOffice Writer document like Print, Print Preview, and Printer Settings are available in which one of the following menus?",
    options: ["File", "Padit", "Insert", "Format"],
    answer: "File",
  },
  {
    question:
      "Unauthorized access and viruses are which type of network issue? (Q.26)",
    options: ["Performance", "Security", "Reliability", "Ability"],
    answer: "Security",
  },
  {
    question: "What appears in the name box?",
    options: [
      "To the right of the formula bar",
      "Under the status bar",
      "Under the menu bar",
      "To the left of the formula bar",
    ],
    answer: "To the left of the formula bar",
  },
  {
    question:
      "In a computer spreadsheet, absolute cell reference can be represented as:",
    options: ["A3", "$A$3", "A$3", "$A3"],
    answer: "$A$3",
  },
    {
    question: "What does BHIM stand for?",
    options: [
      "Bharat Interface for Money",
      "Bharat Interface for Machine",
      "Bharat Internet for Money",
      "Bharat Interface to Money",
    ],
    answer: "Bharat Interface for Money",
  },
  {
    question:
      "The slide that is used to introduce a topic and set the tone for the presentation is called:",
    options: [
      "Bullet slide",
      "Table Slide",
      "Title Slide",
      "Graph Slide",
    ],
    answer: "Title Slide",
  },
  {
    question:
      "Which option should be used to type CO² to get 2 at its proper place?",
    options: ["Bold", "Underline", "Subscript", "Superscript"],
    answer: "Subscript",
  },
  {
    question:
      "Which option is used to insert the related hints of a slide?",
    options: [
      "Note Master",
      "Presentation Master",
      "Slide Master",
      "Hint Master",
    ],
    answer: "Note Master",
  },
  {
    question: "Why is one time password safe?",
    options: [
      "Easy to generate",
      "Not sharable",
      "Different for every access",
      "Encrypted password",
    ],
    answer: "Different for every access",
  },
  {
    question:
      "Which of the following will not advance the slides in a slide show view?",
    options: ["Esc key", "Spacebar", "Enter key", "Mouse button"],
    answer: "Esc key",
  },
  {
    question: "WLAN stands for:",
    options: [
      "Wireless Local Area Network",
      "Wired Local Area Network",
      "Wireless Local Ambiguity Network",
      "Wired Latent Area Network",
    ],
    answer: "Wireless Local Area Network",
  },
  {
    question: "What is full form of PDF?",
    options: [
      "Portable Document File",
      "Portable Data Format",
      "Portable Document Format",
      "Partial Data File",
    ],
    answer: "Portable Document Format",
  },
  {
    question:
      "The active cell is M10. If you press the enter key, then you will reach at:",
    options: ["N10", "M11", "M9", "M12"],
    answer: "M11",
  },
  {
    question:
      "Which of the following must be used with the mouse when you want to resize an image from the center and keep it proportioned?",
    options: ["Alt", "Ctrl key", "Space bar", "Shift"],
    answer: "Shift",
  },
    {
    question:
      "On which bar default document name is shown in LibreWriter? (Q.39)",
    options: ["Menu bar", "Status bar", "Title bar", "Standard Toolbar"],
    answer: "Title bar",
  },
  {
    question:
      "Which of the following chart shows values as circular sectors of the total circle?",
    options: ["Bar chart", "Circular chart", "Oval chart", "Pie chart"],
    answer: "Pie chart",
  },
  {
    question:
      "In spreadsheet, letters are used to represent __________.",
    options: ["Columns", "Block", "Rows", "Cells"],
    answer: "Columns",
  },
  {
    question:
      "Which of the following is the file extension of the PowerPoint application?",
    options: [".ppt", ".jpg", ".html", ".docx"],
    answer: ".ppt",
  },
  {
    question:
      "Which of the following function calculates average in LibreOffice Calc?",
    options: ["AVG( )", "AVERAGE( )", "AVR( )", "MEAN( )"],
    answer: "AVERAGE( )",
  },
  {
    question:
      "Which of the following documents appears blurred behind the text?",
    options: ["Background", "Watermark", "Front land", "Image"],
    answer: "Watermark",
  },
  {
    question:
      "Which of the following methods can be used to send money over UPI?",
    options: [
      "Mobile Number",
      "VPA",
      "Bank Account Number",
      "Aadhar number",
    ],
    answer: "VPA",
  },
  {
    question: "Who is the father of internet?",
    options: [
      "Charles Babbage",
      "Vint Cerf",
      "Denis Riche",
      "Martin Cooper",
    ],
    answer: "Vint Cerf",
  },
  {
    question:
      "In the beginning __________ was the most widely used word processing software.",
    options: ["Word Start", "WordStar", "Writer", "Microsoft Word"],
    answer: "WordStar",
  },
  {
    question: "Which of the following is the example of ISP?",
    options: ["Chrome", "Firefox", "Internet Explorer", "Airtel"],
    answer: "Airtel",
  },
    {
    question:
      "If you want to share a document and you want people to just see it and not edit it then what should you use?",
    options: ["ODT", "DOCX", "PDF", "DOC"],
    answer: "PDF",
  },
  {
    question: "Which of the following is the search engine?",
    options: [
      "Google Chrome",
      "Internet Explorer",
      "Google",
      "Mozilla Firefox",
    ],
    answer: "Google",
  },
  {
    question:
      "Undo and redo can be done with which of the following shortcut keys?",
    options: [
      "Ctrl + Z, Ctrl + Y",
      "Ctrl + Y, Ctrl + Z",
      "Ctrl + Alt + Z, Ctrl + Alt + Y",
      "Ctrl + Alt + Y, Ctrl + Alt + Z",
    ],
    answer: "Ctrl + Z, Ctrl + Y",
  },
  {
    question: "Dotted areas in empty slide are called:",
    options: ["Template", "Placard", "Placeholders", "Themes"],
    answer: "Placeholders",
  },
  {
    question:
      "Which of the following technology was used in third generation computers?",
    options: [
      "VLSI technique",
      "Transistors",
      "Vacuum Tubes",
      "Integrated circuits",
    ],
    answer: "Integrated circuits",
  },
  {
    question: 'Shortcut key for "Save as" is ________',
    options: [
      "CTRL+S",
      "CTRL+SHIFT+S",
      "CTRL+ALT+S",
      "None of the above",
    ],
    answer: "CTRL+SHIFT+S",
  },
  {
    question:
      "Shortcut Key to Auto Filter in LibreOffice Calc is ________",
    options: [
      "CTRL+Shift+L",
      "CTRL+Shift+A",
      "CTRL+Shift+F",
      "CTRL+Shift+K",
    ],
    answer: "CTRL+Shift+L",
  },
  {
    question: "Third Generation of Computers used ________",
    options: [
      "VLSI",
      "Integrated Circuits",
      "Transistors",
      "Vacuum Tubes",
    ],
    answer: "Integrated Circuits",
  },
  {
    question:
      "How many minimum data cells are required to create autofill series?",
    options: ["4", "5", "2", "3"],
    answer: "2",
  },
  {
    question: "To adjust the width of table columns, you:",
    options: [
      "Drag the column markers on the table ruler bar",
      "Click table menu, Column width, then make adjustments",
      "Both A and B",
      "Drag the vertical gridline between two columns",
    ],
    answer: "Both A and B",
  },
    {
    question: "Which acts as a personal assistant in Windows 10?",
    options: ["Alexa", "Cortana", "Google", "Siri"],
    answer: "Cortana",
  },
  {
    question:
      "The default text area for slide will start from __________",
    options: ["Letters", "Numbers", "Alpha Numeric", "Bullet"],
    answer: "Bullet",
  },
  {
    question:
      "The search results are generally presented in a line of results often referred to as __________",
    options: [
      "Search Engine Result Pages",
      "Tag List",
      "Search Engine Pages",
      "Category List",
    ],
    answer: "Search Engine Result Pages",
  },
  {
    question:
      "In which menu do we insert the video from file in LibreOffice Impress?",
    options: ["Slide", "View", "Insert", "Home"],
    answer: "Insert",
  },
  {
    question:
      "What is the shortcut for Print Preview in LibreOffice Writer?",
    options: [
      "CTRL+Shift+O",
      "CTRL+Shift+P",
      "CTRL+Shift+PP",
      "CTRL+P+P",
    ],
    answer: "CTRL+Shift+P",
  },
  {
    question:
      "To revert the formatting of a manually formatted object on a slide to the style defined in the master slide use __________.",
    options: [
      "Clear",
      "Clear Format",
      "Clear Direct Formatting",
      "Format Eraser",
    ],
    answer: "Clear Direct Formatting",
  },
  {
    question:
      "Shortcut to activate Extension Manager in LibreOffice Calc is __________.",
    options: ["CTRL+Alt+E", "CTRL+E", "CTRL+Shift+E", "CTRL+F9"],
    answer: "CTRL+Alt+E",
  },
  {
    question:
      "Two shapes in Presentation file created in LibreOffice Impress can be connected using __________.",
    options: ["Joint", "Fix", "Attacher", "Connector"],
    answer: "Connector",
  },
  {
    question:
      "What is the shortcut key for Styles and Formatting in LibreOffice?",
    options: ["F11", "F6", "F12", "F9"],
    answer: "F11",
  },
  {
    question:
      "Which is the correct option to insert header in LibreOffice?",
    options: [
      "Format - header",
      "Edit - header",
      "View - header",
      "Insert - header",
    ],
    answer: "Insert - header",
  },
    {
    question:
      "Which function key is used to change the name of any file through the keyboard?",
    options: ["F1", "F2", "F3", "F4"],
    answer: "F2",
  },
  {
    question: "What is the shortcut key to full screen LibreOffice?",
    options: [
      "Ctrl + Shift + J",
      "Ctrl + Shift + K",
      "Shift + J",
      "None",
    ],
    answer: "Ctrl + Shift + J",
  },
  {
    question:
      "In LibreOffice Writer, __________ key is used for subscript the text.",
    options: [
      "Ctrl+Shift+F5",
      "Ctrl+Shift+V",
      "Ctrl+Shift+B",
      "Ctrl+Shift+F1",
    ],
    answer: "Ctrl+Shift+B",
  },
  {
    question:
      "Communication software and operating system are examples of:",
    options: [
      "Device drivers",
      "System software",
      "Application software",
      "Customized software",
    ],
    answer: "System software",
  },
  {
    question:
      "In LibreOffice Writer, where is the Mail Merge option found?",
    options: ["File", "Insert", "Tools", "View"],
    answer: "Tools",
  },
  {
    question:
      "Which of the following items is not used in Local Area Networks (LANs)?",
    options: ["Computer", "Modem", "Printer", "Cable"],
    answer: "Modem",
  },
  {
    question: "What is the shortcut key to cut in LibreOffice?",
    options: ["Ctrl + C", "Ctrl + X", "Ctrl + K", "Shift + X"],
    answer: "Ctrl + X",
  },
  {
    question:
      "In LibreOffice Writer, in which menu can you find the Ruler option?",
    options: ["Tools", "View", "File", "Insert"],
    answer: "View",
  },
  {
    question:
      "Which command is used for removing files in the Linux operating system?",
    options: ["delete", "rm", "dm", "erase"],
    answer: "rm",
  },
  {
    question:
      "Which of the following is not present in the status bar of LibreOffice Writer?",
    options: [
      "Name of Computer",
      "Page Number",
      "Character",
      "None of the above",
    ],
    answer: "Name of Computer",
  },
    {
    question:
      "Which of the following key is used to add bullet list in LibreOffice Writer?",
    options: [
      "Ctrl + F12",
      "Ctrl + Shift + F12",
      "F12",
      "Shift + F12",
    ],
    answer: "Shift + F12",
  },
  {
    question:
      "What is the file extension to save Calc spreadsheet?",
    options: [".ods", ".odl", ".xlsx", ".odc"],
    answer: ".ods",
  },
  {
    question:
      "Which option is available for editing macros in LibreOffice?",
    options: [
      "Save original Basic code",
      "Executable code",
      "Load Basic code",
      "None of this",
    ],
    answer: "Save original Basic code",
  },
  {
    question:
      "What will be the shortcut key to use Heading-1?",
    options: ["Ctrl + 4", "Ctrl + 2", "Ctrl + 3", "Ctrl + 1"],
    answer: "Ctrl + 1",
  },
  {
    question:
      "What is the minimum and maximum default font size in LibreOffice?",
    options: ["6, 96", "6, 69", "7, 72", "11, 96"],
    answer: "6, 96",
  },
  {
    question:
      "In LibreOffice, which of the following is used as Spreadsheet Software?",
    options: ["Math", "Calc", "Writer", "Customized software"],
    answer: "Calc",
  },
  {
    question:
      "__________ is the most common limitation in LibreOffice Calc.",
    options: [
      "Error-checking",
      "The trap of fixed values",
      "Lack of documentation",
      "Operators in formulas",
    ],
    answer: "The trap of fixed values",
  },
  {
    question: "Which of the following is not an input device?",
    options: ["Touch Pad", "Mouse", "Monitor", "Scanner"],
    answer: "Monitor",
  },
  {
    question:
      "Which key is used to manage the template in LibreOffice Writer?",
    options: [
      "Ctrl + N",
      "Ctrl + Shift + N",
      "Shift + O",
      "Ctrl + Shift + O",
    ],
    answer: "Ctrl + Shift + N",
  },
  {
    question: "What is Blockchain? (Q.89)",
    options: [
      "A type of cryptocurrency",
      "A distributed ledger on a peer to peer network",
      "A centralized ledger",
      "A Currency",
    ],
    answer: "A distributed ledger on a peer to peer network",
  },
    {
    question:
      "Which of the following is/are the cloud deployment models?",
    options: [
      "Public Cloud",
      "Private Cloud",
      "Hybrid Cloud",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question:
      "__________ key is used for Line Break in LibreOffice Writer without paragraph change.",
    options: [
      "Shift + Enter",
      "Ctrl + L",
      "Ctrl + Enter",
      "Ctrl + O",
    ],
    answer: "Shift + Enter",
  },
  {
    question:
      "__________ total charts are in LibreOffice Calc.",
    options: ["8", "12", "14", "10"],
    answer: "10",
  },
  {
    question:
      "Which of the following function key is used to perform a spelling check?",
    options: ["F1", "F3", "F7", "F8"],
    answer: "F7",
  },
  {
    question: "How many menus are found in LibreOffice Writer?",
    options: ["11", "13", "8", "10"],
    answer: "11",
  },
  {
    question:
      "Which of the following keyboard shortcuts is used to open the Start menu of Windows?",
    options: ["Alt + Esc", "Ctrl + Esc", "Esc", "Ctrl + S"],
    answer: "Ctrl + Esc",
  },
  {
    question:
      "You can send and read messages on ______ up to 140 words, which is the length of the phrase including all punctuation and spaces.",
    options: ["Twitter", "WhatsApp", "Facebook", "Telegram"],
    answer: "Twitter",
  },
  {
    question: "Which one is not an element of IoT?",
    options: ["Process", "Security", "People", "Things"],
    answer: "Security",
  },
  {
    question:
      "Which shortcut key do you use to close the slide in LibreOffice Impress?",
    options: ["Ctrl + N", "Ctrl + M", "Ctrl + W", "Ctrl + P"],
    answer: "Ctrl + W",
  },
  {
    question:
      "Which of these web browsers has the largest market share presently, across all platforms?",
    options: ["Edge", "Chrome", "Safari", "Firefox"],
    answer: "Chrome",
  },
  {
    question: "What is the full form of WiFi?",
    options: [
      "Wireless Federation",
      "Wireless For Internet",
      "Wireless Fidelity",
      "Wireless Internet",
    ],
    answer: "Wireless Fidelity",
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
    return `${m.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  return {
    time,
    formatTime: formatTime(time),
    start,
    pause,
    reset,
    isRunning,
  };
};
type Screen = "home" | "quiz" | "result";

const M1PYQ2025: React.FC = () => {
  const TOTAL = questions.length;
  const DURATION = TOTAL * 60;

  const [screen, setScreen] = useState<Screen>("home");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<(string | null)[]>(
    Array(TOTAL).fill(null)
  );
  const [showNav, setShowNav] = useState(false);

  const handleEnd = useCallback(() => {
    setScreen("result");
  }, []);

  const timer = useTimer(DURATION, handleEnd);

  const score = selected.reduce(
    (acc, ans, i) => acc + (ans === questions[i].answer ? 1 : 0),
    0
  );
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
      <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
        <div className="max-w-lg w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-yellow-500/30 p-8 text-center space-y-6">
          <div className="inline-block bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
            O Level M1-R5
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 leading-tight">
            M1-R5 PYQ
            <br />
            <span className="text-white">Jan 2025</span>
          </h1>
          <p className="text-gray-400 text-sm">
            {TOTAL} MCQ Questions &bull; {TOTAL} Minutes &bull; Instant Result
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <p className="text-yellow-400 font-bold text-xl">{TOTAL}</p>
              <p className="text-gray-400">Questions</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <p className="text-yellow-400 font-bold text-xl">{TOTAL} min</p>
              <p className="text-gray-400">Duration</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <p className="text-yellow-400 font-bold text-xl">+1</p>
              <p className="text-gray-400">Per Correct</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <p className="text-yellow-400 font-bold text-xl">0</p>
              <p className="text-gray-400">Negative Mark</p>
            </div>
          </div>
          <button
            onClick={startQuiz}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-2xl text-lg transition-all duration-200 shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 active:scale-[0.98]"
          >
            🚀 Attempt Mock Test
          </button>
          <a
            href="https://olevelstudy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold py-3 rounded-2xl text-base transition-all duration-200"
          >
            📄 View PDF
          </a>
          <p className="text-gray-600 text-xs pt-2">
            Powered by{" "}
            <span className="text-yellow-400 font-semibold">
              oLevelStudy.com
            </span>
          </p>
        </div>
      </div>
    );
    }
    if (screen === "result") {
    const getGrade = () => {
      if (percentage >= 90)
        return { label: "Excellent! 🏆", color: "text-green-400" };
      if (percentage >= 70)
        return { label: "Great Job! 🎯", color: "text-yellow-400" };
      if (percentage >= 50)
        return { label: "Good Effort! 💪", color: "text-orange-400" };
      return { label: "Keep Practicing! 📚", color: "text-red-400" };
    };
    const grade = getGrade();

    return (
      <div className="min-h-screen bg-black px-4 py-10">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-yellow-500/30 p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Quiz Completed!
            </h2>
            <p className={`text-3xl font-extrabold ${grade.color}`}>
              {grade.label}
            </p>
            <div className="relative w-40 h-40 mx-auto">
              <svg
                className="w-full h-full -rotate-90"
                viewBox="0 0 120 120"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="10"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  fill="none"
                  stroke="#FBBF24"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${
                    (percentage / 100) * 327
                  } 327`}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold text-yellow-400">
                  {percentage}%
                </span>
                <span className="text-xs text-gray-400">Score</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3">
                <p className="text-green-400 font-bold text-xl">
                  {score}
                </p>
                <p className="text-gray-400">Correct</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3">
                <p className="text-red-400 font-bold text-xl">
                  {attempted - score}
                </p>
                <p className="text-gray-400">Wrong</p>
              </div>
              <div className="bg-gray-500/10 border border-gray-500/30 rounded-xl p-3">
                <p className="text-gray-300 font-bold text-xl">
                  {TOTAL - attempted}
                </p>
                <p className="text-gray-400">Skipped</p>
              </div>
            </div>
          </div>
                    <div className="bg-gray-900 rounded-3xl border border-gray-700 p-6 space-y-4">
            <h3 className="text-lg font-bold text-yellow-400">
              📋 Answer Review
            </h3>
            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
              {questions.map((q, i) => {
                const isCorrect = selected[i] === q.answer;
                const isSkipped = selected[i] === null;
                return (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border ${
                      isSkipped
                        ? "border-gray-600 bg-gray-800/50"
                        : isCorrect
                        ? "border-green-500/40 bg-green-500/5"
                        : "border-red-500/40 bg-red-500/5"
                    }`}
                  >
                    <p className="text-gray-300 text-sm font-medium mb-1">
                      <span className="text-yellow-400 font-bold">
                        Q{i + 1}.
                      </span>{" "}
                      {q.question}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {!isSkipped && (
                        <span
                          className={`px-2 py-1 rounded-full ${
                            isCorrect
                              ? "bg-green-500/20 text-green-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          Your: {selected[i]}
                        </span>
                      )}
                      {isSkipped && (
                        <span className="px-2 py-1 rounded-full bg-gray-600/40 text-gray-400">
                          Skipped
                        </span>
                      )}
                      {!isCorrect && (
                        <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                          ✓ {q.answer}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={startQuiz}
              className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-2xl transition-all active:scale-[0.98]"
            >
              🔄 Retry Quiz
            </button>
            <button
              onClick={() => setScreen("home")}
              className="flex-1 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold py-4 rounded-2xl transition-all"
            >
              🏠 Home
            </button>
          </div>
        </div>
      </div>
    );
    }
    const q = questions[current];

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="sticky top-0 z-30 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <button
            onClick={() => setShowNav(!showNav)}
            className="flex items-center gap-2 text-yellow-400 font-bold text-sm bg-yellow-400/10 hover:bg-yellow-400/20 px-3 py-2 rounded-xl transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Q{current + 1}/{TOTAL}
          </button>
          <div
            className={`flex items-center gap-2 font-mono font-bold text-lg px-4 py-2 rounded-xl ${
              timer.time <= 60
                ? "bg-red-500/20 text-red-400 animate-pulse"
                : timer.time <= 300
                ? "bg-orange-500/15 text-orange-400"
                : "bg-yellow-400/10 text-yellow-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {timer.formatTime}
          </div>
          <button
            onClick={submitQuiz}
            className="bg-red-500 hover:bg-red-400 text-white font-bold text-sm px-4 py-2 rounded-xl transition-all active:scale-95"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="w-full h-1 bg-gray-800">
        <div
          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-500 ease-out"
          style={{
            width: `${((current + 1) / TOTAL) * 100}%`,
          }}
        />
      </div>
            {showNav && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setShowNav(false)}
          />
          <div className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-gray-900 z-50 border-r border-gray-700 overflow-y-auto p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-yellow-400 font-bold text-lg">
                Question Navigator
              </h3>
              <button
                onClick={() => setShowNav(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                Current
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                Answered
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-gray-600 inline-block" />
                Unanswered
              </span>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {questions.map((_, i) => {
                const isCurrent = i === current;
                const isAnswered = selected[i] !== null;
                return (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${
                      isCurrent
                        ? "bg-yellow-400 text-black scale-110 shadow-lg shadow-yellow-400/30"
                        : isAnswered
                        ? "bg-green-500/20 text-green-400 border border-green-500/40"
                        : "bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-500"
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
            <div className="text-gray-400 text-xs text-center pt-2">
              Answered: {attempted} / {TOTAL}
            </div>
          </div>
        </>
      )}
