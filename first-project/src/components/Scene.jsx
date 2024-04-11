import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { getProject, val } from '@theatre/core'
import { ScrollControls, useScroll } from "@react-three/drei";
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from '@theatre/r3f';


import { useStateContext } from "./Home.jsx";
import Room from './Room.jsx';
import Loader from "./Loader.jsx";
import '../styles/home.css';
import cameraMoveState from '../../public/projectData/camera_mov.json';

export default function Scene(props){
    const sheet = getProject('preliminar name', { state: cameraMoveState }).sheet('Scene');
    const [canvasSize, setCanvasSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const {contextState, setContextState} = useStateContext();
    const [start, setStart] = useState(false);
    
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
            screeScale = [0.8, 0.8, 0.8];
        } else{
            screeScale = [0.1, 0.1, 0.1];
        }
        return [screeScale, screenPosition];
    }

    const [roomScale, roomPosition] = adjustSceneSize(); 

    return(
        <section>
            <Loader progress={props.progress} start={ setStart }/>
            <Canvas className="section-canvas" id="section-canvas" 
                style={{ position: 'relative', display: 'flex',
                         filter: contextState['activationState'] ? 'blur(5px)' : 'none', opacity: start ? 1 : 0}}
                gl={{ preserveDrawingBuffer: true }}
                frameloop="demand">
                <Suspense fallback={ null }>
                    <ScrollControls pages={ 5 } damping={ 1 }>
                        <SheetProvider sheet={ sheet }>
                            <SceneConfiguration canvasSize={ canvasSize } />
                            <Room  scale={ roomScale } position={ roomPosition } />
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
    const sequenceLength = useMemo(()=>{ return val(preliminar_sheet.sequence.pointer.length); }) ;

    useFrame(() =>{
        preliminar_sheet.sequence.position = scroll.offset * sequenceLength;
    })

    return(
        <>
            <PerspectiveCamera 
                ref={ camera }
                theatreKey='Camera' 
                makeDefault 
                position={[0, 0, 0]} 
                fov={75} 
                near={0.1}
                far={2000}
                aspect={ aspect }
                onUpdate={(c) => c.updateProjectionMatrix()}
            />
            <directionalLight position={ [-50, 25, -100] } intensity={ 2 } color={ '#ffe4a3' }  />
            <directionalLight position={ [-50, 25, -100] } intensity={ 2 } color={ '#FAD6A5' }  />
            <directionalLight position={ [0, 12, 100] } intensity={ 2 } color={ '#FAD6A5' }  />
            <directionalLight position={ [0, 12, 100] } intensity={ 0.5 } color={ '#FD5E53' }   />
            <ambientLight intensity={0.5} />
            <pointLight position={ [0, 1, -0.4] } intensity={ 3 } />
        </>
    )
}