import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { a } from '@react-spring/three';
import { useCurrentSheet } from '@theatre/r3f';
import { val } from '@theatre/core'
import { useFrame } from "@react-three/fiber";

import GLtfDir from '../assets/models/poster.glb';
import gsap from 'gsap';

export default function Poster(...props){
    const posterRef = useRef();
    const timeLine = useRef();
    const preliminarSheet = useCurrentSheet();
    const scrollControl = useScroll();
    const { nodes, materials } = useGLTF(GLtfDir);

    const sequenceLength = val(preliminarSheet.sequence.pointer.length);

    // Set in the current poring timeline the starting position
    // (Calculate the start position: offset wheel * main sheet lenght)
    useFrame(()=>{
        timeLine.current.seek(scrollControl.offset * sequenceLength);
    })

    // Set the poster animation
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

/**
 * timeLine.current.to(
        poringRef.current.rotation, {
            y: Math.PI * 1.7,
            x: Math.PI * -0.15,
            duration: 0.3,
            ease: "power1.inOut"
        },
        7.9
    );
    
    timeLine.current.to(
        poringRef.current.position, {
            y: positionY + 0.4,
            x: positionX + 1.8,
            z: positionZ - 1.8,
            ease: "power1.inOut",
            duration: 0.2
        },
        8.2
    );
    
    timeLine.current.to(
        poringRef.current.position, {
            y: positionY + 0.5,
            x: positionX + 1.6,
            z: positionZ - 1.6,
            ease: "power1.inOut",
            duration: 0.05
        },
        8.3
    );
    
    timeLine.current.to(
        poringRef.current.position, {
            y: positionY + 0.6,
            x: positionX + 1.4,
            z: positionZ - 1.4,
            duration: 0.05
        },
        8.325
    );
    
    timeLine.current.to(
        poringRef.current.rotation,{
            x: Math.PI * 0.15,
            z: Math.PI * 0.15,
            ease: "power1.inOut",
            duration: 0.2
        },
        8.35
    );
    
    timeLine.current.to(
        poringRef.current.position, {
            y: positionY + 0.5,
            x: positionX + 1.2,
            z: positionZ - 1.2,
            ease: "power1.inOut",
            duration: 0.05
        },
        8.4
    );
    
    timeLine.current.to(
        poringRef.current.position, {
            y: positionY + 0.4,
            x: positionX + 1,
            z: positionZ - 1,
            ease: "power1.out",
            duration: 0.05
        },
        8.425
    );
    
    timeLine.current.to(
        poringRef.current.position, {
            y: positionY + 0.3,
            x: positionX + 0.8,
            z: positionZ - 0.8,
            ease: "power1.out",
            duration: 0.05
        },
        8.45
    );
    
    timeLine.current.to(
        poringRef.current.position, {
            y: positionY,
            x: positionX,
            z: positionZ,
            ease: "power1.out",
            duration: 0.2
        },
        8.5
    );

 */