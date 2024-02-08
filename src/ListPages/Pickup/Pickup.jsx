import React from 'react'
import Nav from "../../components/Nav"
import Footer from '../../components/Footer'

const Pickup = () => {
  return (
    <>
      <Nav />
      <div>
        <div className='bg-[#efefef] text-center py-16'>
          <h1 className='text-4xl font-bold'>Schedule A Pickup</h1>
        </div>
        <div>
          <div className='text-md text-center mx-auto my-8 max-w-[50rem]'>
            <div className='flex flex-col p-[2rem] border rounded drop-shadow-lg'>
              <h1 className='text-start text-lg font-bold mb-4'>Request for pickup form</h1>
              <div className="flex gap-x-[1rem]">
                <input type="number" placeholder='Mobile Number*' className='p-[0.5rem] pe-2 border rounded-lg w-[24rem]' />
                <input type="email" placeholder='Email*' className='p-[0.5rem] pe-2 border rounded-lg w-[24rem]' />
              </div>
              <div className="flex gap-x-[1rem] mt-[1rem]">
                <input type="text" placeholder='Shipper Name*' className='p-[0.5rem] pe-2 border rounded-lg w-full' />
              </div>
              <div className="flex gap-x-[1rem] mt-[1rem]">
                <select name="" id="" className='p-[0.5rem] pe-2 border rounded-lg w-[24rem]'>
                  <option value="">Consignment Type</option>
                  <option value="">36 Chowk</option>
                  <option value="">36 Chowk</option>
                  <option value="">36 Chowk</option>
                  <option value="">Abbotabad</option>
                  <option value="">Abbotabad</option>
                  <option value="">Abbotabad</option>
                </select>
                <select name="" id="" className='p-[0.5rem] pe-2 border rounded-lg w-[24rem]'>
                  <option value="">Service Type *</option>
                  <option value="">36 Chowk</option>
                  <option value="">36 Chowk</option>
                  <option value="">36 Chowk</option>
                  <option value="">Abbotabad</option>
                  <option value="">Abbotabad</option>
                  <option value="">Abbotabad</option>
                </select>
              </div>
              <div className="flex gap-x-[1rem] mt-[1rem]">
                <input type="number" placeholder='Weight (kg)*' className='p-[0.5rem] pe-2 border rounded-lg w-[24rem]' />
                <select name="" id="" className='p-[0.5rem] pe-2 border rounded-lg w-[24rem]'>
                  <option value="">Pieces*</option>
                  <option value="">36 Chowk</option>
                  <option value="">36 Chowk</option>
                  <option value="">36 Chowk</option>
                  <option value="">Abbotabad</option>
                  <option value="">Abbotabad</option>
                  <option value="">Abbotabad</option>
                </select>
              </div>
              <div className="flex gap-x-[1rem] mt-[1rem]">
                <input type="date" className='p-[0.5rem] pe-2 border rounded-lg w-[24rem]' />
                <select name="" id="" className='p-[0.5rem] pe-2 border rounded-lg w-[24rem]'>
                  <option value="">Pickup Time *</option>
                  <option value="">36 Chowk</option>
                  <option value="">36 Chowk</option>
                  <option value="">36 Chowk</option>
                  <option value="">Abbotabad</option>
                  <option value="">Abbotabad</option>
                  <option value="">Abbotabad</option>
                </select>
              </div>
              <div className='flex gap-x-[1rem] mt-[1rem]'>
                <select name="" id="" className='p-[0.5rem] pe-2 border rounded-lg w-[24rem]'>
                  <option value="">Origin (City)</option>
                  <option value="">36 Chowk</option>
                  <option value="">36 Chowk</option>
                  <option value="">36 Chowk</option>
                  <option value="">Abbotabad</option>
                  <option value="">Abbotabad</option>
                  <option value="">Abbotabad</option>
                </select>
                <select name="" id="" className='p-[0.5rem] pe-2 border rounded-lg w-[24rem]'>
                  <option value="">Destination (City)</option>
                  <option value="">36 Chowk</option>
                  <option value="">Abbotabad</option>
                </select>
              </div>
              <div className='flex gap-x-[1rem] mt-[1rem]'>
                <input type="text" placeholder='Shipper Address*' className='p-[0.5rem] pe-2 border rounded-lg w-full' />
                <img src="/img/loc.svg" className='w-[2rem]' alt="" />
              </div>
              <div className='flex gap-x-[1rem] mt-[1rem]'>
                <input type="text" placeholder='Nearest Landmark*' className='p-[0.5rem] pe-2 border rounded-lg w-full' />
                <input type="text" placeholder='Special Instruction*' className='p-[0.5rem] pe-2 border rounded-lg w-full' />
              </div>
              <div className='flex gap-x-[1rem] mt-[1rem]'>
                <input type="text" placeholder='Building/House No*' className='p-[0.5rem] pe-2 border rounded-lg w-full' />
                <input type="text" placeholder='Area*' className='p-[0.5rem] pe-2 border rounded-lg w-full' />
              </div>
              <div className='text-end mt-4'>
                <h1 className='font-bold'>Total Fare: 0</h1>
              </div>
            </div>
            <div className='flex flex-col p-[2rem] border rounded drop-shadow-lg mt-[2rem]'>
              <h1 className='text-start text-lg font-bold mb-4'>Consignee Information</h1>
              
              <div className='flex gap-x-[1rem] mt-[1rem]'>
                <input type="text" placeholder='Name*' className='p-[0.5rem] pe-2 border rounded-lg w-full' />
                <input type="number" placeholder='Mobile Number*' className='p-[0.5rem] pe-2 border rounded-lg w-full' />
              </div>
              <div className='flex gap-x-[1rem] mt-[1rem]'>
                <input type="text" placeholder='Address*' className='p-[0.5rem] pe-2 border rounded-lg w-full' />
                <img src="/img/loc.svg" className='w-[2rem]' alt="" />
              </div>
              <div className='flex gap-x-[1rem] mt-[1rem]'>
                <input type="email" placeholder='Email*' className='p-[0.5rem] pe-2 border rounded-lg w-full' />
              </div>
              <div className='flex gap-x-[1rem] mt-[1rem]'>
                <input type="text" placeholder='Nearest Landmark*' className='p-[0.5rem] pe-2 border rounded-lg w-full' />
              </div>
              <div className="reCAPTCHA"></div>
              <div>
                <button className='bg-red-600 ease-in duration-200 hover:bg-red-700 text-white py-2 px-[3rem]  rounded border border-[#efefe] w-full mt-4 drop-shadow-xl'>Submit</button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Pickup