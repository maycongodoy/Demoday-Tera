import React from 'react';
import Header from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero'
import '../../index.css'
import NikeContainer from '../../components/Nike-container/NikeContainer';

const Main =() => {
  return (
      <>
      <Header />
      <Hero />
      <NikeContainer />
      </>
  );
}

export default Main;
