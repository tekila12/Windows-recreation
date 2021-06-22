import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Box from './Box'


function Fiber() {
  return (
    <Canvas>
        <Box/>   
    </Canvas>
  );
}

export default Fiber