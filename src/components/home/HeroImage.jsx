import React from "react";

function HeroImage() {
  return (
    <div style={{ position: "relative" }}>
      <video
        src="/images/hero-video.mp4"
        autoPlay={true}
        type="video/mp4"
        // style={{ height: "80vh", width: "100%", objectFit: "cover" }}
        loop
        preLoad="auto"
        controls
        className="h-[100vh] lg:h-[80vh] w-full object-cover"
      >
        Video
      </video>
      <div
        // style={{
        //   position: "absolute",
        //   top: "50%",
        //   left: "25",
        //   transform: "translate(0px, -50%)",
        //   color: "white",
        // }}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center"
      >
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          itaque.
        </p>
      </div>
    </div>
  );
}

export default HeroImage;
