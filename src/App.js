import {useState} from "react";

import Header from "./components/Header"
import HomePage from "./pages/HomePage";
import {Outlet} from "react-router-dom";

import "./App.css";


function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
