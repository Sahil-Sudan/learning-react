import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  

  return (
    <>
     <div className="w-full h-screen"  >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">Press Me</div>
      
     </div>
     {/* <h1>Sahil</h1> */}

    </>
  )
}

export default App
