import React from "react";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
  toggleCart,
} from "../../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((store) => {
    return store.cart;
  });

  const dispatch = useDispatch();

  function handleToggleCart() {
    dispatch(toggleCart());
  }

  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }

  function handleIncreaseQty(id) {
    dispatch(increaseQty(id));
  }

  function handleDecreaseQty(id) {
    dispatch(decreaseQty(id));
  }

  return (
    <div className="bg-white w-[356px] fixed top-0 right-0 bottom-0 p-4 overflow-auto">
      <div className="flex items-center justify-between border-b pb-2">
        <div className="flex items-center gap-1">
          <img src="/images/cart.webp" className="h-[22px]" alt="" />
          <h2 className="text-xl">Cart</h2>
        </div>
        <button
          className="border rounded-full p-2 h-[26px] w-[26px] flex items-center justify-center"
          onClick={handleToggleCart}
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-x-53-433952.png?f=webp&w=256"
            alt=""
          />
        </button>
      </div>
      {/* Cart Items List */}
      <div className="flex flex-col gap-4 mt-4">
        {cart.cartItems.map((cartItem) => {
          return (
            // Cart Item
            <div className="flex items-center gap-2">
              <div>
                <div className="w-[40px] h-[40px] overflow-hidden rounded-full">
                  <img
                    src={cartItem.img}
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="grow-[1]">
                <h3 className="text-sm font-semibold flex items-center justify-between gap-2">
                  <span>{cartItem.name}</span>
                  <span>${cartItem.price}</span>
                </h3>
                {/* Increase Decrease Qty */}
                <div className="text-sm flex items-center gap-2">
                  <button
                    className="border rounded-full p-2 h-[18px] w-[18px] flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold"
                    onClick={() => {
                      handleDecreaseQty(cartItem.id);
                    }}
                  >
                    <span className="mb-[4px]">-</span>
                  </button>
                  <p>{cartItem.qty}</p>
                  <button
                    className="border rounded-full p-2 h-[18px] w-[18px] flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold"
                    onClick={() => {
                      handleIncreaseQty(cartItem.id);
                    }}
                  >
                    <span className="">+</span>
                  </button>
                </div>
              </div>
              <div>
                <button
                  className="border rounded-full p-2 h-[36px] w-[36px] flex items-center justify-center"
                  onClick={() => {
                    handleRemoveFromCart(cartItem.id);
                  }}
                >
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-delete-2902143-2411575.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <p className="mt-4 flex items-center justify-between border-t pt-2">
          <span>Total:</span>
          <span>{cart.total.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}

export default Cart;
