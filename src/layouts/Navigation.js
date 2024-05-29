import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const items = [
  { name: "start", path: "/", exact: true },
  { name: "produkty", path: "/products", exact: false },
  { name: "kontakt", path: "/contact", exact: false },
  { name: "panel admina", path: "/admin", exact: false },
];

const Navigation = () => {
  const menu = items.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={`${item.exact}`}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="main">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
