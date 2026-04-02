"use client";

const QR_ICON = <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M0 0h7v7H0zm1 1v5h5V1zm1 1h3v3H2zm7-2h7v7H9zm1 1v5h5V1zm1 1h3v3h-3zM0 9h7v7H0zm1 1v5h5v-5zm1 1h3v3H2zm10-1h1v1h-1zm-2 0h1v1h-1zm4 0h1v1h-1zm-4 2h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm-4 2h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1z"/></svg>;

function trackEvent(eventName) {
  if (typeof window !== "undefined" && window.gtag) window.gtag("event", eventName);
  if (typeof window !== "undefined" && window.fbq) window.fbq("trackCustom", eventName);
}

export function StepCTA({ index, blok }) {
  if (index === 0) {
    return (
      <div className="step-cta-group">
        <a href={blok?.cta_link?.url || blok?.cta_link || "https://play.google.com/store"} target="_blank" rel="noopener noreferrer" className="step-cta-play" onClick={() => trackEvent("click_install_step1_playstore")}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734c0-.382.218-.72.536-.893l.073-.027zm.524-.292L14.5 7.5l-2.9 2.9L4.133 1.522zM15.9 8.9l2.7 1.55a1 1 0 010 1.7l-2.7 1.55L12.6 12l3.3-3.1zM4.133 22.478L11.6 13.6l2.9 2.9-9.843 5.69-.524.288z"/></svg>
          Tải ngay trên Play Store
        </a>
        <button className="step-cta-qr" onClick={() => { trackEvent("click_install_step1_qr"); const m = document.getElementById("qr-modal"); if(m) m.style.display = m.style.display === "flex" ? "none" : "flex"; }}>
          {QR_ICON} Xem mã QR
        </button>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="step-cta-group">
        <div className="step-cta-apk-wrap">
          <a href={blok?.cta_link?.url || blok?.cta_link || "#"} target="_blank" rel="noopener noreferrer" className="step-cta-apk" onClick={() => trackEvent("click_install_step2_apk")}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Tải tệp APK dự phòng
          </a>
          <span className="step-cta-tooltip">Dành cho màn hình không có Google Play</span>
        </div>
      </div>
    );
  }
  return null;
}

export function QRModal() {
  return (
    <div id="qr-modal" className="qr-modal" style={{display:"none"}} onClick={(e) => { if (e.target.id === 'qr-modal') e.target.style.display = 'none'; }}>
      <div className="qr-modal-content">
        <button className="qr-modal-close" onClick={() => { document.getElementById('qr-modal').style.display = 'none'; }}>×</button>
        <h3>Quét mã QR</h3>
        <p>Dùng camera điện thoại để quét và tải Navinext</p>
        <div className="qr-placeholder">
          <svg viewBox="0 0 200 200" width="160" height="160"><rect width="200" height="200" fill="#fff" rx="12"/><rect x="20" y="20" width="60" height="60" rx="4" fill="#0D0D0D"/><rect x="30" y="30" width="40" height="40" rx="2" fill="#fff"/><rect x="38" y="38" width="24" height="24" fill="#0D0D0D"/><rect x="120" y="20" width="60" height="60" rx="4" fill="#0D0D0D"/><rect x="130" y="30" width="40" height="40" rx="2" fill="#fff"/><rect x="138" y="38" width="24" height="24" fill="#0D0D0D"/><rect x="20" y="120" width="60" height="60" rx="4" fill="#0D0D0D"/><rect x="30" y="130" width="40" height="40" rx="2" fill="#fff"/><rect x="38" y="138" width="24" height="24" fill="#0D0D0D"/><rect x="90" y="90" width="20" height="20" fill="#F15A22"/><rect x="120" y="120" width="15" height="15" fill="#0D0D0D"/><rect x="140" y="120" width="15" height="15" fill="#0D0D0D"/><rect x="160" y="120" width="15" height="15" fill="#0D0D0D"/><rect x="120" y="140" width="15" height="15" fill="#0D0D0D"/><rect x="160" y="140" width="15" height="15" fill="#0D0D0D"/><rect x="120" y="160" width="15" height="15" fill="#0D0D0D"/><rect x="140" y="160" width="15" height="15" fill="#0D0D0D"/><rect x="160" y="160" width="15" height="15" fill="#0D0D0D"/><rect x="90" y="120" width="20" height="10" fill="#0D0D0D"/><rect x="90" y="150" width="20" height="10" fill="#0D0D0D"/></svg>
        </div>
        <p style={{fontSize:12,color:"rgba(255,255,255,0.4)",marginTop:8}}>navinext.jp/download</p>
      </div>
    </div>
  );
}
