import React from "react";
import { Hero, NikeContainer, NikeHighlights, NikeHighlights2, TenisApi, Sales, TopSales } from "../../components";
import { toprateslaes, ArrayTennis2, } from '../../data/data';



const Home = () => {
  return (
    <>
      <Hero />
      <NikeContainer />
      <NikeHighlights /> 
      <TopSales />          
      <NikeHighlights2 />
      <TenisApi endpoint={ ArrayTennis2} />
    </>
  );
};

export default Home;
