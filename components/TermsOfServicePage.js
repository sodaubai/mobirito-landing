"use client";
import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const SECTIONS = [
  { id: "chap-nhan", title: "Chấp nhận điều khoản" },
  { id: "dich-vu", title: "Phạm vi dịch vụ" },
  { id: "tai-khoan", title: "Tài khoản người dùng" },
  { id: "an-toan", title: "An toàn giao thông" },
  { id: "apk", title: "Quy định về APK/XAPK" },
  { id: "subscription", title: "Gói Subscription" },
  { id: "quy-tac", title: "Quy tắc sử dụng" },
  { id: "so-huu", title: "Sở hữu trí tuệ" },
  { id: "gioi-han", title: "Giới hạn trách nhiệm" },
  { id: "cham-dut", title: "Chấm dứt dịch vụ" },
  { id: "luat", title: "Luật áp dụng" },
  { id: "lien-he", title: "Liên hệ" },
];

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 15V5M10 5L5 10M10 5L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>
  );
}

function TOC({ sections, activeId }) {
  return (
    <nav className="legal-toc">
      <p className="legal-toc-title">Mục lục</p>
      <ul>
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className={activeId === s.id ? "active" : ""}>
              {i + 1}. {s.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function TermsOfServicePage() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );
    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <ScrollReveal>
            <p className="legal-hero-tag">NAVINEXT</p>
            <h1 className="legal-hero-title">Điều khoản sử dụng</h1>
            <p className="legal-hero-desc">Cập nhật lần cuối: 01/04/2026</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="legal-wrapper container">
        <TOC sections={SECTIONS} activeId={activeId} />

        <div className="legal-content">
          <ScrollReveal>
            <section className="legal-section" id="chap-nhan">
              <h2>1. Chấp nhận điều khoản</h2>
              <p>Bằng việc tải xuống, cài đặt hoặc sử dụng ứng dụng Navinext, bạn đồng ý tuân thủ các điều khoản sử dụng này. Nếu bạn không đồng ý, vui lòng ngưng sử dụng ứng dụng và gỡ cài đặt.</p>
            </section>

            <section className="legal-section" id="dich-vu">
              <h2>2. Phạm vi dịch vụ</h2>
              <p>Navinext cung cấp các dịch vụ hỗ trợ lái xe tại Nhật Bản:</p>
              <ul>
                <li><strong>Dẫn đường AI:</strong> Tối ưu lộ trình, tránh ngõ hẹp, cảnh báo giao thông</li>
                <li><strong>Camera AI Dashcam:</strong> Nhận diện và dịch biển báo giao thông Nhật Bản sang tiếng Việt theo thời gian thực</li>
                <li><strong>Kết nối OBD-II:</strong> Theo dõi trạng thái xe, quản lý chi phí nhiên liệu và bảo trì</li>
                <li><strong>Dữ liệu cộng đồng:</strong> Cập nhật giá xăng, cảnh báo ngõ hẹp từ cộng đồng tài xế</li>
                <li><strong>Đồng bộ Headunit:</strong> Kết nối giữa Companion App (điện thoại) và Headunit (màn hình xe)</li>
              </ul>
            </section>

            <section className="legal-section" id="tai-khoan">
              <h2>3. Tài khoản người dùng</h2>
              <ul>
                <li>Bạn phải cung cấp thông tin chính xác khi đăng ký</li>
                <li>Bạn chịu trách nhiệm bảo mật tài khoản và mật khẩu</li>
                <li>Mọi hoạt động dưới tài khoản của bạn là trách nhiệm của bạn</li>
                <li>Thông báo cho chúng tôi ngay khi phát hiện truy cập trái phép</li>
                <li>Mỗi người chỉ được sở hữu <strong>một tài khoản duy nhất</strong></li>
              </ul>
            </section>

            <section className="legal-section" id="an-toan">
              <h2>4. An toàn giao thông</h2>
              <div className="legal-highlight legal-highlight--warning">
                <p><strong>Quan trọng: Navinext là công cụ hỗ trợ dẫn đường. Người lái xe vẫn phải chịu trách nhiệm hoàn toàn về hành vi lái xe và tuân thủ luật giao thông Nhật Bản.</strong></p>
              </div>
              <p>Khi sử dụng Navinext, bạn phải:</p>
              <ul>
                <li>Tuân thủ đầy đủ luật giao thông Nhật Bản</li>
                <li>Tập trung quan sát đường khi lái xe</li>
                <li><strong>Không thao tác ứng dụng khi xe đang di chuyển</strong> (vi phạm Điều 71 Luật Giao thông Nhật Bản)</li>
                <li>Tự phán đoán tình huống giao thông thực tế, không phụ thuộc hoàn toàn vào AI</li>
                <li>Dừng xe ở nơi an toàn trước khi thao tác ứng dụng</li>
              </ul>
              <p>Navinext <strong>không chịu trách nhiệm</strong> về tai nạn, vi phạm giao thông hoặc thiệt hại phát sinh từ việc sử dụng ứng dụng.</p>
            </section>

            <section className="legal-section" id="apk">
              <h2>5. Quy định về APK/XAPK</h2>
              <div className="legal-highlight legal-highlight--warning">
                <p><strong>Cảnh báo:</strong> Navinext chỉ phân phối chính thức qua <strong>Google Play Store</strong> và <strong>Apple App Store</strong>.</p>
              </div>
              <p>Nếu bạn tải và cài đặt bản APK/XAPK từ nguồn không chính thức:</p>
              <ul>
                <li>Chúng tôi <strong>không đảm bảo tính an toàn</strong> của bản cài đặt đó</li>
                <li>File có thể bị chỉnh sửa, chèn mã độc hoặc đánh cắp dữ liệu</li>
                <li>Bạn tự chịu <strong>toàn bộ rủi ro</strong> về bảo mật và dữ liệu cá nhân</li>
                <li>Chúng tôi không hỗ trợ kỹ thuật cho các bản cài đặt không chính thức</li>
                <li>Việc tự ý can thiệp vào mã nguồn (reverse engineering, decompile) là <strong>vi phạm điều khoản</strong></li>
              </ul>
            </section>

            <section className="legal-section" id="subscription">
              <h2>6. Gói Subscription</h2>
              <h3>6.1 Các gói dịch vụ</h3>
              <ul>
                <li><strong>Early Bird (Miễn phí):</strong> Dẫn đường cơ bản, dịch biển báo (giới hạn), cảnh báo ngõ hẹp</li>
                <li><strong>Navigator Pro:</strong> Đầy đủ tính năng AI, OBD-II, không giới hạn dịch biển báo, ưu tiên hỗ trợ</li>
                <li><strong>Fleet Master:</strong> Gói doanh nghiệp, quản lý nhiều xe, API tích hợp, liên hệ để báo giá</li>
              </ul>
              <h3>6.2 Thanh toán</h3>
              <ul>
                <li>Phí được tính theo chu kỳ <strong>tháng hoặc năm</strong></li>
                <li>Thanh toán qua Google Play / Apple App Store</li>
                <li>Gói năm được <strong>giảm 17%</strong> so với gói tháng</li>
              </ul>
              <h3>6.3 Gia hạn & hủy</h3>
              <ul>
                <li>Gói tự động gia hạn vào cuối mỗi chu kỳ</li>
                <li>Hủy gói trước ít nhất <strong>24 giờ</strong> trước ngày gia hạn</li>
                <li>Sau khi hủy, bạn vẫn sử dụng được đến hết chu kỳ đã thanh toán</li>
                <li>Không hoàn tiền cho phần chu kỳ chưa sử dụng</li>
              </ul>
            </section>

            <section className="legal-section" id="quy-tac">
              <h2>7. Quy tắc sử dụng</h2>
              <p>Khi sử dụng Navinext, bạn <strong>không được</strong>:</p>
              <ul>
                <li>Sử dụng ứng dụng cho mục đích bất hợp pháp</li>
                <li>Can thiệp, reverse engineer hoặc decompile mã nguồn</li>
                <li>Sao chép, phân phối lại nội dung hoặc dữ liệu bản đồ</li>
                <li>Sử dụng bot, crawler hoặc công cụ tự động trái phép</li>
                <li>Giả mạo thông tin, vị trí hoặc danh tính</li>
                <li>Spam hoặc lạm dụng hệ thống báo cáo cộng đồng</li>
                <li>Sử dụng điện thoại khi đang lái xe</li>
              </ul>
            </section>

            <section className="legal-section" id="so-huu">
              <h2>8. Sở hữu trí tuệ</h2>
              <p>Tất cả nội dung, thiết kế, mã nguồn, thuật toán AI, dữ liệu bản đồ và thương hiệu Navinext thuộc quyền sở hữu của chúng tôi. Bạn không được sao chép, sửa đổi hoặc phân phối bất kỳ phần nào mà không có sự cho phép bằng văn bản.</p>
            </section>

            <section className="legal-section" id="gioi-han">
              <h2>9. Giới hạn trách nhiệm</h2>
              <ul>
                <li>Dịch vụ được cung cấp "nguyên trạng" (as-is)</li>
                <li>Chúng tôi <strong>không đảm bảo độ chính xác 100%</strong> của dẫn đường, dịch thuật biển báo và dữ liệu OBD-II</li>
                <li>Không chịu trách nhiệm về thiệt hại gián tiếp từ việc sử dụng dịch vụ</li>
                <li>Dữ liệu giá xăng cộng đồng mang tính tham khảo, có thể không chính xác</li>
                <li>Tổng mức bồi thường không vượt quá số tiền bạn đã thanh toán trong 12 tháng gần nhất</li>
              </ul>
            </section>

            <section className="legal-section" id="cham-dut">
              <h2>10. Chấm dứt dịch vụ</h2>
              <p>Chúng tôi có quyền tạm ngưng hoặc chấm dứt tài khoản nếu:</p>
              <ul>
                <li>Vi phạm điều khoản sử dụng</li>
                <li>Sử dụng bản APK/XAPK không chính thức</li>
                <li>Can thiệp vào mã nguồn hoặc hệ thống</li>
                <li>Hoạt động gian lận hoặc lạm dụng báo cáo cộng đồng</li>
                <li>Không thanh toán phí dịch vụ (gói trả phí)</li>
              </ul>
            </section>

            <section className="legal-section" id="luat">
              <h2>11. Luật áp dụng</h2>
              <p>Các điều khoản này được điều chỉnh bởi pháp luật Nhật Bản. Mọi tranh chấp sẽ được giải quyết tại tòa án có thẩm quyền tại Tokyo, Nhật Bản.</p>
              <p>Chúng tôi có thể cập nhật điều khoản theo thời gian. Thay đổi sẽ được thông báo trước <strong>30 ngày</strong> qua ứng dụng hoặc email.</p>
            </section>

            <section className="legal-section" id="lien-he">
              <h2>12. Liên hệ</h2>
              <p>Nếu có câu hỏi về điều khoản sử dụng:</p>
              <ul>
                <li>Email: <a href="mailto:support@navinext.jp">support@navinext.jp</a></li>
                <li>Website: <a href="https://navinext.huynguyen.it.com">navinext.huynguyen.it.com</a></li>
              </ul>
            </section>
          </ScrollReveal>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
