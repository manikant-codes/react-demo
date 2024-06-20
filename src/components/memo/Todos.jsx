import React, { memo } from "react";

function Todos(props) {
  console.log("todos");
  return (
    <div>
      <h2 className="text-xl font-bold text-indigo-700">Todos</h2>

      <ul className="mt-4">
        {props.todos.map((todo) => {
          return <li key={todo}>{todo}</li>;
        })}
      </ul>
      <button
        className="bg-indigo-500 hover:bg-indigo-700 px-4 py-2 rounded-full text-white flex items-center justify-center mt-6"
        onClick={props.addTask}
      >
        + Add Task
      </button>
    </div>
  );
}

export default memo(Todos);
