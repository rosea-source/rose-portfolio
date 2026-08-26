import { useEffect, useState } from 'react'

/* ---------- Doodles (SVG maison, libres de droits, faits main) ---------- */

const Vine = ({ className = '', flip = false }) => (
  <svg
    className={`doodle vine ${className}`}
    style={flip ? { transform: 'scaleX(-1)' } : undefined}
    width="120" height="160" viewBox="0 0 120 160" fill="none" aria-hidden="true"
  >
    <path d="M20 4C20 40 90 30 90 66C90 102 24 96 24 132C24 150 60 150 66 156"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="20" cy="4" r="4" fill="currentColor" />
    <circle cx="90" cy="66" r="4" fill="currentColor" />
    <circle cx="24" cy="132" r="4" fill="currentColor" />
    <path d="M40 20c8-10 20-10 24 0-8 6-18 4-24 0Z" fill="currentColor" opacity="0.85" />
    <path d="M70 90c10-4 18 4 16 14-10 0-18-6-16-14Z" fill="currentColor" opacity="0.85" />
  </svg>
)

const WaxSeal = ({ size = 92 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" className="wax-seal">
    <circle cx="50" cy="50" r="46" fill="var(--wine)" />
    <circle cx="50" cy="50" r="46" fill="none" stroke="var(--rose-soft)" strokeWidth="1.5" strokeDasharray="2 4" />
    <circle cx="50" cy="50" r="36" fill="none" stroke="var(--rose)" strokeWidth="2" />
    <text x="50" y="60" textAnchor="middle" fontFamily="'Marck Script', cursive" fontSize="34" fill="var(--rose-soft)">R</text>
  </svg>
)

const Sparkle = ({ className = '' }) => (
  <svg className={`doodle sparkle ${className}`} width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
    <path d="M14 0c0 8 6 14 14 14-8 0-14 6-14 14 0-8-6-14-14-14 8 0 14-6 14-14Z" fill="currentColor" />
  </svg>
)

const Flourish = () => (
  <svg width="180" height="24" viewBox="0 0 180 24" aria-hidden="true" className="flourish">
    <path d="M2 12C40 2 60 22 90 12S140 2 178 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    <circle cx="90" cy="12" r="3.5" fill="currentColor" />
  </svg>
)

/* ---------------------------- Data (contenu) ---------------------------- */

const SKILLS_TECH = ['Java', 'Angular', 'Kotlin / Android', 'Unity & C#', 'SQLite / Room', 'Retrofit', 'Hilt', 'Git & GitLab']
const SKILLS_SOFT = ['Adaptabilité', 'Organisation', 'Travail d\u2019équipe', 'Communication efficace', 'Gestion de groupe', 'Courtoisie']

const TIMELINE = [
  {
    date: '2024 — en cours',
    title: 'Technique en informatique',
    place: 'Collège de Rosemont',
    text: 'En route vers un baccalauréat en génie des opérations et de la logistique.',
    tag: 'Formation',
  },
  {
    date: 'Juin — août 2026',
    title: 'Animatrice de camp de jour',
    place: 'Camp Yopi',
    text: 'Conception et animation d\u2019activités thématiques (jeux, dessin, bande dessinée) pour des groupes de 7 à 12 ans. Gestion de groupe et planification hebdomadaire en équipe.',
    tag: 'Expérience',
  },
  {
    date: 'Août 2025 — juin 2026',
    title: 'Caissière',
    place: 'Village des Valeurs, Saint-Léonard',
    text: 'Accueil client, organisation des rayons et entretien de la zone de caisse.',
    tag: 'Expérience',
  },
  {
    date: 'Août 2023 — sept. 2024',
    title: 'Caissière',
    place: 'Dollarama, Galerie d\u2019Anjou',
    text: 'Accueil client et présentation soignée des produits en rayon.',
    tag: 'Expérience',
  },
]

const PROJECTS = [
  {
    name: 'The Fallen Angel',
    role: 'Jeu Unity — plateforme 2D/3D',
    text: 'Jeu de plateforme publié sur itch.io, réalisé en équipe de trois. Résolution de conflits Git/GitLab, correction de bugs d\u2019interface Unity.',
    tags: ['Unity', 'C#', 'Git'],
    link: 'https://itch.io',
    linkLabel: 'Voir sur itch.io',
  },
  {
    name: 'Mon Calendrier Santé et Fitness',
    role: 'App Android — projet de cours',
    text: 'Calendrier santé et fitness en équipe de trois (cours 420-G25-RO). Architecture MVP, migration complète de Room vers SQLiteOpenHelper, tests Mockito et Espresso.',
    tags: ['Android', 'MVP', 'SQLite', 'Tests'],
  },
  {
    name: 'AdBlock Browser',
    role: 'App Android — Kotlin / WebView',
    text: 'Navigateur Android natif qui bloque publicités, popups et redirections forcées, né d\u2019une extension navigateur repensée pour mobile.',
    tags: ['Kotlin', 'WebView', 'Android'],
  },
]

const NAV = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'a-propos', label: 'À propos' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'projets', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
]

/* --------------------------------- App ---------------------------------- */

export default function App() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.15 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#accueil">Aller au contenu</a>

      <header className="nav-wrap">
        <nav className="nav" aria-label="Navigation principale">
          <a href="#accueil" className="nav-brand">RC</a>
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
          <ul className={`nav-links ${open ? 'is-open' : ''}`}>
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        {/* -------------------------------- HERO -------------------------------- */}
        <section id="accueil" className="hero">
          <Vine className="hero-vine hero-vine--left" />
          <Vine className="hero-vine hero-vine--right" flip />
          <Sparkle className="spark spark-1" />
          <Sparkle className="spark spark-2" />

          <p className="eyebrow">Portfolio · 2026</p>
          <h1 className="hero-title">
            Rose Alexandra<br /><span className="script">Cirius</span>
          </h1>
          <p className="hero-tagline">
            Étudiante en informatique, bricoleuse d\u2019apps Android et de petits mondes en Unity —
            en route vers un bacc en génie des opérations et de la logistique.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projets">Voir mes projets</a>
            <a className="btn btn-ghost" href="#contact">Me contacter</a>
          </div>
          <WaxSeal />
        </section>

        {/* ------------------------------- A PROPOS ------------------------------ */}
        <section id="a-propos" className="section reveal">
          <Flourish />
          <h2 className="section-title">À propos</h2>
          <div className="about-grid">
            <p className="about-text">
              Autonome et enthousiaste, mes premières expériences m\u2019ont permis de renforcer mes acquis
              et d\u2019apprivoiser différents outils et techniques. Je m\u2019intègre facilement dans de
              nouveaux contextes de travail grâce à un vrai esprit d\u2019équipe et de bonnes capacités
              d\u2019écoute et de communication — que ce soit derrière un clavier ou devant un groupe de
              vingt enfants en camp de jour.
            </p>
            <div className="skills">
              <div className="skill-block">
                <h3>Technique</h3>
                <ul className="chip-list">
                  {SKILLS_TECH.map((s) => <li key={s} className="chip">{s}</li>)}
                </ul>
              </div>
              <div className="skill-block">
                <h3>Savoir-être</h3>
                <ul className="chip-list">
                  {SKILLS_SOFT.map((s) => <li key={s} className="chip chip-alt">{s}</li>)}
                </ul>
              </div>
              <div className="skill-block">
                <h3>Certifications & langues</h3>
                <ul className="chip-list">
                  <li className="chip chip-alt">Secourisme général</li>
                  <li className="chip chip-alt">Formation de gardiennage</li>
                  <li className="chip chip-alt">Français — langue maternelle</li>
                  <li className="chip chip-alt">Anglais — B2</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------- PARCOURS ------------------------------ */}
        <section id="parcours" className="section reveal">
          <Flourish />
          <h2 className="section-title">Parcours</h2>
          <ol className="timeline">
            {TIMELINE.map((t) => (
              <li key={t.title} className="timeline-item">
                <span className="timeline-dot" aria-hidden="true" />
                <div className="timeline-card">
                  <span className="timeline-tag">{t.tag}</span>
                  <p className="timeline-date">{t.date}</p>
                  <h3>{t.title}</h3>
                  <p className="timeline-place">{t.place}</p>
                  <p className="timeline-text">{t.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* -------------------------------- PROJETS ------------------------------- */}
        <section id="projets" className="section reveal">
          <Flourish />
          <h2 className="section-title">Projets</h2>
          <div className="project-grid">
            {PROJECTS.map((p) => (
              <article key={p.name} className="project-card">
                <div className="project-card-top">
                  <h3>{p.name}</h3>
                  <p className="project-role">{p.role}</p>
                </div>
                <p className="project-text">{p.text}</p>
                <ul className="chip-list">
                  {p.tags.map((t) => <li key={t} className="chip chip-sm">{t}</li>)}
                </ul>
                {p.link && (
                  <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                    {p.linkLabel} →
                  </a>
                )}
              </article>
            ))}

            <article className="project-card project-card--empty">
              <div className="empty-seal">＋</div>
              <h3>Prochain projet</h3>
              <p className="project-text">Une place réservée pour ce qui s\u2019en vient.</p>
            </article>
          </div>
        </section>

        {/* -------------------------------- CONTACT ------------------------------- */}
        <section id="contact" className="section reveal contact">
          <Flourish />
          <h2 className="section-title">Contact</h2>
          <p className="contact-text">
            Une question, une offre, ou juste envie de jaser d\u2019un projet ? Écris-moi.
          </p>
          <div className="contact-links">
            <a href="mailto:rosealexandracirius@gmail.com" className="btn btn-primary">
              rosealexandracirius@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/rose-alexandra-cirius-1197b1218"
              target="_blank" rel="noreferrer" className="btn btn-ghost"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank" rel="noreferrer" className="btn btn-ghost"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <Vine className="footer-vine" />
        <p>Fait avec 🩷 par Rose Alexandra Cirius — {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}
