import { useEffect } from 'react'

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`

/* ---------------------------- Data (contenu) ---------------------------- */

const NAV = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'a-propos', label: 'À propos' },
  { id: 'projets', label: 'Projets' },
  { id: 'competences', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
]

const DOMAINES = [
  { titre: 'WEB', texte: 'Développement de sites et applications Web' },
  { titre: 'MOBILE', texte: 'Applications Android avec Kotlin' },
  { titre: 'GAME', texte: 'Création de jeux avec Unity' },
  { titre: 'BACKEND', texte: 'Java · Spring Boot · API · SQL' },
]

const PROJECTS = [
  {
    categorie: 'DÉVELOPPEMENT WEB',
    nom: 'Manara',
    role: 'Cheffe d\u2019équipe',
    images: [
      { src: asset('manara-admin.png'), alt: 'Manara — tableau de bord administrateur' },
      { src: asset('manara-parent.png'), alt: 'Manara — tableau de bord parent' },
      { src: asset('manara-login.png'), alt: 'Manara — page de connexion' },
    ],
    description: "CRM de gestion des activités jeunesse pour un camp : familles, animateurs et administration dans une seule plateforme. Trois espaces distincts (admin, parent, animateur) avec gestion de sessions, activités, incidents et notifications par courriel.",
    contribution: "Cheffe d'équipe : architecture du projet, coordination de l'équipe, et développement de plusieurs modules du backend et du frontend.",
    tags: ['Spring Boot', 'Angular', 'MySQL', 'Spring Security', 'API REST'],
    github: 'https://github.com/rosea-source',
  },
  {
    categorie: 'APPLICATION MOBILE',
    nom: 'Mon Calendrier Santé et Fitness',
    role: 'Contribution partagée',
    images: [
      { src: asset('illus-coding.svg'), alt: 'Illustration : application mobile' },
    ],
    description: "Application Android de suivi d'activité physique et de poids : calendrier mensuel des séances, ajout de séances avec type/durée/intensité, historique et suivi du poids dans le temps.",
    contribution: "Développement de l'écran d'accueil (calendrier mensuel, indicateurs, préférences) et de la base de données SQLite ; soutien sur l'écran d'ajout de séance.",
    tags: ['Kotlin', 'Android Studio', 'SQLite', 'MVP'],
    github: 'https://github.com/rosea-source/mon-calendrier-sante-et-fitness_Project',
  },
  {
    categorie: 'JEU VIDÉO 2D/3D',
    nom: 'The Fallen Angel',
    role: 'Contribution partagée',
    images: [
      { src: 'https://img.itch.zone/aW1hZ2UvNDU5NTg5My8yNzQxNDI0NC5wbmc=/original/DJuz8B.png', alt: 'The Fallen Angel — capture 1' },
      { src: 'https://img.itch.zone/aW1hZ2UvNDU5NTg5My8yNzQxNDI5NS5wbmc=/original/WUTPhN.png', alt: 'The Fallen Angel — capture 2' },
      { src: 'https://img.itch.zone/aW1hZ2UvNDU5NTg5My8yNzQxNDI1My5wbmc=/original/wfFkMN.png', alt: 'The Fallen Angel — capture 3' },
    ],
    description: "Jeu de plateforme 2D/3D en 6 niveaux : un ange banni des cieux doit traverser l'Enfer, le Jardin d'Éden puis un Purgatoire façon Escape Room pour reconquérir ses ailes.",
    contribution: "Développement en équipe de trois : conception de niveaux, résolution de conflits Git/GitLab, correction de bugs d'interface Unity.",
    tags: ['Unity', 'C#', 'Git'],
    link: 'https://xandraines.itch.io/the-fallen-angel',
    linkLabel: 'Voir sur itch.io',
  },
]

const APPRIS = [
  { emoji: '🧩', titre: 'RÉSOLUTION DE PROBLÈMES', texte: 'Identifier les problèmes et chercher des solutions.' },
  { emoji: '🔧', titre: 'DÉBOGAGE', texte: 'Analyser, corriger et améliorer une application existante.' },
  { emoji: '🤝', titre: 'TRAVAIL D\u2019ÉQUIPE', texte: 'Collaborer sur des projets réalisés dans le cadre de ma formation.' },
  { emoji: '📚', titre: 'APPRENTISSAGE', texte: 'Découvrir de nouvelles technologies et apprendre à les utiliser.' },
  { emoji: '🚀', titre: 'DÉPLOIEMENT', texte: 'Mettre des projets en ligne et les rendre accessibles.' },
]

const EXPERIENCE = [
  {
    titre: 'Animatrice de camp de jour',
    lieu: 'Camp Yopi',
    date: 'Juin 2026 — Août 2026',
    points: ["Conception et animation d'activités thématiques pour des groupes de 7 à 12 ans", 'Gestion de groupe et planification hebdomadaire en équipe'],
  },
  {
    titre: 'Caissière',
    lieu: 'Village des Valeurs, Saint-Léonard',
    date: 'Août 2025 — Juin 2026',
    points: ['Accueil et service à la clientèle', 'Organisation et présentation des produits'],
  },
  {
    titre: 'Caissière',
    lieu: 'Dollarama, Galerie d\u2019Anjou',
    date: 'Août 2023 — Septembre 2024',
    points: ['Accueil et service à la clientèle', 'Entretien et organisation de la zone de caisse'],
  },
]

const SKILLS = [
  { titre: 'Langages', items: ['Java', 'C#', 'Kotlin', 'JavaScript'] },
  { titre: 'Web', items: ['HTML', 'CSS', 'Angular', 'API REST'] },
  { titre: 'Backend', items: ['Java', 'Spring Boot', 'API REST'] },
  { titre: 'Mobile', items: ['Kotlin', 'Android Studio'] },
  { titre: 'Bases de données', items: ['SQL', 'MySQL / MariaDB'] },
  { titre: 'Jeu vidéo', items: ['Unity', 'C#'] },
  { titre: 'Outils', items: ['Git', 'GitHub', 'GitLab', 'Vercel'] },
]

/* --------------------------------- App ---------------------------------- */

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.12 }
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
          <a className="btn btn-primary btn-nav-cv" href={asset('cv-rose-alexandra-cirius.pdf')} download>
            Télécharger mon CV
          </a>
        </nav>
      </header>

      <main>
        {/* -------------------------------- HERO -------------------------------- */}
        <section id="accueil" className="hero band band-cream">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Étudiante en techniques de l'informatique</p>
              <h1 className="hero-title">Bonjour, je suis Rose. 🌸</h1>
              <p className="hero-tagline">
                Je suis une étudiante en informatique qui aime explorer le développement web,
                les applications mobiles et la création numérique.
              </p>
              <p className="hero-badge">À la recherche d'un stage en informatique</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projets">Voir mes projets</a>
                <a className="btn btn-ghost" href={asset('cv-rose-alexandra-cirius.pdf')} download>Télécharger mon CV</a>
              </div>
            </div>
            <div className="hero-illus">
              <img src={asset('illus-coding.svg')} alt="Illustration : développement et créativité" />
              <div className="hero-tags">
                <span>Java • Kotlin</span>
                <span>Web • Unity</span>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- DOMAINES --------------------------------- */}
        <section className="section reveal band band-milk domaines">
          <div className="domaine-grid">
            {DOMAINES.map((d) => (
              <div key={d.titre} className="domaine-card">
                <h3>{d.titre}</h3>
                <p>{d.texte}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------- A PROPOS ------------------------------ */}
        <section id="a-propos" className="section reveal band band-cream">
          <h2 className="section-title">À propos de moi</h2>
          <div className="about-grid">
            <div className="about-text-col">
              <p className="about-text">
                Je suis actuellement étudiante en Techniques de l'informatique au Cégep de Rosemont.
              </p>
              <p className="about-text">
                Au cours de ma formation, j'ai eu l'occasion de travailler sur différents types de
                projets, allant du développement web aux applications mobiles et aux jeux vidéo.
              </p>
              <p className="about-text">
                J'aime particulièrement les projets qui me permettent de combiner la technologie
                et la créativité.
              </p>
            </div>
            <div className="formation-card">
              <p className="formation-eyebrow">FORMATION</p>
              <h3>DEC — Techniques de l'informatique</h3>
              <p className="formation-place">Cégep de Rosemont</p>
              <p className="formation-eyebrow" style={{ marginTop: '18px' }}>DOMAINES</p>
              <ul className="formation-list">
                <li>Web</li>
                <li>Mobile</li>
                <li>Backend</li>
                <li>Jeu vidéo</li>
              </ul>
            </div>
          </div>
        </section>

        {/* -------------------------------- PROJETS ------------------------------- */}
        <section id="projets" className="section reveal band band-milk">
          <h2 className="section-title">Mes projets</h2>
          <p className="section-subtitle">
            Quelques projets réalisés au cours de ma formation et de mes expérimentations personnelles.
          </p>
          <div className="project-list">
            {PROJECTS.map((p) => (
              <article key={p.nom} className="project-feature">
                <div className="project-feature-media">
                  {p.images.map((img) => (
                    <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
                  ))}
                </div>
                <div className="project-feature-body">
                  <p className="project-category">{p.categorie}</p>
                  <h3>{p.nom}</h3>
                  <p className="project-role">{p.role}</p>
                  <p className="project-text">{p.description}</p>
                  <p className="project-contribution"><strong>Ma contribution : </strong>{p.contribution}</p>
                  <ul className="chip-list">
                    {p.tags.map((t) => <li key={t} className="chip chip-sm">{t}</li>)}
                  </ul>
                  <div className="project-buttons">
                    {p.link && (
                      <a className="btn btn-primary" href={p.link} target="_blank" rel="noreferrer">{p.linkLabel}</a>
                    )}
                    {p.github && (
                      <a className="btn btn-ghost" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="project-more">
            <a className="btn btn-ghost" href="https://github.com/rosea-source" target="_blank" rel="noreferrer">
              Voir tous mes projets →
            </a>
          </div>
        </section>

        {/* ---------------------------- CE QUE J'AI APPRIS ------------------------ */}
        <section className="section reveal band band-cream">
          <h2 className="section-title">Au fil de mes projets...</h2>
          <div className="appris-grid">
            {APPRIS.map((a) => (
              <div key={a.titre} className="appris-card">
                <span className="appris-emoji" aria-hidden="true">{a.emoji}</span>
                <h3>{a.titre}</h3>
                <p>{a.texte}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------- EXPERIENCE ----------------------------- */}
        <section className="section reveal band band-milk experience">
          <h2 className="section-title">Expérience</h2>
          <div className="experience-list">
            {EXPERIENCE.map((e) => (
              <div key={e.titre + e.lieu} className="experience-item">
                <div className="experience-head">
                  <h3>{e.titre}</h3>
                  <span className="experience-date">{e.date}</span>
                </div>
                <p className="experience-place">{e.lieu}</p>
                <ul>
                  {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------- COMPÉTENCES ------------------------------ */}
        <section id="competences" className="section reveal band band-cream">
          <h2 className="section-title">Compétences</h2>
          <div className="skills-grid">
            {SKILLS.map((s) => (
              <div key={s.titre} className="skill-block">
                <h3>{s.titre}</h3>
                <ul className="chip-list">
                  {s.items.map((i) => <li key={i} className="chip">{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------------------- CONTACT ------------------------------- */}
        <section id="contact" className="section reveal contact band band-milk">
          <h2 className="section-title">Vous avez un stage à me proposer ?</h2>
          <p className="contact-text">
            J'aimerais avoir l'occasion de mettre mes compétences en pratique, de contribuer à des
            projets concrets et de continuer à apprendre dans un environnement professionnel.
          </p>
          <div className="contact-links">
            <a href="mailto:rosealexandracirius@gmail.com" className="btn btn-primary">
              ✉ rosealexandracirius@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/rose-alexandra-cirius-1197b1218"
              target="_blank" rel="noreferrer" className="btn btn-ghost"
            >
              🔗 LinkedIn
            </a>
            <a
              href="https://github.com/rosea-source"
              target="_blank" rel="noreferrer" className="btn btn-ghost"
            >
              💻 GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer band band-cream">
        <p className="footer-brand">ROSE ALEXANDRA</p>
        <p>© 2026 Rose Alexandra Cirius</p>
        <div className="footer-links">
          <a href="https://github.com/rosea-source" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/rose-alexandra-cirius-1197b1218" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:rosealexandracirius@gmail.com">Email</a>
        </div>
      </footer>
    </>
  )
}
