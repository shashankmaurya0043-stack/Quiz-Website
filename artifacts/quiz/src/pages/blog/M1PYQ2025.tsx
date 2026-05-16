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
