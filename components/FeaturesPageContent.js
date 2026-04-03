"use client";
import ScrollReveal from "./ScrollReveal";
import FeaturesSidebar from "./FeaturesSidebar";

const FEATURES = [
  {
    id: "hybrid",
    tag: "01",
    title: "Dẫn Đường Thông Minh & Tối Ưu Lộ Trình",
    subtitle: "Đồng bộ mọi thiết bị",
    desc: "Hệ thống chuyên dụng cho thị trường Nhật Bản, hỗ trợ thiết lập lộ trình thông minh giúp hạn chế các cung đường hẹp dưới 2.5m. Đồng bộ hóa tức thì giữa Companion App (Phone) và Navigation (Head Unit) giúp bạn lập kế hoạch mọi lúc mọi nơi.",
    points: [
      "Tối ưu di chuyển an toàn trên các tuyến đường chính.",
      "Đồng bộ hành trình giữa điện thoại và màn hình ô tô Android.",
      "Giao diện tương thích hoàn hảo cho Head Unit từ 7 - 12 inch.",
    ],
    icon: "🔗",
    visual: "hybrid",
  },
  {
    id: "narrow",
    tag: "02",
    title: "Trợ Lý Cảnh Báo Giao Thông (JARTIC Integration)",
    subtitle: "Người bạn đồng hành tin cậy",
    desc: "Tích hợp dữ liệu giao thông thời gian thực giúp cảnh báo chủ động các khu vực hạn chế di chuyển (Restriction Alerts). Hệ thống hoạt động như một người bạn đồng hành tin cậy.",
    points: [
      "Cảnh báo biển cấm, làn xe buýt, khu vực giới hạn tốc độ theo khung giờ.",
      "Dữ liệu giao thông chuẩn từ nguồn JARTIC Nhật Bản.",
      "Chỉ dẫn giọng nói đa ngôn ngữ: Tiếng Việt, Anh, Nhật.",
    ],
    icon: "🛡️",
    visual: "narrow",
    hasComparison: true,
  },
  {
    id: "cost",
    tag: "03",
    title: "Quản Lý Chi Phí & Trạm Xăng Bản Địa",
    subtitle: "Tối ưu tài chính",
    desc: "Tối ưu hóa tài chính với hệ thống theo dõi chi phí vận hành (Driving Cost Tracking). Hỗ trợ tìm kiếm nhanh trạm xăng và bãi đỗ xe giá rẻ từ nguồn dữ liệu nội địa uy tín.",
    points: [
      "Tự động tổng hợp và theo dõi chi phí vận hành hàng tháng.",
      "Gợi ý trạm xăng/EV và bãi đỗ giá tốt nhất trên lộ trình.",
      "Dữ liệu cập nhật liên tục, hỗ trợ tiết kiệm tài chính hiệu quả.",
    ],
    icon: "💰",
    visual: "cost",
  },
  {
    id: "obd",
    tag: "04",
    title: "Kết Nối OBD-II & Hệ Sinh Thái Trải Nghiệm",
    subtitle: "Chẩn đoán sức khỏe xe",
    desc: "Hỗ trợ kết nối qua cổng OBD-II (chuẩn ELM327) giúp chẩn đoán sức khỏe xe và theo dõi thông số vận hành thực tế. Đồng thời gợi ý các điểm du lịch, mua sắm hấp dẫn dọc hành trình.",
    points: [
      "Chẩn đoán lỗi xe cơ bản và theo dõi vận hành qua cổng OBD.",
      "Hỗ trợ thiết bị kết nối chuẩn ELM327 phổ biến.",
      "Gợi ý điểm dừng chân, du lịch và ưu đãi mua sắm dọc đường.",
    ],
    icon: "🔧",
    visual: "obd",
  },
];



function FeatureVisual({ feature }) {
  if (feature.id === "narrow") {
    return (
      <div className="feature-visual feature-visual--comparison">
        <div className="comparison-card comparison-card--bad">
          <div className="comparison-label">⚠️ Không có cảnh báo</div>
          <div className="comparison-route">
            <div className="route-line route-line--bad"></div>
            <span>Vi phạm biển cấm → Phạt tiền</span>
          </div>
        </div>
        <div className="comparison-vs">VS</div>
        <div className="comparison-card comparison-card--good">
          <div className="comparison-label">✅ Với Navinext</div>
          <div className="comparison-route">
            <div className="route-line route-line--good"></div>
            <span>Cảnh báo trước → An toàn</span>
          </div>
        </div>
      </div>
    );
  }

  if (feature.id === "cost") {
    return (
      <div className="feature-visual feature-visual--dashboard">
        <div className="dashboard-stat">
          <span className="dashboard-label">Xăng tháng này</span>
          <span className="dashboard-value">¥12,450</span>
        </div>
        <div className="dashboard-stat">
          <span className="dashboard-label">Phí cầu đường</span>
          <span className="dashboard-value">¥8,200</span>
        </div>
        <div className="dashboard-stat">
          <span className="dashboard-label">Bảo trì</span>
          <span className="dashboard-value">¥0</span>
        </div>
        <div className="dashboard-total">
          <span>Tổng chi phí</span>
          <span className="dashboard-value-lg">¥20,650</span>
        </div>
      </div>
    );
  }

  if (feature.id === "obd") {
    const metrics = [
      { label: "Động cơ", value: "OK", color: "#22c55e" },
      { label: "Nhiệt độ", value: "92°C", color: "#22c55e" },
      { label: "Áp suất lốp", value: "2.4 bar", color: "#f59e0b" },
      { label: "Bảo dưỡng", value: "1,200 km", color: "#22c55e" },
    ];
    return (
      <div className="feature-visual feature-visual--obd">
        {metrics.map((m, i) => (
          <div key={i} className="obd-metric">
            <div className="obd-dot" style={{ background: m.color }}></div>
            <span className="obd-label">{m.label}</span>
            <span className="obd-value">{m.value}</span>
          </div>
        ))}
      </div>
    );
  }

  // Default: hybrid
  return (
    <div className="feature-visual feature-visual--hybrid">
      <div className="hybrid-device hybrid-device--phone">
        <div className="hybrid-screen">📱 Companion App</div>
        <div className="hybrid-status">Lập kế hoạch chuyến đi</div>
      </div>
      <div className="hybrid-sync">
        <div className="hybrid-sync-arrow">⟷</div>
        <span>Đồng bộ tự động</span>
      </div>
      <div className="hybrid-device hybrid-device--car">
        <div className="hybrid-screen">🖥️ Headunit</div>
        <div className="hybrid-status">Dẫn đường real-time</div>
      </div>
    </div>
  );
}

export default function FeaturesPageContent() {
  return (
    <div className="features-page">
      {/* Hero */}
      <section className="features-hero">
        <div className="container">
          <ScrollReveal>
            <p className="features-hero-tag">TÍNH NĂNG</p>
            <h1 className="features-hero-title">
              Tính Năng Navinext
            </h1>
            <p className="features-hero-desc">
              Giải pháp dẫn đường chuyên dụng cho người lái xe tại Nhật Bản
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main content with sidebar */}
      <div className="features-layout container">
        <FeaturesSidebar />

        <div className="features-content">
          {/* Feature sections */}
          {FEATURES.map((feature, idx) => (
            <section
              key={feature.id}
              id={feature.id}
              className={`feature-block ${idx % 2 === 1 ? "feature-block--reverse" : ""}`}
            >
              <ScrollReveal direction={idx % 2 === 0 ? "left" : "right"}>
                <div className="feature-text">
                  <span className="feature-tag">{feature.icon} {feature.tag}</span>
                  <h2 className="feature-title">{feature.title}</h2>
                  <p className="feature-subtitle">{feature.subtitle}</p>
                  <p className="feature-desc">{feature.desc}</p>
                  <ul className="feature-points">
                    {feature.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal direction={idx % 2 === 0 ? "right" : "left"} delay={200}>
                <FeatureVisual feature={feature} />
              </ScrollReveal>
            </section>
          ))}

        </div>
      </div>
    </div>
  );
}
