import React from 'react'
import Nav from "../../components/Nav"
import Footer from '../../components/Footer'
import ScrollToTop from '../../components/ScrollToTop'

const Log = () => {
  return (
    <>
      <Nav />
      <div>
        <img src="/img/logistics.jpg" className='w-[100%]' alt="" />
      </div>
      <div>
        <div className='text-md text-start mx-auto my-8 max-w-[50rem]'>
          <p>
          With over four decades of excellence, over 18,000 corporate customers and the largest door-to-door goods transportation business in Pakistan, TCS remains the leaders in logistics and supply chain. From an extensive network of warehousing and distribution to one of the largest company-owned fleet of primary and secondary distribution vehicles, TCS is undoubtedly the market leader when it comes to facilitating and serving the largest corporations, as well as small and medium enterprises.
          </p>
         <div className='flex ms-[2rem] gap-x-[18rem] mt-[5rem]'>
          <div className='flex flex-col gap-y-[4rem]'>
            <img src="/img/expressIcons/domesticexpress.svg" className='w-[6rem] cursor-pointer' alt="" />
            <img src="/img/expressIcons/ecom.svg" alt="" className='w-[6rem] cursor-pointer'/>
            <img src="/img/expressIcons/mms.svg" alt="" className='w-[6rem] cursor-pointer'/>
            <img src="/img/expressIcons/visatronix.svg" alt="" className='w-[6rem] cursor-pointer'/>
            <img src="/img/expressIcons/aviation.svg" alt="" className='w-[6rem] cursor-pointer'/>
            <img src="/img/expressIcons/intianatraveltours.svg" alt="" className='w-[6rem] cursor-pointer'/>
          </div>
          <div className='flex flex-col gap-y-[4rem]'>
            <img src="/img/expressIcons/internationalexpress.svg" className='w-[6rem] cursor-pointer' alt="" />
            <img src="/img/expressIcons/intianatraveltours.svg" alt="" className='w-[6rem] cursor-pointer'/>
            <img src="/img/expressIcons/financial.svg" alt="" className='w-[6rem] cursor-pointer'/>
            <img src="/img/expressIcons/aviation.svg" alt="" className='w-[6rem] cursor-pointer'/>
            <img src="/img/expressIcons/mms.svg" alt="" className='w-[6rem] cursor-pointer'/>
            <img src="/img/expressIcons/ecom.svg" alt="" className='w-[6rem] cursor-pointer'/>
          </div>
        </div>
        </div>
      </div>
      <ScrollToTop/>
      <Footer />
    </>
  )
}

export default Log