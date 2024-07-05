import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../../redux/slices/cartSlice";
import Cart from "../components/Cart";

function Navbar() {
  const cart = useSelector((store) => {
    return store.cart;
  });

  const dispatch = useDispatch();

  function handleToggleCart() {
    dispatch(toggleCart());
  }

  return (
    <>
      <div className="bg-pink-500 flex items-center justify-between p-8">
        <h1 className="text-2xl text-white">Redux Cake Shop</h1>
        <ul className="flex items-center gap-8 text-white">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <button
              className="bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-full text-black flex items-center gap-1"
              onClick={handleToggleCart}
            >
              <div className="relative">
                <img src="/images/cart.webp" className="h-[20px]" alt="" />
                {cart.cartItems.length > 0 && (
                  <div className="absolute top-[-10px] right-[-10px] rounded-full w-[16px] h-[16px] bg-pink-300 text-[10px] flex items-center justify-center font-bold">
                    {cart.cartItems.length}
                  </div>
                )}
              </div>
              Cart
            </button>
          </li>
        </ul>
      </div>
      {cart.isCartOpen && <Cart />}
    </>
  );
}

export default Navbar;
