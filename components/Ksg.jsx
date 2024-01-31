/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ksg.gltf 
Author: iSteven (https://sketchfab.com/OneSteven)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/koenigsegg-jesko-918e533a7fcf489f9e8c2b3fc4493aa3
Title: Koenigsegg Jesko
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

 function Model(props) {
  const { nodes, materials } = useGLTF('/ksg.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[66.459, 24.259, 133.701]} rotation={[-Math.PI / 2, 0, -0.297]} scale={100}>
        <mesh geometry={nodes.wheel005_tire_0.geometry} material={materials.tire} />
        <mesh geometry={nodes.wheel005_disc_0.geometry} material={materials.disc} />
        <mesh geometry={nodes.wheel005_whitemet_0.geometry} material={materials.whitemet} />
        <mesh geometry={nodes.wheel005_cb_0.geometry} material={materials.material} />
      </group>
      <group position={[-66.459, 24.259, 133.701]} rotation={[-Math.PI / 2, 0, 2.845]} scale={100}>
        <mesh geometry={nodes.wheel001_tire_0.geometry} material={materials.tire} />
        <mesh geometry={nodes.wheel001_disc_0.geometry} material={materials.disc} />
        <mesh geometry={nodes.wheel001_whitemet_0.geometry} material={materials.whitemet} />
        <mesh geometry={nodes.wheel001_cb_0.geometry} material={materials.material} />
      </group>
      <group position={[66.459, 24.259, -75.615]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 107.527, 107.527]}>
        <mesh geometry={nodes.wheel002_tire_0.geometry} material={materials.tire} />
        <mesh geometry={nodes.wheel002_disc_0.geometry} material={materials.disc} />
        <mesh geometry={nodes.wheel002_whitemet_0.geometry} material={materials.whitemet} />
        <mesh geometry={nodes.wheel002_cb_0.geometry} material={materials.material} />
      </group>
      <group position={[-66.459, 24.259, -75.615]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[100, 107.527, 107.527]}>
        <mesh geometry={nodes.wheel003_tire_0.geometry} material={materials.tire} />
        <mesh geometry={nodes.wheel003_disc_0.geometry} material={materials.disc} />
        <mesh geometry={nodes.wheel003_whitemet_0.geometry} material={materials.whitemet} />
        <mesh geometry={nodes.wheel003_cb_0.geometry} material={materials.material} />
      </group>
      <mesh geometry={nodes.mesh_mlack_0.geometry} material={materials.mlack} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.mesh001_paint_0.geometry} material={materials.paint} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.mesh002_cb_0.geometry} material={materials.material} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.mesh005_grill_0.geometry} material={materials.grill} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.mesh007_rev_0.geometry} material={materials.material_4} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.mesh008_emit_0.geometry} material={materials.emit} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.mesh009_glack_0.geometry} material={materials.glack} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.mesh010_red_0.geometry} material={materials.material_7} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.mesh011_rgl_0.geometry} material={materials.material_8} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.mesh012_mirror_0.geometry} material={materials.mirror} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.mesh013_geepee_0.geometry} material={materials.geepee} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.mesh015_mlack_0.geometry} material={materials.mlack} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.mesh016_glass_0.geometry} material={materials.glass} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.mesh017_glass_l_0.geometry} material={materials.glass_l} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.mesh018_chrome_0.geometry} material={materials.chrome} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.cali002_cali_0.geometry} material={materials.cali} position={[66.459, 24.259, 133.701]} rotation={[-Math.PI / 2, 0, -0.297]} scale={100} />
      <mesh geometry={nodes.cali001_cali_0.geometry} material={materials.cali} position={[-66.459, 24.259, 133.701]} rotation={[-Math.PI / 2, 0, -0.297]} scale={[-100, 100, 100]} />
      <mesh geometry={nodes.cali003_cali_0.geometry} material={materials.cali} position={[66.459, 24.259, -75.615]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 107.527, 107.527]} />
      <mesh geometry={nodes.cali004_cali_0.geometry} material={materials.cali} position={[-66.459, 24.259, -75.615]} rotation={[-Math.PI / 2, 0, 0]} scale={[-100, 107.527, 107.527]} />
    </group>
  )
}

useGLTF.preload('/ksg.gltf')
export default Model;