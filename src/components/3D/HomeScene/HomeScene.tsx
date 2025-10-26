"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Loader from "@/components/3D/Loader/Loader";
import Island from "@/components/3D/models/Island";
import Sky from "@/components/3D/models/Sky";

// <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center" />

export type Axis = [number, number, number];

const adjustIslandForScreenSize = () => {
  if (typeof window === "undefined") return [];

  let screenScale: Axis | null = null;
  const screenPosition: Axis = [0, -4.5, -43];
  const screenRotation: Axis = [0.1, 4.7, 0];

  if (window.innerWidth < 768) {
    screenScale = [0.9, 0.9, 0.9];
  } else {
    screenScale = [1, 1, 1];
  }

  return [screenScale, screenPosition, screenRotation];
};

export default function HomeScene() {
  const [screenScale, screenPosition, screenRotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            color="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Sky />
          <Island
            scale={screenScale}
            position={screenPosition}
            rotation={screenRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}
