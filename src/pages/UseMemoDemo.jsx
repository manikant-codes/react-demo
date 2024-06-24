import React, { useMemo, useState } from "react";

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculation = useMemo(
    function () {
      return expensiveCalculation(count);
    },
    [count]
  );

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = () => {
    setTodos([...todos, "New Todo"]);
  };

  return (
    <div className="p-8 flex flex-col gap-4">
      <div className="bg-indigo-200 p-4">
        <h2 className="text-3xl mb-4">My Todos</h2>
        <div className="my-4 flex- flex-col gap-2 border-2 border-indigo-700 p-4 rounded-lg">
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
        </div>

        <button
          className="bg-indigo-500 py-2 px-4 text-white rounded-full"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>

      <div className="bg-indigo-200 p-4">
        <p>Count: {count}</p>
        <button
          className="bg-indigo-500 py-2 px-4 text-white rounded-full"
          onClick={increment}
        >
          +
        </button>
        <h2>Expensive Calculation: {calculation}</h2>
      </div>
    </div>
  );
}

export default UseMemoDemo;
