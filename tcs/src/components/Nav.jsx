import React from 'react'
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';


const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.white,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        color: "black",
        top: -30,
        backgroundColor: theme.palette.common.white,
    },
}));


// Nav changing on scroll


const Nav = () => {
    const Tooltip1 = () => {
        return (
            <div className='list-none flex flex-col py-1 text-md'>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Mission and Core Values</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Milestone</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Leadership</li>
            </div>
        )
    }
    const Tooltip2 = () => {
        return (
            <>
                <div className='flex gap-x-0'>
                    <div className='list-none flex flex-col py-1 text-md'>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>OverNight Express</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Same Day Delivery</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Same Day Delivery</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Same Day Delivery</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Same Day Delivery</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Same Day Delivery</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Same Day Delivery</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Same Day Delivery</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Same Day Delivery</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Same Day Delivery</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Same Day Delivery</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Same Day Delivery</li>
                    </div>

                    <div className='list-none flex flex-col py-1 text-md drop-shadow-lg'>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>COD and COD+</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Payment Solution</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Payment Solution</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Payment Solution</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Payment Solution</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Payment Solution</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Payment Solution</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Payment Solution</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Payment Solution</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Payment Solution</li>
                        <li className='hover:bg-slate-200 cursor-pointer p-1'>Payment Solution</li>
                    </div>

                </div>
            </>
        )
    }
    const Tooltip3 = () => {
        return (
            <div className='list-none flex flex-col py-1 text-md'>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>RedBox</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Express Flyer</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>US Passport Renewal</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>International Freight</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Customs Brokerage</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Regional Trade / TIR</li>
            </div>
        )
    }
    const Tooltip4 = () => {
        return (
            <div className='list-none flex flex-col py-1 text-md'>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Domestic Express</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>International Express</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Financial Services</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Travel & Tours</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Visatronix</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>MMS</li>
            </div>
        )
    }
    const Tooltip5 = () => {
        return (
            <div className='list-none flex flex-col py-1 text-md'>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Overland Express</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Fleet & Transportation</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Warehousing</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Distribution</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>International Freight</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Customs Brokerage</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>PackNGo</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Expo Logistics</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Project Logistics</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Cold Chain Management</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>gri Logistics</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Regional Trade / TIR</li>
            </div>
        )
    }
    const Tooltip6 = () => {
        return (
            <div className='list-none flex flex-col py-1 text-md'>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>UAE</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>UK</li>
                <li className='hover:bg-slate-200 cursor-pointer p-1'>Central Asia</li>
            </div>
        )
    }
    let aboutUs = <Tooltip1 />
    let Domestic = <Tooltip2 />
    let International = <Tooltip3 />
    let Express = <Tooltip4 />
    let Logistics = <Tooltip5 />
    let pak = <Tooltip6 />


    const [isSecondNavbarVisible, setIsSecondNavbarVisible] = useState(false);

    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                if (window.scrollY > 50) {
                    setIsSecondNavbarVisible(true);
                } else {
                    setIsSecondNavbarVisible(false);
                }
            }, 100);
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);


    return (
        <>
            <div className={`${isSecondNavbarVisible ? "hidden " : "ease-in-out duration-7  00"} bg-red-600 sticky top-0 z-50`}>
                <div className={`flex justify-end mx-32 translate-y-6`}>
                    <img src="/img/sentiments.svg" className='mx-2' width={100} height={100} />
                    <img src="/img/studio.svg" className='mx-2' width={100} height={100} />
                    <BootstrapTooltip title={pak}><li className='list-none mx-2 translate-y-4 flex text-white cursor-pointer font'>Pakistan<img src="/img/down.svg" className='pb-7 ms-0 filter brightness-0 invert' /></li></BootstrapTooltip>
                </div>
                <div className="flex justify-between mx-32">
                    <Link to={'/'}><img src="/img/TCS.svg" className='mb-5 ' alt="Example SVG" width={180} height={180} /></Link>
                    <div className='mt-10 flex'>
                        <Link to={'/about'}><BootstrapTooltip title={aboutUs}><li className='list-none me-2 flex text-white cursor-pointer font'>About Us <img src="/img/down.svg" className='pb-7 ms-0 filter brightness-0 invert' /></li></BootstrapTooltip></Link>
                        <Link to={'/dom'}><BootstrapTooltip title={Domestic}> <li className='list-none me-2 flex text-white cursor-pointer'>Domestic <img src="/img/down.svg" className='pb-7  ms-0 filter brightness-0 invert' /></li></BootstrapTooltip></Link>
                        <Link to={'/int'}><BootstrapTooltip title={International}><li className='list-none me-2 flex text-white cursor-pointer'>International <img src="/img/down.svg" className='pb-7  ms-0 filter brightness-0 invert' /></li></BootstrapTooltip></Link>
                        <Link to={'/exp'}><BootstrapTooltip title={Express}><li className='list-none me-2 flex text-white cursor-pointer'>Express <img src="/img/down.svg" className='pb-7  ms-0 filter brightness-0 invert' /></li></BootstrapTooltip></Link>
                        <Link to={'/log'}><BootstrapTooltip title={Logistics}><li className='list-none me-2 flex text-white cursor-pointer'>Logistics <img src="/img/down.svg" className='pb-7 ms-0 filter brightness-0 invert' /></li></BootstrapTooltip></Link>
                        <Link to={'/ecom'}><li className='list-none me-2 flex text-white cursor-pointer'>E-com Solutions</li></Link>
                        <Link to={'/cont'}><li className='list-none me-2 flex text-white cursor-pointer'>Contact Us</li></Link>
                        <Link to={'/myTCS'}><li className='list-none me-2 flex text-white cursor-pointer mb-6 hover:bg-red-700 px-5  rounded bg-red-800'>My TCS</li></Link>
                    </div>
                </div>
                <marquee behavior="" direction="" className="font-extrabold bg-white sticky top-0">Some deliveries may be delayed due to foggy weather <span>موسم دھند آلود ہونے کی وجہ سے کچھ ترسیلات میں تاخیر ہو سکتی تی ہے۔</span></marquee>
            </div>

            <div className={`${isSecondNavbarVisible ? "ease-in-out duration-700" : "hidden "} bg-red-600 sticky top-0 z-50`}>
                <div className="flex justify-between mx-32">
                <Link to={'/'}><img src="/img/TCS.svg" className='mt-4' alt="Example SVG" width={100} height={100} /></Link>
                    <div className='mt-6 flex'>
                    <Link to={'/about'}><BootstrapTooltip title={aboutUs}><li className='list-none me-2 flex text-white cursor-pointer font'>About Us <img src="/img/down.svg" className='pb-7 ms-0 filter brightness-0 invert' /></li></BootstrapTooltip></Link>
                    <Link to={'/dom'}><BootstrapTooltip title={Domestic}> <li className='list-none me-2 flex text-white cursor-pointer'>Domestic <img src="/img/down.svg" className='pb-7  ms-0 filter brightness-0 invert' /></li></BootstrapTooltip></Link>
                    <Link to={'/int'}><BootstrapTooltip title={International}><li className='list-none me-2 flex text-white cursor-pointer'>International <img src="/img/down.svg" className='pb-7  ms-0 filter brightness-0 invert' /></li></BootstrapTooltip></Link>
                    <Link to={'/exp'}><BootstrapTooltip title={Express}><li className='list-none me-2 flex text-white cursor-pointer'>Express <img src="/img/down.svg" className='pb-7  ms-0 filter brightness-0 invert' /></li></BootstrapTooltip></Link>
                    <Link to={'/log'}><BootstrapTooltip title={Logistics}><li className='list-none me-2 flex text-white cursor-pointer'>Logistics <img src="/img/down.svg" className='pb-7 ms-0 filter brightness-0 invert' /></li></BootstrapTooltip></Link>
                    <Link to={'/ecom'}><li className='list-none me-2 flex text-white cursor-pointer'>E-com Solutions</li></Link>
                    <Link to={'/cont'}><li className='list-none me-2 flex text-white cursor-pointer'>Contact Us</li></Link>
                    <Link to={'/myTCS'}><li className='list-none me-2 flex text-white cursor-pointer mb-6 hover:bg-red-700 px-5  rounded bg-red-800'>My TCS</li></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav