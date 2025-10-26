import React, { useEffect, useRef } from "react";

import { useAnimations, useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

import skyScene from "@/assets/3D/sky.glb";

type SkyProps = {
  isRotating: boolean;
};

const Sky: React.FC<SkyProps> = ({ isRotating }) => {
  const ref = useRef<Mesh>(null);
  const { scene, animations } = useGLTF(skyScene);
  const { actions } = useAnimations(animations, ref);

  useFrame((_, delta) => {
    if (isRotating) {
      ref.current!.rotation.y += delta;
    }
  });

  return (
    <mesh ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Sky;
