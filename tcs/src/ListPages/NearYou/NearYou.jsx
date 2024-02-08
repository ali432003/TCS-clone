import React from 'react'
import Nav from "../../components/Nav"
import Footer from '../../components/Footer'

const NearYou = () => {
  return (
    <>
      <Nav />
      <div>
        <div className='bg-[#efefef] text-center py-16'>
          <h1 className='text-4xl font-bold'>TCS Near You</h1>
          <h2 className='text-lg'>Locate your nearest Express Centre</h2>
        </div>
        <div>
          <div className='text-md text-center mx-auto my-8 max-w-[50rem]'>
            <div className='flex gap-x-[1rem] border rounded drop-shadow-lg'>
              <div className='flex flex-col'>
                <div className='flex flex-col text-start bg-[#efefef] p-[2rem]'>
                  <h1 className='my-2'>Search</h1>
                  <input type="text" className='p-1' />
                </div>
                <div className='flex justify-end gap-x-2 -translate-y-4 me-2'>
                  <img src="/img/loc.svg" className='w-[2rem] bg-[#fbfbfb] p-2 rounded-full' alt="" />
                  <img src="/img/search.svg" className='w-[2rem] bg-red-600 p-2 rounded-full' alt="" />
                </div>
                <div className='ps-[1rem]'>
                  <h1 className='text-red-600 font-bold text-lg text-start '>Search Result</h1>
                </div>
              </div>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.0702717012073!2d67.15359817443095!3d24.895584543852863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339bd010044f3%3A0x28a1b29b830aacc0!2sTCS%20Head%20Office%20Karachi!5e0!3m2!1sen!2s!4v1707368753364!5m2!1sen!2s"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className='flex flex-col gap-x-[1rem]  p-[2rem] mt-[2rem]'>
              <div className='flex justify-center flex-col my-[2rem]'>
                <h1 className='text-4xl text-center font-bold'>Find us in these cities</h1>
                <div className='bg-red-600 mt-4 h-2 mx-auto w-20 rounded-lg'></div>
              </div>
              <div className='flex flex-col gap-y-[1rem]'>
                <div className='flex gap-x-[1rem]'>
                  <div>
                    <img src="/img/cities/Karachi.jpg" alt="" />
                  </div>
                  <div>
                    <img src="/img/cities/Lahore.jpg" alt="" />
                  </div>
                  <div>
                    <img src="/img/cities/Faisalabad.png" alt="" />
                  </div>
                </div>

                <div className='flex gap-x-[1rem]'>
                  <div>
                    <img src="/img/cities/Multan.png" alt="" />
                  </div>
                  <div>
                    <img src="/img/cities/Peshawar.png" alt="" />
                  </div>
                  <div>
                    <img src="/img/cities/Quetta.png" alt="" />
                  </div>
                </div>

                <div className='flex gap-x-[1rem]'>
                  <div>
                    <img src="/img/cities/Rawalpindi.jpg" alt="" />
                  </div>
                  <div>
                    <img src="/img/cities/Islamabad.jpg" alt="" />
                  </div>
                  <div>
                    <img src="/img/cities/Gujranwala.png" alt="" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NearYou