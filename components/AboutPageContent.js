"use client";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

function CounterUp({ target, suffix = "" }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref} className="counter-value">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const STATS = [
  { value: 5000, suffix: "+", label: "Người dùng" },
  { value: 2, suffix: "", label: "Thành phố (Tokyo, Osaka)" },
  { value: 24, suffix: "/7", label: "Hỗ trợ kỹ thuật" },
  { value: 99, suffix: "%", label: "Uptime hệ thống" },
];

const VALUES = [
  {
    icon: "🔒",
    title: "Bảo mật dữ liệu",
    desc: "Mã hóa end-to-end, không chia sẻ dữ liệu cá nhân với bên thứ ba.",
  },
  {
    icon: "🔄",
    title: "Cập nhật liên tục",
    desc: "Bản đồ và thuật toán được cải tiến hàng tuần dựa trên dữ liệu thực.",
  },
  {
    icon: "👂",
    title: "Lắng nghe cộng đồng",
    desc: "Mỗi phản hồi đều được đọc, phân tích và đưa vào roadmap phát triển.",
  },
  {
    icon: "🎯",
    title: "Giải quyết vấn đề thực",
    desc: "Xuất phát từ nỗi đau thực tế, không phải lý thuyết công nghệ.",
  },
];

export default function AboutPageContent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about-page">
      {/* Hero with parallax */}
      <section className="about-hero">
        <div
          className="about-hero-bg"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div className="about-hero-overlay" />
        <div className="container about-hero-content">
          <ScrollReveal>
            <p className="about-hero-tag">VỀ CHÚNG TÔI</p>
            <h1 className="about-hero-title">
              Đồng hành cùng bạn<br />trên mọi cung đường Nhật Bản
            </h1>
            <p className="about-hero-desc">
              Navinext ra đời từ chính trải nghiệm thực tế của những người
              nước ngoài lần đầu cầm lái tại xứ sở mặt trời mọc.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Why - Split 50/50 */}
      <section className="about-story">
        <div className="container">
          <div className="about-split">
            <ScrollReveal direction="left">
              <div className="about-split-image">
                <div className="about-image-placeholder">
                  <span>📸</span>
                  <p>Ảnh CEO / Đội ngũ NVIT</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="about-split-text">
                <span className="about-label">Câu chuyện của chúng tôi</span>
                <h2 className="about-heading">The &ldquo;Why&rdquo;</h2>
                <p className="about-text">
                  Xuất phát từ khó khăn thực tế của những người nước ngoài lần đầu
                  cầm lái tại Nhật. Sự bối rối trước biển báo tiếng Nhật và nỗi sợ
                  kẹt trong ngõ hẹp đã thôi thúc chúng tôi tạo ra Navinext.
                </p>
                <p className="about-text">
                  Chúng tôi hiểu rằng việc lái xe ở một đất nước xa lạ không chỉ là
                  thách thức về giao thông — mà còn là rào cản ngôn ngữ, văn hóa và
                  sự tự tin. Navinext sinh ra để xóa bỏ những rào cản đó.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About NVIT */}
      <section className="about-nvit">
        <div className="container">
          <ScrollReveal>
            <div className="about-nvit-card">
              <span className="about-label">Công ty chủ quản</span>
              <h2 className="about-heading">NVIT — New Vision & Innovation Technology</h2>
              <p className="about-text">
                NVIT là đơn vị tiên phong trong giải pháp AI và Automotive tại Nhật Bản.
                Chúng tôi sở hữu đội ngũ kỹ sư giàu kinh nghiệm, thấu hiểu sâu sắc
                hạ tầng giao thông và văn hóa lái xe bản địa.
              </p>
              <div className="about-nvit-info">
                <div className="about-nvit-item">
                  <span className="about-nvit-icon">📍</span>
                  <span>Tokyo, Japan</span>
                </div>
                <div className="about-nvit-item">
                  <span className="about-nvit-icon">🏢</span>
                  <span>AI & Automotive Solutions</span>
                </div>
                <div className="about-nvit-item">
                  <span className="about-nvit-icon">👥</span>
                  <span>Đội ngũ kỹ sư Việt - Nhật</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Counter Stats */}
      <section className="about-stats">
        <div
          className="about-stats-bg"
          style={{ transform: `translateY(${(scrollY - 800) * 0.2}px)` }}
        />
        <div className="about-stats-overlay" />
        <div className="container about-stats-content">
          {STATS.map((s, i) => (
            <div key={i} className="about-stat-item">
              <CounterUp target={s.value} suffix={s.suffix} />
              <span className="counter-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Navinext - More than an app */}
      <section className="about-mission">
        <div className="container">
          <ScrollReveal>
            <div className="about-mission-header">
              <span className="about-label">Sứ mệnh</span>
              <h2 className="about-heading">Navinext — Hơn cả một ứng dụng</h2>
              <p className="about-text" style={{ maxWidth: 640, margin: "0 auto" }}>
                Navinext là &ldquo;người bạn đồng hành&rdquo; đáng tin cậy nhất cho cộng đồng
                Expat, giúp xóa bỏ rào cản ngôn ngữ và sự lạ lẫm về địa lý.
              </p>
            </div>
          </ScrollReveal>

          <div className="about-values-grid">
            {VALUES.map((v, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="about-value-card">
                  <span className="about-value-icon">{v.icon}</span>
                  <h3 className="about-value-title">{v.title}</h3>
                  <p className="about-value-desc">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
