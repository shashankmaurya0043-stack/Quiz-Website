import React, { useState, useEffect, useCallback } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    question: "HTML tags are surrounded by which type of brackets? / HTML टैग्स को किन ब्रैकेट्स में लिखा जाता है?",
    options: ["Angle / कोणीय", "Square / वर्गाकार", "Curly / घुंघराले", "Round / गोलाकार"],
    answer: "Angle / कोणीय",
  },
  {
    question: "HTML web pages can be read and rendered by: / HTML वेब पेजों को पढ़ने और प्रदर्शित करने का कार्य कौन करता है?",
    options: ["Web Browser / वेब ब्राउज़र", "Interpreter / इंटरप्रेटर", "Server / सर्वर", "Compiler / कम्पाइलर"],
    answer: "Web Browser / वेब ब्राउज़र",
  },
  {
    question: "How to insert a background image in HTML? / HTML में बैकग्राउंड इमेज जोड़ने के लिए सही कोड क्या है?",
    options: ["<body background=\"img.png\">", "<img background=\"img.png\">", "<bg-image=\"img.png\">", "None of the above"],
    answer: "<body background=\"img.png\">",
  },
  {
    question: "HTML is what type of language? / HTML किस प्रकार की भाषा है?",
    options: ["Network Protocol / नेटवर्क प्रोटोकॉल", "Programming Language / प्रोग्रामिंग भाषा", "Markup Language / मार्कअप भाषा", "Scripting Language / स्क्रिप्टिंग भाषा"],
    answer: "Markup Language / मार्कअप भाषा",
  },
  {
    question: "Tags and texts that are not directly displayed on the page are written in which section? / HTML टैग्स जो सीधे पेज पर प्रदर्शित नहीं होते, वे किस सेक्शन में लिखे जाते हैं?",
    options: ["<title>", "<html>", "<head>", "<body>"],
    answer: "<head>",
  },
  {
    question: "Which HTML tag produces the biggest heading? / कौन सा HTML टैग सबसे बड़ा हेडिंग बनाता है?",
    options: ["<h4>", "<h>", "<h1>", "<h9>"],
    answer: "<h1>",
  },
  {
    question: "Fundamental HTML Block is known as: / HTML के बेसिक ब्लॉक एलीमेंट को क्या कहा जाता है?",
    options: ["HTML Entity / एचटीएमएल एंटिटी", "HTML Attribute / एचटीएमएल एट्रिब्यूट", "HTML Tag / एचटीएमएल टैग", "HTML Body / एचटीएमएल बॉडी"],
    answer: "HTML Tag / एचटीएमएल टैग",
  },
  {
    question: "What tag is used to display a picture in an HTML page? / HTML पेज में इमेज प्रदर्शित करने के लिए कौन सा टैग उपयोग किया जाता है?",
    options: ["<image>", "<picture>", "<img>", "<src>"],
    answer: "<img>",
  },
  {
    question: "The page title is inside the ________ tag? / पेज का टाइटल किस टैग के अंदर लिखा जाता है?",
    options: ["Table / टेबल", "Division / डिवीजन", "Head / हेड", "Body / बॉडी"],
    answer: "Head / हेड",
  },
  {
    question: "Which tag is used for inline frame? / HTML के कौन से टैग इनलाइन फ्रेम बनाने के लिए प्रयोग होता है?",
    options: ["<Inframe>", "<iframe>", "<inlineframe>", "<frame>"],
    answer: "<iframe>",
  },
  {
    question: "What are the types of unordered or bulleted lists in HTML? / HTML में unordered list (bulleted) के प्रकार क्या हैं?",
    options: ["Disc, square, triangle", "Polygon, triangle, circle", "Disc, circle, square", "All of the above"],
    answer: "Disc, circle, square",
  },
  {
    question: "__________ are the HTML codes that control the appearance of the document contents. / HTML टैग्स क्या होते हैं?",
    options: ["Tags / टैग्स", "Codas / कोडास", "Slashes / स्लैशोज", "Properties / प्रॉपटीज"],
    answer: "Tags / टैग्स",
  },
  {
    question: "There are _________ color names recognized by all versions of HTML? / HTML के द्वारा कितने रंग नाम सभी संस्करणों में पहचाने जाते हैं?",
    options: ["6", "256", "8", "16"],
    answer: "16",
  },
  {
    question: "What should be the first tag in any HTML document? / HTML का पहला टैग दस्तावेज़ में क्या होना चाहिए?",
    options: ["<html>", "<title>", "<head>", "<document>"],
    answer: "<html>",
  },
  {
    question: "Which of the following is the correct way to create a list using lowercase letters? / HTML में सूची (list) को छोटे अक्षरों में प्रदर्शित करने का सही तरीका क्या है?",
    options: ["<ol letter=\"a\">", "<ol type=\"a\">", "<ol alpha=\"a\">", "None of the above"],
    answer: "<ol type=\"a\">",
  },
  {
    question: "The year in which HTML was first proposed? / HTML को पहली बार कब प्रस्तावित किया गया था?",
    options: ["2000", "1987", "1990", "1995"],
    answer: "1990",
  },
  {
    question: "HTML uses: / HTML का उपयोग किस प्रकार के टैग्स से होता है?",
    options: ["User defined Tags", "Pre-Specified Tags", "Predefined Tags", "All of the Above"],
    answer: "Predefined Tags",
  },
  {
    question: "Which of the following is the correct way to start an ordered list with the count of numeric value 4? / किसी ऑर्डर्ड लिस्ट को 4 से शुरू करने का सही तरीका क्या है?",
    options: ["<ol type=\"1\" initial=\"4\">", "<ol type=\"1\" begin=\"4\">", "<ol type=\"1\" num=\"4\">", "<ol type=\"1\" start=\"4\">"],
    answer: "<ol type=\"1\" start=\"4\">",
  },
  {
    question: "How can you make a list with numbers? / आप संख्या वाली सूची कैसे बना सकते हैं?",
    options: ["<ul>", "<list>", "<dl>", "<ol>"],
    answer: "<ol>",
  },
  {
    question: "The entire web document is contained within _________? / संपूर्ण HTML वेब दस्तावेज़ किसके अंदर रखा जाता है?",
    options: ["Comments / टिप्पणियाँ", "HTML element / एचटीएमएल एलीमेंट", "Tags / टैग्स", "Web page / वेब पेज"],
    answer: "HTML element / एचटीएमएल एलीमेंट",
  },
  {
    question: "What is the work of <address> element in HTML5? / HTML5 में <address> एलीमेंट का क्या कार्य है?",
    options: ["Contains home address / घर का पता शामिल करता है", "Contains contact details for author / लेखक की संपर्क जानकारी शामिल करता है", "Contains IP address / आईपी पता शामिल करता है", "Contains URL / यूआरएल शामिल करता है"],
    answer: "Contains contact details for author / लेखक की संपर्क जानकारी शामिल करता है",
  },
  {
    question: "Which HTML element is used for short quote? / छोटा कोटेशन दर्शाने के लिए कौन सा HTML एलीमेंट प्रयोग किया जाता है?",
    options: ["<q>", "<blockquote>", "<em>", "<abbr>"],
    answer: "<q>",
  },
  {
    question: "Which of the following is not an HTML5 tag? / निम्न में से कौन सा HTML5 टैग नहीं है?",
    options: ["<slider>", "<video>", "<track>", "<source>"],
    answer: "<slider>",
  },
  {
    question: "What is the use of <hr/> tag in HTML? / HTML में <hr/> टैग का क्या उपयोग है?",
    options: ["To create a horizontal rule between sections", "To create vertical rule", "To create a line break", "For making italics"],
    answer: "To create a horizontal rule between sections",
  },
  {
    question: "Which of the following tag is used to create a text area in HTML Form? / HTML फॉर्म में टेक्स्ट एरिया बनाने के लिए किस टैग का उपयोग किया जाता है?",
    options: ["<input type=\"text\" />", "<textarea></textarea>", "<text></text>", "<input type=\"textarea\" />"],
    answer: "<textarea></textarea>",
  },
  {
    question: "What is the latest HTML standard? / HTML का नवीनतम संस्करण कौन सा है?",
    options: ["HTML 5.0", "HTML 4.0", "XML", "SGML"],
    answer: "HTML 5.0",
  },
  {
    question: "Which attribute is not essential under <iframe>? / <iframe> टैग में से कौन-सा एट्रिब्यूट अनिवार्य नहीं है?",
    options: ["frameborder", "width", "height", "src"],
    answer: "frameborder",
  },
  {
    question: "How to write a hyperlink to open in a new page in HTML? / किस टैग का उपयोग एक नए पेज में लिंक खोलने के लिए होता है?",
    options: ["<a href=\"url\" target=\"Blank\">", "<a href=\"url\" target=\"_blank\">", "<a href=\"url\" target=\"#Blank\">", "<a href=\"url\" target=\"New\">"],
    answer: "<a href=\"url\" target=\"_blank\">",
  },
  {
    question: "Choose the correct HTML tag for the largest heading. / HTML में सबसे बड़े शीर्षक के लिए सही टैग क्या है?",
    options: ["<h1>", "<h6>", "<head>", "<heading>"],
    answer: "<h1>",
  },
  {
    question: "Which tag tells the browser where the HTML page starts and stops? / HTML पेज की शुरुआत और अंत बताने वाला टैग कौन सा है?",
    options: ["<html>", "<body>", "<head>", "<title>"],
    answer: "<html>",
  },
  {
    question: "Which works similar to <b> element? / किस HTML टैग से टेक्स्ट बोल्ड दिखता है और इसका विकल्प कौन सा टैग है?",
    options: ["<strong>", "<i>", "<blockquote>", "<em>"],
    answer: "<strong>",
  },
  {
    question: "What is the correct HTML for adding a background color? / HTML में बैकग्राउंड कलर जोड़ने के लिए सही सिंटैक्स क्या है?",
    options: ["<body bgcolor=\"yellow\">", "<body color=\"yellow\">", "<background>yellow</background>", "<body background=\"yellow\">"],
    answer: "<body bgcolor=\"yellow\">",
  },
  {
    question: "Which HTML element is used for abbreviation or acronym? / HTML में किस एलीमेंट का उपयोग संक्षिप्त नाम के लिए होता है?",
    options: ["<abbr>", "<q>", "<em>", "<blockquote>"],
    answer: "<abbr>",
  },
  {
    question: "Which is correct? / सही HTML सिंटैक्स क्या है?",
    options: ["<b>Click Here<b>", "<strong>Click Here<strong>", "<b>Click Here</b>", "</strong>Click Here</strong>"],
    answer: "<b>Click Here</b>",
  },
  {
    question: "Which of the following elements in HTML5 defines video or movie content? / HTML5 में वीडियो या मूवी कंटेंट को परिभाषित करने वाला एलीमेंट कौन सा है?",
    options: ["<movie>", "<audio>", "<video>", "<media>"],
    answer: "<video>",
  },
  {
    question: "What is text with hyperlinks called? / हाइपरलिंक्स वाला टेक्स्ट क्या कहलाता है?",
    options: ["Hypertext", "Toggle Text", "Lower Text", "Upper Text"],
    answer: "Hypertext",
  },
  {
    question: "The 'Multiple' property is used in which tag? / <select> टैग में 'multiple' प्रॉपर्टी का उपयोग क्यों किया जाता है?",
    options: ["Label Tag", "Select Tag", "Frame Tag", "TextBox Tag"],
    answer: "Select Tag",
  },
  {
    question: "Choose the correct HTML tag for the largest heading. / सबसे बड़े हेडिंग टैग को चुनें।",
    options: ["H6 tag", "HEAD tag", "H10 tag", "H1 tag"],
    answer: "H1 tag",
  },
  {
    question: "Which of the following HTML element is used for canvas graphics? / HTML में कैनवास ग्राफिक्स के लिए कौन सा एलीमेंट उपयोग किया जाता है?",
    options: ["<canvas>", "<css>", "<graphic>", "<paint>"],
    answer: "<canvas>",
  },
  {
    question: "Which of the following is an attribute of the Table tag? / निम्नलिखित में से कौन-सा table टैग का एट्रिब्यूट है?",
    options: ["BOLD", "CELLPADDING", "LINK", "SRC"],
    answer: "CELLPADDING",
  },
  {
    question: "Which property is used to change the text size in CSS? / CSS में टेक्स्ट का आकार बदलने के लिए कौन-सी प्रॉपर्टी उपयोग में आती है?",
    options: ["font-size", "font-family", "Both A and C", "font"],
    answer: "font-size",
  },
  {
    question: "Which symbol is used to write comments in CSS? / CSS में कमेंट लिखने के लिए कौन-सा सिंबल उपयोग किया जाता है?",
    options: ["/* */", "//", "##", "#"],
    answer: "/* */",
  },
  {
    question: "Which HTML element is used for embedding YouTube videos? / HTML में YouTube वीडियो को दिखाने के लिए कौन-सा एलीमेंट उपयोग होता है?",
    options: ["<samp>", "<iframe>", "<small>", "<frame>"],
    answer: "<iframe>",
  },
  {
    question: "What does CSS stand for? / CSS का पूरा नाम क्या है?",
    options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which tag represents each cell in an HTML table? / HTML में टेबल के प्रत्येक सेल को दर्शाने के लिए किस टैग का उपयोग होता है?",
    options: ["<thead>", "<td>", "<tr>", "<th>"],
    answer: "<td>",
  },
  {
    question: "Which tag defines a caption for a figure element? / HTML में एक फ़िगर एलीमेंट के लिए कैप्शन कौन-सा टैग परिभाषित करता है?",
    options: ["<caption>", "<dialog>", "<figure>", "<figcaption>"],
    answer: "<figcaption>",
  },
  {
    question: "In CSS syntax, what is \"color: black\" called? / CSS में \"color: black\" को क्या कहा जाता है?",
    options: ["Selector", "Value", "Declaration", "Rule"],
    answer: "Declaration",
  },
  {
    question: "Which tag defines content aside from the main content, like a sidebar? / HTML में साइडबार या मुख्य सामग्री से अलग कुछ सामग्री परिभाषित करने के लिए कौन-सा टैग प्रयोग होता है?",
    options: ["<aside>", "<header>", "<sidebar>", "<nav>"],
    answer: "<aside>",
  },
  {
    question: "What is the default value of the CSS position property? / CSS में position प्रॉपर्टी का डिफ़ॉल्ट मान क्या है?",
    options: ["Absolute", "Relative", "Static", "Fixed"],
    answer: "Static",
  },
  {
    question: "Which element is used to show inserted content? / HTML में सम्मिलित (inserted) सामग्री दिखाने के लिए कौन-सा टैग उपयोग किया जाता है?",
    options: ["<del>", "<em>", "<ins>", "<strong>"],
    answer: "<ins>",
  },
{
    question: "Which tag is used to add a caption to a table? / टेबल में कैप्शन जोड़ने के लिए कौन-सा टैग उपयोग किया जाता है?",
    options: ["<caption>", "<thead>", "<tr>", "<th>"],
    answer: "<caption>",
  },
  {
    question: "What is the default value of the border attribute? / बॉर्डर एट्रिब्यूट का डिफ़ॉल्ट मान क्या होता है?",
    options: ["2px", "5px", "3px", "1px"],
    answer: "1px",
  },
  {
    question: "How do you add shadow to text in CSS? / CSS में टेक्स्ट में शैडो जोड़ने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options: ["Text Shadow", "Word Shadow", "Text outline", "Content Shadow"],
    answer: "Text Shadow",
  },
  {
    question: "To make your website mobile friendly, what type of website should you create? / मोबाइल फ्रेंडली वेबसाइट बनाने के लिए किस प्रकार की वेबसाइट बनानी चाहिए?",
    options: ["Responsive", "Static", "Dynamic", "None"],
    answer: "Responsive",
  },
  {
    question: "What is the correct HTML for referring to an external style sheet? / एक्सटर्नल स्टाइल शीट को सही तरीके से रेफर करने वाला HTML कोड कौन-सा है?",
    options: ["<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">", "<stylesheet>mystyle.css</stylesheet>", "<style src=\"mystyle.css\">", "<style link=\"mystyle.css\">"],
    answer: "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">",
  },
  {
    question: "Where is the correct place to refer to an external style sheet in an HTML document? / HTML डॉक्यूमेंट में एक्सटर्नल स्टाइल शीट को रेफर करने का सही स्थान कहाँ है?",
    options: ["In the <head> section", "In the <body> section", "Anywhere", "At the end"],
    answer: "In the <head> section",
  },
  {
    question: "What does HSL stand for in CSS? / CSS में HSL का मतलब क्या होता है?",
    options: ["hue, saturation, lightness", "hue, standard, lightning", "height, standard, line-break", "hue, standard, line-width"],
    answer: "hue, saturation, lightness",
  },
  {
    question: "Is the padding property allowed to have negative values? / padding प्रॉपर्टी में क्या negative values दी जा सकती हैं?",
    options: ["True", "False", "Can't say", "None of these"],
    answer: "False",
  },
  {
    question: "In CSS, which property sets the difference between two lines of your content? / CSS में दो लाइनों के बीच की दूरी कौन-सी प्रॉपर्टी सेट करती है?",
    options: ["max-height property", "line-height property", "min-height property", "none of these"],
    answer: "line-height property",
  },
  {
    question: "What does the # symbol represent in the CSS code? / CSS कोड में # का क्या मतलब होता है?",
    options: ["an id tag", "class name", "a universal tag", "horizontal frame"],
    answer: "an id tag",
  },
  {
    question: "Which HTML tag is used to declare internal CSS? / इंटरनल CSS घोषित करने के लिए कौन-सा HTML टैग उपयोग किया जाता है?",
    options: ["<style>", "<Head>", "<link>", "<script>"],
    answer: "<style>",
  },
  {
    question: "Which attribute is used to change the background color of an element in CSS? / CSS में किसी एलीमेंट की बैकग्राउंड रंग बदलने के लिए कौन-सी प्रॉपर्टी है?",
    options: ["bgcolor", "background-color", "bg-color", "color-bg"],
    answer: "background-color",
  },
  {
    question: "Which selector is used to select elements whose attribute value ends with a specified value? / CSS सेलेक्टर में उन एलीमेंट्स का चयन कौन-सा करता है?",
    options: ["[attribute=\"value\"]", "[attribute$=\"value\"]", "[attribute^=\"value\"]", "[$attribute=\"value\"]"],
    answer: "[attribute$=\"value\"]",
  },
  {
    question: "Which function is used to insert values of a CSS variable? / CSS वेरिएबल में वैल्यू डालने के लिए कौन-सा फंक्शन उपयोग किया जाता है?",
    options: ["var()", "rand()", "varchar()", "calc()"],
    answer: "var()",
  },
  {
    question: "A type of combinator in CSS is: / CSS में कॉम्बिनेटर के रूप में निम्न में से कौन-सा उपयोग होता है?",
    options: [">", "+", "~", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Id selector is denoted by: / आईडी सेलेक्टर को किस सिंबल से denote किया जाता है?",
    options: ["#", "1#", "*", "None of the above"],
    answer: "#",
  },
  {
    question: "In the CSS code, what does * represent? / CSS कोड में * का क्या मतलब होता है?",
    options: ["class selector", "universal selector", "id selector", "None of the above"],
    answer: "universal selector",
  },
  {
    question: "Which type of CSS is popularly used for designing pages for websites? / वेबसाइट के पेज डिज़ाइन के लिए सबसे लोकप्रिय प्रकार का CSS कौन-सा है?",
    options: ["External", "Inline", "Internal", "None of the above"],
    answer: "External",
  },
  {
    question: "Which of the following is the correct CSS syntax? / निम्नलिखित में से कौन सा सही CSS सिंटैक्स है?",
    options: ["<h1 \"color:Tomato;\">", "<h1 style:\"color=Tomato;\">", "<h1 style=\"color:Tomato;\">", "<h1 \"color=Tomato;\">"],
    answer: "<h1 style=\"color:Tomato;\">",
  },
  {
    question: "Which of the following is used to specify the transparency of an element in CSS? / CSS में एलीमेंट की पारदर्शिता के लिए किसका उपयोग किया जाता है?",
    options: ["opacity", "filter", "visibility", "vague"],
    answer: "opacity",
  },
  {
    question: "In CSS which of the following are different types of gradients? / CSS में निम्नलिखित में से कौन से विभिन्न प्रकार के gradients हैं?",
    options: ["Linear", "conic", "Radial", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "The attribute used to make rounded corners around an element in CSS is: / CSS में गोल कोनों को बनाने के लिए उपयोग की जाने वाली विशेषता है:",
    options: ["border-radius", "border-round", "border-spacing", "none of the above"],
    answer: "border-radius",
  },
  {
    question: "Different ways in which CSS can be added to HTML: / HTML में CSS को जोड़ने के विभिन्न तरीके:",
    options: ["Inline", "Internal", "External", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which of the following properties of an anchor element indicates that the user is currently clicking on an element?",
    options: [":link", ":visited", ":hover", ":active"],
    answer: ":active",
  },
  {
    question: "How will you make all paragraph elements 'GREY' in color? / आप सभी पैराग्राफ एलीमेंट को 'GREY' रंग में कैसे बनाएंगे?",
    options: ["p.all {color: grey;}", "p.all {color: #990000;}", "all.p {color: #998877;}", "p {color: grey;}"],
    answer: "p {color: grey;}",
  },
  {
    question: "Which CSS property should one use to encircle an image with text? / इमेज को टेक्स्ट से घेरने के लिए किस CSS प्रॉपर्टी का इस्तेमाल करना चाहिए?",
    options: ["Float", "Push", "Align", "wrap"],
    answer: "Float",
  },
  {
    question: "Which of the following properties is used to set the face of a font? / निम्नलिखित में से किस प्रॉपर्टी का उपयोग फॉन्ट के फेस को सेट करने के लिए किया जाता है?",
    options: ["font-family", "font-face", "font-variant", "font-style"],
    answer: "font-family",
  },
  {
    question: "By using CSS, how can one remove the underline from all hyperlinks? / सभी हाइपरलिंक्स से अंडरलाइन को कैसे हटाया जा सकता है?",
    options: ["a { text-decoration: no-underline; }", "a { text: no-underline; }", "a { text-decoration: none; }", "a { text-style:no-underline; }"],
    answer: "a { text-decoration: none; }",
  },
  {
    question: "For what purpose is the CSS padding property used? / CSS padding प्रॉपर्टी किस उद्देश्य के लिए उपयोग किया जाता है?",
    options: ["Border", "Space", "Background Color", "Margin"],
    answer: "Space",
  },
  {
    question: "Which CSS property helps decide text clipping or dots (ellipsis)?",
    options: ["Text-decoration", "Text-stroke", "Text-shadow", "Text-overflow"],
    answer: "Text-overflow",
  },
  {
    question: "Which selector selects elements based on a certain state? / कौन सा सेलेक्टर एक निश्चित अवस्था के आधार पर चयन करता है?",
    options: ["Combinator selector", "Pseudo Class selector", "Pseudo elements selector", "Attribute selector"],
    answer: "Pseudo Class selector",
  },
  {
    question: "Which of the following is correct regarding CSS?",
    options: ["Optimizes for devices", "Offline cache storage", "View offline websites", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "From below, which of the following is used to make the text bold? / टेक्स्ट को बोल्ड करने के लिए किसका प्रयोग किया जाता है?",
    options: ["Text-align: bold", "Font-style: bold", "Font-weight: bold", "Text-decoration: bold"],
    answer: "Font-weight: bold",
  },
  {
     question: "CSS syntax is divided into _________ parts. / CSS सिंटैक्स को भागों में विभाजित किया गया है।",
     options: ["Selector and Declaration", "Property name and value", "Color and style", "None of these"],
     answer: "Selector and Declaration",
  },
  {
    question: "The universal selector symbol is: / यूनिवर्सल सेलेक्टर का सिंबल क्या है?",
    options: ["#", ".", "*", "@"],
    answer: "*",
  },
  {
    question: "Which property is used to change the background color? / बैकग्राउंड रंग बदलने के लिए किस प्रॉपर्टी का उपयोग होता है?",
    options: ["color", "bgcolor", "background-color", "bg-color"],
    answer: "background-color",
  },
  {
    question: "External CSS file extension is: / एक्सटर्नल सीएसएस फाइल का एक्सटेंशन क्या होता है?",
    options: [".html", ".css", ".js", ".txt"],
    answer: ".css",
  },
  {
    question: "The HTML attribute for inline styles is: / इनलाइन स्टाइल के लिए एचटीएमएल एट्रिब्यूट क्या है?",
    options: ["font", "class", "styles", "style"],
    answer: "style",
  },
  {
    question: "How to select all <p> elements inside a <div>?",
    options: ["div p", "div + p", "div.p", "div > p"],
    answer: "div p",
  },
  {
    question: "Which is not a valid CSS unit?",
    options: ["px", "em", "pt", "km"],
    answer: "km",
  },
  {
    question: "Default value of display for <div> is:",
    options: ["inline", "block", "inline-block", "none"],
    answer: "block",
  },
  {
    question: "Which property controls the text alignment?",
    options: ["text-align", "align", "text-style", "horizontal-align"],
    answer: "text-align",
  },
  {
    question: "To make text italic, use:",
    options: ["font-style: italic", "text-style: italic", "font-weight: italic", "font-italic: true"],
    answer: "font-style: italic",
  },
  {
    question: "Z-index property works only on positioned elements?",
    options: ["True", "False", "Only on absolute", "None"],
    answer: "True",
  },
  {
    question: "Which property defines the space outside the border?",
    options: ["padding", "margin", "spacing", "border-width"],
    answer: "margin",
  },
  {
    question: "Which is used to make text uppercase?",
    options: ["text-transform: uppercase", "text-style: uppercase", "text-case: upper", "font-case: uppercase"],
    answer: "text-transform: uppercase",
  },
  {
    question: "Default font-size of 1em is equal to:",
    options: ["12px", "14px", "16px", "18px"],
    answer: "16px",
  },
  {
    question: "Which CSS property is used to change the left margin?",
    options: ["padding-left", "margin-left", "indent", "left-margin"],
    answer: "margin-left",
  },
  {
    question: "How to select an element with id 'demo'?",
    options: ["demo", "#demo", ".demo", "*demo"],
    answer: "#demo",
  },
  {
    question: "How to select elements with class 'test'?",
    options: ["test", "#test", ".test", "*test"],
    answer: ".test",
  }
];
const useTimer = (initialTime: number, onEnd: () => void) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning && time > 0) {
      interval = setInterval(() => setTime((t) => t - 1), 1000);
    } else if (time === 0 && isRunning) {
      setIsRunning(false);
      onEnd();
    }
    return () => clearInterval(interval);
  }, [isRunning, time, onEnd]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = (t: number) => {
    setTime(t);
    setIsRunning(false);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return { time, formatTime: formatTime(time), start, pause, reset, isRunning };
};

type Screen = "home" | "quiz" | "result";

const M2PYQ2025: React.FC = () => {
  const TOTAL = questions.length;
  const DURATION = TOTAL * 60;

  const [screen, setScreen] = useState<Screen>("home");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<(string | null)[]>(Array(TOTAL).fill(null));
  const [showNav, setShowNav] = useState(false);

  const handleEnd = useCallback(() => {
    setScreen("result");
  }, []);

  const timer = useTimer(DURATION, handleEnd);

  const score = selected.reduce((acc, ans, i) => acc + (ans === questions[i].answer ? 1 : 0), 0);
  const attempted = selected.filter((a) => a !== null).length;
  const percentage = Math.round((score / TOTAL) * 100);

  const startQuiz = () => {
    setSelected(Array(TOTAL).fill(null));
    setCurrent(0);
    timer.reset(DURATION);
    timer.start();
    setScreen("quiz");
  };

  const selectOption = (opt: string) => {
    const copy = [...selected];
    copy[current] = opt;
    setSelected(copy);
  };

  const next = () => setCurrent((c) => Math.min(c + 1, TOTAL - 1));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const goTo = (i: number) => {
    setCurrent(i);
    setShowNav(false);
  };

  const submitQuiz = () => {
    timer.pause();
    setScreen("result");
  };

  if (screen === "home") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-8" style={{ backgroundColor: "#0f172a" }}>
        <div className="max-w-lg w-full rounded-3xl shadow-2xl p-6 sm:p-8 text-center space-y-5" style={{ backgroundColor: "#1e293b", border: "2px solid #facc15" }}>
          <div className="inline-block text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest" style={{ backgroundColor: "#facc15", color: "#0f172a" }}>O Level M2-R5</div>
          <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#facc15" }}>M2-R5 PYQ<br /><span style={{ color: "#ffffff" }}>Jan 2025</span></h1>
          <p style={{ color: "#d1d5db", fontSize: "14px" }}>{TOTAL} Questions • {TOTAL} Minutes • Instant Result</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              { val: String(TOTAL), label: "Questions" },
              { val: `${TOTAL} min`, label: "Duration" },
              { val: "+1", label: "Per Correct" },
              { val: "0", label: "Negative" },
            ].map((item, idx) => (
              <div key={idx} className="rounded-xl p-4 bg-[#0f172a] border border-[#334155]">
                <p className="font-bold text-xl text-[#facc15]">{item.val}</p>
                <p style={{ color: "#9ca3af" }}>{item.label}</p>
              </div>
            ))}
          </div>
          <button onClick={startQuiz} className="w-full font-bold py-4 rounded-2xl text-lg transition-all active:scale-95 bg-[#facc15] text-[#0f172a]">🚀 Attempt Mock Test</button>
          
          {/* PDF VIEW BUTTON ADDED HERE */}
          <button
            onClick={() => window.open("/pdfs/m2.pdf", "_blank")}
            className="block w-full font-bold py-3 rounded-2xl text-base transition-all duration-200"
            style={{ border: "2px solid #facc15", color: "#facc15", backgroundColor: "transparent" }}
          >
            📄 View PDF
          </button>
          
          <p className="text-xs pt-2 text-[#6b7280]">Powered by <span className="font-semibold text-[#facc15]">OLevelQuiz.in</span></p>
        </div>
      </div>
    );
  }
    if (screen === "result") {
    const getGrade = () => {
      if (percentage >= 90) return { label: "Excellent! 🏆", color: "#22c55e" };
      if (percentage >= 70) return { label: "Great Job! 🎯", color: "#facc15" };
      if (percentage >= 50) return { label: "Good Effort! 💪", color: "#f97316" };
      return { label: "Keep Practicing! 📚", color: "#ef4444" };
    };
    const grade = getGrade();

    return (
      <div className="min-h-screen px-4 py-6 bg-[#0f172a]">
        <div className="max-w-2xl mx-auto space-y-5">
          <div className="rounded-2xl p-6 sm:p-8 text-center space-y-4 bg-[#1e293b] border-2 border-[#facc15]">
            <h2 className="text-2xl font-bold text-white">Quiz Completed!</h2>
            <p className="text-3xl font-extrabold" style={{ color: grade.color }}>{grade.label}</p>
            <div className="relative w-36 h-36 mx-auto">
              <svg className="w-full h-full" viewBox="0 0 120 120" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="60" cy="60" r="52" fill="none" stroke="#334155" strokeWidth="10" />
                <circle cx="60" cy="60" r="52" fill="none" stroke="#facc15" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${(percentage / 100) * 327} 327`} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold text-[#facc15]">{percentage}%</span>
                <span className="text-xs text-[#d1d5db]">Score</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="p-3 bg-green-900/10 border border-green-500/40 rounded-xl text-green-500 font-bold">{score}<br/>Correct</div>
                <div className="p-3 bg-red-900/10 border border-red-500/40 rounded-xl text-red-500 font-bold">{attempted - score}<br/>Wrong</div>
                <div className="p-3 bg-gray-800/10 border border-gray-500/30 rounded-xl text-gray-400 font-bold">{TOTAL - attempted}<br/>Skip</div>
            </div>
          </div>
          <div className="rounded-2xl p-5 space-y-4 bg-[#1e293b] border border-[#334155]">
            <h3 className="text-lg font-bold text-[#facc15]">📋 Answer Review</h3>
            <div className="space-y-3 overflow-y-auto pr-1" style={{ maxHeight: "40vh" }}>
              {questions.map((q, i) => (
                <div key={i} className="p-4 rounded-xl border border-gray-700 bg-gray-800/30">
                  <p className="text-sm text-white"><span className="text-[#facc15] font-bold">Q{i+1}.</span> {q.question}</p>
                  <p className="text-xs mt-1 text-green-500">Ans: {q.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => setScreen("home")} className="w-full font-bold py-4 rounded-2xl bg-[#facc15] text-[#0f172a]">🏠 Back to Home</button>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a]">
      <div className="sticky top-0 z-30 px-4 py-3 bg-[#1e293b] border-b border-[#334155] flex justify-between items-center">
          <button onClick={() => setShowNav(!showNav)} className="bg-[#facc15]/20 text-[#facc15] border border-[#facc15]/30 px-3 py-2 rounded-xl text-sm font-bold">Q{current + 1}/{TOTAL}</button>
          <div className="font-mono font-bold text-[#facc15] text-lg">⏳ {timer.formatTime}</div>
          <button onClick={submitQuiz} className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-bold">Submit</button>
      </div>
      <div className="w-full h-1 bg-[#1e293b]"><div className="h-full bg-[#facc15] transition-all" style={{ width: `${((current + 1) / TOTAL) * 100}%` }} /></div>

      <div className="flex-1 flex items-start justify-center px-4 py-6">
        <div className="max-w-3xl w-full space-y-5">
          <div className="rounded-2xl p-5 bg-[#1e293b] border border-[#334155]">
            <h2 className="text-lg text-white font-medium">{q.question}</h2>
          </div>
          <div className="grid gap-3">
            {q.options.map((opt, idx) => (
              <button key={idx} onClick={() => selectOption(opt)} className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${selected[current] === opt ? "border-[#facc15] bg-[#facc15]/10 text-[#facc15]" : "border-[#334155] bg-[#111827] text-gray-300"}`}>
                <span className="inline-block w-8 h-8 rounded-lg bg-gray-800 text-center leading-8 mr-3 font-bold">{String.fromCharCode(65 + idx)}</span>{opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 p-4 bg-[#1e293b] border-t border-[#334155] flex justify-between">
          <button onClick={prev} disabled={current === 0} className="px-6 py-3 bg-gray-700 text-white rounded-xl disabled:opacity-30">Prev</button>
          <button onClick={next} disabled={current === TOTAL - 1} className="px-6 py-3 bg-[#facc15] text-[#0f172a] font-bold rounded-xl disabled:opacity-30">Next</button>
      </div>
    </div>
  );
};

export default M2PYQ2025;
    
