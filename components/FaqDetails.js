"use client";
export default function FaqDetails({ question, children, defaultOpen }) {
  return (
    <details className="faq-item" open={defaultOpen || false}>
      <summary>{question}</summary>
      <div className="answer">{children}</div>
    </details>
  );
}
