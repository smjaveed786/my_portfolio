import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Grid, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const ParticleField = ({ count = 2200 }) => {
  const ref = useRef();
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [new THREE.Color("#00F0FF"), new THREE.Color("#A855F7"), new THREE.Color("#3B82F6")];
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 26;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18;
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, [count]);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.02;
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      state.pointer.y * -0.08,
      0.03
    );
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const Rig = ({ children }) => {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, state.pointer.x * 0.22, 0.04);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, state.pointer.y * -0.12, 0.04);
  });
  return <group ref={ref}>{children}</group>;
};

const Shapes = () => (
  <>
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh position={[3.4, 0.9, -2.2]}>
        <torusKnotGeometry args={[0.85, 0.26, 128, 20]} />
        <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.34} />
      </mesh>
    </Float>
    <Float speed={1.1} rotationIntensity={0.8} floatIntensity={1.8}>
      <mesh position={[-3.8, -0.4, -1.6]}>
        <icosahedronGeometry args={[0.95, 0]} />
        <meshBasicMaterial color="#A855F7" wireframe transparent opacity={0.4} />
      </mesh>
    </Float>
    <Float speed={1.7} rotationIntensity={1} floatIntensity={1.2}>
      <mesh position={[2.6, -1.9, 0.4]}>
        <octahedronGeometry args={[0.55, 0]} />
        <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.5} />
      </mesh>
    </Float>
    <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.9}>
      <mesh position={[-1.4, 1.6, -4.5]}>
        <sphereGeometry args={[1.6, 48, 48]} />
        <MeshDistortMaterial
          color="#0e7490"
          emissive="#7c3aed"
          emissiveIntensity={0.22}
          transparent
          opacity={0.16}
          distort={0.42}
          speed={1.6}
        />
      </mesh>
    </Float>
  </>
);

const HeroScene = ({ particleCount = 2200 }) => (
  <Canvas
    data-testid="hero-3d-canvas"
    dpr={[1, 1.8]}
    camera={{ position: [0, 0.4, 9], fov: 55 }}
    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    style={{ position: "absolute", inset: 0 }}
  >
    <fog attach="fog" args={["#0B0C10", 10, 26]} />
    <ambientLight intensity={0.4} />
    <pointLight position={[5, 4, 4]} intensity={30} color="#00F0FF" />
    <pointLight position={[-6, -3, 2]} intensity={24} color="#A855F7" />
    <Rig>
      <ParticleField count={particleCount} />
      <Shapes />
    </Rig>
    <Grid
      position={[0, -3.4, 0]}
      args={[42, 42]}
      cellSize={0.9}
      cellThickness={0.6}
      cellColor="#0e7490"
      sectionSize={4.5}
      sectionThickness={1}
      sectionColor="#155e75"
      fadeDistance={30}
      fadeStrength={2.2}
      infiniteGrid
    />
  </Canvas>
);

export default HeroScene;
