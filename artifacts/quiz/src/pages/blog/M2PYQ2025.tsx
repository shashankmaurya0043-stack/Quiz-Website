import React, { useState, useEffect, useCallback } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    question: "HTML tags are surrounded by which type of brackets? / HTML टैग्स को किन ब्रैकेट्स में लिखा जाता है?",
    options: [
      "Angle / कोणीय",
      "Square / वर्गाकार",
      "Curly / घुंघराले",
      "Round / गोलाकार"
    ],
    answer: "Angle / कोणीय"
  },
  {
    question: "HTML web pages can be read and rendered by:",
    options: [
      "Web Browser / वेब ब्राउज़र",
      "Interpreter",
      "Server",
      "Compiler"
    ],
    answer: "Web Browser / वेब ब्राउज़र"
  },
  {
    question: "How to insert a background image in HTML?",
    options: [
      "<body background='img.png'>",
      "<img background='img.png'>",
      "<bg-image='img.png'>",
      "None of the above"
    ],
    answer: "<body background='img.png'>"
  },
  {
    question: "HTML is what type of language?",
    options: [
      "Network Protocol",
      "Programming Language",
      "Markup Language",
      "Scripting Language"
    ],
    answer: "Markup Language"
  },
  {
    question: "Tags and texts that are not directly displayed on the page are written in which section?",
    options: [
      "<title>",
      "<html>",
      "<head>",
      "<body>"
    ],
    answer: "<head>"
  },
  {
    question: "Which HTML tag produces the biggest heading?",
    options: [
      "<h4>",
      "<h>",
      "<h1>",
      "<h9>"
    ],
    answer: "<h1>"
  },
  {
    question: "Fundamental HTML Block is known as:",
    options: [
      "HTML Entity",
      "HTML Attribute",
      "HTML Tag",
      "HTML Body"
    ],
    answer: "HTML Tag"
  },
  {
    question: "What tag is used to display a picture in an HTML page?",
    options: [
      "<image>",
      "<picture>",
      "<img>",
      "<src>"
    ],
    answer: "<img>"
  },
  {
    question: "The page title is inside the ________ tag?",
    options: [
      "Table",
      "Division",
      "Head",
      "Body"
    ],
    answer: "Head"
  },
  {
    question: "Which tag is used for inline frame?",
    options: [
      "<Inframe>",
      "<iframe>",
      "<inlineframe>",
      "<frame>"
    ],
    answer: "<iframe>"
  }
];
  // यहाँ M2 के Q1-Q100 आएंगे
];
