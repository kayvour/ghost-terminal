# GhostTerminal 🧑‍💻

A lightweight, movie-style "hacker terminal" web app built with HTML, CSS, and JavaScript. Type anything and watch cinematic code snippets stream to the screen in real time — like you’re hacking into the mainframe.

![image](https://github.com/user-attachments/assets/1e1bcf32-e230-4ff0-a251-fcb00863b43b)

🌐 [Live Demo](https://kayvour.github.io/ghost-terminal/)  

---

## 📝 What It Does

GhostTerminal is a terminal-style interface that:

- Mimics the look and feel of a green-on-black hacker terminal
- Reacts to every keypress by displaying randomized, code-like output
- Features real terminal commands with history navigation
- Gives off that *movie hacking scene* vibe for fun, portfolio, or aesthetic
- Works seamlessly on both desktop and mobile devices

---

## 🚀 Features

**Core Terminal Experience**
- 🧠 Boot-up sequence to simulate system initialization
- ⌨️ Typing triggers cinematic multi-line code snippets
- 🧾 Inline snippet definitions
- 🧱 Snippet grouping for authentic block-based outputs
- 🖥️ Terminal UI with glowing green-on-black theme and blinking cursor
- 🧵 Smart snippet rotation to avoid repetition
- 🎨 Matrix-style animated background with CRT-style glow
- ⚡ Auto-scroll with performance optimization

**Enhanced Command System**
- 🔍 Real terminal commands: help, ls, ps, whoami, pwd, cat, nmap, netstat, clear, exit
- ⬆️ Command history: Use arrow keys (↑/↓) to navigate previous commands
- 🎯 Smart command detection: Type commands anywhere for instant execution
- 💬 Command feedback: See exactly what commands you're running
- 🔧 Error handling: Proper "command not found" messages

**Mobile & Performance**
- 📱 Full mobile support: Touch-friendly controls and responsive design
- 🎛️ Mobile control bar: Quick access to common commands on touch devices
- 👆 Tap-to-code: Special mobile overlay for generating code snippets
- ⚡ Performance optimized: Automatic cleanup prevents memory bloat (500 line limit)
- 🚀 Smooth scrolling: Uses RequestAnimationFrame for 60fps performance

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

2. **Preview locally:**
   Simply open index.html in your browser. No backend needed.

3. **Customize (optional):**
   - Edit the codeSnippets array in script.js to add your own code blocks
   - Modify commands object to add new terminal commands
   - Adjust MAX_LINES constant to change performance limits

---

## 💡 How to Use
**Desktop Experience**
- Type anywhere on the page to generate code output
- Use arrow keys (↑/↓) to navigate command history
- Type commands like help, ls, nmap for specific outputs
- Press Enter to execute the current command
- Use Backspace to edit your input

**Mobile Experience**
- Tap the control buttons at the bottom for quick commands
- Tap "type code" to open the code generation overlay
- Tap the overlay to generate random code snippets
- Fully responsive design adapts to your screen size

## 🧰 Tech Stack
- 🖥️ HTML5 for markup
- 🎨 CSS3 for styling and glowing terminal effects
- ⚙️ JavaScript (Vanilla ES6) for interactivity and command logic
- 💡 No libraries or frameworks — just clean frontend code

## 🎯 Use Cases
- Developer portfolios: Add interactive terminal sections
- Landing pages: Create engaging "hacker" themed content
- Presentations: Live coding simulation without real code
- Easter eggs: Hidden terminal interfaces in web apps
- Screensavers: Ambient coding atmosphere
- Education: Demonstrate terminal concepts safely

## 🔮 Future Enhancements
- 🎧 Typing sound effects
- 🧠 Idle/auto-demo mode (auto-types code every few seconds)
- 🌗 Light/dark themes with toggle
- ⏳ Loading indicators or fake network delays
- 🎮 Interactive mode: Mini-games within the terminal
- 🎨 Customization UI: Visual theme and command editor

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
