"use client";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const PHASES = [
  {
    phase: "Phase 1",
    label: "Beta & MVP",
    title: "Chinh phục 1.000 Early Adopters",
    status: "active",
    color: "#F15A22",
    icon: "🚀",
    desc: "Xây dựng nền tảng cốt lõi: từ cảnh báo hạn chế giao thông đến trợ lý AI giọng nói, tối ưu thuật toán tránh đường hẹp đặc thù Nhật Bản.",
    highlights: [
      "Restriction Alert: cảnh báo biển cấm, làn xe buýt, khu vực tốc độ thấp",
      "Trợ lý AI một chiều: chỉ dẫn lộ trình & cảnh báo chủ động qua giọng nói",
      "Thuật toán tránh bẫy đường hẹp/đường ruộng đặc thù Nhật",
    ],
    goal: "Lấy feedback từ 1.000 người dùng đầu tiên để xác thực giá trị và mô hình trả phí.",
  },
  {
    phase: "Phase 2",
    label: "Đột phá AI Vision",
    title: "Nâng cấp phần cứng & tương tác",
    status: "upcoming",
    color: "#F15A22",
    icon: "👁️",
    desc: "Tích hợp AI Dashcam thông minh với Computer Vision, ADAS và giọng nói hai chiều, nâng tầm trải nghiệm lái xe an toàn.",
    highlights: [
      "Computer Vision: nhận diện biển báo, vạch kẻ đường qua AI Dashcam",
      "ADAS: cảnh báo lệch làn, va chạm sớm, khoảng cách an toàn real-time",
      "Giọng nói hai chiều: ra lệnh & đối thoại rảnh tay (Hands-free)",
    ],
    goal: "Nâng cấp linh hoạt dựa trên sự đón nhận của người dùng ở Phase 1.",
  },
  {
    phase: "Phase 3",
    label: "Hệ sinh thái B2B",
    title: "Số hóa doanh nghiệp vận tải",
    status: "future",
    color: "#C74A1B",
    icon: "🏢",
    desc: "Mở rộng sang B2B với Fleet Management, chấm điểm lái xe an toàn và kết nối đối tác hạ tầng.",
    highlights: [
      "Fleet Management: Dashboard AI quản lý đội xe, theo dõi hành trình, nhắc bảo trì",
      "Safety Score: đánh giá hành vi tài xế, giảm rủi ro bảo hiểm",
      "Partnership: tích hợp bãi đỗ xe, trạm sạc EV, dịch vụ cứu hộ ưu tiên",
    ],
    goal: null,
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
              Cam kết phát triển lâu dài, đồng hành cùng cộng đồng người Việt tại Nhật.
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
                    {phase.goal && (
                      <div className="rm-card-goal">
                        <strong>Mục tiêu:</strong> {phase.goal}
                      </div>
                    )}
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
