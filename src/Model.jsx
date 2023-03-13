import { useEffect, useRef, useState} from "react";
import { useFrame, useLoader, useThree} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useImgContext } from "./hoocks/useImgContext";

function Model({modelPath}){
    const modelRef = useRef();
    const gltf = useLoader(GLTFLoader, modelPath)
    const { gl ,scene ,camera } = useThree()
    const [savedFilenames, setSavedFilenames] = useState(new Set());
    const [images, setImages] = useState([]);
    const {dispatch} = useImgContext();

    const [counter, setCounter] = useState(0)

    useFrame((state) => {
        const radius = 10
        const speed = 0.8
        const captureInterval = 0.5; 
        
        const timeElapsed = state.clock.getElapsedTime()
        const frameCount = Math.floor(timeElapsed/ captureInterval);

        if (images.length >= 60) {
        return 
        }

        const angle = timeElapsed*speed

        const x = Math.sin(angle)*radius
        const z = Math.cos(angle) * radius
        const y = Math.sin(angle)*radius

        camera.position.set(x, y, z)
        camera.lookAt(modelRef.current.position)
        gl.render(scene, camera)
           
        if (counter <= frameCount) {
            const canvas = gl.domElement
            
            const saveImage = (canvas, filename) => {
                canvas.toBlob(function (blob) {
                    if (!savedFilenames.has(filename)){
                        setImages(images=>[...images, blob]);
                        setSavedFilenames(new Set(savedFilenames.add(filename)));
                    }
                    
                });
              };
            
            saveImage(canvas, `image${counter}.png`)
            setCounter(frameCount);
        }
    })

    useEffect(()=>{
        if(images.length === 60){
        dispatch({type: 'ADD', payload: images});
        }
    },[images])

    return (
        <primitive 
            ref={modelRef}
            object={gltf.scene} 
            position={[0,0,0]}   
            scale={2.5}
        />
    )
  
}

export default Model