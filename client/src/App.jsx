// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { TitlePage } from './pages/TitlePage'
import { Outlet } from 'react-router-dom'
import ContactAndMap from './pages/ContactAndMap'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <TitlePage />
      <Outlet />
      <ContactAndMap />
    </>
  )
}

export default App
