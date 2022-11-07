import React from "react";
import nikeCard1 from "../assets/img/nike-adapt-bb.png";
import nikeCard2 from "../assets/img/nike-air-red.png";
import nikeCard3 from "../assets/img/nike-adapt-bb-smart.png";

function NikeContainer() {
  return (
    <>
      <div className="w-screen p-5 mt-5 md:flex-col">
        <div className="text-5xl font-bold pl-5 sm:text-2xl">Mais Vendidos e populares</div>
        <div className="flex justify-center mt-5 text-white sm:flex-col md:flex-col md:items-center">
          <div className=" m-4 relative bg-gradient-to-b from-blue-600 to-blue-500 shadow-lg shadow-blue-500 grid items-center justify-items-start rounded-xl py-5 px-6 transition-all duration-700 ease-in-out w-full hover:scale-105 sm:max-w-xs md:justify-center md:w-auto ">
            <div className="font-bold text-lg ">Nike addap blue 2.0</div>
            <div className="sub-titl">MEN Running Shoes</div>
            <div className="text-black text-sm font-bold">
              R$ 200
            </div>
            <div className="stars flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="icon-style w-5 h-5 md:w-4 md:h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                ></path>
              </svg>
              4.9
            </div>
            <div className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="icon-style text-slate-900"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <button className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black">
              Compre Agora
            </button>
            <img
              src={nikeCard1}
              alt=""
              className="transitions-theme hover:-rotate-12 h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
            />
          </div>
          <div className="m-3 relative bg-gradient-to-b from-red-500 to-rose-500 shadow-lg shadow-rose-500 grid items-center justify-items-start rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 sm:max-w-xs  md:justify-center md:w-auto">
            <div className="font-bold text-lg"> Nike Martine Rosa</div>
            <div className="sub-titl">Men Running Shoes</div>
            <div className="text-black text-sm font-medium">
              R$ 200
            </div>
            <div className="stars flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="icon-style w-5 h-5 md:w-4 md:h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                ></path>
              </svg>
              4.5
            </div>
            <div className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="icon-style text-slate-900"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <button className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black">
              Compre Agora
            </button>
            <img
              src={nikeCard2}
              alt=""
              className="transitions-theme hover:-rotate-12 h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
            />
          </div>
          <div className="m-3 relative bg-gradient-to-b from-violet-500 to-indigo-500 shadow-lg shadow-violet-500 grid items-center justify-items-start rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 sm:max-w-xs md:justify-center md:w-auto">
            <div className="font-bold text-lg">Nike Smart Shoe 2.0</div>
            <div className="sub-titl">MEN Running Shoes</div>
            <div className="text-black text-sm font-medium ">
              R$ 200
            </div>
            <div className="stars flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="icon-style w-5 h-5 md:w-4 md:h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                ></path>
              </svg>
              5+
            </div>
            <div className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="icon-style text-slate-900"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <button className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black">
              Compre Agora
            </button>
            <img
              src={nikeCard3}
              alt=""
              className="transitions-theme hover:-rotate-12 h-auto w-64 lg:w-56 md:w-50 -rotate-[35deg]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NikeContainer;
