import { useState, useEffect } from 'react';
import { a } from '@react-spring/three'
import { useGLTF } from '@react-three/drei';

import GLTF from '../../public/models/phone.glb';
import { useStateContext } from './Home';

export default function Phone(props){
    const { nodes, materials } = useGLTF(GLTF);
    const {contextState, setContextState} = useStateContext();

    const defaultPositionApp = {
        outlook : [33.9, 6.403, 3.001],
        linkedin : [34.85, 6.403, 3.448],
    };
    
    const [hovered, setHovered] = useState(false);
    const [appName, setAppName ] = useState('');
    const [positionApp, setPositionApp] = useState(defaultPositionApp);

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto';
        hoverEffect(hovered, appName);
    }, [hovered])

    function hoverEffect(condition, appName){
        if(condition){
            defaultPositionApp[appName][1] = 6.403 + 0.5;
            setPositionApp(defaultPositionApp);
        } else{
            if(appName!=''){
            defaultPositionApp[appName][1] = 6.403;
            setPositionApp(defaultPositionApp);
            }
        }
    }

    return(
        <a.group>
            <mesh geometry={nodes.phonescreen.geometry} material={materials.phone_crow} position={[34.638, 6.342, 3.376]} rotation={[Math.PI, -1.126, Math.PI]} scale={[0.894, 0.169, 1.673]} />
            <mesh geometry={nodes.phonecamera.geometry} material={materials.camera} position={[35.922, 6.646, 4.213]} rotation={[Math.PI, -1.126, Math.PI]} scale={[0.701, 0.133, 1.314]} />
            <mesh geometry={nodes.phonebackcamera.geometry} material={materials.back_camera} position={[34.707, 6.268, 3.42]} rotation={[Math.PI, -1.129, Math.PI]} scale={[0.894, 0.169, 1.673]} />
            
            <mesh onPointerEnter={ (e)=>{setHovered(true); setAppName('linkedin');} } 
                onPointerLeave={ (e)=>{setHovered(false); setAppName('linkedin');} }
                onClick={ (e)=>{ window.open("https://www.linkedin.com/in/carlos-mu%C3%B1oz-a83b05103/"); } } 
                geometry={nodes.linkedinscreen.geometry} 
                material={materials.linkedin} 
                position={positionApp.linkedin} 
                rotation={[Math.PI, -1.126, Math.PI]} 
                scale={[0.62, 0.137, 0.46]} />
                
            <mesh onPointerEnter={ (e)=>{setHovered(true); setAppName('outlook');} } 
                onPointerLeave={ (e)=>{setHovered(false); setAppName('outlook');} }  
                onClick={ (e)=>{ setContextState({
                    activationState: true,
                    showContact: true,
                    showProject: false,
                    projectName: ""
                  }) } }
                geometry={nodes.outlookscreen.geometry} 
                material={materials.outlook} 
                position={positionApp.outlook} 
                rotation={[Math.PI, -1.126, Math.PI]} 
                scale={[0.62, 0.137, 0.46]} />
        </a.group>
    )
}