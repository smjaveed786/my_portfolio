import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { skills } from "../../data/portfolio";

const fibonacciSphere = (n, radius) => {
  const pts = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    pts.push([Math.cos(theta) * r * radius, y * radius * 0.62, Math.sin(theta) * r * radius]);
  }
  return pts;
};

const SkillNode = ({ skill, position, hovered, setHovered }) => {
  const ref = useRef();
  const active = hovered === skill.name;
  useFrame((_, delta) => {
    const target = active ? 1.9 : 1;
    ref.current.scale.x = THREE.MathUtils.damp(ref.current.scale.x, target, 8, delta);
    ref.current.scale.y = ref.current.scale.z = ref.current.scale.x;
  });
  return (
    <group position={position}>
      <mesh
        ref={ref}
        data-testid={`skill-node-${skill.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(skill.name);
        }}
        onPointerOut={() => setHovered(null)}
      >
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={active ? 2.4 : 0.9}
          roughness={0.25}
        />
      </mesh>
      <Html center distanceFactor={11} className="pointer-events-none select-none">
        <div
          className={`whitespace-nowrap font-mono text-[10px] tracking-widest transition-opacity duration-300 ${
            active ? "text-cyan-300 opacity-100" : "text-slate-400/70 opacity-70"
          }`}
          style={{ transform: "translateY(26px)" }}
        >
          {skill.name}
        </div>
      </Html>
    </group>
  );
};

const Universe = ({ setHoveredSkill }) => {
  const group = useRef();
  const [hovered, setHovered] = useState(null);
  const speed = useRef(0.16);
  const positions = useMemo(() => fibonacciSphere(skills.length, 3.3), []);

  useFrame((_, delta) => {
    const target = hovered ? 0 : 0.16;
    speed.current = THREE.MathUtils.damp(speed.current, target, 5, delta);
    group.current.rotation.y += delta * speed.current;
  });

  const handleHover = (name) => {
    setHovered(name);
    setHoveredSkill(name ? skills.find((s) => s.name === name) : null);
  };

  return (
    <>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.6}>
        <mesh>
          <sphereGeometry args={[1.05, 48, 48]} />
          <MeshDistortMaterial
            color="#155e75"
            emissive="#00F0FF"
            emissiveIntensity={0.5}
            distort={0.32}
            speed={2}
            roughness={0.2}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[1.22, 24, 24]} />
          <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.12} />
        </mesh>
      </Float>
      <Html center distanceFactor={10} className="pointer-events-none select-none">
        <div className="font-display text-xl font-bold tracking-[0.3em] text-slate-50 glow-text">
          JAVEED
        </div>
      </Html>
      <mesh rotation={[Math.PI / 2.15, 0, 0]}>
        <torusGeometry args={[3.3, 0.006, 8, 128]} />
        <meshBasicMaterial color="#00F0FF" transparent opacity={0.22} />
      </mesh>
      <mesh rotation={[Math.PI / 1.7, 0.5, 0]}>
        <torusGeometry args={[3.55, 0.006, 8, 128]} />
        <meshBasicMaterial color="#A855F7" transparent opacity={0.18} />
      </mesh>
      <group ref={group}>
        {skills.map((s, i) => (
          <SkillNode key={s.name} skill={s} position={positions[i]} hovered={hovered} setHovered={handleHover} />
        ))}
      </group>
      <pointLight position={[0, 0, 0]} intensity={26} color="#00F0FF" distance={9} />
    </>
  );
};

const SkillsScene = ({ setHoveredSkill }) => (
  <Canvas
    data-testid="skills-3d-canvas"
    dpr={[1, 1.6]}
    camera={{ position: [0, 0.6, 8.6], fov: 50 }}
    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    style={{ position: "absolute", inset: 0 }}
  >
    <ambientLight intensity={0.5} />
    <pointLight position={[6, 5, 5]} intensity={18} color="#A855F7" />
    <Universe setHoveredSkill={setHoveredSkill} />
  </Canvas>
);

export default SkillsScene;
