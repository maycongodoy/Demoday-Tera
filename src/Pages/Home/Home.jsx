import React from "react";
import { Hero, NikeContainer, NikeHighlights, NikeHighlights2, TenisApi, Sales } from "../../components";
import { toprateslaes, ArrayTennis2} from '../../data/data';



const Home = () => {
  return (
    <>
      <Hero />
      <NikeContainer />
      <Sales endpoint={toprateslaes} />
      <NikeHighlights />         
      <NikeHighlights2 />
      <TenisApi endpoint={ ArrayTennis2} />
    </>
  );
};

export default Home;
