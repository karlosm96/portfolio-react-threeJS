import { a } from '@react-spring/three';
import { useGLTF, useScroll } from '@react-three/drei';
import { useRef, useMemo, useLayoutEffect, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { val } from '@theatre/core'
import { useCurrentSheet } from '@theatre/r3f';
import gsap from 'gsap';

import HolographicMaterial from '../extra_functions/HolographicMaterial';
import Hand from '../assets/models/hand.glb';


export default function Model(props) {
    const { nodes, materials } = useGLTF(Hand);

    const timeLine = useRef();
    const generalTimeLine = useRef();
    const currentSheet = useCurrentSheet();
    const scrollControll = useScroll();

    const sequenceLength = useMemo(() =>{
        return val(currentSheet.sequence.pointer.length);
    })

    useFrame(()=>{
        timeLine.current.seek(sequenceLength * scrollControll.offset);
    })

    useLayoutEffect(() =>{
        props.activateHand ? handAnimation() : '';
    }, [])

    function handAnimation(){
        timeLine.current = gsap.timeline({repeat: -1});

        timeLine.current.to(
            generalTimeLine.current.position, 
            {
                y: generalTimeLine.current.position.y - 0.5,
                duration: 0.3
            },

        ).to(
            generalTimeLine.current.position, 
            {
                y: generalTimeLine.current.position.y,
                duration: 0.3
            },
        )
    }

    function activateHand(){
        return(
            <>
            <a.group {...props} ref={generalTimeLine}>
                <mesh geometry={nodes['15797_Pointer_v1_new'].geometry} position={props.position} rotation={props.rotation} scale={props.scale}>
                    <HolographicMaterial hologramBrightness={ 0.42 } />
                </mesh>
            </a.group>
            </>
        )
        
    }

    return (
        props.activateHand 
            ? activateHand() 
            : <></>
    )
}