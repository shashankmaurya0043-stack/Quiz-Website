// src/data/m1-r5-jan-2025.ts (Part 1: Q1-Q20)

export const batch1 = [
  {
    id: 1,
    question: "HTML tags are surrounded by which type of brackets? / HTML टैग्स को किन ब्रैकेट्स में लिखा जाता है?",
    options: {
      A: "Angle / कोणीय",
      B: "Square / वर्गाकार",
      C: "Curly / घुंघराले",
      D: "Round / गोलाकार"
    },
    correctAnswer: "A",
    explanation: "HTML tags are enclosed in angle brackets (< >)."
  },
  {
    id: 2,
    question: "HTML web pages can be read and rendered by: / HTML वेब पेजों को पढ़ने और प्रदर्शित करने का कार्य कौन करता है?",
    options: {
      A: "Web Browser / वेब ब्राउज़र",
      B: "Interpreter / इंटरप्रेटर",
      C: "Server / सर्वर",
      D: "Compiler / कम्पाइलर"
    },
    correctAnswer: "A",
    explanation: "Web browsers like Chrome, Firefox, and Edge read HTML files and display them as web pages."
  },
  {
    id: 3,
    question: "How to insert a background image in HTML? / HTML में बैकग्राउंड इमेज जोड़ने के लिए सही कोड क्या है?",
    options: {
      A: "<body background=\"img.png\">",
      B: "<img background=\"img.png\">",
      C: "<bg-image=\"img.png\">",
      D: "None of the above"
    },
    correctAnswer: "A",
    explanation: "In traditional HTML, the 'background' attribute of the <body> tag is used to set an image."
  },
  {
    id: 4,
    question: "HTML is what type of language? / HTML किस प्रकार की भाषा है?",
    options: {
      A: "Network Protocol / नेटवर्क प्रोटोकॉल",
      B: "Programming Language / प्रोग्रामिंग भाषा",
      C: "Markup Language / मार्कअप भाषा",
      D: "Scripting Language / स्क्रिप्टिंग भाषा"
    },
    correctAnswer: "C",
    explanation: "HTML stands for HyperText Markup Language."
  },
  {
    id: 5,
    question: "Tags and texts that are not directly displayed on the page are written in which section? / HTML टैग्स जो सीधे पेज पर प्रदर्शित नहीं होते, वे किस सेक्शन में लिखे जाते हैं?",
    options: {
      A: "<title>",
      B: "<html>",
      C: "<head>",
      D: "<body>"
    },
    correctAnswer: "C",
    explanation: "The <head> section contains metadata, styles, and links that are not visible in the body of the page."
  },
  {
    id: 6,
    question: "Which HTML tag produces the biggest heading? / कौन सा HTML टैग सबसे बड़ा हेडिंग बनाता है?",
    options: {
      A: "<h4>",
      B: "<h>",
      C: "<h1>",
      D: "<h9>"
    },
    correctAnswer: "C",
    explanation: "<h1> is the largest heading tag, and <h6> is the smallest."
  },
  {
    id: 7,
    question: "Fundamental HTML Block is known as: / HTML के बेसिक ब्लॉक एलीमेंट को क्या कहा जाता है?",
    options: {
      A: "HTML Entity / एचटीएमएल एंटिटी",
      B: "HTML Attribute / एचटीएमएल एट्रिब्यूट",
      C: "HTML Tag / एचटीएमएल टैग",
      D: "HTML Body / एचटीएमएल बॉडी"
    },
    correctAnswer: "C",
    explanation: "HTML Tags are the fundamental building blocks of an HTML document."
  },
  {
    id: 8,
    question: "What tag is used to display a picture in an HTML page? / HTML पेज में इमेज प्रदर्शित करने के लिए कौन सा टैग उपयोग किया जाता है?",
    options: {
      A: "<image>",
      B: "<picture>",
      C: "<img>",
      D: "<src>"
    },
    correctAnswer: "C",
    explanation: "The <img> tag is used to embed images in web pages."
  },
  {
    id: 9,
    question: "The page title is inside the ________ tag? / पेज का टाइटल किस टैग के अंदर लिखा जाता है?",
    options: {
      A: "Table / टेबल",
      B: "Division / डिवीजन",
      C: "Head / हेड",
      D: "Body / बॉडी"
    },
    correctAnswer: "C",
    explanation: "The <title> tag is placed within the <head> element."
  },
  {
    id: 10,
    question: "Which tag is used for inline frame? / HTML के कौन से टैग इनलाइन फ्रेम बनाने के लिए प्रयोग होता है?",
    options: {
      A: "<Inframe>",
      B: "<iframe>",
      C: "<inlineframe>",
      D: "<frame>"
    },
    correctAnswer: "B",
    explanation: "The <iframe> tag is used to embed another document within the current HTML document."
  },
  {
    id: 11,
    question: "What are the types of unordered or bulleted lists in HTML? / HTML में unordered list (bulleted) के प्रकार क्या हैं?",
    options: {
      A: "Disc, square, triangle",
      B: "Polygon, triangle, circle",
      C: "Disc, circle, square",
      D: "All of the above"
    },
    correctAnswer: "C",
    explanation: "Standard HTML unordered list types are disc, circle, and square."
  },
  {
    id: 12,
    question: "__________ are the HTML codes that control the appearance of the document contents. / HTML टैग्स क्या होते हैं?",
    options: {
      A: "Tags / टैग्स",
      B: "Codas / कोडास",
      C: "Slashes / स्लैशोज",
      D: "Properties / प्रॉपटीज"
    },
    correctAnswer: "A",
    explanation: "Tags are keywords that instruct the browser on how to format and display content."
  },
  {
    id: 13,
    question: "There are _________ color names recognized by all versions of HTML? / HTML के द्वारा कितने रंग नाम सभी संस्करणों में पहचाने जाते हैं?",
    options: {
      A: "6",
      B: "256",
      C: "8",
      D: "16"
    },
    correctAnswer: "D",
    explanation: "There are 16 basic standard color names supported across all versions of HTML (VGA colors)."
  },
  {
    id: 14,
    question: "What should be the first tag in any HTML document? / HTML का पहला टैग दस्तावेज़ में क्या होना चाहिए?",
    options: {
      A: "<html>",
      B: "<title>",
      C: "<head>",
      D: "<document>"
    },
    correctAnswer: "A",
    explanation: "Every HTML document starts with the <html> tag, which acts as the root container."
  },
  {
    id: 15,
    question: "Which of the following is the correct way to create a list using lowercase letters? / HTML में सूची (list) को छोटे अक्षरों में प्रदर्शित करने का सही तरीका क्या है?",
    options: {
      A: "<ol letter=\"a\">",
      B: "<ol type=\"a\">",
      C: "<ol alpha=\"a\">",
      D: "None of the above"
    },
    correctAnswer: "B",
    explanation: "The 'type' attribute with value 'a' is used for lowercase alphabetic lists."
  },
  {
    id: 16,
    question: "The year in which HTML was first proposed? / HTML को पहली बार कब प्रस्तावित किया गया था?",
    options: {
      A: "2000",
      B: "1987",
      C: "1990",
      D: "1995"
    },
    correctAnswer: "C",
    explanation: "Tim Berners-Lee proposed HTML in late 1990 while working at CERN."
  },
  {
    id: 17,
    question: "HTML uses: / HTML का उपयोग किस प्रकार के टैग्स से होता है?",
    options: {
      A: "User defined Tags",
      B: "Pre-Specified Tags",
      C: "Predefined Tags",
      D: "All of the Above"
    },
    correctAnswer: "C",
    explanation: "HTML uses predefined tags defined by the W3C standards."
  },
  {
    id: 18,
    question: "Which of the following is the correct way to start an ordered list with the count of numeric value 4? / किसी ऑर्डर्ड लिस्ट को 4 से शुरू करने का सही तरीका क्या है?",
    options: {
      A: "<ol type=\"1\" initial=\"4\">",
      B: "<ol type=\"1\" begin=\"4\">",
      C: "<ol type=\"1\" num=\"4\">",
      D: "<ol type=\"1\" start=\"4\">"
    },
    correctAnswer: "D",
    explanation: "The 'start' attribute specifies the beginning value of an ordered list."
  },
  {
    id: 19,
    question: "How can you make a list with numbers? / आप संख्या वाली सूची कैसे बना सकते हैं?",
    options: {
      A: "<ul>",
      B: "<list>",
      C: "<dl>",
      D: "<ol>"
    },
    correctAnswer: "D",
    explanation: "<ol> stands for Ordered List, which defaults to numeric numbering."
  },
  {
    id: 20,
    question: "The entire web document is contained within _________? / संपूर्ण HTML वेब दस्तावेज़ किसके अंदर रखा जाता है?",
    options: {
      A: "Comments / टिप्पणियाँ",
      B: "HTML element / एचटीएमएल एलीमेंट",
      C: "Tags / टैग्स",
      D: "Web page / वेब पेज"
    },
    correctAnswer: "B",
    explanation: "The root <html> element contains the entire document structure."
  }
];
