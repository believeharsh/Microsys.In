import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const ImgUrls = [
    { url : "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "first Picture"},
    { url : "https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "first Picture"},
    { url : "https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "first Picture"},
    { url : "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "first Picture"},
    { url : "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "first Picture"},
  ];

  const [currImgIndex, setcurrImgIndex] = useState(0);

  const nextSlide = () => {
    setcurrImgIndex((previndex) =>
      previndex === ImgUrls.length - 1 ? 0 : previndex + 1
    );
  };
  const prevslide = () => {
   
      setcurrImgIndex((previndex) =>
        previndex === 0 ? ImgUrls.length - 1 : previndex - 1
      );
    
  };

  useEffect(() => {
   const IntervalId =  setInterval(() => {
    nextSlide()
        
    }, 5000);
return () =>  clearInterval(IntervalId)
  }, [])
  
  return (
    <>
      <div className="w-[200px] h-[100px] rounded-xl border-black border-[1px] mx-auto mt-3">
        {/* <div className="">
          <img src={ImgUrls[currImgIndex]} alt="" />
        </div> */}

        {ImgUrls.map((image, index) => {
          return (
            <div className="" key={index}>
              <img
                // key={index}
                src={index === currImgIndex ? image.url : ""}
                alt="Slider"
                style={{
                  display: index === currImgIndex ? "block" : "none",
                }}
                 
              />
            </div>
          );
        })}

        <div className="text-black text-xl font-bold z-[1]" onClick={nextSlide}>
          1
        </div>
        <div className="text-black text-xl font-bold z-[1]" onClick={prevslide}>
          2
        </div>
      </div>
    </>
  );
};

export default ImageSlider;

