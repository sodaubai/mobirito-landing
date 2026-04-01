"use client";
import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "hybrid", label: "Dẫn đường Hybrid" },
  { id: "narrow", label: "Tránh ngõ hẹp" },
  { id: "vision", label: "Dịch biển báo" },
  { id: "cost", label: "Quản lý chi phí" },
  { id: "obd", label: "Kết nối OBD-II" },
  { id: "roadmap", label: "Lộ trình phát triển" },
];

export default function FeaturesSidebar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="features-sidebar">
      <div className="features-sidebar-inner">
        <span className="features-sidebar-title">Tính năng</span>
        {SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`features-sidebar-link${active === id ? " active" : ""}`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
