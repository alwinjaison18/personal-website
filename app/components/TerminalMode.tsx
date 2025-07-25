"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const commands: { [key: string]: string } = {
  help: "Available commands: about, skills, projects, contact, home, clear, help",
};

const TerminalMode = () => {
  const [visible, setVisible] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Play a short beep for feedback
  const playBeep = () => {
    try {
      const ctx = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = 440;
      osc.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch {
      // Audio API not supported
    }
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        setVisible((v) => !v);
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  // Beep on open/close
  useEffect(() => {
    if (visible) playBeep();
    else if (history.length > 0) playBeep();
  }, [visible]);

  useEffect(() => {
    if (visible) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [visible]);

  const handleCommand = () => {
    const cmd = input.trim().toLowerCase();
    if (cmd === "clear") {
      setHistory([]);
    } else if (
      ["about", "skills", "projects", "contact", "home"].includes(cmd)
    ) {
      setHistory((h) => [...h, `> ${cmd}`, `Navigating to ${cmd}...`]);
      window.location.hash = cmd === "home" ? "" : `#${cmd}`;
    } else {
      const output = commands[cmd] || `Command not found: ${cmd}`;
      setHistory((h) => [...h, `> ${cmd}`, output]);
    }
    setInput("");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col p-4 text-green-400 font-mono"
        >
          <div className="flex justify-end">
            <button
              onClick={() => setVisible(false)}
              aria-label="Close terminal"
              className="text-white"
            >
              <FiX size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {history.map((line, idx) => (
              <div key={idx} className="whitespace-pre-wrap">
                {line}
              </div>
            ))}
          </div>
          <div className="mt-2 flex items-center">
            <span>&gt; </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCommand();
                }
              }}
              className="bg-transparent focus:outline-none flex-1 text-green-400"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalMode;
