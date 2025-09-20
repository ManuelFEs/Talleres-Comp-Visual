import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Box, OrbitControls } from '@react-three/drei'

function RotatingBox() {
  const meshRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      // Rotación sobre eje Y
      meshRef.current.rotation.y += 0.01
      // Trayectoria circular en XZ
      meshRef.current.position.x = Math.cos(t) * 2
      meshRef.current.position.z = Math.sin(t) * 2
      // Escalado suave
      const scale = 1 + 0.3 * Math.sin(t)
      meshRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <Box ref={meshRef} args={[1, 1, 1]}>
      <meshStandardMaterial attach="material" color="orange" />
    </Box>
  )
}

function RotatingCube() {
  return (
    <Canvas style={{ width: '400px', height: '400px' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RotatingBox /> 
      <OrbitControls />   {/*Orbit controls para mover la cámara al rededor del cubo*/} 
    </Canvas>
  )
}

export default RotatingCube