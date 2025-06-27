import React from "react";
import { Link } from "react-router";

function Nav() {
  return (
    <nav className="list-none flex flex-col gap-4 font-bold ">
      <li className="hover:text-gray-500">
        <Link to="/">Dashboard</Link>
      </li>
      <li className="hover:text-gray-500">
        <Link to="/expenses">Expenses</Link>
      </li>
      <li className="hover:text-gray-500">
        <Link to="/wallets">Wallets</Link>
      </li>
      <li className="hover:text-gray-500">
        <Link to="/summary">Summary</Link>
      </li>
      <li className="hover:text-gray-500">
        <Link to="/accounts">Accounts</Link>
      </li>
      <li className="hover:text-gray-500">
        <Link to="/settings">Settings</Link>
      </li>
    </nav>
  );
}

export default Nav;
