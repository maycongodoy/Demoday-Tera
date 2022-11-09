import { useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";
import React from "react";

function Cadastro() {
  const { register, handleSubmit, setValue, getValues } = useForm(); // Preenche os campos do formulário

  const apiCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("cidade", data.localidade);
        setValue("uf", data.uf);
      });
  };

  const onSubmit = (e) => {};

  function handleDados() {
    const dados = getValues();
    console.log(dados);
    api.post("/v1/user", dados).then((response) => {
      console.log(response);
    });
  }
 

  return (

    
    <form className=" mt-20 bg-animation-color  w-screen flex flex-col items-center">
      <h1 className="block text-lg uppercase font-bold text-gray-700">Cadastre-se</h1>
      <div className="w-2/4  sm:col-span-3">
        <label
          htmlFor="first-name"
          className="block text-lg font-bold text-gray-700"
        >
          Nome
        </label>
        <input
          required
          type="text"
          name="first-name"
          {...register("nome")}
          id="first-name"
          autoComplete="given-name"
          className="mt-1 block w-full  bg-red-100 rounded-md border-gray-300 px-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="w-2/4 sm:col-span-3">
        <label
          htmlFor="last-name"
          className="block text-lg font-bold text-gray-700"
        >
          Sobrenome
        </label>
        <input
          required
          type="text"
          name="last-name"
          id="last-name"
          {...register("last-name")}
          autoComplete="family-name"
          className="mt-1 block w-full bg-red-100 rounded-md px-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="w-2/4 sm:col-span-4">
        <label
          htmlFor="email-address"
          className="block text-lg font-bold text-gray-700"
        >
          Email
        </label>
        <input
          required
          type="text"
          name="email-address"
          id="email-address"
          {...register("email-adress")}
          autoComplete="email"
          className="mt-1 block w-full bg-red-100 rounded-md border-gray-300 px-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-2/4 sm:col-span-3 lg:col-span-2">
        <label htmlFor="cep"  className="block text-lg font-bold text-gray-700" >
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
          placeholder="00000-00"                  
        />
      </form>

      <div className="w-2/4 sm:col-span-6 lg:col-span-2">
        <label
          htmlFor="city"
          className="block text-lg font-bold text-gray-700"
        >
          Cidade
        </label>
        <input
          required
          type="text"
          {...register("cidade")}
          autoComplete="address-level2"
          className="mt-1 block w-full bg-red-100 rounded-md border-gray-300 px-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="w-2/4 sm:col-span-3 lg:col-span-2">
        <label
          htmlFor="region"
          className="block text-lg font-bold text-gray-700"
        >
          Estado
        </label>
        <input
          required
          type="text"
          {...register("uf")}
          autoComplete="address-level1"
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
        className=" hover:bg-blue-500 text-black-700 font-semibold hover:text-white py-2 my-4 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Enviar
      </button>
    </form>
  );
}

export default Cadastro;
