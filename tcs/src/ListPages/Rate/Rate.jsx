import React from 'react'
import Nav from "../../components/Nav"
import Footer from '../../components/Footer'

const Rate = () => {
  return (
    <>
      <Nav />
      <div>
        <div className='bg-[#efefef] text-center py-16'>
          <h1 className='text-4xl font-bold'>Rate Calculator</h1>
        </div>
        <div>
        <div className='text-md text-center mx-auto my-8 max-w-[50rem]'>
        <div className={`flex  flex-col my-[2rem] p-[2rem] border rounded`}>
              <h1 className='text-start text-lg font-bold'>Get a quote form</h1>
              <div className='flex justify-center gap-x-[2rem] mt-[1rem]'>
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
              <div className='flex justify-center gap-x-[2rem] mt-[1rem]'>
                <input type="number" placeholder='Weight (kg)' className='p-[0.5rem] pe-2 border rounded-lg w-[24rem]' />
                <input type="date" className='p-[0.5rem] pe-2 border rounded-lg w-[24rem]' />
              </div>
              <div className="reCAPTCHA"></div>
              <div>
                <button className='bg-red-600 hover:bg-red-700 text-white py-2 px-[3rem]  rounded border border-[#efefe] w-full mt-4 drop-shadow-xl'>Submit</button>
              </div>
            </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Rate