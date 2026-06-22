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
