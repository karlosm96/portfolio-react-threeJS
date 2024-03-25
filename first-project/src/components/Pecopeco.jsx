import { useMemo } from "react"
import { useGLTF } from "@react-three/drei";
import GLtfDir from '../assets/models/sculpture_peco.glb';

export default function Pecopeco(...props){
    const { nodes, materials } = useMemo(()=> {return useGLTF(GLtfDir)}); 
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Peco_Peco.geometry} material={materials.bronze_2} position={[35.143, 8.576, -14.598]} rotation={[0, -0.163, 0]} scale={0.156} />
        </group>
    )
}