import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Home/Home";
import Products from "./Products/Products";
import Orders from './Orders/Orders'
import OrderDetail from "./Orders/OrderDetail";
import PaymentScreen from "./Payment/Payment";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  };

  return (
    <Router>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}> &#9776; </button>
            <Link to="/">Jade Barnacle</Link>
          </div>
          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/payment">Payment</Link>
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <Link to="/">All Products</Link>
            </li>
            <li>
              <Link to="/">Shirts</Link>
            </li>
            <li>
              <Link to="/">Pants</Link>
            </li>
            <li>
              <Link to="/">Shoes</Link>
            </li>
          </ul>
        </aside>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Products />} />
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/order/:id" element={<OrderDetail />}></Route>
            <Route path="/payment" element={<PaymentScreen />}></Route>
          </Routes>
        </main>

        <footer className="footer">
          &copy; 2022 Jade Barnacle
        </footer>
      </div>
    </Router>
  );
}

export default App;
