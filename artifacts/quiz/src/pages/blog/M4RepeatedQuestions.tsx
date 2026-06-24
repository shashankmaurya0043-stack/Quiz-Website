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
const questionsPart2: Question[] = [
  { question: "Which sensor works on the principle of reflected sound waves?", options: ["LDR", "Ultrasonic Sensor", "Thermistor", "Gas Sensor"], answer: "Ultrasonic Sensor" },
  { question: "What is the main advantage of IPv6 over IPv4?", options: ["Smaller address space", "Larger address space", "No security", "Lower speed"], answer: "Larger address space" },
  { question: "In MQTT, the device that publishes or subscribes to a topic is called:", options: ["Broker", "Client", "Gateway", "Server"], answer: "Client" },
  { question: "Which of the following is a characteristic of IoT?", options: ["Connectivity", "Intelligence", "Dynamic nature", "All of the above"], answer: "All of the above" },
  { question: "The code written in Arduino IDE is called:", options: ["Draft", "Script", "Sketch", "Program"], answer: "Sketch" },
  { question: "Which memory is used to store the bootloader in Arduino?", options: ["SRAM", "EEPROM", "Flash Memory", "SD Card"], answer: "Flash Memory" },
  { question: "What is the role of an 'Actuator'?", options: ["To sense environment", "To perform physical action", "To calculate data", "To provide internet"], answer: "To perform physical action" },
  { question: "Which protocol is used for secure shell access to a Raspberry Pi?", options: ["HTTP", "SSH", "FTP", "Telnet"], answer: "SSH" },
  { question: "What is 'Latent Stress'?", options: ["Sudden stress", "Long-term hidden stress", "Good stress", "No stress"], answer: "Long-term hidden stress" },
  { question: "Which of the following is a key component of emotional intelligence?", options: ["Self-awareness", "Empathy", "Motivation", "All of the above"], answer: "All of the above" },
  { question: "Arduino 'delay(1000)' pauses the program for how long?", options: ["1 microsecond", "1 second", "1 minute", "1 millisecond"], answer: "1 second" },
  { question: "Which communication technology is used in Smart Cards?", options: ["NFC", "Wi-Fi", "Satellite", "4G"], answer: "NFC" },
  { question: "What is 'Fog Computing'?", options: ["Cloud computing for weather", "Processing data closer to the device", "Storing data in the ocean", "High-speed internet"], answer: "Processing data closer to the device" },
  { question: "Which protocol follows the Publish-Subscribe model?", options: ["HTTP", "CoAP", "MQTT", "FTP"], answer: "MQTT" },
  { question: "In Arduino, 'pinMode(13, OUTPUT)' does what?", options: ["Reads value from pin 13", "Sets pin 13 to send signal", "Turns off the board", "Resets the timer"], answer: "Sets pin 13 to send signal" },
  { question: "Which sensor is commonly used in automatic street lights?", options: ["PIR", "LDR", "Ultrasonic", "Touch Sensor"], answer: "LDR" },
  { question: "What is the range of a standard Bluetooth connection?", options: ["1 km", "Up to 10 meters", "100 km", "Global"], answer: "Up to 10 meters" },
  { question: "Which of the following is a major security challenge in IoT?", options: ["Weak passwords", "Lack of encryption", "Insecure interfaces", "All of the above"], answer: "All of the above" },
  { question: "What does 'S' in SaaS stand for in cloud computing?", options: ["System", "Software", "Security", "Server"], answer: "Software" },
  { question: "Which component helps in stabilizing the DC voltage in a circuit?", options: ["Resistor", "Capacitor", "Transistor", "Diode"], answer: "Capacitor" },
  { question: "In IoT architecture, the 'Perception Layer' consists of:", options: ["Servers", "Cloud storage", "Sensors and Actuators", "Web Browsers"], answer: "Sensors and Actuators" },
  { question: "What is the full form of RFID?", options: ["Radio Frequency Identification", "Radio Frequency Intercom Device", "Radio Fast ID", "Remote Frequency Identification"], answer: "Radio Frequency Identification" },
  { question: "Which of these is a threat to IoT security?", options: ["DDoS attack", "Botnets", "Data theft", "All of the above"], answer: "All of the above" },
  { question: "Raspberry Pi uses which type of storage as its primary hard drive?", options: ["Internal SSD", "Micro SD Card", "Floppy Disk", "Cloud only"], answer: "Micro SD Card" },
  { question: "Which command is used to update the package list in Raspberry Pi terminal?", options: ["sudo update", "sudo apt-get update", "sudo install", "upgrade now"], answer: "sudo apt-get update" },
  { question: "What is the primary language used for web-based IoT dashboards?", options: ["Assembly", "JavaScript", "C++", "Fortran"], answer: "JavaScript" },
  { question: "Self-discipline is part of which skill set?", options: ["Technical skills", "Soft skills", "Hardware skills", "Networking skills"], answer: "Soft skills" },
  { question: "Which protocol is designed for machine-to-machine communication with low overhead?", options: ["HTTP", "MQTT", "SMTP", "SNMP"], answer: "MQTT" },
  { question: "A PIR sensor detects changes in:", options: ["Visible light", "Infrared radiation", "Sound waves", "Pressure"], answer: "Infrared radiation" },
  { question: "What is the resolution of Arduino UNO's Analog to Digital Converter (ADC)?", options: ["8-bit", "10-bit", "12-bit", "16-bit"], answer: "10-bit" },
  { question: "Which cloud service model provides a platform for developers to build applications?", options: ["IaaS", "PaaS", "SaaS", "CaaS"], answer: "PaaS" },
  { question: "Which sensor is used in a fire alarm system?", options: ["DHT11", "Flame Sensor", "PIR Sensor", "Ultrasonic"], answer: "Flame Sensor" },
  { question: "The 'Internet of Things' term was coined by:", options: ["Steve Jobs", "Kevin Ashton", "Vint Cerf", "Tim Berners-Lee"], answer: "Kevin Ashton" },
  { question: "Which protocol is used for email communication in IoT alerts?", options: ["MQTT", "SMTP", "CoAP", "HTTP"], answer: "SMTP" },
  { question: "What is the use of 'Serial.begin(9600)' in Arduino?", options: ["To start the timer", "To set the data rate in bits per second", "To turn on an LED", "To reset the board"], answer: "To set the data rate in bits per second" },
];
const questionsPart3: Question[] = [
  { question: "Which soft skill is most important for working in a team?", options: ["Coding", "Collaboration", "Typing", "Mathematics"], answer: "Collaboration" },
  { question: "What is the full form of LoRa?", options: ["Long Range", "Low Radio", "Local Range", "Long Radio"], answer: "Long Range" },
  { question: "Which device acts as a bridge between IoT devices and the Cloud?", options: ["Actuator", "Sensor", "Gateway", "Resistor"], answer: "Gateway" },
  { question: "Which OSI layer ensures reliable end-to-end communication?", options: ["Physical", "Transport", "Network", "Application"], answer: "Transport" },
  { question: "In Raspberry Pi, GPIO stands for:", options: ["General Purpose Input Output", "General Power Input Output", "Global Purpose Input Output", "General Purpose Internal Output"], answer: "General Purpose Input Output" },
  { question: "Which component is used to limit current in an LED circuit?", options: ["Capacitor", "Inductor", "Resistor", "Battery"], answer: "Resistor" },
  { question: "Which sensor is used to detect gas or smoke?", options: ["MQ-2", "DHT11", "LDR", "PIR"], answer: "MQ-2" },
  { question: "In cloud computing, what does elasticity mean?", options: ["Ability to bend cables", "Ability to scale resources up and down", "Using rubber components", "Fast internet speed"], answer: "Ability to scale resources up and down" },
  { question: "What is 'Stress Management'?", options: ["Increasing work load", "Techniques to control a person's level of stress", "Ignoring problems", "Sleeping all day"], answer: "Techniques to control a person's level of stress" },
  { question: "Which pin on Arduino can be used for PWM?", options: ["Pin 2", "Pin 3", "Pin 4", "Pin 7"], answer: "Pin 3" },
  { question: "Which IoT protocol uses the Request-Response model?", options: ["MQTT", "CoAP (partially)", "HTTP", "All of the above"], answer: "HTTP" },
  { question: "The brain of the IoT system is generally considered to be:", options: ["The Sensor", "The Actuator", "The Microcontroller/Processor", "The Battery"], answer: "The Microcontroller/Processor" },
  { question: "Which of the following is a wearable IoT device?", options: ["Smart Watch", "Desktop PC", "Table Lamp", "Ceiling Fan"], answer: "Smart Watch" },
  { question: "Time management is an example of:", options: ["Hard Skill", "Soft Skill", "Professional Degree", "Technical Skill"], answer: "Soft Skill" },
  { question: "Which sensor is used to measure the tilt of an object?", options: ["Accelerometer", "LDR", "DHT11", "Barometer"], answer: "Accelerometer" },
  { question: "Which protocol is used for secure file transfer?", options: ["HTTP", "SFTP", "MQTT", "SMTP"], answer: "SFTP" },
  { question: "What is the full form of PWM?", options: ["Power Wave Modulation", "Pulse Width Modulation", "Phase Width Mode", "Pulse Wave Management"], answer: "Pulse Width Modulation" },
  { question: "In Arduino, what is the default baud rate for Serial communication?", options: ["4800", "9600", "115200", "No default"], answer: "9600" },
  { question: "Which of the following is a non-volatile memory?", options: ["RAM", "SRAM", "EEPROM", "Cache"], answer: "EEPROM" },
  { question: "What is 'Interoperability' in IoT?", options: ["Ability of devices to work together", "Ability to stop the internet", "Using only one brand of devices", "High energy consumption"], answer: "Ability of devices to work together" },
  { question: "Which sensor is used to detect the distance of an obstacle?", options: ["Ultrasonic Sensor", "LDR", "MQ-2", "Touch Sensor"], answer: "Ultrasonic Sensor" },
  { question: "Which organization developed the MQTT protocol?", options: ["IBM", "Cisco", "Google", "Microsoft"], answer: "IBM" },
  { question: "Which type of communication is 'One-to-Many'?", options: ["Unicast", "Multicast", "Point-to-Point", "None"], answer: "Multicast" },
  { question: "Which soft skill involves the ability to adapt to new conditions?", options: ["Flexibility", "Rigidity", "Coding", "Mathematics"], answer: "Flexibility" },
  { question: "Arduino UNO is based on which microcontroller?", options: ["ATmega328P", "ATmega168", "ATmega8", "ARM Cortex"], answer: "ATmega328P" },
  { question: "Which protocol uses a Broker to manage messages?", options: ["HTTP", "MQTT", "FTP", "SSH"], answer: "MQTT" },
  { question: "What is the primary function of a 'Thermistor'?", options: ["Measure Light", "Measure Temperature", "Measure Humidity", "Measure Pressure"], answer: "Measure Temperature" },
  { question: "Which of the following is a benefit of IoT in agriculture?", options: ["Smart Irrigation", "Soil Monitoring", "Crop Health tracking", "All of the above"], answer: "All of the above" },
  { question: "Which is a valid variable name in C/Arduino?", options: ["123Var", "my_variable", "my variable", "@var"], answer: "my_variable" },
  { question: "What is the full form of SDN in networking?", options: ["Software Defined Network", "System Data Network", "Secure Digital Network", "Software Data Node"], answer: "Software Defined Network" },
];

const allQuestions = [...repeatedQuestions, ...questionsPart2, ...questionsPart3];
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

const M4RepeatedQuestions: React.FC = () => {
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
        <h1 className="text-4xl font-extrabold text-yellow-400">IoT Most Repeated<br /><span className="text-white">Exam Questions</span></h1>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {[{v: TOTAL, l: "MCQs"}, {v: `${TOTAL}m`, l: "Time"}, {v: "+1", l: "Marks"}, {v: "0", l: "Negative"}].map((it, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-900 border border-slate-700">
              <p className="text-xl font-bold text-yellow-400">{it.v}</p><p className="text-gray-400">{it.l}</p>
            </div>
          ))}
        </div>
        <button onClick={startQuiz} className="w-full font-bold py-4 rounded-2xl text-lg bg-yellow-400 text-slate-900 shadow-lg active:scale-95 transition-all">🚀 Start Practice Test</button>
      </div>
    </div>
  );

  if (screen === "result") return (
    <div className="min-h-screen p-4 overflow-y-auto bg-slate-950">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="rounded-2xl p-8 text-center bg-slate-900 border-2 border-yellow-400">
          <h2 className="text-2xl font-bold text-white mb-4">Practice Completed!</h2>
          <div className="text-5xl font-extrabold text-yellow-400 mb-6">{percentage}%</div>
          <div className="grid grid-cols-3 gap-3 text-sm">
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
      <div className="sticky top-0 z-30 px-4 py-3 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 flex justify-between items-center">
        <button onClick={() => setShowNav(!showNav)} className="px-3 py-2 rounded-xl text-sm font-bold bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">Q{current+1}/{TOTAL}</button>
        <div className="font-mono font-bold text-lg text-yellow-400">{timer.formatTime}</div>
        <button onClick={submitQuiz} className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-bold">Finish</button>
      </div>
      <div className="w-full h-1 bg-slate-900"><div className="h-full bg-yellow-400 transition-all duration-500" style={{ width: `${((current+1)/TOTAL)*100}%` }} /></div>
      
      {showNav && (
        <div className="fixed inset-0 z-40 flex">
          <div className="w-80 h-full p-5 bg-slate-900 border-r-2 border-yellow-400 overflow-y-auto">
            <h3 className="font-bold text-yellow-400 mb-5 text-lg">Question Navigator</h3>
            <div className="grid grid-cols-5 gap-2">
              {allQuestions.map((_, i) => (
                <button key={i} onClick={()=>{setCurrent(i); setShowNav(false);}} className={`w-10 h-10 rounded-lg text-xs font-bold border transition-all ${i===current ? "bg-yellow-400 text-slate-900 border-yellow-400" : selected[i] ? "bg-green-500/20 text-green-500 border-green-500/40" : "bg-slate-950 text-gray-500 border-slate-700"}`}>{i+1}</button>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-black/60" onClick={() => setShowNav(false)} />
        </div>
      )}

      <div className="flex-1 flex flex-col items-center p-4 py-8">
        <div className="max-w-3xl w-full space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
            <h2 className="text-xl text-white font-semibold leading-relaxed">{q.question}</h2>
          </div>
          <div className="space-y-3">
            {q.options.map((opt, idx) => (
              <button key={idx} onClick={() => { const s = [...selected]; s[current] = opt; setSelected(s); }} className={`w-full text-left p-4 rounded-2xl border-2 flex items-center gap-4 transition-all ${selected[current] === opt ? "bg-yellow-400/10 border-yellow-400 text-yellow-400 shadow-lg" : "bg-slate-900 border-slate-800 text-gray-300"}`}>
                <span className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold ${selected[current] === opt ? "bg-yellow-400 text-slate-900" : "bg-slate-800 text-gray-500"}`}>{String.fromCharCode(65+idx)}</span>
                <span className="font-medium">{opt}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex justify-between items-center backdrop-blur-md">
        <button onClick={() => setCurrent(c => Math.max(0, c-1))} disabled={current===0} className="px-6 py-3 rounded-2xl bg-slate-800 text-gray-400 font-bold disabled:opacity-20 active:scale-95 transition-all">Prev</button>
        {selected[current] && <button onClick={() => { const s = [...selected]; s[current] = null; setSelected(s); }} className="text-xs text-red-500 underline uppercase font-bold tracking-widest">Clear Answer</button>}
        <button onClick={() => current === TOTAL-1 ? submitQuiz() : setCurrent(c => c+1)} className={`px-8 py-3 rounded-2xl font-bold text-slate-900 transition-all active:scale-95 ${current === TOTAL-1 ? "bg-green-500 shadow-green-500/30" : "bg-yellow-400 shadow-yellow-400/30"}`}>{current === TOTAL-1 ? "Finish Test" : "Next Question"}</button>
      </div>
    </div>
  );
};

export default M4RepeatedQuestions;
