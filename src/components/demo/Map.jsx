import React from "react";
import ListItem from "./ListItem";

function Map() {
  //   const numbers = [1, 2, 3, 4, 5];
  const students = [
    { id: 1, name: "Manikant" },
    { id: 2, name: "Hasti" },
    { id: 3, name: "Mency" },
    { id: 4, name: "Mit" },
    { id: 5, name: "Jaydip" },
  ];

  //   const elements = [
  //     <li className="bg-indigo-200 p-4 rounded-lg">1</li>,
  //     <li className="bg-indigo-200 p-4 rounded-lg">2</li>,
  //     <li className="bg-indigo-200 p-4 rounded-lg">3</li>,
  //     <li className="bg-indigo-200 p-4 rounded-lg">4</li>,
  //     <li className="bg-indigo-200 p-4 rounded-lg">5</li>,
  //   ];

  //   const elements = students.map((value) => {
  //     return (
  //       <li className="bg-indigo-200 p-4 rounded-lg">
  //         <p className="flex items-center gap-4">
  //           <span className="font-bold">{value.id}.</span>
  //           <span>{value.name}</span>
  //         </p>
  //       </li>
  //     );
  //   });

  return (
    <div>
      <div className="p-8 bg-indigo-700 text-white text-3xl font-bold">Map</div>
      {/* <ul className="p-8 flex flex-col gap-4">
        <li className="bg-indigo-200 p-4 rounded-lg">1</li>
        <li className="bg-indigo-200 p-4 rounded-lg">2</li>
        <li className="bg-indigo-200 p-4 rounded-lg">3</li>
        <li className="bg-indigo-200 p-4 rounded-lg">4</li>
        <li className="bg-indigo-200 p-4 rounded-lg">5</li>
      </ul> */}
      <ul className="p-8 flex flex-col gap-4">
        {students.map((value) => {
          return <ListItem id={value.id} name={value.name} />;
        })}
      </ul>
    </div>
  );
}

export default Map;
