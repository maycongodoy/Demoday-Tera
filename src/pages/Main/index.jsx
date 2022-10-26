import React from 'react';
import Header from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero'
import '../../index.css'
import NikeContainer from '../../components/Nike-container/NikeContainer';
import NikeHighlights from '../../components/Nike-highlights/NikeHighlights';
import TopSales from '../../components/Top-sales/TopSales';
import Cart from '../../components/Cart/Cart'

const Main =() => {
  return (
      <>
      <Header />
      <Cart/>   
      <Hero />
      <NikeContainer />
      <NikeHighlights />
      <TopSales />
      </>
  );
}

export default Main;
