import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { getProject, val } from '@theatre/core'
import { OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from '@theatre/r3f';

import Room from './Room.jsx';
import Loader from "./Loader.jsx";
import '../styles/home.css';
import cameraMoveState from '../assets/projectData/camera_mov.json';

export default function Scene(){
    const sheet = getProject('preliminar name', { state: cameraMoveState }).sheet('Scene');
    const [canvasSize, setCanvasSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() =>{
        // Responsive section
        const handleResize = () => {
            setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
        };
  
        window.addEventListener('resize', handleResize);
  
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const adjustSceneSize = () =>{
        const { width } = canvasSize;
        const isMobile = width < 768;
        let screeScale;
        let screenPosition = [ isMobile ? 0 : 0.5, isMobile ? -width : -6.5, -43];
        
        if(width < 765){
            screeScale = [0.9, 0.9, 0.9];
        } else{
            screeScale = [0.1, 0.1, 0.1];
        }
        return [screeScale, screenPosition];
    }

    const [roomScale, roomPosition] = adjustSceneSize(); 

    return(
        <section>
            <Canvas className="section-canvas" id="section-canvas"
                gl={{ preserveDrawingBuffer: true }}
                frameloop="demand">
                <Suspense fallback={ <Loader /> }>
                    <ScrollControls pages={ 5 } damping={ 1 }>
                        <SheetProvider sheet={ sheet }>
                            <SceneConfiguration canvasSize={ canvasSize } />
                            <Room scale={ roomScale } position={ roomPosition } />
                        </SheetProvider>
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </section>
    )
}

function SceneConfiguration({ canvasSize }){
    const preliminar_sheet = useCurrentSheet();
    const scroll = useScroll();

    const aspect = canvasSize.width / canvasSize.height;
    const camera = useRef();

    useFrame(() =>{
        const sequenceLength = val(preliminar_sheet.sequence.pointer.length);
        preliminar_sheet.sequence.position = scroll.offset * sequenceLength;
    })

    return(
        <>
            <PerspectiveCamera red={ camera } theatreKey='Camera' makeDefault position={ [0, 0, 0] } fov={ 75 } near={ 0.01 } far={ 1000 } aspect={aspect} onUpdate={(c) => c.updateProjectionMatrix()}/>
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




            gsap.to(refRoom.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: refRoom.current,
          start: "top 80%", // Puedes ajustar estos valores según tus necesidades
          end: "bottom 20%", // Puedes ajustar estos valores según tus necesidades
          toggleActions: "play none none reverse",
          onEnter: () => {
            scrollFooter.classList.remove('hidden');
          },
          onLeaveBack: () => {
            scrollFooter.classList.add('hidden');
            clickFooter.classList.remove('hidden');
          }
        }
      });

*/