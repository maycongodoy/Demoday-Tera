import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import {
  getUserById,
  updateUser,
  deleteUSer,
  
} from "../../services/api";

//import { toast } from "react-hot-toast";

export default function DadosUser() {
  const { register, setValue, getValues } = useForm();
  //guarda o estado da reposta
  const [dadosUser, setDadosUser] = useState("");
  //estado que mostra os dados do usuario
  const [showData, setShowData] = useState(false);

  // pega usuario logado pela ID e TOKEN para poder fazer alteracoes
  //useefect para ser redencizado apenas uma vez
  useEffect(() => {
    getUserById(`/v1/user/${localStorage.getItem("userId")}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((response) => {
      setDadosUser(response.data.user);
      
      setValue("username", dadosUser.username);
      setValue("lastname", dadosUser.lastname);
      setValue("email", dadosUser.email);
      setValue("address", dadosUser.address);
      setValue("cep", dadosUser.cep);
      setValue("city", dadosUser.city);
      setValue("UF", dadosUser.UF);
    });
  }, []);
  


  function Update(){
    const dataToUpdate = {
      username: dadosUser.username,
      lastname: dadosUser.lastname
      
    }

    updateUser(`/v1/user/${localStorage.getItem("userId")}`, dataToUpdate, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then(response=>{
      toast("dados atualizados")
      console.log(response.data);
      
      
    }) 

  } 



  //funcao de Deletar usuario
  function UserDelete() {
    deleteUSer(`/v1/user/${localStorage.getItem("userId")}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((response) => {
      alert("usuario deletado");
      localStorage.clear();
      window.location.assign("/");
    });
  }
  //atualizar dados

 

  //funcao para alterar dados de usuario
  function toggleUserData() {
    setShowData(!showData);
  }
  return (
    <>
      <div className="nike-container bg-theme flex min-h-full items-center justify-center py-10 px-4 h-[130vh] lg:h-[125vh] md:h-[95vh] sm:h-[110vh] w-auto">
        <div className="w-full max-w-md mb-10 space-y-2 ">
          {!showData ? (
            <div>
              <label className="relative font-semibold block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 mb-1 text-gray-100  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                Nome completo: {dadosUser.username}
              </label>

              <label className="relative font-semibold block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 my-1 text-gray-100  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                Email: {dadosUser.email}
              </label>

              <label className="relative font-semibold block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 text-gray-100  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                CEP: {dadosUser.cep}
              </label>

              <label className="relative font-semibold block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 text-gray-100  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                Cidade: {dadosUser.city}
              </label>

              <label className="relative font-semibold block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-100  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                Estado: {dadosUser.UF}
              </label>
            </div>
          ) : (
            <div className="-space-y-px rounded-md shadow-sm my-2">
              <input
                {...register("username")}
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 mb-0 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Nome "
              />
              <input
                {...register("cep")}
                className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 my-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                type="text"
                required
                placeholder="CEP"
                maxLength="8"
              />

              <input
                {...register("city")}
                type="text"
                required
                className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Cidade"
              />
              <input
                {...register("UF")}
                type="text"
                required
                className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="UF"
              />
              <input
                {...register("email")}
                type="email"
                readOnly={true}
                required
                className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email"
              />
            </div>
          )}

          <div className="flex py-2 ">
            <button
              onClick={toggleUserData}
              type="button"
              className="relative opacity-100 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 mb-10 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {!showData ? "Atualizar informações" : "Voltar"}
            </button>
            <button
              onClick={Update}
              type="button"
              className="relative opacity-100 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 mb-10 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              salvar Informações
            </button>
          </div>

          <button
            onClick={UserDelete}
            type="button"
            className="relative opacity-100 flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 mb-10 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            delete
          </button>
        </div>
      </div>
    </>
  );
}
