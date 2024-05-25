import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[numberAllowed,setNumberAllowed]= useState(0)
  const[charAllowed,setCharAllowed]= useState("flase")
  const[password,setPassword]= useState("")

  const passwordRef = useRef(null)//useRef hook
  
  const copyPasswordToClipboard = useCallback(()=>{
      passwordRef.current?.select();//to show the  text is selected we will highlight it with the help of this
      passwordRef.current?.setSelectionRange(0,3);//to optimize more  we will select the range of password
      
      window.navigator.clipboard.writeText(password)//It is present in window not in linux
  },[password])

  const passwordGenerator= useCallback(()=>{
    let pass= ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefighklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*-=+[]{}~_:><?/\`"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+= str.charAt(char)
    }
    setPassword(pass)
  }, [length,numberAllowed,charAllowed,setPassword])//setPassword is for memoization the function
  //And in useCallBack we are doing it to optimize our methods
  //We are using useCallback to again call this function whenever there is a change in the given dependencies.

  //don't compare the useCallback dependencies with useEffect dependencies
  useEffect(()=>{
    passwordGenerator()//If we dont use useEffect then why function is calling infinite times??????
  },[length,numberAllowed,charAllowed,passwordGenerator])
  //Till now we only know that if the page will be refreshed then this function will be called again.

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-orange bg-gray-700 mb-4">
      <h1 className='text-4xl text-center text-white'
        >Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text" 
        value={password}
        className='outline-none w-full py-2 px-3 rounded-md mb-4 mt-4'
        placeholder='password'
        readonly
        ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.2 shrink-0">copy</button>

        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6} 
            max={100}
            value={length}
            className='cursor-pointor'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label >Length:{length}</label>
          </div>
          <div className="flex text-sm gap-x-2">
          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{setNumberAllowed((prev)=>!prev);}}
          
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex text-sm gap-x-2">
          <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="numberInput"
            onChange={()=>{setCharAllowed((prev)=>!prev);}}
          
            />
            <label htmlFor="charInput">CharacterInput</label>
          </div>
        </div>
        </div>

    </>
  )
}

export default App


/*
1. Task Another example where we can use useCallback function
2. Why count is given in chatgpt eg
3.

*/