import React from 'react'
import Nav from "../../components/Nav"
import Footer from '../../components/Footer'
import ScrollToTop from '../../components/ScrollToTop'

const MyTCS = () => {
  return (
    <>
      <Nav />
      <div>
        <div className='bg-[#efefef] text-center py-16 w-[100%]'>
          <h1 className='text-4xl font-bold'>Customer Portals</h1>
        </div>
        <div>
          <div className='text-md mt-[4rem] text-start mx-auto my-8 max-w-[50rem]'>
            <div className='flex gap-x-[2rem]'>
              <div className='max-w-[18rem]'>
                <img src="/img/envio.png" className="cursor-pointer" />
              </div>
              <div className='max-w-[18rem]'>
                <img src="/img/shipforme.png" className="cursor-pointer" />
              </div>
              <div className='max-w-[18rem]'>
                <img src="/img/loyaltycard.png" className="cursor-pointer" />
              </div>
            </div>
            <div className='flex justify-center mt-[2rem] gap-x-[2rem]'>
              <div className='max-w-[16rem]'>
                <img src="/img/3pl.png" className="cursor-pointer" />
              </div>
              <div className='max-w-[16rem]'>
                <img src="/img/e-retailportal.png" className="cursor-pointer" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop/>
      <Footer />
    </>
  )
}

export default MyTCS