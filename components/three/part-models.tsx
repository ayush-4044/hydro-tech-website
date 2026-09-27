'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Center } from '@react-three/drei'
import type { Group } from 'three'

// Speed ekdam vadhari didhi che (Direct fast rotation)
function useSpin() {
  const ref = useRef<Group>(null)
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.013 // Aa number jetlo moto hase, etlu fast model farse
    }
  })
  return ref
}

/* 1. Standard Quick Release Coupling */
export function CouplingModel({ spin = true }: { spin?: boolean }) {
  const ref = useSpin()
  const { scene } = useGLTF('/qrc-model.glb')
  
  return (
    <group ref={ref}>
      <Center>
        <primitive object={scene} scale={2} />
      </Center>
    </group>
  )
}

/* 2. Tractor Specific QRC (Eicher Model) */
export function ShaftModel({ spin = true }: { spin?: boolean }) {
  const ref = useSpin()
  const { scene } = useGLTF('/eicher_model.glb')
  
  return (
    <group ref={ref}>
      <Center>
        <primitive object={scene} scale={2} />
      </Center>
    </group>
  )
}

/* 3. Custom Fittings & Adapters */
export function ValveModel({ spin = true }: { spin?: boolean }) {
  const ref = useSpin()
  const { scene } = useGLTF('/qrc-model.glb')
  
  return (
    <group ref={ref}>
      <Center>
        <primitive object={scene} scale={2} />
      </Center>
    </group>
  )
}

export type PartId = 'coupling' | 'shaft' | 'valve'

export function Part({ id, spin }: { id: PartId; spin?: boolean }) {
  if (id === 'shaft') return <ShaftModel spin={spin} />
  if (id === 'valve') return <ValveModel spin={spin} />
  return <CouplingModel spin={spin} />
}

useGLTF.preload('/qrc-model.glb')
useGLTF.preload('/eicher_model.glb')
// 'use client'

// import { useRef } from 'react'
// import { useFrame } from '@react-three/fiber'
// import type { Group } from 'three'

// const SILVER = '#c8ccd2'
// const DARK_STEEL = '#6b7078'
// const YELLOW = '#e8c33a'

// function useSpin(speed = 0.35) {
//   const ref = useRef<Group>(null)
//   useFrame((_, delta) => {
//     if (ref.current) ref.current.rotation.y += delta * speed
//   })
//   return ref
// }

// /* Hydraulic quick-connect coupling */
// export function CouplingModel({ spin = true }: { spin?: boolean }) {
//   const ref = useSpin(spin ? 0.4 : 0)
//   return (
//     <group ref={ref} rotation={[0.35, 0, 0.15]}>
//       {/* main body */}
//       <mesh castShadow>
//         <cylinderGeometry args={[0.9, 0.9, 2, 48]} />
//         <meshStandardMaterial color={SILVER} metalness={1} roughness={0.28} />
//       </mesh>
//       {/* hex collar */}
//       <mesh position={[0, 0.4, 0]}>
//         <cylinderGeometry args={[1.15, 1.15, 0.7, 6]} />
//         <meshStandardMaterial color={DARK_STEEL} metalness={0.95} roughness={0.35} />
//       </mesh>
//       {/* yellow indicator ring */}
//       <mesh position={[0, -0.2, 0]}>
//         <torusGeometry args={[0.92, 0.12, 24, 64]} />
//         <meshStandardMaterial color={YELLOW} metalness={0.6} roughness={0.3} emissive={YELLOW} emissiveIntensity={0.12} />
//       </mesh>
//       {/* connection nipple */}
//       <mesh position={[0, 1.25, 0]}>
//         <cylinderGeometry args={[0.5, 0.65, 0.7, 48]} />
//         <meshStandardMaterial color={SILVER} metalness={1} roughness={0.22} />
//       </mesh>
//       {/* bore */}
//       <mesh position={[0, 1.35, 0]}>
//         <cylinderGeometry args={[0.32, 0.32, 0.8, 48]} />
//         <meshStandardMaterial color="#111316" metalness={0.5} roughness={0.6} />
//       </mesh>
//       {/* base thread */}
//       <mesh position={[0, -1.2, 0]}>
//         <cylinderGeometry args={[0.7, 0.7, 0.6, 48]} />
//         <meshStandardMaterial color={DARK_STEEL} metalness={0.95} roughness={0.4} />
//       </mesh>
//     </group>
//   )
// }

// /* Tractor PTO drive shaft with universal joint */
// export function ShaftModel({ spin = true }: { spin?: boolean }) {
//   const ref = useSpin(spin ? 0.4 : 0)
//   return (
//     <group ref={ref} rotation={[0.2, 0, Math.PI / 2.4]}>
//       <mesh>
//         <cylinderGeometry args={[0.42, 0.42, 3, 48]} />
//         <meshStandardMaterial color={SILVER} metalness={1} roughness={0.25} />
//       </mesh>
//       {/* splines near top */}
//       <mesh position={[0, 1.6, 0]}>
//         <cylinderGeometry args={[0.5, 0.5, 0.7, 24]} />
//         <meshStandardMaterial color={DARK_STEEL} metalness={0.95} roughness={0.45} />
//       </mesh>
//       {/* yoke */}
//       <mesh position={[0, -1.7, 0]}>
//         <boxGeometry args={[0.9, 0.6, 0.5]} />
//         <meshStandardMaterial color={DARK_STEEL} metalness={0.9} roughness={0.4} />
//       </mesh>
//       {/* cross joint */}
//       <mesh position={[0, -1.7, 0]} rotation={[0, 0, Math.PI / 2]}>
//         <cylinderGeometry args={[0.16, 0.16, 1.1, 24]} />
//         <meshStandardMaterial color={YELLOW} metalness={0.6} roughness={0.3} />
//       </mesh>
//     </group>
//   )
// }

// /* Hydraulic directional control valve block */
// export function ValveModel({ spin = true }: { spin?: boolean }) {
//   const ref = useSpin(spin ? 0.4 : 0)
//   return (
//     <group ref={ref} rotation={[0.3, 0.4, 0]}>
//       {/* valve block */}
//       <mesh>
//         <boxGeometry args={[1.6, 1.4, 1.2]} />
//         <meshStandardMaterial color={SILVER} metalness={0.9} roughness={0.35} />
//       </mesh>
//       {/* ports */}
//       {[-0.5, 0, 0.5].map((x) => (
//         <mesh key={x} position={[x, -0.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
//           <cylinderGeometry args={[0.18, 0.18, 0.5, 32]} />
//           <meshStandardMaterial color={DARK_STEEL} metalness={0.95} roughness={0.4} />
//         </mesh>
//       ))}
//       {/* lever base */}
//       <mesh position={[0, 0.8, 0]}>
//         <cylinderGeometry args={[0.28, 0.28, 0.3, 32]} />
//         <meshStandardMaterial color={DARK_STEEL} metalness={0.95} roughness={0.4} />
//       </mesh>
//       {/* yellow lever */}
//       <mesh position={[0.25, 1.35, 0]} rotation={[0, 0, -0.5]}>
//         <cylinderGeometry args={[0.07, 0.07, 1.2, 24]} />
//         <meshStandardMaterial color={YELLOW} metalness={0.5} roughness={0.3} emissive={YELLOW} emissiveIntensity={0.1} />
//       </mesh>
//       <mesh position={[0.55, 1.85, 0]}>
//         <sphereGeometry args={[0.16, 24, 24]} />
//         <meshStandardMaterial color={YELLOW} metalness={0.5} roughness={0.3} />
//       </mesh>
//     </group>
//   )
// }

// export type PartId = 'coupling' | 'shaft' | 'valve'

// export function Part({ id, spin }: { id: PartId; spin?: boolean }) {
//   if (id === 'shaft') return <ShaftModel spin={spin} />
//   if (id === 'valve') return <ValveModel spin={spin} />
//   return <CouplingModel spin={spin} />
// }
