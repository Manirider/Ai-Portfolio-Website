import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Float, Sphere, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import { Suspense } from 'react'

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10 bg-black overflow-hidden pointer-events-none sm:pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} color="#4f46e5" intensity={2} />
        
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1.2, 64, 64]} position={[2.5, 0, -2]}>
              <MeshDistortMaterial
                color="#3b82f6"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
                metalness={0.8}
              />
            </Sphere>
          </Float>

          <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
            <Sphere args={[0.8, 64, 64]} position={[-2.5, 1, -1]}>
              <MeshDistortMaterial
                color="#8b5cf6"
                attach="material"
                distort={0.5}
                speed={3}
                roughness={0.1}
                metalness={0.9}
              />
            </Sphere>
          </Float>

          <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          <Sparkles count={150} scale={12} size={2} speed={0.4} opacity={0.2} color="#ec4899" />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate 
            autoRotateSpeed={0.5} 
            maxPolarAngle={Math.PI / 2 + 0.1} 
            minPolarAngle={Math.PI / 2 - 0.1} 
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
