/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 benz1.gltf 
Author: Car2022 (https://sketchfab.com/Car2022)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mercedes-benz-v-class-61583f5c172f4e25a963e52e1e67c11a
Title: Mercedes Benz V Class
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF('/benz1.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.bottom016_1_0.geometry} material={materials.material} />
        <mesh geometry={nodes.bottom016_1glossy_0.geometry} material={materials['1glossy']} />
        <mesh geometry={nodes.bottom016_carpaint_0.geometry} material={materials.carpaint} />
        <mesh geometry={nodes.bottom016_windowglass_0.geometry} material={materials.windowglass} />
        <mesh geometry={nodes.bottom016_2glossy_0.geometry} material={materials['2glossy']} />
        <mesh geometry={nodes.bottom016_2_0.geometry} material={materials.material_5} />
        <mesh geometry={nodes.redglass011_carpaint_0.geometry} material={materials.carpaint} />
        <mesh geometry={nodes.redglass011_2glossy_0.geometry} material={materials['2glossy']} />
        <mesh geometry={nodes.redglass011_2_0.geometry} material={materials.material_5} />
        <mesh geometry={nodes.redglass011_windowglass_0.geometry} material={materials.windowglass} />
        <mesh geometry={nodes.redglass011_1_0.geometry} material={materials.material} />
        <mesh geometry={nodes.redglass011_1glossy_0.geometry} material={materials['1glossy']} />
        <mesh geometry={nodes.redglass010_carpaint_0.geometry} material={materials.carpaint} />
        <mesh geometry={nodes.redglass010_2_0.geometry} material={materials.material_5} />
        <mesh geometry={nodes.redglass010_windowglass_0.geometry} material={materials.windowglass} />
        <mesh geometry={nodes.redglass010_1_0.geometry} material={materials.material} />
        <mesh geometry={nodes.redglass010_1glossy_0.geometry} material={materials['1glossy']} />
        <mesh geometry={nodes.redglass010_3glossy_0.geometry} material={materials['3glossy']} />
        <mesh geometry={nodes.redglass013_carpaint_0.geometry} material={materials.carpaint} />
        <mesh geometry={nodes.redglass013_2_0.geometry} material={materials.material_5} />
        <mesh geometry={nodes.redglass013_windowglass_0.geometry} material={materials.windowglass} />
        <mesh geometry={nodes.redglass013_1glossy_0.geometry} material={materials['1glossy']} />
        <mesh geometry={nodes.redglass013_1_0.geometry} material={materials.material} />
        <mesh geometry={nodes.redglass013_3glossy_0.geometry} material={materials['3glossy']} />
        <mesh geometry={nodes.redglass007_2_0.geometry} material={materials.material_5} />
        <mesh geometry={nodes.redglass007_2glossy_0.geometry} material={materials['2glossy']} />
        <mesh geometry={nodes.redglass007_carpaint_0.geometry} material={materials.carpaint} />
        <mesh geometry={nodes.redglass007_windowglass_0.geometry} material={materials.windowglass} />
        <mesh geometry={nodes.redglass007_1_0.geometry} material={materials.material} />
        <mesh geometry={nodes.Audi_RSQ8005_1_0.geometry} material={materials.material} />
        <mesh geometry={nodes.Audi_RSQ8006_1_0.geometry} material={materials.material} />
        <mesh geometry={nodes.Audi_RSQ8007_1_0.geometry} material={materials.material} />
        <mesh geometry={nodes.Audi_RSQ8008_1_0.geometry} material={materials.material} />
        <mesh geometry={nodes.carchair_front02004_2_0.geometry} material={materials.material_5} />
        <mesh geometry={nodes.carchair_front02004_2glossy_0.geometry} material={materials['2glossy']} />
        <mesh geometry={nodes.carchair_front02009_2_0.geometry} material={materials.material_5} />
        <mesh geometry={nodes.carchair_front02009_2glossy_0.geometry} material={materials['2glossy']} />
        <mesh geometry={nodes.carchair_front02011_2_0.geometry} material={materials.material_5} />
        <mesh geometry={nodes.carchair_front02011_2glossy_0.geometry} material={materials['2glossy']} />
        <mesh geometry={nodes.bottom003_2_0.geometry} material={materials.material_5} />
        <mesh geometry={nodes.bottom003_1_0.geometry} material={materials.material} />
        <mesh geometry={nodes.bottom003_carpaint_0.geometry} material={materials.carpaint} />
        <mesh geometry={nodes.bottom003_2glossy_0.geometry} material={materials['2glossy']} />
        <mesh geometry={nodes.bottom003_1glossy_0.geometry} material={materials['1glossy']} />
        <mesh geometry={nodes.bottom003_windowglass_0.geometry} material={materials.windowglass} />
        <mesh geometry={nodes.bottom007_3glossy_0.geometry} material={materials['3glossy']} />
        <mesh geometry={nodes.front_panel12008_1glossy_0.geometry} material={materials['1glossy']} />
        <mesh geometry={nodes.front_panel12008_1_0.geometry} material={materials.material} />
        <mesh geometry={nodes.front_panel12008_2_0.geometry} material={materials.material_5} />
        <mesh geometry={nodes.front_panel12008_2glossy_0.geometry} material={materials['2glossy']} />
        <mesh geometry={nodes.front_panel12011_3glossy_0.geometry} material={materials['3glossy']} />
        <mesh geometry={nodes.front_panel12011_1_0.geometry} material={materials.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/benz1.gltf')
export default Model;