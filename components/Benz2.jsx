/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 benz2.gltf 
Author: jseopd9 (https://sketchfab.com/jseopd9)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/merecedes-amg-gt-b9e066d791494fb2b62cd6c99f389294
Title: Merecedes AMG GT
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three'; 

 function Model(props) {
  const { nodes, materials } = useGLTF('/benz2.gltf')
  const galaxyTexture = useLoader(TextureLoader, "/galaxyMaterial.png");

  // Create a new material for the car body with the galaxy texture
  const galaxyMaterial = React.useMemo(() => {
    return new THREE.MeshBasicMaterial({
      map: galaxyTexture,
    });
  }, [galaxyTexture]);

  // Replace the existing 'materials.body' with the new 'galaxyMaterial'
  materials.BODY2 = galaxyMaterial;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={16.744}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
          <group position={[-91.523, 23.127, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['BODY#2_BODY#2_0'].geometry} material={materials.BODY2} material-color={props.customColors.body}/>
            <mesh geometry={nodes['BODY#2_BODY#2_0_1'].geometry} material={materials.BODY2} material-color={props.customColors.body}/>
            <mesh geometry={nodes['BODY#2_BODY#2_0_2'].geometry} material={materials.BODY2} material-color={props.customColors.body}/>
            <mesh geometry={nodes['BODY#2_BODY#2_0_3'].geometry} material={materials.BODY2} material-color={props.customColors.body}/>
            <mesh geometry={nodes['BODY#2_BODY#2_0_4'].geometry} material={materials.BODY2} material-color={props.customColors.body}/>
            <mesh geometry={nodes['BOTTOM_BOTTOM#3_0'].geometry} material={materials.BOTTOM3} />
            <mesh geometry={nodes['GLASS_1_GREEN_HOUSE_GLASS_1#5_0'].geometry} material={materials.GREEN_HOUSE_GLASS_15} />
            <mesh geometry={nodes['GLASS_2_GREEN_HOUSE_GLASS_2#6_0'].geometry} material={materials.GREEN_HOUSE_GLASS_26} />
            <mesh geometry={nodes['CHROME_PT_GREEN_HOUSE_CHROME#7_0'].geometry} material={materials.GREEN_HOUSE_CHROME7} />
            <mesh geometry={nodes['TIRE_TIRE#9_0'].geometry} material={materials.TIRE9} />
            <mesh geometry={nodes['TIRE_TIRE#9_0_1'].geometry} material={materials.TIRE9} />
            <mesh geometry={nodes['WHEEL_BK_WHEEL_WH#10_0'].geometry} material={materials.WHEEL_WH10} material-color={props.customColors.rimsColor}/>
            <mesh geometry={nodes['WHEEL_BK_WHEEL_BK#10_0'].geometry} material={materials.WHEEL_BK10} material-color={props.customColors.rimsColor}/>
            <mesh geometry={nodes['WHEEL_BK_WHEEL_BK#10_0_1'].geometry} material={materials.WHEEL_BK10} material-color={props.customColors.rimsColor}/>
            <mesh geometry={nodes['WHEEL_BK_WHEEL_BK#10_0_2'].geometry} material={materials.WHEEL_BK10} material-color={props.customColors.rimsColor}/>
            <mesh geometry={nodes['WHEEL_BK_WHEEL_BK#10_0_3'].geometry} material={materials.WHEEL_BK10} material-color={props.customColors.rimsColor}/>
            <mesh geometry={nodes['DISC_DISC#11_0'].geometry} material={materials.DISC11} />
            <mesh geometry={nodes['DISC_DISC#11_0_1'].geometry} material={materials.DISC11} />
            <mesh geometry={nodes['DISC_DISC#11_0_2'].geometry} material={materials.DISC11} />
            <mesh geometry={nodes['CALIPER_CALIPER#12_0'].geometry} material={materials.CALIPER12} />
            <mesh geometry={nodes['CALIPER_CALIPER#12_0_1'].geometry} material={materials.CALIPER12} />
            <mesh geometry={nodes['BOLT_BOLT#13_0'].geometry} material={materials.BOLT13} />
            <mesh geometry={nodes['HUB_WHEEL_HUB#14_0'].geometry} material={materials.WHEEL_HUB14} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['BODY_1_SIDE_MIRROR_BODY_1#16_0'].geometry} material={materials.SIDE_MIRROR_BODY_116} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['BODY_2_SIDE_MIRROR_BODY_2#17_0'].geometry} material={materials.SIDE_MIRROR_BODY_217} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['SD_GLASS_SIDE_MIRROR_GLASS#18_0'].geometry} material={materials.SIDE_MIRROR_GLASS18} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['SD_GLASS_2_SIDE_MIRROR_GLASS_2#19_0'].geometry} material={materials.SIDE_MIRROR_GLASS_219} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['SD_CHROME_SIDE_MIRROR_CHROME#20_0'].geometry} material={materials.SIDE_MIRROR_CHROME20} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['SILVER_LOGO_SILVER#22_0'].geometry} material={materials.LOGO_SILVER22} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['BLACK_LOGO_BLACK#23_0'].geometry} material={materials.LOGO_BLACK23} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['MATT_BLACK_FRONT_PT_MATT_BK#25_0'].geometry} material={materials.FRONT_PT_MATT_BK25} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['MATT_BLACK_FRONT_PT_MATT_BK#25_0_1'].geometry} material={materials.FRONT_PT_MATT_BK25} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['CHROME_FRONT_PT_CHROME#26_0'].geometry} material={materials.FRONT_PT_CHROME26} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['SILVER#2_FRONT_PT_SILVER#27_0'].geometry} material={materials.FRONT_PT_SILVER27} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['GLOASS_BLACK_FRONT_PT_GLOSS_BK#28_0'].geometry} material={materials.FRONT_PT_GLOSS_BK28} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['MATT_BLACK#2_FRONT_PT_MATT_BK#30_0'].geometry} material={materials.FRONT_PT_MATT_BK30} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['CHROME#2_FRONT_PT_CHROME#31_0'].geometry} material={materials.FRONT_PT_CHROME31} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['MUFFLER_MUFFLER#32_0'].geometry} material={materials.MUFFLER32}material-color={props.customColors.accesoriesColor} />
            <mesh geometry={nodes['RED_PT_REAR_PT_RED#34_0'].geometry} material={materials.REAR_PT_RED34} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['CHROME#3_FRONT_PT_CHROME#35_0'].geometry} material={materials.FRONT_PT_CHROME35} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['MATT-BLACK_LOGO_BLACK#37_0'].geometry} material={materials.LOGO_BLACK37} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['WHITE_Metallic_Paint_Ivory#38_0'].geometry} material={materials.Metallic_Paint_Ivory38} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['MATT_BLACK#3_FRONT_PT_MATT_BK#40_0'].geometry} material={materials.FRONT_PT_MATT_BK40} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['CHORME_FRONT_PT_CHROME#41_0'].geometry} material={materials.FRONT_PT_CHROME41} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['PATTERN_PT_HOLE#42_0'].geometry} material={materials.PT_HOLE42} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['GLASS#2_FRONT_GLASS#44_0'].geometry} material={materials.FRONT_GLASS44} material-color={props.customColors.accesoriesColor}/>
            <mesh geometry={nodes['MATT_BLACK#4_HEADLGIHT_MATT_BLACK#45_0'].geometry} material={materials.HEADLGIHT_MATT_BLACK45} />
            <mesh geometry={nodes['CHROME#4_FRONT_PT_CHROME#46_0'].geometry} material={materials.FRONT_PT_CHROME46} />
            <mesh geometry={nodes['CHROME#4_FRONT_PT_CHROME#46_0_1'].geometry} material={materials.FRONT_PT_CHROME46} />
            <mesh geometry={nodes['CHROME#4_FRONT_PT_CHROME#46_0_2'].geometry} material={materials.FRONT_PT_CHROME46} />
            <mesh geometry={nodes['GLASS#3_HEADLIGHT_GLASS#47_0'].geometry} material={materials.HEADLIGHT_GLASS47} />
            <mesh geometry={nodes['MATT_BLACK#5_HEADLGIHT_MATT_BLACK#48_0'].geometry} material={materials.HEADLGIHT_MATT_BLACK48} />
            <mesh geometry={nodes['LED_HEADLIGHT_LED#49_0'].geometry} material={materials.HEADLIGHT_LED49} />
            <mesh geometry={nodes['GLASS#4_REARLIGHT_GLASS#51_0'].geometry} material={materials.REARLIGHT_GLASS51} />
            <mesh geometry={nodes['LED#2_REARLGIHT_LED#52_0'].geometry} material={materials.REARLGIHT_LED52} />
            <mesh geometry={nodes['MATT_BLACK#6_FRONT_PT_MATT_BK#53_0'].geometry} material={materials.FRONT_PT_MATT_BK53} />
            <mesh geometry={nodes['GLASS_2#2_REARLIGHT_GLASS_2#55_0'].geometry} material={materials.REARLIGHT_GLASS_255} />
            <mesh geometry={nodes['L57_LED_Red_on#56_0'].geometry} material={materials.LED_Red_on56} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/benz2.gltf')
export default Model;