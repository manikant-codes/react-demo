import React from "react";
import { useParams } from "react-router-dom";
import { cakes } from "./data";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

function CakeDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const objCake = cakes.find((value) => {
    if (value.id === Number(id)) {
      return true;
    }
    return false;
  });

  function handleAddToCart(cake) {
    dispatch(addToCart({ ...cake, qty: 1 }));
  }

  console.log(objCake);

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="h-[400px] overflow-hidden">
          <img
            src={objCake.img}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{objCake.name}</h2>
          <p className="text-lg mb-4">{objCake.desc}</p>
          <p clasName="text-xl font-semibold mb-2">${objCake.price}</p>
          <div className="flex items-center border border-slate-400 rounded w-fit mb-4 mt-4 px-2 py-1 gap-2">
            <div className="flex items-center gap-1">
              {objCake.rating}
              <img
                src="https://www.svgrepo.com/show/13695/star.svg"
                alt=""
                className="h-4 w-4"
              />
            </div>
            <p>|</p>
            <p className="">{objCake.reviews} Reviews</p>
          </div>
          <button
            className="bg-pink-500 hover:bg-pink-600 px-3 py-1 rounded-full text-white"
            onClick={() => {
              handleAddToCart(objCake);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CakeDetails;
