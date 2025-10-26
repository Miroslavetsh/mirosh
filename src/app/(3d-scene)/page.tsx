"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Loader from "@/components/3D/Loader/Loader";
import Island from "@/components/3D/models/Island";

{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        
</div> */
}

export default function Home() {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          <Island />
        </Suspense>
      </Canvas>
    </section>
  );
}
