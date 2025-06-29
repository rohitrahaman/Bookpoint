import React from "react";

function Cart() {
  return (
    <section>
      <div className=" border-gray-500 flex flex-col gap-3 items-center w-64 h-[200] rounded-md border-2">
        <div>
          <img src="img/cartbook.png" alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-xl font-bold">Thunmanhandiya</h1>
            <p className="text-xs text-gray-500">Mahagamasekara</p>
          </div>

          <div>
            <h1 className="font-semibold text-xs text-yellow-900">TK. 700/=</h1>
            <p className="text-sm text-gray-500">
              Available across all branches
            </p>
          </div>
        </div>
        <div>
          <button className="border rounded-md py-1 px-5 mb-2 border-yellow-800">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
