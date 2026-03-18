"use client";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "vi", label: "VI", name: "Tiếng Việt" },
  { code: "en", label: "EN", name: "English" },
  { code: "ja", label: "JP", name: "日本語" },
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

  const chevron = (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{marginLeft:2}}>
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div className="lang-selector" ref={ref}>
      <button className="lang-btn" onClick={() => setOpen(!open)} type="button" aria-label="Select language">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        <span className="lang-code">{current.label}</span>
        {chevron}
      </button>
      {open && (
        <div className="lang-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              className={"lang-option" + (lang.code === current.code ? " active" : "")}
              onClick={() => { setCurrent(lang); setOpen(false); }}
            >
              <span className="lang-code">{lang.label}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
