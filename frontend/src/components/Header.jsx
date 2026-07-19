import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase } from "lucide-react";

export default function Header() {
  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden text-center">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl backdrop-blur-sm bg-slate-900/40 p-8 rounded-3xl border border-slate-800/60 shadow-2xl shadow-indigo-500/5"
      >
        <motion.span 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 inline-block"
        >
          Disponible pour opportunités 
        </motion.span>

        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            KHADIJA JIAR 
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-6 flex items-center justify-center gap-2">
          <Briefcase className="text-indigo-400" /> Ingénieure Logiciel 
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
          Spécialisée en <span className="text-indigo-400 font-semibold">Génie Logiciel</span>, avec une expertise affirmée en développement Web et gestion de projet Agile. Passionnée par la blockchain et la création d'architectures robustes.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
          <span className="flex items-center gap-1"><MapPin size={16} /> Agadir, Maroc </span>
          <span className="flex items-center gap-1"><Mail size={16} /> khadija.jiar@e-polytechnique.ma </span>
        </div>

        <div className="flex justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 transition-all rounded-xl font-bold text-white shadow-lg shadow-indigo-600/30 transform hover:-translate-y-1"
          >
            Découvrir mes projets
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 transition-all rounded-xl font-bold text-gray-300 border border-slate-700 transform hover:-translate-y-1"
          >
            Me Contacter
          </a>
        </div>
      </motion.div>

      {/* Indicateur de défilement vers le bas */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </header>
  );
}