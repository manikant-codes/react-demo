import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HeroImage(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <div className="relative h-[calc(100vh-88px)] overflow-hidden">
      <div className="absolute top-[50%] left-[50%] text-white z-[100] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="text-6xl mb-4">{props.title}</h2>
        <p className="text-lg">{props.desc}</p>
      </div>
      <Slider {...settings}>
        <div className="h-[calc(100vh-88px)] relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-950 opacity-50 z-[100]" />
          <img src={props.img} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="h-full relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-950 opacity-50 z-[100]" />
          <img
            src="https://images.unsplash.com/photo-1469755785741-720ca0c526a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-full relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-950 opacity-50 z-[100]" />
          <img
            src="https://images.unsplash.com/photo-1500087326943-dcabb70c026f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}

export default HeroImage;
