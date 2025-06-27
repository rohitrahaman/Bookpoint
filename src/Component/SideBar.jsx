import React from "react";
import Nav from "./Nav";

function Sidebar() {
  return (
    <section>
      <div className="flex flex-col min-h-screen">
        <div className="mb-28">
          <div className="w-16">
            <img src="./img/logo.png" alt="" />
          </div>
          <div>
            <h1 className="font-bold">Samantha</h1>
            <p className="text-sm text-gray-400">samantha@email.com</p>
          </div>
        </div>
        <div>
          <Nav />
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
