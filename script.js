const content = document.getElementById('content');
const terminal = document.getElementById('terminal');
let codeSnippets = [];

// Boot-up text
const bootLines = [
  "Booting GhostTerminal...",
  "Loading system modules...",
  "Authenticating keys...",
  "Connection to proxy node established.",
  "Fetching secure shell...",
  "Ready.\n"
];

// Fetch code snippets from external text file
fetch('snippets.txt')
  .then(response => response.text())
  .then(text => {
    codeSnippets = text.split('\n').filter(line => line.trim() !== '');
  })
  .catch(error => {
    console.error("Failed to load snippets.txt:", error);
    codeSnippets = ["// Fallback: Could not load snippets"];
  });

// Display boot-up lines
window.addEventListener('load', () => {
  bootLines.forEach(line => {
    content.innerText += line + '\n';
  });
  terminal.scrollTop = terminal.scrollHeight;
});

// Append random snippet on any keypress
document.addEventListener('keydown', () => {
  if (codeSnippets.length === 0) return;

  const line = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
  content.innerText += line + '\n';
  terminal.scrollTop = terminal.scrollHeight;
});
