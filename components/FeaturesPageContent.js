"use client";
import ScrollReveal from "./ScrollReveal";
import FeaturesSidebar from "./FeaturesSidebar";

const FEATURES = [
  {
    id: "hybrid",
    tag: "01",
    title: "Hệ thống dẫn đường Hybrid",
    subtitle: "Phá vỡ giới hạn",
    desc: "Đồng bộ liền mạch giữa Headunit (màn hình xe) và Companion App trên điện thoại. Lập kế hoạch chuyến đi trên điện thoại, tự động \"đẩy\" lên hệ thống xe khi bắt đầu khởi hành.",
    points: [
      "Đồng bộ real-time giữa điện thoại & màn hình xe",
      "Lập kế hoạch chuyến đi trước khi lên xe",
      "Tự động chuyển đổi thiết bị liền mạch",
      "Hoạt động cả khi mất kết nối Internet",
    ],
    icon: "🔗",
    visual: "hybrid",
  },
  {
    id: "narrow",
    tag: "02",
    title: "Thuật toán tránh ngõ hẹp 2.5m",
    subtitle: "Không còn kẹt trong ngõ cụt",
    desc: "AI phân tích và lọc dữ liệu bản đồ để loại bỏ các tuyến đường hẹp dưới 2.5m, vấn đề phổ biến khi lái xe tại Nhật Bản. Luôn dẫn bạn qua đường lớn, an toàn hơn.",
    points: [
      "Lọc tự động đường hẹp < 2.5m",
      "So sánh: Google Maps vào ngõ cụt vs Navinext đi đường lớn",
      "Dữ liệu cập nhật liên tục từ cộng đồng",
      "Tối ưu cho xe ô tô tại thành phố Nhật",
    ],
    icon: "🛡️",
    visual: "narrow",
    hasComparison: true,
  },
  {
    id: "vision",
    tag: "03",
    title: "Thị giác máy tính & Dịch biển báo",
    subtitle: "Hiểu biển báo bằng tiếng Việt",
    desc: "Công nghệ nhận diện biển báo qua Camera/Dashcam, tự động dịch và cảnh báo bằng tiếng Việt. Không cần biết tiếng Nhật để hiểu luật giao thông.",
    points: [
      "Biển cấm theo giờ (時間制限)",
      "Biển dừng tạm thời - Tomare (止まれ)",
      "Làn xe buýt chuyên dụng",
      "Khu vực giới hạn tốc độ",
      "Biển cấm rẽ, cấm đỗ",
    ],
    icon: "👁️",
    visual: "vision",
  },
  {
    id: "cost",
    tag: "04",
    title: "Quản lý chi phí & Dữ liệu cộng đồng",
    subtitle: "Crowdsource thông minh",
    desc: "AI Dashcam tự nhận diện bảng giá tại các trạm xăng để cập nhật lên hệ thống chung. Tự động ghi chép nhật ký chi tiêu: xăng, phí cầu đường, bảo trì xe.",
    points: [
      "Nhận diện giá xăng tự động qua Dashcam",
      "Bản đồ giá xăng real-time từ cộng đồng",
      "Nhật ký chi tiêu tự động (xăng, cầu đường, bảo trì)",
      "Báo cáo chi phí hàng tháng",
    ],
    icon: "💰",
    visual: "cost",
  },
  {
    id: "obd",
    tag: "05",
    title: "Kết nối phần cứng OBD-II",
    subtitle: "Theo dõi sức khỏe xe real-time",
    desc: "Kết nối OBD-II để theo dõi sức khỏe xe theo thời gian thực. Cảnh báo lỗi động cơ, áp suất lốp và nhắc lịch bảo dưỡng tự động.",
    points: [
      "Đọc mã lỗi động cơ (DTC) realtime",
      "Theo dõi áp suất lốp (nếu xe hỗ trợ TPMS)",
      "Nhắc lịch bảo dưỡng dựa trên km thực tế",
      "Cảnh báo nhiệt độ động cơ bất thường",
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
          <div className="comparison-label">❌ Google Maps</div>
          <div className="comparison-route">
            <div className="route-line route-line--bad"></div>
            <span>Vào ngõ hẹp 1.8m → Kẹt</span>
          </div>
        </div>
        <div className="comparison-vs">VS</div>
        <div className="comparison-card comparison-card--good">
          <div className="comparison-label">✅ Navinext</div>
          <div className="comparison-route">
            <div className="route-line route-line--good"></div>
            <span>Đường lớn 6m → An toàn</span>
          </div>
        </div>
      </div>
    );
  }

  if (feature.id === "vision") {
    const signs = ["止まれ\nDỪNG LẠI", "速度制限\n30 KM/H", "駐車禁止\nCẤM ĐỖ XE", "一方通行\nMỘT CHIỀU"];
    return (
      <div className="feature-visual feature-visual--signs">
        {signs.map((s, i) => (
          <div key={i} className="sign-card">
            <div className="sign-jp">{s.split("\n")[0]}</div>
            <div className="sign-arrow">→</div>
            <div className="sign-vi">{s.split("\n")[1]}</div>
          </div>
        ))}
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
              Công nghệ AI giải quyết<br />mọi nỗi đau lái xe tại Nhật
            </h1>
            <p className="features-hero-desc">
              Khám phá cách Navinext sử dụng AI, thị giác máy tính và dữ liệu cộng đồng
              để biến việc lái xe tại Nhật Bản trở nên an toàn và dễ dàng hơn bao giờ hết.
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
