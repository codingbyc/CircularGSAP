import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
// import { texture } from 'three/webgpu';
import Cyl from "./cyl";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

const App = () => {
  return (
    <>
    <Canvas flat camera={{ fov: 35 }}>
      {/* <OrbitControls /> */}
      <ambientLight />
      <Cyl />
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={7.0} // The bloom intensity.
          luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
        />
      </EffectComposer>
      </Canvas>
      <div className="w-full bg-black py-32">
        <h1 className="text-white text-center">Welcome to My Portfolio.</h1>
      </div>  
      </>
  );
};

export default App;
