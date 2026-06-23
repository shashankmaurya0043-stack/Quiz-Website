import React, { useState, useEffect, useCallback } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  { question: "Who developed the OSI Model?", options: ["ISO (International Software Organization)", "ISO (International Standard Organization)", "ISO (Internet Standard Organization)", "ISO (International System Organization)"], answer: "ISO (International Standard Organization)" },
  { question: "Which instruction set architecture is used in Raspberry Pi?", options: ["ARM", "AVR", "MSP", "X86"], answer: "ARM" },
  { question: "What is the full form of WSN?", options: ["Wired Sensor Network", "Wide Sensor Network", "Wireless Sensor Network", "None of these"], answer: "Wireless Sensor Network" },
  { question: "Which layer is used in the transport layer to ensure data integrity?", options: ["Repetition codes", "Error correction codes", "Checksum", "Cyclic redundancy checks"], answer: "Checksum" },
  { question: "Which OSI layer converts digital bits into electrical, radio, or optical signals?", options: ["Network Layer", "Session Layer", "Physical Layer", "Application Layer"], answer: "Physical Layer" },
  { question: "In the network layer, data is transferred in the form of?", options: ["Bits", "Layers", "Bytes", "Packets"], answer: "Packets" },
  { question: "Which cloud computing service model virtualizes hardware in the cloud?", options: ["PaaS", "CaaS", "IaaS", "None of the mentioned"], answer: "IaaS" },
  { question: "In which control system the output does not affect the control action?", options: ["Closed Loop Control System", "Feedback Control System", "Open Loop Control System", "All of above"], answer: "Open Loop Control System" },
  { question: "What is a benefit of cloud computing services?", options: ["Anywhere access", "Fast", "Higher utilization", "All of the above"], answer: "All of the above" },
  { question: "Automatic control system is also known as?", options: ["Open Loop or Feedback Control System", "Open Loop or Non Feedback Control System", "Closed Loop or Feedback Control System", "None of these"], answer: "Closed Loop or Feedback Control System" },
  { question: "Which layer of the TCP/IP model performs the function of the top three layers of the OSI model?", options: ["Application Layer", "Transport Layer", "Session Layer", "Network Layer"], answer: "Application Layer" },
  { question: "How many layers are there in the OSI Model?", options: ["4 Layers", "5 Layers", "3 Layers", "7 Layers"], answer: "7 Layers" },
  { question: "Which layer provides security-based connections?", options: ["Session layer", "Application layer", "Network layer", "Transport layer"], answer: "Transport layer" },
  { question: "Which devices connect different types of devices through networks?", options: ["Fiber Optic network", "GPS, Wi-Fi, RFID", "Ethernet", "All of the above"], answer: "All of the above" },
  { question: "What does OSI stand for in OSI Model?", options: ["Open System Interconnection", "Operating System Interconnection", "Operating System Interaction", "Open System Internet"], answer: "Open System Interconnection" },
  { question: "What is the full form of PaaS?", options: ["Platform as a Survey", "People as a Service", "Platform as a Service", "Platform as a Survey"], answer: "Platform as a Service" },
  { question: "The initiation, maintenance, and termination of the physical connection in a network occur at which OSI layer?", options: ["Network Layer", "Application Layer", "Physical Layer", "Session Layer"], answer: "Physical Layer" },
  { question: "Which OSI layer is responsible for deciding the best route for data from source to destination?", options: ["Transport Layer", "Network Layer", "Application Layer", "Data Link Layer"], answer: "Network Layer" },
  { question: "Which Ethernet/LAN cable is used in Raspberry Pi?", options: ["cat6", "Cat5", "RJ45", "at5e"], answer: "RJ45" },
  { question: "Closed loop control system is also known as?", options: ["Feedback control system", "None of These", "Non-feedback control system", "Open Control System"], answer: "Feedback control system" },
  { question: "What is the LDR sensor used to measure?", options: ["Monitors Motion", "Monitors Light Intensity", "Monitors heartbeat", "Monitors air pressure"], answer: "Monitors Light Intensity" },
  { question: "How many pins are there in an LDR sensor?", options: ["4", "2", "5", "1"], answer: "2" },
  { question: "What is the maximum read range of an RFID module?", options: ["2 cm", "5 cm", "1 cm", "10 cm"], answer: "10 cm" },
  { question: "How many times does the setup function run in Arduino IDE?", options: ["None of the above", "2", "10", "1"], answer: "1" },
  { question: "What is the role of the cloud in smart grid architecture of IoT?", options: ["Collect data", "Manage data", "Security", "Store data"], answer: "Manage data" },
  { question: "Which of the following protocols is based on the REST architecture?", options: ["HTTP", "COAP", "Both A and B", "MQTT"], answer: "Both A and B" },
  { question: "Sensors can be?", options: ["Temperature sensors", "All of the above", "Light sensors", "Motion sensors"], answer: "All of the above" },
  { question: "The Raspbian OS used in Raspberry Pi is based on which OS?", options: ["Debian Linux", "RTOS", "Windows", "None of these above"], answer: "Debian Linux" },
  { question: "Actuators can be?", options: ["Display", "Sound", "All of the above", "Monitor"], answer: "All of the above" },
  { question: "The use of IoT architecture in production is referred to as what?", options: ["True", "False", "None of the above", "None of the mentioned"], answer: "True" },
  { question: "What are the different kinds of signals?", options: ["Mechanical, Thermal", "All of the above", "Chemical, Radiation", "Magnetic, Electric"], answer: "All of the above" },
  { question: "Sample and hold circuit is which type of circuit?", options: ["Digital device", "Analog device", "Neither analog nor digital", "Both analog and digital"], answer: "Analog device" },
  { question: "Which of the following is an example of a sensor?", options: ["Water Quality Sensor", "All of These", "Gas Sensor", "Moisture Sensor"], answer: "All of These" },
  { question: "To avoid aliasing, which type of filter is used?", options: ["Digital filter", "Anti-aliasing filter", "Aliasing filter", "Analog filter"], answer: "Anti-aliasing filter" },
  { question: "Which interface is used by the fingerprint sensor?", options: ["UART interface", "SPI interface", "COAP interface", "I2C interface"], answer: "UART interface" },
  { question: "Which of the following protocols is used by USART?", options: ["RS32", "4RS85", "RS232C", "All of the these"], answer: "All of the these" },
  { question: "Which sensors measure the heat energy produced by a source?", options: ["Temperature sensors", "Pressure sensors", "Humidity sensors", "Proximity sensors"], answer: "Temperature sensors" },
  { question: "Which of the following are included in actuators?", options: ["Valves, Switches", "Pumps, pistons", "Motors, gears", "All of the above"], answer: "All of the above" },
  { question: "Which type of touch sensor is used in cell phones?", options: ["Human sensor", "Capacitive touch sensor", "Follow sensor", "Resistive touch sensor"], answer: "Capacitive touch sensor" },
  { question: "What is a real example of a smart grid device in IoT?", options: ["Smart Meters", "Mobile phone", "Smart Speaker", "Television"], answer: "Smart Meters" },
  { question: "A microprocessor works using which type of digits?", options: ["1 / 1", "0 and 1", "0 / 0", "All of the above"], answer: "0 and 1" },
  { question: "What is the correct frequency for the Galileo Gen 2 board?", options: ["450 MHz", "300 MHz", "400 MHz", "250 MHz"], answer: "400 MHz" },
  { question: "What are the characteristics of RISC?", options: ["Pipelining", "Hardwired control", "Instructions executes in one clock cycle", "All of the above"], answer: "All of the above" },
  { question: "Which microcontroller is used in Arduino UNO prototyping board?", options: ["ATmega328p", "ATmega328m", "ATmega2560", "ATmega356p"], answer: "ATmega328p" },
  { question: "What is the full form of GPIO?", options: ["General Purpose Input Output Pins", "General Purpose Input Output Processor", "General Purpose Interested Old People", "General Purpose Inner Outer Propeller"], answer: "General Purpose Input Output Pins" },
  { question: "Which symbol is used for modulo calculation in Arduino?", options: ["%", "@", "$", "#"], answer: "%" },
  { question: "In which year was Arduino introduced?", options: ["1998", "2005", "2006", "2004"], answer: "2005" },
  { question: "Electricity sensors convert light rays into electrical signals.", options: ["False", "May be", "True", "Can't say"], answer: "False" },
  { question: "_______ actuators use pressurized oil that is incompressible?", options: ["Hydraulic", "Pneumatic", "Both (a) and (b)", "None of these"], answer: "Hydraulic" },
  { question: "A capacitor blocks AC and allows DC to pass through.", options: ["False", "Cant say", "True", "May be"], answer: "True" },
  { question: "What is the full form of SISO?", options: ["Single Input Single Output", "Single Input Some Output", "Some Input Single Output", "Some Input Some Output"], answer: "Single Input Single Output" },
  { question: "8051 Microcontroller is used in which of the following fields?", options: ["Medical Equipment", "Defense System", "Aeronautical and space", "All of the above"], answer: "All of the above" },
  { question: "What is the full form of RISC (Q.53)?", options: ["Reduce Instruction Set Computer", "ROM Instruction Set Computer", "Retrive Instruction Signal Computer", "Retrive Instruction Set Computer"], answer: "Reduce Instruction Set Computer" },
  { question: "Which touchscreen is made of a glass overlay?", options: ["Resistive Touchscreen", "APR", "SAW", "Capacitive Touchscreen"], answer: "Resistive Touchscreen" },
  { question: "_______ sensors provide digital outputs that can be directly connected to a digital controller.", options: ["Analog", "Digital", "None of these", "Both (a) and (b)"], answer: "Digital" },
  { question: "Which of the following is not included in an actuator?", options: ["Piston", "Gear", "Controller", "Motors"], answer: "Controller" },
  { question: "What is the full form of AVR?", options: ["Analog Virtual Reduction", "Alf-Egil Bogen Vegard Wollan Risc", "Analog Vegard Risc", "Analog Vegard Reduction"], answer: "Alf-Egil Bogen Vegard Wollan Risc" },
  { question: "Is a sensor an output device?", options: ["False", "May be", "Cant say", "True"], answer: "False" },
  { question: "What is the full form of PIC?", options: ["Programmable Integrated Circuit", "Program Interface Controller", "Programmable Interface Controller", "Program Integrated Circuit"], answer: "Programmable Interface Controller" },
  { question: "Which type of sensor is used in mobile phones?", options: ["Capacitive touch sensor", "Temperature sensor", "Weight sensor", "Humidity sensor"], answer: "Capacitive touch sensor" },
  { question: "Which symbol is used to calculate modulo in Arduino (Q.61)?", options: ["% (percentage)", "# (hash)", "$ (dollar)", "! (not equal)"], answer: "% (percentage)" },
  { question: "What is the meaning of 'p' in Atmega328p?", options: ["Picopower", "Process", "Pins", "Pixels"], answer: "Picopower" },
  { question: "Global Sensor Network is built for what purpose?", options: ["Reducing cost and time for development", "Increasing cost and decreasing time for development", "Reducing cost and increasing time for development", "Increasing cost and increasing time for development"], answer: "Reducing cost and time for development" },
  { question: "Does Arduino IDE provide an environment?", options: ["True", "May be True or False", "None of the Above", "False"], answer: "True" },
  { question: "What is ESP8266?", options: ["WIFI module", "Board", "USB cable", "Sensor"], answer: "WIFI module" },
  { question: "Which device consists of two different metals connected at two points?", options: ["Thermocouple", "Thermistor", "Semiconductor based sensor", "Resistance Thermometer"], answer: "Thermocouple" },
  { question: "The smallest difference that a sensor can detect is called?", options: ["Resolution", "Accuracy", "Scale", "Precision"], answer: "Resolution" },
  { question: "How many types of failures are there in capacitive type humidity sensors?", options: ["3", "2", "6", "4"], answer: "4" },
  { question: "When the microcontroller performs arithmetic operations, which register's flag bits are affected?", options: ["PSW", "DPTR", "SP", "PC"], answer: "PSW" },
  { question: "How many flags are there in the 8085 Microprocessor?", options: ["5", "15", "12", "9"], answer: "5" },
  { question: "What is DHT11?", options: ["Humidity Sensor", "Microprocessor", "Switching Device", "Motion Sensor"], answer: "Humidity Sensor" },
  { question: "Which of the following is not an actuator?", options: ["Shutter doors", "DC Motor", "Relay", "Stepper Motor"], answer: "Shutter doors" },
  { question: "Is Microcontroller the brain of IoT devices?", options: ["True", "May be True or False", "False", "None of the Above"], answer: "True" },
  { question: "Which of the following is false about microcontrollers?", options: ["Its power consumption is high because it has to control the entire system.", "Microcontrollers are used to execute a single task within an application.", "It is built with CMOS technology.", "It consists of CPU, RAM, ROM, I/O ports."], answer: "Its power consumption is high because it has to control the entire system." },
  { question: "What is the main function of a sensor?", options: ["Track & transfer data to processor", "Activate response", "Separate physical parameters", "Move a robotic arm"], answer: "Track & transfer data to processor" },
  { question: "Sensor generates an output signal based on what?", options: ["Input", "None of These", "Physical", "Data"], answer: "Physical" },
  { question: "Which of the following is an example of a 16-bit microcontroller?", options: ["8096 Microcontroller", "8031 Microcontroller", "None of the above", "8051 Microcontroller"], answer: "8096 Microcontroller" },
  { question: "How many pins are there in 8085 Microprocessor?", options: ["40", "35", "45", "30"], answer: "40" },
  { question: "What is used in IoT devices to capture data from the physical world?", options: ["Sensors", "Microcontrollers", "Actuators", "Microprocessors"], answer: "Sensors" },
  { question: "What is the use of the IR sensor?", options: ["Object Detection", "Humidity Detection", "Image Processing", "GPS"], answer: "Object Detection" },
  { question: "Arduino Uno is the most popular type of Arduino board?", options: ["Cant say", "True", "False", "May be"], answer: "True" },
  { question: "Almost all statements written in the Arduino language must end with?", options: ["Semicolon (;)", "Full stop (.)", "Colon (:)", "Comma (,)"], answer: "Semicolon (;)" },
  { question: "To easily interface add-on modules with Arduino, we can use?", options: ["Arduino shields", "Other high-end Arduino boards", "General PCB", "Connectivity circuit boards"], answer: "Arduino shields" },
  { question: "Secure digital card application uses which of the following protocols?", options: ["MQTT", "SPI", "HTTPS", "XMPP"], answer: "SPI" },
  { question: "All code in an Arduino sketch is processed from Arduino in which order?", options: ["Top to bottom", "Any order", "Bottom to top", "None of these"], answer: "Top to bottom" },
  { question: "The following database is recommended for unstructured data for IoT applications?", options: ["Mongo DB", "None of the above", "Microsoft SQL", "Postgres SQL"], answer: "Mongo DB" },
  { question: "Arduino is introduced by _______?", options: ["Massimo Banzi", "Dennis Ritchie", "James Gosling", "Tim Berners-Lee"], answer: "Massimo Banzi" },
  { question: "Which symbol is used in Arduino to calculate modulo?", options: ["%", "$", "!", "#"], answer: "%" },
  { question: "How many digital pins does a UNO board have?", options: ["14", "16", "10", "8"], answer: "14" },
  { question: "Which is the first board to use a microcontroller with built-in USB?", options: ["Leonardo", "UNO", "RedBoard", "LilyPad"], answer: "Leonardo" },
  { question: "How many types of Arduinos do we have?", options: ["8", "6", "14", "1"], answer: "8" },
  { question: "Which language is the Arduino IDE written in?", options: ["JavaScript", "C++", "C", "Both A & D"], answer: "Both A & D" },
  { question: "Which microcontroller is used in the Arduino UNO prototyping board?", options: ["ATmega328p", "ATmega2560", "ATmega328m", "None"], answer: "ATmega328p" },
  { question: "Which of the following is not an application of IoT?", options: ["Arduino", "Wearables", "Smart Grid", "Smart City"], answer: "Arduino" },
  { question: "The setup() defines?", options: ["Pin functionality using the pinMode function", "Initialize classes and variables", "Initial state of pins", "All of the above"], answer: "All of the above" },
  { question: "Some of the compile errors are?", options: ["Missing variable initialization", "Misspellings & wrong capitalizations", "Missing semicolons or parentheses", "All of the above"], answer: "All of the above" },
  { question: "Traditional operating systems such as Windows and iOS are made for IoT applications?", options: ["True", "False", "Both", "None"], answer: "False" },
  { question: "The SPI pins are?", options: ["pins 10 (SS), 11", "Both (a) and (b)", "None of these", "12 (MISO), 13 (SCK) (MOSI)"], answer: "Both (a) and (b)" },
  { question: "Which of the following statements are true about serial communication?", options: ["Can be either setup() and loop ()", "Only setup ()", "Only loop()", "setup() loop()"], answer: "Can be either setup() and loop ()" },
  { question: "What are the advantages of Arduino?", options: ["Easy to learn", "Many third-party libraries", "Huge community", "All of the above"], answer: "All of the above" },
];
const useTimer = (initialTime: number, onEnd: () => void) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
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

const M4PYQ2025: React.FC = () => {
  const TOTAL = questions.length; const DURATION = TOTAL * 60;
  const [screen, setScreen] = useState<"home" | "quiz" | "result">("home");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<(string | null)[]>(Array(TOTAL).fill(null));
  const [showNav, setShowNav] = useState(false);
  const handleEnd = useCallback(() => setScreen("result"), []);
  const timer = useTimer(DURATION, handleEnd);
  const score = selected.reduce((acc, ans, i) => acc + (ans === questions[i].answer ? 1 : 0), 0);
  const attempted = selected.filter((a) => a !== null).length;
  const percentage = Math.round((score / TOTAL) * 100);

  const startQuiz = () => { setSelected(Array(TOTAL).fill(null)); setCurrent(0); timer.reset(DURATION); timer.start(); setScreen("quiz"); };
  const next = () => setCurrent((c) => Math.min(c + 1, TOTAL - 1));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const goTo = (i: number) => { setCurrent(i); setShowNav(false); };
  const submitQuiz = () => { timer.pause(); setScreen("result"); };

  if (screen === "home") return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8" style={{ backgroundColor: "#0f172a" }}>
      <div className="max-w-lg w-full rounded-3xl shadow-2xl p-6 sm:p-8 text-center space-y-5" style={{ backgroundColor: "#1e293b", border: "2px solid #facc15" }}>
        <div className="inline-block text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest" style={{ backgroundColor: "#facc15", color: "#0f172a" }}>O Level M4-R5</div>
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight" style={{ color: "#facc15" }}>M4-R5 PYQ<br /><span style={{ color: "#ffffff" }}>Jan 2025</span></h1>
        <p style={{ color: "#d1d5db", fontSize: "14px" }}>{TOTAL} MCQ Questions • {TOTAL} Minutes • Instant Result</p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {[{ val: String(TOTAL), label: "Questions" }, { val: `${TOTAL} min`, label: "Duration" }, { val: "+1", label: "Per Correct" }, { val: "0", label: "Negative Mark" }].map((item, idx) => (
            <div key={idx} className="rounded-xl p-4" style={{ backgroundColor: "#0f172a", border: "1px solid #334155" }}><p className="font-bold text-xl" style={{ color: "#facc15" }}>{item.val}</p><p style={{ color: "#9ca3af" }}>{item.label}</p></div>
          ))}
        </div>
        <button onClick={startQuiz} className="w-full font-bold py-4 rounded-2xl text-lg transition-all active:scale-95" style={{ backgroundColor: "#facc15", color: "#0f172a", boxShadow: "0 8px 30px rgba(250,204,21,0.3)" }}>🚀 Attempt Mock Test</button>
        <button onClick={() => window.open("/pdfs/m4-100-question.pdf", "_blank")} className="block w-full font-bold py-3 rounded-2xl text-base" style={{ border: "2px solid #facc15", color: "#facc15", backgroundColor: "transparent" }}>📄 View PDF</button>
      </div>
    </div>
  );

  if (screen === "result") {
    const getGrade = () => {
      if (percentage >= 90) return { label: "Excellent! 🏆", color: "#22c55e" };
      if (percentage >= 70) return { label: "Great Job! 🎯", color: "#facc15" };
      if (percentage >= 50) return { label: "Good Effort! 💪", color: "#f97316" };
      return { label: "Keep Practicing! 📚", color: "#ef4444" };
    };
    const grade = getGrade();
    return (
      <div className="min-h-screen px-4 py-6" style={{ backgroundColor: "#0f172a" }}>
        <div className="max-w-2xl mx-auto space-y-5">
          <div className="rounded-2xl p-6 sm:p-8 text-center space-y-4" style={{ backgroundColor: "#1e293b", border: "2px solid #facc15" }}>
            <h2 className="text-2xl font-bold text-white">Quiz Completed!</h2>
            <p className="text-3xl font-extrabold" style={{ color: grade.color }}>{grade.label}</p>
            <div className="relative w-36 h-36 mx-auto">
              <svg className="w-full h-full" viewBox="0 0 120 120" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="60" cy="60" r="52" fill="none" stroke="#334155" strokeWidth="10" />
                <circle cx="60" cy="60" r="52" fill="none" stroke="#facc15" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${(percentage / 100) * 327} 327`} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center"><span className="text-3xl font-extrabold text-yellow-400">{percentage}%</span><span className="text-xs text-gray-400">Score</span></div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-xl p-3" style={{ backgroundColor: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.4)" }}><p className="font-bold text-xl text-green-500">{score}</p><p className="text-gray-300">Correct</p></div>
              <div className="rounded-xl p-3" style={{ backgroundColor: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.4)" }}><p className="font-bold text-xl text-red-500">{attempted - score}</p><p className="text-gray-300">Wrong</p></div>
              <div className="rounded-xl p-3" style={{ backgroundColor: "rgba(148,163,184,0.1)", border: "1px solid rgba(148,163,184,0.3)" }}><p className="font-bold text-xl text-white">{TOTAL - attempted}</p><p className="text-gray-300">Skipped</p></div>
            </div>
          </div>
          <div className="rounded-2xl p-5 space-y-4" style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}>
            <h3 className="text-lg font-bold text-yellow-400">📋 Answer Review</h3>
            <div className="space-y-3 overflow-y-auto" style={{ maxHeight: "55vh" }}>
              {questions.map((q, i) => (
                <div key={i} className="p-4 rounded-xl border" style={{ backgroundColor: "rgba(71,85,105,0.08)", borderColor: selected[i] === q.answer ? "rgba(34,197,94,0.5)" : selected[i] === null ? "#475569" : "rgba(239,68,68,0.5)" }}>
                  <p className="text-sm font-medium text-gray-200"><span className="text-yellow-400 font-bold">Q{i + 1}.</span> {q.question}</p>
                  <div className="flex flex-wrap gap-2 text-xs mt-2">
                    <span className="px-2 py-1 rounded-full" style={{ backgroundColor: selected[i] === q.answer ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)", color: selected[i] === q.answer ? "#22c55e" : "#ef4444" }}>Your: {selected[i] || "Skipped"}</span>
                    {selected[i] !== q.answer && <span className="px-2 py-1 rounded-full bg-green-900/40 text-green-500">✓ {q.answer}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3"><button onClick={startQuiz} className="flex-1 font-bold py-4 rounded-2xl bg-yellow-400 text-slate-900">🔄 Retry</button><button onClick={() => setScreen("home")} className="flex-1 font-bold py-4 rounded-2xl border-2 border-yellow-400 text-yellow-400 bg-transparent">🏠 Home</button></div>
        </div>
      </div>
    );
  }
  const q = questions[current];
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0f172a" }}>
      <div className="sticky top-0 z-30 px-4 py-3 border-b border-slate-700 bg-slate-800/95 backdrop-blur-md">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <button onClick={() => setShowNav(!showNav)} className="flex items-center gap-2 font-bold text-sm px-3 py-2 rounded-xl bg-yellow-400/15 text-yellow-400 border border-yellow-400/30">
            Q{current + 1}/{TOTAL}
          </button>
          <div className="flex items-center gap-2 font-mono font-bold text-lg px-4 py-2 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">{timer.formatTime}</div>
          <button onClick={submitQuiz} className="font-bold text-sm px-4 py-2 rounded-xl bg-red-500 text-white border border-red-400">Submit</button>
        </div>
      </div>
      <div className="w-full h-1 bg-slate-800"><div className="h-full bg-yellow-400 transition-all duration-500" style={{ width: `${((current + 1) / TOTAL) * 100}%` }} /></div>
      
      {showNav && (
        <>
          <div className="fixed inset-0 z-40 bg-black/70" onClick={() => setShowNav(false)} />
          <div className="fixed left-0 top-0 bottom-0 z-50 overflow-y-auto p-5 space-y-4 bg-slate-800 border-r-2 border-yellow-400 w-[320px]">
            <div className="flex items-center justify-between"><h3 className="font-bold text-lg text-yellow-400">Navigator</h3><button onClick={() => setShowNav(false)} className="text-gray-400 text-2xl">✕</button></div>
            <div className="grid grid-cols-6 gap-2">
              {questions.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} className="w-10 h-10 rounded-lg text-sm font-bold border transition-all" style={{ backgroundColor: i === current ? "#facc15" : selected[i] !== null ? "rgba(34,197,94,0.2)" : "#0f172a", color: i === current ? "#0f172a" : selected[i] ? "#22c55e" : "#94a3b8", borderColor: i === current ? "#facc15" : "#475569" }}>{i + 1}</button>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="flex-1 flex items-start justify-center px-4 py-5">
        <div className="max-w-3xl w-full space-y-5">
          <div className="rounded-2xl p-6 bg-slate-800 border border-slate-700">
            <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4 bg-yellow-400/15 text-yellow-400">Question {current + 1} of {TOTAL}</span>
            <h2 className="text-lg sm:text-xl font-semibold text-white leading-relaxed">{q.question}</h2>
          </div>
          <div className="space-y-3">
            {q.options.map((opt, idx) => (
              <button key={idx} onClick={() => { const copy = [...selected]; copy[current] = opt; setSelected(copy); }} className="w-full text-left p-4 rounded-2xl transition-all flex items-center gap-4" style={{ backgroundColor: selected[current] === opt ? "rgba(250,204,21,0.12)" : "#111827", border: selected[current] === opt ? "2px solid #facc15" : "2px solid #334155", boxShadow: selected[current] === opt ? "0 4px 20px rgba(250,204,21,0.15)" : "none" }}>
                <span className="w-10 h-10 rounded-xl flex items-center justify-center font-bold" style={{ backgroundColor: selected[current] === opt ? "#facc15" : "#1e293b", color: selected[current] === opt ? "#0f172a" : "#d1d5db", border: selected[current] === opt ? "none" : "1px solid #475569" }}>{String.fromCharCode(65 + idx)}</span>
                <span className="text-sm sm:text-base" style={{ color: selected[current] === opt ? "#facc15" : "#e2e8f0", fontWeight: selected[current] === opt ? 600 : 400 }}>{opt}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 z-20 px-4 py-3 bg-slate-800/95 border-t border-slate-700">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          <button onClick={prev} disabled={current === 0} className="py-3 px-5 rounded-2xl font-bold bg-slate-700 text-white disabled:opacity-30">Prev</button>
          {selected[current] && <button onClick={() => { const copy = [...selected]; copy[current] = null; setSelected(copy); }} className="text-xs text-red-500 underline">Clear</button>}
          {current === TOTAL - 1 ? <button onClick={submitQuiz} className="py-3 px-5 rounded-2xl font-bold bg-green-500 text-white">Submit</button> : <button onClick={next} className="py-3 px-5 rounded-2xl font-bold bg-yellow-400 text-slate-900">Next</button>}
        </div>
      </div>
    </div>
  );
  export default M4PYQ2025;
