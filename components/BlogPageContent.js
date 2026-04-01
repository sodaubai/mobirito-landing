"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

function BlogIcon({ category }) {
  if (category && category.toLowerCase().includes("kinh nghi")) return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <path d="M40 8L8 72h64L40 8z" stroke="#F15A22" strokeWidth="3" fill="none"/>
      <text x="40" y="52" textAnchor="middle" fill="#F15A22" fontSize="14" fontWeight="bold">!</text>
      <text x="40" y="68" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="600">TOMARE</text>
    </svg>
  );
  if (category && category.toLowerCase().includes("công ngh")) return (
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

const BG_GRADIENTS = [
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  "linear-gradient(135deg, #0D0D0D 0%, #1E1E1E 50%, #2C2C2C 100%)",
  "linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%)",
];

const POSTS_PER_PAGE = 6;

export default function BlogPageContent({ posts = [] }) {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <ScrollReveal>
            <p className="blog-hero__tag">Blog</p>
            <h1 className="blog-hero__title">
              Kiến thức lái xe & Công nghệ tại Nhật Bản
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
            {visiblePosts.map((post, i) => {
              const c = post.content || {};
              const bg = BG_GRADIENTS[i % BG_GRADIENTS.length];
              const thumbUrl = c.thumbnail?.filename;
              const tags = c.seo_tags ? c.seo_tags.split(",").map(t => t.trim()) : [];
              return (
                <ScrollReveal key={post.id || i} delay={i * 120}>
                  <article className="blog-card">
                    <div
                      className="blog-card__image"
                      style={thumbUrl
                        ? { backgroundImage: \`url(\${thumbUrl}/m/600x400)\`, backgroundSize: "cover", backgroundPosition: "center" }
                        : { background: bg }
                      }
                    >
                      {!thumbUrl && (
                        <div className="blog-card__image-icon">
                          <BlogIcon category={c.category} />
                        </div>
                      )}
                      <div className="blog-card__overlay">
                        <span className="blog-card__read-btn">Đọc thêm</span>
                      </div>
                    </div>
                    <div className="blog-card__body">
                      <div className="blog-card__meta">
                        <span className="blog-card__category">{c.category || "Blog"}</span>
                        <span className="blog-card__date">{c.published_date || ""}</span>
                      </div>
                      <h3 className="blog-card__title">{c.title || post.name}</h3>
                      <p className="blog-card__summary">{c.summary || ""}</p>
                      <div className="blog-card__footer">
                        <span className="blog-card__read-time">{c.read_time || ""}</span>
                        <div className="blog-card__tags">
                          {tags.map(tag => (
                            <span key={tag} className="blog-card__tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
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
