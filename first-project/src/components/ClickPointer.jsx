import  { useRef, useMemo, useLayoutEffect } from 'react'
import { a } from '@react-spring/three';
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useCurrentSheet } from '@theatre/r3f';
import { useScroll } from "@react-three/drei";
import { val } from '@theatre/core'
import gsap from 'gsap';

import GLTF from '../../public/models/click_pointer.glb'

export default function ClickPointer(props) {
  const { nodes, materials } = useMemo(() => { return useGLTF(GLTF); });
  const pointerRef = useRef();
  const timeLine = useRef();
  const currentSheer = useCurrentSheet();
  const scrollControll = useScroll();
  const sequenceLength = useMemo(()=>{ return val(currentSheer.sequence.pointer.length) });

  useFrame(()=>{
    timeLine.current.seek(sequenceLength * scrollControll.offset);
  })

  useLayoutEffect(()=>{
    timeLine.current = gsap.timeline({ repeat: -1 });

    timeLine.current.to(
        pointerRef.current.rotation, {
            onStart: () =>{
                pointerRef.current.rotation.y * Math.PI * 4
            },
            y: pointerRef.current.rotation.y * Math.PI * 4,
            duration: 0.2
        },
    )
  }, [props.pos])

  return (   
    <a.group {...props} dispose={null}>
        <mesh ref={ pointerRef } geometry={nodes.pointer.geometry} material={props.mat} position={ props.positionPointer } rotation={[0, 0.129, -Math.PI / 2]} scale={[-0.189, -0.188, -0.128]}>
        </mesh>
        <a.group position={props.positionBasePointer} rotation={[Math.PI / 2, -0.129, Math.PI / 2]} scale={0.092}>
        <mesh geometry={nodes.Plane019.geometry} material={materials.black} />
        <mesh geometry={nodes.Plane019_1.geometry} material={materials.blanco} />
      </a.group>
    </a.group>
  )
}