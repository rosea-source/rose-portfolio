import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Déployé sur Vercel/Netlify (pas GitHub Pages) donc pas besoin de "base" :
// le site est servi à la racine du domaine.
export default defineConfig({
  plugins: [react()],
})
