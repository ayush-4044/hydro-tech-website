'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Center, useGLTF } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group } from 'three'

function RotatingModel() {
  const ref = useRef<Group>(null)
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.02
    }
  })
  const { scene } = useGLTF('/qrc-model.glb')
  return (
    <group ref={ref}>
      <Center>
        <primitive object={scene} scale={2.2} />
      </Center>
    </group>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <RotatingModel />
        <Environment preset="city" />
        <OrbitControls enablePan={false} minDistance={4} maxDistance={10} />
      </Suspense>
    </Canvas>
  )
}

useGLTF.preload('/qrc-model.glb')

// 'use client'

// import { Canvas } from '@react-three/fiber'
// import { Environment, Float, ContactShadows } from '@react-three/drei'
// import { Suspense } from 'react'
// import { CouplingModel } from './part-models'

// export default function HeroCanvas() {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 6], fov: 40 }}
//       dpr={[1, 2]}
//       gl={{ antialias: true, alpha: true }}
//       aria-hidden="true"
//     >
//       <Suspense fallback={null}>
//         <ambientLight intensity={0.4} />
//         <spotLight position={[5, 8, 5]} angle={0.3} penumbra={1} intensity={2.5} castShadow />
//         <pointLight position={[-6, -2, -4]} intensity={1.2} color="#e8c33a" />
//         <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
//           <CouplingModel spin />
//         </Float>
//         <ContactShadows position={[0, -2.4, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
//         <Environment preset="warehouse" />
//       </Suspense>
//     </Canvas>
//   )
// }
