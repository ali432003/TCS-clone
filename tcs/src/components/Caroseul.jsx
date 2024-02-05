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
            <div className='flex justify-center lg:-translate-y-16'>
                <div className='p-12 bg-white py-5 w-40 border rounded-lg cursor-pointer shadow-lg hover:shadow-2xl ease-in-out'>
                    <img src="/img/KeyFeatures/tcskardo.svg" className='h-14 w-14' />
                    <h3 className='text-xs font-semibold mt-2'>TCS karado</h3>
                </div>
                <div className='p-12 bg-white py-5 w-40 border rounded-lg cursor-pointer shadow-lg hover:shadow-2xl ease-in-out'>
                    <img src="/img/KeyFeatures/pickup-icon-5.svg" className='h-14 w-14' />
                    <h3 className='text-xs text-center font-semibold mt-2'>Schedule A Pickup</h3>
                </div>
                <div className='p-12 bg-white py-5 w-40 border rounded-lg cursor-pointer shadow-lg hover:shadow-2xl ease-in-out'>
                    <img src="/img/KeyFeatures/calculater.svg" className='h-14 w-14' />
                    <h3 className='text-xs text-center font-semibold mt-2'>Rate Calculator</h3>
                </div>
                <div className='p-12 bg-white py-5 w-40 border rounded-lg cursor-pointer shadow-lg hover:shadow-2xl ease-in-out'>
                    <img src="/img/KeyFeatures/tcsnearyou.svg" className='h-14 w-14' />
                    <h3 className='text-xs text-center font-semibold mt-2'>TCS Near You</h3>
                </div>
            </div>
        </>
    )
}

export default Caroseul