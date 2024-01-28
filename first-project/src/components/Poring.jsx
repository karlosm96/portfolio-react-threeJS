import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { a } from '@react-spring/three';
import { useFrame, useThree } from "@react-three/fiber"; 

import { initialStatesAnimations, activateAnimation, resumePausedAnimation } from "../extra_functions/handleAnimations";
import GLtfDir from '../assets/models/poring.glb';
import Poster from "./Poster";

export default function Poring(...props){
    const poringRef = useRef();
    const [ scale, position ] = props; 
    const { nodes, materials, animations } = useGLTF(GLtfDir);
    const { actions, names } = useAnimations(animations, poringRef);
    const [ initAnimation, setInitAnimation ] = useState(false);

    useEffect(() =>{
      if(!actions[names[0]].isRunning()){
        activateAnimation(names, actions, 0, initAnimation);
        setTimeout(() =>{
          resumePausedAnimation(names, actions, initAnimation);
        }, 3000)

        setTimeout(() =>{
          resumePausedAnimation(names, actions, !initAnimation);
        }, 15000)

        setTimeout(() =>{
          resumePausedAnimation(names, actions, initAnimation);
        }, 40000)
      } else{
        activateAnimation(names, actions, 0, !initAnimation)
      }
    }, [initAnimation])

    return(
        <a.group ref={poringRef} {...props}>
        <a.group name="Scene">
        <a.group name="poringwelcome" position={[-0.69, 0.265, 3.275]} rotation={[0, 1.039, 0.001]} scale={0.014} onClick={ (e) =>{ setInitAnimation(!initAnimation) }}>
          <mesh name="poring_=3" geometry={nodes['poring_=3'].geometry} material={materials.marin} />
          <mesh name="poring_=3_1" geometry={nodes['poring_=3_1'].geometry} material={materials.back_pack} />
        </a.group>
        <Poster scale={ scale } position={ position } runAnimation={ !initAnimation }/>
      </a.group>
      </a.group>
    )
}