import React, { useState } from 'react';

const Ques = (props) => {
    const [img, setImg] = useState('down.png');
    const [show, setShow] = useState('hidden');

    const toggleImg = () => {
        if (img === 'down.png') {
            setImg('up.png');
            setShow('')
        } else {
            setImg('down.png');
            setShow('hidden')
        }
    };

    return (
        <div className='mx-auto max-w-[50rem] mt-10'>
            <div className='cursor-pointer'>
                <div className='flex justify-between' onClick={toggleImg}>
                    <h1 className='font-bold text-lg'>{props.ques}</h1>
                    <img src={`/img/${img}`} className='w-[1rem] h-[1rem]' alt="" />
                </div>
                <div className={`${show} mt-2 border border-t-1  border-x-0 border-b-0 flex`}>
                    <p>
                        {props.ans}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Ques;
