import { useState } from "react";

// function HOC(Component) {
//   return function NewComponent() {
//     const [count, setCount] = useState(0);

//     function handleIncrement() {
//       setCount(count + 1);
//     }

//     return (
//       <>
//         <Component handleIncrement={handleIncrement} />
//         <p>Click: {count}</p>
//       </>
//     );
//   };
// }

function HOC({ Component }) {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <>
      <Component handleIncrement={handleIncrement} />
      <p>Click: {count}</p>
    </>
  );
}

export default HOC;
