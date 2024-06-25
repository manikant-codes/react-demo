import React, { useEffect, useRef, useState } from "react";

function UseRefDemo() {
  const [input, setInput] = useState("");
  // const [count, setCount] = useState(-1);

  const countRef = useRef(0);
  const inputRef = useRef(null);

  function handleChange(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    // setCount(count + 1);
    countRef.current += 1;
    inputRef.current.focus();
    console.log();
  }, [input]);

  console.log("re-rendered");

  return (
    <div className="p-8">
      <div className="bg-indigo-200 rounded-lg p-8">
        <div className="flex flex-col gap-4">
          <input
            ref={inputRef}
            type="text"
            className="rounded-full py-2 px-4"
            onChange={handleChange}
          />
          <div className="border border-indigo-300 rounded-lg p-4 flex flex-col gap-4">
            <p>{input}</p>
            <p>Re-Rendered: {countRef.current}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseRefDemo;
