/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Nécessaire pour GitHub Pages
    basePath: process.env.NODE_ENV === 'production' ? '/cv-felicien' : '', // Remplacez 'cv-felicien' par le nom de votre dépôt GitHub
    images: {
      unoptimized: true, // Nécessaire pour l'export statique
    },
    trailingSlash: true, // Recommandé pour les sites statiques
  };
  
  export default nextConfig;