import { useState } from 'react'
import Nav from './components/Nav'
import Caroseul from './components/Caroseul'
import ProductsServices from './sections/ProductsServices'
import ExpCenter from './sections/ExpCenter'
import EcomSol from './sections/EcomSol'
import './index.css'
import CSR from './sections/CSR'
import CustomerSup from './sections/CustomerSup'
import News from './sections/News'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body'>
        <Nav />
        <Caroseul />
        <ProductsServices />
        <ExpCenter />
        <EcomSol />
        <CSR/>
        <CustomerSup/>
        <News/>
        <Footer/>
      </div>
      <div className="message-container">
        <p>Mobile and tablet version will be coming soon.</p>
      </div>
    </>
  )
}

export default App
