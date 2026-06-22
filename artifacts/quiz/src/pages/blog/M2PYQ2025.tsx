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
// src/data/m1-r5-jan-2025.ts (Part 3: Q41-Q60)

export const batch3 = [
  {
    id: 41,
    question: "Which property is used to change the text size in CSS? / CSS में टेक्स्ट का आकार बदलने के लिए कौन-सी प्रॉपर्टी उपयोग में आती है?",
    options: {
      A: "font-size",
      B: "font-family",
      C: "Both A and C",
      D: "font"
    },
    correctAnswer: "A",
    explanation: "The font-size property sets the size of the font."
  },
  {
    id: 42,
    question: "Which tag tells the browser where the page starts and stops? / HTML पेज के शुरू और अंत को ब्राउज़र को बताने वाला टैग कौन-सा है?",
    options: {
      A: "<html>",
      B: "<head>",
      C: "<title>",
      D: "<body>"
    },
    correctAnswer: "A",
    explanation: "The <html> tag is the container for all other HTML elements (except for the <!DOCTYPE> tag)."
  },
  {
    id: 43,
    question: "Which symbol is used to write comments in CSS? / CSS में कमेंट लिखने के लिए कौन-सा सिंबल उपयोग किया जाता है?",
    options: {
      A: "/* */",
      B: "//",
      C: "##",
      D: "#"
    },
    correctAnswer: "A",
    explanation: "CSS comments start with /* and end with */."
  },
  {
    id: 44,
    question: "Which HTML element is used for embedding YouTube videos? / HTML में YouTube वीडियो को दिखाने के लिए कौन-सा एलीमेंट उपयोग होता है?",
    options: {
      A: "<samp>",
      B: "<iframe>",
      C: "<small>",
      D: "<frame>"
    },
    correctAnswer: "B",
    explanation: "YouTube uses the <iframe> tag to embed videos into external websites."
  },
  {
    id: 45,
    question: "What does CSS stand for? / CSS का पूरा नाम क्या है?",
    options: {
      A: "Cascading Style Sheets",
      B: "Creative Style Sheets",
      C: "Computer Style Sheets",
      D: "Colorful Style Sheets"
    },
    correctAnswer: "A",
    explanation: "CSS stands for Cascading Style Sheets."
  },
  {
    id: 46,
    question: "Which tag represents each cell in an HTML table? / HTML में टेबल के प्रत्येक सेल को दर्शाने के लिए किस टैग का उपयोग होता है?",
    options: {
      A: "<thead>",
      B: "<td>",
      C: "<tr>",
      D: "<th>"
    },
    correctAnswer: "B",
    explanation: "<td> stands for 'table data', which defines a standard cell in an HTML table."
  },
  {
    id: 47,
    question: "A CSS rule set contains which of the following? / CSS नियम सेट में कौन-कौन से तत्व शामिल होते हैं?",
    options: {
      A: "True",
      B: "False",
      C: "Can't say",
      D: "None of these"
    },
    correctAnswer: "A",
    explanation: "A CSS rule-set consists of a selector and a declaration block."
  },
  {
    id: 48,
    question: "Which tag defines a caption for a figure element? / HTML में एक फ़िगर एलीमेंट के लिए कैप्शन कौन-सा टैग परिभाषित करता है?",
    options: {
      A: "<caption>",
      B: "<dialog>",
      C: "<figure>",
      D: "<figcaption>"
    },
    correctAnswer: "D",
    explanation: "The <figcaption> element is used to provide a caption for the <figure> element."
  },
  {
    id: 49,
    question: "In CSS syntax, what is \"color: black\" called? / CSS में \"color: black\" को क्या कहा जाता है?",
    options: {
      A: "Selector",
      B: "Value",
      C: "Declaration",
      D: "Rule"
    },
    correctAnswer: "C",
    explanation: "A CSS declaration always includes a property name and a value, separated by a colon."
  },
  {
    id: 50,
    question: "Which tag defines content aside from the main content, like a sidebar? / HTML में साइडबार या मुख्य सामग्री से अलग कुछ सामग्री परिभाषित करने के लिए कौन-सा टैग प्रयोग होता है?",
    options: {
      A: "<aside>",
      B: "<header>",
      C: "<sidebar>",
      D: "<nav>"
    },
    correctAnswer: "A",
    explanation: "The <aside> element is intended for content that is indirectly related to the main content."
  },
  {
    id: 51,
    question: "What is the default value of the CSS position property? / CSS में position प्रॉपर्टी का डिफ़ॉल्ट मान क्या है?",
    options: {
      A: "Absolute",
      B: "Relative",
      C: "Static",
      D: "Fixed"
    },
    correctAnswer: "C",
    explanation: "HTML elements are positioned static by default."
  },
  {
    id: 52,
    question: "Which element is used to show inserted content? / HTML में सम्मिलित (inserted) सामग्री दिखाने के लिए कौन-सा टैग उपयोग किया जाता है?",
    options: {
      A: "<del>",
      B: "<em>",
      C: "<ins>",
      D: "<strong>"
    },
    correctAnswer: "C",
    explanation: "The <ins> tag defines a text that has been inserted into a document."
  },
  {
    id: 53,
    question: "Which tag is used to add a caption to a table? / टेबल में कैप्शन जोड़ने के लिए कौन-सा टैग उपयोग किया जाता है?",
    options: {
      A: "<caption>",
      B: "<thead>",
      C: "<tr>",
      D: "<th>"
    },
    correctAnswer: "A",
    explanation: "The <caption> tag must be inserted immediately after the <table> tag."
  },
  {
    id: 54,
    question: "Which element works similar to the `<i>` tag? / HTML में `<i>` टैग जैसा काम कौन-सा टैग करता है?",
    options: {
      A: "<strong>",
      B: "<em>",
      C: "<b>",
      D: "<blockquote>"
    },
    correctAnswer: "B",
    explanation: "The <em> tag is used to define emphasized text, which is typically displayed in italic."
  },
  {
    id: 55,
    question: "What is the default value of the border attribute? / बॉर्डर एट्रिब्यूट का डिफ़ॉल्ट मान क्या होता है?",
    options: {
      A: "2px",
      B: "5px",
      C: "3px",
      D: "1px"
    },
    correctAnswer: "D",
    explanation: "When the border attribute is used in HTML (e.g., in a table), the default thickness is usually 1px."
  },
  {
    id: 56,
    question: "Which tag marks the beginning and end of an HTML page? / HTML में एक पेज की शुरुआत और अंत बताने वाला टैग कौन-सा है?",
    options: {
      A: "<html>",
      B: "<head>",
      C: "<title>",
      D: "<body>"
    },
    correctAnswer: "A",
    explanation: "The <html> tag wraps all page content."
  },
  {
    id: 57,
    question: "Id selector selects the id attribute of an HTML element to select a specific element. / आईडी सेलेक्टर क्या करता है?",
    options: {
      A: "True",
      B: "False",
      C: "Can't say",
      D: "None of these"
    },
    correctAnswer: "A",
    explanation: "The #id selector styles the element with the specified id."
  },
  {
    id: 58,
    question: "CSS can also be used with any kind of XML documents. / CSS का उपयोग XML दस्तावेज़ों के साथ भी किया जा सकता है।",
    options: {
      A: "True",
      B: "False",
      C: "Can't say",
      D: "None of these"
    },
    correctAnswer: "A",
    explanation: "CSS is a language for describing the rendering of structured documents like HTML and XML."
  },
  {
    id: 59,
    question: "The grouping selector is used to select all the elements with the different style definitions. / ग्रुपिंग सेलेक्टर क्या करता है?",
    options: {
      A: "True",
      B: "False",
      C: "Can't say",
      D: "None of these"
    },
    correctAnswer: "B",
    explanation: "The grouping selector is used to select elements with the SAME style definitions to minimize code."
  },
  {
    id: 60,
    question: "Inline CSS is used to apply CSS on multiple lines or elements. / इनलाइन CSS का उपयोग कई लाइनों या एलीमेंट्स पर लागू करने के लिए किया जाता है।",
    options: {
      A: "True",
      B: "False",
      C: "Can't say",
      D: "None of these"
    },
    correctAnswer: "B",
    explanation: "Inline CSS is used to apply a unique style for a single HTML element."
  }
];
// src/data/m1-r5-jan-2025.ts (Part 4: Q61-Q80)

export const batch4 = [
  {
    id: 61,
    question: "How do you add shadow to text in CSS? / CSS में टेक्स्ट में शैडो जोड़ने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options: {
      A: "Text Shadow",
      B: "Word Shadow",
      C: "Text outline",
      D: "Content Shadow"
    },
    correctAnswer: "A",
    explanation: "The text-shadow property adds shadow to text."
  },
  {
    id: 62,
    question: "Which style sheet is used to add multiple styles for more than one document? / एक से अधिक दस्तावेज़ों में मल्टीपल स्टाइल्स जोड़ने के लिए किस स्टाइल शीट का उपयोग किया जाता है?",
    options: {
      A: "True",
      B: "False",
      C: "Can't say",
      D: "None of these"
    },
    correctAnswer: "B",
    explanation: "The question implies a Boolean check, but conceptually, an 'External Style Sheet' is used for multiple documents. Note: PDF indicates 'False' as the correct answer likely referring to a specific context or missing 'External' option."
  },
  {
    id: 63,
    question: "Which of the following is used to increase the row height? / CSS में पंक्ति की ऊँचाई बढ़ाने के लिए कौन-सा विकल्प सही है?",
    options: {
      A: "col span",
      B: "cell spacing",
      C: "row span",
      D: "cell padding"
    },
    correctAnswer: "C",
    explanation: "While 'line-height' is the CSS property for text, 'rowspan' is used in HTML tables to make a cell span multiple rows, effectively increasing the visual row height."
  },
  {
    id: 64,
    question: "To make your website mobile friendly, what type of website should you create? / मोबाइल फ्रेंडली वेबसाइट बनाने के लिए किस प्रकार की वेबसाइट बनानी चाहिए?",
    options: {
      A: "Responsive",
      B: "Static",
      C: "Dynamic",
      D: "None"
    },
    correctAnswer: "A",
    explanation: "Responsive Web Design makes your web page look good on all devices."
  },
  {
    id: 65,
    question: "What is the correct HTML for referring to an external style sheet? / एक्सटर्नल स्टाइल शीट को सही तरीके से रेफर करने वाला HTML कोड कौन-सा है?",
    options: {
      A: "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">",
      B: "<stylesheet>mystyle.css</stylesheet>",
      C: "<style src=\"mystyle.css\">",
      D: "<style link=\"mystyle.css\">"
    },
    correctAnswer: "A",
    explanation: "The <link> tag is used to link to external style sheets."
  },
  {
    id: 66,
    question: "Where is the correct place to refer to an external style sheet in an HTML document? / HTML डॉक्यूमेंट में एक्सटर्नल स्टाइल शीट को रेफर करने का सही स्थान कहाँ है?",
    options: {
      A: "In the <head> section",
      B: "In the <body> section",
      C: "Anywhere in the document",
      D: "At the end of the document"
    },
    correctAnswer: "A",
    explanation: "External style sheets should always be linked inside the <head> section."
  },
  {
    id: 67,
    question: "What does HSL stand for in CSS? / CSS में HSL का मतलब क्या होता है?",
    options: {
      A: "hue, saturation, lightness",
      B: "hue, standard, lightning",
      C: "height, standard, line-break",
      D: "hue, standard, line-width"
    },
    correctAnswer: "A",
    explanation: "HSL stands for Hue, Saturation, and Lightness."
  },
  {
    id: 68,
    question: "Is the padding property allowed to have negative values? / padding प्रॉपर्टी में क्या negative values दी जा सकती हैं?",
    options: {
      A: "True",
      B: "False",
      C: "Can't say",
      D: "None of these"
    },
    correctAnswer: "B",
    explanation: "Padding values cannot be negative. However, margin values can be negative."
  },
  {
    id: 69,
    question: "In CSS, which property sets the difference between two lines of your content? / CSS में दो लाइनों के बीच की दूरी कौन-सी प्रॉपर्टी सेट करती है?",
    options: {
      A: "max-height property",
      B: "line-height property",
      C: "min-height property",
      D: "none of these"
    },
    correctAnswer: "B",
    explanation: "The line-height property is used to set the space between lines."
  },
  {
    id: 70,
    question: "What does the # symbol represent in the CSS code? / CSS कोड में # का क्या मतलब होता है?",
    options: {
      A: "an id tag",
      B: "class name",
      C: "a universal tag",
      D: "horizontal frame"
    },
    correctAnswer: "A",
    explanation: "The # symbol is used to select an element with a specific id."
  },
  {
    id: 71,
    question: "Which HTML tag is used to declare internal CSS? / इंटरनल CSS घोषित करने के लिए कौन-सा HTML टैग उपयोग किया जाता है?",
    options: {
      A: "<style>",
      B: "<Head>",
      C: "<link>",
      D: "<script>"
    },
    correctAnswer: "A",
    explanation: "The <style> element is used to define internal CSS."
  },
  {
    id: 72,
    question: "The universal selector is never used as a wildcard character. / यूनिवर्सल सेलेक्टर को क्या कहा जाता है?",
    options: {
      A: "True",
      B: "False",
      C: "Can't say",
      D: "None of these"
    },
    correctAnswer: "B",
    explanation: "This is false; the universal selector (*) is precisely used as a wildcard to select all elements."
  },
  {
    id: 73,
    question: "Which attribute is used to change the background color of an element in CSS? / CSS में किसी एलीमेंट की बैकग्राउंड रंग बदलने के लिए कौन-सी प्रॉपर्टी है?",
    options: {
      A: "bgcolor",
      B: "background-color",
      C: "bg-color",
      D: "color-bg"
    },
    correctAnswer: "B",
    explanation: "The background-color property sets the background color of an element."
  },
  {
    id: 74,
    question: "Which selector is used to select elements whose attribute value ends with a specified value? / CSS सेलेक्टर में उन एलीमेंट्स का चयन कौन-सा करता है जिनकी एट्रिब्यूट वैल्यू किसी स्पेसिफिक वैल्यू के साथ समाप्त होती है?",
    options: {
      A: "[attribute=\"value\"]",
      B: "[attribute$=\"value\"]",
      C: "[attribute^=\"value\"]",
      D: "[$attribute=\"value\"]"
    },
    correctAnswer: "B",
    explanation: "The [attribute$=\"value\"] selector matches elements whose attribute ends with 'value'."
  },
  {
    id: 75,
    question: "Which function is used to insert values of a CSS variable? / CSS वेरिएबल में वैल्यू डालने के लिए कौन-सा फंक्शन उपयोग किया जाता है?",
    options: {
      A: "var()",
      B: "rand()",
      C: "varchar()",
      D: "calc()"
    },
    correctAnswer: "A",
    explanation: "The var() function is used to insert the value of a CSS variable."
  },
  {
    id: 76,
    question: "A type of combinator in CSS is: / CSS में कॉम्बिनेटर के रूप में निम्न में से कौन-सा उपयोग होता है?",
    options: {
      A: ">",
      B: "+",
      C: "~",
      D: "All of the above"
    },
    correctAnswer: "D",
    explanation: "CSS combinators include child selector (>), adjacent sibling (+), and general sibling (~)."
  },
  {
    id: 77,
    question: "Id selector is denoted by: / आईडी सेलेक्टर को किस सिंबल से denote किया जाता है?",
    options: {
      A: "#",
      B: "1#",
      C: "*",
      D: "None of the above"
    },
    correctAnswer: "A",
    explanation: "The ID selector uses the hash (#) character."
  },
  {
    id: 78,
    question: "In the CSS code, what does * represent? / CSS कोड में * का क्या मतलब होता है?",
    options: {
      A: "class selector",
      B: "universal selector",
      C: "id selector",
      D: "None of the above"
    },
    correctAnswer: "B",
    explanation: "The asterisk (*) is the universal selector in CSS."
  },
  {
    id: 79,
    question: "Which type of CSS is popularly used for designing pages for websites? / वेबसाइट के पेज डिज़ाइन के लिए सबसे लोकप्रिय प्रकार का CSS कौन-सा है?",
    options: {
      A: "External",
      B: "Inline",
      C: "Internal",
      D: "None of the above"
    },
    correctAnswer: "A",
    explanation: "External CSS is the most popular because it allows you to change the look of an entire website with one file."
  },
  {
    id: 80,
    question: "The external style sheet facilitates changing the look of the entire website by changing just one file. / एक्सटर्नल स्टाइल शीट केवल एक फ़ाइल बदलकर पूरी वेबसाइट के रूप को बदलने की सुविधा देती है।",
    options: {
      A: "True",
      B: "False",
      C: "Can't say",
      D: "None of these"
    },
    correctAnswer: "A",
    explanation: "True, this is the main advantage of using an external CSS file."
  }
];
