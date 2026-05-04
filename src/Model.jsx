import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  // const { scene } = useGLTF("/models/my_new_object.glb");
  const { scene } = useGLTF("/models/engine_bloc_1.glb");

  return <primitive object={scene} scale={1} {...props} />;
}
