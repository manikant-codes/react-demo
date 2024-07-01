import React, { useReducer, useState } from "react";

function reducer(state, action) {
  if (action.type === "ADD") {
    return [...state, action.payload];
  } else if (action.type === "UPDATE") {
  } else if (action.type === "DELETE") {
    const newArray = state.filter((todo) => {
      if (todo.id === action.payload) {
        return false;
      }
      return true;
    });
    return newArray;
  } else {
    return state;
  }
}

function UseReducerTodos() {
  const [task, setTask] = useState("");

  const [todos, dispatch] = useReducer(reducer, [
    {
      id: Date.now(),
      isCompleted: false,
      task: "Lorem ipsum dolor sit amet.",
    },
  ]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleAdd() {
    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        isCompleted: false,
        task: task,
      },
    });
  }

  function handleDelete(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex gap-4">
        <input
          className="border border-indigo-500 rounded-lg py-2 px-4 grow-[1]"
          type="text"
          onChange={handleChange}
        />
        <button
          className="bg-indigo-500 hover:bg-indigo-700 py-2 px-4 flex items-center justify-center text-white font-bold rounded-lg"
          onClick={handleAdd}
        >
          Add Todo
        </button>
      </div>
      <div>
        <ul className="flex flex-col gap-2">
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className="flex items-center gap-2 bg-indigo-100 p-4 rounded-lg"
              >
                <input type="checkbox" />
                <p className="grow-[1]">{todo.task}</p>
                <button
                  className="bg-red-500 hover:bg-red-700 py-2 px-4 flex items-center justify-center text-white font-bold rounded-lg"
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                >
                  Del
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default UseReducerTodos;
