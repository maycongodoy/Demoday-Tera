import React, { useEffect, useState } from "react";





import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  HomeIcon,
  IdentificationIcon,
  UserIcon,
  UserPlusIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";

import logo from "../Navbar/logo.webp";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  return (
    <>
      <header className={!navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50' : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'}>
        <nav className="flex items-center justify-between nav-container ">
          <div className="flex items-center">
            <img src={logo} className="w-15 h-12 opacity-50 rounded-lg active:scale-110" alt="logo/img" />
          </div>
          {/* home produtos contatos */}
          <ul className="flex items-center justify-center gap-10 ">
            <li className="grid item-center">
              <HomeIcon className="icon-style" />
              <p className="flex items-center">Home</p>
            </li>
            <li className="grid item-center">
              <FolderIcon className="icon-style" />
              <p className="flex items-center">Produtos</p>
            </li>
            <li className="grid item-center">
              <IdentificationIcon className="icon-style" />
              <p className="flex items-center">Contato</p>
            </li>
          </ul>
          {/* home produtos contatos */}
          {/* carrinho e Favoritos */}
          <ul className="flex items-center justify-end gap-10 ">
            <li className="grid item-center">
              <MagnifyingGlassIcon className="icon-style" />
            </li>
            <li className="grid item-center">
              <HeartIcon className="icon-style" />
            </li>
            <li className="grid item-center">
              <button className="border-none outline-none active:scale-110 transition-all duration-300 relative">
                <ShoppingBagIcon className="icon-style" />
                <div
                  className={`absolute 
                  top-3.5 
                  left-3 
                  bg-black
                  text-slate-100 
                  shadow-black 
                  w-5
                  h-5 
                  text-[0.8rem] 
                  leading-tight 
                  font-medium 
                  rounded-full flex
                  items-center
                  justify-center
                  cursor-pointer 
                  hover:scale-100 
                  transition-all 
                  duration-300`}
                >
                  1
                </div>
              </button>
            </li>
          </ul>
          {/* carrinho e Favoritos */}
          {/* login e cadastro */}
          <ul className="flex items-center justify-center gap-10 ">
            <li className="grid item-center">
              <UserPlusIcon className="icon-style" />
              <p className="flex items-center">Cadastro</p>
            </li>
            <li className="grid item-center">
              <UserIcon className="icon-style" />
              <p className="flex items-center">Login</p>
            </li>
          </ul>
          {/* login e cadastro */}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
