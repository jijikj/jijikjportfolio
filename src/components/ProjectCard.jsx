import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 14 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export default function ProjectCard() {
  const projets = [
    {
      id: 1,
      nom: "Plateforme Billetterie NFT",
      description: "Développement d'une plateforme de billetterie sportive décentralisée sur la blockchain avec smart contracts et MetaMask.",
      technos: ["React.js", "Solidity", "Tailwind"],
      lienGit: "https://github.com/jijikj/app-sport-pfe",
      lienDemo: "https://app-sport-pfe.vercel.app"
    },
    {
      id: 2,
      nom: "Portfolio Fiverr & Coloring Book",
      description: "Vitrine interactive pour livres de coloriage et produits digitaux avec gestion et aperçu direct des couvertures.",
      technos: ["Next.js", "Tailwind", "Vercel"],
      lienGit: "",
      lienDemo: "https://coloring-book-jiarkhadija-e6s1.vercel.app"
    },
    {
      id: 3,
      nom: "Site Plombier Chauffagiste",
      description: "Application vitrine professionnelle et formulaire de devis pour un artisan plombier à Paris, ultra responsive.",
      technos: ["Next.js", "Tailwind", "Responsive"],
      lienGit: "",
      lienDemo: "https://site-plombier-beige.vercel.app"
    },
    {
      id: 4,
      nom: "Système de Gestion de Stock Temps Réel",
      description: "Application moderne de suivi de stock et gestion des ressources avec synchronisation des données en temps réel.",
      technos: ["Next.js", "Firebase", "Tailwind", "TypeScript"],
      lienGit: "https://github.com/jijikj/supplysync-erp",
      lienDemo: "https://supplysync-erp-ruddy.vercel.app"
    }
  ];

  const technologies = [
    "React", "Next.js", "HTML", "CSS", "JavaScript", "Node.js", 
    "UML", "Gestion de projet", "SQL", "Git", "Python", "C", 
    "Solidity", "Blockchain", "TypeScript"
  ];

  const dupeProjets = [...projets, ...projets];
  const dupeTechs = [...technologies, ...technologies, ...technologies];

  const projectsRef = useRef(null);
  const techsRef = useRef(null);
  const [projectsWidth, setProjectsWidth] = useState(0);
  const [techsWidth, setTechsWidth] = useState(0);

  useEffect(() => {
    if (projectsRef.current) {
      const original = projectsRef.current.children;
      const width = Array.from(original).slice(0, projets.length).reduce((acc, el) => acc + el.offsetWidth + 24, 0);
      setProjectsWidth(width);
    }
    if (techsRef.current) {
      const original = techsRef.current.children;
      const width = Array.from(original).slice(0, technologies.length).reduce((acc, el) => acc + el.offsetWidth + 16, 0);
      setTechsWidth(width);
    }
  }, [projets.length, technologies.length]);

  return (
    <section id="projects" className="py-20 overflow-hidden w-full bg-slate-950/20">
      
      {/* En-tête */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">Portfolio & Stack</span>
        <h2 className="text-4xl font-black text-white mt-1">
          Mes Réalisations & <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Compétences Tech</span>
        </h2>
      </div>

      {/* Carrousel 1 : Projets avec capture automatique */}
      <div className="flex overflow-hidden w-full relative mb-14 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-slate-950 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-slate-950 after:to-transparent">
        <motion.div 
          ref={projectsRef}
          className="flex gap-6 whitespace-nowrap px-4"
          animate={{ x: projectsWidth ? [0, -projectsWidth] : 0 }}
          transition={{
            ease: "linear",
            duration: projectsWidth ? projectsWidth / 100 : 25,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {dupeProjets.map((projet, index) => {
            // URL de capture automatisée
            const previewImageUrl = `https://s0.wp.com/mshots/v1/${encodeURIComponent(projet.lienDemo)}?w=800&h=500`;

            return (
              <div
                key={index}
                className="group inline-block bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-slate-800/80 shadow-2xl hover:border-indigo-500/40 transition-all w-[350px] md:w-[420px] whitespace-normal flex flex-col justify-between"
              >
                {/* LIEN PRINCIPAL CLIQUABLE */}
                <a 
                  href={projet.lienDemo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block space-y-4 cursor-pointer"
                >
                  {/* Conteneur d'image avec capture mShots */}
                  <div className="w-full h-48 bg-slate-950 rounded-2xl overflow-hidden mb-3 border border-slate-800 relative">
                    <img 
                      src={previewImageUrl} 
                      alt={projet.nom} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Secours instantané si le serveur met du temps à capturer la première fois
                        e.target.onerror = null;
                        e.target.src = `https://image.thum.io/get/width/600/crop/600/${projet.lienDemo}`;
                      }}
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-indigo-300 transition-colors">
                      {projet.nom}
                    </h3>
                    <span className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed min-h-[60px]">
                    {projet.description}
                  </p>
                </a>

                {/* PIED DE CARTE (STACK & CODE SOURCE) */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 border-t border-slate-800/60 pt-4 mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {projet.technos.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 bg-indigo-500/5 text-indigo-300 rounded-lg border border-indigo-500/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {projet.lienGit && (
                    <div className="flex-shrink-0">
                      <a 
                        href={projet.lienGit} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors bg-slate-800/60 hover:bg-slate-800 px-3 py-2 rounded-lg"
                      >
                        <GithubIcon size={14} />
                        Code
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Carrousel 2 : Technologies */}
      <div className="flex overflow-hidden w-full relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-slate-950 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-slate-950 after:to-transparent">
        <motion.div 
          ref={techsRef}
          className="flex gap-4 whitespace-nowrap py-2"
          animate={{ x: techsWidth ? [-techsWidth, 0] : 0 }}
          transition={{
            ease: "linear",
            duration: techsWidth ? techsWidth / 100 : 15,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {dupeTechs.map((tech, index) => (
            <div
              key={index}
              className="inline-block bg-slate-900/40 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-800/60 shadow-md text-white font-semibold text-sm hover:text-indigo-300 hover:border-indigo-500/30 transition-all cursor-default select-none"
            >
              <span className="bg-indigo-500/20 text-indigo-400 rounded-md px-1.5 py-0.5 mr-2 text-xs font-mono">#</span>
              {tech}
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}