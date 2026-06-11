import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Layers, KanbanSquare, Calendar } from "lucide-react";

export default function ProjectCard() {
  // 1. Vos vrais projets de développement informatique (issus du CV)
  const projetsDeveloppes = [
    {
      title: "Plateforme Billetterie NFT & Blockchain",
      company: "Magent2Planet",
      date: "03/2025 - 09/2025",
      icon: <ShieldCheck className="text-emerald-400" size={28} />,
      desc: "Développement d'une plateforme de billetterie sportive décentralisée. Implémentation de Smart Contracts en Solidity et intégration de MetaMask pour sécuriser et tracer la réservation de billets NFT.",
      techs: ["React.js", "Solidity", "Blockchain", "MongoDB"]
    },
    {
      title: "Système de Gestion de Stock Temps Réel",
      company: "Phpro",
      date: "05/2024 - 10/2024",
      icon: <Layers className="text-blue-400" size={28} />,
      desc: "Conception et déploiement d'une application moderne de suivi de stocks et gestion des ressources avec synchronisation des bases de données en temps réel.",
      techs: ["Next.js", "Firebase", "Firestore", "Tailwind"]
    },
    {
      title: "Dashboard MERN & Suivi QR Code",
      company: "IronDev",
      date: "05/2023 - 09/2023",
      icon: <Cpu className="text-purple-400" size={28} />,
      desc: "Création d'un panneau d'administration complet (Stack MERN) intégrant un générateur et scanneur de QR Codes dynamiques pour l'identification de produits.",
      techs: ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      title: "Gestion de Cycles Agiles (AMOA)",
      company: "E-AMBITION RABAT",
      date: "08/2025 - 12/2025",
      icon: <KanbanSquare className="text-pink-400" size={28} />,
      desc: "Pilotage de sprints applicatifs (Sprint Planning, Dailies, Rétrospectives). Rédaction des Spécifications Fonctionnelles Globales (SFG) et suivi des KPIs d'avancement.",
      techs: ["Agile", "Scrum", "UML", "Jira"]
    }
  ];

  // 2. Toutes tes compétences et technologies globales mentionnées sur ton CV 
  const technologies = [
    "React", "Next.js", "HTML", "CSS", "JavaScript", "Node.js", 
    "UML", "Gestion de projet", "SQL", "Git", "Python", "C", 
    "Solidity", "Blockchain", "C#"
  ];

  // Duplication des listes pour créer l'effet infini parfait sans coupure visuelle
  const dupeProjets = [...projetsDeveloppes, ...projetsDeveloppes];
  const dupeTechs = [...technologies, ...technologies, ...technologies];

  return (
    <section id="projects" className="py-20 overflow-hidden w-full bg-slate-950/20">
      
      {/* ---------------- EN-TÊTE DE LA SECTION ---------------- */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">Portfolio & Stack</span>
        <h2 className="text-4xl font-black text-white mt-1">
          Mes Réalisations & <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Compétences Tech</span>
        </h2>
      </div>

      {/* ---------------- CARROUSEL 1 : LES PROJETS AUTODÉFILANTS ---------------- */}
      <div className="flex overflow-hidden w-full relative mb-14 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-slate-950 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-slate-950 after:to-transparent">
        <motion.div 
          className="flex gap-6 whitespace-nowrap px-4"
          animate={{ x: [0, -1800] }}
          transition={{
            ease: "linear",
            duration: 30, // Vitesse de croisière du défilement des projets
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }} // Met en pause au survol de la souris
        >
          {dupeProjets.map((projet, index) => (
            <div
              key={index}
              className="inline-block bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-slate-800/80 shadow-2xl hover:border-indigo-500/40 transition-colors w-[350px] md:w-[420px] whitespace-normal vertical-align-top flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800">
                    {projet.icon}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-gray-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                    <Calendar size={12} /> {projet.date}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug">{projet.title}</h3>
                  <p className="text-indigo-400 text-xs font-semibold mt-0.5">{projet.company}</p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed min-h-[80px]">
                  {projet.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-950 mt-4">
                {projet.techs.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 bg-indigo-500/5 text-indigo-300 rounded-lg border border-indigo-500/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ---------------- CARROUSEL 2 : LES TECHNOLOGIES AUTODÉFILANTES ---------------- */}
      <div className="flex overflow-hidden w-full relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-slate-950 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-slate-950 after:to-transparent">
        <motion.div 
          className="flex gap-4 whitespace-nowrap py-2"
          // Déplacement de gauche à droite (valeurs inverses [ -1000, 0 ]) pour un effet de parallaxe croisé
          animate={{ x: [-1200, 0] }}
          transition={{
            ease: "linear",
            duration: 20, // Un peu plus rapide pour les outils
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
