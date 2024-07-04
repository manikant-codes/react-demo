import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";

const cakes = [
  {
    name: "Chocolate Cake",
    id: 1,
    desc: "Rich and decadent chocolate cake",
    price: 25.99,
    img: "https://data.thefeedfeed.com/recommended/post_4311548.jpeg",
  },
  {
    name: "Vanilla Cake",
    id: 2,
    desc: "Classic vanilla cake with buttercream frosting",
    price: 19.99,
    img: "https://www.recipetineats.com/tachyon/2020/08/My-best-Vanilla-Cake_9.jpg",
  },
  {
    name: "Red Velvet Cake",
    id: 3,
    desc: "Velvety red cake with cream cheese frosting",
    price: 22.49,
    img: "https://handletheheat.com/wp-content/uploads/2013/04/red-velvet-cake-recipe-SQUARE.jpg",
  },
  {
    name: "Carrot Cake",
    id: 4,
    desc: "Moist carrot cake topped with walnuts",
    price: 18.75,
    img: "https://www.inspiredtaste.net/wp-content/uploads/2017/07/Carrot-Cake-Recipe-5-1200.jpg",
  },
  {
    name: "Lemon Blueberry Cake",
    id: 5,
    desc: "Zesty lemon cake with blueberry compote",
    price: 21.99,
    img: "https://bakerholicsanonymous.com/wp-content/uploads/2023/02/screen-shot-2023-02-12-at-12.20.56-pm.png",
  },
  {
    name: "Strawberry Shortcake",
    id: 6,
    desc: "Light and fluffy strawberry cake layers",
    price: 20.25,
    img: "https://static01.nyt.com/images/2023/03/13/multimedia/NHJ-Strawberry-Shortcake-qtkw-copy/NHJ-Strawberry-Shortcake-qtkw-superJumbo.jpg",
  },
  {
    name: "Coconut Cream Cake",
    id: 7,
    desc: "Coconut-infused cake with whipped cream",
    price: 23.5,
    img: "https://divascancook.com/wp-content/uploads/2023/03/coconut-cream-cake-.jpg",
  },
  {
    name: "Black Forest Cake",
    id: 8,
    desc: "Layers of chocolate sponge, cherries, and cream",
    price: 24.75,
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/eggless-black-forest-cake-recipe.jpg",
  },
  {
    name: "Blueberry Cheesecake",
    id: 9,
    desc: "Creamy cheesecake with a blueberry topping",
    price: 26.0,
    img: "https://bakewithshivesh.com/wp-content/uploads/2021/05/IMG_9141-scaled.jpg",
  },
  {
    name: "Pineapple Upside-Down Cake",
    id: 10,
    desc: "Caramelized pineapple slices on a fluffy cake",
    price: 17.5,
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2019/05/Pineapple-upside-down-cake-32b5bb3.jpg",
  },
];

function ReduxCakeShop() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((store) => {
    return store.cart;
  });

  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  function handleAddToCart(cake) {
    dispatch(addToCart(cake));
  }

  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }

  console.log(cart.cartItems);

  return (
    <div>
      {/* Navbar */}
      <div className="bg-pink-500 flex items-center justify-between p-8">
        <h1 className="text-2xl text-white">Redux Cake Shop</h1>
        <ul className="flex items-center gap-8 text-white">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <button
              className="bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-full text-black flex items-center gap-1"
              onClick={toggleCart}
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
      {/* List */}
      <div className="p-8 grid grid-cols-4 gap-4">
        {cakes.map((cake) => {
          return (
            <div
              key={cake.id}
              className="overflow-hidden rounded-lg bg-pink-100"
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
      {/* Cart */}
      {isCartOpen && (
        <div className="bg-white w-[256px] fixed top-0 right-0 bottom-0 p-4 overflow-auto">
          <div className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center gap-1">
              <img src="/images/cart.webp" className="h-[22px]" alt="" />
              <h2 className="text-xl">Cart</h2>
            </div>
            <button
              className="border rounded-full p-2 h-[26px] w-[26px] flex items-center justify-center"
              onClick={toggleCart}
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
                    <h3 className="text-sm font-semibold">{cartItem.name}</h3>
                    <p className="text-sm">${cartItem.price}</p>
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
              <span>{cart.total}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReduxCakeShop;
