import * as THREE from "three";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Box = (props: ThreeElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta;
    mesh.current.rotation.y +=delta;
});
  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

export default Box;
