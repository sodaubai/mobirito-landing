"use client";
import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const SECTIONS = [
  { id: "thu-thap", title: "Thu thap du lieu" },
  { id: "muc-dich", title: "Muc dich su dung" },
  { id: "bao-mat", title: "Cam ket bao mat" },
  { id: "quyen", title: "Quyen cua nguoi dung" },
  { id: "camera", title: "Chinh sach camera AI" },
  { id: "obd", title: "Du lieu OBD-II" },
  { id: "cong-dong", title: "Du lieu cong dong" },
  { id: "cookie", title: "Cookie & theo doi" },
  { id: "luu-tru", title: "Luu tru du lieu" },
  { id: "thay-doi", title: "Thay doi chinh sach" },
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
            <h1 className="legal-hero-title">Chinh sach bao mat</h1>
            <p className="legal-hero-desc">Cap nhat lan cuoi: 01/04/2026</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="legal-wrapper container">
        <TOC sections={SECTIONS} activeId={activeId} />

        <div className="legal-content">
          <ScrollReveal>
            <section className="legal-section" id="thu-thap">
              <h2>1. Du lieu chung toi thu thap</h2>
              <h3>1.1 Du lieu vi tri (GPS)</h3>
              <p>Navinext thu thap du lieu vi tri GPS trong qua trinh su dung tinh nang dan duong de cung cap huong dan lo trinh chinh xac, canh bao ngo hep va tinh toan khoang cach.</p>
              <h3>1.2 Hinh anh tu camera AI (Dashcam)</h3>
              <p>Camera AI chi su dung de <strong>nhan dien bien bao giao thong va dich sang tieng Viet</strong> theo thoi gian thuc. Hinh anh duoc xu ly tren thiet bi (on-device) hoac gui len server de phan tich AI.</p>
              <p><strong>Cam ket:</strong> Navinext <strong>khong luu tru khuon mat nguoi di duong</strong>. Hinh anh chi duoc xu ly tam thoi de nhan dien bien bao, sau do bi xoa ngay lap tuc.</p>
              <h3>1.3 Du lieu xe qua OBD-II</h3>
              <p>Khi ket noi OBD-II, chung toi thu thap: toc do xe, muc nhien lieu, trang thai dong co, so km da di. Du lieu nay phuc vu tinh nang quan ly chi phi va canh bao bao tri.</p>
              <h3>1.4 Thong tin tai khoan</h3>
              <ul>
                <li>Ho ten, email khi dang ky</li>
                <li>Thong tin xe (loai xe, bien so) de toi uu dan duong</li>
                <li>Thong tin thiet bi (model, he dieu hanh, phien ban app)</li>
              </ul>
            </section>

            <section className="legal-section" id="muc-dich">
              <h2>2. Muc dich su dung du lieu</h2>
              <ul>
                <li><strong>Toi uu lo trinh:</strong> Su dung GPS va du lieu giao thong cong dong de tim duong nhanh nhat, tranh ngo hep</li>
                <li><strong>Canh bao an toan:</strong> Nhan dien bien bao, gioi han toc do, vung cam qua camera AI</li>
                <li><strong>Cap nhat gia xang cong dong:</strong> Tong hop du lieu tu nguoi dung de hien thi gia xang chinh xac tai cac tram gan nhat</li>
                <li><strong>Quan ly chi phi xe:</strong> Theo doi xang, phi cau duong, bao tri qua du lieu OBD-II</li>
                <li><strong>Ca nhan hoa trai nghiem:</strong> Ghi nho tuyen duong thuong di, tuy chon ngon ngu</li>
                <li><strong>Cai thien dich vu:</strong> Phan tich du lieu an danh de nang cap AI va ban do</li>
              </ul>
            </section>

            <section className="legal-section" id="bao-mat">
              <h2>3. Cam ket bao mat</h2>
              <div className="legal-highlight">
                <p><strong>Navinext cam ket khong ban thong tin ca nhan cua ban cho bat ky ben thu ba nao.</strong></p>
              </div>
              <p>Chung toi ap dung cac bien phap bao mat tieu chuan nganh:</p>
              <ul>
                <li>Ma hoa du lieu truyen tai bang TLS/SSL</li>
                <li>Ma hoa du lieu luu tru (AES-256)</li>
                <li>Kiem soat truy cap nghiem ngat theo nguyen tac toi thieu quyen (least privilege)</li>
                <li>Kiem tra bao mat va penetration testing dinh ky</li>
                <li>Du lieu camera AI duoc xu ly va xoa ngay, khong luu tru dai han</li>
              </ul>
              <p>Chung toi chi chia se du lieu trong cac truong hop:</p>
              <ul>
                <li>Voi su dong y cua ban</li>
                <li>Voi doi tac ky thuat (xu ly thanh toan, luu tru cloud) theo hop dong bao mat nghiem ngat</li>
                <li>Khi phap luat Nhat Ban yeu cau</li>
                <li>Du lieu giao thong <strong>an danh hoa</strong> de phuc vu cong dong</li>
              </ul>
            </section>

            <section className="legal-section" id="quyen">
              <h2>4. Quyen cua nguoi dung</h2>
              <p>Ban co day du quyen kiem soat du lieu cua minh:</p>
              <ul>
                <li><strong>Xoa du lieu hanh trinh:</strong> Xoa lich su lo trinh bat ky luc nao trong Settings</li>
                <li><strong>Tat chia se vi tri:</strong> Vo hieu hoa GPS sharing ma van dung dan duong co ban</li>
                <li><strong>Tat camera AI:</strong> Ngung tinh nang nhan dien bien bao neu khong muon</li>
                <li><strong>Xuat du lieu:</strong> Tai xuong toan bo du lieu ca nhan cua ban</li>
                <li><strong>Xoa tai khoan:</strong> Yeu cau xoa toan bo tai khoan va du lieu lien quan</li>
                <li><strong>Tu choi thong bao:</strong> Huy nhan email tiep thi bat ky luc nao</li>
              </ul>
            </section>

            <section className="legal-section" id="camera">
              <h2>5. Chinh sach camera AI</h2>
              <p>Day la tinh nang quan trong cua Navinext, chung toi minh bach hoa quy trinh xu ly:</p>
              <ul>
                <li>Camera chi <strong>bat khi nguoi dung kich hoat</strong> tinh nang dan duong</li>
                <li>Hinh anh duoc xu ly bang AI de nhan dien bien bao giao thong Nhat Ban</li>
                <li>Ket qua dich duoc hien thi tren man hinh theo thoi gian thuc</li>
                <li><strong>Khong nhan dien khuon mat</strong> nguoi di duong hay tai xe khac</li>
                <li><strong>Khong ghi am</strong> am thanh tu moi truong</li>
                <li>Hinh anh <strong>khong duoc luu tru</strong> sau khi xu ly xong</li>
              </ul>
            </section>

            <section className="legal-section" id="obd">
              <h2>6. Du lieu OBD-II</h2>
              <p>Khi ban ket noi thiet bi OBD-II voi Navinext:</p>
              <ul>
                <li>Du lieu chi duoc doc (read-only), Navinext <strong>khong can thiep vao he thong xe</strong></li>
                <li>Thong tin thu thap: toc do, RPM, muc nhien lieu, nhiet do dong co, ma loi</li>
                <li>Du lieu phuc vu: tinh toan chi phi xang, nhac bao tri, canh bao su co</li>
                <li>Ban co the ngat ket noi OBD-II bat ky luc nao</li>
              </ul>
            </section>

            <section className="legal-section" id="cong-dong">
              <h2>7. Du lieu cong dong</h2>
              <p>Navinext su dung du lieu cong dong de cai thien trai nghiem cho tat ca nguoi dung:</p>
              <ul>
                <li><strong>Gia xang:</strong> Nguoi dung bao gia xang tai cac tram, du lieu duoc tong hop an danh</li>
                <li><strong>Tinh trang giao thong:</strong> Du lieu luu luong tu GPS duoc an danh hoa de canh bao ket xe</li>
                <li><strong>Canh bao ngo hep:</strong> Bao cao tu cong dong ve duong hep, kho di</li>
              </ul>
              <p>Moi du lieu cong dong deu duoc <strong>an danh hoa</strong> truoc khi tong hop. Khong ai co the truy nguoc den ca nhan ban.</p>
            </section>

            <section className="legal-section" id="cookie">
              <h2>8. Cookie & cong nghe theo doi</h2>
              <ul>
                <li>Duy tri phien dang nhap</li>
                <li>Ghi nho tuy chon ca nhan (ngon ngu, don vi do)</li>
                <li>Phan tich hieu suat ung dung (analytics an danh)</li>
              </ul>
              <p>Chung toi <strong>khong su dung cookie</strong> de theo doi hoat dong cua ban tren cac website khac.</p>
            </section>

            <section className="legal-section" id="luu-tru">
              <h2>9. Luu tru du lieu</h2>
              <p>Du lieu ca nhan duoc luu tru trong thoi gian ban su dung dich vu. Khi ban yeu cau xoa tai khoan:</p>
              <ul>
                <li>Du lieu ca nhan: xoa trong vong <strong>30 ngay</strong></li>
                <li>Du lieu hanh trinh: xoa ngay lap tuc</li>
                <li>Du lieu cong dong (an danh): duoc giu lai de phuc vu cong dong</li>
                <li>Du lieu thanh toan: luu tru theo yeu cau phap luat Nhat Ban</li>
              </ul>
            </section>

            <section className="legal-section" id="thay-doi">
              <h2>10. Thay doi chinh sach</h2>
              <p>Chung toi co the cap nhat chinh sach nay. Moi thay doi quan trong se duoc thong bao truoc <strong>30 ngay</strong> qua ung dung hoac email. Viec tiep tuc su dung dich vu dong nghia ban chap nhan chinh sach moi.</p>
            </section>

            <section className="legal-section" id="lien-he">
              <h2>11. Lien he</h2>
              <p>Neu co cau hoi ve quyen rieng tu hoac du lieu ca nhan:</p>
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
