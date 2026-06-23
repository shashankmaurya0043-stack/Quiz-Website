import React, { useState, useEffect, useCallback } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    question: "What will be the output of the following code?\nM = ['b' * x for x in range(4)]\nprint(M)",
    options: ["['b', 'bb', 'bbb']", "['b', 'bb', 'bbb', 'bbbb']", "['', 'b', 'bb', 'bbb']", "None of these"],
    answer: "['b', 'bb', 'bbb', 'bbbb']",
  },
  {
    question: "What will be the output of the following statements?\nx = ['Today', 'Tomorrow', 'Yesterday']\ny = x[1]\nprint(y)",
    options: ["x1", "Yesterday", "Tomorrow", "Today"],
    answer: "Tomorrow",
  },
  {
    question: "What will be the output of the following code?\nx = [25, 35, 45]\ny = x[0]\nprint(y)",
    options: ["45", "35", "x0", "25"],
    answer: "25",
  },
  {
    question: "What will be the output of the following code?\nx = [10, 20, 30]\ny = x[1] + x[2]\nprint(y)",
    options: ["20", "30", "50", "40"],
    answer: "50",
  },
  {
    question: "What will be the output of the following statements?\nx = [[0.0, 1.0, 2.0], [4.0, 5.0, 6.0]]\ny = x[1][2]\nprint(y)",
    options: ["1.0", "0.0", "5.0", "6.0"],
    answer: "6.0",
  },
  {
    question: "What will be the output of the following code?\nx = [[0.0, 1.0, 2.0], [4.0, 5.0, 6.0]]\ny = x[0][1] + x[1][0]\nprint(y)",
    options: ["4.0", "1.0", "6.0", "5.0"],
    answer: "5.0",
  },
  {
    question: "What will be the output of the following code?\nx = ['Sunday', 'Monday', 'Tuesday']\ny = x[1] + x[2]\nprint(y)",
    options: ["Sun Monday", "Monday Tuesday", "Sunday Monday", "MondayTuesday"],
    answer: "MondayTuesday",
  },
  {
    question: "What is the output of the following?\nprint(max([1, 2, 3, 4], [4, 5, 6], [7]))",
    options: ["[7]", "[4, 5, 6]", "[1, 2, 3, 4]", "7"],
    answer: "[7]",
  },
  {
    question: "What will be the output of the following statements?\nx = {0:4, 1:8, 2:16, 3:32}\nprint(x.keys())",
    options: ["dict_keys{0, 1, 2, 3}", "dict_keys(0, 1, 2, 3)", "dict_keys([0, 1, 2, 3])", "dict_keys[0, 1, 2, 3]"],
    answer: "dict_keys([0, 1, 2, 3])",
  },
  {
    question: "What will be the output of the following code?\na = set('abc')\nb = set('cdef')\nprint(a & b)",
    options: ["None of these", "{'c'}", "{c}", "{'a','b','c','d','e','f'}"],
    answer: "{'c'}",
  },
  {
    question: "Which of the following error is returned when we try to open a file in write mode which does not exist?",
    options: ["File Not Exist Error", "None of the above", "File Found Error", "File Not Found Error"],
    answer: "File Not Found Error",
  },
  {
    question: "What will be the output of the following?\nprint(sum(1,2,3))",
    options: ["1", "Error", "3", "6"],
    answer: "Error",
  },
  {
    question: "What will be the output of the following Python code?\nexample = \"helle\"\nexample.rfind(\"e\")",
    options: ["4", "5", "2", "1"],
    answer: "4",
  },
  {
    question: "Which of the following words is not a keyword of python language?",
    options: ["with", "try", "val", "raise"],
    answer: "val",
  },
  {
    question: "Given a string x = \"hello\", What is the output of x.count('I')?",
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
    question: "What will be the output of the following statements?\nx = [1, 2, 3]\nprint(x[-1])",
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
    options: ["//", "#", "/*", "**"],
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
    question: "What will be the output of the following statements?\nprint(10 % 3)",
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
    question: "What will be the output of the following statements?\nx = [2, 4, 6]\nprint(sum(x))",
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
    question: "What will be the output of the following statements?\nimport math\nprint(math.floor(2.9))",
    options: ["2", "3", "2.0", "4.0"],
    answer: "2",
  },
  {
    question: "What will be the output of the following statements?\nimport math\nprint(math.ceil(21.4))",
    options: ["22", "22.0", "21", "21.0"],
    answer: "22",
  },
  {
    question: "What does the following statements do?\nfrom datetime import *\nprint(datetime.today().strftime(\"%B\"))",
    options: ["Displays full weekday name", "Displays full month name", "Displays abbreviated day name", "Displays abbreviated month name"],
    answer: "Displays full month name",
  },
  {
    question: "What does the following statements do?\nimport datetime\nprint(datetime.datetime.today())",
    options: ["Displays hours remaining", "Displays random time", "Displays current date and time", "Displays today's weekday"],
    answer: "Displays current date and time",
  },
  {
    question: "What does the following statements do?\nfrom datetime import *\nprint(datetime.today().strftime(\"%d\"))",
    options: ["Displays day of month (01-31)", "Displays hour number", "Displays date/time locale", "Displays microsecond"],
    answer: "Displays day of the month number (from 01 to 31)",
  },
  {
    question: "What will be the output of the following statements?\nx = 27\nif x < 25:\n print(x)\nelse:\n pass",
    options: ["No output", "25", "27", "None"],
    answer: "No output",
  },
  {
    question: "What does the following statements do?\nfrom datetime import *\nprint(getattr(datetime.today(),'year'))",
    options: ["Displays current date and year", "Displays days in a year", "Displays months in a year", "Displays current year"],
    answer: "Displays current year",
  },
  {
    question: "What will be the output of the following statements?\nimport math\nprint(math.floor(67.3))",
    options: ["67", "67.0", "68.0", "68"],
    answer: "67",
  },
  {
    question: "What will be the output of the following statements?\nimport math\nprint(math.pow(3,2))",
    options: ["6.0", "9", "6", "9.0"],
    answer: "9.0",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python'\nprint(x[4])",
    options: ["h", "O", "t", "Python repeated"],
    answer: "h",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python'\nprint('y' in x)",
    options: ["y", "Python", "True", "False"],
    answer: "True",
  },
  {
    question: "What will be the output of the following statements?\nx = '%s MCQ %s' %('Python', 'Test')\nprint(x)",
    options: ["Python MCQ", "Test MCQ Python", "Python MCQ Test", "MCQ Test"],
    answer: "Python MCQ Test",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python'\nprint(x[:])",
    options: ["yth", "Python", "PythonPython", "Pn"],
    answer: "Python",
  },
  {
    question: "What will be the output of the following statements?\nx = '{} 3 {}'.format('Python', 'Test')\nprint(x)",
    options: ["Test 3 Python", "Python 3 Test", "Python Test", "Test Python"],
    answer: "Python 3 Test",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python'\nprint('p' not in x)",
    options: ["P", "True", "p", "False"],
    answer: "True",
  },
  {
    question: "What will be the output of the following statements?\n'{1} for {0}'.format('Python', 'Questions')",
    options: ["Python for Questions", "Questions for Python", "1 for 0", "Python 1 for 0 Questions"],
    answer: "Questions for Python",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python'\nprint(x[2:4])",
    options: ["thon", "Pyth", "tho", "th"],
    answer: "th",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python'\nprint(x*3)",
    options: ["PythonPythonPython", "t", "Pyt Pyt Pyt", "Python Python Python"],
    answer: "PythonPythonPython",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python %d Version' %(3)\nprint(x)",
    options: ["Python Version 3", "Python 3 Version", "Python 3", "3 Version"],
    answer: "Python 3 Version",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python %c or Python %c' %('2', '3')\nprint(x)",
    options: ["Python 3 or Python 2", "Python 2 or Python 3", "Python 2 or Python 2", "Python 23"],
    answer: "Python 2 or Python 3",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python %.1f or Python %.2f' %(2.7, 3.51)\nprint(x)",
    options: ["Python 3.51 or Python 2.7", "Python 2.7 or Python 3.51", "Python 2 or Python 3", "Python 2.7 or Python 3.5"],
    answer: "Python 2.7 or Python 3.51",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python'\nprint(x.capitalize())",
    options: ["Python.capitalize", "Python", "python", "PYTHON"],
    answer: "Python",
  },
  {
    question: "What will be the output of the following statements?\nx = 'python job interview'\nprint(x.title())",
    options: ["python job interview", "Python Job Interview", "Python job interview", "Python job Interview"],
    answer: "Python Job Interview",
  },
  {
    question: "What will be the output of the following statements?\nx = 'python jobs'\nprint(x.upper())",
    options: ["Python Jobs", "python jobs", "PYTHON JOBS", "Python jobs"],
    answer: "PYTHON JOBS",
  },
  {
    question: "What will be the output of the following statements?\nx = 'python jobs'\nprint(x.lower())",
    options: ["Python Jobs", "python jobs", "PYTHON JOBS", "Python jobs"],
    answer: "python jobs",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python Jobs'\nprint(x.swapcase())",
    options: ["Python Jobs", "python jobs", "PYTHON JOBS", "pYTHON jOBS"],
    answer: "pYTHON jOBS",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python'\nprint(x.join('33'))",
    options: ["3Python3", "Python33", "Python 33", "Python3"],
    answer: "3Python3",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python Test'\nprint(x.join('33'))",
    options: ["3Python Test3", "3Python3Test3", "Python3Test3", "Python Test33"],
    answer: "3Python Test3",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python'\ny = '3'\nprint(x.rstrip()+y.rstrip())",
    options: ["Python3", "Python+3", "Python 3", "3Python3"],
    answer: "Python3",
  },
  {
    question: "What will be the output of the following statements?\nx = open('python.csv', 'w')\nprint(x.mode)",
    options: ["r", "w", "python.txt", "python write"],
    answer: "w",
  },
  {
    question: "What will be the output of the following statements?\nimport math\nprint(math.floor(67.3)) (Q.86)",
    options: ["67", "67.0", "68.0", "68"],
    answer: "67",
  },
  {
    question: "What will be the output of the following statements?\nimport math\nprint(math.pow(3,2)) (Q.87)",
    options: ["6.0", "9", "6", "9.0"],
    answer: "9.0",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python'\nprint(x[4]) (Q.88)",
    options: ["h", "O", "t", "Python Python Python Python"],
    answer: "h",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python'\nprint('y' in x) (Q.89)",
    options: ["y", "Python", "True", "False"],
    answer: "True",
  },
  {
    question: "What will be the output of the following statements?\nx = '%s MCQ %s' %('Python', 'Test')\nprint(x) (Q.90)",
    options: ["Python MCQ", "Test MCQ Python", "Python MCQ Test", "MCQ Test"],
    answer: "Python MCQ Test",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python'\nprint(x[:]) (Q.91)",
    options: ["yth", "Python", "PythonPythonPython", "Pn"],
    answer: "Python",
  },
  {
    question: "What will be the output of the following statements?\nx = '{} 3 {}'.format('Python', 'Test')\nprint(x) (Q.92)",
    options: ["Test 3 Python", "Python 3 Test", "Python Test", "Test Python"],
    answer: "Python 3 Test",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python'\nprint('p' not in x) (Q.93)",
    options: ["P", "True", "p", "False"],
    answer: "True",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python'\nprint(x[2:4]) (Q.94)",
    options: ["thon", "Pyth", "tho", "th"],
    answer: "th",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python'\nprint(x*3) (Q.95)",
    options: ["PythonPythonPython", "t", "Pyt Pyt Pyt", "Python Python Python"],
    answer: "PythonPythonPython",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python %d Version' %(3)\nprint(x) (Q.96)",
    options: ["Python Version 3", "Python 3 Version", "Python 3", "3 Version"],
    answer: "Python 3 Version",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python %c or Python %c' %('2', '3')\nprint(x) (Q.97)",
    options: ["Python 3 or Python 2", "Python 2 or Python 3", "Python 2 or Python 2", "Python 23"],
    answer: "Python 2 or Python 3",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python %.1f or Python %.2f' %(2.7, 3.51)\nprint(x) (Q.98)",
    options: ["Python 3.51 or Python 2.7", "Python 2.7 or Python 3.51", "Python 2 or Python 3", "Python 2.7 or Python 3.5"],
    answer: "Python 2.7 or Python 3.51",
  },
  {
    question: "What will be the output of the following statements?\nx = 'Python'\nprint(x.capitalize()) (Q.99)",
    options: ["Python", "python", "PYTHON", "Python.capitalize"],
    answer: "Python",
  },
  {
    question: "What will be the output of the following statements?\nx = 'python jobs'\nprint(x.upper()) (Q.100)",
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
  const reset = (t: number) => { setTime(t); setIsRunning(false); };

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
  const DURATION = TOTAL * 60;
  const [screen, setScreen] = useState<Screen>("home");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<(string | null)[]>(Array(TOTAL).fill(null));
  const [showNav, setShowNav] = useState(false);
  const handleEnd = useCallback(() => { setScreen("result"); }, []);
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
  const goTo = (i: number) => { setCurrent(i); setShowNav(false); };
  const submitQuiz = () => { timer.pause(); setScreen("result"); };

  if (screen === "home") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-8" style={{ backgroundColor: "#0f172a" }}>
        <div className="max-w-lg w-full rounded-3xl shadow-2xl p-6 sm:p-8 text-center space-y-5" style={{ backgroundColor: "#1e293b", border: "2px solid #facc15" }}>
          <div className="inline-block text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest" style={{ backgroundColor: "#facc15", color: "#0f172a" }}>O Level M3-R5</div>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight" style={{ color: "#facc15" }}>M3-R5 PYQ<br /><span style={{ color: "#ffffff" }}>Jan 2025</span></h1>
          <p style={{ color: "#d1d5db", fontSize: "14px" }}>{TOTAL} MCQ Questions • {TOTAL} Minutes • Instant Result</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[{ val: String(TOTAL), label: "Questions" }, { val: `${TOTAL} min`, label: "Duration" }, { val: "+1", label: "Per Correct" }, { val: "0", label: "Negative Mark" }].map((item, idx) => (
              <div key={idx} className="rounded-xl p-4" style={{ backgroundColor: "#0f172a", border: "1px solid #334155" }}>
                <p className="font-bold text-xl" style={{ color: "#facc15" }}>{item.val}</p>
                <p style={{ color: "#9ca3af" }}>{item.label}</p>
              </div>
            ))}
          </div>
          <button onClick={startQuiz} className="w-full font-bold py-4 rounded-2xl text-lg transition-all duration-200 active:scale-95" style={{ backgroundColor: "#facc15", color: "#0f172a", boxShadow: "0 8px 30px rgba(250,204,21,0.3)" }}>🚀 Attempt Mock Test</button>
          <button onClick={() => window.open("/pdfs/m3-python.pdf", "_blank")} className="block w-full font-bold py-3 rounded-2xl text-base transition-all duration-200" style={{ border: "2px solid #facc15", color: "#facc15", backgroundColor: "transparent" }}>📄 View PDF</button>
          <p className="text-xs pt-2" style={{ color: "#6b7280" }}>Powered by <span className="font-semibold" style={{ color: "#facc15" }}>OLevelQuiz.in</span></p>
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
      <div className="min-h-screen px-4 py-6" style={{ backgroundColor: "#0f172a" }}>
        <div className="max-w-2xl mx-auto space-y-5">
          <div className="rounded-2xl p-6 sm:p-8 text-center space-y-4" style={{ backgroundColor: "#1e293b", border: "2px solid #facc15" }}>
            <h2 className="text-2xl font-bold" style={{ color: "#ffffff" }}>Quiz Completed!</h2>
            <p className="text-3xl font-extrabold" style={{ color: grade.color }}>{grade.label}</p>
            <div className="relative w-36 h-36 mx-auto">
              <svg className="w-full h-full" viewBox="0 0 120 120" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="60" cy="60" r="52" fill="none" stroke="#334155" strokeWidth="10" />
                <circle cx="60" cy="60" r="52" fill="none" stroke="#facc15" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${(percentage / 100) * 327} 327`} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold" style={{ color: "#facc15" }}>{percentage}%</span>
                <span className="text-xs" style={{ color: "#d1d5db" }}>Score</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-xl p-3" style={{ backgroundColor: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.4)" }}><p className="font-bold text-xl" style={{ color: "#22c55e" }}>{score}</p><p style={{ color: "#d1d5db" }}>Correct</p></div>
              <div className="rounded-xl p-3" style={{ backgroundColor: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.4)" }}><p className="font-bold text-xl" style={{ color: "#ef4444" }}>{attempted - score}</p><p style={{ color: "#d1d5db" }}>Wrong</p></div>
              <div className="rounded-xl p-3" style={{ backgroundColor: "rgba(148,163,184,0.1)", border: "1px solid rgba(148,163,184,0.3)" }}><p className="font-bold text-xl" style={{ color: "#e2e8f0" }}>{TOTAL - attempted}</p><p style={{ color: "#d1d5db" }}>Skipped</p></div>
            </div>
          </div>
          <div className="rounded-2xl p-5 space-y-4" style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}>
            <h3 className="text-lg font-bold" style={{ color: "#facc15" }}>📋 Answer Review</h3>
            <div className="space-y-3 overflow-y-auto pr-1" style={{ maxHeight: "55vh" }}>
              {questions.map((q, i) => {
                const isCorrect = selected[i] === q.answer;
                const isSkipped = selected[i] === null;
                return (
                  <div key={i} className="p-4 rounded-xl" style={{ border: `1px solid ${!isSkipped ? (isCorrect ? "rgba(34,197,94,0.5)" : "rgba(239,68,68,0.5)") : "#475569"}`, backgroundColor: !isSkipped ? (isCorrect ? "rgba(34,197,94,0.08)" : "rgba(239,68,68,0.08)") : "rgba(71,85,105,0.15)" }}>
                    <p className="text-sm font-medium mb-2" style={{ color: "#e2e8f0" }}><span className="font-bold" style={{ color: "#facc15" }}>Q{i + 1}.</span> {q.question}</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {!isSkipped && <span className="px-2 py-1 rounded-full" style={{ backgroundColor: isCorrect ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)", color: isCorrect ? "#22c55e" : "#ef4444" }}>Your: {selected[i]}</span>}
                      {isSkipped && <span className="px-2 py-1 rounded-full" style={{ backgroundColor: "rgba(148,163,184,0.2)", color: "#94a3b8" }}>Skipped</span>}
                      {!isCorrect && <span className="px-2 py-1 rounded-full" style={{ backgroundColor: "rgba(34,197,94,0.2)", color: "#22c55e" }}>✓ {q.answer}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={startQuiz} className="flex-1 font-bold py-4 rounded-2xl transition-all active:scale-95" style={{ backgroundColor: "#facc15", color: "#0f172a" }}>🔄 Retry Quiz</button>
            <button onClick={() => setScreen("home")} className="flex-1 font-bold py-4 rounded-2xl transition-all active:scale-95" style={{ border: "2px solid #facc15", color: "#facc15", backgroundColor: "transparent" }}>🏠 Home</button>
          </div>
        </div>
      </div>
    );
  }
  const q = questions[current];
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0f172a" }}>
      <div className="sticky top-0 z-30 px-4 py-3" style={{ backgroundColor: "rgba(30,41,59,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #334155" }}>
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <button onClick={() => setShowNav(!showNav)} className="flex items-center gap-2 font-bold text-sm px-3 py-2 rounded-xl" style={{ backgroundColor: "rgba(250,204,21,0.15)", color: "#facc15", border: "1px solid rgba(250,204,21,0.3)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            Q{current + 1}/{TOTAL}
          </button>
          <div className="flex items-center gap-2 font-mono font-bold text-lg px-4 py-2 rounded-xl" style={{ backgroundColor: timer.time <= 60 ? "rgba(239,68,68,0.2)" : "rgba(250,204,21,0.12)", color: timer.time <= 60 ? "#ef4444" : "#facc15", border: `1px solid ${timer.time <= 60 ? "rgba(239,68,68,0.4)" : "rgba(250,204,21,0.3)"}` }}>{timer.formatTime}</div>
          <button onClick={submitQuiz} className="font-bold text-sm px-4 py-2 rounded-xl transition-all active:scale-95" style={{ backgroundColor: "#ef4444", color: "#ffffff", border: "1px solid #f87171" }}>Submit</button>
        </div>
      </div>
      <div className="w-full" style={{ height: "4px", backgroundColor: "#1e293b" }}><div style={{ height: "100%", width: `${((current + 1) / TOTAL) * 100}%`, background: "linear-gradient(90deg, #facc15, #eab308)", transition: "width 0.5s ease-out" }} /></div>
      {showNav && (
        <><div className="fixed inset-0 z-40" style={{ backgroundColor: "rgba(0,0,0,0.7)" }} onClick={() => setShowNav(false)} />
          <div className="fixed left-0 top-0 bottom-0 z-50 overflow-y-auto p-5 space-y-4" style={{ width: "320px", maxWidth: "85vw", backgroundColor: "#1e293b", borderRight: "2px solid #facc15" }}>
            <div className="flex items-center justify-between"><h3 className="font-bold text-lg" style={{ color: "#facc15" }}>Question Navigator</h3><button onClick={() => setShowNav(false)} className="text-2xl" style={{ color: "#94a3b8" }}>✕</button></div>
            <div className="grid grid-cols-6 gap-2">{questions.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} className="w-10 h-10 rounded-lg text-sm font-bold transition-all" style={{ backgroundColor: i === current ? "#facc15" : selected[i] !== null ? "rgba(34,197,94,0.15)" : "#0f172a", color: i === current ? "#0f172a" : selected[i] !== null ? "#22c55e" : "#94a3b8", border: `1.5px solid ${i === current ? "#facc15" : (selected[i] !== null ? "rgba(34,197,94,0.5)" : "#475569")}` }}>{i + 1}</button>
              ))}</div>
          </div></>
      )}
      <div className="flex-1 flex items-start justify-center px-4 py-5"><div className="max-w-3xl w-full space-y-5"><div className="rounded-2xl p-5 sm:p-6" style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}><span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(250,204,21,0.15)", color: "#facc15", border: "1px solid rgba(250,204,21,0.3)" }}>Question {current + 1} of {TOTAL}</span><h2 className="text-lg sm:text-xl font-semibold leading-relaxed whitespace-pre-line" style={{ color: "#ffffff" }}>{q.question}</h2></div>
          <div className="space-y-3">{q.options.map((opt, idx) => { const isSel = selected[current] === opt; return (
                <button key={idx} onClick={() => selectOption(opt)} className="w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center gap-4" style={{ backgroundColor: isSel ? "rgba(250,204,21,0.12)" : "#111827", border: isSel ? "2px solid #facc15" : "2px solid #334155", boxShadow: isSel ? "0 4px 20px rgba(250,204,21,0.15)" : "none" }}><span className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ backgroundColor: isSel ? "#facc15" : "#1e293b", color: isSel ? "#0f172a" : "#d1d5db", border: isSel ? "none" : "1px solid #475569" }}>{["A", "B", "C", "D"][idx]}</span><span className="text-sm sm:text-base" style={{ color: isSel ? "#facc15" : "#e2e8f0", fontWeight: isSel ? 600 : 400 }}>{opt}</span></button>
              );})}</div></div></div>
      <div className="sticky bottom-0 z-20 px-4 py-3" style={{ backgroundColor: "rgba(30,41,59,0.97)", backdropFilter: "blur(12px)", borderTop: "1px solid #334155" }}><div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          <button onClick={prev} disabled={current === 0} className="flex items-center gap-2 font-bold py-3 px-5 rounded-2xl transition-all text-sm active:scale-95" style={{ backgroundColor: current === 0 ? "#1e293b" : "#334155", color: current === 0 ? "#475569" : "#ffffff", border: "1px solid #475569" }}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>Prev</button>
          {selected[current] !== null && <button onClick={() => { const copy = [...selected]; copy[current] = null; setSelected(copy); }} className="text-xs font-medium underline" style={{ color: "#ef4444" }}>Clear</button>}
          <button onClick={current === TOTAL - 1 ? submitQuiz : next} className="flex items-center gap-2 font-bold py-3 px-5 rounded-2xl transition-all text-sm active:scale-95" style={{ backgroundColor: current === TOTAL - 1 ? "#22c55e" : "#facc15", color: current === TOTAL - 1 ? "#ffffff" : "#0f172a", border: `1px solid ${current === TOTAL - 1 ? "#4ade80" : "#eab308"}` }}>{current === TOTAL - 1 ? "Submit" : "Next"}<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></button>
        </div></div></div>);}; 
export default M3PYQ2025;
                                                           
