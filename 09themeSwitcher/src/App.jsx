import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import './App.css'

function App() {

  const [themeMode, setThemeMode] = useState('light')

  const switchTheme = (theme) => {
    setThemeMode(theme)
  }

  
  //actual theme changer

  useEffect(()=>{

    let htmlClassList = document.querySelector('html').classList;
    
    htmlClassList.remove("light","dark");

    htmlClassList.add(themeMode);

  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, switchTheme}}>
      <div className="flex flex-wrap min-h-screen items-center h-24">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card />
            </div>
        </div>
      </div>
    </ThemeProvider>     

  )
}

export default App
