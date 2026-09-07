'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const COUNT = 1500;

function ParticleField() {
  const points = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 36;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (!points.current) return;
    points.current.rotation.y += delta * 0.03;
    points.current.rotation.x = THREE.MathUtils.lerp(
      points.current.rotation.x,
      state.pointer.y * 0.08,
      0.02
    );
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={0.038}
        color="#22d3ee"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Core() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.08;
    group.current.rotation.x += delta * 0.03;
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      state.pointer.x * 0.35,
      0.03
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      state.pointer.y * 0.25,
      0.03
    );
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[2.4, 1]} />
        <meshBasicMaterial color="#0e5f75" wireframe transparent opacity={0.28} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshBasicMaterial color="#34d399" wireframe transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

export default function NeuralField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      style={{ position: 'absolute', inset: 0 }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.5} />
      <Core />
      <ParticleField />
    </Canvas>
  );
}