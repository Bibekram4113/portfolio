import React, { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function NeuralNetwork() {
  const groupRef = useRef(null)
  const pointsRef = useRef(null)
  const linesRef = useRef(null)

  useEffect(() => {
    if (!groupRef.current) return

    // Create nodes
    const nodeCount = 400
    const nodePositions = new Float32Array(nodeCount * 3)
    const nodes = []

    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI * 2
      const r = 18

      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)

      nodePositions[i * 3] = x
      nodePositions[i * 3 + 1] = y
      nodePositions[i * 3 + 2] = z

      nodes.push({ x, y, z, index: i })
    }

    // Create node mesh
    const nodeGeometry = new THREE.BufferGeometry()
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3))

    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x00E5FF,
      size: 0.1,
      emissive: 0x00E5FF,
      emissiveIntensity: 0.3,
    })

    const points = new THREE.Points(nodeGeometry, nodeMaterial)
    pointsRef.current = points
    groupRef.current.add(points)

    // Create connections
    const linePositions = []
    const lines = []
    const connectionDist = 2.5

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const node1 = nodes[i]
        const node2 = nodes[j]

        const dist = Math.sqrt(
          Math.pow(node2.x - node1.x, 2) +
          Math.pow(node2.y - node1.y, 2) +
          Math.pow(node2.z - node1.z, 2)
        )

        if (dist < connectionDist) {
          linePositions.push(node1.x, node1.y, node1.z)
          linePositions.push(node2.x, node2.y, node2.z)
          lines.push({ i, j, dist })
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3))

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x9B59B6,
      opacity: 0.15,
      transparent: true,
    })

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial)
    linesRef.current = lineSegments
    groupRef.current.add(lineSegments)

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    groupRef.current.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x00E5FF, 1.2)
    pointLight1.position.set(5, 5, 5)
    groupRef.current.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x9B59B6, 0.8)
    pointLight2.position.set(-5, -5, 5)
    groupRef.current.add(pointLight2)
  }, [])

  useFrame(({ mouse, clock }) => {
    if (groupRef.current) {
      // Rotate
      groupRef.current.rotation.y += 0.0008

      // Pulse nodes
      const time = clock.getElapsedTime()
      if (pointsRef.current) {
        pointsRef.current.material.emissiveIntensity = 0.3 + Math.sin(time) * 0.15
      }
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
    </group>
  )
}
