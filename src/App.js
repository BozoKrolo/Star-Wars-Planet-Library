import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';

import * as THREE from 'three';

import './App.css';

function Tatooine() {
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.y += delta));
  const texture = useLoader(THREE.TextureLoader, require('./images/mars.jpg'));
  return (
    <mesh position={[10, 0, 0]} ref={ref}>
      <sphereBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
}

function Alderaan() {
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.y += delta));
  const texture = useLoader(THREE.TextureLoader, require('./images/alde.png'));

  return (
    <mesh position={[-10, 10, 10]} ref={ref}>
      <sphereBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" map={texture} />
    </mesh>
  );
}

function Yavin() {
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.y += delta));
  const texture = useLoader(THREE.TextureLoader, require('./images/yavin.jpg'));

  return (
    <mesh position={[0, 5, -10]} ref={ref}>
      <sphereBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" map={texture} />
    </mesh>
  );
}

function Hoth() {
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.y += delta));
  const texture = useLoader(THREE.TextureLoader, require('./images/hoth.png'));

  return (
    <mesh position={[-10, 0, -5]} ref={ref}>
      <sphereBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" map={texture} />
    </mesh>
  );
}

function Dagobah() {
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.y += delta));
  const texture = useLoader(
    THREE.TextureLoader,
    require('./images/dagobah.jpg')
  );

  return (
    <mesh position={[0, -5, 10]} ref={ref}>
      <sphereBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" map={texture} />
    </mesh>
  );
}

export default function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchPlanets();
  }, []);
  console.log('data', planets);

  return (
    <Canvas>
      <Stars />
      <OrbitControls />

      <ambientLight intensity={0.5} />

      <Html position={[10, 0, 0]}>
        <div className="tool">
          <span className="content">
            <h1>{planets[0]?.name}</h1>
            gravity:{planets[0]?.gravity}
            <br /> terrain:{planets[0]?.terrain}
            <br />
            rotation_period:{planets[0]?.rotation_period}
            <br />
            population:{planets[0]?.population}
          </span>
        </div>
      </Html>
      <Html position={[-10, 10, 10]}>
        <div className="tool">
          <span className="content">
            <h1>{planets[1]?.name}</h1>
            gravity:{planets[1]?.gravity}
            <br /> terrain:{planets[1]?.terrain}
            <br />
            rotation_period:{planets[1]?.rotation_period}
            <br />
            population:{planets[1]?.population}
          </span>
        </div>
      </Html>
      <Html position={[0, 5, -10]}>
        <div className="tool">
          <span className="content">
            <h1>{planets[2]?.name}</h1>
            gravity:{planets[2]?.gravity}
            <br /> terrain:{planets[2]?.terrain}
            <br />
            rotation_period:{planets[2]?.rotation_period}
            <br />
            population:{planets[2]?.population}
          </span>
        </div>
      </Html>
      <Html position={[-10, 0, -5]}>
        <div className="tool">
          <span className="content">
            <h1>{planets[3]?.name}</h1>
            gravity:{planets[3]?.gravity}
            <br /> terrain:{planets[3]?.terrain}
            <br />
            rotation_period:{planets[3]?.rotation_period}
            <br />
            population:{planets[3]?.population}
          </span>
        </div>
      </Html>
      <Html position={[0, -5, 10]}>
        <div className="tool">
          <span className="content">
            <h1>{planets[4]?.name}</h1>
            gravity:{planets[4]?.gravity}
            <br /> terrain:{planets[4]?.terrain}
            <br />
            rotation_period:{planets[4]?.rotation_period}
            <br />
            population:{planets[4]?.population}
          </span>
        </div>
      </Html>
      <Tatooine />
      <Hoth />
      <Yavin />
      <Dagobah />
      <Alderaan />
    </Canvas>
  );
}
