"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SkillBar } from "@/components/skill-bar"
import { profileData } from "@/data/profile"
import { Code, Mail, Phone, Github, MapPin, Calendar, ExternalLink } from "lucide-react"

// Utilitaire pour les chemins d'images
function getImagePath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/cv' : '';
  return `${basePath}${path}`;
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showProfileImage, setShowProfileImage] = useState(false);

  // Animation au chargement et chargement différé de l'image
  useEffect(() => {
    setIsLoaded(true);
    // Délai court pour s'assurer que l'image se charge uniquement côté client
    const timer = setTimeout(() => {
      setShowProfileImage(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const calculateAge = () => {
    const birthDate = new Date(profileData.dateOfBirth.split('/').reverse().join('/'));
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <main className="min-h-screen grid-bg">
    {/* Section Hero avec dégradé élégant */}
    <section className="py-24 relative overflow-hidden">
      {/* Fond dégradé couvrant toute la largeur et le haut de la page sans cadrillage */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-black opacity-80 z-0"></div>
            
      {/* Points lumineux discrets */}
      <div className="absolute inset-0 z-0">
        <div className="absolute h-3 w-3 rounded-full bg-blue-400 top-1/4 right-1/4 opacity-30 blur-sm"></div>
        <div className="absolute h-4 w-4 rounded-full bg-blue-300 top-2/3 left-1/3 opacity-20 blur-sm"></div>
        <div className="absolute h-2 w-2 rounded-full bg-cyan-300 top-1/3 right-1/3 opacity-40 blur-sm"></div>
        <div className="absolute h-5 w-5 rounded-full bg-blue-500 top-1/2 left-1/4 opacity-25 blur-sm"></div>
        <div className="absolute h-6 w-6 rounded-full bg-blue-600 top-3/4 right-1/4 opacity-15 blur-sm"></div>
        <div className="absolute h-4 w-4 rounded-full bg-blue-700 top-1/4 left-2/3 opacity-35 blur-sm"></div>
        <div className="absolute h-3 w-3 rounded-full bg-blue-800 top-2/3 right-1/3 opacity-20 blur-sm"></div>
        <div className="absolute h-2 w-2 rounded-full bg-blue-900 top-1/3 left-1/4 opacity-30 blur-sm"></div>
        <div className="absolute h-5 w-5 rounded-full bg-blue-100 top-1/2 right-1/4 opacity-10 blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Photo de profil centrée, chargée conditionnellement */}
          <div className="flex justify-center mb-8">
            <div className="relative w-40 h-40 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/20">
              {showProfileImage && (
                <div className="absolute inset-[-0%] w-[100%] h-[120%]">
                  <Image
                    src={getImagePath("/images/profile.jpg")}
                    alt="Photo de profil"
                    fill
                    sizes="200px"
                    className="object-cover" 
                    priority
                  />
                </div>
              )}
              {!showProfileImage && (
                <div className="absolute inset-0 bg-blue-900 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {profileData.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          {/* Informations personnelles */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            {profileData.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">{profileData.role}</p>
          <p className="max-w-2xl mx-auto text-lg mb-12 text-gray-400">{profileData.about}</p>
          
          {/* Boutons de contact bien structurés */}
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              variant="default" 
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 shadow-md px-8 py-6 text-lg transition-all duration-300"
              onClick={() => window.location.href = `mailto:${profileData.email}`}
            >
              <Mail className="mr-3 h-5 w-5" />
              M&apos;envoyer un email
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-400 text-blue-300 hover:bg-blue-900/20 px-8 py-6 text-lg transition-all duration-300"
              onClick={() => window.location.href = profileData.github}
            >
              <Github className="mr-3 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>

      {/* Section À propos */}
      <section id="about" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">À propos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-2 bg-zinc-900 border-zinc-800 p-8 rounded-lg shadow-md">
              <p className="text-lg mb-4 text-gray-300">
                À {calculateAge()} ans, j&apos;ai déjà créé plusieurs entreprises 
                dans le domaine de la vente de vetements en ligne et du développement de solutions SaaS. Au-delà de l&apos;aspect technique, je m&apos;intéresse également aux stratégies business et à l&apos;expérience utilisateur. Ce qui m&apos;interesse particulièrement, c&apos;est de travailler en équipe sur des projets innovants qui apportent des solutions à des problèmes réels.
              </p>
              <p className="text-lg text-gray-300">
              Je recherche actuellement un stage dans une entreprise innovante où je pourrai mettre à profit mes compétences techniques et ma créativité. Mon objectif est de contribuer à des projets stimulants tout en continuant à développer mes connaissances et compétences dans un environnement professionnel.</p>
            </div>
            <Card className="bg-zinc-900 border-zinc-800 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Informations</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-200">Date de naissance</p>
                      <p className="text-gray-400">{profileData.dateOfBirth}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-200">Localisation</p>
                      <p className="text-gray-400">{profileData.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="skills" className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Card className="bg-zinc-900 border-zinc-800 hover:border-blue-400 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center text-blue-300">
                  <Code className="mr-2 h-5 w-5 text-blue-400" />
                  Langages de programmation
                </h3>
                <div className="space-y-6">
                  {profileData.skills.programming.map((skill) => (
                    <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800 hover:border-blue-400 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center text-blue-300">
                  <Code className="mr-2 h-5 w-5 text-blue-400" />
                  Développement Web
                </h3>
                <div className="space-y-6">
                  {profileData.skills.web.map((skill) => (
                    <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800 hover:border-blue-400 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center text-blue-300">
                  <Code className="mr-2 h-5 w-5 text-blue-400" />
                  Autres compétences
                </h3>
                <div className="space-y-6">
                  {profileData.skills.other.map((skill) => (
                    <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Expérience */}
      <section id="experience" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">Expérience professionnelle</h2>
          <div className="space-y-6 mt-6">
            {profileData.experience.map((exp, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 border-l-4 border-l-blue-500 hover:shadow-blue-900/20 transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      {exp.company === "Bleam (SaaS)" && (
                        <div className="flex-shrink-0">
                          <Image 
                            src={getImagePath("/Bleam.svg")}
                            alt="Bleam logo"
                            width={60}
                            height={60}
                            className="mb-0"
                          />
                        </div>
                      )}
                      
                      {exp.company === "La Ruche AFL - Société par actions simplifiée" && (
                        <div className="flex-shrink-0">
                          <Image 
                            src={getImagePath("/images/LaRuche.png")}
                            alt="La Ruche logo"
                            width={60}
                            height={60}
                            className="mb-0"
                          />
                        </div>
                      )}
                      
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-blue-300 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <span className="bg-blue-900/30 text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="mb-4 text-gray-300">{exp.description}</p>
                  <div>
                    <h4 className="font-medium mb-2 text-gray-200">Réalisations:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Formation */}
      <section id="education" className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">Formation</h2>
          <div className="space-y-6 mt-6">
            {profileData.education.map((edu, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 hover:shadow-blue-900/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                      <p className="text-blue-300 font-medium">{edu.degree}</p>
                    </div>
                    <span className="bg-blue-900/30 text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-300">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projects" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Projet Bleam */}
            <Card className="bg-zinc-900 border-zinc-800 h-full hover:shadow-blue-900/20 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Image 
                    src={getImagePath("/Bleam.svg")}
                    alt="Bleam logo"
                    width={60}
                    height={60}
                    className="mr-4"
                  />
                  <h3 className="text-xl font-bold text-white">Bleam</h3>
                </div>
                <div className="text-gray-400 mb-4 flex-grow">
                  <p className="mb-2">Ce à quoi j&apos;ai contribué :</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Création d&apos;un assistant automatique pour répondre aux clients et gérer les négociations</li>
                    <li>Développement d&apos;un système de comptabilité automatique</li>
                    <li>Gestion des requêtes API REST</li>
                    <li>Développement d&apos;une partie du front-end</li>
                  </ul>
                </div>
                <a href="https://dev.bleam.app/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 flex items-center mb-4">
                  <ExternalLink className="w-4 h-4 mr-1" /> Visiter le site
                </a>
                <div className="mt-auto">
                  <Badge variant="default" className="bg-blue-900/30 text-blue-200 mr-2 mb-2">JavaScript</Badge>
                  <Badge variant="default" className="bg-blue-900/30 text-blue-200 mr-2 mb-2">Electron JS</Badge>
                  <Badge variant="default" className="bg-blue-900/30 text-blue-200 mr-2 mb-2">API REST</Badge>
                  <Badge variant="default" className="bg-blue-900/30 text-blue-200 mr-2 mb-2">IA</Badge>
                </div>
              </CardContent>
            </Card>
            
            {/* Projet La Ruche */}
            <Card className="bg-zinc-900 border-zinc-800 h-full hover:shadow-blue-900/20 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Image 
                    src={getImagePath("/images/LaRuche.png")}
                    alt="La Ruche"
                    width={60}
                    height={60}
                    className="mr-4"
                  />
                  <h3 className="text-xl font-bold text-white">La Ruche</h3>
                </div>
                <div className="text-gray-400 mb-4 flex-grow">
                 <p className="mb-2">Ce à quoi j&apos;ai contribué :</p>
                 <ul className="list-disc pl-5 space-y-1">
                    <li>Gestion des ventes de vêtements en ligne</li>
                    <li>Établissement de partenariats avec des fournisseurs internationaux</li>
                    <li>Mise en place d&apos;un système d&apos;inventaire et de gestion des stocks</li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <Badge variant="default" className="bg-blue-900/30 text-blue-200 mr-2 mb-2">E-commerce</Badge>
                  <Badge variant="default" className="bg-blue-900/30 text-blue-200 mr-2 mb-2">Automatisation</Badge>
                  <Badge variant="default" className="bg-blue-900/30 text-blue-200 mr-2 mb-2">Gestion</Badge>
                </div>
              </CardContent>
            </Card>
            
            {/* Projets 42 */}
            <Card className="bg-zinc-900 border-zinc-800 h-full hover:shadow-blue-900/20 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Image 
                    src={getImagePath("/images/42projects.jpg")}
                    alt="42 Projects"
                    width={60}
                    height={60}
                    className="rounded-md mr-4"
                  />
                  <h3 className="text-xl font-bold text-white">Projets</h3>
                </div>
                <div className="text-gray-400 mb-4 flex-grow">
                  <p className="mb-2">Réalisation de divers projets techniques à l&apos;École 42 :</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Minishell : création d&apos;un Shell de A à Z comme un Terminal</li>
                    <li>Fractol : génération de fractales</li>
                    <li>IRC : projet en équipe de communication en réseau</li>
                    <li>Transcendence : développement d&apos;application web complète</li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <Badge variant="default" className="bg-blue-900/30 text-blue-200 mr-2 mb-2">C</Badge>
                  <Badge variant="default" className="bg-blue-900/30 text-blue-200 mr-2 mb-2">C++</Badge>
                  <Badge variant="default" className="bg-blue-900/30 text-blue-200 mr-2 mb-2">Algorithmie</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-16 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Contactez-moi</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Intéressé(e) par mon profil ? N&apos;hésitez pas à me contacter pour discuter de votre projet ou de toute opportunité de stage.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              variant="default" 
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/20 py-6 px-8"
              onClick={() => window.location.href = `mailto:${profileData.email}`}
            >
              <Mail className="mr-3 h-5 w-5" />
              M&apos;envoyer un email
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-500 text-blue-300 hover:bg-blue-900/20 py-6 px-8"
              onClick={() => window.location.href = `tel:${profileData.phone}`}
            >
              <Phone className="mr-3 h-5 w-5" />
              M&apos;appeler
            </Button>
          </div>
          
          {/* Bouton retour en haut */}
          <div className="mt-12 flex justify-center">
            <a 
              href="#" 
              className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
              aria-label="Retour en haut"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}