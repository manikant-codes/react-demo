import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake, restockCake } from "../redux/slices/cakeSlice";
import { buyIcecream, restockIcecream } from "../redux/slices/icecreamSlice";

function ReduxDemo() {
  const numberOfCakes = useSelector((store) => {
    return store.cake.numberOfCakes;
  });

  const numberOfIcecreams = useSelector((store) => {
    return store.icecream.numberOfIcecreams;
  });

  const dispatch = useDispatch();

  function handleBuyCake() {
    dispatch(buyCake());
  }

  function handleRestockCake() {
    dispatch(restockCake());
  }

  function handleBuyIcecream() {
    dispatch(buyIcecream());
  }

  function handleRestockIcecream() {
    dispatch(restockIcecream());
  }

  return (
    <div className="flex items-center gap-8 justify-center h-[400px]">
      <div className="bg-indigo-200 p-8 rounded-lg shadow-sm w-[400px]">
        <h2 className="text-xl">Cake Counter</h2>
        <div className="flex flex-col gap-4 mt-4">
          <p>Cakes: {"🎂".repeat(numberOfCakes)}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={handleBuyCake}
              className="bg-indigo-500 hover:bg-indigo-700 py-2 px-4 flex items-center justify-center text-white font-bold rounded-lg"
            >
              Buy Cake
            </button>
            <button
              onClick={handleRestockCake}
              className="bg-indigo-500 hover:bg-indigo-700 py-2 px-4 flex items-center justify-center text-white font-bold rounded-lg"
            >
              Restock Cake
            </button>
          </div>
        </div>
      </div>
      <div className="bg-indigo-200 p-8 rounded-lg shadow-sm w-[400px]">
        <h2 className="text-xl">Icecream Counter</h2>
        <div className="flex flex-col gap-4 mt-4">
          <p>Icecreams: {"🍦".repeat(numberOfIcecreams)}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={handleBuyIcecream}
              className="bg-indigo-500 hover:bg-indigo-700 py-2 px-4 flex items-center justify-center text-white font-bold rounded-lg"
            >
              Buy Icecream
            </button>
            <button
              onClick={handleRestockIcecream}
              className="bg-indigo-500 hover:bg-indigo-700 py-2 px-4 flex items-center justify-center text-white font-bold rounded-lg"
            >
              Restock Icecream
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReduxDemo;
