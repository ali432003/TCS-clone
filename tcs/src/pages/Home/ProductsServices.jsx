import React, { useState } from 'react'
import ScrollToTop from '../../components/ScrollToTop'


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
        <div>
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
                    <img src="/img/overlandexpress.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-sm lg:w-[9rem] mt-2'>Overland</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/fleettransportation.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Fleet & Transport</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/warehousing.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Warehousing</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/domestic.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Distribution</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/internatinalfreight.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>International Freight</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/customsbrokrage.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Custom Support</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/packgo.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>PackNGo</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/expologistics.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Expo Logistics</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/projectlogistics.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Project Logistics</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/coldchain.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Cold Chain</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/agrilogistics.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Agri Logistics</p>
                </div>
                <div className='p-12 bg-white py-5 w-40 cursor-pointer'>
                    <img src="/img/tir.svg" className='lg:ms-2 h-14 w-14' />
                    <p className='text-center mt-2'>Regional Trade</p>
                </div>
            </div> : expressClick}

            {<ScrollToTop/>}
        </div>
    )
}

export default ProductsServices