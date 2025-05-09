import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { profileData } from '@/data/profile'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${profileData.name} - ${profileData.role}`,
  description: profileData.about,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/70 border-b border-zinc-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-pink-500 neon-text">{profileData.name}</h1>
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li><a href="#about" className="text-gray-300 hover:text-pink-400 transition-colors">À propos</a></li>
                  <li><a href="#skills" className="text-gray-300 hover:text-pink-400 transition-colors">Compétences</a></li>
                  <li><a href="#experience" className="text-gray-300 hover:text-pink-400 transition-colors">Expérience</a></li>
                  <li><a href="#education" className="text-gray-300 hover:text-pink-400 transition-colors">Formation</a></li>
                  <li><a href="#projects" className="text-gray-300 hover:text-pink-400 transition-colors">Projets</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-pink-400 transition-colors">Contact</a></li>
                </ul>
              </nav>
              <button className="md:hidden text-gray-300 hover:text-pink-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-zinc-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-pink-400">{profileData.name}</h2>
                <p className="text-gray-400">{profileData.role}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <p>Email: <a href={`mailto:${profileData.email}`} className="text-pink-400 hover:underline">{profileData.email}</a></p>
                <p>Téléphone: <a href={`tel:${profileData.phone}`} className="text-pink-400 hover:underline">{profileData.phone}</a></p>
              </div>
            </div>
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} {profileData.name}. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}