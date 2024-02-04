import React from 'react'
import img1 from "/img/sliderbanner1.jpg"
import img2 from "/img/slider-banner2.jpg"
import img3 from "/img/slider-banner3.jpg"
import img4 from "/img/slider-banner5.jpg"
import Caroseulimg from './Caroseulimg'


const Caroseul = () => {
    let IMAGES = [img1, img2, img3, img4]

    return (
        <>
            <Caroseulimg imageUrls={IMAGES} />
            <div className="sm:block lg:mt-[-18rem] lg:ms-[24rem] md:mt-[-3rem]  sm:mt-[1rem] mt-14 text-center md:text-left absolute">
                <h1 className='banner-heading react-reveal text-white text-3xl sm:text-2xl lg:mb-2 font-semibold'>Track your Shipment</h1>
                <div className='flex'>
                    <input type="text" className="p-13 md:w-[30rem] lg:ps-2 focus:outline-none opacity-75 rounded-l-sm" placeholder='Enter your shipment number' />
                    <button className='bg-[#D40511] text-white p-3 w-full md:w-[10rem] rounded-r-sm transition-all duration-500 gradientbg'>Track Shipment</button>
                </div>
            </div>
            <div className="button-component sm:flex grid flex-col md:flex-row px-[2rem] lg:mx-[3rem] md:ml-[0rem] mx-[1rem] mt-[8rem] sm:relative justify-center items-center lg:mt-[-3rem] md:mt-[-2rem] z-10">
                <div className=' flex'>
                    <div className='hover:z-50 bg-white lg:w-[208px] md:w-[170px] sm:w-[49.5%] w-[49.5%] card rounded-t-md md:rounded-none md:rounded-l-md w-[24%] w-[12rem]'>
                        <img className='h-[-7.7rem]' src="/img/KeyFeatures/tcskardo.svg" width={50} alt="" />
                        <div className='text-sm'>TCS Kardo</div>
                    </div>
                    <div className='hover:z-50 bg-white lg:w-[208px] md:w-[170px] sm:w-[49.5%] w-[49.5%] card rounded-t-md md:rounded-none md:rounded-l-md w-[24%] w-[12rem]'>
                        <img className='h-[-7.7rem]' src="/img/KeyFeatures/tcskardo.svg" width={50} alt="" />
                        <div className='text-sm'>TCS Kardo</div>
                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default Caroseul