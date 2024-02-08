import React,{useEffect,useState} from 'react'


export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add an event listener to track scroll position
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

    return (
        <div className={`${isVisible ? 'visible' : 'hidden'} flex justify-end mr-4`} onClick={scrollToTop}>
            <img src='/img/arrow_up.svg' className='bg-red-600 p-1  rounded-full  cursor-pointer sToTop' style={{
                'height': '5vh',
                'display': 'flex',
                'justifyContent': 'flex-end',
                'position': 'fixed',
                'bottom': '20px',
                'right': '15px',
                "backgroundPosition": 'top 30% right 20%',
            }}></img> 
        </div>
    )
}