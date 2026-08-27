import { useEffect } from 'react'

/* -------------------- Un seul accent décoratif, discret -------------------- */

const Flourish = () => (
  <svg width="140" height="18" viewBox="0 0 180 24" aria-hidden="true" className="flourish">
    <path d="M2 12C40 2 60 22 90 12S140 2 178 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    <circle cx="90" cy="12" r="3.5" fill="currentColor" />
  </svg>
)

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`

/* ---------------------------- Data (contenu) ---------------------------- */

const SKILLS_TECH = ['Java', 'Angular', 'Kotlin / Android', 'Unity & C#', 'SQLite / Room', 'Retrofit', 'Hilt', 'Git & GitLab']
const SKILLS_SOFT = ["Adaptabilité", 'Organisation', "Travail d'équipe", 'Communication efficace', 'Gestion de groupe', 'Courtoisie']

const PROJECTS = [
  {
    name: 'The Fallen Angel',
    role: 'Jeu Unity — plateforme 2D/3D',
    text: "Jeu de plateforme publié sur itch.io, réalisé en équipe de trois. Résolution de conflits Git/GitLab, correction de bugs d'interface Unity.",
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
    text: "Navigateur Android natif qui bloque publicités, popups et redirections forcées, né d'une extension navigateur repensée pour mobile.",
    tags: ['Kotlin', 'WebView', 'Android'],
  },
]

const NAV = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'a-propos', label: 'À propos' },
  { id: 'formation', label: 'Formation' },
  { id: 'projets', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
]

/* --------------------------------- App ---------------------------------- */

export default function App() {
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
          <a href="#accueil" className="nav-brand">RCA</a>
          <ul className="nav-links">
            {NAV.map((n) => (
              <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        {/* -------------------------------- HERO -------------------------------- */}
        <section id="accueil" className="hero">
          <p className="eyebrow">Portfolio · 2026</p>
          <h1 className="hero-title">Rose Alexandra <span className="script">Cirius</span></h1>
          <p className="hero-tagline">
            Étudiante en informatique, développeuse Android et Unity — en route vers un
            baccalauréat en génie des opérations et de la logistique.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projets">Voir mes projets</a>
            <a className="btn btn-ghost" href="#contact">Me contacter</a>
          </div>
        </section>

        {/* ------------------------------- A PROPOS ------------------------------ */}
        <section id="a-propos" className="section reveal">
          <Flourish />
          <h2 className="section-title">À propos</h2>
          <div className="about-grid">
            <p className="about-text">
              Autonome et enthousiaste, mes premières expériences m'ont permis de renforcer mes acquis
              et d'apprivoiser différents outils et techniques. Je m'intègre facilement dans de
              nouveaux contextes de travail grâce à un vrai esprit d'équipe et de bonnes capacités
              d'écoute et de communication.
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

        {/* ------------------------------- FORMATION ------------------------------ */}
        <section id="formation" className="section reveal">
          <Flourish />
          <h2 className="section-title">Formation</h2>
          <div className="formation-card">
            <p className="formation-date">2024 — en cours</p>
            <h3>Technique en informatique</h3>
            <p className="formation-place">Collège de Rosemont</p>
            <p className="formation-text">
              En route vers un baccalauréat en génie des opérations et de la logistique.
            </p>
          </div>
        </section>

        {/* ---------------------------- RECHERCHE DE STAGE ------------------------ */}
        <section id="stage" className="section reveal stage">
          <div className="stage-grid">
            <img src={asset('illus-job-hunt.svg')} alt="Illustration : recherche d'opportunités" className="stage-illus" />
            <div>
              <h2 className="section-title section-title--left">Ouverte aux stages</h2>
              <p className="stage-text">
                Je suis actuellement à la recherche d'un stage en informatique — si mon profil t'intéresse,
                n'hésite pas à me contacter.
              </p>
              <a className="btn btn-primary" href="#contact">Me contacter</a>
            </div>
          </div>
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
                    {p.linkLabel} <span className="arrow">→</span>
                  </a>
                )}
              </article>
            ))}

            <article className="project-card project-card--empty">
              <h3>Prochain projet</h3>
              <p className="project-text">Une place réservée pour ce qui s'en vient.</p>
            </article>
          </div>
        </section>

        {/* -------------------------------- CONTACT ------------------------------- */}
        <section id="contact" className="section reveal contact">
          <Flourish />
          <h2 className="section-title">Contact</h2>
          <p className="contact-text">
            Une question, une offre, ou juste envie de jaser d'un projet ? Écris-moi.
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
        <p>Rose Alexandra Cirius — {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}