import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas} from "@react-three/fiber";
import Scene from "./Scene";

function App() {

  
  return (
    <>
      <Canvas>
          <OrbitControls />
          <Environment preset="forest" background blur={0.5}/>
          <ambientLight intensity={1} />
          <directionalLight intensity={2} position={[0,0,25]}/>
          <spotLight intensity={1} position={[10, 10, 10]} angle={0.15} />
          <pointLight position={[-10, -10, -10]} />
          <Scene/>
      </Canvas>
    </>
    
  )
}

export default App
