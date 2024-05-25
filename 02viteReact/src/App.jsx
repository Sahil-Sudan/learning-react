import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let counter = 1;
  const addValue=()=>{
    
    setCount(count+1);
    // console.log("Random number generate ho rha hai => " + Math.random());
    console.log("Random number generate ho rha hai => " + count);//UI Updation m problem aa rhi hai
    // Problem is comming because UI updation is controlled by react

     /*Interview Quesiton */
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    
    // setCount(prevCounter=> prevCounter+1);
    // setCount(prevCounter=> prevCounter+1);
    // setCount(prevCounter=> prevCounter+1);
    // setCount(prevCounter=> prevCounter+1);


    
  }
  const removeValue=()=>{
    
    setCount(count-1);
    // console.log("Random number generate ho rha hai => " + Math.random());
    console.log("Random number generate ho rha hai => " + count);//UI Updation m problem aa rhi hai
    // Problem is comming because UI updation is controlled by react
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h1>Counter value:{count}</h1>

    <button onClick={addValue}>Add value</button>
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
