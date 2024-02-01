import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { a } from '@react-spring/three';
import { useCurrentSheet } from '@theatre/r3f';
import { val } from '@theatre/core'
import { useFrame } from "@react-three/fiber";

import { initialStatesAnimations, activateAnimation, resumePausedAnimation } from "../extra_functions/handleAnimations";
import GLtfDir from '../assets/models/poster.glb';
import gsap from 'gsap';

export default function Poster(...props){
    const posterRef = useRef();
    const timeLine = useRef();
    const preliminarSheet = useCurrentSheet();
    const scrollControl = useScroll();
    const { nodes, materials, animations } = useGLTF(GLtfDir);

    const sequenceLength = val(preliminarSheet.sequence.pointer.length);

    useFrame(()=>{
        timeLine.current.seek(scrollControl.offset * sequenceLength);
    })

    useLayoutEffect(()=>{
        timeLine.current = gsap.timeline();

        timeLine.current.to(

            posterRef.current.rotation, {
                y: Math.PI * -2,
                x: Math.PI * -0.5,
                ease: "power1.out",
                duration: 0.4
            },
            1.4
        )

        timeLine.current.to(
            posterRef.current.position,{
                y: posterRef.current.position.y + 0.1,
                duration: 0.1
            },
            1.6
        )
    }, [])

    return(
        <a.group {...props}>
                <mesh ref={posterRef} name="cartelwelcome" geometry={nodes.cartelwelcome.geometry} material={materials.wood_cartel} position={[-0.765, -0.025, 2.795]} rotation={[0, 0.9, 0]} scale={[0.04, 0.489, 0.049]} />
        </a.group>
    )
}