import React, { useEffect, useCallback, useState } from "react";
import Head from "next/head";
import { Suspense } from "react";
import { Canvas, useLoader, useFrame, act } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import window from "global";
import { motion } from "framer-motion";
import Button from "./Button";
const delta = 0.017;
let mixer;
let mixer_reverse;
const animate = () => {};
const Model = () => {
  // location of the 3D model
  const model = useLoader(GLTFLoader, "/cube/cube.gltf");

  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene);
    model.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.clampWhenFinished = true;
      action.setLoop(THREE.LoopOnce);
      action.play();
    });
  }

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });
  return <primitive className="p-4" object={model.scene} scale={3} />;
};

export default function Cube() {
  let container;
  useEffect(() => {
    container = document.querySelector(".main_container");
  });
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const window = e.currentTarget;
      mixer?.update(delta);
      if (y > window.scrollY) {
        mixer?.update(-delta);
        console.log("scrolling up");
      } else {
        console.log("scrolling down");
      }
      setY(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", (e) => {
        const window = e.currentTarget;
        // mixer?.update(0);
        mixer?.update(delta);
        if (y > window.scrollY) {
          mixer?.update(-delta);
          console.log("scrolling up");
        } else {
          console.log("scrolling down");
        }
        setY(window.scrollY);
        // mixer?.update(delta);
      });
    };
  });
  return (
    <div className="main_container" style={{ height: "100%", width: "100%" }}>
      <Head>
        <title>Three.js Example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="globe h-screen w-100 z-0 relative" style={{ paddingTop: 0 }}>
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0.5, -3, 12], fov: 80}}
          className="h-100 w-100"
        >
          <ambientLight intensity={0} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[0, 0, 16]}
            castShadow
          />
          <Suspense fallback={null}>
            <Model />
            {/* To add environment effect to the model */}
            <Environment preset="city" />
          </Suspense>
          <OrbitControls enableZoom={false} />
          {/* <OrbitControls enableZoom={false} autoRotate /> */}
        </Canvas>
      </div>
      {/* <div className="text-[#FF595A] flex items-center justify-center ml-8 z-10">
        <div>
          <motion.h1 className="text-6xl font-bold">
            Techfest, IIT Indore
          </motion.h1>
          <h1 className="text-5xl mb-10">2022-23</h1>
          <motion.p className="text-white">
            Sed semper nulla a pellentesque sollicitudin. Proin ac felis at
            lectus condimentum venenatis. Vivamus condimentum a mi a dignissim.
            Suspendisse purus eros, dapibus sed condimentum non, ultricies eu
            risus. Mauris facilisis lectus nec neque tincidunt auctor. Nulla in
            nibh magna. Cras eu dui id lorem porta condimentum. Vestibulum
            ornare metus ac odio efficitur, egestas viverra velit venenatis. Sed
            non ips
          </motion.p>
          <div className="mt-8">
            <Button value="Register" ml="0"></Button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
