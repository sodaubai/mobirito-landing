"use client";
import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const SECTIONS = [
  { id: "chap-nhan", title: "Chap nhan dieu khoan" },
  { id: "dich-vu", title: "Pham vi dich vu" },
  { id: "tai-khoan", title: "Tai khoan nguoi dung" },
  { id: "an-toan", title: "An toan giao thong" },
  { id: "apk", title: "Quy dinh ve APK/XAPK" },
  { id: "subscription", title: "Goi Subscription" },
  { id: "quy-tac", title: "Quy tac su dung" },
  { id: "so-huu", title: "So huu tri tue" },
  { id: "gioi-han", title: "Gioi han trach nhiem" },
  { id: "cham-dut", title: "Cham dut dich vu" },
  { id: "luat", title: "Luat ap dung" },
  { id: "lien-he", title: "Lien he" },
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
      <p className="legal-toc-title">Muc luc</p>
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
            <h1 className="legal-hero-title">Dieu khoan su dung</h1>
            <p className="legal-hero-desc">Cap nhat lan cuoi: 01/04/2026</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="legal-wrapper container">
        <TOC sections={SECTIONS} activeId={activeId} />

        <div className="legal-content">
          <ScrollReveal>
            <section className="legal-section" id="chap-nhan">
              <h2>1. Chap nhan dieu khoan</h2>
              <p>Bang viec tai xuong, cai dat hoac su dung ung dung Navinext, ban dong y tuan thu cac dieu khoan su dung nay. Neu ban khong dong y, vui long ngung su dung ung dung va go cai dat.</p>
            </section>

            <section className="legal-section" id="dich-vu">
              <h2>2. Pham vi dich vu</h2>
              <p>Navinext cung cap cac dich vu ho tro lai xe tai Nhat Ban:</p>
              <ul>
                <li><strong>Dan duong AI:</strong> Toi uu lo trinh, tranh ngo hep, canh bao giao thong</li>
                <li><strong>Camera AI Dashcam:</strong> Nhan dien va dich bien bao giao thong Nhat Ban sang tieng Viet theo thoi gian thuc</li>
                <li><strong>Ket noi OBD-II:</strong> Theo doi trang thai xe, quan ly chi phi nhien lieu va bao tri</li>
                <li><strong>Du lieu cong dong:</strong> Cap nhat gia xang, canh bao ngo hep tu cong dong tai xe</li>
                <li><strong>Dong bo Headunit:</strong> Ket noi giua Companion App (dien thoai) va Headunit (man hinh xe)</li>
              </ul>
            </section>

            <section className="legal-section" id="tai-khoan">
              <h2>3. Tai khoan nguoi dung</h2>
              <ul>
                <li>Ban phai cung cap thong tin chinh xac khi dang ky</li>
                <li>Ban chiu trach nhiem bao mat tai khoan va mat khau</li>
                <li>Moi hoat dong duoi tai khoan cua ban la trach nhiem cua ban</li>
                <li>Thong bao cho chung toi ngay khi phat hien truy cap trai phep</li>
                <li>Moi nguoi chi duoc so huu <strong>mot tai khoan duy nhat</strong></li>
              </ul>
            </section>

            <section className="legal-section" id="an-toan">
              <h2>4. An toan giao thong</h2>
              <div className="legal-highlight legal-highlight--warning">
                <p><strong>Quan trong: Navinext la cong cu ho tro dan duong. Nguoi lai xe van phai chiu trach nhiem hoan toan ve hanh vi lai xe va tuan thu luat giao thong Nhat Ban.</strong></p>
              </div>
              <p>Khi su dung Navinext, ban phai:</p>
              <ul>
                <li>Tuan thu day du luat giao thong Nhat Ban</li>
                <li>Tap trung quan sat duong khi lai xe</li>
                <li><strong>Khong thao tac ung dung khi xe dang di chuyen</strong> (vi pham Dieu 71 Luat Giao thong Nhat Ban)</li>
                <li>Tu phan doan tinh huong giao thong thuc te, khong phu thuoc hoan toan vao AI</li>
                <li>Dung xe o noi an toan truoc khi thao tac ung dung</li>
              </ul>
              <p>Navinext <strong>khong chiu trach nhiem</strong> ve tai nan, vi pham giao thong hoac thiet hai phat sinh tu viec su dung ung dung.</p>
            </section>

            <section className="legal-section" id="apk">
              <h2>5. Quy dinh ve APK/XAPK</h2>
              <div className="legal-highlight legal-highlight--warning">
                <p><strong>Canh bao:</strong> Navinext chi phan phoi chinh thuc qua <strong>Google Play Store</strong> va <strong>Apple App Store</strong>.</p>
              </div>
              <p>Neu ban tai va cai dat ban APK/XAPK tu nguon khong chinh thuc:</p>
              <ul>
                <li>Chung toi <strong>khong dam bao tinh an toan</strong> cua ban cai dat do</li>
                <li>File co the bi chinh sua, chen ma doc hoac danh cap du lieu</li>
                <li>Ban tu chiu <strong>toan bo rui ro</strong> ve bao mat va du lieu ca nhan</li>
                <li>Chung toi khong ho tro ky thuat cho cac ban cai dat khong chinh thuc</li>
                <li>Viec tu y can thiep vao ma nguon (reverse engineering, decompile) la <strong>vi pham dieu khoan</strong></li>
              </ul>
            </section>

            <section className="legal-section" id="subscription">
              <h2>6. Goi Subscription</h2>
              <h3>6.1 Cac goi dich vu</h3>
              <ul>
                <li><strong>Early Bird (Mien phi):</strong> Dan duong co ban, dich bien bao (gioi han), canh bao ngo hep</li>
                <li><strong>Navigator Pro:</strong> Day du tinh nang AI, OBD-II, khong gioi han dich bien bao, uu tien ho tro</li>
                <li><strong>Fleet Master:</strong> Goi doanh nghiep, quan ly nhieu xe, API tich hop, lien he de bao gia</li>
              </ul>
              <h3>6.2 Thanh toan</h3>
              <ul>
                <li>Phi duoc tinh theo chu ky <strong>thang hoac nam</strong></li>
                <li>Thanh toan qua Google Play / Apple App Store</li>
                <li>Goi nam duoc <strong>giam 17%</strong> so voi goi thang</li>
              </ul>
              <h3>6.3 Gia han & huy</h3>
              <ul>
                <li>Goi tu dong gia han vao cuoi moi chu ky</li>
                <li>Huy goi truoc it nhat <strong>24 gio</strong> truoc ngay gia han</li>
                <li>Sau khi huy, ban van su dung duoc den het chu ky da thanh toan</li>
                <li>Khong hoan tien cho phan chu ky chua su dung</li>
              </ul>
            </section>

            <section className="legal-section" id="quy-tac">
              <h2>7. Quy tac su dung</h2>
              <p>Khi su dung Navinext, ban <strong>khong duoc</strong>:</p>
              <ul>
                <li>Su dung ung dung cho muc dich bat hop phap</li>
                <li>Can thiep, reverse engineer hoac decompile ma nguon</li>
                <li>Sao chep, phan phoi lai noi dung hoac du lieu ban do</li>
                <li>Su dung bot, crawler hoac cong cu tu dong trai phep</li>
                <li>Gia mao thong tin, vi tri hoac danh tinh</li>
                <li>Spam hoac lam dung he thong bao cao cong dong</li>
                <li>Su dung dien thoai khi dang lai xe</li>
              </ul>
            </section>

            <section className="legal-section" id="so-huu">
              <h2>8. So huu tri tue</h2>
              <p>Tat ca noi dung, thiet ke, ma nguon, thuat toan AI, du lieu ban do va thuong hieu Navinext thuoc quyen so huu cua chung toi. Ban khong duoc sao chep, sua doi hoac phan phoi bat ky phan nao ma khong co su cho phep bang van ban.</p>
            </section>

            <section className="legal-section" id="gioi-han">
              <h2>9. Gioi han trach nhiem</h2>
              <ul>
                <li>Dich vu duoc cung cap "nguyen trang" (as-is)</li>
                <li>Chung toi <strong>khong dam bao do chinh xac 100%</strong> cua dan duong, dich thuat bien bao va du lieu OBD-II</li>
                <li>Khong chiu trach nhiem ve thiet hai gian tiep tu viec su dung dich vu</li>
                <li>Du lieu gia xang cong dong mang tinh tham khao, co the khong chinh xac</li>
                <li>Tong muc boi thuong khong vuot qua so tien ban da thanh toan trong 12 thang gan nhat</li>
              </ul>
            </section>

            <section className="legal-section" id="cham-dut">
              <h2>10. Cham dut dich vu</h2>
              <p>Chung toi co quyen tam ngung hoac cham dut tai khoan neu:</p>
              <ul>
                <li>Vi pham dieu khoan su dung</li>
                <li>Su dung ban APK/XAPK khong chinh thuc</li>
                <li>Can thiep vao ma nguon hoac he thong</li>
                <li>Hoat dong gian lan hoac lam dung bao cao cong dong</li>
                <li>Khong thanh toan phi dich vu (goi tra phi)</li>
              </ul>
            </section>

            <section className="legal-section" id="luat">
              <h2>11. Luat ap dung</h2>
              <p>Cac dieu khoan nay duoc dieu chinh boi phap luat Nhat Ban. Moi tranh chap se duoc giai quyet tai toa an co tham quyen tai Tokyo, Nhat Ban.</p>
              <p>Chung toi co the cap nhat dieu khoan theo thoi gian. Thay doi se duoc thong bao truoc <strong>30 ngay</strong> qua ung dung hoac email.</p>
            </section>

            <section className="legal-section" id="lien-he">
              <h2>12. Lien he</h2>
              <p>Neu co cau hoi ve dieu khoan su dung:</p>
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
