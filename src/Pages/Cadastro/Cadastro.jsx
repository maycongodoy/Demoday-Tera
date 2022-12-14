import { useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";
import React from "react";
import { toast } from "react-hot-toast";
import { createUser } from "../../services/api";

function Cadastro() {
  // Preenche os campos do formulário
  const { register, handleSubmit, setValue, getValues } = useForm(); 

  const apiCep = (e) => {

    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("city", data.localidade);
        setValue("UF", data.uf);
      });
  };

  const onSubmit = (e) => {};

  function handleDados() {
     
    const dados = getValues();
    createUser.post("/v1/user", dados).then((response) => {
      localStorage.setItem("token", response.data.token);
      console.log(response.data.message);
      toast(response.data.message)

      
      window.location.assign("/")
    });
    
  }

  return (
    <form className=" mt-20 bg-animation-color  w-screen flex flex-col items-center">
      <h1 className="block text-xl uppercase font-bold text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          className="bi bi-key-fill translate-x-8"
          viewBox="0 0 16 16"
        >
          <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
        Cadastre-se
      </h1>
      <div className="w-2/4  sm:col-span-3">
        <label
          htmlFor="username"
          className="block text-lg font-bold text-gray-700"
        >
          Nome
        </label>
        <input
          required
          type="text"
          {...register("username")}
          className="mt-1 block w-full  bg-red-100 rounded-md border-gray-300 px-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="w-2/4 sm:col-span-3">
        <label
          htmlFor="lastName"
          className="block text-lg font-bold text-gray-700"
        >
          Sobrenome
        </label>
        <input
          required
          type="text"
          {...register("lastName")}
          className="mt-1 block w-full bg-red-100 rounded-md px-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="w-2/4 sm:col-span-4">
        <label
          htmlFor="email"
          className="block text-lg font-bold text-gray-700"
        >
          Email
        </label>
        <input
          required
          type="text"
          {...register("email")}
          className="mt-1 block w-full bg-red-100 rounded-md border-gray-300 px-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-2/4 sm:col-span-3 lg:col-span-2"
      >
        <label htmlFor="cep" className="block text-lg font-bold text-gray-700">
          CEP
        </label>
        <IMaskInput
          className="mt-1 block w-full bg-red-100 rounded-md border-gray-300 shadow-sm px-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          mask="00000-000"
          type="text"
          required
          {...register("cep")}
          maxLength={9}
          onBlur={apiCep}
          placeholder="00000-000"
        />
      </form>

      <div className="w-2/4 sm:col-span-6 lg:col-span-2">
        <label htmlFor="city" className="block text-lg font-bold text-gray-700">
          Cidade
        </label>
        <input
          required
          type="text"
          {...register("city")}
          className="mt-1 block w-full bg-red-100 rounded-md border-gray-300 px-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="w-2/4 sm:col-span-3 lg:col-span-2">
        <label
          htmlFor="UF"
          className="block text-lg font-bold text-gray-700"
        >
          Estado
        </label>
        <input
          required
          type="text"
          {...register("UF")}
          className="mt-1 block w-full bg-red-100 rounded-md border-gray-300 px-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="w-2/4 sm:col-span-3 lg:col-span-2">
        <label
          htmlFor="password"
          className="block text-lg font-bold text-gray-700"
        >
          Senha
        </label>
        <input
          required
          type="password"
          {...register("password")}
          className="mt-1 block w-full bg-red-100 rounded-md border-gray-300 shadow-sm px-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="w-2/4 sm:col-span-3 lg:col-span-2">
        <label
          htmlFor="password2"
          className="block text-lg font-bold text-gray-700"
        >
          Digite novamente a senha
        </label>
        <input
          required
          type="password"
          {...register("password")}
          className="mt-1 block w-full bg-red-100 rounded-md border-gray-300 px-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <button
        onClick={handleDados}
        type="button"
        className=" bg-orange-300 hover:bg-green-500 text-black-700 font-semibold hover:text-white py-2 my-4 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Enviar
      </button>
    </form>
  );
}

export default Cadastro;
