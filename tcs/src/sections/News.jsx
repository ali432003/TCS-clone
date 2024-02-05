import React from 'react'

const News = () => {
    return (
        <>
            <div className='mt-24 mb-20'>
                <h1 className='text-4xl text-center font-bold'>In The News</h1>
                <div className='bg-red-600 mt-4 h-2 mx-auto w-20 rounded-lg'></div>
            </div>
            <div className='flex justify-evenly mx-32 gap-5'>
                <div>
                    <img src="/img/tirevent.jpg" alt="" />
                    <h1 className='text-xl font-bold text-slate-700 my-1'>TIR Event</h1>
                    <h6 className='text-sm text-slate-600'>12 October 2018</h6>
                </div>
                <div>
                    <img src="/img/consumer.jpg" alt="" />
                    <h1 className='text-xl font-bold text-slate-700 my-1'>Consumer Choice Award</h1>
                    <h6 className='text-sm text-slate-600'>03 September 2022</h6>
                </div>
                <div>
                    <img src="/img/pakwheels.jpg" alt="" />
                    <h1 className='text-xl font-bold text-slate-700 my-1'>PakWheels and TCS</h1>
                    <h6 className='text-sm text-slate-600'>23 May 2022</h6>
                </div>
            </div>
            <div className='bg-[#f6f9fc] mt-44'>
                <div className='pt-10 mb-20'>
                    <h1 className='text-4xl text-center font-bold'>Working With TCS</h1>
                    <div className='bg-red-600 mt-4 h-2 mx-auto w-20 rounded-lg'></div>
                </div>
                <div className='flex justify-evenly mx-28 gap-5'>
                    <div>
                        <img src="/img/traning.jpg" alt="" />
                        <h1 className='text-2xl absolute font-bold text-white -my-12 ms-4'>Training and Development</h1>

                    </div>

                    <div>
                        <img src="/img/employeeculture.jpg" alt="" />
                        <h1 className='text-2xl absolute font-bold text-white -my-12 ms-4'>Employee Culture</h1>

                    </div>

                    <div>
                        <img src="/img/employeebnefits.jpg" alt="" />
                        <h1 className='text-2xl absolute font-bold text-white -my-12 ms-4'>Employee Benefits</h1>

                    </div>
                </div>
            </div>
        </>
    )
}

export default News