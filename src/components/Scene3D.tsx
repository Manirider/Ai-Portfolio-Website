import { useEffect, useState, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Sphere, MeshDistortMaterial, Line } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'


function ParticleField({ count = 800 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null!)
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    return pos
  }, [count])

  const sizes = useMemo(() => {
    const s = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      s[i] = Math.random() * 2 + 0.5
    }
    return s
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#6366f1"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}


function GridFloor() {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (!mesh.current) return
    ;(mesh.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.elapsedTime
  })

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#3b82f6') },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor;
        varying vec2 vUv;
        void main() {
          vec2 grid = abs(fract(vUv * 20.0 - 0.5) - 0.5);
          float line = min(grid.x, grid.y);
          float gridLine = 1.0 - smoothstep(0.0, 0.05, line);
          float fade = smoothstep(0.0, 0.5, vUv.y) * (1.0 - smoothstep(0.5, 1.0, vUv.y));
          float pulse = sin(uTime * 0.5 + vUv.x * 10.0) * 0.3 + 0.7;
          gl_FragColor = vec4(uColor, gridLine * fade * pulse * 0.15);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
  }, [])

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} material={shaderMaterial}>
      <planeGeometry args={[40, 40, 1, 1]} />
    </mesh>
  )
}


function NeuralNetwork() {
  const group = useRef<THREE.Group>(null!)
  const nodes = useMemo(() => {
    const n: THREE.Vector3[] = []
    for (let i = 0; i < 20; i++) {
      n.push(new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4 - 2,
      ))
    }
    return n
  }, [])

  const connections = useMemo(() => {
    const lines: [THREE.Vector3, THREE.Vector3][] = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 4) {
          lines.push([nodes[i], nodes[j]])
        }
      }
    }
    return lines
  }, [nodes])

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.15
  })

  return (
    <group ref={group}>
      {connections.map((conn, i) => (
        <Line
          key={i}
          points={[conn[0].toArray(), conn[1].toArray()]}
          color="#6366f1"
          transparent
          opacity={0.08}
          lineWidth={1}
        />
      ))}
      {nodes.map((node, i) => (
        <mesh key={`node-${i}`} position={node}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  )
}

export default function Scene3D() {
  const [isMobile, setIsMobile] = useState(false)
  const [hasWebGL, setHasWebGL] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) setHasWebGL(false)
    } catch (e) {
      setHasWebGL(false)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!hasWebGL) {
    return <div className="absolute inset-0 -z-10 bg-black" />
  }

  return (
    <div className="absolute inset-0 -z-10 bg-black overflow-hidden pointer-events-none sm:pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, isMobile ? 1 : 1.5]} gl={{ antialias: !isMobile, alpha: true }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#4f46e5" intensity={2} />
        <pointLight position={[5, 5, 5]} color="#ec4899" intensity={0.5} />
        
        <Suspense fallback={null}>
          
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1.2, isMobile ? 32 : 64, isMobile ? 32 : 64]} position={isMobile ? [0, 1, -2] : [2.5, 0, -2]}>
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

          
          {!isMobile && (
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
          )}

          
          {!isMobile && (
            <Float speed={3} rotationIntensity={1.5} floatIntensity={1}>
              <Sphere args={[0.4, 32, 32]} position={[1, 2.5, -3]}>
                <MeshDistortMaterial
                  color="#ec4899"
                  attach="material"
                  distort={0.6}
                  speed={4}
                  roughness={0.3}
                  metalness={0.7}
                />
              </Sphere>
            </Float>
          )}

          
          <ParticleField count={isMobile ? 300 : 800} />

          
          {!isMobile && <GridFloor />}

          
          {!isMobile && <NeuralNetwork />}

          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate 
            autoRotateSpeed={0.3} 
            maxPolarAngle={Math.PI / 2 + 0.1} 
            minPolarAngle={Math.PI / 2 - 0.1} 
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
