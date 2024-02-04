import React from 'react'


const Nav = () => {
    return (
        <>
            <div className='bg-red-600 sticky top-0 z-50'>
                <div className='flex justify-end mx-32 translate-y-6'>
                    <img src="/img/sentiments.svg" className='mx-2' width={100} height={100}/>
                    <img src="/img/studio.svg" className='mx-2' width={100} height={100}/>
                    <li className='list-none mx-2 translate-y-4 flex text-white cursor-pointer font'>Pakistan<img src="/img/down.png" className='pb-7 ms-0 filter brightness-0 invert' width={25} height={5}/></li>
                </div>
                <div className="flex justify-between scroll-pt-0 mx-32">
                    <img src="/img/TCS.svg" className='mb-5 ' alt="Example SVG" width={180} height={180} />
                    <div className='mt-10 flex'>
                        <li className='list-none me-2 flex text-white cursor-pointer font'>About Us <img src="/img/down.png" className='pb-7 ms-0 filter brightness-0 invert' width={25} height={5}/></li>
                        <li className='list-none me-2 flex text-white cursor-pointer'>Domestic <img src="/img/down.png" className='pb-7  ms-0 filter brightness-0 invert' width={25} height={5}/></li>
                        <li className='list-none me-2 flex text-white cursor-pointer'>International <img src="/img/down.png" className='pb-7  ms-0 filter brightness-0 invert' width={25} height={5}/></li>
                        <li className='list-none me-2 flex text-white cursor-pointer'>Express <img src="/img/down.png" className='pb-7  ms-0 filter brightness-0 invert' width={25} height={5}/></li>
                        <li className='list-none me-2 flex text-white cursor-pointer'>Logistics <img src="/img/down.png" className='pb-7 ms-0 filter brightness-0 invert' width={25} height={5}/></li>
                        <li className='list-none me-2 flex text-white cursor-pointer'>E-com Solutions</li>
                        <li className='list-none me-2 flex text-white cursor-pointer'>Contact Us</li>
                        <li className='list-none me-2 flex text-white cursor-pointer mb-6 hover:bg-red-700 px-5  rounded bg-red-800'>My TCS</li>
                    </div>
                </div>
                <marquee behavior="" direction="" className="font-extrabold bg-white sticky top-0">Some deliveries may be delayed due to foggy weather <span>موسم دھند آلود ہونے کی وجہ سے کچھ ترسیلات میں تاخیر ہو سکتی تی ہے۔</span></marquee>
            </div>
            
            
        </>
    )
}

export default Nav