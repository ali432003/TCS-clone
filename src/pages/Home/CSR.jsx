import React, { useState } from 'react'
import "../styling/img-slider.css"


const CSR = () => {

    let [img1,setImg1] = useState('image1.1')
    let [img2,setImg2] = useState('image2.1')
    let [img3,setImg3] = useState('image3.1')

    let [heading,setheading] = useState('TCS')
    let [content,setContent] = useState('We continue to support TCF’s non-profit initiatives and activities, following the precedence set by Saadia Awan as the founding member of The Citizens Foundation.')

    let left = () =>{
        setImg1('2.1')
        setImg2('2.2')
        setImg3('2.3')
        setheading('Khadija School')
        setContent('TCS prepared a futsal court for the underprivileged children of Khadija Kazi Ali Welfare Complex School. The happiness on children’s faces is priceless.')
    }
    let right = () =>{
        setImg1('image1.1')
        setImg2('image2.1')
        setImg3('image3.1')
        setheading('TCS')
        setContent('We continue to support TCF’s non-profit initiatives and activities, following the precedence set by Saadia Awan as the founding member of The Citizens Foundation.')
    }



    return (
        <>
            <div className='flex flex-evenly mt-24 max-w-[50rem] mx-auto gap-x-[2rem]'>
                <div className=''>
                    <h1 className='text-4xl text-start font-bold'>TCS's CSR Activities <br />In Pakistan</h1>
                    <div className='bg-red-600 mt-4 h-2  w-20 rounded-lg'></div>
                    <div className='my-20'>
                        <p>As one of the largest logistics organisations in Pakistan, TCS is aware of its responsibility of giving back to the society. In fact, helping the less fortunate is one of the founding pillars of our organisation. Over the years, we have worked to build systems and programmes that allow us to do good for society and to provide assistance to the less fortunate whenever needed.</p>
                    </div>
                </div>
                <div className='mx-auto my-auto'>
                    <div className='w-96 bg-red-600 mt-24'>
                        <div className='absolute flex justify-between'>
                            <img src={`/img/${img1}.jpg`} className=' w-36 -translate-y-24 mx-1 -ms-5' />
                            <img src={`/img/${img2}.jpg`} className=' w-36 -translate-y-28 mx-1 -mt-9' />
                            <img src={`/img/${img3}.jpg`} className=' w-36 -translate-y-24 mx-1' />
                        </div>
                        <div className='flex justify-between pt-20 mx-10'>
                            <h1 className='text-white font-bold text-xl'>{`${heading}`}</h1>
                            <img src="/img/left-arrow.png" onClick={left} className='filter brightness-0 invert h-6 cursor-pointer' alt="" />
                            <img src="/img/right-arrow.png" onClick={right} className='filter brightness-0 invert h-6 cursor-pointer' alt="" />
                        </div>
                        <div>
                            <p className='text-sm pt-5 mx-4 text-white py-6'>
                                {`${content}`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CSR