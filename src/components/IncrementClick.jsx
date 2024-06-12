import React from "react";

function IncrementClick({ handleIncrement }) {
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default IncrementClick;
