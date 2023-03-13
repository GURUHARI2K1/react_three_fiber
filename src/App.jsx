import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { useImgContext } from "./hoocks/useImgContext";
import Model from "./Model";
import saveAs from "file-saver"

function App() {
  const { images } = useImgContext();
  useEffect(()=>{
    if(images) console.log(images[0]);
  },[images])
  
  const handleSample = ()=>{
    images.slice(20,24).map((img, index)=>{
      saveAs(img, `image${index}.png`, { type: 'image/png' });
    })
    images.slice(10,14).map((img, index)=>{
      saveAs(img, `image${index+4}.png`, { type: 'image/png' });
    })
  }

  const handleAll = ()=>{
    images.map((img, index)=>{
      saveAs(img, `image${index}.png`, { type: 'image/png' });
    })
  }


  return (
    <>
      <section className="flex items-center gap-4">
        <main className="w-[60vw] h-[80vh]">
          <Canvas className="rounded-lg">
              <PerspectiveCamera makeDefault position={[5, 0, 3]}/>
              <OrbitControls />
              <Environment preset="forest" background blur={0.5}/>
              <ambientLight intensity={1} />
              <directionalLight intensity={2} position={[0,0,25]}/>
              <spotLight intensity={1} position={[10, 10, 10]} angle={0.15} />
              <pointLight position={[-10, -10, -10]} />
              <Suspense fallback={null}>
                <Model modelPath={"/microphone_gxl_066_bafhcteks.glb"}/>
            </Suspense>
          </Canvas>
        </main>
        {!images && <span>Wait until the process( about 30 seconds ) is over...</span>}
        {images && <div className="flex flex-col gap-5">
          <button className="bg-blue-300 p-1 px-3 rounded-lg" onClick={handleSample}>Sample</button>
          <button className="bg-blue-300 p-1 px-3 rounded-lg" onClick={handleAll}>All Images</button>
        </div>}
      </section>
      {images && <div className="w-full gap-4 px-4 flex flex-row justify-around overflow-auto">
        {images && <img className="w-[20rem] rounded-lg aspect-video" src={URL.createObjectURL(images[4])}  />}
        {images && <img className="w-[20rem] rounded-lg aspect-video" src={URL.createObjectURL(images[8])}  />}
        {images && <img className="w-[20rem] rounded-lg aspect-video" src={URL.createObjectURL(images[12])}  />}
      </div>}
    </>
    
  )
}

export default App
