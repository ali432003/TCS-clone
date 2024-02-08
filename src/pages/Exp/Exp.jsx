import React from 'react'
import Nav from "../../components/Nav"
import Footer from '../../components/Footer'
import ScrollToTop from '../../components/ScrollToTop'

const Exp = () => {
  return (
    <>
      <Nav />
      <div>
        <img src="/img/banner-2.jpg" className='w-[100%]' alt="" />
      </div>
      <div>
        <div className='text-md text-start mx-auto my-8 max-w-[50rem]'>
          <p>
            In 1983, with twelve Express Centres and twenty-five shipments is where it started for TCS. Now with a network of more than 1,000 retail centres in the country, backed by a fleet of 4,500+ delivery conveyances and an aviation division, TCS Express is the largest courier and logistics network in Pakistan.
          </p>
          <p className='mt-4'>
            Busy serving customers 24 hours a day, Express operation is the bedrock of TCS products and services. Five different classes of TCS Express Centres, including COCO, Franchised, Shop-in-Shop, Agents and IBRS, serve as a one-stop-shop for our customers.
          </p>
          <div className='flex ms-[2rem] gap-x-[18rem] mt-[5rem]'>
          <div className='flex flex-col gap-y-[2rem]'>
            <img src="/img/expressIcons/domesticexpress.svg" className='w-[6rem] cursor-pointer' alt="" />
            <img src="/img/expressIcons/ecom.svg" alt="" className='w-[6rem] cursor-pointer'/>
            <img src="/img/expressIcons/mms.svg" alt="" className='w-[6rem] cursor-pointer'/>
            <img src="/img/expressIcons/visatronix.svg" alt="" className='w-[6rem] cursor-pointer'/>
          </div>
          <div className='flex flex-col gap-y-[2rem]'>
            <img src="/img/expressIcons/internationalexpress.svg" className='w-[6rem] cursor-pointer' alt="" />
            <img src="/img/expressIcons/intianatraveltours.svg" alt="" className='w-[6rem] cursor-pointer'/>
            <img src="/img/expressIcons/financial.svg" alt="" className='w-[6rem] cursor-pointer'/>
            <img src="/img/expressIcons/aviation.svg" alt="" className='w-[6rem] cursor-pointer'/>
          </div>
        </div>
        </div>
        
      </div>
      <ScrollToTop/>
      <Footer />
    </>
  )
}

export default Exp