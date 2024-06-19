import React from "react";

function TodoCard(props) {
  return (
    <div className="bg-slate-200 p-4 rounded-lg flex flex-col gap-2">
      <p className="text-indigo-400 font-bold">{props.todo.id}</p>
      <h2>{props.todo.title}</h2>
      <p>Completed: {props.todo.completed.toString()}</p>
    </div>
  );
}

export default TodoCard;
