"use client";
import ScrollReveal from "./ScrollReveal";

export default function PrivacyPolicyPage() {
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

      <div className="legal-content container">
        <ScrollReveal>
          <section className="legal-section">
            <h2>1. Gioi thieu</h2>
            <p>Navinext ("chung toi") cam ket bao ve quyen rieng tu cua ban. Chinh sach bao mat nay giai thich cach chung toi thu thap, su dung, luu tru va bao ve thong tin ca nhan cua ban khi su dung ung dung Navinext va cac dich vu lien quan.</p>
          </section>

          <section className="legal-section">
            <h2>2. Thong tin chung toi thu thap</h2>
            <h3>2.1 Thong tin ban cung cap truc tiep</h3>
            <ul>
              <li>Ho ten, dia chi email khi dang ky tai khoan</li>
              <li>Thong tin xe (loai xe, bien so) de toi uu hoa dan duong</li>
              <li>Phan hoi, danh gia va noi dung ban chia se trong ung dung</li>
            </ul>
            <h3>2.2 Thong tin tu dong thu thap</h3>
            <ul>
              <li>Du lieu vi tri (GPS) khi su dung tinh nang dan duong</li>
              <li>Thong tin thiet bi (model, he dieu hanh, phien ban ung dung)</li>
              <li>Du lieu OBD-II (neu ket noi): toc do, nhien lieu, trang thai dong co</li>
              <li>Nhat ky su dung ung dung va tuong tac</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Muc dich su dung thong tin</h2>
            <ul>
              <li>Cung cap va cai thien dich vu dan duong AI</li>
              <li>Ca nhan hoa trai nghiem nguoi dung</li>
              <li>Dich bien bao va huong dan giao thong sang tieng Viet</li>
              <li>Phan tich du lieu giao thong cong dong de toi uu tuyen duong</li>
              <li>Quan ly chi phi xe (xang, cau duong, bao tri)</li>
              <li>Gui thong bao quan trong ve cap nhat va bao tri</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Chia se thong tin</h2>
            <p>Chung toi <strong>khong ban</strong> thong tin ca nhan cua ban. Chung toi chi chia se trong cac truong hop:</p>
            <ul>
              <li>Voi su dong y cua ban</li>
              <li>Voi doi tac cung cap dich vu (xu ly thanh toan, luu tru du lieu) theo hop dong bao mat</li>
              <li>Khi phap luat yeu cau</li>
              <li>Du lieu giao thong an danh de cai thien dich vu cong dong</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Bao mat du lieu</h2>
            <p>Chung toi ap dung cac bien phap bao mat tieu chuan nganh:</p>
            <ul>
              <li>Ma hoa du lieu truyen tai (TLS/SSL)</li>
              <li>Ma hoa du lieu luu tru</li>
              <li>Kiem soat truy cap nghiem ngat</li>
              <li>Kiem tra bao mat dinh ky</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Quyen cua ban</h2>
            <ul>
              <li>Truy cap va xem thong tin ca nhan cua ban</li>
              <li>Chinh sua hoac cap nhat thong tin</li>
              <li>Yeu cau xoa tai khoan va du lieu</li>
              <li>Tu choi nhan thong bao tiep thi</li>
              <li>Rut lai su dong y xu ly du lieu</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Luu tru du lieu</h2>
            <p>Du lieu ca nhan duoc luu tru trong thoi gian ban su dung dich vu. Khi ban yeu cau xoa tai khoan, chung toi se xoa du lieu trong vong 30 ngay, tru khi phap luat yeu cau luu tru lau hon.</p>
          </section>

          <section className="legal-section">
            <h2>8. Cookie va cong nghe theo doi</h2>
            <p>Ung dung Navinext su dung cookie va cong nghe tuong tu de:</p>
            <ul>
              <li>Duy tri phien dang nhap</li>
              <li>Ghi nho tuy chon cua ban</li>
              <li>Phan tich hieu suat ung dung</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>9. Thay doi chinh sach</h2>
            <p>Chung toi co the cap nhat chinh sach nay theo thoi gian. Moi thay doi quan trong se duoc thong bao qua ung dung hoac email. Viec tiep tuc su dung dich vu sau khi cap nhat dong nghia voi viec ban chap nhan chinh sach moi.</p>
          </section>

          <section className="legal-section">
            <h2>10. Lien he</h2>
            <p>Neu ban co cau hoi ve chinh sach bao mat, vui long lien he:</p>
            <ul>
              <li>Email: <a href="mailto:support@navinext.jp">support@navinext.jp</a></li>
              <li>Website: <a href="https://navinext.huynguyen.it.com">navinext.huynguyen.it.com</a></li>
            </ul>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
