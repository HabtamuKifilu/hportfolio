'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Stars } from '@react-three/drei'
import { useRef } from 'react'

function CrystalOrb() {
  const ref = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.sin(t * 0.4) * 0.1
    ref.current.rotation.y += 0.005
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref}>
      {/*  <sphereGeometry args={[2.5, 64, 64]} /> */}
        <meshPhysicalMaterial
          color="#2f2b10"
          roughness={0}
          metalness={1}
          transmission={0.98}
          thickness={1.5}
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0}
          ior={1.5}
        />
      </mesh>
    </Float>
  )
}

export default function AnimatedSphere() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        {/* Lights */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#a78bfa" />
        <pointLight position={[0, 0, 0]} intensity={1} color="#60a5fa" />

        {/* Stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

        {/* Main orb */}
        <CrystalOrb />

        {/* Orbit controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
