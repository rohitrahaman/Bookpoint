import React from "react";
import Cart from "../Component/Cart";

function Shop() {
  return (
    <section className="min-h-screen ">
      <div className="flex flex-col gap-10 items-center py-5">
        <div className="text-yellow-700 text-4xl italic font-bold text-center">
          <h1>Explore All Books Here</h1>
          <div>
            <div className=" flex gap-2 justify-center mt-5">
              <input type="checkbox" />
              <span className="text-xl text-black">All</span>
              <input type="checkbox" />
              <span className="text-xl text-black">Novel</span>
              <input type="checkbox" />
              <span className="text-xl text-black">Translation</span>
              <input type="checkbox" />
              <span className="text-xl text-black">Kid's Stories</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
      </div>
    </section>
  );
}

export default Shop;
