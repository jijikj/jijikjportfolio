import ThreeCanvas from "./components/ThreeCanvas";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative text-white min-h-screen selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* 1. Fond d'écran Canvas 3D Fixe */}
      <ThreeCanvas />

      {/* 2. Contenu Défilant */}
      <div className="relative z-10 snap-y">
        <Header />
        <ProjectCard />
        <Contact />
      </div>
    </div>
  );
}

export default App;