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
    options: [
      "Menu bar",
      "Status bar",
      "Title bar",
      "Standard Toolbar",
    ],
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
    question:
      "What is the default page orientation of LibreOffice?",
    options: ["Landscape", "Portrait", "A4", "A3"],
    answer: "Portrait",
  },
  {
    question:
      "Which among the following is not a pointing device?",
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
    question:
      "The term word processing was invented by ______.",
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
    options: [
      "1024 GB",
      "1048576 GB",
      "524288 GB",
      "4194304 GB",
    ],
    answer: "1048576 GB",
  },
  {
    question:
      "What is the term used when you press and hold the left mouse key and mouse around the slide?",
    options: [
      "Highlighting",
      "Moving",
      "Dragging",
      "Monitoring",
    ],
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
    options: [
      "Performance",
      "Security",
      "Reliability",
      "Ability",
    ],
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
      "Which option should be used to type CO2 to get 2 at its proper place?",
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
    options: [
      "Esc key",
      "Spacebar",
      "Enter key",
      "Mouse button",
    ],
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
    options: [
      "Menu bar",
      "Status bar",
      "Title bar",
      "Standard Toolbar",
    ],
    answer: "Title bar",
  },
  {
    question:
      "Which of the following chart shows values as circular sectors of the total circle?",
    options: [
      "Bar chart",
      "Circular chart",
      "Oval chart",
      "Pie chart",
    ],
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
    options: [
      "AVG( )",
      "AVERAGE( )",
      "AVR( )",
      "MEAN( )",
    ],
    answer: "AVERAGE( )",
  },
  {
    question:
      "Which of the following documents appears blurred behind the text?",
    options: [
      "Background",
      "Watermark",
      "Front land",
      "Image",
    ],
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
    options: [
      "Word Start",
      "WordStar",
      "Writer",
      "Microsoft Word",
    ],
    answer: "WordStar",
  },
  {
    question:
      "Which of the following is the example of ISP?",
    options: [
      "Chrome",
      "Firefox",
      "Internet Explorer",
      "Airtel",
    ],
    answer: "Airtel",
  },
    {
    question:
      "If you want to share a document and you want people to just see it and not edit it then what should you use?",
    options: ["ODT", "DOCX", "PDF", "DOC"],
    answer: "PDF",
  },
  {
    question:
      "Which of the following is the search engine?",
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
    question:
      "Dotted areas in empty slide are called:",
    options: [
      "Template",
      "Placard",
      "Placeholders",
      "Themes",
    ],
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
    question:
      'Shortcut key for "Save as" is ________',
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
    question:
      "Third Generation of Computers used ________",
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
    question:
      "To adjust the width of table columns, you:",
    options: [
      "Drag the column markers on the table ruler bar",
      "Click table menu, Column width, then make adjustments",
      "Both A and B",
      "Drag the vertical gridline between two columns",
    ],
    answer: "Both A and B",
  },
    {
    question:
      "Which acts as a personal assistant in Windows 10?",
    options: ["Alexa", "Cortana", "Google", "Siri"],
    answer: "Cortana",
  },
  {
    question:
      "The default text area for slide will start from __________",
    options: [
      "Letters",
      "Numbers",
      "Alpha Numeric",
      "Bullet",
    ],
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
    options: [
      "CTRL+Alt+E",
      "CTRL+E",
      "CTRL+Shift+E",
      "CTRL+F9",
    ],
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
    question:
      "What is the shortcut key to full screen LibreOffice?",
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
    options: [
      "Computer",
      "Modem",
      "Printer",
      "Cable",
    ],
    answer: "Modem",
  },
  {
    question:
      "What is the shortcut key to cut in LibreOffice?",
    options: [
      "Ctrl + C",
      "Ctrl + X",
      "Ctrl + K",
      "Shift + X",
    ],
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
    options: [
      "Ctrl + 4",
      "Ctrl + 2",
      "Ctrl + 3",
      "Ctrl + 1",
    ],
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
    options: [
      "Math",
      "Calc",
      "Writer",
      "Customized software",
    ],
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
    question:
      "Which of the following is not an input device?",
    options: [
      "Touch Pad",
      "Mouse",
      "Monitor",
      "Scanner",
    ],
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
    answer:
      "A distributed ledger on a peer to peer network",
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
    question:
      "How many menus are found in LibreOffice Writer?",
    options: ["11", "13", "8", "10"],
    answer: "11",
  },
  {
    question:
      "Which of the following keyboard shortcuts is used to open the Start menu of Windows?",
    options: [
      "Alt + Esc",
      "Ctrl + Esc",
      "Esc",
      "Ctrl + S",
    ],
    answer: "Ctrl + Esc",
  },
  {
    question:
      "You can send and read messages on ______ up to 140 words, which is the length of the phrase including all punctuation and spaces.",
    options: [
      "Twitter",
      "WhatsApp",
      "Facebook",
      "Telegram",
    ],
    answer: "Twitter",
  },
  {
    question: "Which one is not an element of IoT?",
    options: [
      "Process",
      "Security",
      "People",
      "Things",
    ],
    answer: "Security",
  },
  {
    question:
      "Which shortcut key do you use to close the slide in LibreOffice Impress?",
    options: [
      "Ctrl + N",
      "Ctrl + M",
      "Ctrl + W",
      "Ctrl + P",
    ],
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
const useTimer = (
  initialTime: number,
  onEnd: () => void
) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning && time > 0) {
      interval = setInterval(
        () => setTime((t) => t - 1),
        1000
      );
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
  const [selected, setSelected] = useState<
    (string | null)[]
  >(Array(TOTAL).fill(null));
  const [showNav, setShowNav] = useState(false);

  const handleEnd = useCallback(() => {
    setScreen("result");
  }, []);

  const timer = useTimer(DURATION, handleEnd);

  const score = selected.reduce(
    (acc, ans, i) =>
      acc + (ans === questions[i].answer ? 1 : 0),
    0
  );
  const attempted = selected.filter(
    (a) => a !== null
  ).length;
  const percentage = Math.round(
    (score / TOTAL) * 100
  );

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

  const next = () =>
    setCurrent((c) => Math.min(c + 1, TOTAL - 1));
  const prev = () =>
    setCurrent((c) => Math.max(c - 1, 0));
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
      <div
        className="min-h-screen flex items-center justify-center px-4 py-8"
        style={{ backgroundColor: "#0f172a" }}
      >
        <div
          className="max-w-lg w-full rounded-3xl shadow-2xl p-6 sm:p-8 text-center space-y-5"
          style={{
            backgroundColor: "#1e293b",
            border: "2px solid #facc15",
          }}
        >
          <div
            className="inline-block text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest"
            style={{
              backgroundColor: "#facc15",
              color: "#0f172a",
            }}
          >
            O Level M1-R5
          </div>

          <h1
            className="text-3xl sm:text-4xl font-extrabold leading-tight"
            style={{ color: "#facc15" }}
          >
            M1-R5 PYQ
            <br />
            <span style={{ color: "#ffffff" }}>
              Jan 2025
            </span>
          </h1>

          <p style={{ color: "#d1d5db", fontSize: "14px" }}>
            {TOTAL} MCQ Questions • {TOTAL} Minutes •
            Instant Result
          </p>

          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              { val: String(TOTAL), label: "Questions" },
              {
                val: `${TOTAL} min`,
                label: "Duration",
              },
              { val: "+1", label: "Per Correct" },
              { val: "0", label: "Negative Mark" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl p-4"
                style={{
                  backgroundColor: "#0f172a",
                  border: "1px solid #334155",
                }}
              >
                <p
                  className="font-bold text-xl"
                  style={{ color: "#facc15" }}
                >
                  {item.val}
                </p>
                <p style={{ color: "#9ca3af" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={startQuiz}
            className="w-full font-bold py-4 rounded-2xl text-lg transition-all duration-200 active:scale-95"
            style={{
              backgroundColor: "#facc15",
              color: "#0f172a",
              boxShadow: "0 8px 30px rgba(250,204,21,0.3)",
            }}
          >
            🚀 Attempt Mock Test
          </button>

          <a
            href="https://olevelstudy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full font-bold py-3 rounded-2xl text-base transition-all duration-200"
            style={{
              border: "2px solid #facc15",
              color: "#facc15",
              backgroundColor: "transparent",
            }}
          >
            📄 View PDF
          </a>

          <p
            className="text-xs pt-2"
            style={{ color: "#6b7280" }}
          >
            Powered by{" "}
            <span
              className="font-semibold"
              style={{ color: "#facc15" }}
            >
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
        return {
          label: "Excellent! 🏆",
          color: "#22c55e",
        };
      if (percentage >= 70)
        return {
          label: "Great Job! 🎯",
          color: "#facc15",
        };
      if (percentage >= 50)
        return {
          label: "Good Effort! 💪",
          color: "#f97316",
        };
      return {
        label: "Keep Practicing! 📚",
        color: "#ef4444",
      };
    };
    const grade = getGrade();

    return (
      <div
        className="min-h-screen px-4 py-6"
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className="max-w-2xl mx-auto space-y-5">
          <div
            className="rounded-2xl p-6 sm:p-8 text-center space-y-4"
            style={{
              backgroundColor: "#1e293b",
              border: "2px solid #facc15",
            }}
          >
            <h2
              className="text-2xl font-bold"
              style={{ color: "#ffffff" }}
            >
              Quiz Completed!
            </h2>
            <p
              className="text-3xl font-extrabold"
              style={{ color: grade.color }}
            >
              {grade.label}
            </p>

            <div className="relative w-36 h-36 mx-auto">
              <svg
                className="w-full h-full"
                viewBox="0 0 120 120"
                style={{
                  transform: "rotate(-90deg)",
                }}
              >
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="10"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  fill="none"
                  stroke="#facc15"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${
                    (percentage / 100) * 327
                  } 327`}
                />
              </svg>
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <span
                  className="text-3xl font-extrabold"
                  style={{ color: "#facc15" }}
                >
                  {percentage}%
                </span>
                <span
                  className="text-xs"
                  style={{ color: "#d1d5db" }}
                >
                  Score
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-sm">
              <div
                className="rounded-xl p-3"
                style={{
                  backgroundColor: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.4)",
                }}
              >
                <p
                  className="font-bold text-xl"
                  style={{ color: "#22c55e" }}
                >
                  {score}
                </p>
                <p style={{ color: "#d1d5db" }}>
                  Correct
                </p>
              </div>
              <div
                className="rounded-xl p-3"
                style={{
                  backgroundColor: "rgba(239,68,68,0.1)",
                  border: "1px solid rgba(239,68,68,0.4)",
                }}
              >
                <p
                  className="font-bold text-xl"
                  style={{ color: "#ef4444" }}
                >
                  {attempted - score}
                </p>
                <p style={{ color: "#d1d5db" }}>
                  Wrong
                </p>
              </div>
              <div
                className="rounded-xl p-3"
                style={{
                  backgroundColor: "rgba(148,163,184,0.1)",
                  border: "1px solid rgba(148,163,184,0.3)",
                }}
              >
                <p
                  className="font-bold text-xl"
                  style={{ color: "#e2e8f0" }}
                >
                  {TOTAL - attempted}
                </p>
                <p style={{ color: "#d1d5db" }}>
                  Skipped
                </p>
              </div>
            </div>
          </div>
                    <div
            className="rounded-2xl p-5 space-y-4"
            style={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
            }}
          >
            <h3
              className="text-lg font-bold"
              style={{ color: "#facc15" }}
            >
              📋 Answer Review
            </h3>
            <div
              className="space-y-3 overflow-y-auto pr-1"
              style={{ maxHeight: "55vh" }}
            >
              {questions.map((q, i) => {
                const isCorrect =
                  selected[i] === q.answer;
                const isSkipped =
                  selected[i] === null;

                let borderCol = "#475569";
                let bgCol = "rgba(71,85,105,0.15)";
                if (!isSkipped && isCorrect) {
                  borderCol =
                    "rgba(34,197,94,0.5)";
                  bgCol =
                    "rgba(34,197,94,0.08)";
                } else if (
                  !isSkipped &&
                  !isCorrect
                ) {
                  borderCol =
                    "rgba(239,68,68,0.5)";
                  bgCol =
                    "rgba(239,68,68,0.08)";
                }

                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl"
                    style={{
                      border: `1px solid ${borderCol}`,
                      backgroundColor: bgCol,
                    }}
                  >
                    <p
                      className="text-sm font-medium mb-2"
                      style={{ color: "#e2e8f0" }}
                    >
                      <span
                        className="font-bold"
                        style={{
                          color: "#facc15",
                        }}
                      >
                        Q{i + 1}.
                      </span>{" "}
                      {q.question}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {!isSkipped && (
                        <span
                          className="px-2 py-1 rounded-full"
                          style={{
                            backgroundColor:
                              isCorrect
                                ? "rgba(34,197,94,0.2)"
                                : "rgba(239,68,68,0.2)",
                            color: isCorrect
                              ? "#22c55e"
                              : "#ef4444",
                          }}
                        >
                          Your: {selected[i]}
                        </span>
                      )}
                      {isSkipped && (
                        <span
                          className="px-2 py-1 rounded-full"
                          style={{
                            backgroundColor:
                              "rgba(148,163,184,0.2)",
                            color: "#94a3b8",
                          }}
                        >
                          Skipped
                        </span>
                      )}
                      {!isCorrect && (
                        <span
                          className="px-2 py-1 rounded-full"
                          style={{
                            backgroundColor:
                              "rgba(34,197,94,0.2)",
                            color: "#22c55e",
                          }}
                        >
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
              className="flex-1 font-bold py-4 rounded-2xl transition-all active:scale-95"
              style={{
                backgroundColor: "#facc15",
                color: "#0f172a",
              }}
            >
              🔄 Retry Quiz
            </button>
            <button
              onClick={() => setScreen("home")}
              className="flex-1 font-bold py-4 rounded-2xl transition-all active:scale-95"
              style={{
                border: "2px solid #facc15",
                color: "#facc15",
                backgroundColor: "transparent",
              }}
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
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#0f172a" }}
    >
      <div
        className="sticky top-0 z-30 px-4 py-3"
        style={{
          backgroundColor: "rgba(30,41,59,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #334155",
        }}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <button
            onClick={() => setShowNav(!showNav)}
            className="flex items-center gap-2 font-bold text-sm px-3 py-2 rounded-xl transition-all"
            style={{
              backgroundColor: "rgba(250,204,21,0.15)",
              color: "#facc15",
              border: "1px solid rgba(250,204,21,0.3)",
            }}
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
            className="flex items-center gap-2 font-mono font-bold text-lg px-4 py-2 rounded-xl"
            style={{
              backgroundColor:
                timer.time <= 60
                  ? "rgba(239,68,68,0.2)"
                  : timer.time <= 300
                  ? "rgba(249,115,22,0.15)"
                  : "rgba(250,204,21,0.12)",
              color:
                timer.time <= 60
                  ? "#ef4444"
                  : timer.time <= 300
                  ? "#f97316"
                  : "#facc15",
              border: `1px solid ${
                timer.time <= 60
                  ? "rgba(239,68,68,0.4)"
                  : timer.time <= 300
                  ? "rgba(249,115,22,0.3)"
                  : "rgba(250,204,21,0.3)"
              }`,
            }}
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
            className="font-bold text-sm px-4 py-2 rounded-xl transition-all active:scale-95"
            style={{
              backgroundColor: "#ef4444",
              color: "#ffffff",
              border: "1px solid #f87171",
            }}
          >
            Submit
          </button>
        </div>
      </div>

      <div
        className="w-full"
        style={{
          height: "4px",
          backgroundColor: "#1e293b",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${
              ((current + 1) / TOTAL) * 100
            }%`,
            background:
              "linear-gradient(90deg, #facc15, #eab308)",
            transition: "width 0.5s ease-out",
            borderRadius: "0 4px 4px 0",
          }}
        />
      </div>
            {showNav && (
        <>
          <div
            className="fixed inset-0 z-40"
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
            onClick={() => setShowNav(false)}
          />
          <div
            className="fixed left-0 top-0 bottom-0 z-50 overflow-y-auto p-5 space-y-4"
            style={{
              width: "320px",
              maxWidth: "85vw",
              backgroundColor: "#1e293b",
              borderRight: "2px solid #facc15",
            }}
          >
            <div className="flex items-center justify-between">
              <h3
                className="font-bold text-lg"
                style={{ color: "#facc15" }}
              >
                Question Navigator
              </h3>
              <button
                onClick={() => setShowNav(false)}
                className="text-2xl"
                style={{ color: "#94a3b8" }}
              >
                ✕
              </button>
            </div>

            <div
              className="flex gap-4 text-xs"
              style={{ color: "#d1d5db" }}
            >
              <span className="flex items-center gap-1">
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: "#facc15",
                  }}
                />
                Current
              </span>
              <span className="flex items-center gap-1">
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: "#22c55e",
                  }}
                />
                Answered
              </span>
              <span className="flex items-center gap-1">
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: "#475569",
                  }}
                />
                Unanswered
              </span>
            </div>

            <div className="grid grid-cols-6 gap-2">
              {questions.map((_, i) => {
                const isCurr = i === current;
                const isAns = selected[i] !== null;
                let bg = "#0f172a";
                let col = "#94a3b8";
                let bdr = "#475569";
                if (isCurr) {
                  bg = "#facc15";
                  col = "#0f172a";
                  bdr = "#facc15";
                } else if (isAns) {
                  bg = "rgba(34,197,94,0.15)";
                  col = "#22c55e";
                  bdr = "rgba(34,197,94,0.5)";
                }
                return (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className="w-10 h-10 rounded-lg text-sm font-bold transition-all"
                    style={{
                      backgroundColor: bg,
                      color: col,
                      border: `1.5px solid ${bdr}`,
                    }}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>

            <div
              className="text-xs text-center pt-2"
              style={{ color: "#94a3b8" }}
            >
              Answered: {attempted} / {TOTAL}
            </div>
          </div>
        </>
      )}
            <div className="flex-1 flex items-start justify-center px-4 py-5">
        <div className="max-w-3xl w-full space-y-5">
          <div
            className="rounded-2xl p-5 sm:p-6"
            style={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
            }}
          >
            <span
              className="inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4"
              style={{
                backgroundColor:
                  "rgba(250,204,21,0.15)",
                color: "#facc15",
                border:
                  "1px solid rgba(250,204,21,0.3)",
              }}
            >
              Question {current + 1} of {TOTAL}
            </span>
            <h2
              className="text-lg sm:text-xl font-semibold leading-relaxed"
              style={{ color: "#ffffff" }}
            >
              {q.question}
            </h2>
          </div>

          <div className="space-y-3">
            {q.options.map((opt, idx) => {
              const isSel =
                selected[current] === opt;
              const labels = ["A", "B", "C", "D"];

              return (
                <button
                  key={idx}
                  onClick={() => selectOption(opt)}
                  className="w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center gap-4"
                  style={{
                    backgroundColor: isSel
                      ? "rgba(250,204,21,0.12)"
                      : "#111827",
                    border: isSel
                      ? "2px solid #facc15"
                      : "2px solid #334155",
                    boxShadow: isSel
                      ? "0 4px 20px rgba(250,204,21,0.15)"
                      : "none",
                  }}
                >
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      backgroundColor: isSel
                        ? "#facc15"
                        : "#1e293b",
                      color: isSel
                        ? "#0f172a"
                        : "#d1d5db",
                      border: isSel
                        ? "none"
                        : "1px solid #475569",
                    }}
                  >
                    {labels[idx]}
                  </span>
                  <span
                    className="text-sm sm:text-base"
                    style={{
                      color: isSel
                        ? "#facc15"
                        : "#e2e8f0",
                      fontWeight: isSel
                        ? 600
                        : 400,
                    }}
                  >
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
