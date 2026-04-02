"use client";
import { useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import ScrollReveal from "./ScrollReveal";

function FloatingInput({ label, name, type = "text", required = false }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;

  return (
    <div className={`ct-field ${active ? "ct-field--active" : ""}`}>
      <label className="ct-label" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="ct-input"
      />
    </div>
  );
}

function FloatingSelect({ label, name, options, required = false }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;

  return (
    <div className={`ct-field ${active ? "ct-field--active" : ""}`}>
      <label className="ct-label" htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="ct-input ct-select"
      >
        <option value=""></option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function FloatingTextarea({ label, name }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;

  return (
    <div className={`ct-field ${active ? "ct-field--active" : ""}`}>
      <label className="ct-label" htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        rows={4}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="ct-input ct-textarea"
      />
    </div>
  );
}

function PaperPlane({ visible }) {
  if (!visible) return null;
  return (
    <div className="ct-plane-anim">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22L11 13L2 9L22 2Z" />
      </svg>
    </div>
  );
}

function Toast({ visible, onClose }) {
  if (!visible) return null;
  return (
    <div className="ct-toast">
      <div className="ct-toast-content">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
        <span>Cảm ơn bạn, chúng tôi sẽ liên hệ lại trong 24h!</span>
        <button onClick={onClose} className="ct-toast-close">&times;</button>
      </div>
    </div>
  );
}

const CONTACT_INFO = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>,
    label: "Email hỗ trợ",
    value: "support@navinext.com",
    href: "mailto:support@navinext.com",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
    label: "Hotline",
    value: "+81-XXX-XXX-XXXX",
    href: "tel:+81XXXXXXXXXX",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    label: "Group cộng đồng",
    value: "Tham gia Zalo / Facebook",
    href: "#",
  },
];

export default function ContactPageContent() {
  const searchParams = useSearchParams();
  const issueParam = searchParams.get("issue");
  const defaultIssue = issueParam === "early-bird" ? "Đăng ký Early Bird (-50%)" : "";
  const [sending, setSending] = useState(false);
  const [showPlane, setShowPlane] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setShowPlane(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setShowPlane(false);
        setSending(false);
        setShowToast(true);
        e.target.reset();
        setTimeout(() => setShowToast(false), 5000);
      } else {
        setShowPlane(false);
        setSending(false);
        alert("Gửi thất bại, vui lòng thử lại.");
      }
    } catch {
      setShowPlane(false);
      setSending(false);
      alert("Lỗi kết nối, vui lòng thử lại.");
    }
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="ct-hero">
        <div className="container">
          <ScrollReveal>
            <p className="ct-hero-tag">LIÊN HỆ</p>
            <h1 className="ct-hero-title">Kết nối với chúng tôi</h1>
            <p className="ct-hero-desc">
              Bạn cần hỗ trợ cài đặt, mua thiết bị, hoặc muốn hợp tác?
              Hãy liên hệ, đội ngũ NVIT luôn sẵn sàng giúp bạn.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main split layout */}
      <section className="ct-main">
        <div className="container">
          <div className="ct-split">
            {/* Left - Info 40% */}
            <ScrollReveal direction="left">
              <div className="ct-info">
                <h2 className="ct-info-title">Thông tin liên hệ</h2>

                <div className="ct-info-list">
                  {CONTACT_INFO.map((item, i) => (
                    <a key={i} href={item.href} className="ct-info-item">
                      <div className="ct-info-icon">{item.icon}</div>
                      <div>
                        <div className="ct-info-label">{item.label}</div>
                        <div className="ct-info-value">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Community links */}
                <div className="ct-community">
                  <h3 className="ct-community-title">Cộng đồng người dùng</h3>
                  <div className="ct-community-links">
                    <a href="#" className="ct-social-btn ct-social-btn--fb">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                      Facebook Group
                    </a>
                    <a href="#" className="ct-social-btn ct-social-btn--zalo">
                      <span style={{fontWeight:800,fontSize:13}}>Zalo</span>
                      Zalo Group
                    </a>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="ct-map">
                  <h3 className="ct-community-title">Văn phòng NVIT</h3>
                  <div className="ct-map-embed">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828!2d139.7671!3d35.6812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQwJzUyLjMiTiAxMznCsDQ2JzAxLjYiRQ!5e0!3m2!1svi!2sjp!4v1"
                      width="100%"
                      height="200"
                      style={{ border: 0, borderRadius: 12 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="NVIT Office Tokyo"
                    />
                  </div>
                  <p className="ct-map-address">Tokyo, Japan</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Form 60% */}
            <ScrollReveal direction="right">
              <div className="ct-form-wrap">
                <h2 className="ct-form-title">Gửi yêu cầu liên hệ</h2>
                <p className="ct-form-desc">Điền thông tin bên dưới, chúng tôi sẽ phản hồi trong 24h.</p>

                <form onSubmit={handleSubmit} className="ct-form">
                  <FloatingInput label="Họ và tên *" name="name" required />
                  <div className="ct-form-row">
                    <FloatingInput label="Email *" name="email" type="email" required />
                    <FloatingInput label="Số điện thoại" name="phone" type="tel" />
                  </div>
                  <FloatingSelect
                    label="Loại phương tiện"
                    name="vehicle_type"
                    options={["Cá nhân", "Doanh nghiệp"]}
                  />
                  <FloatingSelect
                    label="Vấn đề cần hỗ trợ"
                    name="issue"
                    defaultValue={defaultIssue}
                    options={[
                      "Đăng ký Early Bird (-50%)",
                      "Cài đặt ứng dụng",
                      "Mua thiết bị OBD-II",
                      "Hợp tác đại lý",
                      "Hỗ trợ kỹ thuật",
                      "Khác",
                    ]}
                  />
                  <FloatingTextarea label="Nội dung tin nhắn" name="message" />

                  <button type="submit" className="ct-submit" disabled={sending}>
                    {sending ? (
                      <span className="ct-submit-sending">Đang gửi...</span>
                    ) : (
                      <>
                        Gửi liên hệ
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
                      </>
                    )}
                  </button>
                </form>

                <PaperPlane visible={showPlane} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Toast visible={showToast} onClose={() => setShowToast(false)} />
    </div>
  );
}
