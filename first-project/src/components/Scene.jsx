import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { getProject, val } from '@theatre/core'
import { OrbitControls, ScrollControls, Sky, useHelper, useScroll } from "@react-three/drei";
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from '@theatre/r3f';

import Room from './Room';
import Loader from "./Loader";
import '../styles/home.css';
import cameraMoveState from '../assets/camera/camera_mov.json';
import { DirectionalLight, DirectionalLightHelper } from "three";

export default function Scene(){
    const sheet = getProject('preliminar name', { state: cameraMoveState }).sheet('Scene');
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() =>{
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }, [width])

    const adjustSceneSize = () =>{
        let screeScale;
        let screenPosition = [0. -6.5, -43];
        
        if(width < 765){
            screeScale = [0.9, 0.9, 0.9];
            
        } else{
            screeScale = [.5, .5, .5];
        }

        return [screeScale, screenPosition];
    }

    const [roomScale, roomPosition] = adjustSceneSize(); 

    return(
        <section>
            <Canvas className="section-canvas"
                gl={{ preserveDrawingBuffer: true }}
                frameloop="demand">
                <Suspense fallback={ <Loader /> }>
                    <ScrollControls pages={ 5 } damping={ 1 }>
                        <SheetProvider sheet={ sheet }>
                            <Scene_conf />
                            <Room scale={ roomScale } position={ roomPosition } />
                        </SheetProvider>
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </section>
    )
}

function Scene_conf(){
    const preliminar_sheet = useCurrentSheet();
    const scroll = useScroll();

    useFrame(() =>{
        const sequenceLength = val(preliminar_sheet.sequence.pointer.length);
        preliminar_sheet.sequence.position = scroll.offset * sequenceLength;
    })

    return(
        <>
            <PerspectiveCamera theatreKey='Camera' makeDefault position={ [0, 0, 0] } fov={ 90 } near={ 0.1 } far={ 70 } />
            <directionalLight position={ [-50, 25, -100] } intensity={ 2 } color={ '#fff8b6' } />
            <directionalLight position={ [-50, 0, -100] } intensity={ 2 } color={ '#ffe4a3' }/>
            <directionalLight position={ [-50, 12, -100] } intensity={ 2 } color={ '#FAD6A5' }/>
            <directionalLight position={ [0, 12, 100] } intensity={ 2 } color={ '#FAD6A5' }/>
            <directionalLight position={ [0, 12, 100] } intensity={ 0.5 } color={ '#FD5E53' }/>
            <ambientLight intensity={1}/>
            <pointLight position={ [0, 1, -0.4] } intensity={ 3 } />
        </>
    )
}
//<Perf />
//<directionalLight position={ [1, 1, 1] } intensity={ 2 } />
/*
<PerspectiveCamera theatreKey='Camera' makeDefault position={ [0, 0, 0] } fov={ 90 } near={ 0.1 } far={ 70 } />
            <directionalLight position={ [-3, -1, 1] } intensity={ 3 } color={ '#fff8b6' } />
            <directionalLight position={ [-3, -1, 1] } intensity={ 1 } />
            <directionalLight position={ [1, -2, -2] } intensity={ 3 } color={ '#ffe4a3' }/>
            <directionalLight position={ [1, -2, -2] } intensity={ 1 } />
            <directionalLight position={ [1, 1, 1] } intensity={ 3 } color={ '#FAD6A5' }/>
            <ambientLight intensity={ 1 } color={ '#ff8d71' }/>
            <hemisphereLight skyColor="#ff707e" groundColor="#000000" intensity={ 1 } />



            <ambientLight intensity={ 1 } color={ '#ff8d71' }/>
            <ambientLight intensity={ 1 } color={ '#ff8d71' }/>
            <pointLight position={ [0, 1, -0.4] } intensity={ 3 } />




            <pointLight position={ [24.84, 3.65, -41.39] } intensity={ 50 } color={ '#00ff7f' }/>




                  timeLine.current.to(
        poringRef.current.rotation, {
          y: Math.PI * 0.8,
          x: Math.PI * 0.15,
          duration: 0.3
        },
        1.3
      )

      timeLine.current.to(
        poringRef.current.position, {
          y: poringRef.current.position.y + 0.4,
          x: poringRef.current.position.x + 0.8,
          z: poringRef.current.position.z - 0.8,
          ease: "power1.in",
          duration: 0.2
        },
        1.5
      )

      timeLine.current.to(
        poringRef.current.position, {
          y: poringRef.current.position.y + 0.5,
          x: poringRef.current.position.x + 1,
          z: poringRef.current.position.z - 1,
          duration: 0.05
        },
        1.6
      )

      timeLine.current.to(
        poringRef.current.position, {
          y: poringRef.current.position.y + 0.6,
          x: poringRef.current.position.x + 1.2,
          z: poringRef.current.position.z - 1.2,
          ease: "power1.inOut",
          duration: 0.05
        },
        1.625
      )

      timeLine.current.to(
        poringRef.current.rotation,{
          x: Math.PI * -0.15,
          duration: 0.3
        },
        1.65
      )

      timeLine.current.to(
        poringRef.current.position, {
          y: poringRef.current.position.y + 0.5,
          x: poringRef.current.position.x + 1.4,
          z: poringRef.current.position.z - 1.4,
          duration: 0.5
        },
        1.7
      )

      timeLine.current.to(
        poringRef.current.position, {
          y: poringRef.current.position.y + 0.4,
          x: poringRef.current.position.x + 1.6,
          z: poringRef.current.position.z - 1.6,
          duration: 0.5
        },
        1.725
      )

      timeLine.current.to(
        poringRef.current.position, {
          y: poringRef.current.position.y + 0,
          x: poringRef.current.position.x + 1.8,
          z: poringRef.current.position.z - 1.8,
          ease: "power1.out",
          duration: 0.2
        },
        1.750
      )

      timeLine.current.to(
        poringRef.current.rotation, {
          y: Math.PI * 1.1,
          duration: 0.3
        },
        2.4
      )
*/
