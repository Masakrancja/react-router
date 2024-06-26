import { Component } from "react";
import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <header>{<Header />}</header>
          <main>
            <aside>{<Navigation />}</aside>
            <section className="page">{<Page />}</section>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
