import React from "react";
import { cakes } from "../data";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

function CakesList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleAddToCart(cake) {
    dispatch(addToCart({ ...cake, qty: 1 }));
  }

  function goToCakeDetails(id) {
    navigate("/cakeDetails/" + id);
  }

  return (
    <div className="p-8 grid grid-cols-4 gap-4">
      {cakes.map((cake) => {
        return (
          <div
            key={cake.id}
            className="overflow-hidden rounded-lg bg-pink-100"
            onClick={() => {
              goToCakeDetails(cake.id);
            }}
          >
            <div className="w-full, h-[300px]">
              <img
                src={cake.img}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col gap-1">
              <h3 className="font-bold">{cake.name}</h3>
              <p>{cake.desc}</p>
              <div className="flex items-center justify-between mt-3">
                <p className="font-bold line-clamp-1">${cake.price}</p>
                <button
                  className="bg-pink-500 hover:bg-pink-600 px-3 py-1 rounded-full text-white"
                  onClick={() => {
                    handleAddToCart(cake);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CakesList;
