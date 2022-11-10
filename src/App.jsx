import React from "react";
import { Navbar, Cart, Footer, Social, } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cadastro from  "../src/Pages/Cadastro/Cadastro"
import Login from "./Pages/Login/Login";
import Product from "./Pages/Product/Product";

import "./components/styles/index.css";


const App = () => {
  return (
    <Router>
        <Navbar />
        <Cart /> 
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<Cadastro />} exact path="/cadastro" />
        <Route element={<Login />} exact path="/login" />
        <Route element={<Product />} exact path="/product" />
        
      </Routes>      
        <Footer />
        <Social />
    </Router>
  );
};

export default App;
