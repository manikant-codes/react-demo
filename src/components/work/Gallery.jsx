import React from "react";
import { images } from "../../data/gallery";
import Card from "./Card";

function Gallery(props) {
  return (
    <div className="mt-8 grid grid-cols-3 gap-4">
      {images[props.activeTab].map((image) => {
        return <Card key={image.id} image={image} />;
      })}
    </div>
  );
}

export default Gallery;
