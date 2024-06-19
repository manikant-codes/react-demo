import React from "react";
import TodoCard from "../components/customHookDemo/TodoCard";
import useFetch from "../customHooks/useFetch";
import useScroll from "../customHooks/useScroll";

function CustomHookDemo() {
  const todos = useFetch("https://jsonplaceholder.typicode.com/todos");
  const [scroll, moveToTop] = useScroll();

  if (!todos) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 gap-8">
      {todos?.map((todo, index) => {
        return <TodoCard key={todo.id} todo={todo} />;
      })}
      {scroll > 4000 && (
        <button
          className="fixed right-[70px] bottom-[70px] bg-indigo-500 px-4 py-2 rounded-full text-white font-bold"
          onClick={moveToTop}
        >
          Move to Top
        </button>
      )}
    </div>
  );
}

export default CustomHookDemo;
