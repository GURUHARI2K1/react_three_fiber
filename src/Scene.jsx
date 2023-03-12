import {Suspense} from "react";
import { useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


function Model({modelPath}){

    const gltf = useLoader(GLTFLoader, modelPath)

    return (
        <primitive 
            object={gltf.scene} 
            position={[0,0,0]}   
            scale={2.5}
        />
    )
  
}

function Scene(){

    return(
        <Suspense fallback={null}>
            <Model modelPath={"/microphone_gxl_066_bafhcteks.glb"} />
        </Suspense>
    )
}

export default Scene