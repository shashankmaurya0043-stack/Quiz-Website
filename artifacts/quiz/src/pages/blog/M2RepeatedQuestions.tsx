import React, { useState, useEffect, useCallback } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const m2Questions: Question[] = [
  { question: "What is the full form of HTML?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of these"], answer: "Hyper Text Markup Language" },
  { question: "Which tag is used to create a hyperlink?", options: ["<link>", "<a>", "<img>", "<href>"], answer: "<a>" },
  { question: "Which CSS property is used to change the background color?", options: ["color", "bgcolor", "background-color", "back-color"], answer: "background-color" },
  { question: "What is the correct tag for the largest heading?", options: ["<h6>", "<heading>", "<h1>", "<head>"], answer: "<h1>" },
  { question: "W3.CSS is a standard _______ framework.", options: ["JavaScript", "CSS", "PHP", "Python"], answer: "CSS" },
  { question: "Which tag is used to define an internal style sheet?", options: ["<script>", "<css>", "<style>", "<link>"], answer: "<style>" },
  { question: "What is the default value of the position property in CSS?", options: ["relative", "fixed", "absolute", "static"], answer: "static" },
  { question: "Which sign is used for IDs in CSS selectors?", options: [".", "#", "*", "@"], answer: "#" },
  { question: "Inside which HTML element do we put the JavaScript?", options: ["<js>", "<scripting>", "<script>", "<javascript>"], answer: "<script>" },
  { question: "Which attribute is used to provide an alternative text for an image?", options: ["title", "src", "alt", "longdesc"], answer: "alt" },
  { question: "How can you create a list with numbers?", options: ["<ul>", "<list>", "<ol>", "<dl>"], answer: "<ol>" },
  { question: "Which W3.CSS class is used to create a responsive grid?", options: ["w3-row", "w3-grid", "w3-container", "w3-layout"], answer: "w3-row" },
  { question: "Which protocol is used for transferring files on the web?", options: ["HTTP", "SMTP", "FTP", "TELNET"], answer: "FTP" },
  { question: "Which JavaScript method is used to write into the browser's console?", options: ["console.print()", "console.log()", "console.write()", "console.output()"], answer: "console.log()" },
  { question: "What is the correct syntax for referring to an external script named 'xxx.js'?", options: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"], answer: "<script src='xxx.js'>" },
  { question: "Which CSS property controls the text size?", options: ["font-style", "text-size", "font-size", "text-style"], answer: "font-size" },
  { question: "Which tag is used to create a table row?", options: ["<td>", "<th>", "<table>", "<tr>"], answer: "<tr>" },
  { question: "The # symbol in CSS is used to select elements with a specific ______.", options: ["Class", "Tag", "ID", "Attribute"], answer: "ID" },
  { question: "Which of the following is not a valid image format for web?", options: ["JPG", "PNG", "GIF", "PSD"], answer: "PSD" },
  { question: "Which HTML element is used for the document's footer?", options: ["<bottom>", "<section>", "<footer>", "<end>"], answer: "<footer>" },
  { question: "How do you display hyperlinks without an underline in CSS?", options: ["a {text-decoration:none;}", "a {underline:none;}", "a {decoration:no-underline;}", "a {text-style:none;}"], answer: "a {text-decoration:none;}" },
  { question: "Which W3.CSS class adds a 16px padding to an element?", options: ["w3-padding-16", "w3-margin-16", "w3-container", "w3-box"], answer: "w3-padding-16" },
  { question: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
  { question: "Which tag is used to define a list item?", options: ["<li>", "<ul>", "<ol>", "<list>"], answer: "<li>" },
  { question: "How do you call a function named 'myFunction' in JavaScript?", options: ["call myFunction()", "myFunction()", "call function myFunction()", "execute myFunction()"], answer: "myFunction()" },
  { question: "Which HTML attribute is used to define inline styles?", options: ["font", "class", "styles", "style"], answer: "style" },
  { question: "Which tag is used to insert a line break?", options: ["<break>", "<lb>", "<br>", "<newline>"], answer: "<br>" },
  { question: "In CSS, 'padding' is the space between content and ______.", options: ["Margin", "Border", "Other elements", "Window"], answer: "Border" },
  { question: "Which W3.CSS class makes an image circular?", options: ["w3-circle", "w3-round", "w3-oval", "w3-image-circle"], answer: "w3-circle" },
  { question: "What is the correct way to write a JavaScript array?", options: ["var colors = 1=('red'), 2=('green')", "var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green')", "var colors = 'red', 'green'"], answer: "var colors = ['red', 'green', 'blue']" },
  { question: "Which HTML element is used to specify a header for a document?", options: ["<top>", "<head>", "<header>", "<section>"], answer: "<header>" },
  { question: "The 'box-sizing: border-box' property includes ______ in the element's total width.", options: ["Padding and Border", "Margin", "Background", "Font size"], answer: "Padding and Border" },
  { question: "Which sign is used for classes in CSS?", options: ["#", "@", ".", "*"], answer: "." },
  { question: "Which JavaScript operator is used to assign a value to a variable?", options: ["*", "-", "=", "x"], answer: "=" },
  { question: "Which tag is used to create a checkbox in HTML forms?", options: ["<checkbox>", "<input type='check'>", "<input type='checkbox'>", "<check>"], answer: "<input type='checkbox'>" },
  { question: "What is the full form of URL?", options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Radio Locator", "None of these"], answer: "Uniform Resource Locator" },
  { question: "Which CSS property makes text bold?", options: ["font-weight", "text-bold", "font-style", "bold"], answer: "font-weight" },
  { question: "Which W3.CSS class creates a responsive navigation bar?", options: ["w3-navbar", "w3-bar", "w3-nav", "w3-menu"], answer: "w3-bar" },
  { question: "How can you make a list that lists the items with bullets?", options: ["<ol>", "<ul>", "<dl>", "<list>"], answer: "<ul>" },
  { question: "Which function is used to convert a string to an integer in JS?", options: ["parseInteger()", "parseInt()", "Integer.parse()", "toInt()"], answer: "parseInt()" },
];
const part2: Question[] = [
  { question: "What is the correct HTML for adding a background color?", options: ["<body bg='yellow'>", "<body style='background-color:yellow;'>", "<background>yellow</background>", "<body bgcolor='yellow'>"], answer: "<body style='background-color:yellow;'>" },
  { question: "Which tag is used to define an unordered list?", options: ["<ol>", "<ul>", "<li>", "<list>"], answer: "<ul>" },
  { question: "Which W3.CSS class is used for a red background?", options: ["w3-color-red", "w3-bg-red", "w3-red", "red"], answer: "w3-red" },
  { question: "Which event occurs when a user clicks on an HTML element?", options: ["onmouseover", "onchange", "onclick", "onmouseclick"], answer: "onclick" },
  { question: "Which tag is used to create a dropdown list?", options: ["<input type='dropdown'>", "<list>", "<select>", "<dropdown>"], answer: "<select>" },
  { question: "The 'float' property in CSS can have values ______.", options: ["up, down", "left, right", "center", "none"], answer: "left, right" },
  { question: "Which HTML element is used for an input field with multiple lines?", options: ["<input type='textbox'>", "<input type='area'>", "<textarea>", "<text>"], answer: "<textarea>" },
  { question: "Which W3.CSS class is used to center text?", options: ["w3-center", "w3-text-center", "w3-align-center", "center"], answer: "w3-center" },
  { question: "What is the purpose of the <head> tag?", options: ["To display main content", "To store metadata and links", "To create a header", "To define the body"], answer: "To store metadata and links" },
  { question: "Which CSS property is used to change the left margin of an element?", options: ["padding-left", "indent", "margin-left", "margin"], answer: "margin-left" },
  { question: "Which operator is used to compare both value and type in JavaScript?", options: ["==", "===", "=", "!="], answer: "===" },
  { question: "Which tag is used to embed a video in HTML5?", options: ["<media>", "<movie>", "<video>", "<embed>"], answer: "<video>" },
  { question: "What does W3C stand for?", options: ["World Wide Web Consortium", "World Wide Web Code", "World Web Control", "None"], answer: "World Wide Web Consortium" },
  { question: "Which CSS property is used to create space around elements, outside of any defined borders?", options: ["padding", "spacing", "margin", "border"], answer: "margin" },
  { question: "Which JavaScript keyword is used to declare a variable?", options: ["var", "let", "const", "All of the above"], answer: "All of the above" },
  { question: "Which tag is used to create a table data cell?", options: ["<tr>", "<th>", "<td>", "<cell>"], answer: "<td>" },
  { question: "Which W3.CSS class is used to add a border to a container?", options: ["w3-border", "w3-line", "w3-outline", "w3-bordered"], answer: "w3-border" },
  { question: "Which attribute must be used in <form> to send data via URL?", options: ["method='post'", "method='get'", "action='url'", "target='_blank'"], answer: "method='get'" },
  { question: "How do you write 'Hello World' in an alert box?", options: ["msg('Hello World')", "msgBox('Hello World')", "alert('Hello World')", "alertBox('Hello World')"], answer: "alert('Hello World')" },
  { question: "Which CSS property controls the stack order of elements?", options: ["z-index", "order", "stack", "position"], answer: "z-index" },
  { question: "Which HTML element is used to group inline-elements?", options: ["<div>", "<span>", "<section>", "<p>"], answer: "<span>" },
  { question: "Which W3.CSS class defines a 1/3 column in a 12-column grid?", options: ["w3-col l3", "w3-col l4", "w3-col l6", "w3-col l2"], answer: "w3-col l4" },
  { question: "Which tag is used to display a small icon on the browser tab?", options: ["<icon>", "<link rel='favicon'>", "<link rel='icon'>", "<tab-icon>"], answer: "<link rel='icon'>" },
  { question: "In JavaScript, '5' + 5 results in:", options: ["10", "55", "Error", "NaN"], answer: "55" },
  { question: "Which CSS property is used to change the font of an element?", options: ["font-family", "font-style", "text-font", "font-type"], answer: "font-family" },
  { question: "Which tag is used for metadata in HTML?", options: ["<meta>", "<head>", "<data>", "<info>"], answer: "<meta>" },
  { question: "Which W3.CSS class is used to make a table striped?", options: ["w3-striped", "w3-table-striped", "w3-zebra", "w3-row-striped"], answer: "w3-striped" },
  { question: "Which HTML5 attribute is used to validate an input field automatically?", options: ["validate", "check", "required", "mandatory"], answer: "required" },
  { question: "Which JavaScript function returns the character at a specified index?", options: ["charAt()", "getChar()", "indexAt()", "char()"], answer: "charAt()" },
  { question: "Which CSS property allows you to make a multi-column layout?", options: ["column-count", "layout-columns", "grid-cols", "display:multi"], answer: "column-count" },
  { question: "What is the default port for HTTP?", options: ["21", "25", "80", "443"], answer: "80" },
  { question: "Which tag is used to create a numbered list?", options: ["<ul>", "<li>", "<ol>", "<nl>"], answer: "<ol>" },
  { question: "Which CSS property defines the transparency of an element?", options: ["visibility", "filter", "opacity", "transparent"], answer: "opacity" },
  { question: "Which W3.CSS class makes a container 100% wide?", options: ["w3-container", "w3-full", "w3-row", "w3-block"], answer: "w3-container" },
  { question: "Which JavaScript loop runs at least once?", options: ["for", "while", "do...while", "foreach"], answer: "do...while" },
  { question: "Which HTML tag is used to define an image?", options: ["<picture>", "<img>", "<image>", "<src>"], answer: "<img>" },
  { question: "Which property is used in CSS to align text to the right?", options: ["align:right", "text-align:right", "horizontal-align:right", "float:right"], answer: "text-align:right" },
  { question: "Which W3.CSS class is used for a large font size?", options: ["w3-large", "w3-big", "w3-xlarge", "w3-font-large"], answer: "w3-xlarge" },
  { question: "Which symbol is used for comments in CSS?", options: ["//", "/* */", "#", "<!-- -->"], answer: "/* */" },
  { question: "How do you find the number of elements in a JS array?", options: ["array.count()", "array.size", "array.length", "array.items"], answer: "array.length" },
];
const part3: Question[] = [
  { question: "Which HTML element is used for the main title of the page?", options: ["<title>", "<h1>", "<head>", "<header>"], answer: "<h1>" },
  { question: "What is the correct way to add an external CSS file?", options: ["<link rel='stylesheet' href='style.css'>", "<style src='style.css'>", "<css file='style.css'>", "<link file='style.css'>"], answer: "<link rel='stylesheet' href='style.css'>" },
  { question: "Which W3.CSS class is used for a standard card?", options: ["w3-box", "w3-panel", "w3-card", "w3-container"], answer: "w3-card" },
  { question: "Which JavaScript method is used to remove the last element of an array?", options: ["pop()", "push()", "shift()", "remove()"], answer: "pop()" },
  { question: "Which tag is used to create a submit button?", options: ["<button type='submit'>", "<input type='submit'>", "Both A and B", "None"], answer: "Both A and B" },
  { question: "Which CSS property is used to change the color of text?", options: ["fgcolor", "text-color", "color", "font-color"], answer: "color" },
  { question: "Which HTML tag is used for the smallest heading?", options: ["<h1>", "<h6>", "<heading-min>", "<h5>"], answer: "<h6>" },
  { question: "Which W3.CSS class creates a dark-grey background?", options: ["w3-dark-grey", "w3-grey-dark", "w3-black", "w3-grey"], answer: "w3-dark-grey" },
  { question: "What is the output of 'typeof NaN' in JavaScript?", options: ["number", "NaN", "undefined", "object"], answer: "number" },
  { question: "Which tag is used to create a horizontal line?", options: ["<line>", "<br>", "<hr>", "<hl>"], answer: "<hr>" },
  { question: "Which CSS property controls the spacing between lines of text?", options: ["line-height", "spacing", "line-spacing", "text-height"], answer: "line-height" },
  { question: "Which W3.CSS class is used to hide an element on small screens?", options: ["w3-hide-small", "w3-small-hide", "w3-no-small", "w3-invisible-small"], answer: "w3-hide-small" },
  { question: "How can you check if a variable 'x' is an array in JS?", options: ["x.isArray()", "Array.isArray(x)", "typeof x == 'array'", "x instanceof List"], answer: "Array.isArray(x)" },
  { question: "Which HTML attribute specifies where to open the linked document?", options: ["href", "location", "target", "path"], answer: "target" },
  { question: "Which CSS property specifies the type of cursor to be displayed?", options: ["mouse", "pointer", "cursor", "hover"], answer: "cursor" },
  { question: "Which W3.CSS class is used for a yellow text color?", options: ["w3-text-yellow", "w3-yellow-text", "w3-yellow", "yellow-text"], answer: "w3-text-yellow" },
  { question: "Which method is used to join two arrays in JavaScript?", options: ["concat()", "join()", "merge()", "add()"], answer: "concat()" },
  { question: "Which tag is used to define a multi-line input field?", options: ["<input type='textarea'>", "<textarea>", "<textbox>", "<area>"], answer: "<textarea>" },
  { question: "Which property is used to change the list style to square?", options: ["list-type:square", "list-style-type:square", "marker:square", "type:square"], answer: "list-style-type:square" },
  { question: "Which W3.CSS class is used to create a side navigation bar?", options: ["w3-sidenav", "w3-sidebar", "w3-bar-block", "w3-menu-side"], answer: "w3-sidebar" },
];

const allQuestions = [...m2Questions, ...part2, ...part3];

const useTimer = (initialTime: number, onEnd: () => void) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let interval: any;
    if (isRunning && time > 0) interval = setInterval(() => setTime((t) => t - 1), 1000);
    else if (time === 0 && isRunning) { setIsRunning(false); onEnd(); }
    return () => clearInterval(interval);
  }, [isRunning, time, onEnd]);
  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = (t: number) => { setTime(t); setIsRunning(false); };
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60); const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };
  return { time, formatTime: formatTime(time), start, pause, reset, isRunning };
};
const M2Repeated: React.FC = () => {
  const TOTAL = allQuestions.length; const DURATION = TOTAL * 60;
  const [screen, setScreen] = useState<"home" | "quiz" | "result">("home");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<(string | null)[]>(Array(TOTAL).fill(null));
  const [showNav, setShowNav] = useState(false);
  const handleEnd = useCallback(() => setScreen("result"), []);
  const timer = useTimer(DURATION, handleEnd);
  const score = selected.reduce((acc, ans, i) => acc + (ans === allQuestions[i].answer ? 1 : 0), 0);
  const percentage = Math.round((score / TOTAL) * 100);

  const startQuiz = () => { setSelected(Array(TOTAL).fill(null)); setCurrent(0); timer.reset(DURATION); timer.start(); setScreen("quiz"); };
  const submitQuiz = () => { timer.pause(); setScreen("result"); };

  if (screen === "home") return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8" style={{ backgroundColor: "#0f172a" }}>
      <div className="max-w-lg w-full rounded-3xl shadow-2xl p-8 text-center space-y-6" style={{ backgroundColor: "#1e293b", border: "2px solid #facc15" }}>
        <div className="inline-block text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest bg-yellow-400 text-slate-900">O Level M2-R5</div>
        <h1 className="text-4xl font-extrabold text-yellow-400">Web Designing<br /><span className="text-white">Most Repeated MCQs</span></h1>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {[{v: TOTAL, l: "Questions"}, {v: `${TOTAL}m`, l: "Time"}, {v: "+1", l: "Marks"}, {v: "0", l: "Negative"}].map((it, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-900 border border-slate-700">
              <p className="text-xl font-bold text-yellow-400">{it.v}</p><p className="text-gray-400">{it.l}</p>
            </div>
          ))}
        </div>
        <button onClick={startQuiz} className="w-full font-bold py-4 rounded-2xl text-lg bg-yellow-400 text-slate-900 shadow-lg active:scale-95 transition-all">🚀 Start Practice Test</button>
      </div>
    </div>
  );

  if (screen === "result") return (
    <div className="min-h-screen p-4 overflow-y-auto bg-slate-950">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="rounded-2xl p-8 text-center bg-slate-900 border-2 border-yellow-400">
          <h2 className="text-2xl font-bold text-white mb-4">Practice Completed!</h2>
          <div className="text-5xl font-extrabold text-yellow-400 mb-6">{percentage}%</div>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-500"><p className="text-xl font-bold">{score}</p><p className="text-xs">Correct</p></div>
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500"><p className="text-xl font-bold">{TOTAL-score}</p><p className="text-xs">Wrong</p></div>
            <div className="p-3 rounded-xl bg-slate-800 text-gray-400"><p className="text-xl font-bold">{selected.filter(x => !x).length}</p><p className="text-xs">Skipped</p></div>
          </div>
        </div>
        <div className="rounded-2xl p-5 bg-slate-900 border border-slate-700 space-y-4">
          <h3 className="text-lg font-bold text-yellow-400">📋 Answer Review</h3>
          <div className="max-h-[50vh] overflow-y-auto space-y-3 pr-2">
            {allQuestions.map((q, i) => (
              <div key={i} className={`p-4 rounded-xl border ${selected[i] === q.answer ? "border-green-500/40 bg-green-500/5" : "border-red-500/40 bg-red-500/5"}`}>
                <p className="text-sm text-white font-medium">Q{i+1}. {q.question}</p>
                <p className={`text-xs mt-2 ${selected[i] === q.answer ? "text-green-500" : "text-red-500"}`}>Your: {selected[i] || "Skipped"}</p>
                {selected[i] !== q.answer && <p className="text-xs text-green-500">Correct: {q.answer}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-3"><button onClick={startQuiz} className="flex-1 py-4 rounded-2xl bg-yellow-400 text-slate-900 font-bold">Retry</button><button onClick={()=>setScreen("home")} className="flex-1 py-4 rounded-2xl border-2 border-yellow-400 text-yellow-400 bg-transparent font-bold">Home</button></div>
      </div>
    </div>
  );
