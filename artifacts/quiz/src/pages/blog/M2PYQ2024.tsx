import React, { useState, useEffect, useCallback } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    question: "In HTML, what is the use of the <a> tag? / एचटीएमएल में <a> टैग का प्रयोग किस लिए किया जाता है?",
    options: ["For creating lists", "For creating addresses", "For options", "For creating links"],
    answer: "For creating links",
  },
  {
    question: "Which of the following is not a new element in HTML5? / निम्न में से कौन सा एक HTML5 का नया एलिमेंट नहीं है?",
    options: ["nav", "audio", "article", "frameset"],
    answer: "frameset",
  },
  {
    question: "The ___ passes the user-provided information to the specified program. / वेब सर्वर किसका कार्य करता है?",
    options: ["User", "Browser", "Programmer", "Web server"],
    answer: "Web server",
  },
  {
    question: "Which of the following is not a photo editor? / फोटो एडिटिंग सॉफ्टवेयर की सूची में कौन सा शामिल नहीं है?",
    options: ["Luminar 4", "Adobe Reader", "Adobe Photoshop 7.0", "Capture One Pro"],
    answer: "Adobe Reader",
  },
  {
    question: "What HTML element is used to bold a text? / टेक्स्ट को बोल्ड करने के लिए HTML में कौन सा एलिमेंट प्रयोग होता है?",
    options: ["<i>", "<em>", "<bold>", "<b>"],
    answer: "<b>",
  },
  {
    question: "The <td> tag in HTML is used for: / <td> टैग HTML में किस लिए प्रयुक्त होता है?",
    options: ["Table heading", "Table row", "Row heading", "Table records"],
    answer: "Table records",
  },
  {
    question: "What is the function of Ctrl + Shift + T in Notepad++? / नोटपैड++ में Ctrl + Shift + T शॉर्टकट का क्या कार्य है?",
    options: ["Open all recent files", "Empty recent files list", "Restore recently closed file", "None"],
    answer: "Restore recently closed file",
  },
  {
    question: "What is the extension of an external CSS file? / एक्सटर्नल CSS फाइल की एक्सटेंशन क्या होती है?",
    options: [".scss", ".sass", ".html", ".css"],
    answer: ".css",
  },
  {
    question: "What is the full form of HTTPS? / HTTPS का पूर्ण रूप क्या है?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Text and Links Markup Language", "None of these"],
    answer: "None of these",
  },
  {
    question: "Which is the smallest heading tag in HTML? / HTML में सबसे छोटा heading tag कौन सा होता है?",
    options: ["<h1>", "<h4>", "<h6>", "<h9>"],
    answer: "<h6>",
  },
  {
    question: "Which selector selects all paragraph elements with lang='fr'?",
    options: ["p[lang='fr']", "P(lang~='fr')", "p(Lnag)", "P[lang] = 'fr'"],
    answer: "p[lang='fr']",
  },
  {
    question: "How is the text inside <strong> tag displayed? / HTML में <strong> टैग के भीतर टेक्स्ट कैसा दिखाई देता है?",
    options: ["Indented", "Italic", "List", "Bold"],
    answer: "Bold",
  },
  {
    question: "Which directive links and defines an AngularJS application in HTML?",
    options: ["ng-bind", "ng-app", "MVC", "ng-model"],
    answer: "ng-app",
  },
  {
    question: "How to define a hyperlink in HTML to open in a new tab?",
    options: ["target='_self'", "target='_parent'", "target='_top'", "target='_blank'"],
    answer: "target='_blank'",
  },
  {
    question: "Which protocol is used for remote login? / रिमोट लॉगिन के लिए किस प्रोटोकॉल का उपयोग होता है?",
    options: ["FTP", "SMTP", "NTP", "Telnet"],
    answer: "Telnet",
  },
  {
    question: "What is HTML? / HTML क्या है?",
    options: ["Marking Language", "Marked Language", "Markup Language", "Markedup Language"],
    answer: "Markup Language",
  },
  {
    question: "Which is the correct HTML code to set a background color?",
    options: ["<body bgcolor='yellow'>", "<body style='background-color:yellow'>", "<background>yellow</background>", "Both A and B"],
    answer: "Both A and B",
  },
  {
    question: "What is the shortcut to close multiple open sheets at once in Notepad++?",
    options: ["Ctrl + W", "Alt + F4", "Ctrl + Shift + W", "All of the above"],
    answer: "Ctrl + Shift + W",
  },
  {
    question: "Which company renamed LiveScript to JavaScript?",
    options: ["Netscape", "Cubix", "W3Schools.com", "United Infotec"],
    answer: "Netscape",
  },
  {
    question: "What is the latest version of Adobe Photoshop? / Adobe Photoshop का नवीनतम संस्करण क्या है?",
    options: ["CS6", "CS", "CC", "CS5"],
    answer: "CC",
  },
  {
    question: "Apart from <b> tag, which tag makes text bold? / <b> टैग के अलावा कौन सा टैग बोल्ड करता है?",
    options: ["<strong>", "<em>", "<bold>", "<i>"],
    answer: "<strong>",
  },
  {
    question: "The Internet is governed by: / इंटरनेट को कौन नियंत्रित करता है?",
    options: ["NIC", "I & B", "IETF", "None of above"],
    answer: "None of above",
  },
  {
    question: "What does SGML stand for? / SGML का पूर्ण रूप क्या है?",
    options: ["Standalone generalized markup", "Standalone Graphical markup", "Standard generalized markup language", "Standalone global makeup"],
    answer: "Standard generalized markup language",
  },
  {
    question: "Which pseudoclass is activated when mouse cursor moves over element?",
    options: ["mouse hover", "mouse over", "hover", "mouse move"],
    answer: "hover",
  },
  {
    question: "Which encryption algorithm is not present in Notepad++?",
    options: ["SHA-256", "MD5", "MD6", "Both (A) and (B)"],
    answer: "MD6",
  },
  {
    question: "Identify benefits provided by Photo Editing for Business. / फोटो एडिटिंग के क्या लाभ हैं?",
    options: ["Brand Building", "Better Sales", "Robust Social Media", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which statement is not true about responsive tables in W3.Table?",
    options: ["Scroll horizontally on small screens", "No difference on large screens", "w3-responsive creates responsive", "w3-table class creates responsive table"],
    answer: "w3-table class creates responsive table",
  },
  {
    question: "How are tones created in images? / इमेज में टोन कैसे बनाए जाते हैं?",
    options: ["Grey is added", "Black is added", "White is added", "None"],
    answer: "When grey is added to a color",
  },
  {
    question: "What is true about Conflicting Styles? / कॉन्फ़्लिक्टिंग स्टाइल्स के बारे में क्या सत्य है?",
    options: ["User agent precedence", "Author conflict", "Combination depends", "Styles 'cascade,' or flow together."],
    answer: "Styles 'cascade,' or flow together.",
  },
  {
    question: "Identify the basic list class in W3.css. / W3.css में बेसिक लिस्ट कौन सी है?",
    options: ["w3-ol", "w3-border", "w3-center", "all of the above"],
    answer: "w3-ol",
  },
