import React from "react";

function ConditionalRow(props) {
  //   let image = null;

  //   if (props.showImg) {
  //     image = (
  //       <img
  //         src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/286px-Altja_j%C3%B5gi_Lahemaal.jpg"
  //         alt=""
  //       />
  //     );
  //   }

  return (
    <div>
      {props.showImg ? (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/286px-Altja_j%C3%B5gi_Lahemaal.jpg"
          alt=""
        />
      ) : (
        <h1>No image!</h1>
      )}
      {/* {props.showImg && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/286px-Altja_j%C3%B5gi_Lahemaal.jpg"
          alt=""
        />
      )} */}
      <h1>Conditional Row</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere debitis
        optio unde non provident quam dolores libero soluta consequatur culpa?
        Fuga soluta voluptatum facilis rerum tempore. Atque provident quaerat
        expedita.
      </p>
    </div>
  );
}

export default ConditionalRow;
