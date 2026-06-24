import React, { useState, useEffect, useCallback } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const m2Questions: Question[] = [
  { question: "What is the full form of HTML?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of these"], answer: "Hyper Text Markup Language" },
  { question: "Which tag is used to create a hyperlink?", options: ["<link>", "<a>", "<img>", "<href>"], answer: "<a>" },
  { question: "Which CSS property is used to change the background color?", options: ["color", "bgcolor", "background-color", "back-color"], answer: "background-color" },
  { question: "What is the correct tag for the largest heading?", options: ["<h6>", "<heading>", "<h1>", "<head>"], answer: "<h1>" },
  { question: "W3.CSS is a standard _______ framework.", options: ["JavaScript", "CSS", "PHP", "Python"], answer: "CSS" },
  { question: "Which tag is used to define an internal style sheet?", options: ["<script>", "<css>", "<style>", "<link>"], answer: "<style>" },
  { question: "What is the default value of the position property in CSS?", options: ["relative", "fixed", "absolute", "static"], answer: "static" },
  { question: "Which sign is used for IDs in CSS selectors?", options: [".", "#", "*", "@"], answer: "#" },
  { question: "Inside which HTML element do we put the JavaScript?", options: ["<js>", "<scripting>", "<script>", "<javascript>"], answer: "<script>" },
  { question: "Which attribute is used to provide an alternative text for an image?", options: ["title", "src", "alt", "longdesc"], answer: "alt" },
  { question: "How can you create a list with numbers?", options: ["<ul>", "<list>", "<ol>", "<dl>"], answer: "<ol>" },
  { question: "Which W3.CSS class is used to create a responsive grid?", options: ["w3-row", "w3-grid", "w3-container", "w3-layout"], answer: "w3-row" },
  { question: "Which protocol is used for transferring files on the web?", options: ["HTTP", "SMTP", "FTP", "TELNET"], answer: "FTP" },
  { question: "Which JavaScript method is used to write into the browser's console?", options: ["console.print()", "console.log()", "console.write()", "console.output()"], answer: "console.log()" },
  { question: "What is the correct syntax for referring to an external script named 'xxx.js'?", options: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"], answer: "<script src='xxx.js'>" },
  { question: "Which CSS property controls the text size?", options: ["font-style", "text-size", "font-size", "text-style"], answer: "font-size" },
  { question: "Which tag is used to create a table row?", options: ["<td>", "<th>", "<table>", "<tr>"], answer: "<tr>" },
  { question: "The # symbol in CSS is used to select elements with a specific ______.", options: ["Class", "Tag", "ID", "Attribute"], answer: "ID" },
  { question: "Which of the following is not a valid image format for web?", options: ["JPG", "PNG", "GIF", "PSD"], answer: "PSD" },
  { question: "Which HTML element is used for the document's footer?", options: ["<bottom>", "<section>", "<footer>", "<end>"], answer: "<footer>" },
  { question: "How do you display hyperlinks without an underline in CSS?", options: ["a {text-decoration:none;}", "a {underline:none;}", "a {decoration:no-underline;}", "a {text-style:none;}"], answer: "a {text-decoration:none;}" },
  { question: "Which W3.CSS class adds a 16px padding to an element?", options: ["w3-padding-16", "w3-margin-16", "w3-container", "w3-box"], answer: "w3-padding-16" },
  { question: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
  { question: "Which tag is used to define a list item?", options: ["<li>", "<ul>", "<ol>", "<list>"], answer: "<li>" },
  { question: "How do you call a function named 'myFunction' in JavaScript?", options: ["call myFunction()", "myFunction()", "call function myFunction()", "execute myFunction()"], answer: "myFunction()" },
  { question: "Which HTML attribute is used to define inline styles?", options: ["font", "class", "styles", "style"], answer: "style" },
  { question: "Which tag is used to insert a line break?", options: ["<break>", "<lb>", "<br>", "<newline>"], answer: "<br>" },
  { question: "In CSS, 'padding' is the space between content and ______.", options: ["Margin", "Border", "Other elements", "Window"], answer: "Border" },
  { question: "Which W3.CSS class makes an image circular?", options: ["w3-circle", "w3-round", "w3-oval", "w3-image-circle"], answer: "w3-circle" },
  { question: "What is the correct way to write a JavaScript array?", options: ["var colors = 1=('red'), 2=('green')", "var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green')", "var colors = 'red', 'green'"], answer: "var colors = ['red', 'green', 'blue']" },
  { question: "Which HTML element is used to specify a header for a document?", options: ["<top>", "<head>", "<header>", "<section>"], answer: "<header>" },
  { question: "The 'box-sizing: border-box' property includes ______ in the element's total width.", options: ["Padding and Border", "Margin", "Background", "Font size"], answer: "Padding and Border" },
  { question: "Which sign is used for classes in CSS?", options: ["#", "@", ".", "*"], answer: "." },
  { question: "Which JavaScript operator is used to assign a value to a variable?", options: ["*", "-", "=", "x"], answer: "=" },
  { question: "Which tag is used to create a checkbox in HTML forms?", options: ["<checkbox>", "<input type='check'>", "<input type='checkbox'>", "<check>"], answer: "<input type='checkbox'>" },
  { question: "What is the full form of URL?", options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Radio Locator", "None of these"], answer: "Uniform Resource Locator" },
  { question: "Which CSS property makes text bold?", options: ["font-weight", "text-bold", "font-style", "bold"], answer: "font-weight" },
  { question: "Which W3.CSS class creates a responsive navigation bar?", options: ["w3-navbar", "w3-bar", "w3-nav", "w3-menu"], answer: "w3-bar" },
  { question: "How can you make a list that lists the items with bullets?", options: ["<ol>", "<ul>", "<dl>", "<list>"], answer: "<ul>" },
  { question: "Which function is used to convert a string to an integer in JS?", options: ["parseInteger()", "parseInt()", "Integer.parse()", "toInt()"], answer: "parseInt()" },
];
