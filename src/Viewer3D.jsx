import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import LeftMenu from "./LeftMenu";
import "./Viewer3D.css";

export default function Viewer3D() {
  return (
    <div className="viewer-container">
      <LeftMenu />

      <div className="viewer-3d">
        <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />

          <Model />

          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}


