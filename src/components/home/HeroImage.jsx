import React from "react";

function HeroImage() {
  return (
    <div style={{ position: "relative" }}>
      <video
        src="/images/hero-video.mp4"
        autoPlay
        loop
        muted
        type="video/mp4"
        className="h-[100vh] lg:h-[80vh] w-full object-cover"
      />

      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center">
        <h2 className="text-6xl">Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          itaque.
        </p>
      </div>
    </div>
  );
}

export default HeroImage;
