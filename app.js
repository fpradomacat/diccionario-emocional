(function () {
  const $ = (s) => document.querySelector(s);
  const norm = (s) =>
    s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const esc = (s) =>
    s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const slug = (s) => norm(s).replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const isMobile = () => window.matchMedia("(max-width: 860px)").matches;

  ENTRIES.forEach((e) => {
    e.id = slug(e.n);
    e._hay = norm([e.n, e.c, e.k, e.e, e.r, e.v].join(" "));
    e._name = norm(e.n);
    e._kw = norm(e.k + " " + e.c);
  });
  ENTRIES.sort((a, b) => a.n.localeCompare(b.n, "es"));

  const cats = [...new Set(ENTRIES.map((e) => e.c))].sort((a, b) => a.localeCompare(b, "es"));
  const list = $("#list"), entry = $("#entry"), welcome = $("#welcome"),
        results = $("#results"), q = $("#q"), clear = $("#clear"),
        count = $("#count"), countBtn = $("#countBtn"), main = $("#main");
  let activeCat = null;

  /* ───── Panel de índice (mobile) ───── */
  function drawer(open) {
    document.body.classList.toggle("drawer", open);
    document.body.classList.toggle("lock", open && isMobile());
    $("#scrim").hidden = !open;
    $("#openIndex").setAttribute("aria-expanded", open ? "true" : "false");
  }
  $("#openIndex").addEventListener("click", () => drawer(true));
  $("#closeIndex").addEventListener("click", () => drawer(false));
  $("#scrim").addEventListener("click", () => drawer(false));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") drawer(false); });
  list.addEventListener("click", (e) => { if (e.target.closest("a")) drawer(false); });
  window.addEventListener("resize", () => { if (!isMobile()) drawer(false); });
  // El aviso se muestra abierto en escritorio y plegado en mobile
  $("#notice").open = !isMobile();

  /* ───── Búsqueda ───── */
  function highlight(text, terms) {
    if (!terms.length) return esc(text);
    const n = norm(text);
    const ranges = [];
    terms.forEach((t) => {
      let i = 0;
      while ((i = n.indexOf(t, i)) !== -1) { ranges.push([i, i + t.length]); i += t.length; }
    });
    if (!ranges.length) return esc(text);
    ranges.sort((a, b) => a[0] - b[0]);
    const merged = [ranges[0].slice()];
    for (const r of ranges.slice(1)) {
      const l = merged[merged.length - 1];
      if (r[0] <= l[1]) l[1] = Math.max(l[1], r[1]); else merged.push(r.slice());
    }
    let out = "", p = 0;
    merged.forEach(([s, e]) => {
      out += esc(text.slice(p, s)) + "<mark>" + esc(text.slice(s, e)) + "</mark>";
      p = e;
    });
    return out + esc(text.slice(p));
  }

  function search(query) {
    const terms = norm(query).split(/\s+/).filter(Boolean);
    if (!terms.length) return { items: ENTRIES, terms };
    const scored = [];
    ENTRIES.forEach((e) => {
      if (!terms.every((t) => e._hay.includes(t))) return;
      let s = 0;
      terms.forEach((t) => {
        if (e._name.startsWith(t)) s += 5;
        else if (e._name.includes(t)) s += 4;
        if (e._kw.includes(t)) s += 2;
        s += 1;
      });
      scored.push([s, e]);
    });
    scored.sort((a, b) => b[0] - a[0] || a[1].n.localeCompare(b[1].n, "es"));
    return { items: scored.map((x) => x[1]), terms };
  }

  const link = (e, cur, terms) =>
    '<a href="#' + e.id + '" class="' + (cur === e.id ? "active" : "") + '">' + highlight(e.n, terms) + "</a>";

  function renderIndex() {
    const { items, terms } = search(q.value);
    const shown = activeCat ? items.filter((e) => e.c === activeCat) : items;
    const label = shown.length + " de " + ENTRIES.length;
    count.textContent = label;
    countBtn.textContent = "· " + shown.length;
    if (!shown.length) { list.innerHTML = '<div class="empty">Sin resultados.</div>'; return { shown, terms }; }
    const current = decodeURIComponent((location.hash || "").replace("#", ""));
    let html = "";
    if (terms.length) {
      html = shown.map((e) => link(e, current, terms)).join("");
    } else {
      const by = {};
      shown.forEach((e) => (by[e.c] = by[e.c] || []).push(e));
      Object.keys(by).sort((a, b) => a.localeCompare(b, "es")).forEach((c) => {
        html += "<h3>" + esc(c) + "</h3>" + by[c].map((e) => link(e, current, [])).join("");
      });
    }
    list.innerHTML = html;
    return { shown, terms };
  }

  /* ───── Vistas ───── */
  function toTop() {
    if (isMobile()) main.scrollIntoView({ block: "start" });
    else window.scrollTo({ top: 0 });
  }

  function showEntry(id) {
    const e = ENTRIES.find((x) => x.id === id);
    if (!e) return false;
    const i = ENTRIES.indexOf(e);
    const prev = ENTRIES[i - 1], next = ENTRIES[i + 1];
    welcome.hidden = true; results.hidden = true; entry.hidden = false;
    entry.innerHTML =
      '<span class="tag">' + esc(e.c) + "</span>" +
      "<h2>" + esc(e.n) + "</h2>" +
      '<div class="block"><h3>Emoción asociada</h3><p>' + esc(e.e) + "</p></div>" +
      '<div class="block"><h3>Lo que podría estar reprimido</h3><p>' + esc(e.r) + "</p></div>" +
      '<div class="block"><h3>Lo que quizás está pasando en la vida</h3><p>' + esc(e.v) + "</p></div>" +
      '<div class="questions"><h3>Preguntas para reflexionar</h3><ul>' +
      e.q.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul></div>" +
      (e.a ? '<div class="aviso"><strong>Ojo:</strong> ' + esc(e.a) + "</div>" : "") +
      '<div class="nav"><span>' +
      (prev ? '<a href="#' + prev.id + '">← ' + esc(prev.n) + "</a>" : "") +
      "</span><span>" +
      (next ? '<a href="#' + next.id + '">' + esc(next.n) + " →</a>" : "") +
      "</span></div>";
    document.title = e.n + " · Diccionario emocional del cuerpo";
    return true;
  }

  function showResults(items, terms) {
    welcome.hidden = true; entry.hidden = true; results.hidden = false;
    const title = items.length + (items.length === 1 ? " resultado" : " resultados");
    results.innerHTML =
      "<h2>" + title + "</h2>" +
      (activeCat
        ? '<p><button class="chip on" id="unfilter" type="button">Zona: ' + esc(activeCat) + " ×</button></p>"
        : "") +
      (items.length
        ? items.map((e) =>
            '<a class="result" href="#' + e.id + '"><strong>' + highlight(e.n, terms) +
            "</strong><span>" + esc(e.c) + " · " + highlight(e.e, terms) + "</span></a>").join("")
        : "<p>No encontramos nada con esa búsqueda. Probá con otra palabra (una parte del cuerpo, una emoción…).</p>");
    const u = $("#unfilter");
    if (u) u.addEventListener("click", () => { activeCat = null; syncChips(); update(); });
  }

  function update() {
    const { shown, terms } = renderIndex();
    clear.hidden = !q.value;
    if (terms.length || activeCat) showResults(shown, terms);
    else {
      results.hidden = true;
      entry.hidden = true; welcome.hidden = false;
      document.title = "Diccionario emocional del cuerpo";
    }
  }

  function route() {
    const id = decodeURIComponent((location.hash || "").replace("#", ""));
    if (id === "fuentes") return;
    if (id && showEntry(id)) {
      renderIndex();
      toTop();
      return;
    }
    update();
  }

  function clearHash() {
    if (location.hash && location.hash !== "#fuentes")
      history.replaceState(null, "", location.pathname + location.search);
  }

  q.addEventListener("input", () => { clearHash(); update(); });
  q.addEventListener("keydown", (e) => { if (e.key === "Enter") { q.blur(); if (isMobile()) main.scrollIntoView(); } });
  clear.addEventListener("click", () => { q.value = ""; q.focus(); clearHash(); update(); });
  window.addEventListener("hashchange", route);

  /* ───── Zonas / categorías ───── */
  function syncChips() {
    document.querySelectorAll(".chip[data-c]").forEach((x) =>
      x.classList.toggle("on", x.dataset.c === activeCat));
  }
  $("#cats").innerHTML = cats.map((c) => '<button class="chip" type="button" data-c="' + esc(c) + '">' + esc(c) + "</button>").join("");
  $("#cats").addEventListener("click", (ev) => {
    const b = ev.target.closest(".chip"); if (!b) return;
    activeCat = activeCat === b.dataset.c ? null : b.dataset.c;
    syncChips();
    clearHash();
    update();
    if (isMobile()) main.scrollIntoView({ block: "start" });
  });

  $("#fuentes-list").innerHTML = FUENTES.map((f) =>
    '<li><a href="' + esc(f.u) + '" target="_blank" rel="noopener">' + esc(f.t) + "</a><small>" + esc(f.d) + "</small></li>").join("");

  route();
  if (!location.hash) update();
})();
