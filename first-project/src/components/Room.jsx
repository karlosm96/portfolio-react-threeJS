import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { a } from '@react-spring/three';
import room from '../assets/textures/room.glb'

import Book from "./Book";
import Poring from "./Poring";

export function Room( {scale, position} ) {

  const { nodes, materials } = useGLTF(room)

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
      <mesh geometry={nodes.program004.geometry} material={materials['clean_code.001']} position={[11.379, 0.088, 0.014]} rotation={[0, -0.746, 0]} scale={[1.208, 0.891, 1.208]} />
      <mesh geometry={nodes.program005.geometry} material={materials['react.001']} position={[13.122, 0.542, 0.014]} rotation={[-0.131, -0.719, -0.317]} scale={[1.208, 0.891, 1.208]} />
      <mesh geometry={nodes.program006.geometry} material={materials['javascript.001']} position={[10.124, 0.134, -1.264]} rotation={[0.151, -0.837, 0.335]} scale={[1.208, 0.891, 1.208]} />
      <mesh geometry={nodes.table_base001.geometry} material={materials['wood_floor.001']} position={[-1.988, -2.646, 3.052]} rotation={[0, 1.562, 0]} scale={[-6.288, -6.876, -6.288]} />
      <mesh geometry={nodes.table_main002.geometry} material={materials['ground.003']} position={[8.004, -0.736, 3.168]} rotation={[0, 1.562, 0]} scale={[5.697, 0.573, 1]} />
      <mesh geometry={nodes.table_main003.geometry} material={materials['ground.003']} position={[-12.082, -0.736, 2.984]} rotation={[0, 1.562, -Math.PI]} scale={[-5.697, -0.573, -1]} />
      <mesh geometry={nodes.cristal001.geometry} material={materials.Glass} position={[-2.033, 0.783, 2.56]} rotation={[0, 1.562, 0]} scale={[6.088, 0.038, 6.088]} />
      <mesh geometry={nodes.bot_notebook001.geometry} material={materials['plastic_notebook.001']} position={[-4.395, 0.037, 5.83]} rotation={[-3.136, 1.193, 3.136]} scale={[1.374, 0.551, 2.152]} />
      <mesh geometry={nodes.button001.geometry} material={nodes.button001.material} position={[-5.639, 0.189, 6.769]} rotation={[0, 0.592, 0]} scale={[0.179, 0.035, 0.042]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['plastic_notebook.001']} position={[-4.358, 0.037, 5.924]} rotation={[-3.136, 1.193, 3.136]} scale={[1.374, 0.551, 2.152]} />
      <a.group position={[-6.425, 0.252, 5.95]} rotation={[0, 0.377, 0]} scale={[-0.159, -0.015, -0.018]}>
        <mesh geometry={nodes.Cube041.geometry} material={materials.verde} />
        <mesh geometry={nodes.Cube041_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <a.group position={[-1.093, 0.135, 5.185]} rotation={[0, 0.639, 0]} scale={[0.307, 0.371, 0.303]}>
        <mesh geometry={nodes.Plane005.geometry} material={materials.plastic_notebook} />
        <mesh geometry={nodes.Plane005_1.geometry} material={materials['clic.001']} />
        <mesh geometry={nodes.Plane005_2.geometry} material={materials.blanco} />
        <mesh geometry={nodes.Plane005_3.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.notebook_screen001.geometry} material={nodes.notebook_screen001.material} position={[-4.886, 1.791, 4.659]} rotation={[3.13, 1.2, 0.002]} scale={[-0.015, -1.078, -2.06]} />
      <mesh geometry={nodes.padd001.geometry} material={materials.plateado} position={[-4.66, 0.206, 7.053]} rotation={[0, 0.377, 0]} scale={1.255} />
      <mesh geometry={nodes.top_notebook001.geometry} material={materials.plastic_notebook} position={[-4.772, 1.323, 4.615]} rotation={[0.001, -1.199, 1.579]} scale={[1.374, 0.03, 2.151]} />
      <a.group position={[-2.538, 0.111, 4.354]} rotation={[0, 0.366, 0]} scale={0.195}>
        <mesh geometry={nodes.Cube044.geometry} material={materials['clic.001']} />
        <mesh geometry={nodes.Cube044_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <a.group position={[-6.438, 0.206, 6.143]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube045.geometry} material={nodes.Cube045.material} />
        <mesh geometry={nodes.Cube045_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key105.geometry} material={nodes.key105.material} position={[-6.438, 0.212, 6.143]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <a.group position={[-3.369, 0.206, 4.929]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube049.geometry} material={materials.verde} />
        <mesh geometry={nodes.Cube049_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key119.geometry} material={nodes.key119.material} position={[-3.369, 0.212, 4.929]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <a.group position={[-6.383, 0.206, 6.283]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube051.geometry} material={nodes.Cube051.material} />
        <mesh geometry={nodes.Cube051_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key143.geometry} material={nodes.key143.material} position={[-6.383, 0.212, 6.283]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key150.geometry} material={materials['verde.brilla']} position={[-3.313, 0.206, 5.069]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key151.geometry} material={nodes.key151.material} position={[-3.313, 0.212, 5.069]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-6.236, 0.206, 6.063]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube055.geometry} material={nodes.Cube055.material} />
        <mesh geometry={nodes.Cube055_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key157.geometry} material={nodes.key157.material} position={[-6.236, 0.212, 6.063]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <a.group position={[-6.033, 0.206, 5.983]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube057.geometry} material={nodes.Cube057.material} />
        <mesh geometry={nodes.Cube057_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key179.geometry} material={nodes.key179.material} position={[-6.033, 0.212, 5.983]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <a.group position={[-5.831, 0.206, 5.903]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube059.geometry} material={nodes.Cube059.material} />
        <mesh geometry={nodes.Cube059_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key181.geometry} material={nodes.key181.material} position={[-5.831, 0.212, 5.903]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <a.group position={[-5.628, 0.206, 5.823]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube061.geometry} material={nodes.Cube061.material} />
        <mesh geometry={nodes.Cube061_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key189.geometry} material={nodes.key189.material} position={[-5.628, 0.212, 5.823]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <a.group position={[-5.426, 0.206, 5.743]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube063.geometry} material={nodes.Cube063.material} />
        <mesh geometry={nodes.Cube063_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key203.geometry} material={nodes.key203.material} position={[-5.426, 0.212, 5.743]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <a.group position={[-5.223, 0.206, 5.663]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube065.geometry} material={nodes.Cube065.material} />
        <mesh geometry={nodes.Cube065_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key205.geometry} material={nodes.key205.material} position={[-5.223, 0.212, 5.663]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <a.group position={[-5.021, 0.206, 5.582]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube067.geometry} material={nodes.Cube067.material} />
        <mesh geometry={nodes.Cube067_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key207.geometry} material={nodes.key207.material} position={[-5.021, 0.212, 5.582]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <a.group position={[-4.818, 0.206, 5.502]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube069.geometry} material={nodes.Cube069.material} />
        <mesh geometry={nodes.Cube069_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key209.geometry} material={nodes.key209.material} position={[-4.818, 0.212, 5.502]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <a.group position={[-4.616, 0.206, 5.422]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube071.geometry} material={nodes.Cube071.material} />
        <mesh geometry={nodes.Cube071_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key211.geometry} material={nodes.key211.material} position={[-4.616, 0.212, 5.422]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <a.group position={[-4.413, 0.206, 5.342]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube073.geometry} material={nodes.Cube073.material} />
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key223.geometry} material={nodes.key223.material} position={[-4.413, 0.212, 5.342]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <a.group position={[-4.211, 0.206, 5.262]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube075.geometry} material={nodes.Cube075.material} />
        <mesh geometry={nodes.Cube075_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key229.geometry} material={nodes.key229.material} position={[-4.211, 0.212, 5.262]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <a.group position={[-4.008, 0.206, 5.182]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube079.geometry} material={nodes.Cube079.material} />
        <mesh geometry={nodes.Cube079_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key231.geometry} material={nodes.key231.material} position={[-4.008, 0.212, 5.182]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <a.group position={[-3.806, 0.206, 5.102]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube081.geometry} material={nodes.Cube081.material} />
        <mesh geometry={nodes.Cube081_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key233.geometry} material={nodes.key233.material} position={[-3.806, 0.212, 5.102]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <a.group position={[-3.604, 0.206, 5.022]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube083.geometry} material={nodes.Cube083.material} />
        <mesh geometry={nodes.Cube083_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key235.geometry} material={nodes.key235.material} position={[-3.604, 0.212, 5.022]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <a.group position={[-6.202, 0.206, 6.211]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube085.geometry} material={nodes.Cube085.material} />
        <mesh geometry={nodes.Cube085_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key237.geometry} material={nodes.key237.material} position={[-6.202, 0.212, 6.211]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-6, 0.206, 6.131]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube087.geometry} material={nodes.Cube087.material} />
        <mesh geometry={nodes.Cube087_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key239.geometry} material={nodes.key239.material} position={[-6, 0.212, 6.131]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.797, 0.206, 6.051]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube089.geometry} material={nodes.Cube089.material} />
        <mesh geometry={nodes.Cube089_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key241.geometry} material={nodes.key241.material} position={[-5.797, 0.212, 6.051]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.595, 0.206, 5.971]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube091.geometry} material={nodes.Cube091.material} />
        <mesh geometry={nodes.Cube091_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key243.geometry} material={nodes.key243.material} position={[-5.595, 0.212, 5.971]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.392, 0.206, 5.891]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube093.geometry} material={nodes.Cube093.material} />
        <mesh geometry={nodes.Cube093_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key245.geometry} material={nodes.key245.material} position={[-5.392, 0.212, 5.891]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.19, 0.206, 5.811]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube095.geometry} material={nodes.Cube095.material} />
        <mesh geometry={nodes.Cube095_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key247.geometry} material={nodes.key247.material} position={[-5.19, 0.212, 5.811]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.987, 0.206, 5.731]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube097.geometry} material={nodes.Cube097.material} />
        <mesh geometry={nodes.Cube097_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key249.geometry} material={nodes.key249.material} position={[-4.987, 0.212, 5.731]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.785, 0.206, 5.651]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube099.geometry} material={nodes.Cube099.material} />
        <mesh geometry={nodes.Cube099_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key251.geometry} material={nodes.key251.material} position={[-4.785, 0.212, 5.651]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.582, 0.206, 5.571]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube101.geometry} material={nodes.Cube101.material} />
        <mesh geometry={nodes.Cube101_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key253.geometry} material={nodes.key253.material} position={[-4.582, 0.212, 5.571]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.38, 0.206, 5.491]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube103.geometry} material={nodes.Cube103.material} />
        <mesh geometry={nodes.Cube103_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key255.geometry} material={nodes.key255.material} position={[-4.38, 0.212, 5.491]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.177, 0.206, 5.411]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube105.geometry} material={nodes.Cube105.material} />
        <mesh geometry={nodes.Cube105_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key257.geometry} material={nodes.key257.material} position={[-4.177, 0.212, 5.411]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-3.975, 0.206, 5.331]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube107.geometry} material={nodes.Cube107.material} />
        <mesh geometry={nodes.Cube107_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key259.geometry} material={nodes.key259.material} position={[-3.975, 0.212, 5.331]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-3.548, 0.206, 5.162]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube109.geometry} material={nodes.Cube109.material} />
        <mesh geometry={nodes.Cube109_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key261.geometry} material={nodes.key261.material} position={[-3.548, 0.212, 5.162]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-3.165, 0.206, 4.849]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube111.geometry} material={materials.verde} />
        <mesh geometry={nodes.Cube111_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key263.geometry} material={nodes.key263.material} position={[-3.165, 0.212, 4.849]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <a.group position={[-2.961, 0.206, 4.768]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube165.geometry} material={materials.verde} />
        <mesh geometry={nodes.Cube165_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key265.geometry} material={nodes.key265.material} position={[-2.961, 0.212, 4.768]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <a.group position={[-2.757, 0.206, 4.687]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]}>
        <mesh geometry={nodes.Cube209.geometry} material={materials.verde} />
        <mesh geometry={nodes.Cube209_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key267.geometry} material={nodes.key267.material} position={[-2.757, 0.212, 4.687]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.044]} />
      <mesh geometry={nodes.key268.geometry} material={materials['verde.brilla']} position={[-3.11, 0.206, 4.989]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key269.geometry} material={nodes.key269.material} position={[-3.11, 0.212, 4.989]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key270.geometry} material={materials['verde.brilla']} position={[-2.906, 0.206, 4.908]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key271.geometry} material={nodes.key271.material} position={[-2.906, 0.212, 4.908]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key272.geometry} material={materials['verde.brilla']} position={[-2.702, 0.206, 4.827]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key273.geometry} material={nodes.key273.material} position={[-2.702, 0.212, 4.827]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-6.308, 0.206, 6.472]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube261.geometry} material={nodes.Cube261.material} />
        <mesh geometry={nodes.Cube261_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key275.geometry} material={nodes.key275.material} position={[-6.308, 0.212, 6.472]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key276.geometry} material={materials['verde.brilla']} position={[-3.238, 0.206, 5.259]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key277.geometry} material={nodes.key277.material} position={[-3.238, 0.212, 5.259]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.968, 0.206, 6.338]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube285.geometry} material={nodes.Cube285.material} />
        <mesh geometry={nodes.Cube285_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key279.geometry} material={nodes.key279.material} position={[-5.968, 0.212, 6.338]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.766, 0.206, 6.258]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube293.geometry} material={nodes.Cube293.material} />
        <mesh geometry={nodes.Cube293_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key281.geometry} material={nodes.key281.material} position={[-5.766, 0.212, 6.258]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.563, 0.206, 6.178]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube307.geometry} material={nodes.Cube307.material} />
        <mesh geometry={nodes.Cube307_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key283.geometry} material={nodes.key283.material} position={[-5.563, 0.212, 6.178]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.361, 0.206, 6.098]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube309.geometry} material={nodes.Cube309.material} />
        <mesh geometry={nodes.Cube309_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key285.geometry} material={nodes.key285.material} position={[-5.361, 0.212, 6.098]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.158, 0.206, 6.018]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube311.geometry} material={nodes.Cube311.material} />
        <mesh geometry={nodes.Cube311_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key287.geometry} material={nodes.key287.material} position={[-5.158, 0.212, 6.018]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.956, 0.206, 5.938]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube313.geometry} material={nodes.Cube313.material} />
        <mesh geometry={nodes.Cube313_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key289.geometry} material={nodes.key289.material} position={[-4.956, 0.212, 5.938]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.753, 0.206, 5.858]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube315.geometry} material={nodes.Cube315.material} />
        <mesh geometry={nodes.Cube315_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key291.geometry} material={nodes.key291.material} position={[-4.753, 0.212, 5.858]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.551, 0.206, 5.778]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube327.geometry} material={nodes.Cube327.material} />
        <mesh geometry={nodes.Cube327_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key293.geometry} material={nodes.key293.material} position={[-4.551, 0.212, 5.778]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.348, 0.206, 5.698]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube336.geometry} material={nodes.Cube336.material} />
        <mesh geometry={nodes.Cube336_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key295.geometry} material={nodes.key295.material} position={[-4.348, 0.212, 5.698]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.146, 0.206, 5.618]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube338.geometry} material={nodes.Cube338.material} />
        <mesh geometry={nodes.Cube338_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key297.geometry} material={nodes.key297.material} position={[-4.146, 0.212, 5.618]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-3.943, 0.206, 5.538]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube340.geometry} material={nodes.Cube340.material} />
        <mesh geometry={nodes.Cube340_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key299.geometry} material={nodes.key299.material} position={[-3.943, 0.212, 5.538]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-3.741, 0.206, 5.457]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube342.geometry} material={nodes.Cube342.material} />
        <mesh geometry={nodes.Cube342_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key301.geometry} material={nodes.key301.material} position={[-3.741, 0.212, 5.457]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-3.473, 0.206, 5.352]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube344.geometry} material={nodes.Cube344.material} />
        <mesh geometry={nodes.Cube344_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key303.geometry} material={nodes.key303.material} position={[-3.473, 0.212, 5.352]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key304.geometry} material={materials['verde.brilla']} position={[-3.035, 0.206, 5.178]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key305.geometry} material={nodes.key305.material} position={[-3.035, 0.212, 5.178]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key306.geometry} material={materials['verde.brilla']} position={[-2.831, 0.206, 5.098]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key307.geometry} material={nodes.key307.material} position={[-2.831, 0.212, 5.098]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key308.geometry} material={materials['verde.brilla']} position={[-2.627, 0.206, 5.017]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key309.geometry} material={nodes.key309.material} position={[-2.627, 0.212, 5.017]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-6.233, 0.206, 6.662]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube352.geometry} material={nodes.Cube352.material} />
        <mesh geometry={nodes.Cube352_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key311.geometry} material={nodes.key311.material} position={[-6.233, 0.212, 6.662]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key312.geometry} material={materials['verde.brilla']} position={[-3.164, 0.206, 5.448]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key313.geometry} material={nodes.key313.material} position={[-3.164, 0.212, 5.448]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.878, 0.206, 6.522]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube356.geometry} material={nodes.Cube356.material} />
        <mesh geometry={nodes.Cube356_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key315.geometry} material={nodes.key315.material} position={[-5.878, 0.212, 6.522]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.675, 0.206, 6.442]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube358.geometry} material={nodes.Cube358.material} />
        <mesh geometry={nodes.Cube358_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key317.geometry} material={nodes.key317.material} position={[-5.675, 0.212, 6.442]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.473, 0.206, 6.362]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube360.geometry} material={nodes.Cube360.material} />
        <mesh geometry={nodes.Cube360_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key319.geometry} material={nodes.key319.material} position={[-5.473, 0.212, 6.362]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.27, 0.206, 6.282]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube362.geometry} material={nodes.Cube362.material} />
        <mesh geometry={nodes.Cube362_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key321.geometry} material={nodes.key321.material} position={[-5.27, 0.212, 6.282]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.068, 0.206, 6.201]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube364.geometry} material={nodes.Cube364.material} />
        <mesh geometry={nodes.Cube364_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key323.geometry} material={nodes.key323.material} position={[-5.068, 0.212, 6.201]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.866, 0.206, 6.121]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube366.geometry} material={nodes.Cube366.material} />
        <mesh geometry={nodes.Cube366_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key325.geometry} material={nodes.key325.material} position={[-4.866, 0.212, 6.121]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.663, 0.206, 6.041]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube368.geometry} material={nodes.Cube368.material} />
        <mesh geometry={nodes.Cube368_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key327.geometry} material={nodes.key327.material} position={[-4.663, 0.212, 6.041]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.461, 0.206, 5.961]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube370.geometry} material={nodes.Cube370.material} />
        <mesh geometry={nodes.Cube370_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key329.geometry} material={nodes.key329.material} position={[-4.461, 0.212, 5.961]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.258, 0.206, 5.881]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube372.geometry} material={nodes.Cube372.material} />
        <mesh geometry={nodes.Cube372_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key331.geometry} material={nodes.key331.material} position={[-4.258, 0.212, 5.881]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.056, 0.206, 5.801]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube374.geometry} material={nodes.Cube374.material} />
        <mesh geometry={nodes.Cube374_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key333.geometry} material={nodes.key333.material} position={[-4.056, 0.212, 5.801]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-3.853, 0.206, 5.721]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube376.geometry} material={nodes.Cube376.material} />
        <mesh geometry={nodes.Cube376_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key335.geometry} material={nodes.key335.material} position={[-3.853, 0.212, 5.721]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-3.398, 0.206, 5.541]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube378.geometry} material={nodes.Cube378.material} />
        <mesh geometry={nodes.Cube378_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key337.geometry} material={nodes.key337.material} position={[-3.398, 0.212, 5.541]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key338.geometry} material={materials['verde.brilla']} position={[-2.96, 0.206, 5.368]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key339.geometry} material={nodes.key339.material} position={[-2.96, 0.212, 5.368]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key340.geometry} material={materials['verde.brilla']} position={[-2.756, 0.206, 5.287]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key341.geometry} material={nodes.key341.material} position={[-2.756, 0.212, 5.287]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-6.158, 0.206, 6.852]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube384.geometry} material={nodes.Cube384.material} />
        <mesh geometry={nodes.Cube384_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key343.geometry} material={nodes.key343.material} position={[-6.158, 0.212, 6.852]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key344.geometry} material={materials['verde.brilla']} position={[-3.089, 0.206, 5.638]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key345.geometry} material={nodes.key345.material} position={[-3.089, 0.212, 5.638]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.713, 0.206, 6.676]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube388.geometry} material={nodes.Cube388.material} />
        <mesh geometry={nodes.Cube388_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key347.geometry} material={nodes.key347.material} position={[-5.713, 0.212, 6.676]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.51, 0.206, 6.596]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube390.geometry} material={nodes.Cube390.material} />
        <mesh geometry={nodes.Cube390_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key349.geometry} material={nodes.key349.material} position={[-5.51, 0.212, 6.596]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.308, 0.206, 6.515]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube392.geometry} material={nodes.Cube392.material} />
        <mesh geometry={nodes.Cube392_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key351.geometry} material={nodes.key351.material} position={[-5.308, 0.212, 6.515]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.105, 0.206, 6.435]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube394.geometry} material={nodes.Cube394.material} />
        <mesh geometry={nodes.Cube394_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key353.geometry} material={nodes.key353.material} position={[-5.105, 0.212, 6.435]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.903, 0.206, 6.355]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube396.geometry} material={nodes.Cube396.material} />
        <mesh geometry={nodes.Cube396_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key355.geometry} material={nodes.key355.material} position={[-4.903, 0.212, 6.355]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.7, 0.206, 6.275]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube398.geometry} material={nodes.Cube398.material} />
        <mesh geometry={nodes.Cube398_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key357.geometry} material={nodes.key357.material} position={[-4.7, 0.212, 6.275]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.498, 0.206, 6.195]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube400.geometry} material={nodes.Cube400.material} />
        <mesh geometry={nodes.Cube400_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key359.geometry} material={nodes.key359.material} position={[-4.498, 0.212, 6.195]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.295, 0.206, 6.115]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube402.geometry} material={nodes.Cube402.material} />
        <mesh geometry={nodes.Cube402_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key361.geometry} material={nodes.key361.material} position={[-4.295, 0.212, 6.115]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.093, 0.206, 6.035]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube404.geometry} material={nodes.Cube404.material} />
        <mesh geometry={nodes.Cube404_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key363.geometry} material={nodes.key363.material} position={[-4.093, 0.212, 6.035]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-3.89, 0.206, 5.955]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube406.geometry} material={nodes.Cube406.material} />
        <mesh geometry={nodes.Cube406_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key365.geometry} material={nodes.key365.material} position={[-3.89, 0.212, 5.955]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-3.323, 0.206, 5.731]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube408.geometry} material={nodes.Cube408.material} />
        <mesh geometry={nodes.Cube408_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key367.geometry} material={nodes.key367.material} position={[-3.323, 0.212, 5.731]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key368.geometry} material={materials['verde.brilla']} position={[-2.885, 0.206, 5.557]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key369.geometry} material={nodes.key369.material} position={[-2.885, 0.212, 5.557]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key370.geometry} material={materials['verde.brilla']} position={[-2.681, 0.206, 5.477]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key371.geometry} material={nodes.key371.material} position={[-2.681, 0.212, 5.477]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-6.083, 0.206, 7.041]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube414.geometry} material={nodes.Cube414.material} />
        <mesh geometry={nodes.Cube414_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key373.geometry} material={nodes.key373.material} position={[-6.083, 0.212, 7.041]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key374.geometry} material={materials['verde.brilla']} position={[-3.014, 0.206, 5.828]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key375.geometry} material={nodes.key375.material} position={[-3.014, 0.212, 5.828]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.88, 0.206, 6.961]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube418.geometry} material={nodes.Cube418.material} />
        <mesh geometry={nodes.Cube418_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key377.geometry} material={nodes.key377.material} position={[-5.88, 0.212, 6.961]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.678, 0.206, 6.881]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube420.geometry} material={nodes.Cube420.material} />
        <mesh geometry={nodes.Cube420_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key379.geometry} material={nodes.key379.material} position={[-5.678, 0.212, 6.881]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.475, 0.206, 6.801]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube422.geometry} material={nodes.Cube422.material} />
        <mesh geometry={nodes.Cube422_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key381.geometry} material={nodes.key381.material} position={[-5.475, 0.212, 6.801]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-5.273, 0.206, 6.721]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube424.geometry} material={nodes.Cube424.material} />
        <mesh geometry={nodes.Cube424_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key383.geometry} material={nodes.key383.material} position={[-5.273, 0.212, 6.721]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-4.058, 0.206, 6.241]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube426.geometry} material={nodes.Cube426.material} />
        <mesh geometry={nodes.Cube426_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key385.geometry} material={nodes.key385.material} position={[-4.058, 0.212, 6.241]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-3.856, 0.206, 6.161]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube428.geometry} material={nodes.Cube428.material} />
        <mesh geometry={nodes.Cube428_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key387.geometry} material={nodes.key387.material} position={[-3.856, 0.212, 6.161]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-3.653, 0.206, 6.081]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube430.geometry} material={nodes.Cube430.material} />
        <mesh geometry={nodes.Cube430_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key389.geometry} material={nodes.key389.material} position={[-3.653, 0.212, 6.081]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-3.451, 0.206, 6]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube432.geometry} material={nodes.Cube432.material} />
        <mesh geometry={nodes.Cube432_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key391.geometry} material={nodes.key391.material} position={[-3.451, 0.212, 6]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-3.248, 0.206, 5.92]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube434.geometry} material={nodes.Cube434.material} />
        <mesh geometry={nodes.Cube434_1.geometry} material={materials['verde.brilla']} />
      </a.group>
      <mesh geometry={nodes.key393.geometry} material={nodes.key393.material} position={[-3.248, 0.212, 5.92]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key394.geometry} material={materials['verde.brilla']} position={[-2.606, 0.206, 5.666]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key395.geometry} material={nodes.key395.material} position={[-2.606, 0.212, 5.666]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key396.geometry} material={materials['verde.brilla']} position={[-2.402, 0.206, 5.586]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <mesh geometry={nodes.key397.geometry} material={nodes.key397.material} position={[-2.402, 0.212, 5.586]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]} />
      <a.group position={[-3.488, 0.206, 5.907]} rotation={[0, 0.377, 0]} scale={[0.114, 0.004, 0.114]}>
        <mesh geometry={nodes.Cube440.geometry} material={nodes.Cube440.material} />
        <mesh geometry={nodes.Cube440_1.geometry} material={materials['verde.brilla']} />
      </a.group>
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
      <a.group position={[28.472, 7.449, 24.253]} rotation={[Math.PI, -1.567, 0]} scale={[-0.335, -11.812, -7.668]}>
        <mesh geometry={nodes.Cube016.geometry} material={materials.wood_1} />
        <mesh geometry={nodes.Cube016_1.geometry} material={materials.wood_2} />
      </a.group>
      <mesh geometry={nodes.edges.geometry} material={materials.blanco} position={[27.437, 19.848, 24.293]} rotation={[Math.PI, -1.568, 0]} scale={[-0.23, -0.746, -8.725]} />
      <mesh geometry={nodes.gab001.geometry} material={materials.desk} position={[33.589, -0.248, -5.852]} rotation={[0, -1.554, 0]} scale={[1.346, 1.793, 2.201]} />
      <mesh geometry={nodes.gab002.geometry} material={materials.cabinet} position={[34.759, -0.37, -5.694]} rotation={[0, -1.554, 0]} scale={[1.346, 1.793, 2.201]} />
      <mesh geometry={nodes['poro-1'].geometry} material={materials.bronze_2} position={[34.754, 6.331, -0.244]} rotation={[1.571, 0, -2.003]} scale={0.299} />
      <mesh geometry={nodes['poring_=3'].geometry} material={materials['bronze_2.001']} position={[34.617, 7.322, 7.012]} rotation={[Math.PI, -0.964, Math.PI]} scale={0.042} />
      <mesh geometry={nodes.Peco_Peco.geometry} material={materials['bronze_2.001']} position={[35.143, 8.576, -14.598]} rotation={[0, -0.163, 0]} scale={0.156} />
      <mesh geometry={nodes.frames.geometry} material={materials.blanco} position={[39.694, -4.173, -12.167]} scale={[0.901, 0.901, 38.811]} />
      <mesh geometry={nodes.wall.geometry} material={materials.wall} position={[39.694, -4.173, -12.167]} scale={[0.901, 0.901, 38.811]} />
      <mesh geometry={nodes.windows.geometry} material={materials.Glass} position={[39.694, -4.173, -12.167]} scale={[0.901, 0.901, 38.811]} />
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
      <mesh geometry={nodes.Cube001.geometry} material={materials.blanco} position={[-106.911, 84.169, -1.014]} scale={[24.891, 0.418, 22.792]} />
      <mesh geometry={nodes.board.geometry} material={materials['plateado.oscuro']} position={[-9.66, 9.087, -49.051]} rotation={[-Math.PI, 0, 0]} scale={[-14.433, -7.296, -0.458]} />
      <a.group position={[-9.662, 9.118, -48.835]} scale={[13.437, 6.786, 0.124]}>
        <mesh geometry={nodes.Cube015.geometry} material={materials.corcho} />
        <mesh geometry={nodes.Cube015_1.geometry} material={materials.blanco} />
      </a.group>
      <mesh geometry={nodes.clip.geometry} material={materials.pin} position={[-7.39, 14.587, -48.526]} rotation={[1.566, 0, 0]} scale={0.929} />
      <mesh geometry={nodes.clip001.geometry} material={materials.pin} position={[-3.054, 14.587, -48.526]} rotation={[1.566, 0, 0]} scale={0.929} />
      <mesh geometry={nodes.clip002.geometry} material={materials.pin} position={[1.311, 14.587, -48.526]} rotation={[1.566, 0, 0]} scale={0.929} />
      <a.group position={[35.923, 7.816, -33.786]} rotation={[0, -1.565, 0]} scale={[14.119, 12.355, 2.357]}>
        <mesh geometry={nodes.Cube010.geometry} material={materials.desk} />
        <mesh geometry={nodes.Cube010_1.geometry} material={materials.cabinet} />
      </a.group>
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
      <a.group position={[-22.384, 0.002, 20.024]} rotation={[0, -1.053, 0]} scale={3.192}>
        <mesh geometry={nodes.Sphere001.geometry} material={materials['ground.001']} />
        <mesh geometry={nodes.Sphere001_1.geometry} material={materials['ground.002']} />
      </a.group>
      <a.group position={[-22.75, 0.146, -44.535]} rotation={[0, -1.453, 0]} scale={3.257}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['ground.001']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['ground.002']} />
      </a.group>
      <mesh geometry={nodes.plant1.geometry} material={materials.plant} position={[-22.742, 5.371, 19.627]} rotation={[Math.PI / 2, 0, 1.525]} scale={0.058} />
      <mesh geometry={nodes.plant2.geometry} material={materials.plant} position={[-22.53, 6.564, -44.121]} rotation={[Math.PI / 2, 0, -2.964]} scale={0.073} />
      <a.group position={[38.552, 13.621, -11.002]} rotation={[-Math.PI, 0.007, 0]} scale={-0.944}>
        <mesh geometry={nodes.Cube019.geometry} material={materials.ramon} />
        <mesh geometry={nodes.Cube019_1.geometry} material={materials.wood_1} />
      </a.group>
      <a.group position={[-2.353, 19.899, 24.163]} rotation={[0, 1.57, -Math.PI]} scale={[-2.534, -2.534, -2.937]}>
        <mesh geometry={nodes.Cube035.geometry} material={materials.wood_1} />
        <mesh geometry={nodes.Cube035_1.geometry} material={materials.ramon_2} />
      </a.group>
      <a.group position={[38.579, 9.113, 1.443]} rotation={[-Math.PI, 0.005, 0]} scale={-1.62}>
        <mesh geometry={nodes.Cube036.geometry} material={materials.wood_1} />
        <mesh geometry={nodes.Cube036_1.geometry} material={materials.ramon_3} />
      </a.group>
      <mesh geometry={nodes.phonescreen.geometry} material={materials.phone_crow} position={[34.638, 6.342, 3.376]} rotation={[Math.PI, -1.126, Math.PI]} scale={[0.894, 0.169, 1.673]} />
      <mesh geometry={nodes.phonecamera.geometry} material={materials.camera} position={[35.922, 6.646, 4.213]} rotation={[Math.PI, -1.126, Math.PI]} scale={[0.701, 0.133, 1.314]} />
      <mesh geometry={nodes.phonebackcamera.geometry} material={materials.back_camera} position={[34.707, 6.268, 3.42]} rotation={[Math.PI, -1.129, Math.PI]} scale={[0.894, 0.169, 1.673]} />
      <mesh geometry={nodes.linkedinscreen.geometry} material={materials.linkedin} position={[34.788, 6.403, 3.448]} rotation={[Math.PI, -1.126, Math.PI]} scale={[0.646, 0.137, 0.489]} />
      <mesh geometry={nodes.outlookscreen.geometry} material={materials.outlook} position={[33.861, 6.403, 3.006]} rotation={[Math.PI, -1.126, Math.PI]} scale={[0.648, 0.137, 0.491]} />
      <mesh geometry={nodes.mattress.geometry} material={materials.GREY} position={[-2.324, -1.248, 18.285]} rotation={[0, 1.557, 0]} scale={[4.756, 0.909, 14.239]} />
      <mesh geometry={nodes.pillow_1.geometry} material={materials.GREY} position={[5.317, 3.287, 21.176]} rotation={[0, 1.557, 1.971]} scale={[3.997, 2.9, 8.227]} />
      <mesh geometry={nodes.pillow_2.geometry} material={materials.GREY} position={[-9.388, 3.443, 21.257]} rotation={[0, 1.557, 1.971]} scale={[3.98, 2.535, 7.316]} />
      <mesh geometry={nodes.sofa.geometry} material={materials['desk.001']} position={[72.358, 2.229, -13.117]} rotation={[0, 1.557, 0]} scale={1.437} />
    </a.group>
    </>
  );
}

export default Room;

/*
const execute = new Promise(function(resolve, reject){
        resolve(names.forEach(element => 
          {actions[element].reset().fadeIn(1).play()}
        ))
      })
      
      execute().then()
*/