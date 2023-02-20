import React, { useEffect, useRef, useState } from 'react';
import slider1 from '../../AriTechsResource/Banner-image/pexels-aleksandar-pasaric-325185-min.jpg';
import slider2 from '../../AriTechsResource/Banner-image/pexels-christina-morillo-1181271-min (2).jpg';
import slider3 from '../../AriTechsResource/Banner-image/pexels-federico-orlandi-3260626-min (1).jpg';
import slider4 from '../../AriTechsResource/Banner-image/pexels-pixabay-247791.jpg';


let count = 0;
const Slider = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const timeRef = useRef(null);

useEffect(()=>{
timeRef.current = setTimeout(()=>{
  handleNext();
},3000);
});

  const sliderData = [
    {
      image: slider1,
   
    },
    {
      image: slider2
    },
    {
      image: slider3,
    },
    {
      image: slider4,
    }
  ]
  
    const sliderImg = sliderData.map(slider => slider.image )
    console.log('array', sliderImg);

      const handleNext = ()=>{
        count = (count + 1) % sliderImg.length;
        setCurrentIndex(count);
    };

    const handlePrev = ()=>{
      const serviceLength = sliderImg.length;
      count = (currentIndex + serviceLength - 1) % serviceLength
      setCurrentIndex(count);
    };

    return (
      
        <div className="carousel h-96 w-full">
          <div id="" className="carousel-item relative w-full">
          <img src= {sliderImg[currentIndex]} alt="" className="w-full" />
          <div className="absolute flex justify-between left-5 right-5 place-self-center">
            <button onClick={handlePrev} className="btn btn-circle">❮</button> 
            <button onClick={handleNext} className="btn btn-circle">❯</button>
          </div>
        </div>
      </div>
    );
};

export default Slider;