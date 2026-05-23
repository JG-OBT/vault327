/* ============================================================
   THE VAULT 327 — Main Stylesheet
   Aesthetic: Dark Luxury / Art Deco / Dramatic Gold on Obsidian
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Tenor+Sans&family=Jost:wght@200;300;400&display=swap');

/* ── Reset & Base ─────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --obsidian:    #0d0b07;
  --void:        #060504;
  --gold:        #c9a84c;
  --gold-light:  #e2c880;
  --gold-dim:    #8a6d2a;
  --cream:       #f5efe4;
  --warm-white:  #faf6ee;
  --charcoal:    #1e1b14;
  --muted:       #6b6355;
  --border:      rgba(201,168,76,0.18);
  --border-strong: rgba(201,168,76,0.45);
  --font-display: 'Cormorant Garamond', 'Georgia', serif;
  --font-sans:    'Tenor Sans', 'Gill Sans', sans-serif;
  --font-body:    'Jost', 'Helvetica Neue', sans-serif;
  --ease-out:     cubic-bezier(0.16, 1, 0.3, 1);
  --ease-smooth:  cubic-bezier(0.4, 0, 0.2, 1);
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  background: var(--obsidian);
  color: var(--cream);
  font-family: var(--font-body);
  font-weight: 300;
  line-height: 1.7;
  overflow-x: hidden;
  cursor: none;
}

/* ── Custom Cursor ────────────────────────────────────────── */
.cursor {
  position: fixed;
  width: 12px; height: 12px;
  background: var(--gold);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.1s, width 0.3s var(--ease-out), height 0.3s var(--ease-out), opacity 0.3s;
  mix-blend-mode: difference;
}
.cursor-ring {
  position: fixed;
  width: 40px; height: 40px;
  border: 1px solid var(--gold);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: transform 0.15s var(--ease-smooth), width 0.4s var(--ease-out), height 0.4s var(--ease-out), opacity 0.3s;
  opacity: 0.6;
}
body:hover .cursor { opacity: 1; }
a:hover ~ .cursor, button:hover ~ .cursor { width: 20px; height: 20px; }

/* ── Navigation ───────────────────────────────────────────── */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.5s, padding 0.4s;
}
.nav.scrolled {
  background: rgba(13,11,7,0.96);
  backdrop-filter: blur(12px);
  padding: 1rem 3rem;
  border-bottom: 1px solid var(--border);
}
.nav-logo {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 300;
  letter-spacing: 0.12em;
  color: var(--gold);
  text-decoration: none;
  text-transform: uppercase;
}
.nav-logo span { font-style: italic; }
.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}
.nav-links a {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--cream);
  text-decoration: none;
  opacity: 0.75;
  transition: opacity 0.3s, color 0.3s;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0;
  width: 0; height: 1px;
  background: var(--gold);
  transition: width 0.4s var(--ease-out);
}
.nav-links a:hover { opacity: 1; color: var(--gold-light); }
.nav-links a:hover::after { width: 100%; }
.nav-links a.active { opacity: 1; color: var(--gold); }
.nav-links a.active::after { width: 100%; }

.nav-book {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--obsidian);
  background: var(--gold);
  border: none;
  padding: 0.7rem 1.6rem;
  text-decoration: none;
  transition: background 0.3s, transform 0.2s;
  cursor: none;
}
.nav-book:hover { background: var(--gold-light); transform: translateY(-1px); }

/* Hamburger (mobile) */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: none;
  background: none;
  border: none;
  padding: 4px;
}
.nav-toggle span {
  display: block;
  width: 24px; height: 1px;
  background: var(--cream);
  transition: transform 0.3s, opacity 0.3s;
}
.nav-toggle.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.nav-toggle.open span:nth-child(2) { opacity: 0; }
.nav-toggle.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

/* ── Cookie Banner ────────────────────────────────────────── */
.cookie-banner {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  z-index: 200;
  background: var(--charcoal);
  border-top: 1px solid var(--border);
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  transform: translateY(100%);
  transition: transform 0.6s var(--ease-out);
}
.cookie-banner.visible { transform: translateY(0); }
.cookie-banner p {
  font-size: 0.82rem;
  color: var(--cream);
  opacity: 0.8;
  max-width: 600px;
}
.cookie-banner a { color: var(--gold); text-decoration: underline; }
.cookie-actions { display: flex; gap: 1rem; flex-shrink: 0; }
.btn-accept {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  background: var(--gold);
  color: var(--obsidian);
  border: none;
  padding: 0.65rem 1.4rem;
  cursor: none;
  transition: background 0.3s;
}
.btn-accept:hover { background: var(--gold-light); }
.btn-decline {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  background: transparent;
  color: var(--cream);
  border: 1px solid var(--border-strong);
  padding: 0.65rem 1.4rem;
  cursor: none;
  transition: border-color 0.3s, color 0.3s;
}
.btn-decline:hover { border-color: var(--gold); color: var(--gold); }

/* ── Page Hero ────────────────────────────────────────────── */
.page-hero {
  height: 42vh;
  display: flex;
  align-items: flex-end;
  padding: 4rem 3rem;
  position: relative;
  overflow: hidden;
  background: var(--void);
}
.page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 60%);
}
.page-hero-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 300;
  line-height: 0.9;
  letter-spacing: -0.01em;
  color: var(--cream);
  position: relative;
  z-index: 1;
}
.page-hero-title em {
  font-style: italic;
  color: var(--gold);
  display: block;
}
.page-hero-line {
  position: absolute;
  bottom: 4rem; right: 3rem;
  width: 60px; height: 1px;
  background: var(--gold);
}

/* ── Sections & Layout ────────────────────────────────────── */
section { padding: 6rem 3rem; }
.container { max-width: 1200px; margin: 0 auto; }
.container-narrow { max-width: 800px; margin: 0 auto; }
.container-wide { max-width: 1400px; margin: 0 auto; }

/* ── Typography ───────────────────────────────────────────── */
.eyebrow {
  font-family: var(--font-sans);
  font-size: 0.68rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold);
  display: block;
  margin-bottom: 1.2rem;
}
h1, h2, h3 { font-family: var(--font-display); font-weight: 300; line-height: 1.1; }
h1 { font-size: clamp(2.8rem, 6vw, 5rem); }
h2 { font-size: clamp(2rem, 4vw, 3.2rem); }
h3 { font-size: clamp(1.4rem, 2.5vw, 2rem); }

.display-italic { font-style: italic; color: var(--gold); }

.body-text { font-size: 0.95rem; line-height: 1.85; color: var(--cream); opacity: 0.78; }

/* ── Gold Divider ─────────────────────────────────────────── */
.divider {
  width: 60px; height: 1px;
  background: var(--gold);
  margin: 2rem 0;
}
.divider-center { margin: 2rem auto; }

/* ── Buttons ──────────────────────────────────────────────── */
.btn-primary {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--obsidian);
  background: var(--gold);
  padding: 1rem 2.2rem;
  text-decoration: none;
  border: none;
  cursor: none;
  transition: background 0.3s, transform 0.2s;
  position: relative;
  overflow: hidden;
}
.btn-primary::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: rgba(255,255,255,0.15);
  transition: left 0.4s var(--ease-out);
}
.btn-primary:hover::before { left: 100%; }
.btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); }

.btn-outline {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  background: transparent;
  padding: 1rem 2.2rem;
  text-decoration: none;
  border: 1px solid var(--border-strong);
  cursor: none;
  transition: background 0.3s, border-color 0.3s, color 0.3s, transform 0.2s;
}
.btn-outline:hover {
  background: rgba(201,168,76,0.08);
  border-color: var(--gold);
  transform: translateY(-2px);
}

/* ── Reveal Animations ────────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.9s var(--ease-out), transform 0.9s var(--ease-out);
}
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-left {
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 0.9s var(--ease-out), transform 0.9s var(--ease-out);
}
.reveal-left.visible { opacity: 1; transform: translateX(0); }
.reveal-right {
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 0.9s var(--ease-out), transform 0.9s var(--ease-out);
}
.reveal-right.visible { opacity: 1; transform: translateX(0); }

/* Staggered children */
.stagger > * { opacity: 0; transform: translateY(24px); transition: opacity 0.7s var(--ease-out), transform 0.7s var(--ease-out); }
.stagger.visible > *:nth-child(1) { opacity: 1; transform: none; transition-delay: 0s; }
.stagger.visible > *:nth-child(2) { opacity: 1; transform: none; transition-delay: 0.12s; }
.stagger.visible > *:nth-child(3) { opacity: 1; transform: none; transition-delay: 0.24s; }
.stagger.visible > *:nth-child(4) { opacity: 1; transform: none; transition-delay: 0.36s; }
.stagger.visible > *:nth-child(5) { opacity: 1; transform: none; transition-delay: 0.48s; }
.stagger.visible > *:nth-child(6) { opacity: 1; transform: none; transition-delay: 0.60s; }

/* ── Gold Line Decoration ─────────────────────────────────── */
.deco-line {
  position: absolute;
  background: var(--gold);
  opacity: 0.3;
}

/* ── Footer ───────────────────────────────────────────────── */
footer {
  background: var(--void);
  border-top: 1px solid var(--border);
  padding: 4rem 3rem 2rem;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto 3rem;
}
.footer-brand-name {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 300;
  color: var(--gold);
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
}
.footer-tagline {
  font-size: 0.85rem;
  color: var(--cream);
  opacity: 0.5;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
.footer-social { display: flex; gap: 1rem; }
.footer-social a {
  width: 36px; height: 36px;
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  color: var(--cream);
  text-decoration: none;
  font-size: 0.9rem;
  transition: border-color 0.3s, color 0.3s, background 0.3s;
}
.footer-social a:hover { border-color: var(--gold); color: var(--gold); background: rgba(201,168,76,0.06); }
.footer-col-title {
  font-family: var(--font-sans);
  font-size: 0.68rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.4rem;
}
.footer-col ul { list-style: none; }
.footer-col ul li { margin-bottom: 0.7rem; }
.footer-col ul li a {
  color: var(--cream);
  text-decoration: none;
  font-size: 0.85rem;
  opacity: 0.6;
  transition: opacity 0.3s, color 0.3s;
}
.footer-col ul li a:hover { opacity: 1; color: var(--gold-light); }
.footer-col p { font-size: 0.85rem; color: var(--cream); opacity: 0.6; line-height: 1.8; }
.footer-col a[href^="tel"], .footer-col a[href^="mailto"] {
  color: var(--cream);
  text-decoration: none;
  opacity: 0.6;
  font-size: 0.85rem;
  transition: opacity 0.3s, color 0.3s;
  display: block;
  margin-bottom: 0.4rem;
}
.footer-col a:hover { opacity: 1; color: var(--gold-light); }
.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.footer-bottom p { font-size: 0.75rem; color: var(--cream); opacity: 0.35; }
.footer-bottom a { color: var(--cream); opacity: 0.5; text-decoration: none; font-size: 0.75rem; transition: opacity 0.3s; }
.footer-bottom a:hover { opacity: 1; }
.footer-bottom-links { display: flex; gap: 1.5rem; }

/* ── Hours Table ──────────────────────────────────────────── */
.hours-table { width: 100%; }
.hours-table tr { border-bottom: 1px solid var(--border); }
.hours-table tr:last-child { border-bottom: none; }
.hours-table td { padding: 0.6rem 0; font-size: 0.85rem; color: var(--cream); opacity: 0.7; }
.hours-table td:first-child { font-weight: 400; opacity: 0.5; }
.hours-table td:last-child { text-align: right; }
.hours-table tr.closed td { opacity: 0.3; }

/* ── Utility ──────────────────────────────────────────────── */
.text-gold { color: var(--gold); }
.text-center { text-align: center; }
.mt-1 { margin-top: 1rem; }
.mt-2 { margin-top: 2rem; }
.mt-3 { margin-top: 3rem; }
.mb-1 { margin-bottom: 1rem; }
.mb-2 { margin-bottom: 2rem; }
.gap-sm { gap: 1rem; }
.gap-md { gap: 2rem; }
.flex { display: flex; }
.flex-center { display: flex; align-items: center; justify-content: center; }
.inline-flex { display: inline-flex; align-items: center; gap: 0.6rem; }

/* ── Horizontal Rule ──────────────────────────────────────── */
.hr-gold { border: none; border-top: 1px solid var(--border); margin: 4rem 0; }

/* ── Noise Texture Overlay ────────────────────────────────── */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9990;
  opacity: 0.4;
}

/* ── Responsive ───────────────────────────────────────────── */
@media (max-width: 900px) {
  .nav { padding: 1.2rem 1.5rem; }
  .nav.scrolled { padding: 0.8rem 1.5rem; }
  .nav-links { display: none; }
  .nav-toggle { display: flex; }
  .nav-links.open {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: var(--void);
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    z-index: 99;
  }
  .nav-links.open a { font-size: 1rem; letter-spacing: 0.25em; }
  .nav-book { display: none; }
  section { padding: 4rem 1.5rem; }
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
  .cookie-banner { flex-direction: column; align-items: flex-start; padding: 1.5rem; }
  .cookie-actions { width: 100%; }
  .page-hero { padding: 4rem 1.5rem; height: 36vh; }
  .page-hero-line { display: none; }
}

@media (max-width: 600px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; text-align: center; }
  body { cursor: auto; }
  .cursor, .cursor-ring { display: none; }
}
