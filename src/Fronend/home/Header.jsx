import React from "react";
import { LuBellRing } from "react-icons/lu";

function Header() {
  return (
    <section className="bg-[url(img/nabbackg.jpg)] min-h-16 py-2">
      <div className="max-w-7xl mx-auto text-white">
        {/* logo */}
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-4">
            <img src="img/logo.png" alt="" className="w-16 h-16" />
            <p className="text-yellow-700 uppercase font-bold">
              Book <br /> Point
            </p>
          </div>
          {/* endlogo */}
          {/* menu */}
          <div className="flex items-center gap-10">
            <ul className="flex items-center gap-4 text-gray-400 font-semibold">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div>
              <button>
                <LuBellRing />
              </button>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <img
                  src="img/plogo.png"
                  alt=""
                  className="rounded-full w-10 h-10"
                />
                <p>Jhon Doe</p>
              </div>
            </div>
          </div>
          {/* endmenu */}
        </div>
      </div>
    </section>
  );
}

export default Header;
