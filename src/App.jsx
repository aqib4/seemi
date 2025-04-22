import { useState } from 'react'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
