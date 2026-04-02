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
      <p>Qu\u00E9t m\u00E3 \u0111\u1EC3 t\u1EA3i Navinext</p>
    </div>
  );
}

function PushAnimation() {
  return (
    <div className="journey-push-anim">
      <div className="journey-push-phone">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="3"/><line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2"/></svg>
      </div>
      <div className="journey-push-dots">
        <span /><span /><span />
      </div>
      <div className="journey-push-car">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 18v3"/></svg>
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

  return (
    <div className="journey-steps">
      <div className="journey-step">
        <div className="journey-step-left">
          <StepNumber n={1} />
          <div className="journey-step-line" />
        </div>
        <div className="journey-step-content">
          <h3>S\u1EDF h\u1EEFu Companion App</h3>
          <p>T\u1EA3i Navinext v\u1EC1 smartphone \u0111\u1EC3 l\u00EAn k\u1EBF ho\u1EA1ch h\u00E0nh tr\u00ECnh v\u00E0 qu\u1EA3n l\u00FD chi ph\u00ED m\u1ECDi l\u00FAc m\u1ECDi n\u01A1i.</p>
          <div className="journey-cta-row">
            <a href={playUrl} target="_blank" rel="noopener noreferrer" className="journey-btn-primary" onClick={() => trackEvent("click_install_android_playstore")}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734c0-.382.218-.72.536-.893l.073-.027zm.524-.292L14.5 7.5l-2.9 2.9L4.133 1.522zM15.9 8.9l2.7 1.55a1 1 0 010 1.7l-2.7 1.55L12.6 12l3.3-3.1zM4.133 22.478L11.6 13.6l2.9 2.9-9.843 5.69-.524.288z"/></svg>
              T\u1EA3i tr\u00EAn Google Play
            </a>
            <div className="journey-qr-wrap">
              <button className="journey-btn-outline" onClick={() => { trackEvent("click_install_android_qr"); setQrOpen(!qrOpen); }}>
                <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M0 0h7v7H0zm1 1v5h5V1zm1 1h3v3H2zm7-2h7v7H9zm1 1v5h5V1zm1 1h3v3h-3zM0 9h7v7H0zm1 1v5h5v-5zm1 1h3v3H2zm10-1h1v1h-1zm-2 0h1v1h-1zm4 0h1v1h-1zm-4 2h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm-4 2h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1z"/></svg>
                M\u00E3 QR
              </button>
              {qrOpen && <QRPopover onClose={() => setQrOpen(false)} />}
            </div>
          </div>
        </div>
      </div>

      <div className="journey-step">
        <div className="journey-step-left">
          <StepNumber n={2} />
          <div className="journey-step-line" />
        </div>
        <div className="journey-step-content">
          <h3>Trang b\u1ECB cho M\u00E0n h\u00ECnh Xe</h3>
          <p>C\u00E0i \u0111\u1EB7t tr\u1EF1c ti\u1EBFp Navinext l\u00EAn Head Unit \u0111\u1EC3 t\u1EADn h\u01B0\u1EDFng b\u1EA3n \u0111\u1ED3 AI tr\u00E1nh ng\u00F5 h\u1EB9p tr\u00EAn m\u00E0n h\u00ECnh l\u1EDBn.</p>
          <PushAnimation />
          <div className="journey-method">
            <div className="journey-method-badge">Ti\u1EC7n l\u1EE3i</div>
            <strong>Remote Push</strong>
            <p>\u0110\u1EA9y app t\u1EEB Google Play sang m\u00E0n h\u00ECnh xe ch\u1EC9 v\u1EDBi 1 ch\u1EA1m. Kh\u00F4ng c\u1EA7n USB.</p>
          </div>
          <div className="journey-method">
            <div className="journey-method-badge alt">D\u1EF1 ph\u00F2ng</div>
            <strong>C\u00E0i b\u1EB1ng APK</strong>
            <p>D\u00E0nh cho m\u00E0n h\u00ECnh kh\u00F4ng c\u00F3 Google Play Store.</p>
            <a href={apkUrl} target="_blank" rel="noopener noreferrer" className="journey-btn-outline sm" onClick={() => trackEvent("click_install_android_apk")}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              T\u1EA3i APK cho m\u00E0n h\u00ECnh \u00F4 t\u00F4
            </a>
          </div>
        </div>
      </div>

      <div className="journey-step last">
        <div className="journey-step-left">
          <StepNumber n={3} />
        </div>
        <div className="journey-step-content">
          <h3>\u0110\u1ED3ng b\u1ED9 & Kh\u1EDFi h\u00E0nh</h3>
          <p>\u0110\u0103ng nh\u1EADp t\u00E0i kho\u1EA3n duy nh\u1EA5t. M\u1ECDi d\u1EEF li\u1EC7u v\u1EC1 tr\u1EA1m x\u0103ng, bi\u1EC3n b\u00E1o v\u00E0 l\u1ED9 tr\u00ECnh s\u1EBD \u0111\u01B0\u1EE3c \u0111\u1ED3ng b\u1ED9 t\u1EE9c th\u00EC.</p>
          <div className="journey-ready">
            <span className="journey-ready-dot" />
            Ready to Drive!
          </div>
        </div>
      </div>
    </div>
  );
}

function IOSTab({ blok }) {
  const apkUrl = blok?.apk_url || "#";
  return (
    <div className="journey-ios">
      <div className="journey-ios-header">
        <div className="journey-ios-icon">
          <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
        </div>
        <h3>D\u00F9ng iPhone? B\u1EA1n v\u1EABn c\u00F3 th\u1EC3 tr\u1EA3i nghi\u1EC7m Navinext tr\u00EAn xe!</h3>
        <p>Navinext ch\u1EA1y \u0111\u1ED9c l\u1EADp tr\u00EAn <strong>M\u00E0n h\u00ECnh Android / Android Box</strong> c\u1EE7a xe.</p>
      </div>
      <div className="journey-steps">
        <div className="journey-step">
          <div className="journey-step-left">
            <StepNumber n={1} />
            <div className="journey-step-line" />
          </div>
          <div className="journey-step-content">
            <h3>C\u00E0i \u0111\u1EB7t tr\u1EF1c ti\u1EBFp tr\u00EAn m\u00E0n h\u00ECnh xe</h3>
            <div className="journey-method">
              <div className="journey-method-badge">C\u00E1ch 1</div>
              <strong>M\u1EDF Store tr\u00EAn xe</strong>
              <p>M\u1EDF Google Play Store tr\u00EAn m\u00E0n h\u00ECnh xe, t\u00ECm "Navinext" v\u00E0 c\u00E0i \u0111\u1EB7t.</p>
            </div>
            <div className="journey-method">
              <div className="journey-method-badge alt">C\u00E1ch 2</div>
              <strong>C\u1EAFm USB ch\u1EE9a APK</strong>
              <p>D\u00E0nh cho m\u00E0n h\u00ECnh kh\u00F4ng c\u00F3 Store. T\u1EA3i APK v\u00E0o USB, c\u1EAFm v\u00E0o xe.</p>
              <a href={apkUrl} target="_blank" rel="noopener noreferrer" className="journey-btn-outline sm" onClick={() => trackEvent("click_install_ios_apk")}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                T\u1EA3i t\u1EC7p APK
              </a>
            </div>
          </div>
        </div>
        <div className="journey-step">
          <div className="journey-step-left">
            <StepNumber n={2} />
            <div className="journey-step-line" />
          </div>
          <div className="journey-step-content">
            <h3>Qu\u1EA3n l\u00FD qua Web/Cloud</h3>
            <p>D\u00F9ng thi\u1EBFt b\u1ECB Android ph\u1EE5 ho\u1EB7c tr\u00ECnh duy\u1EC7t web \u0111\u1EC3 thi\u1EBFt l\u1EADp l\u1ED9 tr\u00ECnh.</p>
            <p className="journey-ios-note">T\u00EDnh n\u0103ng Web Dashboard s\u1EBD s\u1EDBm ra m\u1EAFt.</p>
          </div>
        </div>
        <div className="journey-step last">
          <div className="journey-step-left">
            <StepNumber n={3} />
          </div>
          <div className="journey-step-content">
            <h3>T\u1EADn h\u01B0\u1EDFng h\u00E0nh tr\u00ECnh</h3>
            <p>Apple Maps d\u1EABn \u0111\u01B0\u1EDDng \u0111i b\u1ED9, Navinext d\u1EABn \u0111\u01B0\u1EDDng \u00F4 t\u00F4 tr\u00EAn m\u00E0n h\u00ECnh xe.</p>
            <div className="journey-ready">
              <span className="journey-ready-dot" />
              Ready to Drive!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InstallJourney({ blok }) {
  const [tab, setTab] = useState("android");
  return (
    <div className="journey-wrapper">
      <div className="journey-toggle">
        <button className={`journey-toggle-btn${tab === "android" ? " active" : ""}`} onClick={() => setTab("android")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.523 2.226a.75.75 0 011.06-.003.75.75 0 01-.003 1.06l-1.544 1.534A7.472 7.472 0 0120.006 10H3.994a7.472 7.472 0 012.97-5.183L5.42 3.283a.75.75 0 01-.003-1.06.75.75 0 011.06.003l1.717 1.706A7.449 7.449 0 0112 3c1.29 0 2.506.328 3.565.907l1.958-1.681zM10 7.5a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0zM4 11h16v8a3 3 0 01-3 3H7a3 3 0 01-3-3v-8z"/></svg>
          T\u00F4i d\u00F9ng Android
        </button>
        <button className={`journey-toggle-btn${tab === "ios" ? " active" : ""}`} onClick={() => setTab("ios")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          T\u00F4i d\u00F9ng iOS
        </button>
      </div>
      {tab === "android" ? <AndroidTab blok={blok} /> : <IOSTab blok={blok} />}
    </div>
  );
}

export function StepCTA({ index, blok }) { return null; }
export function QRModal() { return null; }
