import React from "react";

import { useGLTF } from "@react-three/drei";
import planeScene from "@/assets/3D/plane.glb";
import { Axis } from "@/lib/3D/types";

type PlaneProps = React.JSX.IntrinsicElements["mesh"] & {
  planeScale?: Axis | null;
  planePosition?: Axis | null;
  isRotating?: boolean;
};

const Plane: React.FC<PlaneProps> = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF(planeScene);

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
