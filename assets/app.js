(function () {
  "use strict";
  const data = window.XRPL_LINKS;
  const $ = (s) => document.querySelector(s);
  const el = (tag, attrs = {}, ...children) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") n.className = v;
      else if (k === "text") n.textContent = v;
      else n.setAttribute(k, v);
    }
    children.flat().forEach((c) => c != null && n.append(c));
    return n;
  };
  const slug = (s) => s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-");
  const prettyUrl = (u) => {
    try {
      const x = new URL(u);
      const p = x.pathname.replace(/\/$/, "");
      return x.host.replace(/^www\./, "") + (p.length > 28 ? p.slice(0, 26) + "…" : p);
    } catch { return u; }
  };

  $("#page-title").textContent = data.title;
  $("#page-lead").textContent = data.lead;
  $("#updated").textContent = data.updated;

  // 目次と本文
  const toc = $("#toc");
  const content = $("#content");
  const cards = [];
  const types = new Set();

  data.sections.forEach((sec) => {
    const groups = sec.groups.filter((g) => g.items.length);
    const tocList = el("ul");
    toc.append(el("a", { href: "#" + sec.id, class: "toc-sec", text: sec.title }), tocList);

    const secEl = el("section", { id: sec.id, class: "section" }, el("h2", { text: sec.title }));

    groups.forEach((g) => {
      const gid = sec.id + "-" + slug(g.title);
      tocList.append(el("li", {}, el("a", { href: "#" + gid, text: g.title })));
      const grid = el("div", { class: "grid" });
      g.items.forEach((it) => {
        types.add(it.type);
        const card = el("a", { class: "card", href: it.url, target: "_blank", rel: "noopener noreferrer", "data-type": it.type },
          el("div", { class: "card-head" },
            el("span", { class: "icon", "aria-hidden": "true", text: it.icon || "🔗" }),
            el("span", { class: "name", text: it.name }),
            el("span", { class: "badge", "data-type": it.type, text: it.type })),
          el("p", { class: "note", text: it.note }),
          el("span", { class: "url", text: prettyUrl(it.url) + " ↗" }));
        card._text = [it.name, it.note, it.url, it.type].join(" ").toLowerCase();
        cards.push(card);
        grid.append(card);
      });
      const gEl = el("div", { class: "group", id: gid }, el("h3", { text: g.title }));
      if (g.description) gEl.append(el("p", { class: "desc", text: g.description }));
      gEl.append(grid);
      secEl.append(gEl);
    });

    if (sec.videos && sec.videos.length) {
      const vid = sec.id + "-videos";
      tocList.append(el("li", {}, el("a", { href: "#" + vid, text: "おすすめ動画" })));
      const vgrid = el("div", { class: "videos" });
      sec.videos.forEach((v) => {
        const frame = el("div", { class: "frame" });
        // クリックするまで YouTube を読み込まない（軽量化・プライバシー配慮）
        const btn = el("button", { class: "poster", type: "button", "aria-label": v.title + " を再生" },
          el("img", { src: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`, alt: "", loading: "lazy" }),
          el("span", { class: "play", "aria-hidden": "true", text: "▶" }));
        btn.addEventListener("click", () => {
          frame.replaceChildren(el("iframe", {
            src: `https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1`,
            title: v.title, allow: "autoplay; encrypted-media; picture-in-picture", allowfullscreen: "",
          }));
        });
        frame.append(btn);
        vgrid.append(el("figure", { class: "video" }, frame,
          el("figcaption", {}, el("strong", { text: v.title }), el("span", { text: v.note }))));
      });
      secEl.append(el("div", { class: "group videos-group", id: vid }, el("h3", { text: "おすすめ動画" }), vgrid));
    }
    content.append(secEl);
  });

  // タイプ絞り込みチップ
  const chips = $("#chips");
  let activeType = null;
  const allChip = el("button", { type: "button", class: "chip active", text: "すべて" });
  chips.append(allChip);
  [...types].forEach((t) => chips.append(el("button", { type: "button", class: "chip", "data-type": t, text: t })));
  chips.addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    activeType = b.dataset.type || null;
    chips.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === b));
    apply();
  });

  // 検索
  const q = $("#q");
  const empty = el("p", { class: "empty", text: "該当するリンクがありません。" });
  content.append(empty);

  function apply() {
    const term = q.value.trim().toLowerCase();
    const filtering = !!term || !!activeType;
    let shown = 0;
    cards.forEach((c) => {
      const ok = (!term || c._text.includes(term)) && (!activeType || c.dataset.type === activeType);
      c.hidden = !ok;
      if (ok) shown++;
    });
    document.querySelectorAll(".group").forEach((g) => {
      if (g.classList.contains("videos-group")) { g.hidden = filtering; return; }
      g.hidden = !g.querySelector(".card:not([hidden])");
    });
    document.querySelectorAll(".section").forEach((s) => {
      s.hidden = !s.querySelector(".group:not([hidden])");
    });
    empty.hidden = shown > 0;
    $("#count").textContent = filtering ? `${shown} / ${cards.length} 件を表示中` : `全 ${cards.length} 件のリンク`;
  }
  q.addEventListener("input", apply);
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== q) { e.preventDefault(); q.focus(); }
    if (e.key === "Escape" && document.activeElement === q) { q.value = ""; apply(); }
  });
  apply();

  // 目次のスクロール連動ハイライト
  const tocLinks = [...toc.querySelectorAll("a")];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      tocLinks.forEach((a) => a.classList.toggle("current", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-20% 0px -70% 0px" });
  document.querySelectorAll(".group").forEach((g) => io.observe(g));
})();
