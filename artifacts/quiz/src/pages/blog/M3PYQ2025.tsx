import React, { useState, useEffect, useCallback } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    question: "What will be the output of: M = ['b' * x for x in range(4)] print(M)?",
    options: ["['b', 'bb', 'bbb']", "['b', 'bb', 'bbb', 'bbbb']", "['', 'b', 'bb', 'bbb']", "None of these"],
    answer: "['', 'b', 'bb', 'bbb']",
  },
  {
    question: "What will be the output: x = ['Today', 'Tomorrow', 'Yesterday']; y = x[1]; print(y)?",
    options: ["x1", "Yesterday / कल", "Tomorrow / कल", "Today / आज"],
    answer: "Tomorrow / कल",
  },
  {
    question: "What will be the output: x = [25, 35, 45]; y = x[0]; print(y)?",
    options: ["45", "35", "x0", "25"],
    answer: "25",
  },
  {
    question: "What will be the output: x = [10, 20, 30]; y = x[1] + x[2]; print(y)?",
    options: ["20", "30", "50", "40"],
    answer: "50",
  },
  {
    question: "What will be the output: x = [[0.0, 1.0, 2.0], [4.0, 5.0, 6.0]]; y = x[1][2]; print(y)?",
    options: ["1.0", "0.0", "5.0", "6.0"],
    answer: "6.0",
  },
  {
    question: "What will be the output: x = [[0.0, 1.0, 2.0], [4.0, 5.0, 6.0]]; y = x[0][1] + x[1][0]; print(y)?",
    options: ["4.0", "1.0", "6.0", "5.0"],
    answer: "5.0",
  },
  {
    question: "What will be the output: x = ['Sunday', 'Monday', 'Tuesday']; y = x[1] + x[2]; print(y)?",
    options: ["Sun Monday", "Monday Tuesday", "Sunday Monday", "MondayTuesday"],
    answer: "MondayTuesday",
  },
  {
    question: "What is the output: print(max([1, 2, 3, 4], [4, 5, 6], [7]))?",
    options: ["[7]", "[4, 5, 6]", "[1, 2, 3, 4]", "7"],
    answer: "[7]",
  },
  {
    question: "What will be the output: x = {0:4, 1:8, 2:16, 3:32}; print(x.keys())?",
    options: ["dict_keys{0, 1, 2, 3}", "dict_keys(0, 1, 2, 3)", "dict_keys([0, 1, 2, 3])", "dict_keys[0, 1, 2, 3]"],
    answer: "dict_keys([0, 1, 2, 3])",
  },
  {
    question: "What will be the output: a = set('abc'); b = set('cdef'); print(a & b)?",
    options: ["None of these", "{'c'}", "{c}", "{'a','b','c','d','e','f'}"],
    answer: "{'c'}",
  },
  {
    question: "Which error is returned when we try to open a file in write mode which does not exist?",
    options: ["File Not Exist Error", "None of the above", "File Found Error", "File Not Found Error"],
    answer: "File Not Found Error",
  },
  {
    question: "What will be the output of: print(sum(1, 2, 3))?",
    options: ["1", "Error", "3", "6"],
    answer: "Error",
  },
  {
    question: "Output of: example = 'helle'; example.rfind('e')?",
    options: ["4", "5", "2", "1"],
    answer: "4",
  },
  {
    question: "Which of the following words is NOT a keyword of python language?",
    options: ["with", "try", "val", "raise"],
    answer: "val",
  },
  {
    question: "Given a string x = 'hello', What is the output of x.count('I')?",
    options: ["2", "0", "1", "None"],
    answer: "0",
  },
  {
    question: "Which data type is mutable in Python?",
    options: ["Tuple", "String", "List", "Integer"],
    answer: "List",
  },
  {
    question: "Which brackets are used to create a dictionary in Python?",
    options: ["[]", "()", "{}", "<>"],
    answer: "{}",
  },
  {
    question: "What is the use of len() function in Python?",
    options: ["To calculate memory size", "To count number of elements", "To print values", "To sort values"],
    answer: "To count number of elements",
  },
  {
    question: "How is a tuple defined in Python?",
    options: ["Using {}", "Using []", "Using ()", "Using <>"],
    answer: "Using ()",
  },
  {
    question: "Which keyword is used to create a function in Python?",
    options: ["function", "define", "def", "fun"],
    answer: "def",
  },
  {
    question: "What will be the output: x = [1, 2, 3]; print(x[-1])?",
    options: ["1", "2", "3", "Error"],
    answer: "3",
  },
  {
    question: "Which method is used to add a new element in a list?",
    options: ["add()", "append()", "insertitem()", "push()"],
    answer: "append()",
  },
  {
    question: "Which operator is used for exponentiation in Python?",
    options: ["^", "**", "//", "%%"],
    answer: "**",
  },
  {
    question: "Which function is used to take input in Python?",
    options: ["scan()", "cin()", "input()", "get()"],
    answer: "input()",
  },
  {
    question: "Which symbol is used for comments in Python?",
    options: ["//", "/*", "#", "**"],
    answer: "#",
  },
  {
    question: "Which loop is generally used for fixed number of iterations?",
    options: ["while", "do while", "for", "loop"],
    answer: "for",
  },
  {
    question: "Which keyword terminates the loop immediately?",
    options: ["stop", "continue", "pass", "break"],
    answer: "break",
  },
  {
    question: "Which keyword skips current iteration and moves to the next iteration?",
    options: ["break", "pass", "continue", "next"],
    answer: "continue",
  },
  {
    question: "Which operator is used for integer division in Python?",
    options: ["/", "//", "%", "**"],
    answer: "//",
  },
  {
    question: "Which keyword is used to import a module in Python?",
    options: ["include", "using", "import", "module"],
    answer: "import",
  },
  {
    question: "Which module is used to generate random numbers in Python?",
    options: ["math", "random", "os", "sys"],
    answer: "random",
  },
  {
    question: "Which function is used to find square root in Python?",
    options: ["root()", "sqrt()", "square()", "powroot()"],
    answer: "sqrt()",
  },
  {
    question: "Which function is used to check the data type of a value?",
    options: ["datatype()", "checktype()", "type()", "typeof()"],
    answer: "type()",
  },
  {
    question: "List indexing in Python starts from:",
    options: ["0", "1", "-1", "10"],
    answer: "0",
  },
  {
    question: "Which data type stores data in key-value pairs?",
    options: ["List", "Tuple", "Dictionary", "Set"],
    answer: "Dictionary",
  },
  {
    question: "Which function is used to display output in Python?",
    options: ["echo()", "print()", "display()", "output()"],
    answer: "print()",
  },
  {
    question: "Output of: print(10 % 3)?",
    options: ["3", "1", "0", "10"],
    answer: "1",
  },
  {
    question: "What type of collection is a set in Python?",
    options: ["Ordered and duplicate", "Unordered and unique", "Ordered and unique", "Mutable only"],
    answer: "Unordered and unique",
  },
  {
    question: "Which method is used to close a file in Python?",
    options: ["end()", "stop()", "close()", "shutdown()"],
    answer: "close()",
  },
  {
    question: "Which keyword is used for exception handling in Python?",
    options: ["error", "catch", "try", "excepted"],
    answer: "try",
  },
  {
    question: "Which block is used to handle exceptions in Python?",
    options: ["final", "catch", "except", "error"],
    answer: "except",
  },
  {
    question: "Inheritance in Python is related to which concept?",
    options: ["Database", "OOP", "Networking", "Looping"],
    answer: "OOP",
  },
  {
    question: "Which keyword is used to create a class in Python?",
    options: ["define", "object", "class", "struct"],
    answer: "class",
  },
  {
    question: "The process of creating an object is called:",
    options: ["Declaration", "Instantiation", "Compilation", "Execution"],
    answer: "Instantiation",
  },
  {
    question: "Which function sorts a sequence in ascending order?",
    options: ["order()", "arrange()", "sorted()", "sequence()"],
    answer: "sorted()",
  },
  {
    question: "Which method is used to remove an element from a list in Python?",
    options: ["delete()", "erase()", "remove()", "clearitem()"],
    answer: "remove()",
  },
  {
    question: "Which function returns the largest value in a sequence?",
    options: ["maximum()", "top()", "high()", "max()"],
    answer: "max()",
  },
  {
    question: "Which function returns the smallest value in a sequence?",
    options: ["low()", "min()", "small()", "minimum()"],
    answer: "min()",
  },
  {
    question: "Which method converts a string into uppercase?",
    options: ["upper()", "uppercase()", "capital()", "up()"],
    answer: "upper()",
  },
  {
    question: "Which method converts a string into lowercase?",
    options: ["lower()", "lowercase()", "down()", "small()"],
    answer: "lower()",
  },
  {
    question: "Output of: x = [2, 4, 6] print(sum(x))?",
    options: ["10", "12", "14", "6"],
    answer: "12",
  },
  {
    question: "Which operator is used for membership checking in Python?",
    options: ["in", "is", "==", "!="],
    answer: "in",
  },
  {
    question: "Which keyword is used to define an empty block in Python?",
    options: ["break", "continue", "pass", "skip"],
    answer: "pass",
  },
  {
    question: "Which operator is used for identity checking in Python?",
    options: ["==", "is", "in", "="],
    answer: "is",
  },
  {
    question: "Which of the following is an immutable data type in Python?",
    options: ["List", "Dictionary", "Set", "Tuple"],
    answer: "Tuple",
  },
  {
    question: "Output of: import math print(math.floor(2.9))?",
    options: ["2", "3", "2.0", "4.0"],
    answer: "2",
  },
  {
    question: "Output of: import math print(math.ceil(21.4))?",
    options: ["22", "22.0", "21", "21.0"],
    answer: "22",
  },
  {
    question: "What does print(datetime.today().strftime('%B')) do?",
    options: ["Displays the full weekday name", "Displays the full month name", "Displays abbreviated day", "Displays abbreviated month"],
    answer: "Displays the full month name",
  },
  {
    question: "Output of: import datetime print(datetime.datetime.today())?",
    options: ["List of hours", "Random time", "Displays current date and time", "Weekday name"],
    answer: "Displays current date and time",
  },
  {
    question: "What does print(datetime.today().strftime('%d')) do?",
    options: ["Displays the day of the month number (01 to 31)", "Displays hour number", "Displays locale date", "Displays microsecond"],
    answer: "Displays the day of the month number (01 to 31)",
  },
  {
    question: "Output of: x = 27; if x < 25: print(x) else: pass?",
    options: ["No output", "25", "27", "None"],
    answer: "No output",
  },
  {
    question: "What does print(getattr(datetime.today(),'year')) do?",
    options: ["Current date and year", "Number of days", "Number of months", "Displays current year"],
    answer: "Displays current year",
  },
  {
    question: "Output of: import math print(math.floor(67.3))?",
    options: ["67", "67.0", "68.0", "68"],
    answer: "67",
  },
  {
    question: "Output of: import math print(math.pow(3,2))?",
    options: ["6.0", "9", "6", "9.0"],
    answer: "9.0",
  },
  {
    question: "Output of: x = 'Python' print(x[4])?",
    options: ["h", "O", "t", "Python..."],
    answer: "o",
  },
  {
    question: "Output of: x = 'Python' print('y' in x)?",
    options: ["y", "Python", "True", "False"],
    answer: "True",
  },
  {
    question: "Output: x = '%s MCQ %s' %('Python', 'Test') print(x)?",
    options: ["Python MCQ", "Test MCQ Python", "Python MCQ Test", "MCQ Test"],
    answer: "Python MCQ Test",
  },
  {
    question: "Output of: x = 'Python' print(x[:])?",
    options: ["yth", "Python", "PythonPython", "Pn"],
    answer: "Python",
  },
  {
    question: "Output: x = '{} 3 {}'.format('Python', 'Test') print(x)?",
    options: ["Test 3 Python", "Python 3 Test", "Python Test", "Test Python"],
    answer: "Python 3 Test",
  },
  {
    question: "Output of: x = 'Python' print('p' not in x)?",
    options: ["P", "True", "p", "False"],
    answer: "True",
  },
  {
    question: "Output: '{1} for {0}'.format('Python', 'Questions') print(x)?",
    options: ["Python for Questions", "Questions for Python", "1 for 0", "Python 1 for 0"],
    answer: "Questions for Python",
  },
  {
    question: "Output of: x = 'Python' print(x[2:4])?",
    options: ["thon", "Pyth", "tho", "th"],
    answer: "th",
  },
  {
    question: "Output of: x = 'Python' print(x*3)?",
    options: ["PythonPythonPython", "t", "Pyt Pyt Pyt", "None"],
    answer: "PythonPythonPython",
  },
  {
    question: "Output of: x = 'Python %d Version' %(3) print(x)?",
    options: ["Python Version 3", "Python 3 Version", "Python 3", "3 Version"],
    answer: "Python 3 Version",
  },
  {
    question: "Output: x = 'Python %c or Python %c' %('2', '3') print(x)?",
    options: ["Python 3 or Python 2", "Python 2 or Python 3", "Python 2 or Python 2", "Python 23"],
    answer: "Python 2 or Python 3",
  },
  {
    question: "Output: x = 'Python %.1f or Python %.2f' %(2.7, 3.51) print(x)?",
    options: ["Python 3.51 or 2.7", "Python 2.7 or 3.51", "Python 2 or 3", "Python 2.7 or 3.5"],
    answer: "Python 2.7 or 3.51",
  },
  {
    question: "Output of: x = 'Python' print(x.capitalize())?",
    options: ["Python.capitalize", "Python", "python", "PYTHON"],
    answer: "Python",
  },
  {
    question: "Output: x = 'python job interview' print(x.title())?",
    options: ["python job interview", "Python Job Interview", "python Job interview", "None"],
    answer: "Python Job Interview",
  },
  {
    question: "Output of: x = 'python jobs' print(x.upper())?",
    options: ["Python Jobs", "python jobs", "PYTHON JOBS", "Python jobs"],
    answer: "PYTHON JOBS",
  },
  {
    question: "Output of: x = 'python jobs' print(x.lower())?",
    options: ["Python Jobs", "python jobs", "PYTHON JOBS", "Python jobs"],
    answer: "python jobs",
  },
  {
    question: "Output of: x = 'Python Jobs' print(x.swapcase())?",
    options: ["Python Jobs", "python jobs", "PYTHON JOBS", "pYTHON jOBS"],
    answer: "pYTHON jOBS",
  },
  {
    question: "Output of: x = 'Python' print(x.join('33'))?",
    options: ["3Python3", "Python33", "Python 33", "Python3"],
    answer: "3Python3",
  },
  {
    question: "Output of: x = 'Python Test' print(x.join('33'))?",
    options: ["3Python Test3", "3Python3Test3", "Python3Test3", "Python Test33"],
    answer: "3Python Test3",
  },
  {
    question: "Output: x = 'Python' y = '3' print(x.rstrip()+y.rstrip())?",
    options: ["Python3", "Python+3", "Python 3", "3Python3"],
    answer: "Python3",
  },
  {
    question: "Output of: x = open('python.csv', 'w') print(x.mode)?",
    options: ["r", "w", "python.txt", "python write"],
    answer: "w",
  },
  {
    question: "Output: import math print(math.floor(67.3))?",
    options: ["67", "67.0", "68.0", "68"],
    answer: "67",
  },
  {
    question: "Output: import math print(math.pow(3,2))?",
    options: ["6.0", "9", "6", "9.0"],
    answer: "9.0",
  },
  {
    question: "Output of: x = 'Python' print(x[4])?",
    options: ["h", "O", "t", "Python..."],
    answer: "o",
  },
  {
    question: "Output of: x = 'Python' print('y' in x)?",
    options: ["y", "Python", "True", "False"],
    answer: "True",
  },
  {
    question: "Output: x = '%s MCQ %s' %('Python', 'Test') print(x)?",
    options: ["Python MCQ", "Test MCQ Python", "Python MCQ Test", "MCQ Test"],
    answer: "Python MCQ Test",
  },
  {
    question: "Output of: x = 'Python' print(x[:])?",
    options: ["yth", "Python", "PythonPython", "Pn"],
    answer: "Python",
  },
  {
    question: "Output: x = '{} 3 {}'.format('Python', 'Test') print(x)?",
    options: ["Test 3 Python", "Python 3 Test", "Python Test", "Test Python"],
    answer: "Python 3 Test",
  },
  {
    question: "Output of: x = 'Python' print('p' not in x)?",
    options: ["P", "True", "p", "False"],
    answer: "True",
  },
  {
    question: "Output of: x = 'Python' print(x[2:4])?",
    options: ["thon", "Pyth", "tho", "th"],
    answer: "th",
  },
  {
    question: "Output of: x = 'Python' print(x*3)?",
    options: ["PythonPythonPython", "t", "Pyt Pyt Pyt", "None"],
    answer: "PythonPythonPython",
  },
  {
    question: "Output: x = 'Python %d Version' %(3) print(x)?",
    options: ["Python Version 3", "Python 3 Version", "Python 3", "3 Version"],
    answer: "Python 3 Version",
  },
  {
    question: "Output: x = 'Python %c or Python %c' %('2', '3') print(x)?",
    options: ["Python 3 or Python 2", "Python 2 or Python 3", "Python 2 or Python 2", "Python 23"],
    answer: "Python 2 or Python 3",
  },
  {
    question: "Output: x = 'Python %.1f or Python %.2f' %(2.7, 3.51) print(x)?",
    options: ["Python 3.51 or 2.7", "Python 2.7 or 3.51", "Python 2 or 3", "None"],
    answer: "Python 2.7 or 3.51",
  },
  {
    question: "Output of: x = 'Python' print(x.capitalize())?",
    options: ["Python", "python", "PYTHON", "Python.capitalize"],
    answer: "Python",
  },
  {
    question: "Output of: x = 'python jobs' print(x.upper())?",
    options: ["Python Jobs", "python jobs", "PYTHON JOBS", "Python jobs"],
    answer: "PYTHON JOBS",
  }
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

const M3PYQ2025: React.FC = () => {
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
          <div className="inline-block text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest" style={{ backgroundColor: "#facc15", color: "#0f172a" }}>O Level M3-R5</div>
          <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#facc15" }}>M3-R5 PYQ<br /><span style={{ color: "#ffffff" }}>Jan 2025</span></h1>
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
          <button onClick={() => window.open("/pdfs/m3-jan-2025.pdf", "_blank")} className="block w-full font-bold py-3 rounded-2xl border-2 border-[#facc15] text-[#facc15] bg-transparent">📄 View PDF</button>
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
                <circle cx="60" cy="60" r="52" fill="none" stroke="#facc15" strokeWidth="10" strokeDasharray={`${(percentage / 100) * 327} 327`} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold text-[#facc15]">{percentage}%</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="p-3 bg-green-900/10 border border-green-500/40 rounded-xl text-green-500"><b>{score}</b><br/>Correct</div>
                <div className="p-3 bg-red-900/10 border border-red-500/40 rounded-xl text-red-500"><b>{attempted-score}</b><br/>Wrong</div>
                <div className="p-3 bg-gray-800/10 border border-gray-500/30 rounded-xl text-gray-400"><b>{TOTAL-attempted}</b><br/>Skip</div>
            </div>
          </div>
          <div className="rounded-2xl p-5 space-y-4 bg-[#1e293b] border border-[#334155]">
            <h3 className="text-lg font-bold text-[#facc15]">📋 Answer Review</h3>
            <div className="space-y-3 overflow-y-auto pr-1" style={{ maxHeight: "40vh" }}>
              {questions.map((q, i) => (
                <div key={i} className="p-4 rounded-xl border border-gray-700 bg-gray-800/30">
                  <p className="text-sm text-white"><span className="text-[#facc15] font-bold">Q{i+1}.</span> {q.question}</p>
                  <p className="text-xs mt-1 text-green-500">Correct: {q.answer}</p>
                  {selected[i] !== q.answer && <p className="text-xs text-red-400">Your: {selected[i] || "Skipped"}</p>}
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
          <div className="font-mono font-bold text-[#facc15] text-lg">{timer.formatTime}</div>
          <button onClick={submitQuiz} className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-bold">Finish</button>
      </div>
      <div className="flex-1 flex items-start justify-center px-4 py-6">
        <div className="max-w-3xl w-full space-y-5">
          <div className="rounded-2xl p-5 bg-[#1e293b] border border-[#334155]"><h2 className="text-lg text-white font-medium">{q.question}</h2></div>
          <div className="grid gap-3">
            {q.options.map((opt, idx) => (
              <button key={idx} onClick={() => selectOption(opt)} className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${selected[current] === opt ? "border-[#facc15] bg-[#facc15]/10 text-[#facc15]" : "border-[#334155] bg-[#111827] text-gray-300"}`}>
                <span className="inline-block w-8 h-8 rounded-lg bg-gray-800 text-center mr-3 font-bold">{String.fromCharCode(65 + idx)}</span>{opt}
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

export default M3PYQ2025;
