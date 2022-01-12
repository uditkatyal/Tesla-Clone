import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./MyComponents/Header";
import Home from "./MyComponents/Home";
import Footer from "./MyComponents/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Home />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
