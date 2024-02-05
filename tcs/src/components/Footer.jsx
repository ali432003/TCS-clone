import React from 'react'
import '../styling/footer.css'

const Footer = () => {
    return (
        <>
            <div className='flex justify-evenly  gap-x-10 mt-4 pt-36 border-t-2 border-x-0 text-start'>
                <div className='flex flex-col'>
                    <h1 className='text-lg  font-bold mb-2'>Company Information</h1>
                    <h3>About Us</h3>
                    <h3>Mission & Core Values</h3>
                    <h3>Leadership</h3>
                    <h3>Careers</h3>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-bold mb-2'>Product & Services</h1>
                    <h3>Express</h3>
                    <h3>Logistics</h3>
                    <h3>Brands</h3>
                    <h3>Promotions</h3>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-bold mb-2'>Head Office</h1>
                    <h3>101-104</h3>
                    <h3>Civil Aviation Club Road</h3>
                    <h3>Karachi 75202, Pakistan</h3>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-2xl font-bold mb-5'>SignUp For Updates</h1>
                    <div className='flex'>
                        <input type="text" className='p-2 bg-white  border border-slate-500' />
                        <button className='bg-red-600 p-2 w-full px-4'><img src="/img/signup.png" alt="" /></button>
                    </div>
                    <div className='mt-14'>
                        <h1 className='text-2xl font-bold mb-2'>Follow Us</h1>
                        <div className='flex w-5 gap-x-10 mt-5'>
                            <img src="/img/whatsapp.svg" className='social_w cursor-pointer' alt="" />
                            <img src="/img/youtube.svg" className='social_y' alt="" />
                            <img src="/img/twitter.svg" className='social_l' alt="" />
                            <img src="/img/instagram.svg" className='social_i' alt="" />
                            <img src="/img/fb.svg" className='social_f cursor-pointer' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#f6f9fc] flex justify-between border mt-5 px-24 py-5 text-slate-500 text-md'>
                <div>
                    <h6>2023 © TCS Private Ltd. All rights reserved.</h6>
                </div>
                <div className='flex justify-evenly gap-x-10'>
                    <h6>Terms of Use</h6>
                    <h6>Privacy Policy</h6>
                    <h6>FAQs</h6>
                </div>
            </div>
        </>
    )
}

export default Footer