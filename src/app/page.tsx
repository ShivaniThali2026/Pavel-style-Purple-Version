"use client";

import { useMemo, useState } from "react";

const assetBase = "/Pavel-style-Purple-Version";
const resumeLink = `${assetBase}/resume/shivani-thali-resume-2026-06-03.pdf`;

const metrics = [
  { value: "5%", label: "CTR lift", detail: "SEO, landing page optimization, and A/B testing" },
  { value: "33%", label: "Contract growth", detail: "Proposal strategy and bid support" },
  { value: "37%", label: "Revenue growth", detail: "Business development contribution" },
  { value: "30+", label: "Projects managed", detail: "Public and private sector operations" },
];

const caseStudies = [
  {
    number: "01",
    eyebrow: "AEC Proposal Strategy",
    title: "From RFQ to Contract",
    problem:
      "A small consultancy needed to compete against larger firms for public and private-sector contracts without a dedicated business development team.",
    approach:
      "I built the RFQ/RFP workflow from opportunity research to final collateral, coordinated technical inputs, and translated engineering detail into decision-maker-ready materials.",
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
      "I refined landing pages, supported keyword-led content, tested email and page variations, and tracked performance in GA4.",
    result: "5% CTR lift through SEO, landing page optimization, and A/B testing.",
    tools: ["SEMrush", "WordPress", "GA4", "Tableau", "HubSpot", "Excel"],
  },
  {
    number: "03",
    eyebrow: "Multi-Channel Campaigns",
    title: "Building a Brand Presence From Zero",
    problem:
      "The firm had no consistent social voice, email rhythm, or polished collateral beyond a basic website.",
    approach:
      "I created LinkedIn and email calendars, content pillars, capability statements, trade show assets, and industry event support.",
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
      "I built Excel tracking systems, translated technical updates into client-facing language, and supported retention through proactive follow-up.",
    result: "30+ concurrent projects managed with consistent communication and deadline visibility.",
    tools: ["Excel", "Outlook", "Qualtrics", "HubSpot", "Salesforce"],
  },
];

const academicProjects = [
  {
    eyebrow: "UX Strategy · GTM",
    title: "InternConnect",
    description:
      "An app concept and marketing plan for international students, built around mentorship, visa guidance, career resources, user research, and integrated campaign planning.",
    tools: ["Figma", "Personas", "Journey Mapping", "GTM Strategy"],
    link: `${assetBase}/projects/internconnect.pdf`,
  },
  {
    eyebrow: "Digital Marketing",
    title: "Fashion Nova Campaign",
    description:
      "A digital marketing strategy project for a fast-fashion brand, focused on SEM, SEO, paid search, Amazon ads, audience behavior, and social campaign direction.",
    tools: ["SEM", "SEO", "Paid Search", "Influencer Marketing", "Consumer Insights"],
    link: `${assetBase}/projects/fashion-nova.pdf`,
  },
  {
    eyebrow: "Marketing Analytics",
    title: "Boxed.com Strategy",
    description:
      "An integrated marketing strategy for Boxed.com using market research, campaign planning, direct mail, email marketing, ROI thinking, and brand relaunch recommendations.",
    tools: ["Market Research", "Integrated Marketing", "Email Marketing", "ROI Planning"],
    link: `${assetBase}/projects/boxed-final-ppt.pdf`,
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

const creativeSkills = [
  "DSLR photography",
  "Mobile photography",
  "Sony Vegas Pro",
  "Visual rhythm",
  "Creative storytelling",
  "Composition",
  "Writing",
];

const technicalGroups = [
  ["Analytics & CRM", ["GA4", "Tableau", "HubSpot Marketing Hub", "Salesforce", "Excel", "Qualtrics", "IBM SPSS"]],
  ["Growth Marketing", ["SEO", "Paid Media", "SEMrush", "Reachmail", "Mailchimp", "WordPress", "A/B Testing"]],
  ["Strategy & Operations", ["Proposal Writing", "Client Strategy", "Market Research", "Project Tracking", "Stakeholder Updates"]],
  ["Creative Production", ["InDesign", "Canva", "Photoshop", "Sony Vegas Pro", "DSLR Photography"]],
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
    <main className="resume-shell">
      <div className="resume-grid">
        <aside className="creative-pane">
          <div className="profile-orbit" aria-label="Portrait of Shivani Thali">
            <img src={`${assetBase}/profile/profile.png`} alt="Shivani Thali" />
          </div>

          <div className="identity-block">
            <p className="pane-label">Creative side</p>
            <h1>Shivani Thali</h1>
            <p>Marketing strategist, visual storyteller, and people observer based in Brooklyn.</p>
          </div>

          <section className="left-section">
            <h2>Creative Skills</h2>
            <ul className="soft-list">
              {creativeSkills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </section>

          <section className="left-section">
            <div className="section-row">
              <h2>Photos</h2>
              <div className="slider-controls">
                <button onClick={previousPhotos} aria-label="previous photos">‹</button>
                <button onClick={nextPhotos} aria-label="next photos">›</button>
              </div>
            </div>
            <div className="photo-strip">
              {visiblePhotos.map((photo, index) => (
                <figure className={index === 1 ? "photo-card active-photo" : "photo-card"} key={`${photo.title}-${photoIndex}-${index}`}>
                  <img src={photo.image} alt={photo.title} />
                  <figcaption>{photo.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="left-section video-card">
            <p className="pane-label">Video Edit</p>
            <h2>Sony Vegas Pro</h2>
            <p>Visual rhythm, transitions, pacing, and creative storytelling.</p>
            <a href="https://drive.google.com/file/d/146FGRchDGbR5a0kCjD2SeaEDhBuc69rM/view?usp=drive_link" target="_blank">
              Watch Edit
            </a>
          </section>
        </aside>

        <div className="gradient-divider" aria-hidden="true" />

        <section className="technical-pane">
          <header className="intro-panel" id="home">
            <p className="pane-label">Technical side</p>
            <h2>Market Research · Analytics · Growth Marketing · SEO · Paid Media</h2>
            <p>
              It&apos;s so nice to see you here. I&apos;m Shivani, born in Mumbai and based in Brooklyn. As you lay witness to my technical skills, emotional intelligence, people observation, and critical thinking, you&apos;ll also see the soft-skill pleasures that shape how I work.
            </p>
            <p>
              My mundane side quests include writing, lifting weights, making people laugh, and meal-prepping a high-protein, high-fiber diet for the week. As a fellow empath, my daily mantra is &quot;happiness is only real when shared, but pain, diminished.&quot; I identify pain points professionally and personally, speak three languages, and bring Gen Z energy into conversation with a millennial sense of justice.
            </p>
            <div className="resume-actions">
              <a href={resumeLink} target="_blank">Resume</a>
              <a href="mailto:Shivani.thali@gmail.com">Gmail</a>
              <a href="https://linkedin.com/in/shivani-thali" target="_blank">LinkedIn</a>
            </div>
          </header>

          <section className="metrics-panel" aria-label="portfolio metrics">
            {metrics.map((metric) => (
              <article key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.detail}</p>
              </article>
            ))}
          </section>

          <SectionHeader title="Case Studies" subtitle="Professional work" />
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

          <SectionHeader title="Academic Projects" subtitle="Strategy explorations" />
          <div className="academic-grid">
            {academicProjects.map((project) => (
              <article className="academic-card" key={project.title}>
                <p className="card-category">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <TagList items={project.tools} />
                <a href={project.link} target="_blank">Click to know more</a>
              </article>
            ))}
          </div>

          <SectionHeader title="Technical Skills" subtitle="Tools and platforms" />
          <div className="skills-grid">
            {technicalGroups.map(([group, skills]) => (
              <article className="skill-card" key={group as string}>
                <h3>{group}</h3>
                <ul>
                  {(skills as string[]).map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <footer className="contact-footer">
            <a href="mailto:Shivani.thali@gmail.com" aria-label="Email Shivani">Gmail</a>
            <a href="https://linkedin.com/in/shivani-thali" target="_blank" aria-label="LinkedIn profile">LinkedIn</a>
          </footer>
        </section>
      </div>
    </main>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="section-header">
      <p>{subtitle}</p>
      <h2>{title}</h2>
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
