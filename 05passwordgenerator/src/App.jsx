import { useState, useCallback, useEffect, useRef } from "react"


function App() {

  /*
  useCallback(fn, [dependencies]) 
  useCallback is a React Hook that lets you cache a function definition between re-renders.
  */

  const [length, setLength] = useState(8)

  const [numbox, setNumbox] = useState(false)

  const [charbox, setCharbox] = useState(false)

  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"

    if(numbox) str += "0123456789"

    if(charbox) str+= "@#$%=:?./|~>*()<{}`"

    for(let i = 1; i <= length; i++)
    {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    
    setPassword(pass)

  }, [length,numbox,charbox,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,21);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{passwordGenerator()},[length,numbox,charbox, passwordGenerator])

  return (
    <>
      
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700 text-orange-500">
        <h1 className='text-4xl text-center text-white py-3 font-serif'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden">
          <input type="text" value={password} className="outline-none w-full py-1 px-3 my-8 rounded-lg" placeholder="Password" readOnly
          ref = {passwordRef}/>
          <button className="outline-none h-10 bg-blue-700 text-white px-3 py-0.5 my-8 rounded-lg shrink-0"
          onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2 my-1'>
          <div className='flex items-center gap-x-1 mb-5'>

            <input id = "lengthInput" type = "range" min = {6} max={20} value = {length} className="cursor-pointer" onChange={(e)=>setLength(e.target.value)}/>
            <label className="font-mono" htmlFor="lengthInput">Length: {length}</label>

          </div>

          <div className="flex items-center gap-x-1 mb-5">
            <input type="checkbox" defaultChecked={numbox} id="numberInput" onChange={()=> setNumbox((prev) => !prev)}/>
            <label className="font-mono" htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1 mb-5">
            <input type="checkbox" defaultChecked={charbox} id="charInput" onChange={()=> setCharbox((prev) => !prev)}/>
            <label className="font-mono" htmlFor="charInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
