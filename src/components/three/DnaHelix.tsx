'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TURNS = 2.6;
const STEPS = 56;
const RADIUS = 1.15;
const HEIGHT = 7;

type V3 = [number, number, number];

function buildHelix() {
  const strandA: V3[] = [];
  const strandB: V3[] = [];
  const rungs: { mid: V3; quat: THREE.Quaternion; len: number }[] = [];

  const up = new THREE.Vector3(0, 1, 0);

  for (let i = 0; i <= STEPS; i += 1) {
    const t = i / STEPS;
    const angle = t * Math.PI * 2 * TURNS;
    const y = (t - 0.5) * HEIGHT;

    const a: V3 = [Math.cos(angle) * RADIUS, y, Math.sin(angle) * RADIUS];
    const b: V3 = [
      Math.cos(angle + Math.PI) * RADIUS,
      y,
      Math.sin(angle + Math.PI) * RADIUS,
    ];
    strandA.push(a);
    strandB.push(b);

    // rung every 3rd step
    if (i % 3 === 0 && i < STEPS) {
      const va = new THREE.Vector3(...a);
      const vb = new THREE.Vector3(...b);
      const dir = vb.clone().sub(va);
      const len = dir.length();
      const midVec = va.clone().add(vb).multiplyScalar(0.5);
      const quat = new THREE.Quaternion().setFromUnitVectors(
        up,
        dir.clone().normalize()
      );
      rungs.push({
        mid: [midVec.x, midVec.y, midVec.z],
        quat,
        len,
      });
    }
  }
  return { strandA, strandB, rungs };
}

function Helix() {
  const group = useRef<THREE.Group>(null);
  const { strandA, strandB, rungs } = useMemo(buildHelix, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.22;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -0.12 + state.pointer.y * 0.06,
      0.03
    );
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      state.pointer.x * 0.25,
      0.03
    );
  });

  return (
    <group ref={group}>
      {strandA.map((p, i) => (
        <mesh key={`a-${i}`} position={p}>
          <sphereGeometry args={[0.085, 14, 14]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={0.55}
            roughness={0.3}
          />
        </mesh>
      ))}
      {strandB.map((p, i) => (
        <mesh key={`b-${i}`} position={p}>
          <sphereGeometry args={[0.085, 14, 14]} />
          <meshStandardMaterial
            color="#34d399"
            emissive="#34d399"
            emissiveIntensity={0.55}
            roughness={0.3}
          />
        </mesh>
      ))}
      {rungs.map((r, i) => (
        <mesh key={`r-${i}`} position={r.mid} quaternion={r.quat}>
          <cylinderGeometry args={[0.02, 0.02, r.len, 8]} />
          <meshStandardMaterial
            color="#155e75"
            emissive="#0e7490"
            emissiveIntensity={0.25}
            transparent
            opacity={0.75}
            roughness={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

/**
 * Ambient 3D DNA double-helix. Rendering pauses when `active` is false
 * (e.g. section scrolled out of view) to keep the page fast.
 */
export default function DnaHelix({ active = true }: { active?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.4], fov: 50 }}
      dpr={[1, 1.35]}
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      frameloop={active ? 'always' : 'never'}
      style={{ position: 'absolute', inset: 0 }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 3, 5]} intensity={1.1} color="#22d3ee" />
      <pointLight position={[-4, -2, 3]} intensity={0.7} color="#34d399" />
      <Helix />
    </Canvas>
  );
}
