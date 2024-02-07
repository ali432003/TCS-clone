import React from 'react'

const Descrip = (props) => {
    return (
        <>
            <div className='border border-t-1 pt-16 border-x-0 border-b-0 flex gap-x-4 mt-16'>
                <div className='text-start'>
                    <h1 className='text-3xl font-bold mb-4'>{props.head}</h1>
                    <p >
                        {props.content}
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={`/img/${props.img}`} className='rounded-md max-w-[20rem]' alt="" />
                </div>

            </div>
            <div className={`${props.visiblity} flex flex-col mt-2`}>
                <button className='bg-red-600 text-start max-w-[9rem] py-1 px-4 text-white rounded-sm hover:bg-red-700'>Find out More</button>
            </div>
        </>
    )
}

export default Descrip