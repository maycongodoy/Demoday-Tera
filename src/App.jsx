import React from "react";
import { Navbar, Cart, Footer, Social, } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cadastro from  "./Pages/Cadastro/Cadastro"





import "./components/styles/index.css";

const App = () => {
  return (
    <Router>
        <Navbar />
        <Cart /> 
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<Cadastro />} exact path="/cadastro" />
        
      </Routes>      
        <Footer />
        <Social />
    </Router>
  );
};

export default App;
