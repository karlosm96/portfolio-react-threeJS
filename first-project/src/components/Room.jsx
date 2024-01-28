import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useVideoTexture } from "@react-three/drei";
import { a } from '@react-spring/three';
import room from '../assets/models/room.glb'
import * as THREE from 'three';

import Book from "./Book";
import Poring from "./Poring";
import vidBeach from '../assets/videos/demo.mp3';

export function Room( {scale, position} ) {

  const { nodes, materials } = useGLTF(room)
  const [ firstVid ] = useState(() =>{
    const video = document.getElementById("demo-video");
    return video;
  });

  return (
    
    <>
    
    <a.group name="Scene">
      <Poring scale={ scale } position={ position }/>
      <Book scale={ scale } position={ position }/>
      <mesh geometry={nodes.neuro004.geometry} material={materials['neuro_images.001']} position={[-8.812, 0.24, -0.511]} rotation={[0.191, 0.065, 0.371]} />
      <mesh geometry={nodes.neuro005.geometry} material={materials['carlson.001']} position={[-7.114, 0.173, -0.472]} rotation={[0, 0.445, 0]} />
      <mesh geometry={nodes.neuro006.geometry} material={materials['neuro_cog.001']} position={[-6.288, 0.645, -1.774]} rotation={[-0.172, 0.503, -0.233]} />
      <mesh geometry={nodes.psico002.geometry} material={materials['konrad.001']} position={[-11.343, 0.198, 0.964]} rotation={[0, 0.445, 0]} scale={[1.199, 0.891, 1.199]} />
      <mesh geometry={nodes.psico004.geometry} material={materials['dsm_5.001']} position={[-11.441, 0.603, 0.693]} rotation={[0, 0.445, 0]} scale={[1.199, 0.891, 1.199]} />
      <mesh geometry={nodes.psico008.geometry} material={materials['psicopato.001']} position={[-11.941, 0.176, 3.732]} rotation={[0, 0.768, 0]} scale={[1.199, 0.891, 1.199]} />
      <mesh geometry={nodes.psico061.geometry} material={materials['domjan.001']} position={[-12.163, 0.603, 3.806]} rotation={[0, 0.768, 0]} scale={[1.199, 0.891, 1.199]} />
      <mesh geometry={nodes.psico062.geometry} material={materials['psicofarmaco.001']} position={[-12.051, 1.029, 1.659]} rotation={[0, -0.228, 0]} scale={[1.199, 0.891, 1.199]} />
      <mesh geometry={nodes.blender002.geometry} material={materials['blender__book_front.001']} position={[-8.341, 0.132, 7.474]} rotation={[0, 0.034, 0]} scale={[1.154, 0.648, 1.154]} />
      <mesh geometry={nodes.psico063.geometry} material={materials['neuro_test.001']} position={[-9.232, 0.184, 3.212]} rotation={[0, -0.193, 0]} scale={[1.199, 0.891, 1.199]} />
      <mesh geometry={nodes.program004.geometry} material={materials['clean_code.001']} position={[25.868, 5.878, -46.795]} rotation={[Math.PI / 2, -0.443, 0]} scale={[1.299, 0.958, 1.299]} />
      <mesh geometry={nodes.program005.geometry} material={materials['react.001']} position={[26.244, 4.727, -43.873]} rotation={[0, -0.808, 0]} scale={[1.299, 0.958, 1.299]} />
      <mesh geometry={nodes.program006.geometry} material={materials['javascript.001']} position={[23.722, 5.878, -46.709]} rotation={[1.683, -0.429, 0.265]} scale={[1.299, 0.958, 1.262]} />
      <mesh geometry={nodes.table_base001.geometry} material={materials['wood_floor.001']} position={[-1.988, -2.646, 3.052]} rotation={[0, 1.562, 0]} scale={[-6.288, -6.876, -6.288]} />
      <mesh geometry={nodes.table_main002.geometry} material={materials['ground.003']} position={[8.004, -0.736, 3.168]} rotation={[0, 1.562, 0]} scale={[5.697, 0.573, 1]} />
      <mesh geometry={nodes.table_main003.geometry} material={materials['ground.003']} position={[-12.082, -0.736, 2.984]} rotation={[0, 1.562, -Math.PI]} scale={[-5.697, -0.573, -1]} />
      <mesh geometry={nodes.bot_notebook001.geometry} material={materials['plastic_notebook.001']} position={[-4.395, 0.037, 5.83]} rotation={[-3.136, 1.193, 3.136]} scale={[1.374, 0.551, 2.152]} />
      <mesh geometry={nodes.button001.geometry} material={nodes.button001.material} position={[-5.639, 0.189, 6.769]} rotation={[0, 0.592, 0]} scale={[0.179, 0.035, 0.042]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['plastic_notebook.001']} position={[-4.358, 0.037, 5.924]} rotation={[-3.136, 1.193, 3.136]} scale={[1.374, 0.551, 2.152]} />
      <group position={[-6.425, 0.252, 5.95]} rotation={[0, 0.377, 0]} scale={[-0.159, -0.015, -0.018]}>
        <mesh geometry={nodes.Cube041_1.geometry} material={materials.verde} />
        <mesh geometry={nodes.Cube041_2.geometry} material={materials['verde.brilla']} />
      </group>
      <group position={[-1.093, 0.135, 5.185]} rotation={[0, 0.639, 0]} scale={[0.307, 0.371, 0.303]}>
        <mesh geometry={nodes.Plane005_1.geometry} material={materials.plastic_notebook} />
        <mesh geometry={nodes.Plane005_2.geometry} material={materials.blanco} />
        <mesh geometry={nodes.Plane005_3.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.notebook_screen001.geometry} material={nodes.notebook_screen001.material} position={[-4.886, 1.791, 4.659]} rotation={[3.13, 1.2, 0.002]} scale={[-0.015, -1.078, -2.06]} />
      <mesh geometry={nodes.padd001.geometry} material={materials.plateado} position={[-4.66, 0.206, 7.053]} rotation={[0, 0.377, 0]} scale={1.255} />
      <mesh geometry={nodes.top_notebook001.geometry} material={materials.plastic_notebook} position={[-4.772, 1.323, 4.615]} rotation={[0.001, -1.199, 1.579]} scale={[1.374, 0.03, 2.151]} />
      <group position={[-2.538, 0.111, 4.354]} rotation={[0, 0.366, 0]} scale={0.195}>
        <mesh geometry={nodes.Cube044_1.geometry} material={materials['clic.001']} />
        <mesh geometry={nodes.Cube044_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.top_notebook002.geometry} material={nodes.top_notebook002.material} position={[-4.913, 1.786, 4.77]} rotation={[0.001, -1.199, 1.579]} scale={[1.374, 0.03, 2.151]} />
      <group position={[-6.438, 0.206, 6.143]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube045_1.geometry} material={nodes.Cube045_1.material} />
        <mesh geometry={nodes.Cube045_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key105.geometry} material={nodes.key105.material} position={[-6.438, 0.212, 6.143]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <group position={[-3.369, 0.206, 4.929]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube049_1.geometry} material={materials.verde} />
        <mesh geometry={nodes.Cube049_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key119.geometry} material={nodes.key119.material} position={[-3.369, 0.212, 4.929]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <group position={[-6.383, 0.206, 6.283]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube051_1.geometry} material={nodes.Cube051_1.material} />
        <mesh geometry={nodes.Cube051_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key143.geometry} material={nodes.key143.material} position={[-6.383, 0.212, 6.283]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key150.geometry} material={materials['verde.brilla']} position={[-3.313, 0.206, 5.069]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key151.geometry} material={nodes.key151.material} position={[-3.313, 0.212, 5.069]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-6.236, 0.206, 6.063]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube055_1.geometry} material={nodes.Cube055_1.material} />
        <mesh geometry={nodes.Cube055_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key157.geometry} material={nodes.key157.material} position={[-6.236, 0.212, 6.063]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <group position={[-6.033, 0.206, 5.983]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube057_1.geometry} material={nodes.Cube057_1.material} />
        <mesh geometry={nodes.Cube057_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key179.geometry} material={nodes.key179.material} position={[-6.033, 0.212, 5.983]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <group position={[-5.831, 0.206, 5.903]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube059_1.geometry} material={nodes.Cube059_1.material} />
        <mesh geometry={nodes.Cube059_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key181.geometry} material={nodes.key181.material} position={[-5.831, 0.212, 5.903]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <group position={[-5.628, 0.206, 5.823]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube061_1.geometry} material={nodes.Cube061_1.material} />
        <mesh geometry={nodes.Cube061_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key189.geometry} material={nodes.key189.material} position={[-5.628, 0.212, 5.823]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <group position={[-5.426, 0.206, 5.743]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube063_1.geometry} material={nodes.Cube063_1.material} />
        <mesh geometry={nodes.Cube063_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key203.geometry} material={nodes.key203.material} position={[-5.426, 0.212, 5.743]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <group position={[-5.223, 0.206, 5.663]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube065_1.geometry} material={nodes.Cube065_1.material} />
        <mesh geometry={nodes.Cube065_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key205.geometry} material={nodes.key205.material} position={[-5.223, 0.212, 5.663]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <group position={[-5.021, 0.206, 5.582]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube067_1.geometry} material={nodes.Cube067_1.material} />
        <mesh geometry={nodes.Cube067_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key207.geometry} material={nodes.key207.material} position={[-5.021, 0.212, 5.582]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <group position={[-4.818, 0.206, 5.502]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube069_1.geometry} material={nodes.Cube069_1.material} />
        <mesh geometry={nodes.Cube069_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key209.geometry} material={nodes.key209.material} position={[-4.818, 0.212, 5.502]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <group position={[-4.616, 0.206, 5.422]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube071_1.geometry} material={nodes.Cube071_1.material} />
        <mesh geometry={nodes.Cube071_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key211.geometry} material={nodes.key211.material} position={[-4.616, 0.212, 5.422]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <group position={[-4.413, 0.206, 5.342]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={nodes.Cube073_1.material} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key223.geometry} material={nodes.key223.material} position={[-4.413, 0.212, 5.342]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <group position={[-4.211, 0.206, 5.262]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube075_1.geometry} material={nodes.Cube075_1.material} />
        <mesh geometry={nodes.Cube075_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key229.geometry} material={nodes.key229.material} position={[-4.211, 0.212, 5.262]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <group position={[-4.008, 0.206, 5.182]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube079_1.geometry} material={nodes.Cube079_1.material} />
        <mesh geometry={nodes.Cube079_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key231.geometry} material={nodes.key231.material} position={[-4.008, 0.212, 5.182]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <group position={[-3.806, 0.206, 5.102]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube081_1.geometry} material={nodes.Cube081_1.material} />
        <mesh geometry={nodes.Cube081_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key233.geometry} material={nodes.key233.material} position={[-3.806, 0.212, 5.102]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <group position={[-3.604, 0.206, 5.022]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube083_1.geometry} material={nodes.Cube083_1.material} />
        <mesh geometry={nodes.Cube083_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key235.geometry} material={nodes.key235.material} position={[-3.604, 0.212, 5.022]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <group position={[-6.202, 0.206, 6.211]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube085_1.geometry} material={nodes.Cube085_1.material} />
        <mesh geometry={nodes.Cube085_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key237.geometry} material={nodes.key237.material} position={[-6.202, 0.212, 6.211]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-6, 0.206, 6.131]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube087_1.geometry} material={nodes.Cube087_1.material} />
        <mesh geometry={nodes.Cube087_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key239.geometry} material={nodes.key239.material} position={[-6, 0.212, 6.131]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.797, 0.206, 6.051]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube089_1.geometry} material={nodes.Cube089_1.material} />
        <mesh geometry={nodes.Cube089_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key241.geometry} material={nodes.key241.material} position={[-5.797, 0.212, 6.051]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.595, 0.206, 5.971]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube091_1.geometry} material={nodes.Cube091_1.material} />
        <mesh geometry={nodes.Cube091_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key243.geometry} material={nodes.key243.material} position={[-5.595, 0.212, 5.971]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.392, 0.206, 5.891]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube093_1.geometry} material={nodes.Cube093_1.material} />
        <mesh geometry={nodes.Cube093_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key245.geometry} material={nodes.key245.material} position={[-5.392, 0.212, 5.891]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.19, 0.206, 5.811]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube095_1.geometry} material={nodes.Cube095_1.material} />
        <mesh geometry={nodes.Cube095_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key247.geometry} material={nodes.key247.material} position={[-5.19, 0.212, 5.811]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.987, 0.206, 5.731]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube097_1.geometry} material={nodes.Cube097_1.material} />
        <mesh geometry={nodes.Cube097_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key249.geometry} material={nodes.key249.material} position={[-4.987, 0.212, 5.731]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.785, 0.206, 5.651]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube099_1.geometry} material={nodes.Cube099_1.material} />
        <mesh geometry={nodes.Cube099_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key251.geometry} material={nodes.key251.material} position={[-4.785, 0.212, 5.651]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.582, 0.206, 5.571]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube101_1.geometry} material={nodes.Cube101_1.material} />
        <mesh geometry={nodes.Cube101_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key253.geometry} material={nodes.key253.material} position={[-4.582, 0.212, 5.571]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.38, 0.206, 5.491]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube103_1.geometry} material={nodes.Cube103_1.material} />
        <mesh geometry={nodes.Cube103_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key255.geometry} material={nodes.key255.material} position={[-4.38, 0.212, 5.491]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.177, 0.206, 5.411]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube105_1.geometry} material={nodes.Cube105_1.material} />
        <mesh geometry={nodes.Cube105_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key257.geometry} material={nodes.key257.material} position={[-4.177, 0.212, 5.411]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-3.975, 0.206, 5.331]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube107_1.geometry} material={nodes.Cube107_1.material} />
        <mesh geometry={nodes.Cube107_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key259.geometry} material={nodes.key259.material} position={[-3.975, 0.212, 5.331]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-3.548, 0.206, 5.162]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube109_1.geometry} material={nodes.Cube109_1.material} />
        <mesh geometry={nodes.Cube109_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key261.geometry} material={nodes.key261.material} position={[-3.548, 0.212, 5.162]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-3.165, 0.206, 4.849]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube111_1.geometry} material={materials.verde} />
        <mesh geometry={nodes.Cube111_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key263.geometry} material={nodes.key263.material} position={[-3.165, 0.212, 4.849]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <group position={[-2.961, 0.206, 4.768]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube165_1.geometry} material={materials.verde} />
        <mesh geometry={nodes.Cube165_2.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key265.geometry} material={nodes.key265.material} position={[-2.961, 0.212, 4.768]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <group position={[-2.757, 0.206, 4.687]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube209.geometry} material={materials.verde} />
        <mesh geometry={nodes.Cube209_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key267.geometry} material={nodes.key267.material} position={[-2.757, 0.212, 4.687]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <mesh geometry={nodes.key268.geometry} material={materials['verde.brilla']} position={[-3.11, 0.206, 4.989]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key269.geometry} material={nodes.key269.material} position={[-3.11, 0.212, 4.989]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key270.geometry} material={materials['verde.brilla']} position={[-2.906, 0.206, 4.908]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key271.geometry} material={nodes.key271.material} position={[-2.906, 0.212, 4.908]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key272.geometry} material={materials['verde.brilla']} position={[-2.702, 0.206, 4.827]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key273.geometry} material={nodes.key273.material} position={[-2.702, 0.212, 4.827]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-6.308, 0.206, 6.472]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube261.geometry} material={nodes.Cube261.material} />
        <mesh geometry={nodes.Cube261_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key275.geometry} material={nodes.key275.material} position={[-6.308, 0.212, 6.472]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key276.geometry} material={materials['verde.brilla']} position={[-3.238, 0.206, 5.259]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key277.geometry} material={nodes.key277.material} position={[-3.238, 0.212, 5.259]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.968, 0.206, 6.338]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube285.geometry} material={nodes.Cube285.material} />
        <mesh geometry={nodes.Cube285_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key279.geometry} material={nodes.key279.material} position={[-5.968, 0.212, 6.338]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.766, 0.206, 6.258]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube293.geometry} material={nodes.Cube293.material} />
        <mesh geometry={nodes.Cube293_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key281.geometry} material={nodes.key281.material} position={[-5.766, 0.212, 6.258]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.563, 0.206, 6.178]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube307.geometry} material={nodes.Cube307.material} />
        <mesh geometry={nodes.Cube307_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key283.geometry} material={nodes.key283.material} position={[-5.563, 0.212, 6.178]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.361, 0.206, 6.098]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube309.geometry} material={nodes.Cube309.material} />
        <mesh geometry={nodes.Cube309_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key285.geometry} material={nodes.key285.material} position={[-5.361, 0.212, 6.098]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.158, 0.206, 6.018]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube311.geometry} material={nodes.Cube311.material} />
        <mesh geometry={nodes.Cube311_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key287.geometry} material={nodes.key287.material} position={[-5.158, 0.212, 6.018]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.956, 0.206, 5.938]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube313.geometry} material={nodes.Cube313.material} />
        <mesh geometry={nodes.Cube313_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key289.geometry} material={nodes.key289.material} position={[-4.956, 0.212, 5.938]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.753, 0.206, 5.858]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube315.geometry} material={nodes.Cube315.material} />
        <mesh geometry={nodes.Cube315_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key291.geometry} material={nodes.key291.material} position={[-4.753, 0.212, 5.858]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.551, 0.206, 5.778]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube327.geometry} material={nodes.Cube327.material} />
        <mesh geometry={nodes.Cube327_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key293.geometry} material={nodes.key293.material} position={[-4.551, 0.212, 5.778]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.348, 0.206, 5.698]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube336.geometry} material={nodes.Cube336.material} />
        <mesh geometry={nodes.Cube336_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key295.geometry} material={nodes.key295.material} position={[-4.348, 0.212, 5.698]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.146, 0.206, 5.618]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube338.geometry} material={nodes.Cube338.material} />
        <mesh geometry={nodes.Cube338_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key297.geometry} material={nodes.key297.material} position={[-4.146, 0.212, 5.618]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-3.943, 0.206, 5.538]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube340.geometry} material={nodes.Cube340.material} />
        <mesh geometry={nodes.Cube340_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key299.geometry} material={nodes.key299.material} position={[-3.943, 0.212, 5.538]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-3.741, 0.206, 5.457]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube342.geometry} material={nodes.Cube342.material} />
        <mesh geometry={nodes.Cube342_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key301.geometry} material={nodes.key301.material} position={[-3.741, 0.212, 5.457]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-3.473, 0.206, 5.352]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube344.geometry} material={nodes.Cube344.material} />
        <mesh geometry={nodes.Cube344_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key303.geometry} material={nodes.key303.material} position={[-3.473, 0.212, 5.352]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key304.geometry} material={materials['verde.brilla']} position={[-3.035, 0.206, 5.178]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key305.geometry} material={nodes.key305.material} position={[-3.035, 0.212, 5.178]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key306.geometry} material={materials['verde.brilla']} position={[-2.831, 0.206, 5.098]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key307.geometry} material={nodes.key307.material} position={[-2.831, 0.212, 5.098]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key308.geometry} material={materials['verde.brilla']} position={[-2.627, 0.206, 5.017]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key309.geometry} material={nodes.key309.material} position={[-2.627, 0.212, 5.017]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-6.233, 0.206, 6.662]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube352.geometry} material={nodes.Cube352.material} />
        <mesh geometry={nodes.Cube352_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key311.geometry} material={nodes.key311.material} position={[-6.233, 0.212, 6.662]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key312.geometry} material={materials['verde.brilla']} position={[-3.164, 0.206, 5.448]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key313.geometry} material={nodes.key313.material} position={[-3.164, 0.212, 5.448]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.878, 0.206, 6.522]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube356.geometry} material={nodes.Cube356.material} />
        <mesh geometry={nodes.Cube356_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key315.geometry} material={nodes.key315.material} position={[-5.878, 0.212, 6.522]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.675, 0.206, 6.442]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube358.geometry} material={nodes.Cube358.material} />
        <mesh geometry={nodes.Cube358_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key317.geometry} material={nodes.key317.material} position={[-5.675, 0.212, 6.442]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.473, 0.206, 6.362]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube360.geometry} material={nodes.Cube360.material} />
        <mesh geometry={nodes.Cube360_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key319.geometry} material={nodes.key319.material} position={[-5.473, 0.212, 6.362]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.27, 0.206, 6.282]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube362.geometry} material={nodes.Cube362.material} />
        <mesh geometry={nodes.Cube362_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key321.geometry} material={nodes.key321.material} position={[-5.27, 0.212, 6.282]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.068, 0.206, 6.201]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube364.geometry} material={nodes.Cube364.material} />
        <mesh geometry={nodes.Cube364_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key323.geometry} material={nodes.key323.material} position={[-5.068, 0.212, 6.201]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.866, 0.206, 6.121]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube366.geometry} material={nodes.Cube366.material} />
        <mesh geometry={nodes.Cube366_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key325.geometry} material={nodes.key325.material} position={[-4.866, 0.212, 6.121]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.663, 0.206, 6.041]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube368.geometry} material={nodes.Cube368.material} />
        <mesh geometry={nodes.Cube368_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key327.geometry} material={nodes.key327.material} position={[-4.663, 0.212, 6.041]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.461, 0.206, 5.961]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube370.geometry} material={nodes.Cube370.material} />
        <mesh geometry={nodes.Cube370_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key329.geometry} material={nodes.key329.material} position={[-4.461, 0.212, 5.961]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.258, 0.206, 5.881]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube372.geometry} material={nodes.Cube372.material} />
        <mesh geometry={nodes.Cube372_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key331.geometry} material={nodes.key331.material} position={[-4.258, 0.212, 5.881]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.056, 0.206, 5.801]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube374.geometry} material={nodes.Cube374.material} />
        <mesh geometry={nodes.Cube374_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key333.geometry} material={nodes.key333.material} position={[-4.056, 0.212, 5.801]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-3.853, 0.206, 5.721]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube376.geometry} material={nodes.Cube376.material} />
        <mesh geometry={nodes.Cube376_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key335.geometry} material={nodes.key335.material} position={[-3.853, 0.212, 5.721]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-3.398, 0.206, 5.541]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube378.geometry} material={nodes.Cube378.material} />
        <mesh geometry={nodes.Cube378_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key337.geometry} material={nodes.key337.material} position={[-3.398, 0.212, 5.541]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key338.geometry} material={materials['verde.brilla']} position={[-2.96, 0.206, 5.368]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key339.geometry} material={nodes.key339.material} position={[-2.96, 0.212, 5.368]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key340.geometry} material={materials['verde.brilla']} position={[-2.756, 0.206, 5.287]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key341.geometry} material={nodes.key341.material} position={[-2.756, 0.212, 5.287]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-6.158, 0.206, 6.852]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube384.geometry} material={nodes.Cube384.material} />
        <mesh geometry={nodes.Cube384_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key343.geometry} material={nodes.key343.material} position={[-6.158, 0.212, 6.852]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key344.geometry} material={materials['verde.brilla']} position={[-3.089, 0.206, 5.638]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key345.geometry} material={nodes.key345.material} position={[-3.089, 0.212, 5.638]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.713, 0.206, 6.676]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube388.geometry} material={nodes.Cube388.material} />
        <mesh geometry={nodes.Cube388_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key347.geometry} material={nodes.key347.material} position={[-5.713, 0.212, 6.676]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.51, 0.206, 6.596]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube390.geometry} material={nodes.Cube390.material} />
        <mesh geometry={nodes.Cube390_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key349.geometry} material={nodes.key349.material} position={[-5.51, 0.212, 6.596]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.308, 0.206, 6.515]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube392.geometry} material={nodes.Cube392.material} />
        <mesh geometry={nodes.Cube392_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key351.geometry} material={nodes.key351.material} position={[-5.308, 0.212, 6.515]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.105, 0.206, 6.435]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube394.geometry} material={nodes.Cube394.material} />
        <mesh geometry={nodes.Cube394_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key353.geometry} material={nodes.key353.material} position={[-5.105, 0.212, 6.435]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.903, 0.206, 6.355]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube396.geometry} material={nodes.Cube396.material} />
        <mesh geometry={nodes.Cube396_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key355.geometry} material={nodes.key355.material} position={[-4.903, 0.212, 6.355]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.7, 0.206, 6.275]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube398.geometry} material={nodes.Cube398.material} />
        <mesh geometry={nodes.Cube398_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key357.geometry} material={nodes.key357.material} position={[-4.7, 0.212, 6.275]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.498, 0.206, 6.195]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube400.geometry} material={nodes.Cube400.material} />
        <mesh geometry={nodes.Cube400_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key359.geometry} material={nodes.key359.material} position={[-4.498, 0.212, 6.195]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.295, 0.206, 6.115]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube402.geometry} material={nodes.Cube402.material} />
        <mesh geometry={nodes.Cube402_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key361.geometry} material={nodes.key361.material} position={[-4.295, 0.212, 6.115]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.093, 0.206, 6.035]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube404.geometry} material={nodes.Cube404.material} />
        <mesh geometry={nodes.Cube404_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key363.geometry} material={nodes.key363.material} position={[-4.093, 0.212, 6.035]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-3.89, 0.206, 5.955]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube406.geometry} material={nodes.Cube406.material} />
        <mesh geometry={nodes.Cube406_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key365.geometry} material={nodes.key365.material} position={[-3.89, 0.212, 5.955]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-3.323, 0.206, 5.731]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube408.geometry} material={nodes.Cube408.material} />
        <mesh geometry={nodes.Cube408_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key367.geometry} material={nodes.key367.material} position={[-3.323, 0.212, 5.731]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key368.geometry} material={materials['verde.brilla']} position={[-2.885, 0.206, 5.557]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key369.geometry} material={nodes.key369.material} position={[-2.885, 0.212, 5.557]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key370.geometry} material={materials['verde.brilla']} position={[-2.681, 0.206, 5.477]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key371.geometry} material={nodes.key371.material} position={[-2.681, 0.212, 5.477]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-6.083, 0.206, 7.041]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube414.geometry} material={nodes.Cube414.material} />
        <mesh geometry={nodes.Cube414_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key373.geometry} material={nodes.key373.material} position={[-6.083, 0.212, 7.041]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key374.geometry} material={materials['verde.brilla']} position={[-3.014, 0.206, 5.828]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key375.geometry} material={nodes.key375.material} position={[-3.014, 0.212, 5.828]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.88, 0.206, 6.961]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube418.geometry} material={nodes.Cube418.material} />
        <mesh geometry={nodes.Cube418_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key377.geometry} material={nodes.key377.material} position={[-5.88, 0.212, 6.961]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.678, 0.206, 6.881]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube420.geometry} material={nodes.Cube420.material} />
        <mesh geometry={nodes.Cube420_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key379.geometry} material={nodes.key379.material} position={[-5.678, 0.212, 6.881]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.475, 0.206, 6.801]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube422.geometry} material={nodes.Cube422.material} />
        <mesh geometry={nodes.Cube422_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key381.geometry} material={nodes.key381.material} position={[-5.475, 0.212, 6.801]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-5.273, 0.206, 6.721]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube424.geometry} material={nodes.Cube424.material} />
        <mesh geometry={nodes.Cube424_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key383.geometry} material={nodes.key383.material} position={[-5.273, 0.212, 6.721]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-4.058, 0.206, 6.241]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube426.geometry} material={nodes.Cube426.material} />
        <mesh geometry={nodes.Cube426_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key385.geometry} material={nodes.key385.material} position={[-4.058, 0.212, 6.241]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-3.856, 0.206, 6.161]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube428.geometry} material={nodes.Cube428.material} />
        <mesh geometry={nodes.Cube428_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key387.geometry} material={nodes.key387.material} position={[-3.856, 0.212, 6.161]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-3.653, 0.206, 6.081]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube430.geometry} material={nodes.Cube430.material} />
        <mesh geometry={nodes.Cube430_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key389.geometry} material={nodes.key389.material} position={[-3.653, 0.212, 6.081]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-3.451, 0.206, 6]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube432.geometry} material={nodes.Cube432.material} />
        <mesh geometry={nodes.Cube432_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key391.geometry} material={nodes.key391.material} position={[-3.451, 0.212, 6]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-3.248, 0.206, 5.92]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube434.geometry} material={nodes.Cube434.material} />
        <mesh geometry={nodes.Cube434_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key393.geometry} material={nodes.key393.material} position={[-3.248, 0.212, 5.92]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key394.geometry} material={materials['verde.brilla']} position={[-2.606, 0.206, 5.666]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key395.geometry} material={nodes.key395.material} position={[-2.606, 0.212, 5.666]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key396.geometry} material={materials['verde.brilla']} position={[-2.402, 0.206, 5.586]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key397.geometry} material={nodes.key397.material} position={[-2.402, 0.212, 5.586]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <group position={[-3.488, 0.206, 5.907]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube440.geometry} material={nodes.Cube440.material} />
        <mesh geometry={nodes.Cube440_1.geometry} material={materials['verde.brilla']} />
      </group>
      <mesh geometry={nodes.key399.geometry} material={nodes.key399.material} position={[-3.488, 0.212, 5.907]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.floor.geometry} material={materials.wood_floor} position={[4.82, 11.003, -9.9]} rotation={[Math.PI, -1.568, 0]} scale={[-32.643, -39.412, -27.195]} />
      <mesh geometry={nodes.tittleprojects.geometry} material={materials.blanco} position={[-10.822, 17.223, -49.002]} rotation={[1.572, 0, 0]} scale={[0.567, 0.538, 0.51]} />
      <mesh geometry={nodes.gab.geometry} material={materials.b_marmol} position={[35.343, 6.074, -5.028]} rotation={[0, -1.554, 0]} scale={[1.346, 1.793, 2.201]} />
      <mesh geometry={nodes.handle004.geometry} material={materials['plateado.oscuro.2']} position={[31.889, -2.607, -10.968]} rotation={[1.574, 0.019, 1.56]} scale={0.231} />
      <mesh geometry={nodes.gem004.geometry} material={materials.esmeralda} position={[31.766, -2.597, -10.963]} rotation={[0, -1.56, 1.564]} scale={[0.162, 0.167, 0.134]} />
      <mesh geometry={nodes.handle005.geometry} material={materials['plateado.oscuro.2']} position={[31.889, 0.628, -10.968]} rotation={[1.574, 0.019, 1.56]} scale={0.231} />
      <mesh geometry={nodes.gem005.geometry} material={materials.esmeralda} position={[31.766, 0.638, -10.963]} rotation={[0, -1.56, 1.564]} scale={[0.162, 0.167, 0.134]} />
      <mesh geometry={nodes.carpet.geometry} material={materials['carpet.2']} position={[-2.196, 5.805, 8.772]} rotation={[0.199, -0.298, 0.32]} scale={[-14.787, -0.012, -14.787]} />
      <mesh geometry={nodes.pillow.geometry} material={materials.almohada} position={[-12.283, -3.624, -4.386]} rotation={[0, -0.506, 0]} scale={3.847} />
      <mesh geometry={nodes.handle006.geometry} material={materials['plateado.oscuro.2']} position={[31.889, -2.607, 0.367]} rotation={[1.574, 0.019, 1.56]} scale={0.231} />
      <mesh geometry={nodes.gem006.geometry} material={materials.esmeralda} position={[31.766, -2.597, 0.372]} rotation={[0, -1.56, 1.564]} scale={[0.162, 0.167, 0.134]} />
      <mesh geometry={nodes.handle007.geometry} material={materials['plateado.oscuro.2']} position={[31.889, 0.628, 0.367]} rotation={[1.574, 0.019, 1.56]} scale={0.231} />
      <mesh geometry={nodes.gem007.geometry} material={materials.esmeralda} position={[31.766, 0.638, 0.372]} rotation={[0, -1.56, 1.564]} scale={[0.162, 0.167, 0.134]} />
      <group position={[28.472, 7.449, 24.253]} rotation={[Math.PI, -1.567, 0]} scale={[-0.335, -11.812, -7.668]}>
        <mesh geometry={nodes.Cube016_1.geometry} material={materials.wood_1} />
        <mesh geometry={nodes.Cube016_2.geometry} material={materials['wood_floor.001']} />
      </group>
      <mesh geometry={nodes.edges.geometry} material={materials.blanco} position={[27.437, 19.848, 24.293]} rotation={[Math.PI, -1.568, 0]} scale={[-0.23, -0.746, -8.725]} />
      <mesh geometry={nodes.gab001.geometry} material={materials.desk} position={[33.589, -0.248, -5.852]} rotation={[0, -1.554, 0]} scale={[1.346, 1.793, 2.201]} />
      <mesh geometry={nodes.gab002.geometry} material={materials.cabinet} position={[34.759, -0.37, -5.694]} rotation={[0, -1.554, 0]} scale={[1.346, 1.793, 2.201]} />
      <mesh geometry={nodes.frames.geometry} material={materials.blanco} position={[39.694, -4.173, -12.167]} scale={[0.901, 0.901, 38.811]} />
      <mesh geometry={nodes.wall.geometry} material={materials.wall} position={[39.694, -4.173, -12.167]} scale={[0.901, 0.901, 38.811]} />
      <mesh geometry={nodes.windows.geometry} material={materials.Glass} position={[-28.934, 8.758, -12.167]} rotation={[-Math.PI, 0, 0]} scale={[0.901, 0.901, 38.811]} />
      <mesh geometry={nodes.cristal001.geometry} material={materials.Glass} position={[-2.033, 0.783, 2.56]} rotation={[0, 1.562, 0]} scale={[6.088, 0.038, 6.088]} />
      <mesh geometry={nodes.Circle001.geometry} material={materials.react_stamp} position={[-7.952, 12.326, -48.621]} rotation={[1.56, 0, 0]} scale={0.245} />
      <mesh geometry={nodes.Circle002.geometry} material={materials.node} position={[-8.465, 11.86, -48.616]} rotation={[1.56, 0, 0]} scale={0.245} />
      <mesh geometry={nodes.Circle003.geometry} material={materials.html} position={[-6.777, 12.335, -48.621]} rotation={[1.56, 0, 0]} scale={0.245} />
      <mesh geometry={nodes.Circle004.geometry} material={materials.css} position={[-6.203, 11.848, -48.616]} rotation={[1.56, 0, 0]} scale={0.245} />
      <mesh geometry={nodes.Circle005.geometry} material={materials.mongoDB} position={[-7.371, 11.839, -48.615]} rotation={[1.56, 0, 0]} scale={0.329} />
      <mesh geometry={nodes.Circle007.geometry} material={materials.stampo_python} position={[0.101, 12.079, -48.618]} rotation={[1.56, 0, 0]} scale={0.406} />
      <mesh geometry={nodes.Plane021.geometry} material={materials.blanco} position={[-7.385, 13.04, -48.633]} rotation={[1.56, 0, 0]} scale={1.712} />
      <mesh geometry={nodes.Plane022.geometry} material={materials.miDulce} position={[-7.384, 13.574, -48.633]} rotation={[1.56, 0, 0]} scale={[1.329, 0.953, 0.84]} />
      <mesh geometry={nodes.Plane023.geometry} material={materials.border_card} position={[-7.385, 13.04, -48.631]} rotation={[1.56, 0, 0]} scale={1.712} />
      <mesh geometry={nodes.Plane028.geometry} material={materials.blanco} position={[1.08, 13.04, -48.633]} rotation={[1.56, 0, 0]} scale={1.712} />
      <mesh geometry={nodes.Plane029.geometry} material={materials.sort_algo} position={[1.08, 13.574, -48.633]} rotation={[1.56, 0, 0]} scale={[1.329, 0.953, 0.84]} />
      <mesh geometry={nodes.Plane030.geometry} material={materials.border_card} position={[1.08, 13.04, -48.631]} rotation={[1.56, 0, 0]} scale={1.712} />
      <mesh geometry={nodes.Plane031.geometry} material={nodes.Plane031.material} position={[1.247, 12.103, -48.617]} rotation={[1.56, 0, 0]} scale={[0.707, 0.279, 0.279]} />
      <mesh geometry={nodes.Circle008.geometry} material={materials.stampo_python} position={[-4.046, 12.079, -48.618]} rotation={[1.56, 0, 0]} scale={0.406} />
      <mesh geometry={nodes.Plane020.geometry} material={materials.blanco} position={[-3.067, 13.04, -48.633]} rotation={[1.56, 0, 0]} scale={1.712} />
      <mesh geometry={nodes.Plane024.geometry} material={materials.game_of_life} position={[-3.067, 13.574, -48.633]} rotation={[1.56, 0, 0]} scale={[1.329, 0.953, 0.84]} />
      <mesh geometry={nodes.Plane025.geometry} material={materials.border_card} position={[-3.067, 13.04, -48.631]} rotation={[1.56, 0, 0]} scale={1.712} />
      <mesh geometry={nodes.Plane026.geometry} material={nodes.Plane026.material} position={[-2.9, 12.103, -48.617]} rotation={[1.56, 0, 0]} scale={[0.707, 0.279, 0.279]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials.blanco} position={[5.439, 23.029, -12.409]} scale={[33.913, 0.569, 38.904]} />
      <mesh geometry={nodes.board.geometry} material={materials['plateado.oscuro']} position={[-9.66, 9.087, -49.051]} rotation={[-Math.PI, 0, 0]} scale={[-14.433, -7.296, -0.458]} />
      <group position={[-9.662, 9.118, -48.835]} scale={[13.437, 6.786, 0.124]}>
        <mesh geometry={nodes.Cube015_1.geometry} material={materials.corcho} />
        <mesh geometry={nodes.Cube015_2.geometry} material={materials.blanco} />
      </group>
      <mesh geometry={nodes.clip.geometry} material={materials.pin} position={[-7.39, 14.587, -48.526]} rotation={[1.566, 0, 0]} scale={0.929} />
      <mesh geometry={nodes.clip001.geometry} material={materials.pin} position={[-3.054, 14.587, -48.526]} rotation={[1.566, 0, 0]} scale={0.929} />
      <mesh geometry={nodes.clip002.geometry} material={materials.pin} position={[1.311, 14.587, -48.526]} rotation={[1.566, 0, 0]} scale={0.929} />
      <group position={[35.923, 7.816, -33.786]} rotation={[0, -1.565, 0]} scale={[14.119, 12.355, 2.357]}>
        <mesh geometry={nodes.Cube010_1.geometry} material={materials.desk} />
        <mesh geometry={nodes.Cube010_2.geometry} material={materials.cabinet} />
      </group>
      <mesh geometry={nodes.psico010.geometry} material={materials.freud} position={[34.397, 16.536, -46.112]} rotation={[1.755, -0.436, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico011.geometry} material={materials.schopenhauer} position={[34.403, 16.489, -45.001]} rotation={[1.565, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico012.geometry} material={materials.zaratustra} position={[34.537, 16.487, -43.918]} rotation={[1.66, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico013.geometry} material={materials.mas_alla} position={[34.415, 16.485, -42.952]} rotation={[1.565, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico014.geometry} material={materials.descartes} position={[34.422, 16.498, -41.794]} rotation={[1.752, -0.436, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico015.geometry} material={materials.darwin_emociones} position={[34.427, 16.467, -40.799]} rotation={[1.636, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico016.geometry} material={materials.darwin_origen} position={[34.433, 16.45, -39.878]} rotation={[1.565, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico017.geometry} material={materials.hume} position={[34.439, 16.51, -38.699]} rotation={[1.788, -0.436, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico018.geometry} material={materials.bunge} position={[34.573, 16.458, -37.538]} rotation={[1.578, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico019.geometry} material={materials.kuhn} position={[34.452, 16.501, -36.478]} rotation={[1.725, -0.436, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico020.geometry} material={materials.popper} position={[34.458, 16.433, -35.438]} rotation={[1.578, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico021.geometry} material={materials['metodo.001']} position={[34.475, 16.468, -32.543]} rotation={[1.578, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico022.geometry} material={materials.metodo} position={[34.481, 16.509, -31.453]} rotation={[1.403, -0.434, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico023.geometry} material={materials.chalmer} position={[34.486, 16.515, -30.626]} rotation={[1.392, -0.434, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico024.geometry} material={materials.ponty} position={[34.491, 16.505, -29.663]} rotation={[1.303, -0.433, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico025.geometry} material={materials.balbieri} position={[34.498, 16.482, -28.595]} rotation={[1.166, -0.433, -0.007]} scale={1.618} />
      <mesh geometry={nodes.psico026.geometry} material={materials.beuchamp} position={[34.506, 16.484, -27.114]} rotation={[1.578, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico027.geometry} material={materials.goleman} position={[34.511, 16.476, -26.261]} rotation={[1.578, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico028.geometry} material={materials.salutogenesis} position={[34.517, 16.51, -25.253]} rotation={[1.694, -0.436, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico029.geometry} material={materials.viktor_frankl} position={[34.522, 16.51, -24.34]} rotation={[1.749, -0.436, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico030.geometry} material={materials.manual_psicoetica} position={[34.527, 16.493, -23.487]} rotation={[1.779, -0.436, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico031.geometry} material={materials.cohen_attention} position={[34.534, 16.462, -22.334]} rotation={[1.982, -0.437, -0.007]} scale={1.618} />
      <mesh geometry={nodes.psico032.geometry} material={materials.enzo} position={[34.993, 16.482, -20.905]} rotation={[1.578, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico033.geometry} material={materials.seligman} position={[34.844, 10.092, -46.787]} rotation={[1.578, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico034.geometry} material={materials.lazarus} position={[34.399, 10.133, -45.693]} rotation={[1.403, -0.434, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico035.geometry} material={materials.a_beck} position={[34.404, 10.139, -44.866]} rotation={[1.392, -0.434, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico036.geometry} material={materials.j_beck} position={[34.41, 10.129, -43.904]} rotation={[1.303, -0.433, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico037.geometry} material={materials.martin_pear} position={[34.416, 10.106, -42.836]} rotation={[1.166, -0.433, -0.007]} scale={1.618} />
      <mesh geometry={nodes.psico038.geometry} material={materials.skinner} position={[34.424, 10.108, -41.355]} rotation={[1.578, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico039.geometry} material={materials['Material.012']} position={[34.429, 10.099, -40.501]} rotation={[1.578, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico040.geometry} material={materials.newro_basica} position={[34.62, 10.401, -29.384]} rotation={[1.66, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico041.geometry} material={materials.brain_facts} position={[34.499, 10.399, -28.418]} rotation={[1.565, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico042.geometry} material={materials.kandel} position={[34.505, 10.412, -27.26]} rotation={[1.752, -0.436, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico043.geometry} material={materials.eva_neuro} position={[34.511, 10.38, -26.265]} rotation={[1.636, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico044.geometry} material={materials.damasio} position={[34.516, 10.363, -25.344]} rotation={[1.565, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico045.geometry} material={materials.model_life} position={[34.523, 10.423, -24.165]} rotation={[1.788, -0.436, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico046.geometry} material={materials.botella_1} position={[34.657, 10.372, -23.004]} rotation={[1.578, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico047.geometry} material={materials.botella_2} position={[34.536, 10.415, -21.944]} rotation={[1.725, -0.436, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico048.geometry} material={materials.reuchlin} position={[34.993, 10.346, -20.907]} rotation={[1.578, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico049.geometry} material={materials.pinel} position={[34.475, 10.307, -32.543]} rotation={[1.578, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico050.geometry} material={materials.demencia} position={[34.481, 10.349, -31.453]} rotation={[1.403, -0.434, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico051.geometry} material={materials.sleep} position={[34.486, 10.355, -30.626]} rotation={[1.392, -0.434, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico052.geometry} material={materials.sql} position={[34.424, 4.214, -41.351]} rotation={[1.752, -0.436, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico053.geometry} material={materials.data_struc_py} position={[34.43, 4.183, -40.356]} rotation={[1.636, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico054.geometry} material={materials.python_crash} position={[34.435, 4.166, -39.436]} rotation={[1.565, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico055.geometry} material={materials.life_cycle} position={[34.442, 4.226, -38.256]} rotation={[1.788, -0.436, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico056.geometry} material={materials.fundamentos_bd} position={[34.576, 4.174, -37.095]} rotation={[1.578, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico057.geometry} material={materials.c} position={[34.455, 4.217, -36.035]} rotation={[1.725, -0.436, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico058.geometry} material={materials.java} position={[34.461, 4.149, -34.996]} rotation={[1.578, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico059.geometry} material={materials.python_2} position={[34.844, 4.152, -46.787]} rotation={[1.578, -0.435, -0.008]} scale={1.618} />
      <mesh geometry={nodes.psico060.geometry} material={materials.python} position={[34.399, 4.194, -45.693]} rotation={[1.403, -0.434, -0.008]} scale={1.618} />
      <mesh geometry={nodes.gem.geometry} material={materials.esmeralda} position={[33.2, -1.709, -27.271]} rotation={[0, -1.566, 0]} scale={[0.172, 0.177, 0.142]} />
      <mesh geometry={nodes.gem1.geometry} material={materials.esmeralda} position={[33.207, -1.709, -26.041]} rotation={[0, -1.566, 0]} scale={[0.172, 0.177, 0.142]} />
      <mesh geometry={nodes.gem2.geometry} material={materials.esmeralda} position={[33.124, -1.709, -40.06]} rotation={[0, -1.566, 0]} scale={[0.172, 0.177, 0.142]} />
      <mesh geometry={nodes.gem3.geometry} material={materials.esmeralda} position={[33.116, -1.709, -41.568]} rotation={[0, -1.566, 0]} scale={[0.172, 0.177, 0.142]} />
      <mesh geometry={nodes.handle.geometry} material={materials['plateado.oscuro.2']} position={[33.318, -1.708, -27.284]} rotation={[3.138, 0.014, 1.571]} scale={0.245} />
      <mesh geometry={nodes.handle1.geometry} material={materials['plateado.oscuro.2']} position={[33.324, -1.708, -26.054]} rotation={[3.138, 0.014, 1.571]} scale={0.245} />
      <mesh geometry={nodes.handle2.geometry} material={materials['plateado.oscuro.2']} position={[33.241, -1.708, -40.058]} rotation={[3.138, 0.014, 1.571]} scale={0.245} />
      <mesh geometry={nodes.handle3.geometry} material={materials['plateado.oscuro.2']} position={[33.234, -1.708, -41.566]} rotation={[3.138, 0.014, 1.571]} scale={0.245} />
      <group position={[-22.384, 0.002, 20.024]} rotation={[0, -1.053, 0]} scale={3.192}>
        <mesh geometry={nodes.Sphere001.geometry} material={materials['ground.001']} />
        <mesh geometry={nodes.Sphere001_1.geometry} material={materials['ground.002']} />
      </group>
      <group position={[-22.75, 0.146, -44.535]} rotation={[0, -1.453, 0]} scale={3.257}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['ground.001']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['ground.002']} />
      </group>
      <mesh geometry={nodes.plant1.geometry} material={materials.plant} position={[-22.742, 5.371, 19.627]} rotation={[Math.PI / 2, 0, 1.525]} scale={0.058} />
      <mesh geometry={nodes.plant2.geometry} material={materials.plant} position={[-22.53, 6.564, -44.121]} rotation={[Math.PI / 2, 0, -2.964]} scale={0.073} />
      <group position={[38.552, 13.621, -11.002]} rotation={[-Math.PI, 0.007, 0]} scale={-0.944}>
        <mesh geometry={nodes.Cube019_1.geometry} material={materials.ramon} />
        <mesh geometry={nodes.Cube019_2.geometry} material={materials.wood_1} />
      </group>
      <group position={[-2.353, 19.899, 24.163]} rotation={[0, 1.57, -Math.PI]} scale={[-2.534, -2.534, -2.937]}>
        <mesh geometry={nodes.Cube035_1.geometry} material={materials.wood_1} />
        <mesh geometry={nodes.Cube035_2.geometry} material={materials.ramon_2} />
      </group>
      <group position={[38.579, 9.113, 1.443]} rotation={[-Math.PI, 0.005, 0]} scale={-1.62}>
        <mesh geometry={nodes.Cube036_1.geometry} material={materials.wood_1} />
        <mesh geometry={nodes.Cube036_2.geometry} material={materials.ramon_3} />
      </group>
      <mesh geometry={nodes.phonescreen.geometry} material={materials.phone_crow} position={[34.638, 6.342, 3.376]} rotation={[Math.PI, -1.126, Math.PI]} scale={[0.894, 0.169, 1.673]} />
      <mesh geometry={nodes.phonecamera.geometry} material={materials.camera} position={[35.922, 6.646, 4.213]} rotation={[Math.PI, -1.126, Math.PI]} scale={[0.701, 0.133, 1.314]} />
      <mesh geometry={nodes.phonebackcamera.geometry} material={materials.back_camera} position={[34.707, 6.268, 3.42]} rotation={[Math.PI, -1.129, Math.PI]} scale={[0.894, 0.169, 1.673]} />
      <mesh geometry={nodes.linkedinscreen.geometry} material={materials.linkedin} position={[34.788, 6.403, 3.448]} rotation={[Math.PI, -1.126, Math.PI]} scale={[0.646, 0.137, 0.489]} />
      <mesh geometry={nodes.outlookscreen.geometry} material={materials.outlook} position={[33.861, 6.403, 3.006]} rotation={[Math.PI, -1.126, Math.PI]} scale={[0.648, 0.137, 0.491]} />
      <mesh geometry={nodes.mattress.geometry} material={materials.GREY} position={[-2.324, -1.248, 18.285]} rotation={[0, 1.557, 0]} scale={[4.756, 0.909, 14.239]} />
      <mesh geometry={nodes.pillow_1.geometry} material={materials.GREY} position={[5.317, 3.287, 21.176]} rotation={[0, 1.557, 1.971]} scale={[3.997, 2.9, 8.227]} />
      <mesh geometry={nodes.pillow_2.geometry} material={materials.GREY} position={[-9.388, 3.443, 21.257]} rotation={[0, 1.557, 1.971]} scale={[3.98, 2.535, 7.316]} />
      <mesh geometry={nodes.sofa.geometry} material={materials.desk} position={[72.358, 2.229, -13.117]} rotation={[0, 1.557, 0]} scale={1.437} />
      <mesh geometry={nodes.desk.geometry} material={materials.plastic_notebook} position={[20.109, 2.727, -43.51]} scale={[11.644, 0.246, 4.411]} />
      <mesh geometry={nodes.front_glass.geometry} material={materials.Glass} position={[24.658, 3.396, -40.541]} scale={[11.644, 0.246, 4.411]} />
      <mesh geometry={nodes.monitor.geometry} material={materials.plateado} position={[0, 0, -22.474]} />
      <mesh geometry={nodes.monitor_screen.geometry} material={nodes.monitor_screen.material} position={[0, 0, -22.474]} />
      <group position={[18.526, 4.695, -43.393]} rotation={[0, -0.01, 0]} scale={[0.307, 0.371, 0.303]}>
        <mesh geometry={nodes.Plane018.geometry} material={materials.plastic_notebook} />
        <mesh geometry={nodes.Plane018_1.geometry} material={materials.blanco} />
        <mesh geometry={nodes.Plane018_2.geometry} material={materials.text} />
      </group>
      <mesh geometry={nodes.mouse_pad.geometry} material={materials.cyan} position={[16.158, 4.528, -43.23]} rotation={[0, 1.571, 0]} scale={[1.171, 1.318, 1.564]} />
      <mesh geometry={nodes.base_keyboard.geometry} material={materials.black} position={[14.75, 4.674, -43.422]} rotation={[0.05, 0, 0]} scale={[1.101, 0.287, 1.101]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['gloss black']} position={[12.667, 4.861, -44.069]} rotation={[0.044, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['gloss black']} position={[13.161, 4.862, -44.069]} rotation={[0.044, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['gloss black']} position={[13.401, 4.862, -44.069]} rotation={[0.044, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['gloss black']} position={[13.642, 4.862, -44.069]} rotation={[0.044, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials['gloss black']} position={[13.884, 4.862, -44.069]} rotation={[0.044, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials['gloss black']} position={[14.243, 4.862, -44.069]} rotation={[0.044, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['gloss black']} position={[14.483, 4.862, -44.069]} rotation={[0.044, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube010.geometry} material={materials['gloss black']} position={[14.725, 4.862, -44.069]} rotation={[0.044, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['gloss black']} position={[14.967, 4.862, -44.069]} rotation={[0.044, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube012.geometry} material={materials['gloss black']} position={[15.328, 4.862, -44.069]} rotation={[0.044, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube013.geometry} material={materials['gloss black']} position={[15.569, 4.862, -44.069]} rotation={[0.044, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube014.geometry} material={materials['gloss black']} position={[15.81, 4.862, -44.069]} rotation={[0.044, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube015.geometry} material={materials['gloss black']} position={[16.052, 4.862, -44.069]} rotation={[0.044, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube016.geometry} material={materials['gloss black']} position={[16.38, 4.862, -44.069]} rotation={[0.044, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube017.geometry} material={materials['gloss black']} position={[16.622, 4.862, -44.069]} rotation={[0.044, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube018.geometry} material={materials['gloss black']} position={[16.864, 4.862, -44.069]} rotation={[0.044, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube019.geometry} material={materials['gloss black']} position={[16.38, 4.842, -43.738]} rotation={[0.051, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube020.geometry} material={materials['gloss black']} position={[16.622, 4.842, -43.738]} rotation={[0.051, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube021.geometry} material={materials['gloss black']} position={[16.864, 4.842, -43.738]} rotation={[0.051, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube022.geometry} material={materials['gloss black']} position={[16.38, 4.831, -43.5]} rotation={[0.063, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube023.geometry} material={materials['gloss black']} position={[16.622, 4.831, -43.5]} rotation={[0.063, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube024.geometry} material={materials['gloss black']} position={[16.864, 4.831, -43.5]} rotation={[0.063, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube025.geometry} material={materials['gloss black']} position={[16.622, 4.806, -43.015]} rotation={[0.054, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube026.geometry} material={materials['gloss black']} position={[16.38, 4.795, -42.778]} rotation={[0.054, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube027.geometry} material={materials['gloss black']} position={[16.622, 4.795, -42.778]} rotation={[0.054, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube028.geometry} material={materials['gloss black']} position={[16.864, 4.795, -42.778]} rotation={[0.054, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube029.geometry} material={materials['gloss black']} position={[12.67, 4.842, -43.738]} rotation={[0.051, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube030.geometry} material={materials['gloss black']} position={[12.911, 4.842, -43.738]} rotation={[0.051, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube031.geometry} material={materials['gloss black']} position={[13.153, 4.842, -43.738]} rotation={[0.051, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube032.geometry} material={materials['gloss black']} position={[13.393, 4.842, -43.738]} rotation={[0.051, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube033.geometry} material={materials['gloss black']} position={[13.634, 4.842, -43.738]} rotation={[0.051, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube034.geometry} material={materials['gloss black']} position={[13.876, 4.842, -43.738]} rotation={[0.051, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube035.geometry} material={materials['gloss black']} position={[14.116, 4.842, -43.738]} rotation={[0.051, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube036.geometry} material={materials['gloss black']} position={[14.357, 4.842, -43.738]} rotation={[0.051, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube037.geometry} material={materials['gloss black']} position={[14.599, 4.842, -43.738]} rotation={[0.051, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube038.geometry} material={materials['gloss black']} position={[14.839, 4.842, -43.738]} rotation={[0.051, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube039.geometry} material={materials['gloss black']} position={[15.08, 4.842, -43.738]} rotation={[0.051, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube040.geometry} material={materials['gloss black']} position={[15.322, 4.842, -43.738]} rotation={[0.051, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube041.geometry} material={materials['gloss black']} position={[15.562, 4.842, -43.738]} rotation={[0.051, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube043.geometry} material={materials['gloss black']} position={[13.032, 4.829, -43.499]} rotation={[0.063, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube044.geometry} material={materials['gloss black']} position={[13.273, 4.829, -43.499]} rotation={[0.063, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube045.geometry} material={materials['gloss black']} position={[13.515, 4.829, -43.499]} rotation={[0.063, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube046.geometry} material={materials['gloss black']} position={[13.754, 4.829, -43.499]} rotation={[0.063, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube047.geometry} material={materials['gloss black']} position={[13.996, 4.829, -43.499]} rotation={[0.063, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube048.geometry} material={materials['gloss black']} position={[14.238, 4.829, -43.499]} rotation={[0.063, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube049.geometry} material={materials['gloss black']} position={[14.478, 4.829, -43.499]} rotation={[0.063, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube050.geometry} material={materials['gloss black']} position={[14.719, 4.829, -43.499]} rotation={[0.063, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube051.geometry} material={materials['gloss black']} position={[14.961, 4.829, -43.499]} rotation={[0.063, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube052.geometry} material={materials['gloss black']} position={[15.201, 4.829, -43.499]} rotation={[0.063, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube053.geometry} material={materials['gloss black']} position={[15.442, 4.829, -43.499]} rotation={[0.063, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube054.geometry} material={materials['gloss black']} position={[15.688, 4.829, -43.499]} rotation={[0.063, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube058.geometry} material={materials['gloss black']} position={[13.094, 4.816, -43.261]} rotation={[0.055, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube059.geometry} material={materials['gloss black']} position={[13.335, 4.816, -43.261]} rotation={[0.055, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube060.geometry} material={materials['gloss black']} position={[13.577, 4.816, -43.261]} rotation={[0.055, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube061.geometry} material={materials['gloss black']} position={[13.817, 4.816, -43.261]} rotation={[0.055, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube062.geometry} material={materials['gloss black']} position={[14.058, 4.816, -43.261]} rotation={[0.055, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube063.geometry} material={materials['gloss black']} position={[14.3, 4.816, -43.261]} rotation={[0.055, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube064.geometry} material={materials['gloss black']} position={[14.54, 4.816, -43.261]} rotation={[0.055, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube065.geometry} material={materials['gloss black']} position={[14.781, 4.816, -43.261]} rotation={[0.055, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube066.geometry} material={materials['gloss black']} position={[15.023, 4.816, -43.261]} rotation={[0.055, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube067.geometry} material={materials['gloss black']} position={[15.263, 4.816, -43.261]} rotation={[0.055, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube068.geometry} material={materials['gloss black']} position={[15.504, 4.816, -43.261]} rotation={[0.055, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube072.geometry} material={materials['gloss black']} position={[13.214, 4.804, -43.021]} rotation={[0.054, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube073.geometry} material={materials['gloss black']} position={[13.456, 4.804, -43.021]} rotation={[0.054, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube074.geometry} material={materials['gloss black']} position={[13.698, 4.804, -43.021]} rotation={[0.054, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube075.geometry} material={materials['gloss black']} position={[13.937, 4.804, -43.021]} rotation={[0.054, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube076.geometry} material={materials['gloss black']} position={[14.178, 4.804, -43.021]} rotation={[0.054, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube077.geometry} material={materials['gloss black']} position={[14.42, 4.804, -43.021]} rotation={[0.054, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube078.geometry} material={materials['gloss black']} position={[14.66, 4.804, -43.021]} rotation={[0.054, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube079.geometry} material={materials['gloss black']} position={[14.902, 4.804, -43.021]} rotation={[0.054, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube080.geometry} material={materials['gloss black']} position={[15.144, 4.804, -43.021]} rotation={[0.054, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube081.geometry} material={materials['gloss black']} position={[15.383, 4.804, -43.021]} rotation={[0.054, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube042.geometry} material={materials.cyan} position={[15.929, 4.769, -43.719]} rotation={[0.051, 0, 0]} scale={[2.55, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube055.geometry} material={materials.cyan} position={[15.988, 4.756, -43.483]} rotation={[0.063, 0, 0]} scale={[1.937, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube056.geometry} material={materials.cyan} position={[12.735, 4.756, -43.483]} rotation={[0.063, 0, 0]} scale={[1.937, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube057.geometry} material={materials.cyan} position={[12.763, 4.744, -43.243]} rotation={[0.054, 0, 0]} scale={[2.261, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube069.geometry} material={materials.cyan} position={[15.899, 4.744, -43.243]} rotation={[0.055, 0, 0]} scale={[2.888, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube070.geometry} material={materials.cyan} position={[15.84, 4.731, -42.998]} rotation={[0.054, 0, 0]} scale={[3.541, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube071.geometry} material={materials.cyan} position={[12.82, 4.728, -43.003]} rotation={[0.054, 0, 0]} scale={[2.907, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube082.geometry} material={materials.cyan} position={[12.702, 4.723, -42.76]} rotation={[0.054, 0, 0]} scale={[1.593, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube083.geometry} material={materials.cyan} position={[13.002, 4.723, -42.76]} rotation={[0.054, 0, 0]} scale={[1.593, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube084.geometry} material={materials.cyan} position={[13.311, 4.723, -42.76]} rotation={[0.054, 0, 0]} scale={[1.593, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube085.geometry} material={materials.cyan} position={[15.116, 4.723, -42.76]} rotation={[0.054, 0, 0]} scale={[1.593, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube086.geometry} material={materials.cyan} position={[15.416, 4.723, -42.76]} rotation={[0.054, 0, 0]} scale={[1.593, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube087.geometry} material={materials.cyan} position={[15.725, 4.723, -42.76]} rotation={[0.054, 0, 0]} scale={[1.593, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube089.geometry} material={materials.cyan} position={[16.022, 4.723, -42.76]} rotation={[0.054, 0, 0]} scale={[1.593, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube088.geometry} material={materials['Material.001']} position={[12.671, 4.764, -44.068]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube091.geometry} material={materials['Material.001']} position={[13.158, 4.764, -44.068]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube092.geometry} material={materials['Material.001']} position={[13.398, 4.764, -44.068]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube093.geometry} material={materials['Material.001']} position={[13.64, 4.764, -44.068]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube094.geometry} material={materials['Material.001']} position={[13.881, 4.764, -44.068]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube095.geometry} material={materials['Material.001']} position={[14.239, 4.764, -44.068]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube096.geometry} material={materials['Material.001']} position={[14.479, 4.764, -44.068]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube097.geometry} material={materials['Material.001']} position={[14.72, 4.764, -44.068]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube098.geometry} material={materials['Material.001']} position={[14.962, 4.764, -44.068]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube099.geometry} material={materials['Material.001']} position={[15.327, 4.764, -44.068]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube100.geometry} material={materials['Material.001']} position={[15.568, 4.764, -44.068]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube101.geometry} material={materials['Material.001']} position={[15.809, 4.764, -44.068]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube102.geometry} material={materials['Material.001']} position={[16.051, 4.764, -44.068]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube103.geometry} material={materials['Material.001']} position={[16.379, 4.764, -44.068]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube104.geometry} material={materials['Material.001']} position={[16.62, 4.764, -44.068]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube105.geometry} material={materials['Material.001']} position={[16.862, 4.764, -44.068]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube106.geometry} material={materials['Material.001']} position={[16.379, 4.747, -43.738]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube107.geometry} material={materials['Material.001']} position={[16.62, 4.747, -43.738]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube108.geometry} material={materials['Material.001']} position={[16.862, 4.747, -43.738]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube109.geometry} material={materials['Material.001']} position={[16.379, 4.734, -43.498]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube110.geometry} material={materials['Material.001']} position={[16.62, 4.734, -43.498]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube111.geometry} material={materials['Material.001']} position={[16.862, 4.734, -43.498]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube112.geometry} material={materials['Material.001']} position={[16.62, 4.71, -43.024]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube113.geometry} material={materials['Material.001']} position={[16.379, 4.698, -42.784]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube114.geometry} material={materials['Material.001']} position={[16.62, 4.698, -42.784]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube115.geometry} material={materials['Material.001']} position={[16.862, 4.698, -42.784]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube116.geometry} material={materials['Material.001']} position={[12.668, 4.747, -43.737]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube117.geometry} material={materials['Material.001']} position={[12.908, 4.747, -43.737]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube118.geometry} material={materials['Material.001']} position={[13.149, 4.747, -43.737]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube119.geometry} material={materials['Material.001']} position={[13.391, 4.747, -43.737]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube120.geometry} material={materials['Material.001']} position={[13.632, 4.747, -43.737]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube121.geometry} material={materials['Material.001']} position={[13.872, 4.747, -43.737]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube122.geometry} material={materials['Material.001']} position={[14.113, 4.747, -43.737]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube123.geometry} material={materials['Material.001']} position={[14.355, 4.747, -43.737]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube124.geometry} material={materials['Material.001']} position={[14.596, 4.747, -43.737]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube125.geometry} material={materials['Material.001']} position={[14.837, 4.747, -43.737]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube126.geometry} material={materials['Material.001']} position={[15.078, 4.747, -43.737]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube127.geometry} material={materials['Material.001']} position={[15.319, 4.747, -43.737]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube128.geometry} material={materials['Material.001']} position={[15.56, 4.747, -43.737]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube133.geometry} material={materials['Material.001']} position={[12.741, 4.734, -43.497]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube134.geometry} material={materials['Material.001']} position={[13.029, 4.734, -43.497]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube135.geometry} material={materials['Material.001']} position={[13.27, 4.734, -43.497]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube136.geometry} material={materials['Material.001']} position={[13.512, 4.734, -43.497]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube137.geometry} material={materials['Material.001']} position={[13.752, 4.734, -43.497]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube138.geometry} material={materials['Material.001']} position={[13.992, 4.734, -43.497]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube139.geometry} material={materials['Material.001']} position={[14.234, 4.734, -43.497]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube140.geometry} material={materials['Material.001']} position={[14.475, 4.734, -43.497]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube141.geometry} material={materials['Material.001']} position={[14.717, 4.734, -43.497]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube142.geometry} material={materials['Material.001']} position={[14.957, 4.734, -43.497]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube143.geometry} material={materials['Material.001']} position={[15.198, 4.734, -43.497]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube144.geometry} material={materials['Material.001']} position={[15.44, 4.734, -43.497]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube145.geometry} material={materials['Material.001']} position={[15.681, 4.734, -43.497]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube146.geometry} material={materials['Material.001']} position={[12.803, 4.722, -43.266]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube147.geometry} material={materials['Material.001']} position={[13.092, 4.722, -43.266]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube148.geometry} material={materials['Material.001']} position={[13.333, 4.722, -43.266]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube149.geometry} material={materials['Material.001']} position={[13.575, 4.722, -43.266]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube150.geometry} material={materials['Material.001']} position={[13.815, 4.722, -43.266]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube151.geometry} material={materials['Material.001']} position={[14.055, 4.722, -43.266]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube152.geometry} material={materials['Material.001']} position={[14.296, 4.722, -43.266]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube153.geometry} material={materials['Material.001']} position={[14.538, 4.722, -43.266]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube154.geometry} material={materials['Material.001']} position={[14.78, 4.722, -43.266]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube155.geometry} material={materials['Material.001']} position={[15.02, 4.722, -43.266]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube156.geometry} material={materials['Material.001']} position={[15.261, 4.722, -43.266]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube157.geometry} material={materials['Material.001']} position={[15.503, 4.722, -43.266]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube158.geometry} material={materials['Material.001']} position={[12.699, 4.698, -42.785]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube159.geometry} material={materials['Material.001']} position={[12.83, 4.71, -43.029]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube160.geometry} material={materials['Material.001']} position={[13.209, 4.71, -43.029]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube161.geometry} material={materials['Material.001']} position={[13.451, 4.71, -43.029]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube162.geometry} material={materials['Material.001']} position={[13.692, 4.71, -43.029]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube163.geometry} material={materials['Material.001']} position={[13.932, 4.71, -43.029]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube164.geometry} material={materials['Material.001']} position={[14.173, 4.71, -43.029]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube165.geometry} material={materials['Material.001']} position={[14.415, 4.71, -43.029]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube166.geometry} material={materials['Material.001']} position={[14.656, 4.71, -43.029]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube167.geometry} material={materials['Material.001']} position={[14.896, 4.71, -43.029]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube168.geometry} material={materials['Material.001']} position={[15.138, 4.71, -43.029]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube169.geometry} material={materials['Material.001']} position={[15.379, 4.71, -43.029]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube170.geometry} material={materials['Material.001']} position={[13.003, 4.698, -42.785]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube171.geometry} material={materials['Material.001']} position={[13.33, 4.698, -42.785]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube172.geometry} material={materials['Material.001']} position={[15.106, 4.698, -42.785]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube173.geometry} material={materials['Material.001']} position={[15.41, 4.698, -42.785]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube174.geometry} material={materials['Material.001']} position={[15.718, 4.698, -42.785]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube175.geometry} material={materials['Material.001']} position={[16.021, 4.698, -42.785]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube176.geometry} material={materials['Material.001']} position={[14.24, 4.698, -42.785]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube090.geometry} material={materials['gloss black']} position={[14.054, 4.723, -42.762]} rotation={[0.054, 0, 0]} scale={[1.242, 1.138, 1.242]} />
      <mesh geometry={nodes.Cube129.geometry} material={materials['Material.001']} position={[15.931, 4.747, -43.737]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube130.geometry} material={materials['Material.001']} position={[15.983, 4.735, -43.502]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube131.geometry} material={materials['Material.001']} position={[15.891, 4.722, -43.264]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Cube132.geometry} material={materials['Material.001']} position={[15.825, 4.71, -43.024]} rotation={[0.052, 0, 0]} scale={1.101} />
      <mesh geometry={nodes.Plane002.geometry} material={materials.text} position={[16.626, 4.813, -43.064]} scale={1.101} />
      <mesh geometry={nodes.Plane003.geometry} material={materials.text} position={[16.375, 4.797, -42.83]} rotation={[0, 1.571, 0]} scale={1.101} />
      <mesh geometry={nodes.Plane004.geometry} material={materials.text} position={[16.626, 4.804, -42.83]} rotation={[Math.PI, 0, Math.PI]} scale={1.101} />
      <mesh geometry={nodes.Plane005.geometry} material={materials.text} position={[15.725, 4.807, -42.811]} scale={[0.037, 0.054, 0.038]} />
      <mesh geometry={nodes.Plane006.geometry} material={materials.text} position={[14.19, 4.819, -42.815]} scale={[0.092, 0.054, 0.069]} />
      <mesh geometry={nodes.Plane007.geometry} material={materials.text} position={[15.195, 4.846, -43.069]} rotation={[0, -1.543, 0]} scale={0.577} />
      <mesh geometry={nodes.Plane008.geometry} material={materials.text} position={[14.922, 4.847, -43.069]} rotation={[-Math.PI, 1.543, -Math.PI]} scale={0.577} />
      <mesh geometry={nodes.Plane009.geometry} material={materials.text} position={[15.915, 4.854, -43.78]} rotation={[-Math.PI, 1.543, -Math.PI]} scale={0.577} />
      <mesh geometry={nodes.Plane010.geometry} material={materials.text} position={[13.003, 4.813, -42.818]} scale={0.034} />
      <mesh geometry={nodes.Plane012.geometry} material={materials.text} position={[14.155, 4.848, -43.785]} scale={1.101} />
      <mesh geometry={nodes.Plane001.geometry} material={materials.text} position={[16.872, 4.863, -42.83]} rotation={[0, -1.571, 0]} scale={1.101} />
      <mesh geometry={nodes.Text001.geometry} material={materials.text} position={[14.355, 4.852, -43.769]} scale={0.073} />
      <mesh geometry={nodes.Text002.geometry} material={materials.text} position={[14.113, 4.85, -43.769]} scale={0.073} />
      <mesh geometry={nodes.Text003.geometry} material={materials.text} position={[13.866, 4.88, -43.769]} scale={0.073} />
      <mesh geometry={nodes.Text004.geometry} material={materials.text} position={[13.631, 4.88, -43.769]} scale={0.073} />
      <mesh geometry={nodes.Text005.geometry} material={materials.text} position={[13.39, 4.852, -43.769]} scale={0.073} />
      <mesh geometry={nodes.Text006.geometry} material={materials.text} position={[13.156, 4.851, -43.769]} scale={0.073} />
      <mesh geometry={nodes.Text007.geometry} material={materials.text} position={[12.928, 4.852, -43.769]} scale={0.073} />
      <mesh geometry={nodes.Text008.geometry} material={materials.text} position={[12.683, 4.849, -43.769]} scale={0.073} />
      <mesh geometry={nodes.Text009.geometry} material={materials.text} position={[12.659, 4.873, -44.114]} scale={0.057} />
      <mesh geometry={nodes.Text011.geometry} material={materials.text} position={[13.165, 4.879, -44.138]} scale={0.059} />
      <mesh geometry={nodes.Text012.geometry} material={materials.text} position={[13.413, 4.874, -44.136]} scale={0.059} />
      <mesh geometry={nodes.Text013.geometry} material={materials.text} position={[13.658, 4.874, -44.124]} scale={0.059} />
      <mesh geometry={nodes.Text014.geometry} material={materials.text} position={[13.876, 4.876, -44.132]} rotation={[0, 0, 0.07]} scale={0.059} />
      <mesh geometry={nodes.Text015.geometry} material={materials.text} position={[14.259, 4.874, -44.117]} scale={0.059} />
      <mesh geometry={nodes.Text016.geometry} material={materials.text} position={[14.501, 4.874, -44.118]} scale={0.059} />
      <mesh geometry={nodes.Text017.geometry} material={materials.text} position={[14.716, 4.877, -44.135]} scale={0.059} />
      <mesh geometry={nodes.Text018.geometry} material={materials.text} position={[14.984, 4.874, -44.123]} scale={0.059} />
      <mesh geometry={nodes.Text019.geometry} material={materials.text} position={[15.341, 4.874, -44.13]} scale={0.059} />
      <mesh geometry={nodes.Text020.geometry} material={materials.text} position={[15.581, 4.875, -44.126]} scale={0.059} />
      <mesh geometry={nodes.Text021.geometry} material={materials.text} position={[15.816, 4.875, -44.138]} scale={0.059} />
      <mesh geometry={nodes.Text022.geometry} material={materials.text} position={[16.073, 4.876, -44.136]} scale={0.059} />
      <mesh geometry={nodes.Text023.geometry} material={materials.text} position={[16.597, 4.872, -44.1]} scale={0.053} />
      <mesh geometry={nodes.Text024.geometry} material={materials.text} position={[14.615, 4.855, -43.769]} scale={0.073} />
      <mesh geometry={nodes.Text025.geometry} material={materials.text} position={[14.84, 4.852, -43.769]} scale={0.073} />
      <mesh geometry={nodes.Text026.geometry} material={materials.text} position={[15.078, 4.854, -43.769]} scale={0.073} />
      <mesh geometry={nodes.Text027.geometry} material={materials.text} position={[15.339, 4.879, -43.787]} scale={0.073} />
      <mesh geometry={nodes.Text028.geometry} material={materials.text} position={[15.564, 4.856, -43.769]} scale={0.073} />
      <mesh geometry={nodes.Text029.geometry} material={materials.text} position={[16.349, 4.873, -44.1]} scale={0.053} />
      <mesh geometry={nodes.Text030.geometry} material={materials.text} position={[16.828, 4.877, -44.1]} scale={0.053} />
      <mesh geometry={nodes.Text031.geometry} material={materials.text} position={[16.391, 4.848, -43.784]} scale={0.053} />
      <mesh geometry={nodes.Text032.geometry} material={materials.text} position={[16.595, 4.858, -43.784]} scale={0.053} />
      <mesh geometry={nodes.Text033.geometry} material={materials.text} position={[16.826, 4.859, -43.784]} scale={0.053} />
      <mesh geometry={nodes.Text034.geometry} material={materials.text} position={[16.377, 4.84, -43.542]} scale={0.053} />
      <mesh geometry={nodes.Text035.geometry} material={materials.text} position={[16.613, 4.843, -43.542]} scale={0.053} />
      <mesh geometry={nodes.Text036.geometry} material={materials.text} position={[16.826, 4.848, -43.542]} scale={0.053} />
      <mesh geometry={nodes.Text037.geometry} material={materials.text} position={[15.875, 4.826, -43.304]} scale={0.053} />
      <mesh geometry={nodes.Text038.geometry} material={materials.text} position={[15.812, 4.814, -43.058]} scale={0.053} />
      <mesh geometry={nodes.Text039.geometry} material={materials.text} position={[16.016, 4.802, -42.815]} scale={0.053} />
      <mesh geometry={nodes.Text040.geometry} material={materials.text} position={[15.424, 4.801, -42.815]} scale={0.053} />
      <mesh geometry={nodes.Text041.geometry} material={materials.text} position={[15.113, 4.807, -42.815]} scale={0.053} />
      <mesh geometry={nodes.Text042.geometry} material={materials.text} position={[12.725, 4.841, -43.542]} scale={0.053} />
      <mesh geometry={nodes.Text043.geometry} material={materials.text} position={[12.725, 4.824, -43.291]} scale={0.053} />
      <mesh geometry={nodes.Text044.geometry} material={materials.text} position={[12.794, 4.807, -43.063]} scale={0.053} />
      <mesh geometry={nodes.Text045.geometry} material={materials.text} position={[12.696, 4.802, -42.815]} scale={0.053} />
      <mesh geometry={nodes.Text046.geometry} material={materials.text} position={[13.313, 4.807, -42.815]} scale={0.053} />
      <mesh geometry={nodes.Text047.geometry} material={materials.text} position={[13.055, 4.838, -43.534]} scale={0.073} />
      <mesh geometry={nodes.Text048.geometry} material={materials.text} position={[13.294, 4.84, -43.534]} scale={0.073} />
      <mesh geometry={nodes.Text049.geometry} material={materials.text} position={[13.523, 4.838, -43.547]} scale={0.073} />
      <mesh geometry={nodes.Text050.geometry} material={materials.text} position={[13.764, 4.837, -43.547]} scale={0.073} />
      <mesh geometry={nodes.Text051.geometry} material={materials.text} position={[14.004, 4.838, -43.547]} scale={0.073} />
      <mesh geometry={nodes.Text052.geometry} material={materials.text} position={[14.242, 4.837, -43.547]} scale={0.073} />
      <mesh geometry={nodes.Text053.geometry} material={materials.text} position={[14.479, 4.838, -43.547]} scale={0.073} />
      <mesh geometry={nodes.Text054.geometry} material={materials.text} position={[14.741, 4.841, -43.547]} scale={0.073} />
      <mesh geometry={nodes.Text055.geometry} material={materials.text} position={[14.956, 4.838, -43.547]} scale={0.073} />
      <mesh geometry={nodes.Text056.geometry} material={materials.text} position={[15.203, 4.838, -43.547]} scale={0.073} />
      <mesh geometry={nodes.Text057.geometry} material={materials.text} position={[15.425, 4.838, -43.547]} scale={0.073} />
      <mesh geometry={nodes.Text058.geometry} material={materials.text} position={[15.681, 4.838, -43.547]} scale={0.073} />
      <mesh geometry={nodes.Text059.geometry} material={materials.text} position={[15.964, 4.838, -43.547]} scale={0.073} />
      <mesh geometry={nodes.Text060.geometry} material={materials.text} position={[15.496, 4.825, -43.309]} scale={0.073} />
      <mesh geometry={nodes.Text061.geometry} material={materials.text} position={[15.259, 4.822, -43.331]} scale={0.073} />
      <mesh geometry={nodes.Text062.geometry} material={materials.text} position={[15.028, 4.826, -43.309]} scale={0.073} />
      <mesh geometry={nodes.Text063.geometry} material={materials.text} position={[14.783, 4.826, -43.309]} scale={0.073} />
      <mesh geometry={nodes.Text064.geometry} material={materials.text} position={[14.54, 4.822, -43.309]} scale={0.073} />
      <mesh geometry={nodes.Text065.geometry} material={materials.text} position={[14.3, 4.822, -43.309]} scale={0.073} />
      <mesh geometry={nodes.Text066.geometry} material={materials.text} position={[14.047, 4.826, -43.309]} scale={0.073} />
      <mesh geometry={nodes.Text067.geometry} material={materials.text} position={[13.826, 4.825, -43.309]} scale={0.073} />
      <mesh geometry={nodes.Text068.geometry} material={materials.text} position={[13.58, 4.822, -43.309]} scale={0.073} />
      <mesh geometry={nodes.Text069.geometry} material={materials.text} position={[13.34, 4.825, -43.309]} scale={0.073} />
      <mesh geometry={nodes.Text070.geometry} material={materials.text} position={[13.082, 4.822, -43.309]} scale={0.073} />
      <mesh geometry={nodes.Text071.geometry} material={materials.text} position={[15.133, 4.811, -43.077]} scale={0.073} />
      <mesh geometry={nodes.Text072.geometry} material={materials.text} position={[14.883, 4.81, -43.083]} scale={0.073} />
      <mesh geometry={nodes.Text073.geometry} material={materials.text} position={[14.652, 4.811, -43.067]} scale={0.073} />
      <mesh geometry={nodes.Text074.geometry} material={materials.text} position={[14.419, 4.81, -43.067]} scale={0.073} />
      <mesh geometry={nodes.Text075.geometry} material={materials.text} position={[14.182, 4.814, -43.067]} scale={0.073} />
      <mesh geometry={nodes.Text076.geometry} material={materials.text} position={[13.932, 4.814, -43.067]} scale={0.073} />
      <mesh geometry={nodes.Text077.geometry} material={materials.text} position={[13.69, 4.81, -43.067]} scale={0.073} />
      <mesh geometry={nodes.Text078.geometry} material={materials.text} position={[13.458, 4.813, -43.067]} scale={0.073} />
      <mesh geometry={nodes.Text079.geometry} material={materials.text} position={[13.216, 4.813, -43.067]} scale={0.073} />
      <mesh geometry={nodes.Text080.geometry} material={materials.text} position={[15.356, 4.817, -43.067]} scale={0.073} />
    </a.group>
    </>
  );
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url)
  return(
    <meshBasicMaterial map={texture} />
    
  )
}

export default Room;

/*
const execute = new Promise(function(resolve, reject){
        resolve(names.forEach(element => 
          {actions[element].reset().fadeIn(1).play()}
        ))
      })
      
      execute().then()



      <mesh geometry={nodes.top_notebook002.geometry} material={nodes.top_notebook002.material} position={[-4.913, 1.786, 4.77]} rotation={[0.001, -1.199, 1.579]} scale={[1.374, 0.03, 2.151]} >
        <VideoMaterial url={vidBeach} />
      </mesh>
            
*/