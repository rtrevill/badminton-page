// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { TitlePage } from './pages/TitlePage'
import { Outlet } from 'react-router-dom'
import ContactAndMap from './pages/ContactAndMap'
import { Mappy } from './components/mappy'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <TitlePage />
      <Outlet />
      <Mappy />
      {/* <ContactAndMap /> */}
    </>
  )
}

export default App
