"use client";

import { useEffect, useState } from "react";

type Category = "projects" | "community" | "case study" | "graphics" | "ifaq";

type Item = {
  title: string;
  description: string;
  eyebrow: string;
  year: string;
  art: string;
};

const categories: Category[] = [
  "projects",
  "community",
  "case study",
  "graphics",
  "ifaq",
];

const collections: Record<Category, Item[]> = {
  projects: [
    {
      title: "Pardon",
      description:
        "A website blocker that makes focus social through partner accountability.",
      eyebrow: "Product · Engineering",
      year: "2026",
      art: "pardon",
    },
    {
      title: "Morra AI",
      description:
        "An AI-powered practice companion for the IB French Individual Oral.",
      eyebrow: "AI · Education",
      year: "2026",
      art: "morra",
    },
    {
      title: "Revveries Studio",
      description:
        "A small-batch stationery studio created from brand to fulfilment.",
      eyebrow: "Commerce · Brand",
      year: "2025",
      art: "revveries",
    },
    {
      title: "HOSA Navigator",
      description:
        "A clearer digital wayfinding system for 9,000+ student members.",
      eyebrow: "Systems · Community",
      year: "2025",
      art: "navigator",
    },
  ],
  community: [
    {
      title: "HOSA Canada",
      description:
        "Building programs and experiences for Canada’s next generation of health leaders.",
      eyebrow: "National Programs",
      year: "2025–26",
      art: "hosa",
    },
    {
      title: "Ignite Fair",
      description:
        "A youth-led gathering turning ambitious ideas into community action.",
      eyebrow: "Co-founder · Operations",
      year: "2024",
      art: "ignite",
    },
    {
      title: "Aporia Literary",
      description:
        "A publishing space helping young writers find confidence and an audience.",
      eyebrow: "Literature · Leadership",
      year: "2023–24",
      art: "aporia",
    },
  ],
  "case study": [
    {
      title: "Designing for Accountability",
      description:
        "How interviews, behavior loops, and gentle friction shaped Pardon’s first product system.",
      eyebrow: "Research · Product Strategy",
      year: "8 min",
      art: "accountability",
    },
    {
      title: "From Friction to Fluency",
      description:
        "Making oral-language practice feel specific, safe, and worth returning to.",
      eyebrow: "UX · Applied AI",
      year: "6 min",
      art: "fluency",
    },
    {
      title: "Programs at Scale",
      description:
        "A systems look at organizing clear experiences for thousands of students.",
      eyebrow: "Service Design",
      year: "5 min",
      art: "scale",
    },
  ],
  graphics: [
    {
      title: "Quiet Hours",
      description: "An editorial poster study in pace, contrast, and negative space.",
      eyebrow: "Poster Series",
      year: "2026",
      art: "quiet",
    },
    {
      title: "Becoming Worlds",
      description: "Visual experiments for stories that sit between memory and possibility.",
      eyebrow: "Editorial · Type",
      year: "2025",
      art: "worlds",
    },
    {
      title: "Summer Company",
      description: "A playful identity system for a grant-backed stationery season.",
      eyebrow: "Identity · Packaging",
      year: "2025",
      art: "summer",
    },
  ],
  ifaq: [
    {
      title: "What do you make?",
      description:
        "Products, systems, and stories that help people feel more capable—not more managed.",
      eyebrow: "Interest · 01",
      year: "Answer",
      art: "make",
    },
    {
      title: "How do you work?",
      description:
        "Curiously and concretely: talk to people, map the system, test the smallest honest thing.",
      eyebrow: "Process · 02",
      year: "Answer",
      art: "work",
    },
    {
      title: "What are you learning?",
      description:
        "Systems design, responsible AI, sharp writing, and how communities sustain momentum.",
      eyebrow: "Currently · 03",
      year: "Answer",
      art: "learn",
    },
    {
      title: "Want to collaborate?",
      description:
        "I’m always happy to meet thoughtful people working on useful, surprising things.",
      eyebrow: "Hello · 04",
      year: "Email me",
      art: "collab",
    },
  ],
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("projects");
  const [transitionKey, setTransitionKey] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add("is-ready");
    return () => document.documentElement.classList.remove("is-ready");
  }, []);

  function selectCategory(category: Category) {
    if (category === activeCategory) return;
    setActiveCategory(category);
    setTransitionKey((key) => key + 1);
  }

  return (
    <main>
      <section className="hero" aria-labelledby="page-title">
        <div className="hero-inner">
          <p className="kicker motion-item">Portfolio / 2026</p>

          <h1 id="page-title" aria-label="Harmony Chen">
            <span className="name-line"><span>harmony</span></span>
            <span className="name-line"><span>chen</span></span>
          </h1>

          <p className="intro motion-item">
            intersection of technology, product management, and design.
          </p>

          <div className="bio motion-item">
            <div>
              <p className="bio-label">currently:</p>
              <p>→ Systems Design Engineering @ UWaterloo</p>
              <p>→ building Pardon</p>
              <p>→ organizing programs for 9,000+ students @ HOSA Canada</p>
              <p>→ looking for Summer 2027 internships</p>
            </div>
            <div>
              <p className="bio-label">previously:</p>
              <p>→ empowering youth in literature and leadership</p>
              <p>→ small business owner &amp; Ontario Summer Company recipient</p>
              <p>→ @Revveries Studio</p>
            </div>
          </div>

          <a className="scroll-cue motion-item" href="#work">
            selected work <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="work-inner">
          <div className="work-heading">
            <p className="section-label" id="work-title">Explore the archive</p>
            <p className="collection-count" aria-live="polite">
              {String(collections[activeCategory].length).padStart(2, "0")} items
            </p>
          </div>

          <div className="category-tabs" role="tablist" aria-label="Portfolio categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                aria-controls="collection-panel"
                className={activeCategory === category ? "active" : ""}
                onClick={() => selectCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="collection-grid" id="collection-panel" role="tabpanel" key={transitionKey}>
            {collections[activeCategory].map((item, index) => (
              <article
                className="project-card"
                key={`${activeCategory}-${item.title}`}
                style={{ "--card-index": index } as React.CSSProperties}
              >
                <div className={`card-art art-${item.art}`} aria-hidden="true">
                  <span className="art-index">0{index + 1}</span>
                  <span className="art-word">{item.title.split(" ")[0]}</span>
                  <span className="art-orbit" />
                </div>
                <div className="card-meta">
                  <p>{item.eyebrow}</p>
                  <p>{item.year}</p>
                </div>
                <div className="card-title-row">
                  <h2>{item.title}</h2>
                  <Arrow />
                </div>
                <p className="card-description">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <p>Have a good problem?</p>
        <a href="mailto:hello@harmonychen.com">let’s talk <Arrow /></a>
        <div className="footer-line">
          <span>Harmony Chen</span>
          <span>Toronto ↔ Waterloo</span>
        </div>
      </footer>
    </main>
  );
}
