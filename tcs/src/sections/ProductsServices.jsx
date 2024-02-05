import React, { useState } from 'react'


const ProductsServices = () => {
    let [expressClick,setExpressClick] = useState(true)
    let [logisticClick,setLogistiClick] =  useState(false)

    let [expressClass,setExpressClass] = useState('text-red-500 font-bold')
    let [logClass,setlogClass] = useState('')
    let express = ()=>{
        setExpressClick(true)
        setExpressClass('text-red-500 font-bold')
        
        setlogClass('')
        setLogistiClick(false)
    }
    let logistics = ()=>{
        setExpressClick(false)
        setExpressClass('')

        setlogClass('text-red-500 font-bold')
        setLogistiClick(true)
    }


    return (
        <>
            <div className='flex justify-center flex-col'>
                <h1 className='text-4xl text-center font-bold'>Products and Services</h1>
                <div className='bg-red-600 mt-4 h-2 mx-auto w-20 rounded-lg'></div>
            </div>
            <div className='flex justify-center mt-5'>
                <button onClick={express} className={`mx-16 ${expressClass}`}>Express</button>
                <button onClick={logistics} className={`mx-16 ${logClass}`}>logistics</button>
            </div>
            {expressClass? <div className='flex justify-center sm:items-center gap-[1rem]  mx-[7rem] lg:gap-[3rem] md:gap-[4rem] xl:w-[70rem] lg:w-[60rem] md:w-[40rem] w-[16rem] mt-10 flex-wrap pt-[1rem] cursor-pointer  max-w-[70rem]'>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/domestic.svg" className='h-14 w-14' />
                    <p className='text-center mt-2'>Domestic</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/international.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-sm lg:w-[9rem] mt-2'>International</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/ecom.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>E-com</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/traveltours.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Travel & Tours</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/visatronix.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Visatronix</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/financial.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Financial Services</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/mms.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Mailroom Management</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/aviation.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Aviation</p>
                </div>
            </div> : logisticClick}
            
            {logisticClick? <div className='flex justify-center sm:items-center gap-[1rem]  mx-[7rem] lg:gap-[1rem] md:gap-[4rem] xl:w-[70rem] lg:w-[60rem] md:w-[40rem] w-[16rem] mt-10 flex-wrap pt-[1rem] cursor-pointer  max-w-[70rem]'>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/domestic.svg" className='h-14 w-14' />
                    <p className='text-center mt-2'>Domestic</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/international.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-sm lg:w-[9rem] mt-2'>International</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/ecom.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>E-com</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/traveltours.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Travel & Tours</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/visatronix.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Visatronix</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/visatronix.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Visatronix</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/visatronix.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Visatronix</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/visatronix.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Visatronix</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/visatronix.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Visatronix</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/visatronix.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Visatronix</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/visatronix.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Visatronix</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/visatronix.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Visatronix</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/visatronix.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Visatronix</p>
                </div>
            </div> : expressClick}
        </>
    )
}

export default ProductsServices