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

  function pick(i) { setIdx(i); setOpen(false); }

  return (
    <div className="lang-selector" ref={ref}>
      <button className="lang-btn" onClick={() => setOpen(!open)} type="button">
        {LANGS[idx][1]}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {open && (
        <div className="lang-dropdown">
          {LANGS.map((lang, i) => (
            <div key={lang[0]} className={"lang-option" + (i === idx ? " active" : "")} onClick={() => pick(i)} role="button" tabIndex={0}>
              {lang[2]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
