// ✅ Class Quiz App: Full JavaScript Logic (excluding question data)

const storedResults = JSON.parse(localStorage.getItem("quizResults") || "[]");
const savedQuestions = {
  "7": [
    { q: "What does LAN stand for?", options: ["Local Area Network", "Long Area Network", "Light Area Network", "Low Area Network"], answer: 0 },
    { q: "What is a modem used for?", options: ["Modifying sound", "Connecting to the internet", "Printing documents", "Displaying graphics"], answer: 1 },
    { q: "Which of the following is a type of network?", options: ["LAN", "WAN", "MAN", "All of the above"], answer: 3 },
    { q: "Which device is used to route data in a network?", options: ["Router", "Printer", "Scanner", "Monitor"], answer: 0 },
    { q: "What does WWW stand for?", options: ["World Web Wide", "Wide World Web", "World Wide Web", "Web World Wide"], answer: 2 },
    { q: "Which application is used to create documents?", options: ["MS Word", "MS Excel", "MS PowerPoint", "Notepad"], answer: 0 },
    { q: "What is a cyber crime?", options: ["Crime using computers", "Physical robbery", "Traffic violation", "Breaking doors"], answer: 0 },
    { q: "Which of these is a search engine?", options: ["Google", "Excel", "PowerPoint", "Word"], answer: 0 },
    { q: "What file extension does an Excel file have?", options: [".docx", ".xlsx", ".pptx", ".txt"], answer: 1 },
    { q: "Which software is used to create slides?", options: ["MS PowerPoint", "MS Word", "MS Excel", "Paint"], answer: 0 },
    { q: "Which type of cable is commonly used in LAN?", options: ["Coaxial", "Twisted Pair", "Fiber Optic", "All of the above"], answer: 3 },
    { q: "PAN stands for?", options: ["Private Area Network", "Personal Area Network", "Primary Area Network", "Public Area Network"], answer: 1 },
    { q: "Where are emails stored online?", options: ["Server", "RAM", "Hard Disk", "Printer"], answer: 0 },
    { q: "Which is a feature of Google Drive?", options: ["Online storage", "Offline only", "Game playing", "Movie streaming"], answer: 0 },
    { q: "Which function adds numbers in Excel?", options: ["=SUM()", "=ADD()", "=PLUS()", "=COUNT()"], answer: 0 },
    { q: "What does 'B' in Mbps stand for?", options: ["Bits", "Bytes", "Binary", "Bandwidth"], answer: 0 },
    { q: "Which is not a browser?", options: ["Chrome", "Firefox", "Excel", "Safari"], answer: 2 },
    { q: "Which shortcut saves a document?", options: ["Ctrl+S", "Ctrl+O", "Ctrl+C", "Ctrl+P"], answer: 0 },
    { q: "Which tool lets you draw in PowerPoint?", options: ["Pen Tool", "Brush Tool", "Draw Tool", "Sketch Tool"], answer: 2 },
    { q: "What is phishing?", options: ["A type of cyber attack", "A type of fish", "A browser tool", "A password"], answer: 0 },
    { q: "Which is a multimedia component?", options: ["Image", "Video", "Audio", "All of these"], answer: 3 },
    { q: "Which command is used to underline text in Word?", options: ["Ctrl+U", "Ctrl+B", "Ctrl+I", "Ctrl+L"], answer: 0 },
    { q: "Which device connects multiple networks?", options: ["Router", "Modem", "Switch", "Hub"], answer: 0 },
    { q: "What type of network is used in cities?", options: ["MAN", "LAN", "PAN", "VAN"], answer: 0 },
    { q: "Where are files stored in Google Drive?", options: ["Cloud", "Local Drive", "CD", "Hard Disk"], answer: 0 },
    { q: "Which app is used for video presentations?", options: ["PowerPoint", "Excel", "Word", "Paint"], answer: 0 },
    { q: "What does IP stand for?", options: ["Internet Protocol", "Internal Port", "Internet Port", "International Protocol"], answer: 0 },
    { q: "Which email provider is by Google?", options: ["Gmail", "Yahoo", "Outlook", "Rediffmail"], answer: 0 },
    { q: "Which is an output device?", options: ["Monitor", "Keyboard", "Mouse", "Scanner"], answer: 0 },
    { q: "What does Mbps measure?", options: ["Internet speed", "Storage", "Display size", "Resolution"], answer: 0 },
    { q: "What is a virus?", options: ["Malicious software", "Antivirus", "Hardware", "Router"], answer: 0 },
    { q: "What does RAM stand for?", options: ["Random Access Memory", "Read Access Memory", "Real-time Access Memory", "Run After Memory"], answer: 0 },
    { q: "Which software is used for calculations?", options: ["Excel", "Word", "PowerPoint", "Photoshop"], answer: 0 },
    { q: "Which menu shows 'New Slide' option in PowerPoint?", options: ["Home", "Insert", "Design", "File"], answer: 0 },
    { q: "What is the shortcut to print?", options: ["Ctrl+P", "Ctrl+S", "Ctrl+Z", "Ctrl+V"], answer: 0 },
    { q: "Which device connects to the internet via ISP?", options: ["Modem", "Switch", "Monitor", "Mouse"], answer: 0 },
    { q: "Which is a threat to computers?", options: ["Virus", "Keyboard", "Mouse", "Monitor"], answer: 0 },
    { q: "Which of these is not a search engine?", options: ["Yahoo", "Google", "Facebook", "Bing"], answer: 2 },
    { q: "What is the function of a firewall?", options: ["Security", "Drawing", "Calculations", "Formatting"], answer: 0 }
  ],

  "8": [
    { q: "What does WAN stand for?", options: ["Wide Area Network", "Wired Area Network", "Wireless Area Network", "Web Area Network"], answer: 0 },
    { q: "Which one is not a network type?", options: ["LAN", "WAN", "VAN", "MAN"], answer: 2 },
    { q: "Which is a browser?", options: ["Edge", "Paint", "Excel", "Word"], answer: 0 },
    { q: "Search engines are used to?", options: ["Search information", "Paint pictures", "Create slides", "Write code"], answer: 0 },
    { q: "MS Word is used for?", options: ["Documents", "Calculations", "Slides", "Painting"], answer: 0 },
    { q: "Which of these is a multimedia file?", options: ["Video", "Text", "Spreadsheet", "Database"], answer: 0 },
    { q: "Google Drive provides?", options: ["Online storage", "Offline games", "Coding tools", "Painting software"], answer: 0 },
    { q: "What device is used to share internet?", options: ["Router", "Speaker", "Fan", "Switch"], answer: 0 },
    { q: "Phishing involves?", options: ["Stealing data", "Fixing bugs", "Updating apps", "None"], answer: 0 },
    { q: "Which file extension is used by Word?", options: [".docx", ".xlsx", ".pptx", ".exe"], answer: 0 },
    { q: "Which of the following is an input device?", options: ["Mouse", "Printer", "Monitor", "Speaker"], answer: 0 },
    { q: "Shortcut to copy text in Word?", options: ["Ctrl+C", "Ctrl+X", "Ctrl+V", "Ctrl+S"], answer: 0 },
    { q: "Which port is used for internet?", options: ["Ethernet", "HDMI", "VGA", "USB"], answer: 0 },
    { q: "MS Excel is mainly used for?", options: ["Spreadsheets", "Presentations", "Documents", "Browsing"], answer: 0 },
    { q: "Which symbol is used to start a formula in Excel?", options: ["=", "+", "*", "%"], answer: 0 },
    { q: "Where is the Start button located in Windows?", options: ["Bottom left", "Top right", "Center", "Top left"], answer: 0 },
    { q: "Which is a storage device?", options: ["Hard Disk", "Mouse", "Monitor", "Printer"], answer: 0 },
    { q: "Which one is not an output device?", options: ["Keyboard", "Printer", "Speaker", "Monitor"], answer: 0 },
    { q: "Firewall is used for?", options: ["Security", "Printing", "Storage", "Typing"], answer: 0 },
    { q: "Shortcut to open a new tab in browser?", options: ["Ctrl+T", "Ctrl+N", "Ctrl+W", "Ctrl+O"], answer: 0 },
    { q: "Which one is a cloud platform?", options: ["Google Drive", "Paint", "VLC", "Excel"], answer: 0 },
    { q: "Which is used for video conferencing?", options: ["Zoom", "Excel", "Word", "Paint"], answer: 0 },
    { q: "The brain of the computer is?", options: ["CPU", "Mouse", "Monitor", "Keyboard"], answer: 0 },
    { q: "Which is a system software?", options: ["Operating System", "MS Word", "Excel", "PowerPoint"], answer: 0 },
    { q: "What is the full form of HTML?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Markdown Language", "None"], answer: 0 },
    { q: "What does ISP stand for?", options: ["Internet Service Provider", "Internal Software Program", "Internet Signal Port", "Information Sharing Protocol"], answer: 0 },
    { q: "Shortcut for cut?", options: ["Ctrl+X", "Ctrl+C", "Ctrl+V", "Ctrl+Z"], answer: 0 },
    { q: "Which software is used for drawing?", options: ["Paint", "Word", "Excel", "Outlook"], answer: 0 },
    { q: "What is a spreadsheet used for?", options: ["Data entry and calculations", "Drawing", "Watching movies", "Programming"], answer: 0 },
    { q: "Which device helps us hear sound?", options: ["Speaker", "Mouse", "Monitor", "CPU"], answer: 0 },
    { q: "What is the purpose of antivirus?", options: ["Protect computer from threats", "Paint", "Speed up games", "Make slides"], answer: 0 }
  ]
};

localStorage.setItem("quizQuestions", JSON.stringify(savedQuestions));


const schoolTitle = "PM SHRI JAWAHAR NAVODAYA VIDYALAYA, KANPUR DEHAT";
const app = document.getElementById("app");

let currentStudent = null;
let currentQuiz = [];
let currentClass = null;
let currentIndex = 0;
let selectedAnswers = [];
let revisitLater = [];
let timer = null;
let timeLeft = 60;

function renderMenu() {
  app.innerHTML = `
    <h1>${schoolTitle}</h1>
    <h2>Welcome to the Computer Quiz</h2>
    <form id="studentForm">
      <label>Roll Number</label>
      <input type="text" id="roll" required><br>
      <label>Name</label>
      <input type="text" id="name" required><br>
      <select id="class">
        <option value="7">Class 7</option>
        <option value="8">Class 8</option>
      </select><br>
      <button type="submit">Start Quiz</button>
    </form>
    <button onclick="renderTeacherLogin()">Teacher Login</button>
  `;
  document.getElementById("studentForm").onsubmit = startQuiz;
}

function startQuiz(e) {
  e.preventDefault();
  const roll = document.getElementById("roll").value;
  const name = document.getElementById("name").value;
  const cls = document.getElementById("class").value;
  if (storedResults.find(r => r.roll === roll && r.class === cls)) {
    alert("You have already attempted the quiz.");
    return;
  }
  currentStudent = { roll, name, class: cls };
  currentClass = cls;
  currentQuiz = savedQuestions[cls] || [];
  if (!currentQuiz.length) return alert("No quiz found for your class");
  selectedAnswers = new Array(currentQuiz.length).fill(null);
  revisitLater = new Array(currentQuiz.length).fill(false);
  currentIndex = 0;
  timeLeft = 60;
  renderQuestion();
  startTimer();
  document.onkeydown = handleKeyNavigation;
}
  if (e.key === "ArrowLeft") prevQ();
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
      clearInterval(timer);
      if (currentIndex < currentQuiz.length - 1) {
        currentIndex++;
        timeLeft = 60;
        renderReview();
      }
    }
  }, 1000);
}

function renderQuestion() {
  const q = currentQuiz[currentIndex];
  if (!q) return;
  app.innerHTML = `
    <div id="timer">Time Left: ${timeLeft}s</div>
    <h2>Q${currentIndex + 1}/${currentQuiz.length}: ${q.q}</h2>
    ${q.options.map((opt, i) => `
      <button onclick="selectOption(${i})" class="${selectedAnswers[currentIndex] === i ? 'selected' : ''}">${opt}</button><br>
    `).join('')}
    <label>
      <input type="checkbox" onchange="toggleRevisit(${currentIndex})" ${revisitLater[currentIndex] ? 'checked' : ''}>
      Revisit Later
    </label>
    <div>
      <button onclick="prevQ()">← Prev</button>
      <button onclick="nextQ()">Next →</button>
      <button onclick="renderReview()">Submit</button>
    </div>
        renderQuestion();
        startTimer();
      } else {
  `;
}

function toggleRevisit(index) {
  revisitLater[index] = !revisitLater[index];
}

function selectOption(i) {
  selectedAnswers[currentIndex] = i;
  renderQuestion();
}

function nextQ() {
  if (currentIndex < currentQuiz.length - 1) {
    currentIndex++;
    timeLeft = 60;
    renderQuestion();
  }
}

function prevQ() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

function renderReview() {
  const pending = revisitLater.reduce((acc, mark, i) => mark ? [...acc, i + 1] : acc, []);
  if (pending.length > 0 && !confirm(`You marked questions ${pending.join(', ')} for revisit. Are you sure you want to submit?`)) return;
  clearInterval(timer);
  const score = currentQuiz.reduce((s, q, i) => s + (q.answer === selectedAnswers[i] ? 1 : 0), 0);
  const result = { ...currentStudent, answers: selectedAnswers, score, total: currentQuiz.length, time: new Date().toLocaleString() };
    const timerEl = document.getElementById("timer");
    if (timerEl) timerEl.innerText = `Time Left: ${timeLeft}s`;
    if (timeLeft <= 0) {
  storedResults.push(result);
  localStorage.setItem("quizResults", JSON.stringify(storedResults));
  const quotes = [
    "Keep pushing forward, you're doing great!",
    "Every expert was once a beginner.",
    "Believe in yourself and all that you are.",
    "Great job! Learning never stops.",
    "You are capable of amazing things."
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

function handleKeyNavigation(e) {
  if (e.key === "ArrowRight") nextQ();
  app.innerHTML = `
    <div class="result animated">
      <h2>Review your answers</h2>
      ${currentQuiz.map((q, i) => `
        <p><strong>Q${i + 1}:</strong> ${q.q}</p>
        <p>Your Answer: ${q.options[selectedAnswers[i]] || "Not Answered"}</p>
        <p>Correct Answer: ${q.options[q.answer]}</p>
        <hr>
      `).join('')}
      <h3>Your Score: ${score}/${currentQuiz.length}</h3>
      <blockquote>“${quote}”</blockquote>
      <button onclick="renderMenu()">Back to Menu</button>
    </div>
  `;
  document.onkeydown = null;
}
console.log("JS loaded");
renderMenu();
