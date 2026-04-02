"use client";
import { useState, useEffect, useRef } from "react";

function PricingFeatureItem({ text, enabled, delay }) {
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

  return (
    <section className="section" id="pricing">
      <div className="pricing-section pricing-compact">
        <div style={{ textAlign: "center" }}>
          <h2 className="section-heading" style={{ color: "#fff", fontSize: "28px" }}>{blok.heading}</h2>
          <div className="billing-toggle">
            <span className={!isYearly ? "billing-active" : ""} onClick={() => setIsYearly(false)}>
              Tháng
            </span>
            <div className="billing-switch" onClick={() => setIsYearly(!isYearly)}>
              <div className={`billing-knob ${isYearly ? "billing-knob-right" : ""}`} />
            </div>
            <span className={isYearly ? "billing-active" : ""} onClick={() => setIsYearly(true)}>
              Năm
            </span>
            <span className={`billing-save-inline ${isYearly ? "billing-save-show" : ""}`}>-17%</span>
          </div>
        </div>

        <div className="pricing-cards pricing-slider">
          {blok.plans?.map((p, idx) => {
            const isFeatured = p.is_featured;
            const isEarlyBird = idx === 2;
            const displayPrice = (isFeatured && isYearly) ? "¥9.800" : p.price;
            const displayPeriod = (isFeatured && isYearly) ? "Mỗi năm" : p.billing_period;

            return (
              <div key={p._uid} className={`price-card ${isFeatured ? "featured" : ""} ${isEarlyBird ? "early-bird" : ""}`}>
                {isFeatured && <div className="recommended-badge">Gợi ý</div>}
                <div className="price-card-top">
                  <div className="plan-name">{p.plan_name}</div>
                  <div className="price">{displayPrice}</div>
                  <div className="period">{displayPeriod}</div>
                </div>
                <ul className="features">
                  {p.features?.map((f, fi) => (
                    <PricingFeatureItem key={f._uid} text={f.text} enabled={f.enabled !== false} delay={100 + fi * 60} />
                  ))}
                </ul>
                <div className="price-card-bottom">
                  <button className={`btn ${isFeatured ? "btn-primary" : "btn-dark"} btn-sm`} style={{ width: "100%" }}>
                    {p.cta_label}
                  </button>

                </div>
              </div>
            );
          })}
        </div>

        <div className="pricing-footnotes">
          <p>{"*(1): Các cảnh báo dựa trên dữ liệu bản đồ thời gian thực giúp hạn chế tối đa vi phạm giao thông tại Nhật."}</p>
          <p>{"*(2): Quảng cáo được tối ưu để không gây xao nhãn, ưu tiên trải nghiệm lái xe tập trung."}</p>
          <p>{"*(3): Hệ thống đề xuất thông minh dựa trên Vehicle Profile đã đăng ký khi nhiên liệu xuống mức User-defined."}</p>
          <p>{"*(4): Thiết bị hỗ trợ chuẩn ELM327."}</p>
        </div>
      </div>
    </section>
  );
}
