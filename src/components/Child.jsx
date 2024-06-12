import React, { useState } from "react";

function Child({ getData }) {
  const [someData, setSomeData] = useState({
    id: 1,
    name: "Manikant",
    city: "Surat",
  });

  //   getData(someData);

  return (
    <div>
      <h1>Child</h1>
      <button onClick={() => getData(someData)}>Get Data</button>
    </div>
  );
}

export default Child;
