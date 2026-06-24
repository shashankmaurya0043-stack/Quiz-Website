import React, { useState, useEffect, useCallback } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const m3Questions: Question[] = [
  { question: "Who developed the Python programming language?", options: ["Guido van Rossum", "Dennis Ritchie", "James Gosling", "Bjarne Stroustrup"], answer: "Guido van Rossum" },
  { question: "Which of the following is the correct extension of the Python file?", options: [".python", ".pl", ".py", ".p"], answer: ".py" },
  { question: "Is Python case sensitive when dealing with identifiers?", options: ["Yes", "No", "Depends on OS", "None of the mentioned"], answer: "Yes" },
  { question: "Which of the following is not a keyword in Python?", options: ["eval", "assert", "nonlocal", "pass"], answer: "eval" },
  { question: "Which function is used to get the length of a list in Python?", options: ["count()", "length()", "len()", "size()"], answer: "len()" },
  { question: "What is the output of 'print(2**3)'?", options: ["6", "8", "9", "12"], answer: "8" },
  { question: "Which of the following is an immutable data type in Python?", options: ["List", "Dictionary", "Tuple", "Set"], answer: "Tuple" },
  { question: "How do you start a comment in Python?", options: ["//", "/*", "#", "--"], answer: "#" },
  { question: "What is the result of 'print(type(5.0))'?", options: ["<class 'int'>", "<class 'float'>", "<class 'number'>", "<class 'double'>"], answer: "<class 'float'>" },
  { question: "Which of the following is used to define a block of code in Python?", options: ["Brackets", "Indentation", "Parentheses", "Quotation marks"], answer: "Indentation" },
  { question: "What is the output of 'print(\"Hello\"[1])'?", options: ["H", "e", "l", "o"], answer: "e" },
  { question: "Which operator is used for floor division in Python?", options: ["/", "//", "%", "**"], answer: "//" },
  { question: "Which keyword is used for function declaration?", options: ["fun", "define", "def", "func"], answer: "def" },
  { question: "What is the value of 'print(10 % 3)'?", options: ["3", "1", "0", "10"], answer: "1" },
  { question: "Which of the following represents a dictionary in Python?", options: ["[]", "()", "{}", "<>"], answer: "{}" },
  { question: "What is the result of 'bool(0)' in Python?", options: ["True", "False", "None", "Error"], answer: "False" },
  { question: "Which method is used to add an element to the end of a list?", options: ["add()", "insert()", "append()", "push()"], answer: "append()" },
  { question: "What is the result of 'print(\"abc\".upper())'?", options: ["Abc", "abc", "ABC", "Error"], answer: "ABC" },
  { question: "Which function is used to take input from the user?", options: ["get()", "scan()", "input()", "read()"], answer: "input()" },
  { question: "What is the default return value of a function that does not return anything?", options: ["0", "False", "None", "Null"], answer: "None" },
  { question: "Which of the following is a NumPy array attribute that returns the number of dimensions?", options: ["ndim", "shape", "size", "dtype"], answer: "ndim" },
  { question: "What is the correct way to import NumPy?", options: ["import numpy", "import numpy as np", "from numpy import *", "All of the above"], answer: "import numpy as np" },
  { question: "Which of the following is used to create a NumPy array?", options: ["np.list()", "np.array()", "np.table()", "np.object()"], answer: "np.array()" },
  { question: "What is the output of 'print(range(5))' in Python 3?", options: ["[0, 1, 2, 3, 4]", "range(0, 5)", "0 1 2 3 4", "Error"], answer: "range(0, 5)" },
  { question: "Which of the following is a sequence data type?", options: ["Integer", "List", "Dictionary", "Float"], answer: "List" },
  { question: "What is the output of 'print(\"Python\" * 2)'?", options: ["PythonPython", "Python 2", "Python2", "Error"], answer: "PythonPython" },
  { question: "Which loop is used to iterate over a sequence?", options: ["while", "for", "do-while", "if"], answer: "for" },
  { question: "What is the use of 'break' statement?", options: ["To skip the current iteration", "To terminate the loop", "To restart the loop", "To handle exceptions"], answer: "To terminate the loop" },
  { question: "Which method is used to remove a specific element from a list?", options: ["delete()", "pop()", "remove()", "discard()"], answer: "remove()" },
  { question: "What is a 'lambda' function in Python?", options: ["A function with many names", "An anonymous single-line function", "A function used for plotting", "A function that never returns"], answer: "An anonymous single-line function" },
  { question: "Which of the following is used to handle exceptions in Python?", options: ["try...except", "try...catch", "do...while", "if...else"], answer: "try...except" },
  { question: "How do you open a file for reading in Python?", options: ["open(\"file.txt\", \"w\")", "open(\"file.txt\", \"r\")", "open(\"file.txt\", \"a\")", "open(\"file.txt\", \"x\")"], answer: "open(\"file.txt\", \"r\")" },
  { question: "What does 'pip' stand for?", options: ["Python Install Program", "Preferred Installer Program", "Python Intranet Program", "None of these"], answer: "Preferred Installer Program" },
  { question: "Which of the following is a built-in module in Python?", options: ["math", "random", "os", "All of the above"], answer: "All of the above" },
  { question: "What is the output of 'print(abs(-5))'?", options: ["-5", "5", "0", "None"], answer: "5" },
];
