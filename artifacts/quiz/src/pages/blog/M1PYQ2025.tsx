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
