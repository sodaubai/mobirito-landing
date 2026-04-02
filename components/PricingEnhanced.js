"use client";
import { useState, useEffect, useRef } from "react";

const FOOTNOTES = {
  "*(1)": "C\u00e1c c\u1ea3nh b\u00e1o d\u1ef1a tr\u00ean d\u1eef li\u1ec7u b\u1ea3n \u0111\u1ed3 th\u1eddi gian th\u1ef1c gi\u00fap h\u1ea1n ch\u1ebf t\u1ed1i \u0111a vi ph\u1ea1m giao th\u00f4ng t\u1ea1i Nh\u1eadt.",
  "*(2)": "Qu\u1ea3ng c\u00e1o \u0111\u01b0\u1ee3c t\u1ed1i \u01b0u \u0111\u1ec3 kh\u00f4ng g\u00e2y xao nh\u00e3n, \u01b0u ti\u00ean tr\u1ea3i nghi\u1ec7m l\u00e1i xe t\u1eadp trung.",
  "*(3)": "H\u1ec7 th\u1ed1ng \u0111\u1ec1 xu\u1ea5t th\u00f4ng minh d\u1ef1a tr\u00ean Vehicle Profile \u0111\u00e3 \u0111\u0103ng k\u00fd khi nhi\u00ean li\u1ec7u xu\u1ed1ng m\u1ee9c User-defined.",
  "*(4)": "Thi\u1ebft b\u1ecb h\u1ed7 tr\u1ee3 chu\u1ea9n ELM327.",
};

function Tooltip({ tag }) {
  const [show, setShow] = useState(false);
  return (
    <span className="fn-tooltip-wrap" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <span className="fn-tooltip-icon">{tag}</span>
      {show && <span className="fn-tooltip-bubble">{FOOTNOTES[tag]}</span>}
    </span>
  );
}

function FeatureText({ text }) {
  const fnMatch = text.match(/\*\(\d+\)$/);
  if (!fnMatch) return <span>{text}</span>;
  const clean = text.replace(fnMatch[0], "").trim();
  return <span>{clean} <Tooltip tag={fnMatch[0]} /></span>;
}

function PricingFeatureItem({ text, enabled }) {
  return (
    <li className={`pricing-feat-item ${!enabled ? "disabled" : ""}`}>
      <span className="pricing-feat-check">{enabled ? "\u2713" : "\u2717"}</span>
      <FeatureText text={text} />
    </li>
  );
}

function AnimatedPrice({ price, isYearly }) {
  const [display, setDisplay] = useState(price);
  const prevRef = useRef(price);

  useEffect(() => {
    if (prevRef.current === price) return;
    const from = parseInt(prevRef.current.replace(/[^\d]/g, "")) || 0;
    const to = parseInt(price.replace(/[^\d]/g, "")) || 0;
    if (from === to) { setDisplay(price); prevRef.current = price; return; }
    const prefix = price.match(/^[^\d]*/)?.[0] || "";
    const steps = 12;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const val = Math.round(from + (to - from) * (step / steps));
      setDisplay(prefix + val.toLocaleString("de-DE"));
      if (step >= steps) { clearInterval(interval); setDisplay(price); prevRef.current = price; }
    }, 30);
    return () => clearInterval(interval);
  }, [price]);

  return <div className="price">{display}</div>;
}


function PricingCard({ p, idx, isYearly }) {
  const isFeatured = p.is_featured;
  const isEarlyBird = idx === 2;
  const displayPrice = (isFeatured && isYearly) ? "\u00a59.800" : p.price;
  const displayPeriod = (isFeatured && isYearly) ? "M\u1ed7i n\u0103m" : p.billing_period;
  const features = p.features || [];

  return (
    <div className={`price-card ${isFeatured ? "featured" : ""} ${isEarlyBird ? "early-bird" : ""}`}>
      {isFeatured && <div className="recommended-badge">{"G\u1ee3i \u00fd"}</div>}
      <div className="price-card-top">
        <div className="plan-name">{p.plan_name}</div>
        {isFeatured ? <AnimatedPrice price={displayPrice} isYearly={isYearly} /> : <div className="price">{displayPrice}</div>}
        <div className="period">{displayPeriod}</div>
      </div>
      <ul className="features">
        {features.map((f, fi) => (
          <PricingFeatureItem key={f._uid || fi} text={f.text} enabled={f.enabled !== false} />
        ))}
      </ul>
      <div className="price-card-bottom">
        {isEarlyBird ? (
          <a href="/contact?issue=early-bird" className="btn btn-dark btn-sm pricing-cta">
            {p.cta_label}
          </a>
        ) : (
          <button className={`btn ${isFeatured ? "btn-primary" : "btn-dark"} btn-sm pricing-cta`}>
            {p.cta_label}
          </button>
        )}
      </div>
    </div>
  );
}

export default function PricingEnhanced({ blok }) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="section" id="pricing">
      <div className="pricing-section pricing-compact">
        <div style={{ textAlign: "center" }}>
          <h2 className="section-heading" style={{ color: "#fff", fontSize: "22px", marginBottom: "2px" }}>{blok.heading}</h2>
          <div className="billing-toggle billing-toggle-sticky">
            <span className={!isYearly ? "billing-active" : ""} onClick={() => setIsYearly(false)}>
              {"Th\u00e1ng"}
            </span>
            <div className="billing-switch" onClick={() => setIsYearly(!isYearly)}>
              <div className={`billing-knob ${isYearly ? "billing-knob-right" : ""}`} />
            </div>
            <span className={isYearly ? "billing-active" : ""} onClick={() => setIsYearly(true)}>
              {"N\u0103m"}
            </span>
            <span className={`billing-save-inline ${isYearly ? "billing-save-show" : ""}`}>
              {"Ti\u1ebft ki\u1ec7m 17%"}
            </span>
          </div>
        </div>

        <div className="pricing-cards pricing-slider">
          {blok.plans?.map((p, idx) => (
            <PricingCard key={p._uid || idx} p={p} idx={idx} isYearly={isYearly} />
          ))}
        </div>
      </div>
    </section>
  );
}
