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
