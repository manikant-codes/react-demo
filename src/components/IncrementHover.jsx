import React from "react";

function IncrementHover({ handleIncrement }) {
  return (
    <div>
      <button onMouseOver={handleIncrement}>Increment</button>
    </div>
  );
}

export default IncrementHover;
