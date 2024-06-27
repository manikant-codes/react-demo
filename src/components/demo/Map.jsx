import React from "react";

function Map() {
  const data = [1, 2, 3, 4, 5];

  // const data = [
  //   { id: 1, name: "Manikant" },
  //   { id: 2, name: "Hiren" },
  //   { id: 3, name: "Krish" },
  //   { id: 4, name: "Keval" },
  //   { id: 5, name: "Vihar" },
  // ];

  //   const listItems = [
  //     <li className="bg-indigo-200 p-4 rounded-lg">1</li>,
  //     <li className="bg-indigo-200 p-4 rounded-lg">2</li>,
  //     <li className="bg-indigo-200 p-4 rounded-lg">3</li>,
  //     <li className="bg-indigo-200 p-4 rounded-lg">4</li>,
  //     <li className="bg-indigo-200 p-4 rounded-lg">5</li>,
  //   ];

  const listItems = data.map((value, index) => {
    return (
      <li className={`bg-indigo-200 p-4 rounded-lg`}>
        <p className="flex items-center gap-4">
          <span className="font-bold">{value.id}.</span>{" "}
          <span>{value.name}</span>
        </p>
      </li>
    );
  });

  return (
    <div>
      <div className="p-8 bg-indigo-700">
        <h2 className="text-3xl font-bold text-white">Map</h2>
      </div>
      <div className="p-8">
        {/* <ul className="flex flex-col gap-2">
          <li className="bg-indigo-200 p-4 rounded-lg">1</li>
          <li className="bg-indigo-200 p-4 rounded-lg">2</li>
          <li className="bg-indigo-200 p-4 rounded-lg">3</li>
          <li className="bg-indigo-200 p-4 rounded-lg">4</li>
          <li className="bg-indigo-200 p-4 rounded-lg">5</li>
        </ul> */}
        <ul className="flex flex-col gap-2">{listItems}</ul>
      </div>
    </div>
  );
}

export default Map;
