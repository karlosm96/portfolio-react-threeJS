import { useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { getProject, val } from '@theatre/core'
import { OrbitControls, ScrollControls, Sky, useScroll } from "@react-three/drei";
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from '@theatre/r3f';

import Room from './Room';
import Loader from "./Loader";
import '../styles/home.css';
import cameraMoveState from '../assets/camera/camera_mov.json';

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
        <section className="w-full h-screen relative">
            <Canvas className='w-full h-screen bg-transparent'
                gl={{ preserveDrawingBuffer: true }}
                frameloop="demand"
            >
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
            <directionalLight position={ [-3, -1, 1] } intensity={ 3 } color={ '#fff8b6' } />
            <directionalLight position={ [-3, -1, 1] } intensity={ 1 } />
            <directionalLight position={ [1, -2, -2] } intensity={ 3 } color={ '#ffe4a3' }/>
            <directionalLight position={ [1, -2, -2] } intensity={ 1 } />
            <directionalLight position={ [1, 1, 1] } intensity={ 3 } color={ '#FAD6A5' }/>
            <ambientLight intensity={ 1 } color={ '#ff8d71' }/>
            <hemisphereLight skyColor="#ff707e" groundColor="#000000" intensity={ 1 } />
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
*/
