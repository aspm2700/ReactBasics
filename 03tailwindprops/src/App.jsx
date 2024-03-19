import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TailwindComponent from './components/TailwindComponent.jsx'
import PropsComponent from './components/PropsComponent.jsx'

function App() {
  let firstName = 'Ankit'
  return (
    <>
      <h1 className='bg-green-400 rounded-xl text-black'>Talwind CSS And props</h1>

      <TailwindComponent personName={firstName} personLastName='Mishra'/>

      <PropsComponent buttonName='MacDetails'/>

    </>
  )
}

export default App
