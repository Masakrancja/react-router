import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsListPage from "../pages/ProductsListPage";
import ProductsPage from "../pages/ProductsPage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";
const Page = () => {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/products" Component={ProductsListPage} />
      <Route path="/products/:id" Component={ProductsPage} />
      <Route path="/contact" Component={ContactPage} />
      <Route path="/admin" Component={AdminPage} />
      <Route path="/login" Component={LoginPage} />
      <Route path="*" Component={ErrorPage} />
    </Routes>
  );
};

export default Page;
