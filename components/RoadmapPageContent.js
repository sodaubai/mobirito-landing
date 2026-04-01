"use client";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const PHASES = [
  {
    phase: "Phase 1",
    label: "Hiện tại",
    title: "Nền tảng Navinext AI",
    status: "active",
    color: "#22c55e",
    icon: "🚀",
    desc: "App dẫn đường AI, tránh ngõ hẹp và cộng đồng 5.000+ người dùng tại Tokyo & Osaka.",
    highlights: [
      "Dẫn đường AI tránh ngõ hẹp 2.5m",
      "Companion App đồng bộ Headunit",
      "Cộng đồng 5.000+ người dùng",
      "Hỗ trợ Tokyo, Osaka và vùng lân cận",
    ],
  },
  {
    phase: "Phase 2",
    label: "Sắp ra mắt",
    title: "Đột phá AI Vision",
    status: "upcoming",
    color: "#F15A22",
    icon: "👁️",
    desc: "Ra mắt phần cứng AI Dashcam chuyên dụng. Tích hợp ADAS và tương tác giọng nói AI 2 chiều.",
    highlights: [
      "Phần cứng AI Dashcam chuyên dụng",
      "ADAS: Cảnh báo va chạm, lệch làn",
      "Giọng nói AI 2 chiều (Việt/Anh)",
      "Dịch biển báo real-time qua camera",
    ],
  },
  {
    phase: "Phase 3",
    label: "Tầm nhìn 2027",
    title: "Hệ sinh thái B2B",
    status: "future",
    color: "#8b5cf6",
    icon: "🏢",
    desc: "Giải pháp quản lý đội xe cho Gara và công ty vận tải. Chấm điểm lái xe an toàn để tối ưu bảo hiểm.",
    highlights: [
      "Fleet Management cho doanh nghiệp",
      "Safety Score — chấm điểm lái xe",
      "Tối ưu chi phí bảo hiểm đội xe",
      "Dashboard quản lý cho Gara/vận tải",
    ],
  },
  {
    phase: "Phase 4",
    label: "Tương lai",
    title: "Kết nối đô thị thông minh",
    status: "future",
    color: "#06b6d4",
    icon: "🌐",
    desc: "Tích hợp dữ liệu bãi đỗ xe trống và trạm sạc xe điện (EV) thời gian thực trên toàn Nhật Bản.",
    highlights: [
      "Bãi đỗ xe trống real-time",
      "Bản đồ trạm sạc EV toàn Nhật",
      "Dữ liệu giao thông thông minh",
      "Tích hợp hạ tầng đô thị",
    ],
  },
];

function ProgressLine() {
  const lineRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = lineRef.current;
      if (!el) return;
      const parent = el.parentElement;
      const rect = parent.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = rect.top - windowH * 0.3;
      const end = rect.bottom - windowH * 0.5;
      const range = end - start;
      if (range <= 0) return;
      const pct = Math.min(1, Math.max(0, (0 - start) / range));
      setProgress(pct * 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="rm-progress-track" ref={lineRef}>
      <div className="rm-progress-fill" style={{ height: `${progress}%` }} />
    </div>
  );
}

export default function RoadmapPageContent() {
  return (
    <div className="roadmap-page">
      <section className="rm-hero">
        <div className="container">
          <ScrollReveal>
            <p className="rm-hero-tag">LỘ TRÌNH PHÁT TRIỂN</p>
            <h1 className="rm-hero-title">
              Từ nền tảng AI<br />đến hệ sinh thái đô thị thông minh
            </h1>
            <p className="rm-hero-desc">
              Cam kết phát triển lâu dài — mỗi giai đoạn là một bước tiến
              vững chắc trong sứ mệnh đồng hành cùng cộng đồng người Việt tại Nhật.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="rm-timeline-section">
        <div className="container">
          <div className="rm-timeline">
            <ProgressLine />

            {PHASES.map((phase, i) => (
              <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 100}>
                <div className={`rm-phase rm-phase--${phase.status}`}>
                  <div className="rm-dot-wrap">
                    <div
                      className={`rm-dot ${phase.status === "active" ? "rm-dot--pulse" : ""}`}
                      style={{ borderColor: phase.color }}
                    />
                  </div>

                  <div
                    className={`rm-card ${phase.status !== "active" ? "rm-card--glass" : ""}`}
                    style={{ "--phase-color": phase.color }}
                  >
                    <div className="rm-card-header">
                      <span className="rm-card-icon">{phase.icon}</span>
                      <div>
                        <span className="rm-card-phase">{phase.phase}</span>
                        <span className="rm-card-label" style={{ background: phase.color }}>
                          {phase.label}
                        </span>
                      </div>
                    </div>
                    <h2 className="rm-card-title">{phase.title}</h2>
                    <p className="rm-card-desc">{phase.desc}</p>
                    <ul className="rm-card-highlights">
                      {phase.highlights.map((h, j) => (
                        <li key={j} style={{ "--dot-color": phase.color }}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
