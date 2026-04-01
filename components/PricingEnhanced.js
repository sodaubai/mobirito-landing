"use client";
import { useState, useEffect, useRef } from "react";

function PricingFeatureItem({ text, enabled, delay }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <li className={`pricing-feat-item ${!enabled ? "disabled" : ""} ${visible ? "pricing-feat-visible" : ""}`}>
      <span className="pricing-feat-check">{enabled ? "✓" : "✗"}</span>
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
      <p className="eb-progress-text">Còn lại <strong>{current}</strong>/{total} suất</p>
    </div>
  );
}

export default function PricingEnhanced({ blok }) {
  const [isYearly, setIsYearly] = useState(false);
  const scrollRef = useRef(null);

  const monthlyPrice = "¥980";
  const yearlyPrice = "¥9.800";
  const yearlySaving = "Tiết kiệm 17%";

  return (
    <section className="section" id="pricing">
      <div className="pricing-section">
        <div style={{ textAlign: "center" }}>
          <h2 className="section-heading" style={{ color: "#fff" }}>{blok.heading}</h2>
          <div className="billing-toggle">
            <span
              className={!isYearly ? "billing-active" : ""}
              onClick={() => setIsYearly(false)}
            >
              Tháng
            </span>
            <div className="billing-switch" onClick={() => setIsYearly(!isYearly)}>
              <div className={`billing-knob ${isYearly ? "billing-knob-right" : ""}`} />
            </div>
            <span
              className={isYearly ? "billing-active" : ""}
              onClick={() => setIsYearly(true)}
            >
              Năm
              {isYearly && <span className="billing-save">{yearlySaving}</span>}
            </span>
          </div>
        </div>

        <div className="pricing-cards pricing-slider" ref={scrollRef}>
          {blok.plans?.map((p, idx) => {
            const isFeatured = p.is_featured;
            const isEarlyBird = idx === 2;
            const displayPrice = (isFeatured && isYearly) ? yearlyPrice : p.price;
            const displayPeriod = (isFeatured && isYearly)
              ? "Mỗi năm"
              : p.billing_period;

            return (
              <div
                key={p._uid}
                className={`price-card ${isFeatured ? "featured" : ""} ${isEarlyBird ? "early-bird" : ""}`}
              >
                {isFeatured && <div className="recommended-badge">Gợi ý</div>}
                <div className="plan-name">{p.plan_name}</div>
                <div className="price">{displayPrice}</div>
                <div className="period">
                  {displayPeriod}
                  {isFeatured && isYearly && (
                    <span className="yearly-note"> (Hoặc ¥980/tháng)</span>
                  )}
                  {isFeatured && !isYearly && (
                    <span className="yearly-note"> (Hoặc ¥9.800/năm)</span>
                  )}
                </div>
                <ul className="features">
                  {p.features?.map((f, fi) => (
                    <PricingFeatureItem
                      key={f._uid}
                      text={f.text}
                      enabled={f.enabled !== false}
                      delay={100 + fi * 80}
                    />
                  ))}
                </ul>
                <button className={`btn ${isFeatured ? "btn-primary" : "btn-dark"} btn-sm`} style={{ width: "100%" }}>
                  {p.cta_label}
                </button>
                {isEarlyBird && <ProgressBar current={125} total={1000} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
