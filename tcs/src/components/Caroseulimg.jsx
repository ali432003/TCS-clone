import React, { useState, useEffect } from 'react';
import "./styling/img-slider.css"


const Caroseulimg = (props) => {
  const [imageIndex, setImageIndex] = useState(0);

  const swipeRight = () => {
    setImageIndex((index) => {
      if (index === props.imageUrls.length - 1) return 0;
      return index + 1;
    });
  };

  const swipeLeft = () => {
    setImageIndex((index) => {
      if (index === 0) return props.imageUrls.length - 1;
      return index - 1;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      swipeRight(); 
    }, 3000);  

    return () => {
      clearInterval(intervalId);
    };
  }, []); 
  return (
    <div>
      <img src={props.imageUrls[imageIndex]} alt="" />
      <button onClick={swipeRight} className="img-slider-btn" style={{ right: 0 }}>
        <img src="/img/right-arrow.png" className='filter brightness-0 invert' alt="" />
      </button>
      <button onClick={swipeLeft} className="img-slider-btn " style={{ left: 0 }}>
        <img src="/img/left-arrow.png" className='filter brightness-0 invert' alt="" />
      </button>
    </div>
  );
};

export default Caroseulimg;
