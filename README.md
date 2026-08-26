# Portfolio — Rose Alexandra Cirius

Portfolio personnel, fait avec React + Vite. Palette rose / rouge / beige / noir,
inspirée des portfolios de Ira Doodle et Angèle Bappel, mais 100% custom.

## Développement local

```bash
npm install
npm run dev
```

## Mise en ligne sur Vercel (via GitHub)

1. Crée un repo GitHub (ex: `rose-portfolio`) et pousse ce code dedans.
2. Va sur vercel.com, connecte-toi avec GitHub, "Import Project", choisis le repo.
3. Vercel détecte Vite automatiquement (build: `npm run build`, output: `dist`).
4. Clique "Deploy". Chaque `git push` redéploie automatiquement.

## À personnaliser avant de publier

- Le lien GitHub dans la section Contact (`src/App.jsx`) pointe vers un espace
  réservé — remplace-le par ton vrai profil.
- Le lien itch.io de "The Fallen Angel" est un espace réservé — mets le vrai lien.
- Ajoute d'autres projets en dupliquant un objet dans le tableau `PROJECTS`
  (`src/App.jsx`), ou remplis la carte "Prochain projet".

## Note vie privée

Ton adresse postale et ton numéro de téléphone (présents sur ton CV) n'ont
volontairement pas été mis sur le site public — seulement ton courriel et ton
LinkedIn. Un portfolio public est indexé par Google, donc mieux vaut limiter
ce qui identifie où tu habites.
