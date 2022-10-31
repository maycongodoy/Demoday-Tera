import React from 'react';
import Header from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero'
import '../../index.css'
import NikeContainer from '../../components/Nike-container/NikeContainer';
import NikeHighlights from '../../components/Nike-highlights/NikeHighlights';
import NikeHighlights2 from '../../components/Nike-highlights2/NikeHighlights';
import TopSales from '../../components/Top-sales/TopSales';
import Cart from '../../components/cart/Cart'
import TenisApi from '../../components/TenisAPi/TenisApi';
import Footer from '../../components/Footer/Footer';
import Social from '../../components/Social/Social';

const Main =() => {
  return (
      <>
      <Header />
      <Cart/>   
      <Hero />
      <NikeContainer />
      <NikeHighlights />
      <TopSales />
      <NikeHighlights2 />
      <TenisApi />
      <Footer />
      <Social />
      </>
  );
}

export default Main;
