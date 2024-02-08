import React from 'react'

const CustomerSup = () => {
    return (
        <div className='flex justify-evenly mt-16 max-w-[50rem] mx-auto gap-x-[15rem]'>
            <div className='flex '>
                <div className="flex flex-col gap-6 mt-24">
                    <div><img src="/img/support3.png" className='w-44' alt="" /></div>
                    <div><img src="/img/customersupport1.jpg" className='w-44' alt="" /></div>
                </div>
                <div className="flex flex-col gap-6 mt-10 ms-4">
                    <div><img src="/img/support2.png" className='w-44' alt="" /></div>
                    <div><img src="/img/customersupport2.jpg" className='w-44' alt="" /></div>
                </div>
            </div>
            <div className='flex flex-col mt-24 -ms-52'>
                <h1 className='text-4xl font-bold'>Customer Support</h1>
                <div className='bg-red-600 mt-4 h-2 w-20 rounded-lg'></div>
                <p className='w-80 my-4'>
                    With the aim to do better everyday, and to be able to add greater value to our customers' lives, we have an extensive network of call centres, a WhatsApp response systems, along with a highly motivated social media team, so we can respond to your queries, inputs, and complaints better.
                </p>
                <button className='text-center bg-red-600 w-36 p-2 text-white rounded-sm hover:bg-red-700'>Contact Us</button>
            </div>
        </div>
    )
}

export default CustomerSup