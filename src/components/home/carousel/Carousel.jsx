import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./Slide";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
};

function Carousel(props) {
  return (
    <div className="relative h-[calc(100vh-88px)] overflow-hidden">
      <div className="absolute top-[50%] left-[50%] text-white z-[100] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="text-6xl mb-4">{props.title}</h2>
        <p className="text-lg">{props.desc}</p>
      </div>
      <Slider
        // dots={true}
        // infinit={true}
        // speed={500}
        // slidesToShow={1}
        // slidesToScroll={1}
        {...settings}
      >
        {props.slidesData.map((slide) => {
          return <Slide img={slide.img} />;
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
