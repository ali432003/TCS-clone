import React from 'react'
import img1 from "/img/sliderbanner1.jpg"
import img2 from "/img/slider-banner2.jpg"
import img3 from "/img/slider-banner3.jpg"
import img4 from "/img/slider-banner5.jpg"
import Caroseulimg from './Caroseulimg'
import { Link } from 'react-router-dom'


const Caroseul = () => {
    let IMAGES = [img1, img2, img3, img4]

    return (
        <>
            <Caroseulimg imageUrls={IMAGES} />
            <div className=" translate-x-[24rem] text-start  -translate-y-[16rem]  absolute">
                <h1 className='banner-heading react-reveal text-white text-3xl sm:text-2xl lg:mb-2 font-semibold'>Track your Shipment</h1>
                <div className='flex'>
                    <input type="text" className="p-13 w-[30rem] lg:ps-2 focus:outline-none opacity-75 rounded-l-sm" placeholder='Enter your shipment number' />
                    <button className='bg-[#D40511] text-white p-3 w-full md:w-[10rem] rounded-r-sm transition-all duration-500 gradientbg'>Track Shipment</button>
                </div>
            </div>
            <div className='flex justify-center lg:-translate-y-16'>
                <Link to={'/kardo'}>
                    <div className='flex flex-col justify-center py-5 items-center bg-white px-12 w-auto border rounded-lg cursor-pointer shadow-lg hover:shadow-2xl ease-in-out'>
                        <img src="/img/KeyFeatures/tcskardo.svg" className='h-16 w-16' />
                        <h3 className='text-xs text-center font-semibold mt-2 w-full'>TCS Karado</h3>
                    </div>
                </Link>
                <Link to={'/pickup'}>
                    <div className='flex flex-col justify-center py-5 items-center bg-white px-12 w-auto border rounded-lg cursor-pointer shadow-lg hover:shadow-2xl ease-in-out'>
                        <img src="/img/KeyFeatures/pickup-icon-5.svg" className='h-16 w-16' />
                        <h3 className='text-xs text-center font-semibold mt-2 w-full'>Schedule A Pickup</h3>
                    </div>
                </Link>
                <Link to={'/rate'}>
                    <div className='flex flex-col justify-center py-5 items-center bg-white px-12 w-auto border rounded-lg cursor-pointer shadow-lg hover:shadow-2xl ease-in-out'>
                        <img src="/img/KeyFeatures/calculater.svg" className='h-16 w-16' />
                        <h3 className='text-xs text-center font-semibold mt-2 w-full'>Rate Caculator</h3>
                    </div>
                </Link>
                <Link to={'nearYou'}>
                    <div className='flex flex-col justify-center py-5 items-center bg-white px-12 w-auto border rounded-lg cursor-pointer shadow-lg hover:shadow-2xl ease-in-out'>
                        <img src="/img/KeyFeatures/tcsnearyou.svg" className='h-16 w-16' />
                        <h3 className='text-xs text-center font-semibold mt-2 w-full'>TCS Near You</h3>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Caroseul