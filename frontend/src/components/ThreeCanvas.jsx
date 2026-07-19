import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";

function FloatingShape() {
  const meshRef = useRef();

  // Fait tourner la forme 3D en continu
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.3;
    meshRef.current.rotation.y = t * 0.5;
    meshRef.current.position.y = Math.sin(t) * 0.2; // Effet de flottaison
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[2, 1]} />
      <meshStandardMaterial 
        color="#6366f1" 
        wireframe 
        emissive="#4f46e5"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function ThreeCanvas() {
  return (
    <div className="absolute inset-0 -z-10 bg-slate-950">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <directionalLight position={[-5, 5, 5]} intensity={1} />
        
        <FloatingShape />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={2} />
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}