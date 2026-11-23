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
  const host = (u) => {
    try { return new URL(u).host.replace(/^www\./, ""); } catch { return u; }
  };
  const ext = { target: "_blank", rel: "noopener noreferrer" };

  $("#page-title").textContent = data.title;
  $("#page-lead").textContent = data.lead;
  $("#updated").textContent = data.updated;

  function tagList(tags) {
    if (!tags || !tags.length) return null;
    return el("ul", { class: "tags", "aria-label": "特徴" },
      tags.map((t) => el("li", { class: "tag", "data-tag": t, text: t })));
  }

  // 1つのリンク → カード全体がリンク / 複数リンク → 下部にリンクボタンを並べる
  function card(it) {
    const head = el("div", { class: "card-head" },
      el("span", { class: "icon", "aria-hidden": "true", text: it.icon || "🔗" }),
      el("span", { class: "name", text: it.name }));
    const note = el("p", { class: "note", text: it.note });
    let node;
    if (it.links) {
      node = el("div", { class: "card multi" }, head, note, tagList(it.tags),
        el("div", { class: "links" }, it.links.map((l) =>
          el("a", { class: "link-btn", href: l.url, ...ext, "aria-label": `${it.name} の ${l.label}` }, l.label + " ↗"))));
    } else {
      node = el("a", { class: "card", href: it.url, ...ext }, head, note, tagList(it.tags),
        el("span", { class: "url", text: host(it.url) + " ↗" }));
    }
    const urls = it.links ? it.links.map((l) => l.url + " " + l.label) : [it.url];
    node._text = [it.name, it.note, ...(it.tags || []), ...urls].join(" ").toLowerCase();
    node._tags = it.tags || [];
    return node;
  }

  // 目次と本文
  const toc = $("#toc");
  const content = $("#content");
  const cards = [];

  data.sections.forEach((sec) => {
    const tocList = el("ul");
    toc.append(el("a", { href: "#" + sec.id, class: "toc-sec", text: sec.title }), tocList);

    const secEl = el("section", { id: sec.id, class: "section" },
      el("header", { class: "section-head" },
        el("h2", { text: sec.title }),
        sec.description ? el("p", { text: sec.description }) : null));

    const addGroup = (title, gid, body, desc, count, extraClass) => {
      tocList.append(el("li", {}, el("a", { href: "#" + gid, text: title })));
      const h3 = el("h3", {}, title);
      if (count != null) h3.append(el("span", { class: "count", text: String(count) }));
      secEl.append(el("div", { class: "group" + (extraClass ? " " + extraClass : ""), id: gid },
        h3, desc ? el("p", { class: "desc", text: desc }) : null, body));
    };

    sec.groups.filter((g) => g.items.length).forEach((g) => {
      const grid = el("div", { class: "grid" });
      g.items.forEach((it) => { const c = card(it); cards.push(c); grid.append(c); });
      addGroup(g.title, sec.id + "-" + slug(g.title), grid, g.description, g.items.length);
    });

    if (sec.videos && sec.videos.length) {
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
      addGroup("おすすめ動画", sec.id + "-videos", vgrid, null, null, "videos-group");
    }
    content.append(secEl);
  });

  // 特徴タグで絞り込み
  const chips = $("#chips");
  let activeTag = null;
  const chip = (label, tag) => el("button", { type: "button", class: "chip", "aria-pressed": "false", ...(tag ? { "data-tag": tag } : {}) }, label);
  const allChip = chip("すべて");
  allChip.setAttribute("aria-pressed", "true");
  chips.append(allChip, ...data.tags.map((t) => {
    const n = cards.filter((c) => c._tags.includes(t)).length;
    return chip(`${t}（${n}）`, t);
  }));
  chips.addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    activeTag = b.dataset.tag || null;
    chips.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
    apply();
  });

  // 検索
  const q = $("#q");
  const empty = el("p", { class: "empty", text: "該当するリンクがありません。" });
  content.append(empty);

  function apply() {
    const term = q.value.trim().toLowerCase();
    const filtering = !!term || !!activeTag;
    let shown = 0;
    cards.forEach((c) => {
      const ok = (!term || c._text.includes(term)) && (!activeTag || c._tags.includes(activeTag));
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
    $("#count").textContent = filtering ? `${shown} / ${cards.length} 件を表示中` : `全 ${cards.length} 件`;
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
