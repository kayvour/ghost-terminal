# GhostTerminal

A movie-style "hacker terminal" web app built with HTML, CSS, and JavaScript. Type anything and watch cinematic code snippets stream to the screen in real time, like hacking into the mainframe.

![image](https://github.com/user-attachments/assets/1e1bcf32-e230-4ff0-a251-fcb00863b43b)

🌐 [Live Demo](https://kayvour.github.io/ghost-terminal/)  

---

## 📝 What It Does
- Mimics the look and feel of a green-on-black hacker terminal.
- Reacts to every keypress by displaying randomized, code-like output.
- Features real terminal commands with history navigation.
- Works seamlessly on both desktop and mobile devices.

---

## 🚀 Features
**Core Terminal Experience**
- 🧠 Boot-up sequence to simulate system initialization.
- ⌨️ Typing triggers multi-line code snippets.
- 🧾 Inline snippet definitions.
- 🧱 Snippet grouping for block based outputs.
- 🖥️ Terminal UI with glowing green-on-black theme and blinking cursor.
- 🧵 Smart snippet rotation to avoid repetition.
- ⚡ Auto-scroll with performance optimization

**Enhanced Command System**
- 🔍 Real terminal commands: help, ls, ps, whoami, pwd, cat, nmap, netstat, clear, exit.
- ⬆️ Command history: Use arrow keys (↑/↓) to navigate previous commands.
- 🎯 Smart command detection: Type commands anywhere for instant execution.
- 💬 Command feedback: See exactly what commands you're running.
- 🔧 Error handling: Proper "command not found" messages.

**Mobile & Performance**
- 📱 Full mobile support: Touch-friendly controls and responsive design.
- 🎛️ Mobile control bar: Quick access to common commands.
- 👆 Tap-to-code: Special mobile overlay for generating code snippets.
- ⚡ Performance optimized: Automatic cleanup prevents memory bloat (500 line limit).
- 🚀 Smooth scrolling: Uses RequestAnimationFrame for 60fps performance.

---

## ⚙️ Getting Started
1. **Clone the repository:**
   git clone https://github.com/yourusername/ghostterminal.git cd ghostterminal

2. **Preview locally:**
   Simply open index.html in your browser.

3. **Customize (optional):**
   - Edit the codeSnippets array in script.js to add your own code blocks
   - Modify commands object to add new terminal commands
   - Adjust MAX_LINES constant to change performance limits

---

## 💡 How to Use
**Desktop**
- Type anywhere on the page to generate code output.
- Use arrow keys (↑/↓) to navigate command history.
- Type commands like help for specific outputs.
- Press Enter to execute the current command.

**Mobile**
- Tap the control buttons at the bottom for quick commands.
- Tap "type code" to open the code generation overlay.
- Tap the overlay to generate random code snippets.

## 🧰 Tech Stack
- 🖥️ HTML5
- 🎨 CSS3
- ⚙️ JavaScript

## 🔮 Future Enhancements
- 🎧 Typing sound effects.
- 🧠 Idle/auto-demo mode (auto-types code every few seconds).
- 🌗 Light/dark themes with toggle
- ⏳ Loading indicators or fake network delays.

## 🤝 Contributing
Contributions are welcome! feel free to fork the repository and submit a pull request. For major changes, open an issue to discuss first.

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/kayvour/ghost-terminal/blob/main/LICENSE) file for details.
