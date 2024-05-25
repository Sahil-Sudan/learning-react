import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Card from '03taliwindprops\src\components\Card.jsx'
import Card from 'e:/Web Dev/chaiWithCode/03taliwindprops/src/components/card.jsx'


function App() {
  const [count, setCount] = useState(0)
  let myObj={
    userName:"Sahil",
    rollNo: 89,
  }

  let arr= [1,2,3,4,5];
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Sahil sudan</h1>
     <Card name="Sahil" someObj={myObj} arr={arr} desc="Web Developer Hu m"/>
     <Card name="Basu" someObj={myObj} arr={arr} desc="Web Developer ka bhai hu m"/>
    </>
  )
}

export default App
