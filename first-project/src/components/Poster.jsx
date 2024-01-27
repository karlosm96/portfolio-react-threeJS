import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { a } from '@react-spring/three';
import { useFrame } from "@react-three/fiber";

import { initialStatesAnimations, activateAnimation, resumePausedAnimation } from "../extra_functions/handleAnimations";
import GLtfDir from '../assets/textures/poster.glb';

export default function Poster(...props){
    const posterRef = useRef();
    
    const runAnimation = props;
    const { nodes, materials, animations } = useGLTF(GLtfDir);
    const { actions, names } = useAnimations(animations, posterRef)
    const [ initAnimation, setInitAnimation ] = useState(false);

    useEffect(() =>{
        initialStatesAnimations(names, actions, true, 1);
    }, [])

    useEffect(() =>{
        if(!actions[names[0]].isRunning()){
            setInitAnimation(runAnimation[0].runAnimation);
            activateAnimation(names, actions, 0, initAnimation);
            setTimeout(() =>{
                resumePausedAnimation(names, actions, true);
            }, 10000)
        }
    }, [runAnimation[0].runAnimation])

    return(
        <a.group ref={posterRef} {...props}>
            <a.group name="Scene">
                <mesh name="cartelwelcome" geometry={nodes.cartelwelcome.geometry} material={materials.wood_cartel} position={[-0.765, -0.025, 2.795]} rotation={[0, 0.9, 0]} scale={[0.04, 0.489, 0.049]} />
            </a.group>
        </a.group>
    )
}