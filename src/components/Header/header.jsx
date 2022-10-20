import React from "react";
import thumb from '../Header/logo.webp'
import search from '../Header/search.svg'
import { FaShoppingCart } from 'react-icons/fa';



function Header () {
  
  return (
    <>
      <header className="flex h-20 w-screen fixed ">
        <nav className="flex w-screen  bg-slate-100 bg-opacity-50" >
          <div className="">
              <a className="flex" href="/">
                <img src={thumb} className="h-12 rounded-xl m-3" alt="..."/>
              </a>
          </div>
         {/* Botão do menu responsivo */}
          <div className="">
            <button className="" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="true" aria-label="Toggle navigation"></button>
        {/* Botão do menu responsivo */}

        {/* CARRINHO DE COMPRAS */}
        
        {/* CARRINHO DE COMPRAS */}
            <div className="flex w-auto" id="navbarsExample08">
                <ul className="flex text-black">

                  <li className="font-medium transition duration-500 mx-7 my-0 px-2 items-center flex hover:translate-x-1 hover:bg-red-400  hover:rounded hover:rounded-full">
                    <a className="flex" aria-current="page" href="/">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-house-fill"
                        viewBox="0 0 16 16"
                      >
                        <path                          
                          d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                        />
                        <path                          
                          d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                        />
                      </svg>
                      Home</a>                    
                  </li>

                  <li className="font-medium transition duration-500 mx-7 my-0 px-2 items-center flex hover:translate-x-1 hover:bg-red-400  hover:rounded hover:rounded-full">
                    <a className="hover:bg-red-400 flex" href="/"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-bookmarks-fill justify-center"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z"
                        />
                        <path
                          d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1H4.268z"
                        />
                      </svg>
                      Categorias</a>
                  </li>

                  <li className="font-medium transition duration-500 mx-7 my-0 px-2 items-center flex hover:translate-x-1 hover:bg-red-400  hover:rounded hover:rounded-full">
                    <a className="flex" href="pages/landing.html"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-piggy-bank-fill justify-center"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595Zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199Zm-8.999-.65a.5.5 0 1 1-.276-.96A7.613 7.613 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.602 6.602 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                      Ofertas
                    </a>
                  </li>
        {/* MENU DROPDOWN */}
              
      {/* MENU DROPDOWN */}
                  <li className="font-medium flex outline-none">
                    <input
                      className="rounded-xl mr-2 outline-none"
                      type="search"
                      placeholder="Procurar..."
                      aria-label="Search"
                    />
                    <a className="flex" href="/">
                       <img src={search} className="h-9 " alt="..."/>
                    </a>
                  </li>

                  <li className=" font-medium transition duration-500 mx-5 my-0 px-2 items-center flex hover:translate-x-1 hover:bg-red-400  hover:rounded hover:rounded-full">
                    <a href="pages/login.html" className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-person-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                      </svg>
                      Login
                    </a>
                  </li>

                  <li className="font-medium transition duration-500 mx-3 my-0 px-2 items-center flex hover:translate-x-1 hover:bg-red-400  hover:rounded hover:rounded-full">
                    <a href="pages/cadastro.html" className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-key-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                      </svg>
                      Cadastrar
                    </a>
                  </li>
                  <a href="" className="items-center"><FaShoppingCart /></a>
                </ul>
            </div>
          </div>
        </nav>
  </header>

      </>
  )
}

export default Header;