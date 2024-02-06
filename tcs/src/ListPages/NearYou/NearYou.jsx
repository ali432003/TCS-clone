import React from 'react'
import Nav from "../../components/Nav"
import Footer from '../../components/Footer'

const NearYou = () => {
  return (
    <>
      <Nav />
      <div>
        <div className='bg-[#efefef] text-center py-16'>
          <h1 className='text-4xl font-bold'>TCS Near You</h1>
          <h2 className='text-lg'>Locate your nearest Express Centre</h2>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NearYou