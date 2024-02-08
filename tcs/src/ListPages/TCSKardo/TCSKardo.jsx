import { useState } from 'react'
import Nav from "../../components/Nav"
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'

const TCSKardo = () => {
  const [showship, setShowShip] = useState('hidden');
  const [showquote, setShowQuote] = useState('hidden');
  const navigate = useNavigate();

  let shipment = () => {
    setShowShip(showship === 'hidden' ? '' : 'hidden');
  }
  let quote = () => {
    setShowQuote(showquote === 'hidden' ? '' : 'hidden');
  }
  return (
    <>
      <Nav />
      <div>
        <div className='bg-[#efefef] text-center py-16'>
          <h1 className='text-4xl font-bold'>TCS Kardo</h1>
        </div>
        <div>
          <div className='text-md text-center mx-auto my-8 max-w-[50rem]'>
            <div className='flex justify-center gap-x-[2rem]'>
              <button className='hover:bg-red-600 hover:text-white py-2 px-[3rem] ease-in duration-300 rounded border border-[#efefe] w-[21rem] drop-shadow-xl' onClick={shipment}>New Customer</button>
              <button className='hover:bg-red-600 hover:text-white py-2 px-[3rem] ease-in duration-300 rounded border border-[#efefe] w-[21rem] drop-shadow-xl' onClick={() => navigate("/myTCS  ")}>Existing Customer</button>
            </div>
            <div className={`flex flex-col my-[2rem] ${showship}  `}>
              <p>Single Shipment or Regular Shipping?</p>
              <div className='flex flex-row gap-x-[3rem] text-start mt-[2rem]'>
                <div className='flex flex-col gap-y-2 border rounded p-[2rem]'>
                  <h4 className='text-2xl font-bold'>Single Shipment</h4>
                  <p>One Origin to One Destination</p>
                  <button className='hover:bg-red-600 text-red-600 hover:text-white py-2 px-[3rem] ease-in duration-300 rounded-lg border border-red-600 w-[21rem] drop-shadow-xl' onClick={quote}>Get a Quote</button>
                </div>
                <div className='flex flex-col gap-y-2 border rounded p-[2rem]'>
                  <h4 className='text-2xl font-bold'>Regular Shipping</h4>
                  <p>Multiple Shipments, Origins and Destinations</p>
                  <button className='bg-red-600 hover:bg-red-700 text-white py-2 px-[3rem] rounded-lg border border-[#efefe] w-[21rem] drop-shadow-xl'>Open An Account</button>
                </div>
              </div>
            </div>
            <div className={`flex  flex-col my-[2rem] ${showquote} p-[2rem] border rounded`}>
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
                <button className='bg-red-600 hover:bg-red-700 text-white py-2 px-[3rem]  rounded border border-[#efefe] w-full mt-4 drop-shadow-xl' onClick={shipment}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TCSKardo