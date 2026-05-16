import { useRef, useState, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform float uHover;
  varying vec2 vUv;
  void main() {
    vec2 uv = vUv;
    float distortion = sin(uv.y * 10.0 + uTime * 2.0) * 0.02 * uHover;
    uv.x += distortion;
    vec4 color = texture2D(uTexture, uv);
    gl_FragColor = color;
  }
`

function ShaderImage({ src, isHovered }: { src: string; isHovered: boolean }) {
  const mesh = useRef<THREE.Mesh>(null)
  const texture = useLoader(THREE.TextureLoader, src)
  
  const uniforms = useMemo(() => ({
    uTexture: { value: texture },
    uTime: { value: 0 },
    uHover: { value: 0 }
  }), [texture])

  useFrame((state) => {
    if (mesh.current) {
      const material = mesh.current.material as THREE.ShaderMaterial
      material.uniforms.uTime.value = state.clock.getElapsedTime()
      material.uniforms.uHover.value = THREE.MathUtils.lerp(
        material.uniforms.uHover.value,
        isHovered ? 1 : 0,
        0.1
      )
    }
  })

  return (
    <mesh ref={mesh} scale={[1, 1, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  )
}

export function LiquidImage({ src, alt }: { src: string; alt: string }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className="w-full h-full relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas 
        camera={{ position: [0, 0, 1.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <ShaderImage src={src} isHovered={isHovered} />
        </Suspense>
      </Canvas>
      
      <span className="sr-only">{alt}</span>
    </div>
  )
}
