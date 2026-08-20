import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Icône GitHub en SVG pour éviter les conflits d'import
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
  const [projetsDeveloppes, setProjetsDeveloppes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
    fetch(`${apiUrl}/api/projets`)
      .then(response => response.json())
      .then(data => {
        setProjetsDeveloppes(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Impossible de charger les projets.');
        setLoading(false);
      });
  }, []);

  const technologies = [
    "React", "Next.js", "HTML", "CSS", "JavaScript", "Node.js", 
    "UML", "Gestion de projet", "SQL", "Git", "Python", "C", 
    "Solidity", "Blockchain", "C#"
  ];

  // Duplication des listes pour créer l'effet infini parfait sans coupure visuelle
  const dupeProjets = projetsDeveloppes.length > 0 ? [...projetsDeveloppes, ...projetsDeveloppes] : [];
  const dupeTechs = [...technologies, ...technologies, ...technologies];

  // --- Calcul dynamique des largeurs pour les carrousels ---
  const projectsRef = useRef(null);
  const techsRef = useRef(null);
  const [projectsWidth, setProjectsWidth] = useState(0);
  const [techsWidth, setTechsWidth] = useState(0);

  useEffect(() => {
    if (projectsRef.current && projetsDeveloppes.length > 0) {
      const originalProjects = projectsRef.current.children;
      const totalWidth = Array.from(originalProjects)
        .slice(0, projetsDeveloppes.length)
        .reduce((acc, el) => acc + el.offsetWidth + 24, 0); // 24 = gap-6
      setProjectsWidth(totalWidth);
    }
    if (techsRef.current) {
      const originalTechs = techsRef.current.children;
      const totalWidth = Array.from(originalTechs)
        .slice(0, technologies.length)
        .reduce((acc, el) => acc + el.offsetWidth + 16, 0); // 16 = gap-4
      setTechsWidth(totalWidth);
    }
  }, [projetsDeveloppes.length, technologies.length]);

  if (loading) {
    return <section id="projects" className="py-20 text-center text-white">Chargement des projets...</section>;
  }

  if (error) {
    return <section id="projects" className="py-20 text-center text-red-500">{error}</section>;
  }

  return (
    <section id="projects" className="py-20 overflow-hidden w-full bg-slate-950/20">
      
      {/* ---------------- EN-TÊTE DE LA SECTION ---------------- */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">Portfolio & Stack</span>
        <h2 className="text-4xl font-black text-white mt-1">
          Mes Réalisations & <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Compétences Tech</span>
        </h2>
      </div>

      {/* ---------------- CARROUSEL 1 : PROJETS ---------------- */}
      <div className="flex overflow-hidden w-full relative mb-14 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-slate-950 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-slate-950 after:to-transparent">
        <motion.div 
          ref={projectsRef}
          className="flex gap-6 whitespace-nowrap px-4"
          animate={{ x: projectsWidth ? [0, -projectsWidth] : 0 }}
          transition={{
            ease: "linear",
            duration: projectsWidth ? projectsWidth / 100 : 20,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {dupeProjets.map((projet, index) => (
            <div 
              key={index}
              className="group relative inline-block bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-slate-800/80 shadow-2xl hover:border-indigo-500/40 transition-colors w-[350px] md:w-[420px] whitespace-normal flex flex-col justify-between"
            >
              {/* LIEN PRINCIPAL (IMAGE, TITRE, DESCRIPTION) */}
              <a 
                href={projet.lienDemo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block space-y-4 hover:opacity-95 transition-opacity"
              >
                <div className="aspect-[16/10] w-full bg-slate-950 rounded-2xl overflow-hidden mb-4 border border-slate-800">
                  <img 
                    src={projet.image} 
                    alt={projet.nom} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug flex items-center gap-2">
                    {projet.nom}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400"/>
                  </h3>
                  <p className="text-indigo-400 text-xs font-semibold mt-0.5">{projet.company || 'Projet Personnel'}</p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed min-h-[60px]">
                  {projet.description}
                </p>
              </a>

              {/* PIED DE CARTE (TECHNOS ET LIEN GITHUB SÉPARÉS) */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 border-t border-slate-800/50 pt-4 mt-4">
                <div className="flex flex-wrap gap-1.5">
                  {projet.technos && projet.technos.map((tech, idx) => (
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
                      className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors bg-slate-800/50 hover:bg-slate-800 px-3 py-2 rounded-lg"
                    >
                      <GithubIcon size={14} />
                      Code Source
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ---------------- CARROUSEL 2 : TECHNOLOGIES ---------------- */}
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