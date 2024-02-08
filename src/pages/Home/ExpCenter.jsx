import React from 'react'

const ExpCenter = () => {
    return (
        <>
            <div className='flex justify-center flex-col bg-[#f6f9fc] mt-10 py-5'>
                <h1 className='text-4xl text-center font-bold'>TCS Express Center</h1>
                <div className='bg-red-600 mt-4 h-2 mx-auto w-20 rounded-lg'></div>
                <div className='text-center mt-10 max-w-[50rem] mx-auto'>
                    <p>
                        In 1983, with twelve Express Centres and twenty-five shipments is where it started for TCS. Now with a network of more than 1,000 retail centres in the country, serving customers 24-hours a day, Express operation is the bedrock of TCS products and services. Five different classes of TCS Express Centres, including COCO, Franchised, Shop-in-Shop, Agents and IBRS, serve as a one-stop-shop for our customers.
                    </p>
                    <p className='mt-2'>
                        Facilitating walk-in customers at our Express Centres across Pakistan, we cater for the largest customer base in the country, with an endless range of cost-effective solutions, from domestic and international shipments of documents and parcels, to document attestation, visa dropbox, branchless banking, fulfilment services and everything in-between.
                    </p>
                </div>
                <div className='flex justify-center mt-10'>
                    <button className='bg-red-600 p-2 text-white hover:bg-red-700'>Become A Buisness Partner</button>
                </div>
                <div className='mt-10'>
                    <img src="/img/express-center-new.jpg" className='w-[100%]' alt="" />
                </div>
            </div>
        </>
    )
}

export default ExpCenter