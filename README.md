# GhostTerminal 🧑‍💻

A lightweight, movie-style "hacker terminal" web app built with HTML, CSS, and JavaScript. Type anything and watch cinematic code snippets stream to the screen in real time — like you’re hacking into the mainframe.

🌐 [Live Demo](https://kayvour.github.io/ghost-terminal/)  

---

## 📝 What It Does

GhostTerminal is a terminal-style interface that:

- Mimics the look and feel of a green-on-black hacker terminal
- Reacts to every keypress by displaying randomized, code-like output
- Gives off that *movie hacking scene* vibe for fun, portfolio, or aesthetic

---

## 🚀 Features

- 🧠 Boot-up sequence to simulate system initialization
- ⌨️ Typing triggers cinematic multi-line code snippets
- 🧾 Inline snippet definitions — no more dependency on `snippets.txt`
- 🧱 Snippet grouping for authentic block-based outputs
- 🔍 Fake command-line parsing (`help`, `ls`, `nmap`, `clear`, etc.)
- 🧪 Typing fallback: any gibberish triggers code output
- 🖥️ Terminal UI with glowing green-on-black theme and blinking cursor
- 🧵 No snippet repetition until all blocks are used
- 🎨 Matrix-style animated background with CRT-style glow
- ⚡ Auto-scroll on every new output

---

## 📁 Project Structure

```
ghostterminal/
├── index.html # Main HTML file
├── style.css # Terminal theme and effects
├── script.js # Handles typing logic and boot-up sequence
└── readme.md # Project documentation (you're reading it!)
```

---


## ⚙️ Getting Started

1. **Clone the repository:**
   git clone https://github.com/yourusername/ghostterminal.git
   cd ghostterminal

2. **Customize snippet output:**
   Open snippets.txt in any text editor.
   Each line is treated as one terminal output line.

   Example:
   ```
     function connectToServer(ip) {
    const socket = new WebSocket(ip);
   }
   sudo rm -rf /
   encryptPayload(payload);

3. **Preview locally:**
   Just open index.html in your browser. No backend needed.

---

## 💡How to Use
- Start typing anywhere on the page.
- Watch randomized, hacker-style output stream in real time.
- Add new lines to snippets.txt to customize your experience.

- Use for:
-- Developer portfolios
-- Interactive Easter eggs
-- Screensaver-style ambient experiences

## 🔮 Future Enhancements
- 🎧 Typing sound effects
- 🧠 Idle/auto-demo mode (auto-types code every few seconds)
- 🧪 Command-line parsing with basic fake commands (ls, cd, nmap)
- 🌗 Light/dark themes with toggle
- ⏳ Loading indicators or fake network delays

## 🤝 Contributing
Contributions are welcome! Feel free to:
- Fork the repo
- Add cool snippet lines
- Improve styling or animations
- Submit a pull request

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/kayvour/ghost-terminal/blob/main/LICENSE) file for details.

## 📬 Contact
Open an issue for feedback, feature requests, or collaboration ideas.
GhostTerminal is a small creative experiment built to bring a bit of cinematic hacker energy to your screen. Make it yours. Live fast. Type fake.
