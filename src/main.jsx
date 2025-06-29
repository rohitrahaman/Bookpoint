import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home.jsx";
import Layout from "./Layout/Index.jsx";
import Expenses from "./pages/Expenses.jsx";
import Accounts from "./pages/Accounts.jsx";
import Settings from "./pages/Settings.jsx";
import Summary from "./pages/Summary.jsx";
import Wallets from "./pages/Wallets.jsx";
import FrontendLayout from "./Component/FrontendLayout.jsx";
import Deshbord from "./pages/Deshbord.jsx";
import Shop from "./pages/Shop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontendLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
        <Route path="/admin" element={<Layout />}>
          <Route path="" element={<Deshbord />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="settings" element={<Settings />} />
          <Route path="summary" element={<Summary />} />
          <Route path="wallets" element={<Wallets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
