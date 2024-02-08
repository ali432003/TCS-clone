import React from 'react'
import Nav from "../../components/Nav"
import Footer from '../../components/Footer'
import Descrip from '../../components/Descrip'
import ScrollToTop from '../../components/ScrollToTop'


const Ecom = () => {
  return (
    <>
      <Nav />
      <div>
        <img src="/img/main-banner1.jpg" className='w-[100%]' alt="" />
      </div>
      <div>
        <div className='text-md text-center mx-auto my-8 max-w-[50rem]'>

          <p className='text-start'>
            No other industry is changing as rapidly and with as much effect as the e-commerce industry. The
            e-com landscape in Pakistan is at an extremely exciting stage given that it is still exploring and finding its own feet. The outlook for local entrepreneurs as well as venture capitalists remains strong in the medium to long term, which has helped many businesses, small and large, to operate successfully and to build a customer base that would have been otherwise impossible to reach.
          </p>
          <p className='text-start mt-4'>
            With e-commerce industry booming and gaining momentum in Pakistan, TCS is leading the way, when it comes to bringing everything at the doorstep of our customers. When you remove the physical boundaries of a store, you offer a plethora of convenience to your customers, and this is where TCS can become your partner in making your customers’ lives convenient and easy.
          </p>
          <div className='flex gap-x-[15rem] font-bold mt-4 text-start'>
            <div >
              <li>COD & COD+</li>
            </div>
            <div>
              <li>Fulfilment Services</li>
            </div>
          </div>
          <div className={`flex flex-col mt-[3rem]`}>
            <button className='bg-red-600 text-start max-w-[10rem] py-2 px-4 text-white rounded-sm hover:bg-red-700'>Open An Account</button>
          </div>
          <Descrip head="COD & COD+" content="Always looking for ways to add more value for its customers, TCS E-com division started offering Cash-on-Delivery services in 2006. Witnessing the enormous advantages for home/small and medium enterprises, almost all retail corporations now leverage the benefits that COD provides.Going a step further, TCS started COD+ in 2022, allowing home/small businesses as well as the cottage industries to use the strengths of COD. Suitable for low volume or infrequent deliveries, COD+ provides the facility of quick cash reimbursements, without having the need of opening a corporate account or a bank account at all." img="DomesticScrollingBanner/image11.jpg" visiblity="hidden" />
          <Descrip head="Fulfilment Services" content="TCS offers a one-stop solution to fulfil all e-com needs and empowers online businesses without the need to invest in their own fulfilment facilities with tools required to meet the challenges of an eternally competitive online market. Our top of the line tool Envio, offers a one-window solution for all online business needs, ranging from booking and tracking multiple shipments at once, creating location-wise cost centres, multiple pickup/delivery options, to logging complaints and facilitating return logistics—all within the reach of a few clicks and without the hassle of having to manage the exhaustive paperwork." img="fulfilment-center.jpg" visiblity="hidden" />
        </div>
      </div>
      <ScrollToTop/>
      <Footer />
    </>
  )
}

export default Ecom