import { useState } from 'react'
import Nav from './components/Nav'
import Caroseul from './components/Caroseul'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Caroseul/>
    </>
  )
}

export default App
