import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {

  let [counter, setCount] = useState(10)

  let [isIButtonDisabled, setIButtonDisabled] = useState(false)

  let [isDButtonDisabled, setDButtonDisabled] = useState(false)

  const increaseCounter = ()=>{
    console.log(counter)
    counter = counter + 1
    setCount(counter)
    console.log(counter)
    if(counter >= 20)  {
      setIButtonDisabled(true)
    }
    else{
      setIButtonDisabled(false)
      setDButtonDisabled(false)
    }
    
  }
  
  const decreaseCounter = ()=>{
    console.log(counter)
    counter =  counter - 1
    setCount(counter)
    
    console.log(counter)
    if(counter <= 0){
      setDButtonDisabled(true)
    }
    else{
      setDButtonDisabled(false)
      setIButtonDisabled(false)
    }
  }

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button disabled={isIButtonDisabled} onClick={increaseCounter}>Increase Counter: {counter}</button>
      <button disabled={isDButtonDisabled} onClick={decreaseCounter}>Decrease Counter: {counter}</button>

      <h2>Footer: {counter}</h2>

    </>
  )
}

export default App
