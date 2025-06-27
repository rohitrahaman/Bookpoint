import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../Component/SideBar";

function Layout() {
  return (
    <section>
      <div className="bg-black m-1 rounded-xl flex min-h-screen">
        <div className="text-white p-16 w-1/5">
          <Sidebar />
        </div>
        <div className="bg-white w-4/5 m-4 rounded-2xl p-5">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </section>
  );
}

export default Layout;
