"use client";
import { useState, useRef, useEffect } from "react";

const LANGS = [
  ["vi", "VI", "Tiếng Việt"],
  ["en", "EN", "English"],
  ["ja", "JP", "日本語"],
];

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div className="lang-selector" ref={ref}>
      <span className="lang-toggle" onClick={() => setOpen(!open)}>
        {LANGS[idx][1]}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
      {open && (
        <div className="lang-menu">
          {LANGS.map((lang, i) => (
            <div key={lang[0]} className={"lang-item" + (i === idx ? " selected" : "")} onClick={() => { setIdx(i); setOpen(false); }}>
              {lang[1]} <span className="lang-name">{lang[2]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
