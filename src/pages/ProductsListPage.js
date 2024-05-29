import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/ProductsListPage.css";

const products = ["cars", "bikes", "motocycles"];

const ProductsListPage = () => {
  const list = products.map((product) => (
    <li key={product}>
      <NavLink to={`/products/${product}`} uri={product}>
        {product}
      </NavLink>
    </li>
  ));
  return (
    <article className="products">
      <h3>Lista produktów</h3>
      <ul>{list}</ul>
    </article>
  );
};

export default ProductsListPage;
