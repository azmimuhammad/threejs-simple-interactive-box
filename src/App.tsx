import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";

const Box = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      const { x, y } = state.pointer;

      meshRef.current.rotation.x +=
        (y * 0.8 - meshRef.current.rotation.x) * 0.1;
      meshRef.current.rotation.y +=
        (x * 0.8 - meshRef.current.rotation.y) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Box />
    </Canvas>
  );
};

export default App;
