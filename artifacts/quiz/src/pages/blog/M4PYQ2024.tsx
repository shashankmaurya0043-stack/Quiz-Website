import React, { useState, useEffect, useCallback } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  { question: "Which of the following is NOT a component of the IoT ecosystem?", options: ["Robotics / रोबोटिक्स", "Sensors / सेंसर", "GPS / जीपीएस", "Cloud Computing / क्लाउड कंप्यूटिंग"], answer: "Robotics / रोबोटिक्स" },
  { question: "What does IoT stand for?", options: ["Internet of Things / इंटरनेट ऑफ थिंग्स", "Internet of Trades / इंटरनेट ऑफ ट्रेड्स", "Internet of Telecommunications / इंटरनेट ऑफ टेलीकम्युनिकेशन", "Internet of Technology / इंटरनेट ऑफ टेक्नोलॉजी"], answer: "Internet of Things / इंटरनेट ऑफ थिंग्स" },
  { question: "What role does encryption play in IoT security?", options: ["It ensures that data transmitted between devices is secure. / यह सुनिश्चित करता है कि उपकरणों के बीच प्रसारित डेटा सुरक्षित हो.", "It increases the complexity of user interfaces. / यह यूज़र इंटरफेस की जटिलता बढ़ाता है.", "It slows down data transmission. / यह डेटा ट्रांसमिशन को धीमा करता है.", "It prevents devices from connecting to the internet. / यह उपकरणों को इंटरनेट से कनेक्ट होने से रोकता है."], answer: "It ensures that data transmitted between devices is secure. / यह सुनिश्चित करता है कि उपकरणों के बीच प्रसारित डेटा सुरक्षित हो." },
  { question: "Which technology is essential for enabling communication between IoT devices?", options: ["Bluetooth", "Wi-Fi", "NFC", "All of the above"], answer: "All of the above" },
  { question: "Which aspect of IoT security is particularly challenging due to the large number of connected devices?", options: ["Software updates / सॉफ़्टवेयर अपडेट्स", "User authentication / यूज़र ऑथेंटिकेशन", "Device encryption / डिवाइस एन्क्रिप्शन", "Network monitoring / नेटवर्क मॉनिटरिंग"], answer: "Software updates / सॉफ़्टवेयर अपडेट्स" },
  { question: "How can edge computing contribute to the security of IoT systems?", options: ["By minimizing data transmission to the cloud / क्लाउड में डेटा ट्रांसमिशन को न्यूनतम करके", "By increasing network latency / नेटवर्क लेटेंसी बढ़ाकर", "By centralizing all data processing / सभी डेटा प्रोसेसिंग को केंद्रीकृत करके", "By relying solely on cloud servers / केवल क्लाउड सर्वर पर निर्भर रहकर"], answer: "By minimizing data transmission to the cloud / क्लाउड में डेटा ट्रांसमिशन को न्यूनतम करके" },
  { question: "Which of the following is NOT a potential consequence of inadequate IoT security?", options: ["Improved efficiency / बेहतर दक्षता", "Data breaches / डेटा उल्लंघन", "Compromised privacy / समझौता की गई गोपनीयता", "Financial losses / वित्तीय नुकसान"], answer: "Improved efficiency / बेहतर दक्षता" },
  { question: "Which technology is increasingly being utilized to enhance the security of IoT devices?", options: ["Blockchain / ब्लॉकचेन", "Robotics / रोबोटिक्स", "Nanotechnology / नैनोटेक्नोलॉजी", "Virtual Reality / वर्चुअल रियलिटी"], answer: "Blockchain / ब्लॉकचेन" },
  { question: "Which of the following is a common security vulnerability in IoT devices?", options: ["Default passwords / डिफ़ॉल्ट पासवर्ड", "Multi-factor authentication / मल्टी-फैक्टर प्रमाणीकरण", "Strong encryption / मजबूत एन्क्रिप्शन", "Regular security audits / नियमित सुरक्षा ऑडिट"], answer: "Default passwords / डिफ़ॉल्ट पासवर्ड" },
  { question: "What is the term used for the practice of exploiting IoT devices for malicious purposes?", options: ["DDoS attacks / डीडीओएस हमले", "Phishing / फिशिंग", "Cyber warfare / साइबर युद्ध", "IoT hacking / आईओटी हैकिंग"], answer: "IoT hacking / आईओटी हैकिंग" },
  { question: "What is Artificial Intelligence?", options: ["Putting your intelligence into computer / अपनी बुद्धिमत्ता को कंप्यूटर में डालना", "Programming with your own intelligence / अपनी बुद्धिमत्ता से प्रोग्रामिंग करना", "Putting more memory into computer / कंप्यूटर में अधिक मेमोरी डालना", "Making a machine intelligence / मशीन को बुद्धिमान बनाना"], answer: "Making a machine intelligence / मशीन को बुद्धिमान बनाना" },
  { question: "How can edge computing contribute to IoT security (Q.12)?", options: ["By reducing reliance on cloud servers / क्लाउड सर्वर पर निर्भरता को कम करके", "By eliminating the need for encryption / एन्क्रिप्शन की आवश्यकता समाप्त करके", "By increasing latency / लेटेंसी बढ़ाकर", "By decreasing processing power / प्रोसेसिंग पावर कम करके"], answer: "By reducing reliance on cloud servers / क्लाउड सर्वर पर निर्भरता को कम करके" },
  { question: "What role does machine learning play in IoT security?", options: ["Identifying and mitigating security threats / सुरक्षा खतरों की पहचान करना और उन्हें कम करना", "Enhancing device connectivity / डिवाइस कनेक्टिविटी को बढ़ाना", "Decreasing the complexity of IoT systems / IoT सिस्टम की जटिलता को कम करना", "Increasing energy efficiency / ऊर्जा दक्षता को बढ़ाना"], answer: "Identifying and mitigating security threats / सुरक्षा खतरों की पहचान करना और उन्हें कम करना" },
  { question: "Which industry is expected to benefit the most from the proliferation of IoT devices?", options: ["Manufacturing / विनिर्माण", "Retail / खुदरा", "Entertainment / मनोरंजन", "Agriculture / कृषि"], answer: "Manufacturing / विनिर्माण" },
  { question: "What is a private key?", options: ["A key given to the public / जनता को दी जाने वाली कुंजी", "A key not to be given to the public / सार्वजनिक रूप से साझा न की जाने वाली कुंजी", "A key on your key chain / आपकी चाबी के गुच्छे पर एक कुंजी", "A key that opens a secret door / एक गुप्त दरवाजा खोलने वाली कुंजी"], answer: "A key not to be given to the public / सार्वजनिक रूप से साझा न की जाने वाली कुंजी" },
  { question: "The devices connected to the IoT have to communicate automatically, not via humans. What is this called?", options: ["Bot-to-Bot (B2B)", "Machine-to-Machine (M2M)", "InterCloud", "Skynet"], answer: "Machine-to-Machine (M2M)" },
  { question: "What is one of the main concerns regarding IoT security?", options: ["Data privacy / डेटा गोपनीयता", "Color compatibility / रंग संगतता", "Network bandwidth / नेटवर्क बैंडविड्थ", "Device size / डिवाइस का आकार"], answer: "Data privacy / डेटा गोपनीयता" },
  { question: "How can governments contribute to improving IoT security?", options: ["By mandating cybersecurity standards / साइबर सुरक्षा मानकों को अनिवार्य बनाकर", "By imposing taxes on IoT manufacturers / IoT निर्माताओं पर कर लगाकर", "By reducing investments in IoT research / IoT अनुसंधान में निवेश कम करके", "By limiting the use of IoT devices / IoT उपकरणों के उपयोग को सीमित करके"], answer: "By mandating cybersecurity standards / साइबर सुरक्षा मानकों को अनिवार्य बनाकर" },
  { question: "Which one is not an element of IoT?", options: ["Things / चीजें", "Security / सुरक्षा", "People / लोग", "Process / प्रक्रिया"], answer: "People / लोग" },
  { question: "Which of the following industries is expected to benefit the most from the IoT ecosystem?", options: ["Automotive / ऑटोमोटिव", "Healthcare / स्वास्थ्य सेवा", "Mining / खनन", "Entertainment / मनोरंजन"], answer: "Healthcare / स्वास्थ्य सेवा" },
  { question: "What indicates to the reader the purpose of a letter?", options: ["Subject / विषय", "Body / मुख्य भाग", "Address / पता", "Salutation / अभिवादन"], answer: "Subject / विषय" },
  { question: "Spring Boot Actuator exposes operational information about running application using endpoints ________ ?", options: ["HTTP", "IP", "FTP", "TCP"], answer: "HTTP" },
  { question: "What is the effect of performing AND operation of R with 0xFE?", options: ["Setting a selected bit of R / R के एक चुने हुए बिट को सेट करना", "Complement selected bit of R / R के चुने हुए बिट का पूरक बनाना", "Clearing a selected bit of R / R के एक चुने हुए बिट को क्लियर करना", "None of these / इनमें से कोई नहीं"], answer: "Clearing a selected bit of R / R के एक चुने हुए बिट को क्लियर करना" },
  { question: "Which of the following challenge arises when we use many devices on the same network?", options: ["Signaling / सिग्नलिंग", "Power Consumption / पावर की खपत", "Security / सुरक्षा", "Power Detection / पावर का पता लगाना"], answer: "Security / सुरक्षा" },
  { question: "Which one of these is not threat modelling methodology?", options: ["STRIDE", "NANO", "OCTAVE", "PASTA"], answer: "NANO" },
  { question: "What is one of the challenges associated with the proliferation of IoT devices?", options: ["Compatibility issues / अनुकूलता समस्याएँ", "High device costs / उच्च उपकरण लागत", "Lack of data storage capacity / डाटा संग्रहण क्षमता की कमी", "Limited connectivity options / सीमित कनेक्टिविटी विकल्प"], answer: "Compatibility issues / अनुकूलता समस्याएँ" },
  { question: "Which of the following process is used to keep track of user's activity?", options: ["Accounting / लेखांकन", "Authentication / प्रमाणीकरण", "Authoring / लेखन", "Authorization / प्राधिकरण"], answer: "Accounting / लेखांकन" },
  { question: "Major Component of IoT is ________ ?", options: ["Sensors", "Actuators", "Smart Applications", "All of the Above"], answer: "All of the Above" },
  { question: "An IoT network is a collection of devices?", options: ["Interconnected / आपस में जुड़े हुए", "Machine to machine / मशीन से मशीन", "Signal / सिग्नल", "Network / नेटवर्क"], answer: "Interconnected / आपस में जुड़े हुए" },
  { question: "Which technology enables IoT devices to communicate with each other without human intervention?", options: ["Machine Learning / मशीन लर्निंग", "Artificial Intelligence / कृत्रिम बुद्धिमत्ता", "Augmented Reality / संवर्धित वास्तविकता", "Quantum Computing / क्वांटम कंप्यूटिंग"], answer: "Machine Learning / मशीन लर्निंग" },
  { question: "Using a projector, the line of information can be revealed using a _______ sheet over a _______ ?", options: ["Transparent, slide", "Translucent, transparency", "Opaque, flip chart", "Opaque, transparency"], answer: "Transparent, slide" },
  { question: "Which one is the most discussed challenge in IoT?", options: ["Security / सुरक्षा", "Internet / इंटरनेट", "Standard / मानक", "Regulation / विनियमन"], answer: "Security / सुरक्षा" },
  { question: "Which of the following method is better for task swapping in embedded systems?", options: ["pre-emptive / प्री-एम्प्टिव", "RMS", "cooperative multitasking / सहयोगी मल्टीटास्किंग", "time slice / टाइम स्लाइस"], answer: "pre-emptive / प्री-एम्प्टिव" },
  { question: "Reports are usually utilized to present the outcome of _______ ?", options: ["Experiment / प्रयोग", "Inquiry / पूछताछ", "Investigation / जांच", "All of these / उपरोक्त सभी"], answer: "All of these / उपरोक्त सभी" },
  { question: "Which of the following helps to collaborate in IoT development?", options: ["cloud computing / क्लाउड कंप्यूटिंग", "mechanism / मैकेनिज्म", "physical computing / फिजिकल कंप्यूटिंग", "chemical computing / केमिकल कंप्यूटिंग"], answer: "cloud computing / क्लाउड कंप्यूटिंग" },
  { question: "HC-05 is a Bluetooth module that can communicate in which mode?", options: ["Full-Duplex", "None of these", "Duplex", "Simplex"], answer: "Full-Duplex" },
  { question: "How can governments contribute to improving IoT security (Q.37)?", options: ["By ignoring the issue", "By banning the use of IoT devices", "By mandating cybersecurity standards", "By imposing taxes on IoT devices"], answer: "By mandating cybersecurity standards" },
  { question: "The main objective of WoT (Web of Things) is?", options: ["Improve usability and interoperability / प्रयोज्यता और अंतर्संचालनीयता में सुधार", "Reduce the security / सुरक्षा को कम करना", "Complicate the development / विकास को जटिल बनाना", "Increase the cost / लागत बढ़ाना"], answer: "Improve usability and interoperability / प्रयोज्यता और अंतर्संचालनीयता में सुधार" },
  { question: "Which of the following is used to upload Arduino sketches to the board?", options: ["avrdude", "g++", "cpython", "avrgcc"], answer: "avrdude" },
  { question: "The Atmega 168 is a ______ bit chip?", options: ["8", "64", "16", "32"], answer: "8" },
  { question: "Why is cultural sensitivity important in a diverse workplace?", options: ["It fosters discrimination / यह भेदभाव को बढ़ावा देती है", "It leads to isolation / यह अलगाव की ओर ले जाती है", "It promotes inclusivity and respect / यह समावेशन और सम्मान को बढ़ावा देती है", "It encourages ethnocentrism / यह जातीय श्रेष्ठता को प्रोत्साहित करती है"], answer: "It promotes inclusivity and respect / यह समावेशन और सम्मान को बढ़ावा देती है" },
  { question: "What did the word 'personality' mean when it first appeared in English?", options: ["Character / चरित्र", "Temperament / स्वभाव", "Personhood / व्यक्ति स्वरूप", "None of these / इनमें से कोई नहीं"], answer: "Personhood / व्यक्ति स्वरूप" },
  { question: "What is the role of adaptability in problem-solving?", options: ["It promotes rigidity / यह दृढ़ता को बढ़ाता है", "It fosters flexibility and innovation / यह लचीलापन और नवाचार को बढ़ावा देता है", "It leads to confusion / यह भ्रम की स्थिति उत्पन्न करता है", "It encourages avoidance / यह परिहार को बढ़ावा देता है"], answer: "It fosters flexibility and innovation / यह लचीलापन और नवाचार को बढ़ावा देता है" },
  { question: "What is the document used for internal communication within an organization called?", options: ["Memo / मेमो", "E-mail / ई-मेल", "Letter / पत्र", "Telex / टेलेक्स"], answer: "Memo / मेमो" },
  { question: "Why is self-awareness important in emotional intelligence?", options: ["It fosters understanding of one's emotions and their impact on others / यह दूसरों पर प्रभाव डालने वाले अपने भावनाओं को समझने में मदद करती है", "It encourages emotional outbursts / यह भावनात्मक विस्फोट को प्रोत्साहित करती है", "It promotes ignorance of one's emotions / यह अज्ञानता को बढ़ावा देती है", "It leads to isolation / यह अलगाव की ओर ले जाती है"], answer: "It fosters understanding of one's emotions and their impact on others / यह दूसरों पर प्रभाव डालने वाले अपने भावनाओं को समझने में मदद करती है" },
  { question: "Why is self-discipline important for achieving personal and professional goals?", options: ["It leads to failure / यह विफलता की ओर ले जाता है", "It encourages procrastination / यह टालमटोल को प्रोत्साहित करता है", "It promotes consistency and perseverance / यह निरंतरता और दृढ़ता को बढ़ावा देता है", "It fosters chaos / यह अराजकता को बढ़ाता है"], answer: "It promotes consistency and perseverance / यह निरंतरता और दृढ़ता को बढ़ावा देता है" },
  { question: "From which Latin word is 'personality' derived, and what does it mean?", options: ["Mask / मुखौटा", "Mesk / मेस्क", "Maek / माइक", "Mark / मार्क"], answer: "Mask / मुखौटा" },
  { question: "What is the significance of collaboration in achieving organizational success?", options: ["It encourages competition / यह प्रतिस्पर्धा को प्रोत्साहित करता है", "It leads to conflict / यह टकराव की स्थिति पैदा करता है", "It fosters synergy and innovation / यह नवाचार और समन्वय को बढ़ावा देता है", "It promotes individualism / यह व्यक्तिवाद को बढ़ावा देता है"], answer: "It fosters synergy and innovation / यह नवाचार और समन्वय को बढ़ावा देता है" },
  { question: "'Personality is not just one or more aspect of behavior, but the total integrated behavior' – This feature of personality is known as?", options: ["Dynamic / गतिशील", "Organization / संगठन", "Consistency or stability / स्थिरता या संगति", "Self-consciousness / आत्म-जागरूकता"], answer: "Organization / संगठन" },
  { question: "Communication helps officials to _______ the employees?", options: ["Apprise / सूचित करना", "Motivate / प्रेरित करना", "Eliminate / समाप्त करना", "Threaten / डराना"], answer: "Motivate / प्रेरित करना" },
];
const questionsPart2: Question[] = [
  { question: "Which of the following is used as a greeting in business communication?", options: ["Dear Mother", "Dear Son", "Dear Sir", "None of these"], answer: "Dear Sir" },
  { question: "Why is emotional intelligence important in leadership roles?", options: ["It leads to isolation / यह अलगाव को जन्म देती है", "It fosters empathy and effective communication / यह सहानुभूति और प्रभावी संचार को बढ़ावा देती है", "It encourages emotional outbursts / यह भावनात्मक विस्फोट को प्रोत्साहित करती है", "It promotes ignorance / यह अज्ञानता को बढ़ावा देती है"], answer: "It fosters empathy and effective communication / यह सहानुभूति और प्रभावी संचार को बढ़ावा देती है" },
  { question: "What is the role of active listening in effective communication?", options: ["It leads to conflict / यह संघर्ष उत्पन्न करता है", "It encourages interrupting others / यह दूसरों की बात काटने को प्रोत्साहित करता है", "It promotes comprehension and empathy / यह समझ और सहानुभूति को बढ़ावा देता है", "It fosters misunderstanding / यह गलतफहमियों को बढ़ाता है"], answer: "It promotes comprehension and empathy / यह समझ और सहानुभूति को बढ़ावा देता है" },
  { question: "According to Davis, personality is a psychic phenomenon which is?", options: ["Combination of organic and social / जैविक और सामाजिक का मिश्रण", "A mask / एक मुखौटा", "Organic / जैविक", "Social / सामाजिक"], answer: "Combination of organic and social / जैविक और सामाजिक का मिश्रण" },
  { question: "What is the process called when a person reaches their full potential?", options: ["Become selfless / निःस्वार्थ बनना", "Realize their ideal self / अपने आदर्श रूप को पहचानना", "Establish their concept of self / आत्म अवधारणा स्थापित करना", "Reach their full potential / अपनी पूरी क्षमता प्राप्त करना"], answer: "Reach their full potential / अपनी पूरी क्षमता प्राप्त करना" },
  { question: "Which of the following reflects your social behavior?", options: ["Culture / संस्कृति", "Greetings / अभिवादन", "Manners / शिष्टाचार", "Tradition / परंपरा"], answer: "Manners / शिष्टाचार" },
  { question: "Personality is a combination of _______ factors.", options: ["One / एक", "Two / दो", "Four / चार", "Three / तीन"], answer: "Three / तीन" },
  { question: "What is the importance of adaptability in personal development?", options: ["It encourages resistance to change / यह बदलाव का विरोध करती है", "It fosters growth and resilience / यह लचीलापन और विकास को बढ़ावा देती है", "It leads to isolation / यह अलगाव को जन्म देती है", "It promotes rigidity / यह कठोरता को बढ़ावा देती है"], answer: "It fosters growth and resilience / यह लचीलापन और विकास को बढ़ावा देती है" },
  { question: "________ is a relatively enduring pattern of thoughts, feelings, and behavior which differentiates people from one another.", options: ["Personality development / व्यक्तित्व विकास", "Social Interaction / सामाजिक संपर्क", "Personality / व्यक्तित्व", "None of These / इनमें से कोई नहीं"], answer: "Personality / व्यक्तित्व" },
  { question: "________ considers personality as a certain style that is peculiar to the individual and is determined by the characteristic organization of mental trends...", options: ["Sociology / समाजशास्त्र", "Value of person / व्यक्ति का मूल्य", "Psychological / मनोवैज्ञानिक", "Attitude / दृष्टिकोण"], answer: "Psychological / मनोवैज्ञानिक" },
  { question: "The following are the characteristics of Negative Stress?", options: ["It feels unpleasant / यह अप्रिय लगता है", "It cause anxiety / यह चिंता उत्पन्न करता है", "It decreases performance / यह प्रदर्शन को कम करता है", "All of the above / उपरोक्त सभी"], answer: "All of the above / उपरोक्त सभी" },
  { question: "After the event is over, to whom should you write a thank you note?", options: ["Special guests or dignitaries / विशिष्ट अतिथियों को", "All of the above / उपरोक्त सभी को", "The event host / कार्यक्रम के मेज़बान को", "Sponsoring organizations / प्रायोजक संगठनों को"], answer: "All of the above / उपरोक्त सभी को" },
  { question: "Why is it important to have a growth mindset?", options: ["It leads to failure / यह असफलता की ओर ले जाता है", "It encourages learning and development / यह सीखने और विकास को प्रोत्साहित करता है", "It promotes stagnation / यह ठहराव को बढ़ावा देता है", "It fosters a fixed mindset / यह स्थिर मानसिकता को बढ़ाता है"], answer: "It encourages learning and development / यह सीखने और विकास को प्रोत्साहित करता है" },
  { question: "Why is it important to have strong leadership skills in the workplace?", options: ["It leads to confusion / यह भ्रम की स्थिति बनाता है", "It promotes chaos / यह अराजकता को बढ़ावा देता है", "It encourages micromanagement / यह सूक्ष्म प्रबंधन को बढ़ावा देता है", "It fosters direction and inspiration / यह दिशा और प्रेरणा प्रदान करता है"], answer: "It fosters direction and inspiration / यह दिशा और प्रेरणा प्रदान करता है" },
  { question: "All communication events have a ______ ?", options: ["End / अंत", "Start / शुरुआत", "Resource / संसाधन", "Source / स्रोत"], answer: "Source / स्रोत" },
  { question: "Determine the benefits of writing.", options: ["The speaker himself did not have to be present in order to communicate / वक्ता को संवाद हेतु मौजूद रहने की आवश्यकता नहीं होती", "We can represent, what we want / हम जो चाहें, व्यक्त कर सकते हैं", "Both (A) & (B) / दोनों (A) और (B)", "The knowledge of one generation could be passed on / एक पीढ़ी का ज्ञान अगली को सौंपा जा सकता है"], answer: "Both (A) & (B) / दोनों (A) और (B)" },
  { question: "What is Self-Esteem?", options: ["A degree to which you value yourself / आप खुद को कितना महत्व देते हैं", "Both a and b / दोनों (a) और (b)", "None of the above / उपरोक्त में से कोई नहीं", "Thoughts and feelings about yourself / अपने बारे में विचार और भावनाएं"], answer: "Both a and b / दोनों (a) और (b)" },
  { question: "Environment in which we live affects culture, and what sometimes determines cultural variability?", options: ["Social environment / सामाजिक वातावरण", "Ecological environment / पारिस्थितिकीय वातावरण", "Cultural environment / सांस्कृतिक वातावरण", "Physical environment / भौतिक वातावरण"], answer: "Physical environment / भौतिक वातावरण" },
  { question: "An individual's actions are most likely to be strongly controlled by conscience if they have a(n) ________ personality type?", options: ["Inner-directed personality / आंतरिक-निर्देशित व्यक्तित्व", "Other-directed personality / अन्य-निर्देशित व्यक्तित्व", "None of the above / उपरोक्त में से कोई नहीं", "Partial-Directed / आंशिक निर्देशित"], answer: "Inner-directed personality / आंतरिक-निर्देशित व्यक्तित्व" },
  { question: "Personality is?", options: ["Unique for every individual / हर व्यक्ति के लिए अद्वितीय", "All of the above / उपरोक्त सभी", "Not related only to body structure / केवल शरीर की बनावट से नहीं", "An indivisible unit / एक अविभाज्य इकाई"], answer: "All of the above / उपरोक्त सभी" },
  { question: "What is the importance of setting goals?", options: ["It limits success / यह सफलता को सीमित करता है", "It provides direction and motivation / यह दिशा और प्रेरणा प्रदान करता है", "It discourages progress / यह प्रगति को हतोत्साहित करता है", "It leads to aimless wandering / यह लक्ष्यहीन भटकाव की ओर ले जाता है"], answer: "It provides direction and motivation / यह दिशा और प्रेरणा प्रदान करता है" },
  { question: "What is the required sequence for interview preparation?", options: ["Self-Analyzing, Identifying skills and job-searching / आत्म-विश्लेषण, कौशल की पहचान और नौकरी की खोज", "Self-Analyzing, job-searching and Identifying skills / आत्म-विश्लेषण, नौकरी खोज और कौशल पहचान", "Identifying skills, job-searching and Self-Analyzing / कौशल पहचान, नौकरी खोज और आत्म-विश्लेषण", "Job-searching, Self-Analyzing and Identifying Skills / नौकरी खोज, आत्म-विश्लेषण और कौशल पहचान"], answer: "Self-Analyzing, Identifying skills and job-searching / आत्म-विश्लेषण, कौशल की पहचान और नौकरी की खोज" },
  { question: "Why is self-motivation important in achieving personal and professional goals?", options: ["It fosters drive and determination / यह प्रेरणा और दृढ़ता को बढ़ावा देता है", "It encourages dependence on others / यह दूसरों पर निर्भरता को बढ़ावा देता है", "It promotes laziness / यह आलस्य को बढ़ावा देता है", "It leads to failure / यह असफलता की ओर ले जाता है"], answer: "It fosters drive and determination / यह प्रेरणा और दृढ़ता को बढ़ावा देता है" },
  { question: "There is the prospect of immediate _______ in oral communication?", options: ["Reset / पुनः सेट", "Reflection / प्रतिबिम्ब", "Reaction / प्रतिक्रिया", "Response / उत्तर"], answer: "Response / उत्तर" },
  { question: "Stress is related to what kind of strain/tension?", options: ["Emotional / भावनात्मक", "All of the above / उपरोक्त सभी", "Mental / मानसिक", "Physical / शारीरिक"], answer: "All of the above / उपरोक्त सभी" },
  { question: "Which of the following environmental factors affects the personality?", options: ["All of the above / उपरोक्त सभी", "Social factors / सामाजिक कारक", "Cultural factors / सांस्कृतिक कारक", "Emotional factors / भावनात्मक कारक"], answer: "All of the above / उपरोक्त सभी" },
  { question: "Personality is an individual aspect of culture, whereas ______ is a collective aspect of personality?", options: ["Particular Experiences / विशिष्ट अनुभव", "None of the above / उपरोक्त में से कोई नहीं", "Heredity / वंशानुगतता", "Culture / संस्कृति"], answer: "Culture / संस्कृति" },
  { question: "Having conscious knowledge of one’s own self, capabilities, feelings, and character is called?", options: ["Self-Awareness / आत्म-जागरूकता", "Self-Motivation / आत्म-प्रेरणा", "Self-Regulation / आत्म-विनियमन", "None of the above / उपरोक्त में से कोई नहीं"], answer: "Self-Awareness / आत्म-जागरूकता" },
  { question: "_______ is the self-concept we think about ourselves?", options: ["Self-Analysis / आत्म-विश्लेषण", "Self-Evaluation / आत्म-मूल्यांकन", "Self-Efficiency / आत्म-प्रभावशीलता", "Self-Esteem / आत्म-सम्मान"], answer: "Self-Evaluation / आत्म-मूल्यांकन" },
  { question: "Which of the following is not a measure for personality assessment?", options: ["Color / रंग", "Communication / संचार", "Dressing / पहनावा", "Body Language / शारीरिक भाषा"], answer: "Color / रंग" },
  { question: "Why is effective communication essential in the workplace?", options: ["It increases confusion / यह भ्रम और गलतफहमियों को बढ़ाता है", "It causes delays in work / यह कार्य में देरी का कारण बनता है", "It enhances teamwork and productivity / यह टीम वर्क और उत्पादकता को बढ़ाता है", "It isolates employees / यह कर्मचारियों को अलग-थलग करता है"], answer: "It enhances teamwork and productivity / यह टीम वर्क और उत्पादकता को बढ़ाता है" },
  { question: "Likes and dislikes of a learner depend on which mental state?", options: ["Attitude / दृष्टिकोण", "Motivation / प्रेरणा", "Intelligence / बुद्धिमत्ता", "Aptitude / अभिरुचि"], answer: "Attitude / दृष्टिकोण" },
  { question: "A real or perceived challenge that causes the body to produce a response is called a(n) ________?", options: ["Injury / चोट", "Stressor / तनाव उत्प्रेरक", "Frustration / हताशा", "Phobia / भय"], answer: "Stressor / तनाव उत्प्रेरक" },
  { question: "Which kind of words should be avoided in verbal communication?", options: ["Simple / सरल", "Technical / तकनीकी", "Easy / आसान", "Local language / स्थानीय भाषा"], answer: "Technical / तकनीकी" },
  { question: "In which type of negotiation is the presence of an observer necessary?", options: ["Formal / औपचारिक", "Informal / अनौपचारिक", "Both / दोनों", "Friendly / मित्रतापूर्ण"], answer: "Formal / औपचारिक" },
  { question: "What are Arduino codes referred to as?", options: ["Notes / नोट्स", "Sketches / स्केचेस", "Links / लिंक्स", "Drawings / ड्रॉइंग्स"], answer: "Sketches / स्केचेस" },
  { question: "Which of the following is a basic function of a timer?", options: ["Provide a time delay / समय विलंब देना", "Act as a counter / काउंटर के रूप में कार्य करना", "Control compare, capture mode / तुलना और कैप्चर मोड को नियंत्रित करना", "All of these / उपरोक्त सभी"], answer: "All of these / उपरोक्त सभी" },
  { question: "The stress management technique based on mental exercises that produces a relaxation response is called?", options: ["Autogenic Technique / ऑटोजेनिक तकनीक", "Medicine intake / दवा सेवन", "Eating / भोजन करना", "Sleeping / नींद लेना"], answer: "Autogenic Technique / ऑटोजेनिक तकनीक" },
  { question: "The purpose of communication is to help officials to ________ the employees.", options: ["Threaten / डराना", "Apprise / सूचित करना", "Eliminate / हटाना", "Motivate / प्रेरित करना"], answer: "Motivate / प्रेरित करना" },
  { question: "_______ is the result of a person’s self-evaluation based on many factors.", options: ["Self-Esteem / आत्मसम्मान", "Self-Analysis / आत्म-विश्लेषण", "Self-Efficiency / आत्म-क्षमता", "Self-Evaluation / आत्म-मूल्यांकन"], answer: "Self-Esteem / आत्मसम्मान" },
  { question: "Why is self-esteem important?", options: ["You believe, that you are worthy of happiness and of respect. / आप मानते हैं कि आप खुशी और सम्मान के योग्य हैं.", "It does not have a profound effect / इसका कोई प्रभाव नहीं पड़ता.", "You cannot feel respect even if you make a mistake / आप गलती करने पर गर्व महसूस नहीं कर सकते.", "It is the last step in believing / यह विश्वास करने का अंतिम चरण है."], answer: "You believe, that you are worthy of happiness and of respect. / आप मानते हैं कि आप खुशी और सम्मान के योग्य हैं." },
  { question: "Where does self-esteem come from?", options: ["Talk, support and spending time with your family. / परिवार के साथ बात करना, समर्थन और समय बिताना", "Your friends support and respect. / दोस्तों का समर्थन और सम्मान", "Teachers who encourages you / शिक्षक जो आपका उत्साहवर्धन करते हैं", "All of the above / उपरोक्त सभी"], answer: "All of the above / उपरोक्त सभी" },
  { question: "What is required to convert low self-esteem into healthy self-esteem?", options: ["Never compare yourself with others / खुद की तुलना दूसरों से न करें", "Criticizing yourself / खुद की आलोचना करना", "Not to be kind to yourself / खुद के प्रति कठोर होना", "No need to Stay away from negative self-talk / नकारात्मक बातें करने से बचने की जरूरत नहीं"], answer: "Never compare yourself with others / खुद की तुलना दूसरों से न करें" },
  { question: "_______ is the belief in one’s ability to complete a task and achieve goals.", options: ["Self-Evaluation / आत्म-मूल्यांकन", "Self-Esteem / आत्म-सम्मान", "Self-Analysis / आत्म-विश्लेषण", "Self-Efficiency / आत्म-क्षमता"], answer: "Self-Efficiency / आत्म-क्षमता" },
  { question: "Which of the following is an example of non-verbal communication?", options: ["Facial expression / चेहरे के हावभाव", "Appearance / रूप-रंग", "Posture / मुद्रा", "All of the above / उपरोक्त सभी"], answer: "All of the above / उपरोक्त सभी" },
  { question: "Which type of handshake shows confidence?", options: ["Loose / ढीली", "Firm / मजबूत", "None of these / इनमें से कोई नहीं", "Limp / सुस्त"], answer: "Firm / मजबूत" },
  { question: "Communication is the task of imparting?", options: ["Training / प्रशिक्षण", "Knowledge / ज्ञान", "Message / संदेश", "Information / जानकारी"], answer: "Message / संदेश" },
  { question: "The concept of achieving success depends on how you?", options: ["Work / कार्य करते हैं", "Think / सोचते हैं", "Behave / व्यवहार करते हैं", "All of the above / उपरोक्त सभी"], answer: "All of the above / उपरोक्त सभी" },
  { question: "Which law restricts corporate communication for publicly traded companies before and during the registration period?", options: ["Sarbanes-Oxley Act of 2002", "Securities Act of 1933", "Investment Company Act of 1934", "Investment Advisers Act of 1940"], answer: "Securities Act of 1933" },
  { question: "Which of the following entities cannot be sued for libel?", options: ["A house of worship / पूजा स्थल", "A private citizen / निजी नागरिक", "A politician / राजनेता", "A government institution / सरकारी संस्था"], answer: "A government institution / सरकारी संस्था" },
];

const allQuestions = [...questions, ...questionsPart2];
const useTimer = (initialTime: number, onEnd: () => void) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isRunning && time > 0) interval = setInterval(() => setTime((t) => t - 1), 1000);
    else if (time === 0 && isRunning) { setIsRunning(false); onEnd(); }
    return () => clearInterval(interval);
  }, [isRunning, time, onEnd]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = (t: number) => { setTime(t); setIsRunning(false); };
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60); const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };
  return { time, formatTime: formatTime(time), start, pause, reset, isRunning };
};

const M4PYQ2024: React.FC = () => {
  const TOTAL = allQuestions.length; const DURATION = TOTAL * 60;
  const [screen, setScreen] = useState<"home" | "quiz" | "result">("home");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<(string | null)[]>(Array(TOTAL).fill(null));
  const [showNav, setShowNav] = useState(false);
  const handleEnd = useCallback(() => setScreen("result"), []);
  const timer = useTimer(DURATION, handleEnd);

  const score = selected.reduce((acc, ans, i) => acc + (ans === allQuestions[i].answer ? 1 : 0), 0);
  const percentage = Math.round((score / TOTAL) * 100);

  const startQuiz = () => { setSelected(Array(TOTAL).fill(null)); setCurrent(0); timer.reset(DURATION); timer.start(); setScreen("quiz"); };
  const submitQuiz = () => { timer.pause(); setScreen("result"); };

  if (screen === "home") return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8" style={{ backgroundColor: "#0f172a" }}>
      <div className="max-w-lg w-full rounded-3xl shadow-2xl p-8 text-center space-y-6" style={{ backgroundColor: "#1e293b", border: "2px solid #facc15" }}>
        <div className="inline-block text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest bg-yellow-400 text-slate-900">O Level M4-R5</div>
        <h1 className="text-4xl font-extrabold text-yellow-400">M4-R5 PYQ<br /><span className="text-white">Jan 2024</span></h1>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {[{v: TOTAL, l: "MCQs"}, {v: `${TOTAL}m`, l: "Time"}, {v: "+1", l: "Marks"}, {v: "0", l: "Negative"}].map((it, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-900 border border-slate-700">
              <p className="text-xl font-bold text-yellow-400">{it.v}</p><p className="text-gray-400">{it.l}</p>
            </div>
          ))}
        </div>
        <button onClick={startQuiz} className="w-full font-bold py-4 rounded-2xl text-lg bg-yellow-400 text-slate-900">🚀 Attempt Mock Test</button>
        <button onClick={() => window.open("/pdfs/m4-jan-2024.pdf", "_blank")} className="w-full font-bold py-3 rounded-2xl border-2 border-yellow-400 text-yellow-400 bg-transparent">📄 View PDF</button>
      </div>
    </div>
  );

  if (screen === "result") return (
    <div className="min-h-screen p-4 overflow-y-auto bg-slate-950">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="rounded-2xl p-8 text-center bg-slate-900 border-2 border-yellow-400">
          <h2 className="text-2xl font-bold text-white mb-4">Quiz Result</h2>
          <div className="text-5xl font-extrabold text-yellow-400 mb-6">{percentage}%</div>
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-500"><p className="text-xl font-bold">{score}</p><p className="text-xs">Correct</p></div>
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500"><p className="text-xl font-bold">{TOTAL-score}</p><p className="text-xs">Wrong</p></div>
            <div className="p-3 rounded-xl bg-slate-800 text-gray-400"><p className="text-xl font-bold">{selected.filter(x => !x).length}</p><p className="text-xs">Skipped</p></div>
          </div>
        </div>
        <div className="rounded-2xl p-5 bg-slate-900 border border-slate-700 space-y-4">
          <h3 className="text-lg font-bold text-yellow-400">📋 Answer Review</h3>
          <div className="max-h-[50vh] overflow-y-auto space-y-3 pr-2">
            {allQuestions.map((q, i) => (
              <div key={i} className={`p-4 rounded-xl border ${selected[i] === q.answer ? "border-green-500/40 bg-green-500/5" : "border-red-500/40 bg-red-500/5"}`}>
                <p className="text-sm text-white font-medium">Q{i+1}. {q.question}</p>
                <p className={`text-xs mt-2 ${selected[i] === q.answer ? "text-green-500" : "text-red-500"}`}>Your: {selected[i] || "Skipped"}</p>
                {selected[i] !== q.answer && <p className="text-xs text-green-500">Correct: {q.answer}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-3"><button onClick={startQuiz} className="flex-1 py-4 rounded-2xl bg-yellow-400 text-slate-900 font-bold">Retry</button><button onClick={()=>setScreen("home")} className="flex-1 py-4 rounded-2xl border-2 border-yellow-400 text-yellow-400 bg-transparent font-bold">Home</button></div>
      </div>
    </div>
  );

  const q = allQuestions[current];
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <div className="sticky top-0 z-30 px-4 py-3 bg-slate-900 border-b border-slate-800 flex justify-between items-center">
        <button onClick={() => setShowNav(!showNav)} className="px-3 py-2 rounded-xl text-sm font-bold bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">Q{current+1}/{TOTAL}</button>
        <div className="font-mono font-bold text-lg text-yellow-400">{timer.formatTime}</div>
        <button onClick={submitQuiz} className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-bold">Submit</button>
      </div>
      
      {showNav && (
        <div className="fixed inset-0 z-40 flex">
          <div className="w-80 h-full p-5 bg-slate-900 border-r-2 border-yellow-400 overflow-y-auto">
            <h3 className="font-bold text-yellow-400 mb-5">Navigator</h3>
            <div className="grid grid-cols-5 gap-2">
              {allQuestions.map((_, i) => (
                <button key={i} onClick={()=>{setCurrent(i); setShowNav(false);}} className={`w-10 h-10 rounded-lg text-xs font-bold border ${i===current ? "bg-yellow-400 text-slate-900 border-yellow-400" : selected[i] ? "bg-green-500/20 text-green-500 border-green-500/40" : "bg-slate-950 text-gray-500 border-slate-700"}`}>{i+1}</button>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-black/60" onClick={() => setShowNav(false)} />
        </div>
      )}

      <div className="flex-1 flex flex-col items-center p-4 py-8">
        <div className="max-w-3xl w-full space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800"><h2 className="text-xl text-white leading-relaxed">{q.question}</h2></div>
          <div className="space-y-3">
            {q.options.map((opt, idx) => (
              <button key={idx} onClick={() => { const s = [...selected]; s[current] = opt; setSelected(s); }} className={`w-full text-left p-4 rounded-2xl border-2 flex items-center gap-4 transition-all ${selected[current] === opt ? "bg-yellow-400/10 border-yellow-400 text-yellow-400" : "bg-slate-900 border-slate-800 text-gray-300"}`}>
                <span className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold ${selected[current] === opt ? "bg-yellow-400 text-slate-900" : "bg-slate-800 text-gray-500"}`}>{String.fromCharCode(65+idx)}</span>
                <span className="font-medium">{opt}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 bg-slate-900 border-t border-slate-800 flex justify-between items-center">
        <button onClick={() => setCurrent(c => Math.max(0, c-1))} disabled={current===0} className="px-6 py-3 rounded-2xl bg-slate-800 text-gray-400 font-bold disabled:opacity-20">Prev</button>
        <button onClick={() => current === TOTAL-1 ? submitQuiz() : setCurrent(c => c+1)} className={`px-8 py-3 rounded-2xl font-bold text-slate-900 ${current === TOTAL-1 ? "bg-green-500" : "bg-yellow-400"}`}>{current === TOTAL-1 ? "Finish" : "Next"}</button>
      </div>
    </div>
  );
};

export default M4PYQ2024;
