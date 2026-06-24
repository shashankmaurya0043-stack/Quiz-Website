import React, { useState, useEffect, useCallback } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const repeatedM1: Question[] = [
  { question: "What is the shortcut key for 'Save As' in LibreOffice?", options: ["Ctrl + S", "Ctrl + Shift + S", "Ctrl + Alt + S", "F12"], answer: "Ctrl + Shift + S" },
  { question: "LibreOffice Calc file is saved with which extension?", options: [".odt", ".ods", ".odp", ".odg"], answer: ".ods" },
  { question: "Who is known as the father of the Internet?", options: ["Charles Babbage", "Vint Cerf", "Tim Berners-Lee", "Ray Tomlinson"], answer: "Vint Cerf" },
  { question: "Which protocol is used to send emails?", options: ["HTTP", "FTP", "SMTP", "POP3"], answer: "SMTP" },
  { question: "The brain of any computer system is:", options: ["ALU", "Memory", "CPU", "Control Unit"], answer: "CPU" },
  { question: "What is the full form of UPI?", options: ["Unified Payment Interface", "Unique Payment Interface", "Union Provider Interface", "Unified Pay Interface"], answer: "Unified Payment Interface" },
  { question: "How many layers are there in the OSI Model?", options: ["4", "5", "6", "7"], answer: "7" },
  { question: "What is the shortcut to print a document in LibreOffice?", options: ["Ctrl + P", "Ctrl + Alt + P", "Alt + P", "Ctrl + Shift + P"], answer: "Ctrl + P" },
  { question: "Which among the following is a search engine?", options: ["Chrome", "Firefox", "Google", "Internet Explorer"], answer: "Google" },
  { question: "What does BHIM stand for?", options: ["Bharat Interface for Money", "Bharat Internet for Money", "Bharat Interface for Machine", "Bharat Instant Money"], answer: "Bharat Interface for Money" },
  { question: "The maximum zoom percentage in LibreOffice Calc is:", options: ["400%", "500%", "600%", "3000%"], answer: "400%" },
  { question: "What is the shortcut key for 'Undo'?", options: ["Ctrl + Y", "Ctrl + U", "Ctrl + Z", "Ctrl + R"], answer: "Ctrl + Z" },
  { question: "Which type of memory is volatile?", options: ["ROM", "RAM", "Hard Disk", "Flash Drive"], answer: "RAM" },
  { question: "What is the default font size in LibreOffice Writer?", options: ["10", "11", "12", "14"], answer: "12" },
  { question: "1 Petabyte (PB) is equal to how many Gigabytes?", options: ["1024 GB", "1048576 GB", "524288 GB", "1000 GB"], answer: "1048576 GB" },
  { question: "Which command is used to remove a file in Linux?", options: ["delete", "remove", "rm", "erase"], answer: "rm" },
  { question: "Full form of QR Code is:", options: ["Quick Response Code", "Quality Ratio Code", "Quick Read Code", "Quick Register Code"], answer: "Quick Response Code" },
  { question: "OTP stands for:", options: ["One Time Password", "Only Time Password", "On Time Process", "One Tech Pass"], answer: "One Time Password" },
  { question: "Which bar shows the name of the document in LibreOffice?", options: ["Status Bar", "Menu Bar", "Title Bar", "Standard Toolbar"], answer: "Title Bar" },
  { question: "What is the full form of PDF?", options: ["Portable Data File", "Portable Document Format", "Personal Data File", "Portable Document File"], answer: "Portable Document Format" },
  { question: "Which generation of computers used Vacuum Tubes?", options: ["1st Generation", "2nd Generation", "3rd Generation", "4th Generation"], answer: "1st Generation" },
  { question: "Short cut key for page break in LibreOffice Writer?", options: ["Ctrl + Enter", "Alt + Enter", "Shift + Enter", "Ctrl + Shift + Enter"], answer: "Ctrl + Enter" },
  { question: "What is the full form of AEPS?", options: ["Aadhar Enabled Payment System", "Aadhar Enabled Pay System", "Aadhar Easy Payment System", "All Enabled Payment System"], answer: "Aadhar Enabled Payment System" },
  { question: "A compiler is used to translate:", options: ["Low level to High level", "High level to Machine level", "Assembly to Machine", "None of these"], answer: "High level to Machine level" },
  { question: "Which sign always starts a formula in Calc?", options: ["+", "-", "=", "*"], answer: "=" },
  { question: "What is the default name of a new presentation in LibreOffice?", options: ["Untitled 1", "Presentation 1", "New Document", "Document 1"], answer: "Untitled 1" },
  { question: "Full form of URL is:", options: ["Uniform Resource Locator", "Unique Resource Locator", "Universal Resource Locator", "Uniform Radio Locator"], answer: "Uniform Resource Locator" },
  { question: "Which shortcut key is used for full screen in LibreOffice?", options: ["Ctrl + J", "Ctrl + Shift + J", "Ctrl + F", "Ctrl + Shift + F"], answer: "Ctrl + Shift + J" },
  { question: "IoT stands for:", options: ["Internet of Things", "Internal of Things", "Internet of Tools", "Inter Office Tools"], answer: "Internet of Things" },
  { question: "The smallest unit of digital data is:", options: ["Byte", "Nibble", "Bit", "Kilobyte"], answer: "Bit" },
  { question: "What is the full form of EEPROM?", options: ["Electrically Erasable Programmable Read Only Memory", "Easy Erasable Programmable Read Only Memory", "Electric Erase Part Read Only Memory", "None"], answer: "Electrically Erasable Programmable Read Only Memory" },
  { question: "Which function key is used for spell check?", options: ["F5", "F7", "F9", "F11"], answer: "F7" },
  { question: "Twitter is an example of:", options: ["E-commerce", "Micro-blogging", "Search engine", "Operating system"], answer: "Micro-blogging" },
  { question: "What is the max number of rows in LibreOffice Calc?", options: ["1048576", "65536", "32768", "Unlimited"], answer: "1048576" },
  { question: "Full form of WAN is:", options: ["Wide Area Network", "World Area Network", "Wide Access Network", "Web Area Network"], answer: "Wide Area Network" },
  { question: "Which layer of OSI model is the physical connection layer?", options: ["Layer 1", "Layer 2", "Layer 3", "Layer 7"], answer: "Layer 1" },
  { question: "Cortana is a personal assistant for:", options: ["Windows 10", "Android", "iOS", "Linux"], answer: "Windows 10" },
  { question: "Extension of LibreOffice Writer template is:", options: [".ott", ".odt", ".ots", ".otp"], answer: ".ott" },
  { question: "In Calc, cell address A$1 is an example of:", options: ["Relative", "Absolute", "Mixed", "None"], answer: "Mixed" },
  { question: "Digital locker was launched in:", options: ["2014", "2015", "2016", "2017"], answer: "2015" },
];
