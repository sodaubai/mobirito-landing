"use client";
import { useState, useRef, useEffect } from "react";

export default function FaqDetails({ question, children, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open, children]);

  return (
    <div className={`faq-item ${open ? "faq-item--open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)} type="button">
        <span>{question}</span>
        <span className={`faq-icon ${open ? "faq-icon--open" : ""}`}>+</span>
      </button>
      <div className="faq-answer" style={{ maxHeight: open ? height + "px" : "0px" }}>
        <div ref={contentRef} className="faq-answer-inner">{children}</div>
      </div>
    </div>
  );
}
