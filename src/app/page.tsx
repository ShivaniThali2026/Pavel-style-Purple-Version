"use client";

import { useMemo, useState } from "react";

const assetBase = "/Pavel-style-Purple-Version";

const metrics = [
  { value: "3%", label: "CTR lift", detail: "SEO, A/B testing, and landing page improvements" },
  { value: "33%", label: "Contract growth", detail: "Proposal strategy and bid support" },
  { value: "37%", label: "Revenue growth", detail: "Business development contribution" },
  { value: "30+", label: "Projects managed", detail: "Public and private sector client operations" },
];

const caseStudies = [
  {
    number: "01",
    eyebrow: "AEC Proposal Strategy",
    title: "From RFQ to Contract",
    problem:
      "A small consultancy was competing against larger firms for public and private sector contracts without a dedicated business development team.",
    approach:
      "Shivani built the RFQ/RFP workflow from opportunity research to final collateral, coordinating engineering inputs and shaping clear decision-maker materials.",
    result: "33% increase in contract acquisitions, 37% revenue growth, and 3 contracts won over two years.",
    tools: ["InDesign", "Canva", "Microsoft Office", "Agency Research"],
  },
  {
    number: "02",
    eyebrow: "SEO & Digital Growth",
    title: "Turning a Niche Website Into a Growth Channel",
    problem:
      "The company had limited organic visibility and underperforming click-through performance in a competitive NYC B2B market.",
    approach:
      "She refined landing pages, supported keyword-led content, tested email and page variations, and tracked performance in GA4.",
    result: "3% CTR lift and 9% growth in organic site engagement.",
    tools: ["SEMrush", "WordPress", "GA4", "Reachmail", "Excel"],
  },
  {
    number: "03",
    eyebrow: "Multi-Channel Campaigns",
    title: "Building a Brand Presence From Zero",
    problem:
      "The firm had no consistent social voice, email rhythm, or polished collateral beyond a basic website.",
    approach:
      "Shivani created LinkedIn and email calendars, content pillars, capability statements, trade show assets, and industry event support.",
    result: "A consistent brand presence across LinkedIn, email, collateral, and in-person channels.",
    tools: ["LinkedIn", "Reachmail", "Mailchimp", "Canva", "InDesign", "GA4"],
  },
  {
    number: "04",
    eyebrow: "Client Strategy & Operations",
    title: "Managing 30+ Concurrent Accounts",
    problem:
      "A growing consultancy needed structure across overlapping deadlines, invoices, reports, deliverables, and client communication.",
    approach:
      "She built Excel tracking systems, translated technical updates into client-facing language, and supported retention through proactive follow-up.",
    result: "30+ concurrent projects managed with consistent communication and deadline visibility.",
    tools: ["Excel", "Outlook", "Qualtrics", "HubSpot", "Salesforce"],
  },
];

const academicProjects = [
  {
    eyebrow: "UX Strategy · GTM",
    title: "InternConnect",
    description:
      "A student-focused platform concept exploring internship access, user journeys, audience targeting, and go-to-market positioning.",
    tools: ["Figma", "Personas", "Journey Mapping", "GTM Strategy"],
    link: "https://docs.google.com/presentation/d/1kIAiJxq0WnKcqnDMS7j-Cy_snmmy_XV5/edit?usp=sharing",
  },
  {
    eyebrow: "Digital Marketing",
    title: "Fashion Nova Campaign",
    description:
      "A consumer-brand project focused on influencer strategy, digital behavior, audience segmentation, and social campaign direction.",
    tools: ["Social Strategy", "Influencer Marketing", "Consumer Insights"],
    link: "https://docs.google.com/presentation/d/1JdwyFX1hwFJwBFcWMw04VG1_H-WKtE4mZ16Ln2nTxMo/edit?usp=sharing",
  },
  {
    eyebrow: "Marketing Analytics",
    title: "Boxed.com Strategy",
    description:
      "A strategy project using research, analytics thinking, ROI budgeting, and campaign recommendations to identify growth opportunities.",
    tools: ["Excel", "Google Analytics", "Market Research", "ROI Modeling"],
    link: "",
  },
];

const photos = [
  { title: "Macro Detail", image: `${assetBase}/photography/photo-01.png` },
  { title: "Fire Composition", image: `${assetBase}/photography/photo-02.png` },
  { title: "Rainbow & Architecture", image: `${assetBase}/photography/photo-03.png` },
  { title: "Moon Reflection", image: `${assetBase}/photography/photo-04.png` },
  { title: "Architectural Framing", image: `${assetBase}/photography/photo-05.png` },
  { title: "City Night", image: `${assetBase}/photography/photo-06.png` },
  { title: "Candid Close-Up", image: `${assetBase}/photography/photo-07.png` },
  { title: "Texture Study", image: `${assetBase}/photography/photo-08.png` },
  { title: "Nature Study", image: `${assetBase}/photography/photo-09.png` },
  { title: "Documentary Moment", image: `${assetBase}/photography/photo-10.png` },
  { title: "Landscape", image: `${assetBase}/photography/photo-11.png` },
  { title: "Natural Frame", image: `${assetBase}/photography/photo-12.png` },
];

const toolGroups = [
  ["Analytics & CRM", ["GA4", "Tableau", "HubSpot", "Salesforce", "Excel", "Qualtrics"]],
  ["Growth Marketing", ["SEO", "SEMrush", "Reachmail", "Mailchimp", "WordPress", "A/B Testing"]],
  ["Creative Production", ["InDesign", "Canva", "Photoshop", "Sony Vegas Pro", "DSLR Photography"]],
  ["Client Operations", ["Project Tracking", "Stakeholder Updates", "Client Surveys", "Follow-Up Systems"]],
  ["Campaign Systems", ["LinkedIn Calendars", "Mailchimp", "Reachmail", "Content Pillars"]],
  ["Proposal Strategy", ["RFQ/RFP Support", "Agency Research", "Contract Language", "Collateral Design"]],
];

export default function Home() {
  const [photoIndex, setPhotoIndex] = useState(0);

  const visiblePhotos = useMemo(() => {
    return [0, 1, 2].map((offset) => photos[(photoIndex + offset) % photos.length]);
  }, [photoIndex]);

  const previousPhotos = () => {
    setPhotoIndex((current) => (current - 1 + photos.length) % photos.length);
  };

  const nextPhotos = () => {
    setPhotoIndex((current) => (current + 1) % photos.length);
  };

  return (
    <main className="portfolio-shell">
      <header className="topbar">
        <a href="#home" className="logo-mark">
          <span className="logo-icon">✤</span>
          <span>Shivani Thali</span>
        </a>

        <nav>
          <a href="#work">Case Studies</a>
          <a href="#projects">Projects</a>
          <a href="#creative">Creative</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <aside className="side-rail" aria-label="section navigation">
        <a href="#home" className="active" title="Home">●</a>
        <a href="#work" title="Case Studies">⌘</a>
        <a href="#projects" title="Academic Projects">▣</a>
        <a href="#creative" title="Creative Lens">◎</a>
        <a href="#skills" title="Skills">★</a>
      </aside>

      <section id="home" className="hero section-screen">
        <h1>Shivani Thali</h1>
        <h2>Marketing Strategy & Growth Specialist</h2>

        <a href="https://linkedin.com/in/shivani-thali" target="_blank" className="mini-social">
          in
        </a>

        <p className="hero-copy">
          Bridging marketing strategy, analytics, proposal development, client communication,
          and creative storytelling for growth-focused marketing work.
        </p>

        <div className="current-card">
          <span>Portfolio Focus</span>
          <strong>Marketing Strategy · Digital Campaigns · Creative Growth</strong>
          <p>SEO · proposal strategy · campaign systems · client operations · visual storytelling</p>
        </div>

        <div className="hero-profile" aria-label="Portrait of Shivani Thali">
          <img src={`${assetBase}/profile/profile.png`} alt="Shivani Thali" />
        </div>
      </section>

      <section className="metric-strip">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <p>{metric.detail}</p>
          </article>
        ))}
      </section>

      <section id="work" className="section-block compact-section">
        <SectionHeader
          title="Professional Case Studies"
          subtitle="Business problems, marketing systems, and measurable outcomes from Shivani’s professional work."
        />

        <div className="case-study-grid">
          {caseStudies.map((study) => (
            <article className="case-study-card" key={study.title}>
              <div className="case-topline">
                <span>{study.number}</span>
                <p>{study.eyebrow}</p>
              </div>
              <h3>{study.title}</h3>
              <p><strong>Problem</strong>{study.problem}</p>
              <p><strong>Approach</strong>{study.approach}</p>
              <div className="result-line">{study.result}</div>
              <TagList items={study.tools} />
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-block compact-section">
        <SectionHeader
          title="Academic Projects"
          subtitle="Class projects exploring product strategy, digital marketing, consumer behavior, and analytics."
        />

        <div className="academic-grid">
          {academicProjects.map((project) => (
            <article className="academic-card" key={project.title}>
              <p className="card-category">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <TagList items={project.tools} />
              {project.link ? (
                <a href={project.link} target="_blank">Open Project ›</a>
              ) : (
                <span className="muted-link">Strategy project</span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="creative" className="section-block compact-section creative-section">
        <SectionHeader
          title="Creative Lens"
          subtitle="A visual section for photography and video editing work."
        />

        <div className="creative-video-card">
          <div>
            <p className="card-category">Sony Vegas Pro</p>
            <h3>Video Editing</h3>
            <p>Sony Vegas Pro edit highlighting visual rhythm, transitions, pacing, and creative storytelling.</p>
          </div>
          <a
            href="https://drive.google.com/file/d/146FGRchDGbR5a0kCjD2SeaEDhBuc69rM/view?usp=drive_link"
            target="_blank"
            className="outline-button small"
          >
            Watch Edit ›
          </a>
        </div>

        <div className="photo-slider-wrap">
          <button className="circle-btn" onClick={previousPhotos} aria-label="previous photos">‹</button>

          <div className="photo-slider">
            {visiblePhotos.map((photo, index) => (
              <figure className={index === 1 ? "photo-slide center-photo" : "photo-slide"} key={`${photo.title}-${photoIndex}-${index}`}>
                <img src={photo.image} alt={photo.title} />
              </figure>
            ))}
          </div>

          <button className="circle-btn" onClick={nextPhotos} aria-label="next photos">›</button>
        </div>

        <div className="slider-status">
          <span>{String(photoIndex + 1).padStart(2, "0")}</span>
          <span>/</span>
          <span>{String(photos.length).padStart(2, "0")}</span>
        </div>
      </section>

      <section id="skills" className="section-block compact-section">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Tools and strengths across marketing strategy, analytics, client operations, and creative production."
        />

        <div className="skills-grid">
          {toolGroups.map(([group, skills]) => (
            <article className="skill-card" key={group as string}>
              <h3>{group}</h3>
              <ul>
                {(skills as string[]).map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-screen contact-section">
        <h2>Let’s build something that grows.</h2>
        <p>
          Available for marketing strategy, growth, campaign analytics, proposal strategy,
          client communication, and creative storytelling opportunities.
        </p>

        <div className="contact-buttons">
          <a href="mailto:Shivani.thali@gmail.com">Email Shivani</a>
          <a href="https://linkedin.com/in/shivani-thali" target="_blank">LinkedIn</a>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 Portfolio for Shivani Thali</span>
        <span>Marketing strategy · growth · creative storytelling</span>
      </footer>
    </main>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((item) => <span key={item}>{item}</span>)}
    </div>
  );
}
