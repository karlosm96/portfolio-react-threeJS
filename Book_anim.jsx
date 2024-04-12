/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 C:\Users\hp\Desktop\portfolio_three\first-project\public\models\book_anim.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/book_anim.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="parent" position={[0.612, 0.054, -0.446]} rotation={[0, -0.142, 0]} scale={1.431}>
          <group name="Empty" position={[0, 0.002, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.255} />
          <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials.front} position={[0, 0.01, 0]} scale={[0.8, 1, 1]} />
        </group>
        <group name="parent001" position={[0.612, 0.06, -0.446]} rotation={[0, -0.142, 0]} scale={1.431}>
          <group name="Empty001" position={[0, -0.014, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.255} />
          <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials['Material.001']} position={[0, -0.014, 0]} scale={[0.8, 1, 1]} />
        </group>
        <group name="parent002" position={[0.612, 0.054, -0.446]} rotation={[0, -0.142, 0]} scale={1.431}>
          <group name="Empty002" position={[0, -0.012, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.255} />
          <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials['Material.001']} position={[0, -0.012, 0]} scale={[0.8, 1, 1]} />
        </group>
        <group name="parent003" position={[0.612, 0.054, -0.446]} rotation={[0, -0.142, 0]} scale={1.431}>
          <group name="Empty003" position={[0, -0.01, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.255} />
          <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={materials['Material.001']} position={[0, -0.01, 0]} scale={[0.8, 1, 1]} />
        </group>
        <group name="parent004" position={[0.612, 0.06, -0.446]} rotation={[0, -0.142, 0]} scale={1.431}>
          <group name="Empty004" position={[0, -0.008, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.255} />
          <mesh name="Plane004" geometry={nodes.Plane004.geometry} material={materials['Material.001']} position={[0, -0.008, 0]} scale={[0.8, 1, 1]} />
        </group>
        <group name="parent005" position={[0.612, 0.06, -0.446]} rotation={[0, -0.142, 0]} scale={1.431}>
          <group name="Empty005" position={[0, -0.006, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.255} />
          <mesh name="Plane005" geometry={nodes.Plane005.geometry} material={materials['Material.001']} position={[0, -0.006, 0]} scale={[0.8, 1, 1]} />
        </group>
        <group name="parent006" position={[0.612, 0.039, -0.446]} rotation={[0, -0.142, 0]} scale={1.431}>
          <group name="Empty006" position={[0, -0.004, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.255} />
          <group name="Plane006" position={[0, -0.015, 0]} scale={[0.8, 1, 1]}>
            <mesh name="Plane022" geometry={nodes.Plane022.geometry} material={materials.presentation_1} />
            <mesh name="Plane022_1" geometry={nodes.Plane022_1.geometry} material={materials['Material.001']} />
          </group>
        </group>
        <mesh name="papers" geometry={nodes.papers.geometry} material={materials.presentation_2} position={[1.745, -0.057, -0.284]} rotation={[0, -0.142, 0]} scale={[1.145, 1.616, 1.431]} />
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials.spine} position={[0.613, -0.011, -0.446]} rotation={[0, -0.142, 0]} scale={[0.009, 0.036, 1.427]} />
        <mesh name="cubierta" geometry={nodes.cubierta.geometry} material={materials.front} position={[1.745, -0.09, -0.284]} rotation={[0, -0.142, 0]} scale={[1.145, 1.431, 1.431]} />
      </group>
    </group>
  )
}

useGLTF.preload('/book_anim.glb')