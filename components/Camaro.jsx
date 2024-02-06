/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 camaro.gltf 
Author: SDC PERFORMANCE™️ (https://sketchfab.com/3Duae)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/camaro-ls-dctm-e9c677d1c6a3454ebb4746a160129386
Title: Camaro LS-DC™️
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three'; 

export default function Model(props) {
  const { nodes, materials } = useGLTF('/camaro.gltf')
  if(props.material != "null"){
    const galaxyTexture = useLoader(TextureLoader, props.material);

    // Create a new material for the car body with the galaxy texture
    const galaxyMaterial = React.useMemo(() => {
     return new THREE.MeshBasicMaterial({
       map: galaxyTexture,
     });
   }, [galaxyTexture]);
 
   // Replace the existing 'materials.body' with the new 'galaxyMaterial'
   materials['Material.001'] = galaxyMaterial;
  }
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, -0.002, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={0.021}>
            <mesh geometry={nodes.Object_8.geometry} material={materials['Material.019']} />
            <mesh geometry={nodes.Object_9.geometry} material={materials['Material.020']} />
            <mesh geometry={nodes.Object_10.geometry} material={materials['Material.021']} />
          </group>
          <group position={[0, 1.778, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.41}>
            <mesh geometry={nodes.Object_20.geometry} material={materials['plaquette_de_frein.002']} material-color={props.customColors.rimsColor}/>
            <mesh geometry={nodes.Object_21.geometry} material={materials['visse.002']} material-color={props.customColors.rimsColor}/>
            <mesh geometry={nodes.Object_22.geometry} material={materials['CRBN_JANTE.002']} material-color={props.customColors.rimsColor}/>
            <mesh geometry={nodes.Object_23.geometry} material={materials['pneu.005']} />
            <mesh geometry={nodes.Object_24.geometry} material={materials['pneu.005']} />
            <mesh geometry={nodes.Object_25.geometry} material={materials['Material.059']} material-color={props.customColors.rimsColor}/>
            <mesh geometry={nodes.Object_26.geometry} material={materials['Material.060']} material-color={props.customColors.rimsColor}/>
            <mesh geometry={nodes.Object_27.geometry} material={materials['Material.061']} material-color={props.customColors.rimsColor}/>
            <mesh geometry={nodes.Object_28.geometry} material={materials['PZEO.001']} />
            <mesh geometry={nodes.Object_29.geometry} material={materials.CRBN_JANTE} />
            <mesh geometry={nodes.Object_30.geometry} material={materials['jente.001']} />
            <mesh geometry={nodes.Object_31.geometry} material={materials['plaquette_de_frein.005']} />
            <mesh geometry={nodes.Object_32.geometry} material={materials['Material.025']} />
            <mesh geometry={nodes.Object_33.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_34.geometry} material={materials.material} />
            <mesh geometry={nodes.Object_35.geometry} material={materials['Material.002']} />
          </group>
          <group position={[0, 1.778, -3.058]} rotation={[0, Math.PI / 2, 0]} scale={0.41}>
            <mesh geometry={nodes.Object_37.geometry} material={materials['plaquette_de_frein.002']} />
            <mesh geometry={nodes.Object_38.geometry} material={materials['visse.002']} />
            <mesh geometry={nodes.Object_39.geometry} material={materials['CRBN_JANTE.002']} />
            <mesh geometry={nodes.Object_40.geometry} material={materials['pneu.005']} />
            <mesh geometry={nodes.Object_41.geometry} material={materials['pneu.005']} />
            <mesh geometry={nodes.Object_42.geometry} material={materials['Material.059']} />
            <mesh geometry={nodes.Object_43.geometry} material={materials['Material.060']} />
            <mesh geometry={nodes.Object_44.geometry} material={materials['Material.061']} />
            <mesh geometry={nodes.Object_45.geometry} material={materials['PZEO.001']} />
            <mesh geometry={nodes.Object_46.geometry} material={materials.CRBN_JANTE} />
            <mesh geometry={nodes.Object_47.geometry} material={materials['jente.001']} />
            <mesh geometry={nodes.Object_48.geometry} material={materials['plaquette_de_frein.005']} />
            <mesh geometry={nodes.Object_49.geometry} material={materials['Material.025']} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes.Object_50.geometry} material={materials['Material.001']} material-color={props.customColors.body} />
            <mesh geometry={nodes.Object_51.geometry} material={materials.material} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes.Object_52.geometry} material={materials['Material.002']} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_54.geometry} material={materials.material} />
            <mesh geometry={nodes.Object_55.geometry} material={materials['Material.002']} material-color={props.customColors.accesoriesColor}/>
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_57.geometry} material={materials.material} />
            <mesh geometry={nodes.Object_58.geometry} material={materials['Material.002']} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_66.geometry} material={materials.material} />
            <mesh geometry={nodes.Object_67.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Object_68.geometry} material={materials['Material.002']} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_76.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_77.geometry} material={materials['Material.023']} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_81.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_82.geometry} material={materials['Material.011']} />
            <mesh geometry={nodes.Object_83.geometry} material={materials['Material.014']} />
            <mesh geometry={nodes.Object_84.geometry} material={materials['Material.022']} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_88.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_89.geometry} material={materials['Material.023']} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_105.geometry} material={materials['Material.017']} />
            <mesh geometry={nodes.Object_106.geometry} material={materials['Material.018']} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_112.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Object_113.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_114.geometry} material={materials['Material.023']} />
          </group>
          <mesh geometry={nodes.Object_4.geometry} material={materials['Material.002']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.material} position={[0, 0.291, 2.241]} scale={0.07} />
          <mesh geometry={nodes.Object_12.geometry} material={materials.mattemetal} />
          <mesh geometry={nodes.Object_14.geometry} material={materials['Material.002']} position={[0, -0.014, -2.471]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.018} />
          <mesh geometry={nodes.Object_16.geometry} material={materials['Material.002']} position={[0, 0.251, 2.881]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.018} />
          <mesh geometry={nodes.Object_18.geometry} material={materials['Material.002']} position={[0.34, 0.346, -1.144]} rotation={[-1.636, 0, -1.458]} scale={0.024} />
          <mesh geometry={nodes.Object_60.geometry} material={materials['Material.002']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_62.geometry} material={materials.material} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_64.geometry} material={materials['Material.004']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_70.geometry} material={materials['Material.001']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_72.geometry} material={materials['Material.005']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_74.geometry} material={materials.Material} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_79.geometry} material={materials['Material.001']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_86.geometry} material={materials.material} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_91.geometry} material={materials['Material.001']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_93.geometry} material={materials['Material.001']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_95.geometry} material={materials['Material.004']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_97.geometry} material={materials['Material.016']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_99.geometry} material={materials.material} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_101.geometry} material={materials['Material.001']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_103.geometry} material={materials['Material.018']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_108.geometry} material={materials['Material.001']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_110.geometry} material={materials['Material.006']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_116.geometry} material={materials['Material.008']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_118.geometry} material={materials['Material.010']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_120.geometry} material={materials['Material.008']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_122.geometry} material={materials['Material.007']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_124.geometry} material={materials['Material.001']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_126.geometry} material={materials['Material.004']} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_128.geometry} material={materials['Material.015']} position={[0.103, -0.534, -0.265]} rotation={[Math.PI / 2, 0, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/camaro.gltf')