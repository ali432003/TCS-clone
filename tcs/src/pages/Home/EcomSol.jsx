import React from 'react'

const EcomSol = () => {
    return (
        <>
            <div className='mx-auto max-w-[50rem]'>
                <div className='flex justify-center flex-col mt-16'>
                    <h1 className='text-4xl text-center font-bold'>E-com Solution</h1>
                    <div className='bg-red-600 mt-4 h-2 mx-auto w-20 rounded-lg'></div>
                </div>
                <div className='text-center my-4'>
                    <p className='text-md'>Increase the productivity of your business applications by integrating them with TCS products <br />and services through APIs.</p>
                </div>
                <div className='flex justify-evenly mt-10'>
                    <div className='flex flex-col justify-center'>
                        <img src="/img/tcsdeveloperportal.svg" className='w-56 mx-auto' alt="" />
                        <div className=' text-center'>
                            <h1 className='text-4xl font-bold'>TCS Developer Portal</h1>
                            <p className='mt-4 text-sm'>Our Developer Portal allows the developers to augment their applications by <br />integrating them with TCS APIs.</p>
                            <button className='mt-4 bg-red-600 p-2 px-9 text-white rounded-sm hover:bg-red-700'>More Details</button>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center'>
                        <img src="/img/tcsplugins.svg" className='w-56 mx-auto' alt="" />
                        <div className=' text-center'>
                            <h1 className='text-4xl font-bold'>TCS Developer Portal</h1>
                            <p className='mt-4 text-sm'>Our Developer Portal allows the developers to augment their applications by <br />integrating them with TCS APIs.</p>
                            <button className='mt-4 bg-red-600 p-2 px-9 text-white rounded-sm hover:bg-red-700'>More Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#f6f9fc] mt-16'>
                <div className='flex justify-center flex-col py-16'>
                    <h1 className='text-4xl text-center font-bold'>At a Glance</h1>
                    <div className='bg-red-600 mt-4 h-2 mx-auto w-20 rounded-lg'></div>
                </div>
                <div className='mx-auto max-w-[50rem]'>
                    <img src="/img/at-a-glance.jpg" className='w-[100%]' alt="" />
                </div>
            </div>
        </>
    )
}

export default EcomSol