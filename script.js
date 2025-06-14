const content = document.getElementById('content');
const terminal = document.getElementById('terminal');

let keyBuffer = '';
let lastIndex = -1;

const bootLines = [
  "Booting GhostTerminal...",
  "Loading system modules...",
  "Authenticating keys...",
  "Connection to proxy node established.",
  "Fetching secure shell...",
  "Ready.\n"
];

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
  ]
];

const commands = {
  help: [
    "Available commands:",
    "  help     - show this help",
    "  ls       - list fake files",
    "  nmap     - run simulated scan",
    "  clear    - clear terminal"
  ],
  ls: [
    "exploit.c",
    "payload.json",
    "injector.sh",
    "README.md"
  ],
  nmap: [
    "Starting Nmap 7.93 ( https://nmap.org )",
    "Scanning 127.0.0.1...",
    "Host is up (0.00012s latency).",
    "Not shown: 999 closed ports",
    "PORT     STATE SERVICE",
    "22/tcp   open  ssh",
    "80/tcp   open  http",
    "443/tcp  open  https",
    "Scan complete."
  ],
  clear: "__clear__"
};

// On load: boot lines
window.addEventListener('load', () => {
  bootLines.forEach(line => {
    content.innerText += line + '\n';
  });
  scrollToBottom();
});

// Keypress listener
document.addEventListener('keydown', (e) => {
  if (e.key.length === 1) {
    keyBuffer += e.key.toLowerCase();
    if (keyBuffer.length > 10) keyBuffer = keyBuffer.slice(-10);
  }

  for (let cmd in commands) {
    if (keyBuffer.endsWith(cmd)) {
      runCommand(cmd);
      keyBuffer = '';
      return;
    }
  }

  const block = getRandomBlock();
  block.forEach(line => {
    content.innerText += line + '\n';
  });
  scrollToBottom();
});

function getRandomBlock() {
  let index;
  do {
    index = Math.floor(Math.random() * codeSnippets.length);
  } while (index === lastIndex);
  lastIndex = index;
  return codeSnippets[index];
}

function runCommand(cmd) {
  const output = commands[cmd];
  if (output === "__clear__") {
    content.innerText = '';
    return;
  }
  output.forEach(line => {
    content.innerText += line + '\n';
  });
  scrollToBottom();
}

function scrollToBottom() {
  terminal.scrollTop = terminal.scrollHeight;
}
