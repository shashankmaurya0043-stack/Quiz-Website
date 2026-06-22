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
// src/data/m1-r5-jan-2025.ts (Part 2: Q21-Q40)

export const batch2 = [
  {
    id: 21,
    question: "What is the work of <address> element in HTML5? / HTML5 में <address> एलीमेंट का क्या कार्य है?",
    options: {
      A: "Contains home address / घर का पता शामिल करता है",
      B: "Contains contact details for author / लेखक की संपर्क जानकारी शामिल करता है",
      C: "Contains IP address / आईपी पता शामिल करता है",
      D: "Contains URL / यूआरएल शामिल करता है"
    },
    correctAnswer: "B",
    explanation: "The <address> tag provides contact information for a person or an organization."
  },
  {
    id: 22,
    question: "Which HTML element is used for short quote? / छोटा कोटेशन दर्शाने के लिए कौन सा HTML एलीमेंट प्रयोग किया जाता है?",
    options: {
      A: "<q>",
      B: "<blockquote>",
      C: "<em>",
      D: "<abbr>"
    },
    correctAnswer: "A",
    explanation: "The <q> tag is used for short, inline quotations."
  },
  {
    id: 23,
    question: "Which of the following is not an HTML5 tag? / निम्न में से कौन सा HTML5 टैग नहीं है?",
    options: {
      A: "<slider>",
      B: "<video>",
      C: "<track>",
      D: "<source>"
    },
    correctAnswer: "A",
    explanation: "There is no <slider> tag in HTML5. Sliders are usually created using <input type=\"range\">."
  },
  {
    id: 24,
    question: "What is the use of <hr/> tag in HTML? / HTML में <hr/> टैग का क्या उपयोग है?",
    options: {
      A: "To create a horizontal rule between sections / अनुभागों के बीच क्षैतिज रेखा बनाने के लिए",
      B: "To create vertical rule / खड़ी रेखा बनाने के लिए",
      C: "To create a line break / पंक्ति विराम बनाने के लिए",
      D: "For making content appearance italics / सामग्री को तिरछा दिखाने के लिए"
    },
    correctAnswer: "A",
    explanation: "The <hr> tag defines a thematic break in an HTML page (usually displayed as a horizontal line)."
  },
  {
    id: 25,
    question: "Which of the following tag is used to create a text area in HTML Form? / HTML फॉर्म में टेक्स्ट एरिया बनाने के लिए किस टैग का उपयोग किया जाता है?",
    options: {
      A: "<input type=\"text\" />",
      B: "<textarea></textarea>",
      C: "<text></text>",
      D: "<input type=\"textarea\" />"
    },
    correctAnswer: "B",
    explanation: "The <textarea> tag defines a multi-line text input control."
  },
  {
    id: 26,
    question: "What is the latest HTML standard? / HTML का नवीनतम संस्करण कौन सा है?",
    options: {
      A: "HTML 5.0",
      B: "HTML 4.0",
      C: "XML",
      D: "SGML"
    },
    correctAnswer: "A",
    explanation: "HTML5 is the current standard for HTML."
  },
  {
    id: 27,
    question: "Which attribute is not essential under <iframe>? / <iframe> टैग में से कौन-सा एट्रिब्यूट अनिवार्य नहीं है?",
    options: {
      A: "frameborder",
      B: "width",
      C: "height",
      D: "src"
    },
    correctAnswer: "A",
    explanation: "frameborder is a deprecated attribute in HTML5. Dimensions and src are common, though src is technically the only essential one for content."
  },
  {
    id: 28,
    question: "How to write a hyperlink to open in a new page in HTML? / किस टैग का उपयोग एक नए पेज में लिंक खोलने के लिए होता है?",
    options: {
      A: "<a href=\"url\" target=\"Blank\">",
      B: "<a href=\"url\" target=\"_blank\">",
      C: "<a href=\"url\" target=\"#Blank\">",
      D: "<a href=\"url\" target=\"New\">"
    },
    correctAnswer: "B",
    explanation: "Setting the target attribute to '_blank' tells the browser to open the link in a new tab or window."
  },
  {
    id: 29,
    question: "Choose the correct HTML tag for the largest heading. / HTML में सबसे बड़े शीर्षक के लिए सही टैग क्या है?",
    options: {
      A: "<h1>",
      B: "<h6>",
      C: "<head>",
      D: "<heading>"
    },
    correctAnswer: "A",
    explanation: "<h1> defines the most important and largest default heading level."
  },
  {
    id: 30,
    question: "Which tag tells the browser where the HTML page starts and stops? / HTML पेज की शुरुआत और अंत बताने वाला टैग कौन सा है?",
    options: {
      A: "<html>",
      B: "<body>",
      C: "<head>",
      D: "<title>"
    },
    correctAnswer: "A",
    explanation: "The <html> tag represents the root of an HTML document."
  },
  {
    id: 31,
    question: "Which works similar to <b> element? / किस HTML टैग से टेक्स्ट बोल्ड दिखता है और इसका विकल्प कौन सा टैग है?",
    options: {
      A: "<strong>",
      B: "<i>",
      C: "<blockquote>",
      D: "<em>"
    },
    correctAnswer: "A",
    explanation: "Both <b> and <strong> display text in bold, though <strong> implies semantic importance."
  },
  {
    id: 32,
    question: "What is the correct HTML for adding a background color? / HTML में बैकग्राउंड कलर जोड़ने के लिए सही सिंटैक्स क्या है?",
    options: {
      A: "<body bgcolor=\"yellow\">",
      B: "<body color=\"yellow\">",
      C: "<background>yellow</background>",
      D: "<body background=\"yellow\">"
    },
    correctAnswer: "A",
    explanation: "In traditional HTML, bgcolor was used to set background color (though CSS is used now)."
  },
  {
    id: 33,
    question: "Which HTML element is used for abbreviation or acronym? / HTML में किस एलीमेंट का उपयोग संक्षिप्त नाम के लिए होता है?",
    options: {
      A: "<abbr>",
      B: "<q>",
      C: "<em>",
      D: "<blockquote>"
    },
    correctAnswer: "A",
    explanation: "The <abbr> tag defines an abbreviation or an acronym."
  },
  {
    id: 34,
    question: "Which is correct? / सही HTML सिंटैक्स क्या है?",
    options: {
      A: "<b>Click Here<b>",
      B: "<strong>Click Here<strong>",
      C: "<b>Click Here</b>",
      D: "</strong>Click Here</strong>"
    },
    correctAnswer: "C",
    explanation: "HTML tags must be properly closed using a forward slash in the closing tag."
  },
  {
    id: 35,
    question: "Which of the following elements in HTML5 defines video or movie content? / HTML5 में वीडियो या मूवी कंटेंट को परिभाषित करने वाला एलीमेंट कौन सा है?",
    options: {
      A: "<movie>",
      B: "<audio>",
      C: "<video>",
      D: "<media>"
    },
    correctAnswer: "C",
    explanation: "The <video> tag is used to embed video content."
  },
  {
    id: 36,
    question: "What is text with hyperlinks called? / हाइपरलिंक्स वाला टेक्स्ट क्या कहलाता है?",
    options: {
      A: "Hypertext",
      B: "Toggle Text",
      C: "Lower Text",
      D: "Upper Text"
    },
    correctAnswer: "A",
    explanation: "Hypertext is text displayed on a computer that contains references (hyperlinks) to other text."
  },
  {
    id: 37,
    question: "The 'Multiple' property is used in which tag? / <select> टैग में 'multiple' प्रॉपर्टी का उपयोग क्यों किया जाता है?",
    options: {
      A: "Label Tag",
      B: "Select Tag",
      C: "Frame Tag",
      D: "TextBox Tag"
    },
    correctAnswer: "B",
    explanation: "The 'multiple' attribute in a <select> tag allows the user to select more than one option."
  },
  {
    id: 38,
    question: "Choose the correct HTML tag for the largest heading. / सबसे बड़े हेडिंग टैग को चुनें।",
    options: {
      A: "H6 tag",
      B: "HEAD tag",
      C: "H10 tag",
      D: "H1 tag"
    },
    correctAnswer: "D",
    explanation: "H1 is the primary heading tag."
  },
  {
    id: 39,
    question: "Which of the following HTML element is used for canvas graphics? / HTML में कैनवास ग्राफिक्स के लिए कौन सा एलीमेंट उपयोग किया जाता है?",
    options: {
      A: "<canvas>",
      B: "<css>",
      C: "<graphic>",
      D: "<paint>"
    },
    correctAnswer: "A",
    explanation: "The <canvas> element is used to draw graphics on the fly via scripting (usually JavaScript)."
  },
  {
    id: 40,
    question: "Which of the following is an attribute of the Table tag? / निम्नलिखित में से कौन-सा table टैग का एट्रिब्यूट है?",
    options: {
      A: "BOLD",
      B: "CELLPADDING",
      C: "LINK",
      D: "SRC"
    },
    correctAnswer: "B",
    explanation: "cellpadding specifies the space between the cell wall and the cell content."
  }
];
