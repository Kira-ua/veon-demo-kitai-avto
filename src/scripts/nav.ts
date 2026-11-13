// Header behaviour: close the popover menu after an anchor tap, mark the active anchor, show the phone call bar after the hero.
const menu = document.getElementById("mobile-menu") as (HTMLElement & { hidePopover?: () => void }) | null;
menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.hidePopover?.()));

const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".site-nav__link"));
const bar = document.querySelector<HTMLElement>("[data-call-bar]");
const hero = document.getElementById("hero");

if ("IntersectionObserver" in window) {
  const sections = links
    .map((l) => document.querySelector<HTMLElement>(l.getAttribute("href") || ""))
    .filter((s): s is HTMLElement => !!s);
  const seen = new Set<string>();
  const spy = new IntersectionObserver((entries) => {
    for (const e of entries) e.isIntersecting ? seen.add(e.target.id) : seen.delete(e.target.id);
    // At the top of the page (hero in the band) no anchor is current.
    const current = seen.has("hero") ? "" : [...seen].pop();
    links.forEach((l) => {
      if (current && l.getAttribute("href") === `#${current}`) l.setAttribute("aria-current", "true");
      else l.removeAttribute("aria-current");
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  if (hero) spy.observe(hero);
  sections.forEach((s) => spy.observe(s));

  if (bar && hero) {
    bar.inert = true;
    new IntersectionObserver(([e]) => {
      const shown = !e.isIntersecting;
      bar.classList.toggle("is-shown", shown);
      bar.inert = !shown;
    }, { threshold: 0 }).observe(hero);
  }
}

// FutureLink notes stay inside the viewport: shift a note that would cross the left or right edge.
document.querySelectorAll<HTMLElement>(".future-link").forEach((el) => {
  const note = el.querySelector<HTMLElement>(".future-link__note");
  if (!note) return;
  const place = () => {
    note.style.setProperty("--note-x", "0px");
    const r = note.getBoundingClientRect();
    const w = document.documentElement.clientWidth;
    const m = 8;
    const dx = r.left < m ? m - r.left : r.right > w - m ? w - m - r.right : 0;
    note.style.setProperty("--note-x", `${Math.round(dx)}px`);
  };
  el.addEventListener("pointerenter", place);
  el.addEventListener("focus", place);
});
