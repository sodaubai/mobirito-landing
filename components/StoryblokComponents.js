
import FaqDetails from "./FaqDetails";
import { renderRichText } from "../lib/richtext";


function renderText(val) {
  if (!val) return null;
  if (typeof val === "string") return val;
  if (typeof val === "object" && val.type === "doc") return renderRichText(val);
  return String(val);
}

// =================== ATOMS ===================

function NavItem({ blok }) {
  return <a href={blok.link?.url || "#"}>{blok.label}</a>;
}

function BulletItem({ blok }) {
  return <li>{blok.text}</li>;
}

function FeatureCard({ blok, showImage }) {
  const colorClass = `icon-${blok.icon_color || "orange"}`;
  const imgSrc = blok.image?.filename;
  const hasImage = showImage && imgSrc;
  return (
    <div className={`card${hasImage ? " card-has-image" : ""}`}>
      {hasImage ? (
        <>
          <div className="card-image">
            <img src={imgSrc} alt={blok.title || ""} />
          </div>
          <div className="card-text">
            <h3>{blok.title}</h3>
            <p>{blok.description}</p>
          </div>
        </>
      ) : (
        <>
          <div className={`icon ${colorClass}`}>
            {blok.icon_color === "orange" ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> : blok.icon_color === "blue" ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>}
          </div>
          <h3>{blok.title}</h3>
          <p>{blok.description}</p>
        </>
      )}
    </div>
  );
}

const statIcons = {
  download: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
  star: <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  support: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z"/></svg>,
  map: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
};

function StatItem({ blok }) {
  return (
    <div className="stat-card">
      <div className="stat-card-icon">
        {statIcons[blok.icon] || statIcons.star}
      </div>
      <div className="stat-card-value">{blok.value}</div>
      <div className="stat-card-label">{blok.label}</div>
    </div>
  );
}

function StepItem({ blok }) {
  return (
    <div className="step-card">
      <div className="step-num">{blok.step_number}</div>
      <h3>{blok.title}</h3>
      <p>{blok.description}</p>
    </div>
  );
}

function TestimonialCard({ blok }) {
  const avatarSrc = blok.avatar?.filename;
  return (
    <div className="testimonial-card">
      <div className="quote-icon">“</div>
      <div className="author">
        {avatarSrc ? (
          <img className="avatar" src={avatarSrc} alt={blok.name || ""} />
        ) : (
          <div className="avatar" />
        )}
        <div>
          <div className="name">{blok.name}</div>
          <div className="role">{blok.role}</div>
        </div>
      </div>
      <div className="text">{blok.quote}</div>
    </div>
  );
}

function PricingFeature({ blok }) {
  return <li className={blok.enabled === false ? "disabled" : ""}>{blok.text}</li>;
}

function PricingCard({ blok }) {
  return (
    <div className={`price-card${blok.is_featured ? " featured" : ""}`}>
      <div className="plan-name">{blok.plan_name}</div>
      <div className="price">{blok.price}</div>
      <div className="period">{blok.billing_period}</div>
      <ul className="features">
        {blok.features?.map((f) => <PricingFeature key={f._uid} blok={f} />)}
      </ul>
      <button className={`btn ${blok.is_featured ? "btn-primary" : "btn-dark"} btn-sm`} style={{width:"100%"}}>
        {blok.cta_label}
      </button>
    </div>
  );
}

function FaqItem({ blok }) {
  return (
    <FaqDetails question={blok.question} defaultOpen={blok.default_open || false}>
      {typeof blok.answer === "object" ? renderRichText(blok.answer) : blok.answer}
    </FaqDetails>
  );
}

function SocialLink({ blok }) {
  const svgIcons = {
    facebook: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
    twitter: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    discord: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>,
    linkedin: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
    instagram: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>,
  };
  return <a href={blok.url?.url || "#"} className="social-icon">{svgIcons[blok.platform] || blok.platform?.[0]}</a>;
}

function FooterColumn({ blok }) {
  return (
    <div>
      <h4>{blok.heading}</h4>
      <ul>{blok.links?.map((l) => <li key={l._uid}><a href={l.link?.url || "#"}>{l.label}</a></li>)}</ul>
    </div>
  );
}

function LogoItem({ blok }) {
  return <span>{blok.company_name}</span>;
}

function LegalLink({ blok }) {
  return <a href={blok.url?.url || "#"}>{blok.label}</a>;
}

function BlogPostCard({ blok }) {
  return (
    <div className={`blog-card ${blok.variant || "default"}`}>
      <div className="blog-card-img" style={{background:"#e0e0e0",height:blok.variant==="large"?240:160,borderRadius:12,marginBottom:12}} />
      <div className="meta"><span className="cat">{blok.category}</span> · <span>{blok.read_time}</span></div>
      <h3>{blok.title}</h3>
      {blok.excerpt && <p>{blok.excerpt}</p>}
      <a href={blok.link?.url||"#"}>Read More →</a>
    </div>
  );
}

// =================== SECTIONS ===================

function SiteNavbar({ blok }) {
  return (
    <header style={{position:"absolute",width:"100%",zIndex:10}}>
      <div className="container">
        <div className="navbar">
          <a className="logo" href="/">
            <img src={blok.logo?.filename || "/navinext-logo.svg"} alt={blok.logo_text || "Navinext"} className="logo-img" />
          </a>
          <nav>{blok.nav_items?.map((i) => <NavItem key={i._uid} blok={i} />)}</nav>
          <div className="nav-actions">
            <a className="login" href={blok.login_link?.url || "#"}>{blok.login_label}</a>
            <a className="btn btn-dark btn-sm" href={blok.cta_link?.url || "#"}>{blok.cta_label}</a>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSection({ blok }) {
  return (
    <section className="hero">
      <div className="container">
        <div>
          <h1 style={{fontSize:blok.headline_size||undefined}}>{blok.headline}</h1>
          <p>{blok.subtext}</p>
          <div className="ctas">
            <a className="btn btn-primary" href={blok.primary_cta_link?.url || "#"}>{blok.primary_cta_label}</a>
            <a className="btn btn-secondary" href={blok.secondary_cta_link?.url || "#"}>{blok.secondary_cta_label}</a>
          </div>
          <div className="social-proof">
            <div className="avatar-stack">
              <img className="avatar-stack-item" src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
              <img className="avatar-stack-item" src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
              <img className="avatar-stack-item" src="https://randomuser.me/api/portraits/men/67.jpg" alt="" />
              <img className="avatar-stack-item" src="https://randomuser.me/api/portraits/women/17.jpg" alt="" />
              <img className="avatar-stack-item" src="https://randomuser.me/api/portraits/men/85.jpg" alt="" />
            </div>
            <span>{blok.social_proof_text}</span>
          </div>
        </div>
        <div className="phone-mockup">
          {blok.hero_image?.filename ? (
            <img src={blok.hero_image.filename} alt={blok.hero_image.alt || "Hero"} style={{maxHeight:500,borderRadius:16,objectFit:"contain",width:"100%"}} />
          ) : (
            <img src="/images/app-showcase.svg" alt="Navinext App" style={{maxHeight:500,margin:"0 auto"}} />
          )}
        </div>
      </div>
    </section>
  );
}

function LogoBar({ blok }) {
  return (
    <section className="logo-bar">
      <div className="container">
        <p>{blok.title}</p>
        <div className="logos">{blok.logos?.map((l) => <LogoItem key={l._uid} blok={l} />)}</div>
      </div>
    </section>
  );
}

function FeaturesGrid({ blok }) {
  const isDark = blok.background === "dark";
  return (
    <section className={`section features-grid${isDark ? " bg-dark" : ""}`}>
      <div className="container" style={{textAlign:"center"}}>
        <h2 className="section-heading" style={{fontSize:blok.heading_size||undefined,textAlign:blok.heading_align||"center",color:isDark?"#fff":undefined}}>{blok.heading}</h2>
        {blok.description && <p className="section-desc" style={{margin:"0 auto",color:isDark?"rgba(255,255,255,0.7)":undefined}}>{blok.description}</p>}
        <div className="cards" style={blok.columns ? {gridTemplateColumns:`repeat(${blok.columns}, 1fr)`} : undefined}>{blok.features?.map((f) => <FeatureCard showImage={isDark} key={f._uid} blok={f} />)}</div>
      </div>
    </section>
  );
}

function ImageTextBlock({ blok }) {
  const isRight = blok.image_position === "right";
  const bgClass = blok.background === "light_gray" ? " bg-light" : "";
  return (
    <section className={`section${bgClass}`}>
      <div className="container">
        <div className={`img-text${isRight ? " reversed" : ""}`}>
          <div style={{borderRadius:24,minHeight:380,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
            {blok.image?.filename ? (
              <img src={blok.image.filename} alt={blok.image.alt || blok.heading || ""} style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:24}} />
            ) : (
              <img src={isRight ? "/images/sign-translation.svg" : "/images/narrow-road-avoid.svg"} alt={blok.heading || ""} style={{width:"100%",borderRadius:24}} />
            )}
          </div>
          <div>
            <h2 style={{fontSize:blok.heading_size||undefined,textAlign:blok.heading_align||undefined}}>{blok.heading}</h2>
            <div className="body-text">{typeof blok.body === "object" ? renderRichText(blok.body) : blok.body}</div>
            {blok.bullet_items?.length > 0 && (
              <ul className="bullets">{blok.bullet_items.map((b) => <BulletItem key={b._uid} blok={b} />)}</ul>
            )}
            {blok.cta_label && <a className="btn btn-dark" href={blok.cta_link?.url || "#"}>{blok.cta_label}</a>}
          </div>
        </div>
      </div>
    </section>
  );
}

function AppShowcase({ blok }) {
  return (
    <section className="section">
      <div className="app-showcase">
        {blok.image?.filename ? (
          <img src={blok.image.filename} alt={blok.image.alt || "App showcase"} style={{maxHeight:440,borderRadius:28,margin:"0 auto",objectFit:"contain"}} />
        ) : (
          <img src="/images/app-showcase.svg" alt="Navinext App" style={{maxHeight:480,margin:"0 auto",objectFit:"contain"}} />
        )}
      </div>
    </section>
  );
}

function StepsSection({ blok }) {
  return (
    <section className="section steps-section">
      <div className="container">
        <h2 className="section-heading" style={{fontSize:blok.heading_size||undefined,textAlign:blok.heading_align||"center"}}>{blok.heading}</h2>
        <div className="steps-grid">{blok.steps?.map((s) => <StepItem key={s._uid} blok={s} />)}</div>
      </div>
    </section>
  );
}

function TestimonialsSection({ blok }) {
  return (
    <section className="section">
      <div className="container">
        <div className="testimonials-section">
          <div className="header">
            <h2 className="section-heading" style={{fontSize:blok.heading_size||undefined}}>{blok.heading}</h2>
            <div className="trustpilot">
              <span className="stars">★★★★★</span> {blok.trustpilot_rating} ({blok.trustpilot_reviews})
            </div>
          </div>
          <div className="testimonials-grid">
            {blok.testimonials?.map((t) => <TestimonialCard key={t._uid} blok={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection({ blok }) {
  return (
    <section className="section">
      <div className="pricing-section">
        <div style={{textAlign:"center"}}>
          <h2 className="section-heading" style={{color:"#fff",fontSize:blok.heading_size||undefined,textAlign:blok.heading_align||"center"}}>{blok.heading}</h2>
          {blok.show_billing_toggle && (
            <div className="toggle">
              <span className="active">{blok.monthly_label}</span>
              <span>{blok.yearly_label}</span>
            </div>
          )}
        </div>
        <div className="pricing-cards">{blok.plans?.map((p) => <PricingCard key={p._uid} blok={p} />)}</div>
      </div>
    </section>
  );
}

function FaqSection({ blok }) {
  return (
    <section className="section">
      <div className="container">
        <div className="faq-section">
          <h2 className="section-heading" style={{textAlign:blok.heading_align||"center",marginBottom:32,fontSize:blok.heading_size||undefined}}>{blok.heading}</h2>
          {blok.items?.map((i) => <FaqItem key={i._uid} blok={i} />)}
        </div>
      </div>
    </section>
  );
}

function AppDownloadCta({ blok }) {
  return (
    <section className="section">
      <div className="download-cta">
        <div>
          <h2>{blok.heading}</h2>
          <p>{blok.body}</p>
          <div className="label">{blok.download_label}</div>
          <div className="stores">

            <a href={blok.play_store_url?.url || "#"} className="store-badge">
              <svg width="20" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.144 1.24a1 1 0 0 1 0 1.732l-2.144 1.24-2.53-2.53 2.53-2.682zM5.864 3.458L16.8 9.79l-2.302 2.302-8.634-8.634z"/></svg><div><div className="small">Available on</div><div className="name">Play Store</div></div>
            </a>
          </div>
        </div>
        <div style={{textAlign:"center"}}>
          {blok.image?.filename ? (
            <img src={blok.image.filename} alt={blok.image.alt || "App"} style={{maxHeight:420,borderRadius:28,margin:"0 auto",objectFit:"contain"}} />
          ) : (
            <img src="/images/download-cta.svg" alt="Navinext App" style={{maxHeight:460,margin:"0 auto",objectFit:"contain"}} />
          )}
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ blok }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="brand-col">
            <div className="logo" style={{display:"flex",alignItems:"center",gap:8}}>
              <img src="/navinext-logo.svg" alt={blok.brand_name || "Navinext"} style={{height:28,filter:"brightness(0)"}} />
              <strong>{blok.brand_name}</strong>
            </div>
            <p className="tagline">{blok.tagline}</p>
          </div>
          {blok.nav_columns?.map((c) => <FooterColumn key={c._uid} blok={c} />)}
        </div>
        <div className="footer-bottom">
          <div className="socials">
            {blok.social_links?.map((s) => <SocialLink key={s._uid} blok={s} />)}
          </div>
          <div className="legal">
            {blok.legal_links?.map((l) => <LegalLink key={l._uid} blok={l} />)}
          </div>
        </div>
      </div>
    </footer>
  );
}

function PageHeroBanner({ blok }) {
  return (
    <section className="hero" style={{padding:"140px 0 60px",textAlign:"center"}}>
      <div className="container">
        <span className="btn btn-primary btn-sm" style={{marginBottom:16}}>{blok.badge_text}</span>
        <h1 style={{color:"#fff",fontSize:40,maxWidth:600,margin:"0 auto"}}>{blok.heading}</h1>
      </div>
    </section>
  );
}

function StatsBar({ blok }) {
  return (
    <section className="section stats-section">
      <div className="container">
        {blok.heading && <h2 className="section-heading" style={{textAlign:"center",marginBottom:40}}>{blok.heading}</h2>}
        <div className="stats-grid">
        {blok.stats?.map(s=><StatItem key={s._uid} blok={s}/>)}
        </div>
      </div>
    </section>
  );
}

function AboutSection({ blok }) {
  return (
    <section className="section"><div className="container">
      <h2 className="section-heading">{blok.heading}</h2>
      <div className="body-text" style={{color:"var(--gray-400)"}}>{typeof blok.body==="object"?renderRichText(blok.body):blok.body}</div>
    </div></section>
  );
}

function TeamSection({ blok }) {
  return (
    <section className="section"><div className="container" style={{textAlign:"center"}}>
      <h2 className="section-heading">{blok.heading}</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:24,marginTop:32}}>
        {blok.members?.map(m=>(
          <div key={m._uid} style={{textAlign:"center"}}>
            <div style={{width:160,height:200,background:"#e0e0e0",borderRadius:16,margin:"0 auto 12px"}}/>
            <div style={{fontWeight:700}}>{m.name}</div>
            <div style={{fontSize:14,color:"var(--gray-400)"}}>{m.role}</div>
          </div>
        ))}
      </div>
    </div></section>
  );
}

function ServicesGrid({ blok }) {
  return (
    <section className="section"><div className="container">
      <h2 className="section-heading" style={{textAlign:"center"}}>{blok.heading}</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24,marginTop:32}}>
        {blok.services?.map(s=>(
          <div key={s._uid} style={{background:s.is_highlighted?"linear-gradient(135deg,#1E1E1E,#C74A1B)":"#fff",color:s.is_highlighted?"#fff":"inherit",borderRadius:16,padding:32,border:s.is_highlighted?"none":"1px solid #eee"}}>
            <h3 style={{fontSize:18,fontWeight:700,marginBottom:8}}>{s.title}</h3>
            <p style={{fontSize:14,color:s.is_highlighted?"rgba(255,255,255,0.8)":"var(--gray-400)",marginBottom:12}}>{s.description}</p>
            <a href={s.link_url?.url||"#"} style={{fontSize:14,fontWeight:600}}>{s.link_text}</a>
          </div>
        ))}
      </div>
    </div></section>
  );
}

function NewsletterSection({ blok }) {
  return (
    <section className="section" style={{background:"linear-gradient(135deg,#0D0D0D,#1E1E1E,#C74A1B)",padding:"60px 0",color:"#fff"}}>
      <div className="container" style={{textAlign:"center",maxWidth:600}}>
        <h2 className="section-heading">{blok.heading}</h2>
        <div className="section-desc" style={{margin:"0 auto 24px"}}>{renderText(blok.description)}</div>
        <div style={{display:"flex",gap:8}}>
          <input style={{flex:1,padding:"14px 20px",borderRadius:50,border:"1px solid #ddd",fontSize:15}} placeholder={blok.input_placeholder}/>
          <button className="btn btn-dark">{blok.button_label}</button>
        </div>
      </div>
    </section>
  );
}

function PortfolioGrid({ blok }) {
  const cats = blok.filter_categories?.split(",").map(c=>c.trim()) || [];
  return (
    <section className="section"><div className="container">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:32}}>
        <h2 className="section-heading">{blok.heading}</h2>
        <div style={{display:"flex",gap:12}}>{cats.map((c,i)=><span key={i} style={{padding:"8px 16px",borderRadius:50,background:i===0?"var(--orange)":"transparent",color:i===0?"#fff":"var(--gray-400)",fontSize:14,fontWeight:600,cursor:"pointer"}}>{c}</span>)}</div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
        {blok.items?.map(p=>(
          <div key={p._uid} style={{gridColumn:p.column_span==="2"?"span 2":"span 1",background:"linear-gradient(135deg,#1E1E1E,#C74A1B)",borderRadius:12,height:p.column_span==="2"?280:200}}/>
        ))}
      </div>
    </div></section>
  );
}

function PortfolioCaseStudy({ blok }) {
  return (
    <section className="section"><div className="container">
      <div style={{background:"linear-gradient(135deg,#0D0D0D,#C74A1B)",borderRadius:24,height:300,marginBottom:32}}/>
      <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:40}}>
        <div>
          <h2 style={{fontSize:28,fontWeight:800,marginBottom:8}}>{blok.title}</h2>
          <h3 style={{fontSize:16,fontWeight:600,marginBottom:12}}>{blok.brief_heading}</h3>
          <div style={{color:"var(--gray-400)"}}>{typeof blok.brief_body==="object"?renderRichText(blok.brief_body):blok.brief_body}</div>
        </div>
        <div style={{fontSize:14}}>
          <a className="btn btn-primary btn-sm" style={{marginBottom:24,display:"inline-block"}} href={blok.visit_url?.url||"#"}>Visit Website</a>
          {[["Project Name",blok.project_name],["Client",blok.client],["Finishing Date",blok.finishing_date],["Category",blok.category],["Duration",blok.duration]].map(([k,v])=>(
            <div key={k} style={{marginBottom:8}}><strong>{k}:</strong> <span style={{color:"var(--gray-400)"}}>{v}</span></div>
          ))}
        </div>
      </div>
      {blok.info_heading && <div style={{marginTop:40}}>
        <h3 style={{fontSize:20,fontWeight:700,marginBottom:12}}>{blok.info_heading}</h3>
        <div style={{color:"var(--gray-400)",marginBottom:16}}>{typeof blok.info_body==="object"?renderRichText(blok.info_body):blok.info_body}</div>
        {blok.info_bullets?.length>0 && <ul className="bullets">{blok.info_bullets.map(b=><BulletItem key={b._uid} blok={b}/>)}</ul>}
      </div>}
    </div></section>
  );
}

function ClientFeedback({ blok }) {
  return (
    <section className="section bg-light"><div className="container" style={{maxWidth:800}}>
      <h2 className="section-heading" style={{textAlign:"center"}}>{blok.heading}</h2>
      <div style={{display:"grid",gridTemplateColumns:"1fr 2fr",gap:32,marginTop:32,background:"#fff",borderRadius:16,overflow:"hidden"}}>
        <div style={{background:"linear-gradient(135deg,#F15A22,#C74A1B)",padding:32,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <div style={{width:80,height:80,borderRadius:"50%",background:"#e0e0e0",marginBottom:12}}/>
          <div style={{fontWeight:700}}>{blok.name}</div>
          <div style={{fontSize:13,color:"var(--gray-400)"}}>{blok.role}</div>
        </div>
        <div style={{padding:32,display:"flex",alignItems:"center"}}><p style={{fontSize:16,color:"var(--gray-600)",fontStyle:"italic"}}>"{blok.quote}"</p></div>
      </div>
    </div></section>
  );
}

function ProjectsGrid({ blok }) {
  return (
    <section className="section"><div className="container">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24}}>
        <h2 className="section-heading">{blok.heading}</h2>
        <a href={blok.link_url?.url||"#"} style={{fontSize:14,fontWeight:600,color:"var(--purple)"}}>{blok.link_label}</a>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
        {blok.items?.map(p=><div key={p._uid} style={{background:"linear-gradient(135deg,#1E1E1E,#C74A1B)",borderRadius:12,height:200}}/>)}
      </div>
    </div></section>
  );
}

function BlogFeaturedGrid({ blok }) {
  return (
    <section className="section"><div className="container">
      <h2 className="section-heading">{blok.heading}</h2>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,marginTop:24}}>
        {blok.featured_post?.map(p=><BlogPostCard key={p._uid} blok={{...p,variant:"large"}}/>)}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
          {blok.side_posts?.map(p=><BlogPostCard key={p._uid} blok={{...p,variant:"small"}}/>)}
        </div>
      </div>
    </div></section>
  );
}

function BlogGrid({ blok }) {
  return (
    <section className="section"><div className="container">
      <h2 className="section-heading" style={{textAlign:"center"}}>{blok.heading}</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24,marginTop:24}}>
        {blok.posts?.map(p=><BlogPostCard key={p._uid} blok={p}/>)}
      </div>
    </div></section>
  );
}

function ContactHero({ blok }) {
  return (
    <section className="hero" style={{padding:"140px 0 60px"}}>
      <div className="container">
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"center"}}>
          <div>
            <span className="btn btn-primary btn-sm" style={{marginBottom:16,display:"inline-block"}}>{blok.badge_text}</span>
            <h1 style={{color:"#fff",fontSize:36}}>{blok.heading}</h1>
          </div>
          <div style={{display:"flex",gap:16}}>
            {[{icon:"phone",label:blok.phone_label,value:blok.phone_number},{icon:"email",label:blok.email_label,value:blok.email_address}].map((c,i)=>(
              <div key={i} style={{background:"#fff",borderRadius:16,padding:24,flex:1}}>
                <div style={{marginBottom:8}}>{c.icon==="phone" ? <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F15A22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> : <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F15A22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}</div>
                <div style={{fontWeight:600,marginBottom:4}}>{c.label}</div>
                <div style={{fontSize:14,color:"var(--gray-400)"}}>{c.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm({ blok }) {
  return (
    <section className="section"><div className="container">
      <div style={{display:"grid",gridTemplateColumns:"1fr 2fr",gap:60}}>
        <div>
          <h2 style={{fontSize:28,fontWeight:800,marginBottom:12}}>{blok.heading}</h2>
          <div style={{color:"var(--gray-400)",marginBottom:24}}>{renderText(blok.description)}</div>
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            {blok.social_links?.map(s=>(
              <div key={s._uid} style={{display:"flex",alignItems:"center",gap:12}}>
                <div style={{width:36,height:36,borderRadius:"50%",background:"var(--orange)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:12}}>{s.platform==="facebook"?<svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>:s.platform==="instagram"?<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/></svg>:<svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>}</div>
                <span style={{fontSize:14}}>{s.handle||s.platform}</span>
              </div>
            ))}
          </div>
        </div>
        <form style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
          {blok.form_fields?.map(f=>(
            <div key={f._uid} style={{gridColumn:f.width==="full"?"span 2":"span 1"}}>
              <label style={{fontSize:13,fontWeight:600,display:"block",marginBottom:6}}>{f.label}</label>
              {f.field_type==="textarea"
                ? <textarea style={{width:"100%",padding:14,borderRadius:12,border:"1px solid #e5e7eb",fontSize:15,minHeight:120,resize:"vertical"}} placeholder={f.placeholder}/>
                : <input type={f.field_type||"text"} style={{width:"100%",padding:14,borderRadius:12,border:"1px solid #e5e7eb",fontSize:15}} placeholder={f.placeholder}/>
              }
            </div>
          ))}
          <div style={{gridColumn:"span 2"}}>
            <button type="submit" className="btn btn-dark" style={{width:"100%"}}>{blok.submit_label}</button>
          </div>
        </form>
      </div>
    </div></section>
  );
}

function CtaBanner({ blok }) {
  return (
    <section className="section"><div className="container">
      <div style={{background:"linear-gradient(135deg,#0D0D0D,#1E1E1E,#C74A1B)",borderRadius:24,padding:60,textAlign:"center"}}>
        <h2 className="section-heading">{blok.heading}</h2>
        <div style={{color:"var(--gray-600)",maxWidth:500,margin:"0 auto 24px"}}>{renderText(blok.body)}</div>
        <a className="btn btn-dark" href={blok.cta_link?.url||"#"}>{blok.cta_label}</a>
      </div>
    </div></section>
  );
}

// =================== RESOLVER ===================

const componentMap = {
  landing_page: ({blok}) => (
    <>
      {blok.navbar?.map(b => <DynamicComponent key={b._uid} blok={b} />)}
      {blok.sections?.map(b => <DynamicComponent key={b._uid} blok={b} />)}
      {blok.footer?.map(b => <DynamicComponent key={b._uid} blok={b} />)}
    </>
  ),
  site_navbar: ({blok}) => <SiteNavbar blok={blok} />,
  hero_section: ({blok}) => <HeroSection blok={blok} />,
  logo_bar: ({blok}) => <LogoBar blok={blok} />,
  features_grid: ({blok}) => <FeaturesGrid blok={blok} />,
  image_text_block: ({blok}) => <ImageTextBlock blok={blok} />,
  app_showcase: ({blok}) => <AppShowcase blok={blok} />,
  steps_section: ({blok}) => <StepsSection blok={blok} />,
  testimonials_section: ({blok}) => <TestimonialsSection blok={blok} />,
  pricing_section: ({blok}) => <PricingSection blok={blok} />,
  faq_section: ({blok}) => <FaqSection blok={blok} />,
  app_download_cta: ({blok}) => <AppDownloadCta blok={blok} />,
  site_footer: ({blok}) => <SiteFooter blok={blok} />,
  page_hero_banner: ({blok}) => <PageHeroBanner blok={blok} />,
  stats_bar: ({blok}) => <StatsBar blok={blok} />,
  about_section: ({blok}) => <AboutSection blok={blok} />,
  team_section: ({blok}) => <TeamSection blok={blok} />,
  services_grid: ({blok}) => <ServicesGrid blok={blok} />,
  newsletter_section: ({blok}) => <NewsletterSection blok={blok} />,
  portfolio_grid: ({blok}) => <PortfolioGrid blok={blok} />,
  portfolio_case_study: ({blok}) => <PortfolioCaseStudy blok={blok} />,
  client_feedback: ({blok}) => <ClientFeedback blok={blok} />,
  projects_grid: ({blok}) => <ProjectsGrid blok={blok} />,
  blog_featured_grid: ({blok}) => <BlogFeaturedGrid blok={blok} />,
  blog_grid: ({blok}) => <BlogGrid blok={blok} />,
  contact_hero: ({blok}) => <ContactHero blok={blok} />,
  contact_form: ({blok}) => <ContactForm blok={blok} />,
  cta_banner: ({blok}) => <CtaBanner blok={blok} />,
};

export function DynamicComponent({ blok }) {
  const Component = componentMap[blok.component];
  if (!Component) {
    console.warn(`Unknown component: ${blok.component}`);
    return <div style={{padding:20,background:"#fff3cd",margin:8,borderRadius:8,fontSize:13}}>Unknown: {blok.component}</div>;
  }
  return <Component blok={blok} />;
}

export default componentMap;
