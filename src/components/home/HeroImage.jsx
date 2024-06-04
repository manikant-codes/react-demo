import React from "react";

function HeroImage() {
  return (
    <div style={{ position: "relative" }}>
      <video
        src="/images/hero-video.mp4"
        autoPlay={true}
        type="video/mp4"
        style={{ height: "80vh", width: "100%", objectFit: "cover" }}
        loop
        preLoad="auto"
        // controls
      >
        Video
      </video>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "25",
          transform: "translate(0px, -50%)",
          color: "white",
        }}
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
