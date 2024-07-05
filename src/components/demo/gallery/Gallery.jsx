import React from "react";
import ListItem from "./ListItem";
import Card from "./Card";

const wonders = [
  {
    id: 1,
    name: "Great Wall of China",
    img: "https://cdn.britannica.com/82/94382-050-20CF23DB/Great-Wall-of-China-Beijing.jpg?w=600&q=60",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rerum!",
  },
  {
    id: 2,
    name: "Chichén Itzá",
    img: "https://cdn.britannica.com/49/61349-050-9FFBEB28/El-Castillo-pyramid-plaza-Toltec-state-Yucatan.jpg?w=600&q=60",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rerum!",
  },
  {
    id: 3,
    name: "Petra",
    img: "https://cdn.britannica.com/25/153525-050-FC43840D/Khaznah-Petra-Jordan.jpg?w=600&q=60",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rerum!",
  },
  {
    id: 4,
    name: "Machu Picchu",
    img: "https://cdn.britannica.com/30/94530-050-99493FEA/Machu-Picchu.jpg?w=600&q=60",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rerum!",
  },
  {
    id: 5,
    name: "Christ the Redeemer",
    img: "https://cdn.britannica.com/54/150754-050-5B93A950/statue-Christ-the-Redeemer-Rio-de-Janeiro.jpg?w=600&q=60",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rerum!",
  },
  {
    id: 6,
    name: "Colosseum",
    img: "https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg?w=600&q=60",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rerum!",
  },
  {
    id: 7,
    name: "Taj Mahal  ",
    img: "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg?w=600&q=60",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rerum!",
  },
];

function Gallery(props) {
  return (
    <div className="p-8">
      {props.showList ? (
        <div className="grid grid-cols-1 gap-2">
          {wonders.map((value) => {
            return <ListItem key={value.id} value={value} />;
          })}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2">
          {wonders.map((value) => {
            return <Card key={value.id} value={value} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Gallery;
