import React from "react";
import { Navbar,  Cart,  Hero,  NikeContainer,  NikeHighlights,  TopSales,  TenisApi,  Footer,  Social, NikeHighlights2,} from "./components";

import "./components/styles/index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main >
        <Hero />
        <NikeContainer />
        <NikeHighlights />
        <TopSales />
        <NikeHighlights2 />
        <TenisApi />
      </main>
      <Footer />
      <Social />
    </>
  );
};

export default App;
