import React from "react";

function Card(props) {
  return (
    <div className="animate-[myscale_1s_ease] rounded-lg overflow-hidden shadow-sm h-[300px]">
      <img
        src={props.image.img}
        alt=""
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default Card;
