import {useForm} from "react-hook-form"
import React from "react";

function Cadastro() {
  
  const [register, handleSubmit, setValue, getValues] = useForm(); // Preenche os campos do formulário

  const apiCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
     .then((response) => response.json())
     .then((data) => {
      setValue("cidade", data.localidade)
      setValue("estado", data.uf)      
     })
  }

  const onSubmit = (e) => {

  }


 /*  function handleDados() {
    const dados = getValues();
    console.log(dados);
    api.post("/v1/user", dados).then((response) => {
      console.log(response);
    });
  }
 */

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" mt-20  w-screen flex flex-col items-center"
    >
      <div className="col-span-6  sm:col-span-3">
        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
          Nome
        </label>
        <input
          required
          type="text"
          name="first-name"
          {...register("nome")}
          id="first-name"
          autoComplete="given-name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
          Sobrenome
        </label>
        <input
          required
          type="text"
          name="last-name"
          id="last-name"
          {...register("last-name")}
          autoComplete="family-name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-4">
        <label
          htmlFor="email-address"
          className="block text-sm font-medium text-gray-700"
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        <label htmlFor="cep" className="block text-sm font-medium text-gray-700">
          CEP
        </label>
        <input
          required
          type="text"
          onBlur={apiCep}
          maxLength={8}
          {...register("cep")}
          autoComplete="cep"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          Cidade
        </label>
        <input        
          required  
          type="text"
          {...register("cidade")}
          autoComplete="address-level2"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
          Estado
        </label>
        <input        
          required  
          type="text"      
          {...register("estado")}
          autoComplete="address-level1"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Senha
        </label>
        <input
          required
          type="text"
          {...register("password")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <button
        /* onClick={handleDados} */
        type="button"
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 my-4 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Enviar
      </button>
    </form>
  );
}

export default Cadastro;
