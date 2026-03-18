"use client";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "vi", label: "VI", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "en", label: "EN", name: "English", flag: "🇬🇧" },
  { code: "ja", label: "JP", name: "日本語", flag: "🇯🇵" },
];

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(languages[0]);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="lang-selector" ref={ref}>
      <button className="lang-btn" onClick={() => setOpen(!open)} aria-label="Select language">
        <span className="lang-flag">{current.flag}</span>
        <span className="lang-code">{current.label}</span>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{marginLeft:4}}>
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className="lang-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`lang-option${lang.code === current.code ? " active" : ""}`}
              onClick={() => { setCurrent(lang); setOpen(false); }}
            >
              <span className="lang-flag">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
