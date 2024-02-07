import React, { useState } from 'react';

const Ques = () => {
    const [img, setImg] = useState('down.png');

    const toggleImg = () => {
        if (img === 'down.png') {
            setImg('up.png');
        } else {
            setImg('down.png');
        }
    };

    return (
        <div className='mx-auto max-w-[50rem] mt-10'>
            <div className='flex justify-between' onClick={toggleImg}>
                <h1 className='font-bold text-lg'>What is TCS ‘On Call Pickup’ for corporate customers?</h1>
                <img src={`/img/${img}`} className='w-[1rem] h-[1rem]' alt="" />
            </div>
        </div>
    );
};

export default Ques;
