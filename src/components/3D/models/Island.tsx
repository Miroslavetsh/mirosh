import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import { Group, Mesh, Material } from "three";

import islandScene from "@/assets/3D/island.glb";

interface IslandNodes {
  polySurface944_tree_body_0: Mesh;
  polySurface945_tree1_0: Mesh;
  polySurface946_tree2_0: Mesh;
  polySurface947_tree1_0: Mesh;
  polySurface948_tree_body_0: Mesh;
  polySurface949_tree_body_0: Mesh;
  pCube11_rocks1_0: Mesh;
}

interface IslandMaterials {
  PaletteMaterial001: Material;
}

type IslandGLTF = {
  nodes: IslandNodes;
  materials: IslandMaterials;
};

const Island = (props: React.JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(islandScene) as unknown as IslandGLTF;
  const islandRef = useRef<Group>(null);

  return (
    <a.group {...props} ref={islandRef}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
};

export default Island;
