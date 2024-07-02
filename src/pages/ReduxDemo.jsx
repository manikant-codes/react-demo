import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake, restockCake } from "../redux/slices/cakeSlice";

function ReduxDemo() {
  const numberOfCakes = useSelector((store) => {
    return store.cake.numberOfCakes;
  });

  const dispatch = useDispatch();

  function handleBuy() {
    dispatch(buyCake());
  }

  function handleRestock() {
    dispatch(restockCake());
  }

  return (
    <div className="flex items-center justify-center h-[400px]">
      <div className="bg-indigo-200 p-8 rounded-lg shadow-sm">
        <h2 className="text-xl">Cake Counter</h2>
        <div className="flex flex-col gap-4 mt-4">
          <p>Cakes: {"🎂".repeat(numberOfCakes)}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={handleBuy}
              className="bg-indigo-500 hover:bg-indigo-700 py-2 px-4 flex items-center justify-center text-white font-bold rounded-lg"
            >
              Buy Cake
            </button>
            <button
              onClick={handleRestock}
              className="bg-indigo-500 hover:bg-indigo-700 py-2 px-4 flex items-center justify-center text-white font-bold rounded-lg"
            >
              Restock Cake
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReduxDemo;
