import { useState } from 'react'
import Footer from './Components/Footer.jsx'
import Hero from './Components/Hero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <Footer/>
    </>
  )
}

export default App
