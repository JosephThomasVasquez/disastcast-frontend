import React, { useState, useRef } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Viewport = () => {
  const CameraControls = () => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls component.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
    const {
      camera,
      gl: { domElement },
    } = useThree();
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();
    useFrame((state) => controls.current.update());
    return <orbitControls ref={controls} args={[camera, domElement]} />;
  };

  const Box = () => {
    // This reference will give us direct access to the mesh
    const mesh = useRef();
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    });

    return (
      <mesh
        ref={mesh}
        scale={active ? 2 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 2, 3]} />
        <meshLambertMaterial
          attach="material"
          color={hovered ? "#8888ff" : "#0088ff"}
        />
      </mesh>
    );
  };

  return (
    <Canvas>
      <CameraControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
};

export default Viewport;
