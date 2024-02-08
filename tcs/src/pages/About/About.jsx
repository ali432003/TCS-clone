import React from 'react'
import Nav from "../../components/Nav"
import Footer from '../../components/Footer'
import ScrollToTop from '../../components/ScrollToTop'


const About = () => {
    return (
        <>
            <Nav />
            <div>
                <img src="/img/aboutUs.jpg" className='w-[100%]' alt="" />
            </div>
            <div>
                <div className='text-md text-center mx-auto my-8 max-w-[50rem]'>
                    <div className='text-start flex flex-col gap-y-5'>
                        <p>Back in 1983, when TCS started off with just 25 shipments on its first day, there was no doubt that it would grow to become the leader in Pakistan’s courier industry. Since then, TCS has moved from being a courier service provider to become a time-honoured, tested and proven name for delivering a wide range of logistics services. Not just that, but TCS is now on its way to becoming the logistics backbone of the country—much more than just a humble courier company.</p>
                        <p>While It is easy to take TCS for a technology-driven company, at the heart of the TCS phenomena of success are the people. Those, who do not forget that the customers are the only catalysts of change, and that the strategic insights about the business and the customers is the only true guide which makes it possible to achieve the high standards of service.</p>
                        <p>Our propensity to get the most out of modern technologies does not only help us to develop tailor-made products and services, it allows us to maintain industry-transforming standards which become the benchmarks that others aspire to achieve. We reaffirm our commitment to doing better for our customers everyday by providing exciting new possibilities and to continue to be your first choice. Today, tomorrow, always.</p>
                    </div>
                    <div className='border border-t-1 pt-16 border-x-0 border-b-0 flex flex-col mt-16'>
                        <h1 className='text-4xl font-bold mb-5'>Mission Statement</h1>
                        <div className="flex flex-col gap-y-4 mx-5">
                            <p>Our most precious asset – the term ‘TCS KARDO’ has been gifted to us by the people of Pakistan as an expression of their affection and TRUST.</p>
                            <p>It is by delivering on this trust every single day, come rain or shine, over the past four decades that we have become the country’s logistics backbone delivering an array of services to businesses and consumers alike.</p>
                            <p>We now pledge to add greater value to our services through a blend of passion and new technologies aimed at enhancing productivity of our clients, whilst simplifying and enriching everyday lives of our consumers.</p>
                            <p>Additionally, we will extend our Air and Ground Logistics Services beyond borders opening new trade routes shaped by the emerging regional opportunities, to the benefit of Pakistan.</p>
                        </div>

                        <h1 className='text-4xl font-bold mb-5 mt-10'>Vision</h1>
                        <div className="flex flex-col gap-y-4 mx-5">
                            <p>To become the logistics backbone of the country.</p>
                        </div>
                        <h1 className='text-4xl font-bold mb-5 mt-10'>Core Values</h1>
                        <div className="flex flex-col gap-y-1 mx-5">
                            <p>To love our customers and deliver quality</p>
                            <p>Development of our employees in a merit-based culture</p>
                            <p>Justice to all stakeholders</p>
                            <p>Lawful in every respect</p>
                            <p>A giving back culture</p>
                            <p>Profitability through efficiency</p>
                        </div>

                    </div>
                    <div className='border border-t-1 pt-16 border-x-0 border-b-0 flex flex-col mt-16'>
                        <h1 className='text-4xl font-bold mb-5'>Milestones</h1>
                        <img src="/img/milestone-desktop.jpg" className='mx-auto max-w-[50rem]' alt="" />
                    </div>
                </div>
            </div>
            <ScrollToTop />
            <Footer />
        </>
    )
}

export default About