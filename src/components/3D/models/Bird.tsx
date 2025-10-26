import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

import birdScene from "@/assets/3D/bird.glb";

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  const ref = useRef<Mesh>(null);

  const { actions } = useAnimations(animations, ref);

  useFrame(({ clock, camera }) => {
    const birdRef = ref.current!;

    birdRef.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (birdRef.position.x > camera.position.x + 10) {
      birdRef.rotation.y = Math.PI;
    } else if (birdRef.position.x < camera.position.x - 10) {
      birdRef.rotation.y = 0;
    }

    if (birdRef.rotation.y === 0) {
      birdRef.position.x += 0.01;
      birdRef.position.z -= 0.01;
    } else {
      birdRef.position.x -= 0.01;
      birdRef.position.z += 0.01;
    }
  });

  useEffect(() => {
    actions?.["Take 001"]?.play();
  }, []);

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
