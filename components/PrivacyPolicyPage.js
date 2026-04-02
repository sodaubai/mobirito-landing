"use client";
import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const SECTIONS = [
  { id: "thu-thap", title: "Thu thập dữ liệu" },
  { id: "muc-dich", title: "Mục đích sử dụng" },
  { id: "bao-mat", title: "Cam kết bảo mật" },
  { id: "quyen", title: "Quyền của người dùng" },
  { id: "camera", title: "Chính sách camera AI" },
  { id: "obd", title: "Dữ liệu OBD-II" },
  { id: "cong-dong", title: "Dữ liệu cộng đồng" },
  { id: "cookie", title: "Cookie & theo dõi" },
  { id: "luu-tru", title: "Lưu trữ dữ liệu" },
  { id: "thay-doi", title: "Thay đổi chính sách" },
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

export default function PrivacyPolicyPage() {
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
            <h1 className="legal-hero-title">Chính sách bảo mật</h1>
            <p className="legal-hero-desc">Cập nhật lần cuối: 01/04/2026</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="legal-wrapper container">
        <TOC sections={SECTIONS} activeId={activeId} />

        <div className="legal-content">
          <ScrollReveal>
            <section className="legal-section" id="thu-thap">
              <h2>1. Dữ liệu chúng tôi thu thập</h2>
              <h3>1.1 Dữ liệu vị trí (GPS)</h3>
              <p>Navinext thu thập dữ liệu vị trí GPS trong quá trình sử dụng tính năng dẫn đường để cung cấp hướng dẫn lộ trình chính xác, cảnh báo ngõ hẹp và tính toán khoảng cách.</p>
              <h3>1.2 Hình ảnh từ camera AI (Dashcam)</h3>
              <p>Camera AI chỉ sử dụng để <strong>nhận diện biển báo giao thông và dịch sang tiếng Việt</strong> theo thời gian thực. Hình ảnh được xử lý trên thiết bị (on-device) hoặc gửi lên server để phân tích AI.</p>
              <p><strong>Cam kết:</strong> Navinext <strong>không lưu trữ khuôn mặt người đi đường</strong>. Hình ảnh chỉ được xử lý tạm thời để nhận diện biển báo, sau đó bị xóa ngay lập tức.</p>
              <h3>1.3 Dữ liệu xe qua OBD-II</h3>
              <p>Khi kết nối OBD-II, chúng tôi thu thập: tốc độ xe, mức nhiên liệu, trạng thái động cơ, số km đã đi. Dữ liệu này phục vụ tính năng quản lý chi phí và cảnh báo bảo trì.</p>
              <h3>1.4 Thông tin tài khoản</h3>
              <ul>
                <li>Họ tên, email khi đăng ký</li>
                <li>Thông tin xe (loại xe, biển số) để tối ưu dẫn đường</li>
                <li>Thông tin thiết bị (model, hệ điều hành, phiên bản app)</li>
              </ul>
            </section>

            <section className="legal-section" id="muc-dich">
              <h2>2. Mục đích sử dụng dữ liệu</h2>
              <ul>
                <li><strong>Tối ưu lộ trình:</strong> Sử dụng GPS và dữ liệu giao thông cộng đồng để tìm đường nhanh nhất, tránh ngõ hẹp</li>
                <li><strong>Cảnh báo an toàn:</strong> Nhận diện biển báo, giới hạn tốc độ, vùng cấm qua camera AI</li>
                <li><strong>Cập nhật giá xăng cộng đồng:</strong> Tổng hợp dữ liệu từ người dùng để hiển thị giá xăng chính xác tại các trạm gần nhất</li>
                <li><strong>Quản lý chi phí xe:</strong> Theo dõi xăng, phí cầu đường, bảo trì qua dữ liệu OBD-II</li>
                <li><strong>Cá nhân hóa trải nghiệm:</strong> Ghi nhớ tuyến đường thường đi, tùy chọn ngôn ngữ</li>
                <li><strong>Cải thiện dịch vụ:</strong> Phân tích dữ liệu ẩn danh để nâng cấp AI và bản đồ</li>
              </ul>
            </section>

            <section className="legal-section" id="bao-mat">
              <h2>3. Cam kết bảo mật</h2>
              <div className="legal-highlight">
                <p><strong>Navinext cam kết không bán thông tin cá nhân của bạn cho bất kỳ bên thứ ba nào.</strong></p>
              </div>
              <p>Chúng tôi áp dụng các biện pháp bảo mật tiêu chuẩn ngành:</p>
              <ul>
                <li>Mã hóa dữ liệu truyền tải bằng TLS/SSL</li>
                <li>Mã hóa dữ liệu lưu trữ (AES-256)</li>
                <li>Kiểm soát truy cập nghiêm ngặt theo nguyên tắc tối thiểu quyền (least privilege)</li>
                <li>Kiểm tra bảo mật và penetration testing định kỳ</li>
                <li>Dữ liệu camera AI được xử lý và xóa ngay, không lưu trữ dài hạn</li>
              </ul>
              <p>Chúng tôi chỉ chia sẻ dữ liệu trong các trường hợp:</p>
              <ul>
                <li>Với sự đồng ý của bạn</li>
                <li>Với đối tác kỹ thuật (xử lý thanh toán, lưu trữ cloud) theo hợp đồng bảo mật nghiêm ngặt</li>
                <li>Khi pháp luật Nhật Bản yêu cầu</li>
                <li>Dữ liệu giao thông <strong>ẩn danh hóa</strong> để phục vụ cộng đồng</li>
              </ul>
            </section>

            <section className="legal-section" id="quyen">
              <h2>4. Quyền của người dùng</h2>
              <p>Bạn có đầy đủ quyền kiểm soát dữ liệu của mình:</p>
              <ul>
                <li><strong>Xóa dữ liệu hành trình:</strong> Xóa lịch sử lộ trình bất kỳ lúc nào trong Settings</li>
                <li><strong>Tắt chia sẻ vị trí:</strong> Vô hiệu hóa GPS sharing mà vẫn dùng dẫn đường cơ bản</li>
                <li><strong>Tắt camera AI:</strong> Ngưng tính năng nhận diện biển báo nếu không muốn</li>
                <li><strong>Xuất dữ liệu:</strong> Tải xuống toàn bộ dữ liệu cá nhân của bạn</li>
                <li><strong>Xóa tài khoản:</strong> Yêu cầu xóa toàn bộ tài khoản và dữ liệu liên quan</li>
                <li><strong>Từ chối thông báo:</strong> Hủy nhận email tiếp thị bất kỳ lúc nào</li>
              </ul>
            </section>

            <section className="legal-section" id="camera">
              <h2>5. Chính sách camera AI</h2>
              <p>Đây là tính năng quan trọng của Navinext, chúng tôi minh bạch hóa quy trình xử lý:</p>
              <ul>
                <li>Camera chỉ <strong>bật khi người dùng kích hoạt</strong> tính năng dẫn đường</li>
                <li>Hình ảnh được xử lý bằng AI để nhận diện biển báo giao thông Nhật Bản</li>
                <li>Kết quả dịch được hiển thị trên màn hình theo thời gian thực</li>
                <li><strong>Không nhận diện khuôn mặt</strong> người đi đường hay tài xế khác</li>
                <li><strong>Không ghi âm</strong> âm thanh từ môi trường</li>
                <li>Hình ảnh <strong>không được lưu trữ</strong> sau khi xử lý xong</li>
              </ul>
            </section>

            <section className="legal-section" id="obd">
              <h2>6. Dữ liệu OBD-II</h2>
              <p>Khi bạn kết nối thiết bị OBD-II với Navinext:</p>
              <ul>
                <li>Dữ liệu chỉ được đọc (read-only), Navinext <strong>không can thiệp vào hệ thống xe</strong></li>
                <li>Thông tin thu thập: tốc độ, RPM, mức nhiên liệu, nhiệt độ động cơ, mã lỗi</li>
                <li>Dữ liệu phục vụ: tính toán chi phí xăng, nhắc bảo trì, cảnh báo sự cố</li>
                <li>Bạn có thể ngắt kết nối OBD-II bất kỳ lúc nào</li>
              </ul>
            </section>

            <section className="legal-section" id="cong-dong">
              <h2>7. Dữ liệu cộng đồng</h2>
              <p>Navinext sử dụng dữ liệu cộng đồng để cải thiện trải nghiệm cho tất cả người dùng:</p>
              <ul>
                <li><strong>Giá xăng:</strong> Người dùng báo giá xăng tại các trạm, dữ liệu được tổng hợp ẩn danh</li>
                <li><strong>Tình trạng giao thông:</strong> Dữ liệu lưu lượng từ GPS được ẩn danh hóa để cảnh báo kẹt xe</li>
                <li><strong>Cảnh báo ngõ hẹp:</strong> Báo cáo từ cộng đồng về đường hẹp, khó đi</li>
              </ul>
              <p>Mọi dữ liệu cộng đồng đều được <strong>ẩn danh hóa</strong> trước khi tổng hợp. Không ai có thể truy ngược đến cá nhân bạn.</p>
            </section>

            <section className="legal-section" id="cookie">
              <h2>8. Cookie & công nghệ theo dõi</h2>
              <ul>
                <li>Duy trì phiên đăng nhập</li>
                <li>Ghi nhớ tùy chọn cá nhân (ngôn ngữ, đơn vị đo)</li>
                <li>Phân tích hiệu suất ứng dụng (analytics ẩn danh)</li>
              </ul>
              <p>Chúng tôi <strong>không sử dụng cookie</strong> để theo dõi hoạt động của bạn trên các website khác.</p>
            </section>

            <section className="legal-section" id="luu-tru">
              <h2>9. Lưu trữ dữ liệu</h2>
              <p>Dữ liệu cá nhân được lưu trữ trong thời gian bạn sử dụng dịch vụ. Khi bạn yêu cầu xóa tài khoản:</p>
              <ul>
                <li>Dữ liệu cá nhân: xóa trong vòng <strong>30 ngày</strong></li>
                <li>Dữ liệu hành trình: xóa ngay lập tức</li>
                <li>Dữ liệu cộng đồng (ẩn danh): được giữ lại để phục vụ cộng đồng</li>
                <li>Dữ liệu thanh toán: lưu trữ theo yêu cầu pháp luật Nhật Bản</li>
              </ul>
            </section>

            <section className="legal-section" id="thay-doi">
              <h2>10. Thay đổi chính sách</h2>
              <p>Chúng tôi có thể cập nhật chính sách này. Mọi thay đổi quan trọng sẽ được thông báo trước <strong>30 ngày</strong> qua ứng dụng hoặc email. Việc tiếp tục sử dụng dịch vụ đồng nghĩa bạn chấp nhận chính sách mới.</p>
            </section>

            <section className="legal-section" id="lien-he">
              <h2>11. Liên hệ</h2>
              <p>Nếu có câu hỏi về quyền riêng tư hoặc dữ liệu cá nhân:</p>
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
