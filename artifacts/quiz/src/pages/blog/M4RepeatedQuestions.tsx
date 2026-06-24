import React, { useState, useEffect, useCallback } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const repeatedQuestions: Question[] = [
  { question: "What is the main purpose of the 'setup()' function in Arduino?", options: ["To run code repeatedly", "To initialize settings once", "To perform calculations", "To turn off the board"], answer: "To initialize settings once" },
  { question: "Which protocol is lightweight and widely used in IoT for message queuing?", options: ["HTTP", "MQTT", "FTP", "SMTP"], answer: "MQTT" },
  { question: "Which sensor is used to measure humidity and temperature together?", options: ["LDR", "PIR", "DHT11", "Ultrasonic"], answer: "DHT11" },
  { question: "What is the full form of MQTT?", options: ["Message Queuing Telemetry Transport", "Message Queue Transport Tool", "Micro Query Telemetry Transport", "Mobile Queue Telemetry Transport"], answer: "Message Queuing Telemetry Transport" },
  { question: "How many digital pins are available on an Arduino UNO board?", options: ["10", "14", "20", "8"], answer: "14" },
  { question: "Which of the following is an example of an actuator?", options: ["Temperature sensor", "LED", "LDR", "Gas sensor"], answer: "LED" },
  { question: "Which port does MQTT typically use for non-encrypted communication?", options: ["80", "1883", "443", "22"], answer: "1883" },
  { question: "ATmega328P is the microcontroller used in which board?", options: ["Raspberry Pi", "Arduino UNO", "Intel Galileo", "NodeMCU"], answer: "Arduino UNO" },
  { question: "Which protocol is used for low-power wireless personal area networks?", options: ["6LoWPAN", "HTTP", "FTP", "Ethernet"], answer: "6LoWPAN" },
  { question: "What is the function of an LDR sensor?", options: ["Measure Heat", "Measure Light Intensity", "Measure Distance", "Measure Sound"], answer: "Measure Light Intensity" },
  { question: "In IoT, 'Things' in Internet of Things refers to:", options: ["Only computers", "Only smartphones", "Physical objects with sensors", "Only internet routers"], answer: "Physical objects with sensors" },
  { question: "Raspberry Pi 4 has which type of processor architecture?", options: ["X86", "ARM", "AVR", "RISC-V"], answer: "ARM" },
  { question: "Which layer of OSI model is responsible for routing packets?", options: ["Physical Layer", "Data Link Layer", "Network Layer", "Session Layer"], answer: "Network Layer" },
  { question: "Which language is primarily used for Arduino programming?", options: ["Python", "C/C++", "Java", "PHP"], answer: "C/C++" },
  { question: "What is the maximum voltage for most Arduino digital pins?", options: ["12V", "3.3V", "5V", "9V"], answer: "5V" },
  { question: "CoAP (Constrained Application Protocol) works on top of which transport protocol?", options: ["TCP", "UDP", "IP", "FTP"], answer: "UDP" },
  { question: "Which sensor is used for detecting human motion?", options: ["DHT11", "PIR Sensor", "Ultrasonic Sensor", "Gyroscope"], answer: "PIR Sensor" },
  { question: "IPv6 uses how many bits for an address?", options: ["32 bits", "64 bits", "128 bits", "48 bits"], answer: "128 bits" },
  { question: "What does PWM stand for in Arduino?", options: ["Pulse Width Modulation", "Power Wave Management", "Phase Width Mode", "Pulse Wave Modulation"], answer: "Pulse Width Modulation" },
  { question: "Which of the following is a cloud deployment model?", options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "All of the above"], answer: "All of the above" },
  { question: "The process of converting plain text into unreadable format is called:", options: ["Decryption", "Encryption", "Hashing", "Encoding"], answer: "Encryption" },
  { question: "Which protocol is best suited for small, constrained devices in IoT?", options: ["HTTP", "CoAP", "FTP", "Telnet"], answer: "CoAP" },
  { question: "In Arduino, 'analogRead()' returns a value between:", options: ["0 to 255", "0 to 1023", "0 to 1", "0 to 500"], answer: "0 to 1023" },
  { question: "Which of these is a short-range wireless communication technology?", options: ["LoRaWAN", "Bluetooth", "Satellite", "NB-IoT"], answer: "Bluetooth" },
  { question: "What is the role of a gateway in IoT?", options: ["To store data", "To connect different networks", "To power the sensors", "To cool the system"], answer: "To connect different networks" },
  { question: "Which pin on Arduino UNO provides 3.3V output?", options: ["GND", "3.3V", "5V", "Vin"], answer: "3.3V" },
  { question: "What is the default operating system for Raspberry Pi?", options: ["Windows IoT", "Raspberry Pi OS (Raspbian)", "Ubuntu", "Android"], answer: "Raspberry Pi OS (Raspbian)" },
  { question: "Which component is used to provide feedback in a closed-loop system?", options: ["Input", "Output", "Sensor/Feedback", "Controller"], answer: "Sensor/Feedback" },
  { question: "Which type of signal has a continuous range of values?", options: ["Digital", "Analog", "Binary", "Pulse"], answer: "Analog" },
  { question: "What is the full form of IaaS in Cloud Computing?", options: ["Internet as a Service", "Infrastructure as a Service", "Information as a Service", "Interface as a Service"], answer: "Infrastructure as a Service" },
  { question: "Which protocol is used by the World Wide Web?", options: ["FTP", "SMTP", "HTTP", "MQTT"], answer: "HTTP" },
  { question: "Soft Skills: Which of the following is a key element of active listening?", options: ["Interrupting the speaker", "Making eye contact", "Looking at your phone", "Thinking of your reply"], answer: "Making eye contact" },
  { question: "A successful IoT ecosystem requires:", options: ["Sensors", "Connectivity", "Data Processing", "All of the above"], answer: "All of the above" },
  { question: "Which protocol operates at the Application Layer of the IoT stack?", options: ["Zigbee", "LoRa", "MQTT", "Bluetooth"], answer: "MQTT" },
  { question: "Arduino UNO has how many Analog Input pins?", options: ["4", "6", "8", "10"], answer: "6" },
];
