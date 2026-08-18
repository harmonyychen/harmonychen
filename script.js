"use strict";

var categories = ["projects", "community", "case study", "graphics", "ifaq"];

var collections = {
  projects: [
    {
      title: "Pardon",
      description:
        "A website blocker that makes focus social through partner accountability.",
      eyebrow: "Product \u00B7 Engineering",
      year: "2026",
      art: "pardon",
    },
    {
      title: "Morra AI",
      description:
        "An AI-powered practice companion for the IB French Individual Oral.",
      eyebrow: "AI \u00B7 Education",
      year: "2026",
      art: "morra",
    },
    {
      title: "Revveries Studio",
      description:
        "A small-batch stationery studio created from brand to fulfilment.",
      eyebrow: "Commerce \u00B7 Brand",
      year: "2025",
      art: "revveries",
    },
    {
      title: "HOSA Navigator",
      description:
        "A clearer digital wayfinding system for 9,000+ student members.",
      eyebrow: "Systems \u00B7 Community",
      year: "2025",
      art: "navigator",
    },
  ],
  community: [
    {
      title: "HOSA Canada",
      description:
        "Building programs and experiences for Canada\u2019s next generation of health leaders.",
      eyebrow: "National Programs",
      year: "2025\u201326",
      art: "hosa",
    },
    {
      title: "Ignite Fair",
      description:
        "A youth-led gathering turning ambitious ideas into community action.",
      eyebrow: "Co-founder \u00B7 Operations",
      year: "2024",
      art: "ignite",
    },
    {
      title: "Aporia Literary",
      description:
        "A publishing space helping young writers find confidence and an audience.",
      eyebrow: "Literature \u00B7 Leadership",
      year: "2023\u201324",
      art: "aporia",
    },
  ],
  "case study": [
    {
      title: "Designing for Accountability",
      description:
        "How interviews, behavior loops, and gentle friction shaped Pardon\u2019s first product system.",
      eyebrow: "Research \u00B7 Product Strategy",
      year: "8 min",
      art: "accountability",
    },
    {
      title: "From Friction to Fluency",
      description:
        "Making oral-language practice feel specific, safe, and worth returning to.",
      eyebrow: "UX \u00B7 Applied AI",
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
      eyebrow: "Editorial \u00B7 Type",
      year: "2025",
      art: "worlds",
    },
    {
      title: "Summer Company",
      description: "A playful identity system for a grant-backed stationery season.",
      eyebrow: "Identity \u00B7 Packaging",
      year: "2025",
      art: "summer",
    },
  ],
  ifaq: [
    {
      title: "What do you make?",
      description:
        "Products, systems, and stories that help people feel more capable\u2014not more managed.",
      eyebrow: "Interest \u00B7 01",
      year: "Answer",
      art: "make",
    },
    {
      title: "How do you work?",
      description:
        "Curiously and concretely: talk to people, map the system, test the smallest honest thing.",
      eyebrow: "Process \u00B7 02",
      year: "Answer",
      art: "work",
    },
    {
      title: "What are you learning?",
      description:
        "Systems design, responsible AI, sharp writing, and how communities sustain momentum.",
      eyebrow: "Currently \u00B7 03",
      year: "Answer",
      art: "learn",
    },
    {
      title: "Want to collaborate?",
      description:
        "I\u2019m always happy to meet thoughtful people working on useful, surprising things.",
      eyebrow: "Hello \u00B7 04",
      year: "Email me",
      art: "collab",
    },
  ],
};

var activeCategory = "projects";

var tabsEl = document.querySelector(".category-tabs");
var gridEl = document.getElementById("collection-panel");
var countEl = document.querySelector(".collection-count");

function pad(n) {
  return String(n).padStart(2, "0");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderTabs() {
  tabsEl.innerHTML = categories
    .map(function (category) {
      var isActive = category === activeCategory;
      return (
        '<button type="button" role="tab" aria-selected="' +
        isActive +
        '" aria-controls="collection-panel" class="' +
        (isActive ? "active" : "") +
        '" data-category="' +
        escapeHtml(category) +
        '">' +
        escapeHtml(category) +
        "</button>"
      );
    })
    .join("");
}

function renderGrid() {
  var items = collections[activeCategory];
  countEl.textContent = pad(items.length) + " items";

  gridEl.innerHTML = items
    .map(function (item, index) {
      var firstWord = item.title.split(" ")[0];
      return (
        '<article class="project-card" style="--card-index: ' +
        index +
        '">' +
        '<div class="card-art art-' +
        escapeHtml(item.art) +
        '" aria-hidden="true">' +
        '<span class="art-index">0' +
        (index + 1) +
        "</span>" +
        '<span class="art-word">' +
        escapeHtml(firstWord) +
        "</span>" +
        '<span class="art-orbit"></span>' +
        "</div>" +
        '<div class="card-meta"><p>' +
        escapeHtml(item.eyebrow) +
        "</p><p>" +
        escapeHtml(item.year) +
        "</p></div>" +
        '<div class="card-title-row"><h2>' +
        escapeHtml(item.title) +
        '</h2><span aria-hidden="true">\u2197</span></div>' +
        '<p class="card-description">' +
        escapeHtml(item.description) +
        "</p>" +
        "</article>"
      );
    })
    .join("");
}

function selectCategory(category) {
  if (category === activeCategory) return;
  activeCategory = category;
  renderTabs();
  renderGrid();
}

tabsEl.addEventListener("click", function (event) {
  var button = event.target.closest("button[data-category]");
  if (!button) return;
  selectCategory(button.getAttribute("data-category"));
});

renderTabs();
renderGrid();

document.documentElement.classList.add("is-ready");
