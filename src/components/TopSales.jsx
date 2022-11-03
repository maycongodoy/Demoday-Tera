import React from "react";

import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../app/CartSlice";

import ArrayTennis from "../data/data.js";
import "../components/styles/data.css";

const TopSales = ({ id, name, type, price, image, color }) => {
    
  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = { id, name, type, price, image, color};

    dispatch(setAddItemToCart(item));
  };

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  return (
    <>
      <div className="font-bold text-5xl pl-10 sm:text-3xl sm:hidden">Vendas mais bem avaliadas</div>
      <div className="grid grid-flow-col grid-rows-3  gap-4 w-screen p-10 sm:hidden md:grid-cols-2 md:grid-rows-4">
        {ArrayTennis.map((item) => {
          /* console.log(item) */
          return (
            <div
              className={`h-80 w-70 pl-10 mt-6 ${
                item.color ? item.color : "amarelo"
              }`}
            >
              <p className="text-slate-200 text-xl">{item.name}</p>
              <p className="text-slate-200 text-xl">
                {item.color ? item.color : ""}
              </p>
              <p className="text-slate-200 filter drop-shadow text-base">
                {item.type}
              </p>
              <div className="flex">
                <div className=" items-center bg-white/80 rounded blur-effect-theme">
                  {item.price}
                </div>
                <div class="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    class="icon-style w-5 h-5 md:w-4 md:h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <h1 className="md:text-sm font-normal text-slate-100">5+</h1>
                </div>
              </div>
              <div className="flex py-3">
                <button
                  type="button"
                  className="bg-white/90 blur-effect-theme mr-2 button-theme p-0.5 shadow shadow-sky-200"
                  onClick={()=> onAddToCart()}
                  
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    class="icon-style text-slate-900"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
                  onClick={()=> {onAddToCart(); onCartToggle();}}
                >
                  Compre Agora
                </button>
              </div>
              <img
                className="transitions-theme hover:-rotate-12 h-36 w-64"
                src={item.image}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopSales;
