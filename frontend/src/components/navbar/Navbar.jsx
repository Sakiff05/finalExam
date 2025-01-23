import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const basket = useSelector((state) => state.basket.basket);
  const totalBasket = basket.reduce((acc, sum) => acc + sum.count, 0);
  const favorite = useSelector((state) => state.favorite.favorite);

  return (
    <nav className="px-16 py-5 fixed w-full bg-white z-50 shadow flex flex-col sm:flex-row justify-between items-center gap-y-5">
      <div className="logo">
        <Link to="/">
          <img
            src="https://rivon-demo.myshopify.com/cdn/shop/files/logo-2.png?v=1734254597&width=130"
            alt=""
          />
        </Link>
      </div>

      <ul className="navList flex items-center gap-5">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add</NavLink>
        </li>
        <li>
          <NavLink to="/basket">Basket({totalBasket})</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorite({favorite.length})</NavLink>
        </li>
      </ul>
    </nav>
  );
}
