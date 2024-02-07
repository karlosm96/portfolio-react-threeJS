import React, { useLayoutEffect, useRef, useMemo } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { a } from '@react-spring/three';
import { useFrame } from "@react-three/fiber"; 
import { val } from '@theatre/core'
import { useCurrentSheet } from '@theatre/r3f';
import gsap from 'gsap';

import GLtfDir from '../assets/models/poring.glb';
import Poster from "./Poster";

export default function Poring(...props){
    const poringRef = useRef();
    const timeLine = useRef();

    const [ scale, position ] = props; 
    const { nodes, materials } = useMemo(() =>{
      return useGLTF(GLtfDir);
    });

    const scrollControll = useScroll();
    const preliminar_sheet = useCurrentSheet();
    const sequenceLength = useMemo(() =>{
      return val(preliminar_sheet.sequence.pointer.length);
    });

    // Set in the current poring timeline the starting position
    // (Calculate the start position: offset wheel * main sheet lenght)
    useFrame(()=>{
      timeLine.current.seek(scrollControll.offset * sequenceLength);
    })

    // Set the poring animation
    useLayoutEffect(()=>{
      timeLine.current = gsap.timeline();
      const positionX = poringRef.current.position.x;
      const positionY = poringRef.current.position.y;
      const positionZ = poringRef.current.position.z;

      // ---------------
      // To About book
      // ---------------
      timeLine.current.to(
        poringRef.current.rotation, {
          y: Math.PI * 0.8,
          x: Math.PI * 0.15,
          z: poringRef.current.rotation.z * 0,
          duration: 0.3,
        },
        1.3
      )

      timeLine.current.to(
        poringRef.current.position, {
          y: positionY + 0.4,
          x: positionX + 0.8,
          z: positionZ - 0.8,
          ease: "power1.in",
          duration: 0.2
        },
        1.5
      )

      timeLine.current.to(
        poringRef.current.position, {
          y: positionY + 0.5,
          x: positionX + 1,
          z: positionZ - 1,
          ease: "power1.in",
          duration: 0.05
        },
        1.6
      )

      timeLine.current.to(
        poringRef.current.position, {
          y: positionY + 0.6,
          x: positionX + 1.2,
          z: positionZ - 1.2,
          duration: 0.05
        },
        1.625
      )

      timeLine.current.to(
        poringRef.current.rotation,{
          x: Math.PI * -0.15,
          ease: "power1.out",
          duration: 0.2
        },
        1.65
      )

      timeLine.current.to(
        poringRef.current.position, {
          y: positionY + 0.5,
          x: positionX + 1.4,
          z: positionZ - 1.4,
          ease: "power1.out",
          duration: 0.05
        },
        1.7
      )

      timeLine.current.to(
        poringRef.current.position, {
          y: positionY + 0.4,
          x: positionX + 1.6,
          z: positionZ - 1.6,
          ease: "power1.out",
          duration: 0.05
        },
        1.725
      )

      timeLine.current.to(
        poringRef.current.position, {
          y: positionY + 0,
          x: positionX + 1.8,
          z: positionZ - 1.8,
          ease: "power1.out",
          duration: 0.2
        },
        1.750
      )

      timeLine.current.to(
        poringRef.current.rotation, {
          y: Math.PI * 1.1,
          x: 0,
          duration: 0.5,
        },
        2.4
      )

      // -----------------
      // To Origin point
      // -----------------
      timeLine.current.to(
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

      // ---------------
      // To Laptop
      // ---------------
      timeLine.current.to(
        poringRef.current.rotation, {
            x: Math.PI * -0.15,
            z: poringRef.current.rotation.z * 0,
            duration: 0.2,
            ease: "power1.inOut" 
        },
        8.6
      )
      
      timeLine.current.to(
        poringRef.current.position, {
            y: positionY + 0.4,
            x: positionX - 0.225,
            z: positionZ + 0.242,
            ease: "power1.inOut", 
            duration: 0.1
        },
        8.7
      )
      
      timeLine.current.to(
        poringRef.current.position, {
            y: positionY + 0.5,
            x: positionX - 0.45,
            z: positionZ + 0.484,
            ease: "power1.inOut", 
            duration: 0.1 
        },
        8.75
      )
      
      timeLine.current.to(
        poringRef.current.position, {
            y: positionY + 0.6,
            x: positionX - 0.675,
            z: positionZ + 0.726,
            ease: "power1.inOut", 
            duration: 0.1 
        },
        8.8
      )
      
      timeLine.current.to(
        poringRef.current.rotation,{
            x: Math.PI * 0.15,
            z: Math.PI * 0.15,
            ease: "power1.inOut", 
            duration: 0.1 
        },
        8.825
      )
      
      timeLine.current.to(
        poringRef.current.position, {
            y: positionY + 0.5,
            x: positionX - 0.9,
            z: positionZ + 0.968,
            ease: "power1.inOut", 
            duration: 0.1 
        },
        8.85
      )
      
      timeLine.current.to(
        poringRef.current.position, {
            y: positionY + 0.4,
            x: positionX - 1.125,
            z: positionZ + 1.21,
            ease: "power1.inOut", 
            duration: 0.1 
        },
        8.9
      )
      
      timeLine.current.to(
        poringRef.current.position, {
            y: positionY + 0.0,
            x: positionX - 1.35,
            z: positionZ + 1.45,
            ease: "power1.inOut", 
            duration: 0.1
        },
        8.95
      )
      
      timeLine.current.to(
        poringRef.current.rotation,{
            y: Math.PI * 1.48,
            ease: "power1.inOut", 
            duration: 0.5 
        },
        9
      )

    }, [])

    return(
      <a.group {...props}>
          <a.group ref={poringRef} name="poringwelcome" position={[-0.69, 0.265, 3.275]} rotation={[0, 1.039, 0.001]} scale={0.014} >
            <mesh name="poring_=3" geometry={nodes['poring_=3'].geometry} material={materials.marin} />
            <mesh name="poring_=3_1" geometry={nodes['poring_=3_1'].geometry} material={materials.back_pack} />
          </a.group>
          <Poster scale={ scale } position={ position } />
      </a.group>
    )
}