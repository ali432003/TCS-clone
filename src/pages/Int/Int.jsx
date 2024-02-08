import React from 'react'
import Nav from "../../components/Nav"
import Footer from '../../components/Footer'
import Descrip from '../../components/Descrip'
import ScrollToTop from '../../components/ScrollToTop'


const Int = () => {
  return (
    <>
      <Nav />
      <div>
        <img src="/img/main-banner.jpg" className='w-[100%]' alt="" />
      </div>
      <div>
        <div className='text-md text-center mx-auto my-8 max-w-[50rem]'>

          <p className='text-start'>
            Our International courier and logistics operation is your strong connection for moving anything to and from Pakistan, locally and globally. Our services include regular and discounted document services,
            PI-2 and PI-3, Student Express—which allows flat rate for educational organisations worldwide. We also cater to full range of international non-Doc services including PN, Export Express, Import Express and the Freight Plus, whether you need to ship something personally, as a B2B or a B2C customer.
          </p>
          <p className='text-start mt-4'> 
            With stations and hubs in the UK, UAE and Canada, our international operations always stay on top of the changing international trends so you can receive the best international courier and logistics services, round the clock, 365 days a year.
          </p>
          <div className='flex justify-between font-bold mt-4 text-start'>
            <div >
              <li>RedBox</li>
              <li>Express Flyer</li>
              <li>Express Flyer</li>
              
            </div>

            <div>
              <li>Express Flyer</li>
              <li>Express Flyer</li>
              <li>Express Flyer</li>
              
            </div>

            <div>
              <li>Customer Brokerage</li>
              <li>Regional Trade / TIR</li>
            </div>

          </div>
          <Descrip head="RedBox" content="RedBox service is specifically designed to send parcels of 1, 2, 3, 5, 10, 15, 20 and 25 kilograms at very special rates. You can send all non-perishable items including fragile, to all major, local and selected international destinations through our RedBox service." img="international-banner/redbox.jpg" visiblity="hidden" brack="(international)"/>
          <Descrip head="Express Flyer" content="Express Flyer is the most popular service of TCS. The name is derived from and based on the iconic sealed bag made of strong, recyclable, water-proof and tear-resistant, d2w-compliant Virgin material. The bag, once sealed, cannot be opened with an intention to re-seal, thus making it impossible to hide the signs of tempering with the enclosed contents. The Express Flyer can be used with a host of value-added services e.g. the Overnight Express." img="international-banner/expressflyer.jpg" visiblity="hidden" brack="(international)"/>
          <Descrip head="US Passport Renewal" content="TCS provides a secure and convenient way to renew US passport. The US citizens can either visit a TCS Express Centre to hand over their passports or arrange for a pickup of their documents to be submitted to the nearest US embassy on their behalf. Selected TCS Express Centres are open twenty-four hours, which makes it a more flexible and time-saving option." img="international-banner/uspassport.jpg" visiblity="hidden" />
          <Descrip head="Students Express" content="TCS Students Express provides a reliable, convenient and affordable way for students to send their academic documents locally and abroad. For documents ’shipment only, this service benefits prospective students and alumni in need of safely sending and receiving letters, educational transcripts or other important documents to and from educational institutions worldwide. The service additionally helps students by allowing them to despatch important documents anywhere in the world for a flat rate." img="international-banner/studentexpress.jpg" visiblity="hidden" />
          <Descrip head="Visatronix" content="TCS Visatronix provides a hassle-free, one window, visa dropbox and value-added visa facilitation services. Operating from eleven major cities of Pakistan, with a dedicated team of courteous and experienced visa services officers, we manage over 100,000 visa applications annually. To offer further convenience, applications are booked on a ‘Return Service Basis ’at selected TCS Express Centres located in all major cities of Pakistan. The ever increasing list of destinations currently serves Egypt, Greece, India, Italy, Malaysia, Malta, South Africa, Spain, Thailand and Tunisia." img="international-banner/image-5.jpg" />
          <Descrip head="International Freight" content="TCS provides seamless regional and global connectivity through its vast network which includes the leading logistics players from east to west. With international gateways in Karachi, Lahore, Islamabad, and our regional hub in the UAE and growing partnerships in Central Asia and the world, we are focused on enabling and enhancing trade and commerce for ‘Made in Pakistan’ as the logistics backbone of our economy." img="international-banner/image-6.jpg" />
          <Descrip head="Custom Brokerage" content="Whether you are shipping through air, ocean, or overland, we will help you reduce the risks of delays and penalties by ensuring accurate customs and associated border agencies compliances. Regardless of the goods’ port of entry/exit, TCS covers the entire spectrum of customs services including import, export, transit customs clearance, supply chain valuation, customs consulting and complex customs solutions." img="international-banner/customerbrokerage.jpg"  />
          <Descrip head="Regional Trade / TIR" content="Although Pakistan has been promoting its geographically strategic location for decades it has only been recently that affirmative measures were taken to capitalise on its key location at a global scale which would not only benefit the country itself but also utilise the tremendous potential in Pakistan's services sector and manpower capabilities. To achieve that, UN TIR Convention overseen by the International Road Transport Union (IRU) was implemented which is a tried and tested system and has already been in effect internationally. TCS, Pakistan’s first registered TIR authorised operator, and the pioneer of TIR operations from Pakistan to Uzbekistan is also approved by the government of Pakistan and USAID." img="international-banner/image-8.jpg" />
          
        </div>
      </div>
      <ScrollToTop/>
      <Footer />
    </>
  )
}

export default Int