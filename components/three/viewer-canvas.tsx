'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { Part, type PartId } from './part-models'

export default function ViewerCanvas({ part }: { part: PartId }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      dpr={[1, 1.5]} // Performance mate pixel ratio cap karyu che
      gl={{ antialias: false, powerPreference: 'high-performance' }} // GPU optimization
    >
      <Suspense fallback={null}>
        {/* Heavy shadows nikaline clean lighting rakhi che */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        
        <Part id={part} spin={true} />
        
        <Environment preset="city" /> {/* warehouse ni jagye city preset (fast load thay) */}
        <OrbitControls
          enablePan={false}
          minDistance={4}
          maxDistance={10}
          autoRotate={false}
        />
      </Suspense>
    </Canvas>
  )
}

// 'use client'

// import { Canvas } from '@react-three/fiber'
// import { Environment, OrbitControls, ContactShadows } from '@react-three/drei'
// import { Suspense } from 'react'
// import { Part, type PartId } from './part-models'

// export default function ViewerCanvas({ part }: { part: PartId }) {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 6.5], fov: 42 }}
//       dpr={[1, 2]}
//       gl={{ antialias: true, alpha: true }}
//     >
//       <Suspense fallback={null}>
//         <ambientLight intensity={0.45} />
//         <spotLight position={[6, 8, 6]} angle={0.3} penumbra={1} intensity={2.6} castShadow />
//         <pointLight position={[-6, -2, -4]} intensity={1} color="#e8c33a" />
//         <Part id={part} spin={false} />
//         <ContactShadows position={[0, -2.6, 0]} opacity={0.45} scale={12} blur={2.6} far={5} />
//         <Environment preset="warehouse" />
//         <OrbitControls
//           enablePan={false}
//           minDistance={4}
//           maxDistance={10}
//           autoRotate
//           autoRotateSpeed={0.8}
//         />
//       </Suspense>
//     </Canvas>
//   )
// }
