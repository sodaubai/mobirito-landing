
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

function FeatureCard({ blok }) {
  const colorClass = `icon-${blok.icon_color || "orange"}`;
  return (
    <div className="card">
      <div className={`icon ${colorClass}`}>
        {blok.icon_color === "orange" ? "🔒" : blok.icon_color === "blue" ? "📱" : "🔄"}
      </div>
      <h3>{blok.title}</h3>
      <p>{blok.description}</p>
    </div>
  );
}

function StatItem({ blok }) {
  return (
    <div className="stat">
      <div className="stat-value">{blok.value}</div>
      <div className="stat-label">{blok.label}</div>
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
  return (
    <div className="testimonial-card">
      <div className="quote-icon">"</div>
      <div className="author">
        <div className="avatar" />
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
  const icons = { facebook: "f", twitter: "𝕏", discord: "D", linkedin: "in", instagram: "📷" };
  return <a href={blok.url?.url || "#"} className="social-icon">{icons[blok.platform] || blok.platform?.[0]}</a>;
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
          <div className="logo">
            <div className="logo-icon" />
            <span style={{color:"#fff"}}>{blok.logo_text}</span>
          </div>
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
          <h1>{blok.headline}</h1>
          <p>{blok.subtext}</p>
          <div className="ctas">
            <a className="btn btn-primary" href={blok.primary_cta_link?.url || "#"}>{blok.primary_cta_label}</a>
            <a className="btn btn-secondary" href={blok.secondary_cta_link?.url || "#"}>{blok.secondary_cta_label}</a>
          </div>
          <div className="social-proof">
            <div style={{display:"flex"}}>
              {[1,2,3].map(i=><div key={i} style={{width:32,height:32,borderRadius:"50%",background:"#ccc",marginLeft:i>1?-8:0,border:"2px solid #fff"}}/>)}
            </div>
            <span>{blok.social_proof_text}</span>
          </div>
        </div>
        <div className="phone-mockup">
          <div style={{width:280,height:480,background:"rgba(255,255,255,0.15)",borderRadius:32,margin:"0 auto",backdropFilter:"blur(10px)",padding:24}}>
            <div style={{color:"#fff",fontSize:14,opacity:0.7,marginBottom:8}}>Balance</div>
            <div style={{color:"#fff",fontSize:28,fontWeight:800}}>$15,378.32</div>
          </div>
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
  return (
    <section className="section features-grid">
      <div className="container" style={{textAlign:"center"}}>
        <h2 className="section-heading">{blok.heading}</h2>
        {blok.description && <p className="section-desc" style={{margin:"0 auto"}}>{blok.description}</p>}
        <div className="cards">{blok.features?.map((f) => <FeatureCard key={f._uid} blok={f} />)}</div>
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
          <div style={{background:"linear-gradient(135deg,#c4b5fd,#f9a8d4)",borderRadius:24,height:380,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div style={{width:200,height:360,background:"rgba(255,255,255,0.2)",borderRadius:24}} />
          </div>
          <div>
            <h2>{blok.heading}</h2>
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
        <div style={{width:260,height:440,background:"rgba(255,255,255,0.2)",borderRadius:28,margin:"0 auto",padding:24}}>
          <div style={{color:"#fff",fontSize:12,marginBottom:8}}>← My Wallet</div>
          <div style={{color:"#fff",fontSize:13,opacity:0.7}}>Available Balance</div>
          <div style={{color:"#fff",fontSize:32,fontWeight:800}}>$23,215.57</div>
        </div>
      </div>
    </section>
  );
}

function StepsSection({ blok }) {
  return (
    <section className="section steps-section">
      <div className="container">
        <h2 className="section-heading">{blok.heading}</h2>
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
            <h2 className="section-heading">{blok.heading}</h2>
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
          <h2 className="section-heading" style={{color:"#fff"}}>{blok.heading}</h2>
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
          <h2 className="section-heading" style={{textAlign:"center",marginBottom:32}}>{blok.heading}</h2>
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
            <a href={blok.app_store_url?.url || "#"} className="store-badge">
              <span>🍎</span><div><div className="small">Available on the</div><div className="name">App Store</div></div>
            </a>
            <a href={blok.play_store_url?.url || "#"} className="store-badge">
              <span>▶</span><div><div className="small">Available on</div><div className="name">Play Store</div></div>
            </a>
          </div>
        </div>
        <div style={{textAlign:"center"}}>
          <div style={{width:240,height:420,background:"rgba(255,255,255,0.3)",borderRadius:28,margin:"0 auto",padding:24}}>
            <div style={{fontSize:12,marginBottom:8}}>Balance</div>
            <div style={{fontSize:24,fontWeight:800}}>$15,378.32</div>
          </div>
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
              <div style={{width:32,height:32,background:"linear-gradient(135deg,#6c5ce7,#a855f7)",borderRadius:"50%"}} />
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
  const bg = blok.background === "gradient_warm" ? {background:"linear-gradient(135deg,#fecaca,#fed7aa)",borderRadius:16,padding:"40px 32px"} : {};
  return (
    <section className="section"><div className="container">
      <div style={{display:"grid",gridTemplateColumns:`repeat(${blok.stats?.length||4},1fr)`,gap:24,textAlign:"center",...bg}}>
        {blok.stats?.map(s=><StatItem key={s._uid} blok={s}/>)}
      </div>
    </div></section>
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
          <div key={s._uid} style={{background:s.is_highlighted?"linear-gradient(135deg,#f472b6,#fbbf24)":"#fff",color:s.is_highlighted?"#fff":"inherit",borderRadius:16,padding:32,border:s.is_highlighted?"none":"1px solid #eee"}}>
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
    <section className="section" style={{background:"linear-gradient(135deg,#c4e0f9,#e8b8f0,#c9a0f5)",padding:"60px 0"}}>
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
          <div key={p._uid} style={{gridColumn:p.column_span==="2"?"span 2":"span 1",background:"linear-gradient(135deg,#c4b5fd,#e9d5ff)",borderRadius:12,height:p.column_span==="2"?280:200}}/>
        ))}
      </div>
    </div></section>
  );
}

function PortfolioCaseStudy({ blok }) {
  return (
    <section className="section"><div className="container">
      <div style={{background:"linear-gradient(135deg,#c4b5fd,#ddd6fe)",borderRadius:24,height:300,marginBottom:32}}/>
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
        <div style={{background:"linear-gradient(135deg,#fecaca,#fed7aa,#fef08a)",padding:32,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
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
        {blok.items?.map(p=><div key={p._uid} style={{background:"linear-gradient(135deg,#c4b5fd,#e9d5ff)",borderRadius:12,height:200}}/>)}
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
            {[{icon:"📞",label:blok.phone_label,value:blok.phone_number},{icon:"✉️",label:blok.email_label,value:blok.email_address}].map((c,i)=>(
              <div key={i} style={{background:"#fff",borderRadius:16,padding:24,flex:1}}>
                <div style={{fontSize:24,marginBottom:8}}>{c.icon}</div>
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
                <div style={{width:36,height:36,borderRadius:"50%",background:s.platform==="instagram"?"#e4405f":s.platform==="facebook"?"#1877f2":"#1da1f2",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:12}}>{s.platform?.[0]?.toUpperCase()}</div>
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
      <div style={{background:"linear-gradient(135deg,#c4e0f9,#e8b8f0,#c9a0f5)",borderRadius:24,padding:60,textAlign:"center"}}>
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
