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
    
    /*
    In Below Code counter variable gets updated to 14 as we are assign the value to counter and then calling the setCount() 
    which will reflect on UI. As react (useSatet(10)) does things in batches and uses react fiber (https://github.com/acdlite/react-fiber-architecture) 
    the value will get directly updated to 14 on UI.
    
    counter = counter + 1
    setCount(counter)
    counter = counter + 1
    setCount(counter)
    counter = counter + 1
    setCount(counter)
    counter = counter + 1
    setCount(counter)
    */
    
    /* 
    In Below Code setCount() is called Multiple Times but the same counter is updated as it is send in batches by useState(10) 
    and react fiber would recogonize as a same task and will perform only one. Hence value will be 11.

    setCount(counter + 1)
    setCount(counter + 1)
    setCount(counter + 1)
    setCount(counter + 1)

    */

    /*
    Using of prevCounter variable (setcount(callabck))
    In Below Code prevCounter will give us the last updated state(previous state) of the counter variable, 
    hence our value will be updated to 14.
    Now at 1st setCount() prevCounter is 10 and as we increment by 1,  
    for the next setCount() prevCounter value will be 11 (previous state).
    The same will be followed for below setCount().

    setCount(prevCounter => prevCounter + 1)
    setCount(prevCounter => prevCounter + 1)
    setCount(prevCounter => prevCounter + 1)
    setCount(prevCounter => prevCounter + 1)
    */
      

    setCount(counter + 1)

    console.log(counter)
    if(counter >= 19)  {
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
