import React, { useState, useRef, Suspense } from "react";
import { readCoords } from "../utils/api";
import {
  Canvas,
  useFrame,
  extend,
  useThree,
  useLoader,
} from "@react-three/fiber";
import {
  useTexture,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
// import {} from "three/examples/jsm/controls/OrbitControls";

const Viewport = () => {
  const objectRefs = useRef([]);
  objectRefs.current = [];

  const addToRefs = (e) => {
    if (e && !objectRefs.current.includes(e)) objectRefs.current.push(e);
  };

  const angleToRadians = (angleInDegrees) => (Math.PI / 180) * angleInDegrees;
  //   const matcapTexture = useTexture("textures/matcaps/2.png");

  const Box = () => {
    // This reference will give us direct access to the mesh
    const mesh = useRef();
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
      objectRefs.current[0].rotation.x += 0.01;
      objectRefs.current[0].rotation.y += 0.01;
    });

    console.log(objectRefs.current);

    return (
      <>
        <mesh
          ref={addToRefs}
          onClick={(e) => setActive(!active)}
          onPointerOver={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
        >
          <boxGeometry args={[0.25, 0.25, 5]} />
          <meshStandardMaterial
            attach="material"
            color={hovered ? "#8888ff" : "#0088ff"}
          />
        </mesh>
        <mesh
          ref={addToRefs}
          scale={active ? 2 : 1}
          onClick={(e) => setActive(!active)}
          onPointerOver={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
        >
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshStandardMaterial
            attach="material"
            color={hovered ? "#0070ff" : "#0055ff"}
            roughness={0.6}
            metalness={1}
            // map={matcapTexture}
          />
        </mesh>
        <mesh
          ref={addToRefs}
          scale={active ? 2 : 1}
          onClick={(e) => setActive(!active)}
          onPointerOver={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
          rotation={[angleToRadians(-90), 0, 0]}
          position={[0, -2, 0]}
        >
          <planeGeometry args={[20, 20, 2, 2]} />
          <meshStandardMaterial
            attach="material"
            color={"#cccccc"}
            roughness={0.6}
            metalness={0}
            // map={matcapTexture}
          />
        </mesh>
      </>
    );
  };

  return (
    <Canvas>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 1, 15]} />
        <OrbitControls />
        <ambientLight />
        <pointLight intensity={2} castShadow={true} position={[-25, 25, 20]} />
        <spotLight
          castShadow={true}
          intensity={0.25}
          position={[250, -350, -100]}
        />

        <Box />
      </Suspense>
    </Canvas>
  );
};

export default Viewport;
