"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SkillBar } from "@/components/skill-bar"
import { profileData } from "@/data/profile"
import { Code, Mail, Phone, Github, MapPin, Calendar, ExternalLink, ChevronRight } from "lucide-react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Animation au chargement
  useEffect(() => {
    setIsLoaded(true);
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
      {/* Section Hero avec dégradé et effet parallaxe */}
      <section className="py-24 bg-gradient-to-r from-black via-zinc-900 to-black relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("/images/placeholder.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)'
          }}
        />
        
        {/* Particules/lignes en arrière-plan */}
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(236, 72, 153, 0.1)" strokeWidth="1" />
              </pattern>
            </defs>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mx-auto mb-8 relative w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 glow-border">
              <Image
                src="/images/profile.jpg"
                alt={profileData.name}
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 neon-text">{profileData.name}</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">{profileData.role}</p>
            <p className="max-w-2xl mx-auto text-lg mb-10 text-gray-400">{profileData.about}</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="default" 
                className="bg-pink-600 hover:bg-pink-700 shadow-lg shadow-pink-600/20"
                onClick={() => window.location.href = `mailto:${profileData.email}`}
              >
                <Mail className="mr-2 h-4 w-4" />
                Me contacter
              </Button>
              <Button 
                variant="outline" 
                className="border-pink-600 text-pink-400 hover:bg-pink-900/20"
                onClick={() => window.location.href = profileData.github}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
            
            {/* Indicateur de défilement */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-slow">
              <p className="text-sm text-gray-400 mb-2">Découvrir</p>
              <ChevronRight className="h-5 w-5 text-pink-500 transform rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section id="about" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">À propos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="md:col-span-2">
              <p className="text-lg mb-6 text-gray-300">
                Passionné par la technologie et l&apos;entrepreneuriat, je suis un développeur full stack spécialisé dans le webscraping et l&apos;IA, 
                actuellement en formation à l&apos;École 42 Nice. À seulement {calculateAge()} ans, j&apos;ai déjà créé plusieurs entreprises 
                dans le domaine de la vente en ligne et du développement de solutions SaaS.
              </p>
              <p className="text-lg text-gray-300">
                Je recherche actuellement un stage pour mettre à profit mes compétences techniques et mon esprit d&apos;initiative.
              </p>
            </div>
            <Card className="bg-zinc-900 border-zinc-800 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-pink-400">Informations</h3>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-3 text-pink-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-200">Date de naissance</p>
                      <p className="text-gray-400">{profileData.dateOfBirth}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-pink-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-200">Email</p>
                      <a href={`mailto:${profileData.email}`} className="text-pink-400 hover:underline">
                        {profileData.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-pink-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-200">Téléphone</p>
                      <a href={`tel:${profileData.phone}`} className="text-pink-400 hover:underline">
                        {profileData.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Github className="h-5 w-5 mr-3 text-pink-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-200">GitHub</p>
                      <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">
                        github.com/Felicien410
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-pink-500 mt-0.5" />
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
      <section id="skills" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="bg-zinc-900 border-zinc-800 hover:border-pink-900 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center text-pink-400">
                  <Code className="mr-2 h-5 w-5 text-pink-500" />
                  Langages de programmation
                </h3>
                <div className="space-y-6">
                  {profileData.skills.programming.map((skill) => (
                    <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800 hover:border-pink-900 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center text-pink-400">
                  <Code className="mr-2 h-5 w-5 text-pink-500" />
                  Développement Web
                </h3>
                <div className="space-y-6">
                  {profileData.skills.web.map((skill) => (
                    <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800 hover:border-pink-900 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center text-pink-400">
                  <Code className="mr-2 h-5 w-5 text-pink-500" />
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
      <section id="experience" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">Expérience professionnelle</h2>
          <div className="space-y-8 mt-8">
            {profileData.experience.map((exp, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 border-l-4 border-l-pink-600 hover:shadow-pink-900/20 transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-pink-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="bg-pink-900/30 text-pink-200 text-sm font-medium px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  {exp.company === "Bleam (SaaS)" && (
                    <div className="mb-6">
                      <Image 
                        src="/Bleam.svg"
                        alt="Bleam logo"
                        width={120}
                        height={40}
                        className="mb-4"
                      />
                    </div>
                  )}
                  
                  {exp.company === "La Ruche (SAS)" && (
                    <div className="mb-6">
                      <Image 
                        src="/images/LaRuche.png"
                        alt="La Ruche logo"
                        width={120}
                        height={40}
                        className="mb-4"
                      />
                    </div>
                  )}
                  
                  <p className="mb-6 text-gray-300">{exp.description}</p>
                  <div>
                    <h4 className="font-medium mb-3 text-gray-200">Réalisations:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
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
      <section id="education" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">Formation</h2>
          <div className="space-y-8 mt-8">
            {profileData.education.map((edu, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 hover:shadow-pink-900/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                      <p className="text-pink-400 font-medium">{edu.degree}</p>
                    </div>
                    <span className="bg-pink-900/30 text-pink-200 text-sm font-medium px-3 py-1 rounded-full">
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
      <section id="projects" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {profileData.projects.map((project, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 h-full hover:shadow-pink-900/20 transition-all">
                <CardContent className="p-6 flex flex-col h-full">
                  {index === 0 && (
                    <div className="mb-4">
                      <Image 
                        src="/Bleam.svg"
                        alt="Bleam logo"
                        width={80}
                        height={80}
                        className="mb-2"
                      />
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="mb-4">
                      <Image 
                        src="/images/LaRuche.png"
                        alt="La Ruche App"
                        width={80}
                        height={80}
                        className="mb-2"
                      />
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="mb-4">
                      <Image 
                        src="/images/42projects.jpg"
                        alt="42 Projects"
                        width={80}
                        height={80}
                        className="rounded-md mb-2"
                      />
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                  <div className="mt-auto">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="default" className="bg-pink-900/30 text-pink-200 mr-2 mb-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact avec effet de glassmorphisme */}
      <section id="contact" className="py-24 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white neon-text">Contactez-moi</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-300">
            Intéressé(e) par mon profil ? N&apos;hésitez pas à me contacter pour discuter de votre projet ou de toute opportunité de stage.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              variant="default" 
              size="lg"
              className="bg-pink-600 hover:bg-pink-700 shadow-lg shadow-pink-600/20 py-6 px-8"
              onClick={() => window.location.href = `mailto:${profileData.email}`}
            >
              <Mail className="mr-3 h-5 w-5" />
              M&apos;envoyer un email
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-pink-600 text-pink-400 hover:bg-pink-900/20 py-6 px-8"
              onClick={() => window.location.href = `tel:${profileData.phone}`}
            >
              <Phone className="mr-3 h-5 w-5" />
              M&apos;appeler
            </Button>
          </div>
          
          {/* Bouton retour en haut avec animation */}
          <div className="mt-20 flex justify-center">
            <a 
              href="#" 
              className="p-3 rounded-full bg-pink-600 hover:bg-pink-700 transition-colors animate-border-glow"
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