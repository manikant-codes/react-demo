import React, { useState } from "react";
import Card from "./Card";
import ListItem from "./ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faGripLines } from "@fortawesome/free-solid-svg-icons";

const places = [
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
    title: "The Great Pyramid of Giza",
    desc: "The oldest and only remaining ancient wonder",
  },
  {
    id: 2,
    img: "https://i.natgeofe.com/n/18b80fef-63f4-4423-8da0-d99ad9b614df/babylonian-oasis-artist-rendering.jpg",
    title: "The Hanging Gardens of Babylon",
    desc: "A beautiful garden in present-day Iraq",
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Le_Jupiter_Olympien_ou_l%27art_de_la_sculpture_antique.jpg",
    title: "The Statue of Zeus at Olympia",
    desc: "A massive statue of Zeus in Greece",
  },
  {
    id: 4,
    img: "https://explorekusadasi.com/wp-content/uploads/2023/04/temple-of-artemis-1024x614.jpg",
    title: "The Temple of Artemis at Ephesus",
    desc: "A massive temple in present-day Turkey",
  },
  {
    id: 5,
    img: "https://wilstar.com/wp-content/uploads/2022/09/mausoleum-1.jpg",
    title: "The Mausoleum at Halicarnassus",
    desc: "A grand tomb in present-day Turkey",
  },
  {
    id: 6,
    img: "https://via.placeholder.com/300x200",
    title: "The Colossus of Rhodes",
    desc: "A massive bronze statue in Greece",
  },
  {
    id: 7,
    img: "https://cdn.britannica.com/07/172307-050-4D3BA855/Pharos-Alexandria.jpg",
    title: "The Lighthouse of Alexandria",
    desc: "A towering lighthouse in Egypt",
  },
];

function List() {
  const [isListVisible, setIsListVisible] = useState(false);

  function handleShowList() {
    setIsListVisible(true);
  }

  function handleShowCard() {
    setIsListVisible(false);
  }

  return (
    <div className="p-8">
      <div className="flex gap-2 mb-4">
        <button
          className="hover:bg-cyan-600 bg-cyan-500 p-2 h-[36px] w-[36px] rounded-full flex items-center justify-center text-white text-lg"
          onClick={handleShowCard}
        >
          <FontAwesomeIcon icon={faGrip} />
        </button>
        <button
          className="hover:bg-cyan-600 bg-cyan-500 p-2 h-[36px] w-[36px] rounded-full flex items-center justify-center text-white text-lg"
          onClick={handleShowList}
        >
          <FontAwesomeIcon icon={faGripLines} />
        </button>
      </div>
      {isListVisible ? (
        <div className="grid grid-cols-1 gap-4">
          {places.map((place) => {
            return <ListItem key={place.id} place={place} />;
          })}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {places.map((place) => {
            return <Card key={place.id} place={place} />;
          })}
        </div>
      )}
    </div>
  );
}

export default List;
