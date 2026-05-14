import { useRef, useMemo, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Float, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Word({ children, ...props }: { children: string; position: THREE.Vector3 }) {
  const ref = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (!ref.current) return
    // Always face the camera
    ref.current.quaternion.copy(state.camera.quaternion)
  })

  return (
    <group ref={ref} position={props.position}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Text
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          fontSize={0.4}
          color={hovered ? '#6366f1' : '#94a3b8'}
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGkyMZhrib2Bg-4.woff"
          anchorX="center"
          anchorY="middle"
        >
          {children}
        </Text>
      </Float>
    </group>
  )
}

function Cloud({ radius = 4 }) {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'PyTorch', 
    'Next.js', 'AWS', 'Docker', 'TensorFlow', 'PostgreSQL', 
    'GraphQL', 'Tailwind', 'FastAPI', 'MLOps', 'Rust', 'Go'
  ]
  
  const words = useMemo(() => {
    const temp = []
    const count = skills.length
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      const vector = new THREE.Vector3().setFromSphericalCoords(radius, phi, theta)
      temp.push({ pos: vector, word: skills[i] })
    }
    return temp
  }, [radius])

  return (
    <>
      {words.map((item, index) => (
        <Word key={index} position={item.pos}>
          {item.word}
        </Word>
      ))}
    </>
  )
}

export function TechCloud() {
  return (
    <div className="w-full h-[400px] sm:h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
        <Suspense fallback={null}>
          <Cloud radius={5} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
