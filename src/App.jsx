import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Services from './components/Services'
import Resume from './Resume'
import Work from './Work'
import Contact from './Contact'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <Header></Header>
   <Outlet></Outlet>

    
    </>
  )
}

export default App
