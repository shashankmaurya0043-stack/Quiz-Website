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
