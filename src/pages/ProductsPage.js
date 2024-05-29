import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const ProductsPage = () => {
  const { id } = useParams();
  return (
    <>
      <p>{id}</p>
      <Link to="/products">Powrót</Link>
    </>
  );
};

export default ProductsPage;
