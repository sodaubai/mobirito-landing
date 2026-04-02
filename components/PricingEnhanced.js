"use client";
import { useState, useEffect } from "react";

function PricingFeatureItem({ text, enabled, delay }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <li className={`pricing-feat-item ${!enabled ? "disabled" : ""} ${visible ? "pricing-feat-visible" : ""}`}>
      <span className="pricing-feat-check">{enabled ? "\u2713" : "\u2717"}</span>
      <span>{text}</span>
    </li>
  );
}

function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="eb-progress">
      <div className="eb-progress-bar">
        <div className="eb-progress-fill" style={{ width: pct + "%" }} />
      </div>
      <p className="eb-progress-text">{"C\u00f2n l\u1ea1i"} <strong>{current}</strong>/{total} {"su\u1ea5t"}</p>
    </div>
  );
}

const MOBILE_VISIBLE_COUNT = 5;

function PricingCard({ p, idx, isYearly }) {
  const [expanded, setExpanded] = useState(false);
  const isFeatured = p.is_featured;
  const isEarlyBird = idx === 2;
  const displayPrice = (isFeatured && isYearly) ? "\u00a59.800" : p.price;
  const displayPeriod = (isFeatured && isYearly) ? "M\u1ed7i n\u0103m" : p.billing_period;
  const features = p.features || [];
  const hasMore = isFeatured && features.length > MOBILE_VISIBLE_COUNT;

  return (
    <div className={`price-card ${isFeatured ? "featured" : ""} ${isEarlyBird ? "early-bird" : ""}`}>
      {isFeatured && <div className="recommended-badge">{"G\u1ee3i \u00fd"}</div>}
      <div className="price-card-top">
        <div className="plan-name">{p.plan_name}</div>
        <div className="price">{displayPrice}</div>
        <div className="period">{displayPeriod}</div>
      </div>
      <ul className={`features ${hasMore && !expanded ? "features-collapsed" : ""}`}>
        {features.map((f, fi) => (
          <PricingFeatureItem key={f._uid || fi} text={f.text} enabled={f.enabled !== false} delay={100 + fi * 60} />
        ))}
      </ul>
      {hasMore && (
        <button className="features-toggle" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Thu g\u1ecdn \u25b2" : `Xem th\u00eam ${features.length - MOBILE_VISIBLE_COUNT} t\u00ednh n\u0103ng \u25bc`}
        </button>
      )}
      <div className="price-card-bottom">
        {isEarlyBird ? (
          <a href="#early-bird-form" className="btn btn-dark btn-sm" style={{ width: "100%", textAlign: "center", textDecoration: "none" }}>
            {p.cta_label}
          </a>
        ) : (
          <button className={`btn ${isFeatured ? "btn-primary" : "btn-dark"} btn-sm`} style={{ width: "100%" }}>
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
          <h2 className="section-heading" style={{ color: "#fff", fontSize: "28px" }}>{blok.heading}</h2>
          <div className="billing-toggle">
            <span className={!isYearly ? "billing-active" : ""} onClick={() => setIsYearly(false)}>
              {"Th\u00e1ng"}
            </span>
            <div className="billing-switch" onClick={() => setIsYearly(!isYearly)}>
              <div className={`billing-knob ${isYearly ? "billing-knob-right" : ""}`} />
            </div>
            <span className={isYearly ? "billing-active" : ""} onClick={() => setIsYearly(true)}>
              {"N\u0103m"}
            </span>
            <span className={`billing-save-inline ${isYearly ? "billing-save-show" : ""}`}>-17%</span>
          </div>
        </div>

        <div className="pricing-cards pricing-slider">
          {blok.plans?.map((p, idx) => (
            <PricingCard key={p._uid || idx} p={p} idx={idx} isYearly={isYearly} />
          ))}
        </div>

        <div className="pricing-footnotes">
          <p>{"*(1): C\u00e1c c\u1ea3nh b\u00e1o d\u1ef1a tr\u00ean d\u1eef li\u1ec7u b\u1ea3n \u0111\u1ed3 th\u1eddi gian th\u1ef1c gi\u00fap h\u1ea1n ch\u1ebf t\u1ed1i \u0111a vi ph\u1ea1m giao th\u00f4ng t\u1ea1i Nh\u1eadt."}</p>
          <p>{"*(2): Qu\u1ea3ng c\u00e1o \u0111\u01b0\u1ee3c t\u1ed1i \u01b0u \u0111\u1ec3 kh\u00f4ng g\u00e2y xao nh\u00e3n, \u01b0u ti\u00ean tr\u1ea3i nghi\u1ec7m l\u00e1i xe t\u1eadp trung."}</p>
          <p>{"*(3): H\u1ec7 th\u1ed1ng \u0111\u1ec1 xu\u1ea5t th\u00f4ng minh d\u1ef1a tr\u00ean Vehicle Profile \u0111\u00e3 \u0111\u0103ng k\u00fd khi nhi\u00ean li\u1ec7u xu\u1ed1ng m\u1ee9c User-defined."}</p>
          <p>{"*(4): Thi\u1ebft b\u1ecb h\u1ed7 tr\u1ee3 chu\u1ea9n ELM327. "}<a href="https://navinext.huynguyen.it.com/obd-devices" className="pricing-footnote-link">{"Xem danh s\u00e1ch thi\u1ebft b\u1ecb khuy\u00ean d\u00f9ng \u2192"}</a></p>
        </div>
      </div>
    </section>
  );
}
