"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const BLOG_POSTS = [
  {
    id: 1,
    slug: "bien-bao-tomare-mat-tien-oan",
    title: '"Tomare" và những biển báo dễ gây mất tiền oan nhất tại Nhật Bản',
    category: "Kinh nghiệm lái xe",
    date: "28/03/2026",
    readTime: "5 phút đọc",
    thumbnailBg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    thumbnailIcon: "warning",
    summary: "Phân tích các lỗi sai phổ biến của người Việt khi mới lái xe tại Nhật. Giới thiệu cách Navinext dùng AI để cảnh báo các điểm này trước 200m.",
    tags: ["kinh nghiệm lái xe tại nhật", "biển báo giao thông nhật bản"],
  },
  {
    id: 2,
    slug: "google-maps-chua-du-ngo-hep-tokyo",
    title: "Tại sao Google Maps vẫn chưa đủ để bạn tự tin lái xe vào ngõ hẹp tại Tokyo?",
    category: "Công nghệ",
    date: "22/03/2026",
    readTime: "7 phút đọc",
    thumbnailBg: "linear-gradient(135deg, #0D0D0D 0%, #1E1E1E 50%, #2C2C2C 100%)",
    thumbnailIcon: "map",
    summary: "Phân tích điểm yếu của các app bản đồ toàn cầu (không có dữ liệu chiều rộng đường chính xác). Giới thiệu thuật toán lọc đường >2.5m của Navinext.",
    tags: ["app dẫn đường tránh ngõ hẹp", "bản đồ ô tô nhật bản"],
  },
  {
    id: 3,
    slug: "tiet-kiem-20-chi-phi-van-hanh",
    title: "Cách tiết kiệm 20% chi phí vận hành xe hàng tháng nhờ tính năng Cost Tracking",
    category: "Tiết kiệm chi phí",
    date: "15/03/2026",
    readTime: "6 phút đọc",
    thumbnailBg: "linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%)",
    thumbnailIcon: "chart",
    summary: "Hướng dẫn cách dùng Navinext để tìm trạm xăng rẻ nhất qua dữ liệu Crowdsource và cách theo dõi lịch bảo trì để tránh hỏng hóc nặng.",
    tags: ["giá xăng nhật bản", "quản lý chi phí xe hơi"],
  },
];

function BlogIcon({ type }) {
  if (type === "warning") return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <path d="M40 8L8 72h64L40 8z" stroke="#F15A22" strokeWidth="3" fill="none"/>
      <text x="40" y="52" textAnchor="middle" fill="#F15A22" fontSize="14" fontWeight="bold">!</text>
      <text x="40" y="68" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="600">TOMARE</text>
    </svg>
  );
  if (type === "map") return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect x="15" y="20" width="50" height="40" rx="6" stroke="#F15A22" strokeWidth="2" fill="none"/>
      <path d="M25 35h30M25 45h20" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="55" cy="45" r="4" stroke="#F15A22" strokeWidth="1.5" fill="none"/>
      <path d="M55 41v8M51 45h8" stroke="#F15A22" strokeWidth="1"/>
    </svg>
  );
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect x="20" y="25" width="40" height="35" rx="4" stroke="#F15A22" strokeWidth="2" fill="none"/>
      <path d="M28 50V40M36 50V35M44 50V42M52 50V38" stroke="#F15A22" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="55" cy="25" r="10" stroke="#F15A22" strokeWidth="2" fill="none"/>
      <text x="55" y="29" textAnchor="middle" fill="#F15A22" fontSize="10" fontWeight="bold">$</text>
    </svg>
  );
}

const POSTS_PER_PAGE = 6;

export default function BlogPageContent() {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const visiblePosts = BLOG_POSTS.slice(0, visibleCount);
  const hasMore = visibleCount < BLOG_POSTS.length;

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <ScrollReveal>
            <p className="blog-hero__tag">Blog</p>
            <h1 className="blog-hero__title">
              Kiến thức lái xe &amp; Công nghệ tại Nhật Bản
            </h1>
            <p className="blog-hero__subtitle">
              Chia sẻ kinh nghiệm, mẹo hay và giải pháp công nghệ giúp bạn lái xe an toàn, tiết kiệm hơn mỗi ngày.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            {visiblePosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 120}>
                <article className="blog-card">
                  <div className="blog-card__image" style={{ background: post.thumbnailBg }}>
                    <div className="blog-card__image-icon">
                      <BlogIcon type={post.thumbnailIcon} />
                    </div>
                    <div className="blog-card__overlay">
                      <span className="blog-card__read-btn">Đọc thêm</span>
                    </div>
                  </div>
                  <div className="blog-card__body">
                    <div className="blog-card__meta">
                      <span className="blog-card__category">{post.category}</span>
                      <span className="blog-card__date">{post.date}</span>
                    </div>
                    <h3 className="blog-card__title">{post.title}</h3>
                    <p className="blog-card__summary">{post.summary}</p>
                    <div className="blog-card__footer">
                      <span className="blog-card__read-time">{post.readTime}</span>
                      <div className="blog-card__tags">
                        {post.tags.map(tag => (
                          <span key={tag} className="blog-card__tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {hasMore && (
            <div className="blog-load-more">
              <button
                className="btn btn-primary"
                onClick={() => setVisibleCount(prev => prev + POSTS_PER_PAGE)}
              >
                Tải thêm bài viết
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
