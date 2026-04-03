"use client";
import { useState, useRef, useEffect } from "react";

function trackEvent(eventName) {
  if (typeof window !== "undefined" && window.gtag) window.gtag("event", eventName);
  if (typeof window !== "undefined" && window.fbq) window.fbq("trackCustom", eventName);
}

function StepNumber({ n }) {
  return <span className="journey-step-num">{n}</span>;
}

function QRPopover({ onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    function handleClick(e) { if (ref.current && !ref.current.contains(e.target)) onClose(); }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);
  return (
    <div className="journey-qr-popover" ref={ref}>
      <svg viewBox="0 0 200 200" width="180" height="180"><rect width="200" height="200" fill="#fff" rx="12"/><rect x="20" y="20" width="60" height="60" rx="4" fill="#0D0D0D"/><rect x="30" y="30" width="40" height="40" rx="2" fill="#fff"/><rect x="38" y="38" width="24" height="24" fill="#0D0D0D"/><rect x="120" y="20" width="60" height="60" rx="4" fill="#0D0D0D"/><rect x="130" y="30" width="40" height="40" rx="2" fill="#fff"/><rect x="138" y="38" width="24" height="24" fill="#0D0D0D"/><rect x="20" y="120" width="60" height="60" rx="4" fill="#0D0D0D"/><rect x="30" y="130" width="40" height="40" rx="2" fill="#fff"/><rect x="38" y="138" width="24" height="24" fill="#0D0D0D"/><rect x="90" y="90" width="20" height="20" fill="#F15A22"/><rect x="120" y="120" width="15" height="15" fill="#0D0D0D"/><rect x="140" y="120" width="15" height="15" fill="#0D0D0D"/><rect x="160" y="120" width="15" height="15" fill="#0D0D0D"/><rect x="120" y="140" width="15" height="15" fill="#0D0D0D"/><rect x="160" y="140" width="15" height="15" fill="#0D0D0D"/><rect x="120" y="160" width="15" height="15" fill="#0D0D0D"/><rect x="140" y="160" width="15" height="15" fill="#0D0D0D"/><rect x="160" y="160" width="15" height="15" fill="#0D0D0D"/><rect x="90" y="120" width="20" height="10" fill="#0D0D0D"/><rect x="90" y="150" width="20" height="10" fill="#0D0D0D"/></svg>
      <p>{"Quét mã để tải Navinext"}</p>
    </div>
  );
}

function PushAnimation() {
  return (
    <div className="journey-push-anim">
      <div className="journey-push-phone">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="3"/><line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2"/></svg>
      </div>
      <div className="journey-push-dots">
        <span /><span /><span />
      </div>
      <div className="journey-push-car">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 18v3"/></svg>
      </div>
    </div>
  );
}

function getPlayStoreUrl(customUrl) {
  const base = customUrl || "https://play.google.com/store/apps/details?id=com.navinext";
  if (typeof window !== "undefined" && /Android/i.test(navigator.userAgent)) {
    return "market://details?id=com.navinext";
  }
  return base;
}

function AndroidTab({ blok }) {
  const [qrOpen, setQrOpen] = useState(false);
  const playUrl = getPlayStoreUrl(blok?.play_store_url);
  const apkUrl = blok?.apk_url || "#";
  const steps = blok?.steps || [];
  const s1 = steps[0] || {};
  const s2 = steps[1] || {};
  const s3 = steps[2] || {};

  return (
    <div className="journey-cards">
      <div className="journey-card">
        <StepNumber n={s1.step_number || 1} />
        <h3>{s1.title || "S\u1edf h\u1eefu Companion App"}</h3>
        <p>{s1.description || "T\u1ea3i Navinext v\u1ec1 smartphone \u0111\u1ec3 l\u00ean k\u1ebf ho\u1ea1ch h\u00e0nh tr\u00ecnh v\u00e0 qu\u1ea3n l\u00fd chi ph\u00ed."}</p>
        <div className="journey-card-cta">
          <a href={playUrl} target="_blank" rel="noopener noreferrer" className="journey-btn-primary" onClick={() => trackEvent("click_install_android_playstore")}>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734c0-.382.218-.72.536-.893l.073-.027zm.524-.292L14.5 7.5l-2.9 2.9L4.133 1.522zM15.9 8.9l2.7 1.55a1 1 0 010 1.7l-2.7 1.55L12.6 12l3.3-3.1zM4.133 22.478L11.6 13.6l2.9 2.9-9.843 5.69-.524.288z"/></svg>
            Google Play
          </a>
          <div className="journey-qr-wrap">
            <button className="journey-btn-outline" onClick={() => { trackEvent("click_install_android_qr"); setQrOpen(!qrOpen); }}>
              <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor"><path d="M0 0h7v7H0zm1 1v5h5V1zm1 1h3v3H2zm7-2h7v7H9zm1 1v5h5V1zm1 1h3v3h-3zM0 9h7v7H0zm1 1v5h5v-5zm1 1h3v3H2zm10-1h1v1h-1zm-2 0h1v1h-1zm4 0h1v1h-1zm-4 2h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm-4 2h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1z"/></svg>
              QR
            </button>
            {qrOpen && <QRPopover onClose={() => setQrOpen(false)} />}
          </div>
        </div>
      </div>

      <div className="journey-card-arrow">
        <svg viewBox="0 0 24 12" width="24" height="12"><path d="M0 6h20" stroke="rgba(241,90,34,0.4)" strokeWidth="1.5" strokeDasharray="4 3"/><path d="M17 2l5 4-5 4" fill="none" stroke="rgba(241,90,34,0.6)" strokeWidth="1.5"/></svg>
      </div>

      <div className="journey-card">
        <StepNumber n={s2.step_number || 2} />
        <h3>{s2.title || "Trang b\u1ecb M\u00e0n h\u00ecnh Xe"}</h3>
        <p>{s2.description || "C\u00e0i Navinext l\u00ean Head Unit qua Remote Push ho\u1eb7c APK."}</p>
        <PushAnimation />
        <a href={apkUrl} target="_blank" rel="noopener noreferrer" className="journey-btn-outline sm" onClick={() => trackEvent("click_install_android_apk")}>
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          {"T\u1ea3i APK"}
        </a>
      </div>

      <div className="journey-card-arrow">
        <svg viewBox="0 0 24 12" width="24" height="12"><path d="M0 6h20" stroke="rgba(241,90,34,0.4)" strokeWidth="1.5" strokeDasharray="4 3"/><path d="M17 2l5 4-5 4" fill="none" stroke="rgba(241,90,34,0.6)" strokeWidth="1.5"/></svg>
      </div>

      <div className="journey-card">
        <StepNumber n={s3.step_number || 3} />
        <h3>{s3.title || "\u0110\u1ed3ng b\u1ed9 & Kh\u1edfi h\u00e0nh"}</h3>
        <p>{s3.description || "\u0110\u0103ng nh\u1eadp 1 l\u1ea7n, m\u1ecdi d\u1eef li\u1ec7u \u0111\u1ed3ng b\u1ed9 t\u1ee9c th\u00ec."}</p>
        <div className="journey-ready">
          <span className="journey-ready-dot" />
          Ready to Drive!
        </div>
      </div>
    </div>
  );
}

function IOSTab({ blok }) {
  const apkUrl = blok?.apk_url || "#";
  return (
    <div className="journey-ios-compact">
      <div className="journey-ios-icon-sm">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
      </div>
      <h3>{"D\u00f9ng iPhone? Navinext ch\u1ea1y \u0111\u1ed9c l\u1eadp tr\u00ean m\u00e0n h\u00ecnh xe!"}</h3>
      <div className="journey-ios-steps">
        <div className="journey-ios-step"><strong>1.</strong> {"C\u00e0i Navinext tr\u1ef1c ti\u1ebfp tr\u00ean m\u00e0n h\u00ecnh xe (Store ho\u1eb7c USB)"}</div>
        <div className="journey-ios-step"><strong>2.</strong> {"D\u00f9ng thi\u1ebft b\u1ecb Android ph\u1ee5 ho\u1eb7c web \u0111\u1ec3 qu\u1ea3n l\u00fd"}</div>
        <div className="journey-ios-step"><strong>3.</strong> {"Apple Maps \u0111i b\u1ed9, Navinext d\u1eabn \u0111\u01b0\u1eddng \u00f4 t\u00f4 tr\u00ean xe"}</div>
      </div>
      <a href={apkUrl} target="_blank" rel="noopener noreferrer" className="journey-btn-outline sm" onClick={() => trackEvent("click_install_ios_apk")}>
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        {"T\u1ea3i t\u1ec7p APK"}
      </a>
    </div>
  );
}


export function InstallJourney({ blok }) {
  const [tab, setTab] = useState("android");
  return (
    <div className="journey-wrapper">
      <div className="journey-toggle">
        <button className={`journey-toggle-btn${tab === "android" ? " active" : ""}`} onClick={() => setTab("android")}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.523 2.226a.75.75 0 011.06-.003.75.75 0 01-.003 1.06l-1.544 1.534A7.472 7.472 0 0120.006 10H3.994a7.472 7.472 0 012.97-5.183L5.42 3.283a.75.75 0 01-.003-1.06.75.75 0 011.06.003l1.717 1.706A7.449 7.449 0 0112 3c1.29 0 2.506.328 3.565.907l1.958-1.681zM10 7.5a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0zM4 11h16v8a3 3 0 01-3 3H7a3 3 0 01-3-3v-8z"/></svg>
          {"Tôi dùng Android"}
        </button>
        <button className={`journey-toggle-btn${tab === "ios" ? " active" : ""}`} onClick={() => setTab("ios")}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          {"Tôi dùng iOS"}
        </button>
      </div>
      {tab === "android" ? <AndroidTab blok={blok} /> : <IOSTab blok={blok} />}
    </div>
  );
}

export function StepCTA({ index, blok }) { return null; }
export function QRModal() { return null; }
