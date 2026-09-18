/* Across the Pool — shared interactive behaviors */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initHeaderScroll();
    initNavToggle();
    initTheories();
    initCountdown();
    initTimeline();
    initTracker();
    initEpisodes();
    initGallery();
    initFlipCards();
    initTrailer();
    initBrainGags();
  });

  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initNavToggle() {
    const btn = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");
    if (!btn || !links) return;
    btn.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Sam's Three Theories — client-side only poll (no backend), persisted in localStorage
  function initTheories() {
    const wrap = document.querySelector("[data-theories]");
    if (!wrap || !window.SITE_DATA) return;

    let votes = {};
    try {
      votes = JSON.parse(localStorage.getItem("atp_theory_votes") || "{}");
    } catch (e) { votes = {}; }
    let myVote = null;
    try { myVote = localStorage.getItem("atp_my_theory"); } catch (e) {}

    SITE_DATA.theories.forEach((t) => {
      if (typeof votes[t.id] !== "number") votes[t.id] = Math.floor(Math.random() * 40) + 20;
    });

    wrap.innerHTML = SITE_DATA.theories.map((t) => `
      <div class="card theory-card" role="button" tabindex="0" data-id="${t.id}" aria-pressed="${myVote === t.id}">
        <div class="card-body">
          <h3>${escapeHtml(t.title)}</h3>
          <p>${escapeHtml(t.description)}</p>
          <div class="vote-count" data-count>${votes[t.id]} people agree</div>
        </div>
      </div>
    `).join("");

    function vote(id) {
      if (myVote === id) return;
      if (myVote && typeof votes[myVote] === "number") votes[myVote] = Math.max(0, votes[myVote] - 1);
      votes[id] = (votes[id] || 0) + 1;
      myVote = id;
      try {
        localStorage.setItem("atp_theory_votes", JSON.stringify(votes));
        localStorage.setItem("atp_my_theory", id);
      } catch (e) {}
      wrap.querySelectorAll(".theory-card").forEach((card) => {
        const cid = card.getAttribute("data-id");
        card.setAttribute("aria-pressed", cid === id ? "true" : "false");
        card.querySelector("[data-count]").textContent = votes[cid] + " people agree";
      });
    }

    wrap.querySelectorAll(".theory-card").forEach((card) => {
      card.addEventListener("click", () => vote(card.getAttribute("data-id")));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); vote(card.getAttribute("data-id")); }
      });
    });
  }

  function initCountdown() {
    const el = document.querySelector("[data-days-left]");
    if (!el || !window.SITE_DATA) return;
    el.textContent = SITE_DATA.meta.daysLeft;
  }

  // Interactive timeline
  function initTimeline() {
    const track = document.querySelector("[data-timeline-track]");
    const detail = document.querySelector("[data-timeline-detail]");
    if (!track || !window.SITE_DATA) return;

    const days = SITE_DATA.timeline;

    track.innerHTML = days.map((d) => {
      const locked = d.status === "locked";
      const media = locked
        ? `<div class="card-media" style="display:flex;align-items:center;justify-content:center;background:#0d1217;"><span class="small-note">LOCKED</span></div>`
        : `<div class="card-media"><img src="${d.image}" alt="${escapeHtml(d.imageAlt || "")}" loading="lazy"></div>`;
      return `
        <div class="day-card ${locked ? "locked" : ""}" data-day="${d.day}-${days.indexOf(d)}" tabindex="${locked ? "-1" : "0"}" role="${locked ? "" : "button"}" aria-disabled="${locked}">
          ${media}
          <div class="card-body">
            <div class="day-num">DAY ${d.day}</div>
            <h3 style="font-size:1.05rem;margin:6px 0 4px;">${escapeHtml(d.title)}</h3>
            <p style="font-size:0.85rem;">${escapeHtml(d.teaser)}</p>
            <span class="status-pill ${locked ? "locked" : "confirmed"}">${locked ? "Still unfolding" : "Confirmed happened"}</span>
          </div>
        </div>
      `;
    }).join("");

    if (!detail) return;

    function showDay(idx) {
      const d = days[idx];
      if (d.status === "locked") { detail.classList.remove("visible"); return; }
      detail.innerHTML = `
        <div>
          <img src="${d.image}" alt="${escapeHtml(d.imageAlt || "")}" loading="lazy">
        </div>
        <div>
          <div class="day-num">DAY ${d.day}</div>
          <h3>${escapeHtml(d.title)}</h3>
          <div class="compare-row">
            <h4>Sam's take</h4>
            <p>${escapeHtml(d.samsTake || "")}</p>
          </div>
          <div class="compare-row">
            <h4>What actually happened</h4>
            <p>${escapeHtml(d.actual || "")}</p>
          </div>
        </div>
      `;
      detail.classList.add("visible");
      detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    track.querySelectorAll(".day-card").forEach((card, idx) => {
      if (card.classList.contains("locked")) return;
      card.addEventListener("click", () => showDay(idx));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); showDay(idx); }
      });
    });

    const firstOpen = days.findIndex((d) => d.status !== "locked");
    if (firstOpen > -1) showDay(days.length - 1 >= 0 ? days.map((d, i) => i).filter((i) => days[i].status !== "locked").pop() : firstOpen);
  }

  function initTracker() {
    const el = document.querySelector("[data-tracker]");
    if (!el || !window.SITE_DATA) return;
    const t = SITE_DATA.tracker;
    const cols = [
      { key: "confirmed", label: "Confirmed", items: t.confirmed },
      { key: "plausible", label: "Plausible", items: t.plausible },
      { key: "unconfirmed", label: "Unconfirmed", items: t.unconfirmed }
    ];
    el.innerHTML = cols.map((c) => `
      <div class="tracker-col ${c.key}">
        <h3>${c.label}</h3>
        <ul>${c.items.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
      </div>
    `).join("");
  }

  function initEpisodes() {
    const el = document.querySelector("[data-episodes]");
    if (!el || !window.SITE_DATA) return;
    el.innerHTML = SITE_DATA.episodes.map((ep) => `
      <div class="card episode-card">
        <div class="card-media">
          <img src="${ep.image}" alt="${escapeHtml(ep.imageAlt || "")}" loading="lazy">
          <span class="ep-number">EP ${String(ep.number).padStart(2, "0")}</span>
          ${ep.status === "coming-soon" ? '<span class="coming-soon-flag">Coming soon</span>' : ""}
        </div>
        <div class="card-body">
          <h3>${escapeHtml(ep.title)}</h3>
          <p class="runtime">${escapeHtml(ep.runtime)}</p>
          <p>${escapeHtml(ep.description)}</p>
        </div>
      </div>
    `).join("");
  }

  // Gallery + lightbox
  function initGallery() {
    const grid = document.querySelector("[data-gallery]");
    const lightbox = document.querySelector("[data-lightbox]");
    if (!grid || !window.SITE_DATA) return;

    const items = SITE_DATA.gallery;
    grid.innerHTML = items.map((g, i) => `
      <figure data-idx="${i}" tabindex="0" role="button" aria-label="Open image: ${escapeHtml(g.caption)}">
        <img src="${g.image}" alt="${escapeHtml(g.alt)}" loading="lazy">
      </figure>
    `).join("");

    if (!lightbox) return;
    const imgEl = lightbox.querySelector("[data-lightbox-img]");
    const capEl = lightbox.querySelector("[data-lightbox-caption]");
    let current = 0;

    function open(idx) {
      current = idx;
      render();
      lightbox.classList.add("open");
      lightbox.querySelector(".lightbox-btn").focus();
      document.body.style.overflow = "hidden";
    }
    function close() {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
    }
    function render() {
      const g = items[current];
      imgEl.src = g.image;
      imgEl.alt = g.alt;
      capEl.textContent = g.caption;
    }
    function next(delta) {
      current = (current + delta + items.length) % items.length;
      render();
    }

    grid.querySelectorAll("figure").forEach((fig) => {
      fig.addEventListener("click", () => open(Number(fig.getAttribute("data-idx"))));
      fig.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(Number(fig.getAttribute("data-idx"))); }
      });
    });

    lightbox.querySelector("[data-close]").addEventListener("click", close);
    lightbox.querySelector("[data-prev]").addEventListener("click", () => next(-1));
    lightbox.querySelector("[data-next]").addEventListener("click", () => next(1));
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next(1);
      if (e.key === "ArrowLeft") next(-1);
    });
  }

  function initFlipCards() {
    document.querySelectorAll("[data-flip-card]").forEach((card) => {
      const toggle = () => card.classList.toggle("flipped");
      card.addEventListener("click", toggle);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
      });
    });
  }

  function initTrailer() {
    const btn = document.querySelector("[data-play-trailer]");
    const player = document.querySelector("[data-trailer-player]");
    if (!btn || !player) return;
    btn.addEventListener("click", () => {
      player.innerHTML = `
        <div style="position:relative;z-index:2;color:#fff;text-align:center;padding:0 20px;">
          <p class="eyebrow" style="margin-bottom:10px;">Trailer coming soon</p>
          <p style="max-width:480px;margin:0 auto;color:var(--c-text-dim);">
            The real footage doesn't exist yet, the story is still unfolding in real time.
            Check back once the ten days are up.
          </p>
        </div>
      `;
    });
  }

  function initBrainGags() {
    const el = document.querySelector("[data-brain-gags]");
    if (!el || !window.SITE_DATA) return;
    el.innerHTML = SITE_DATA.brainLines.map((b) => `
      <div class="brain-gag">
        <span class="reality">REALITY: ${escapeHtml(b.reality)}</span>
        <span class="brain">SAM'S BRAIN: "${escapeHtml(b.brain)}"</span>
      </div>
    `).join("");
  }

  function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
})();
