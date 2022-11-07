import { useState } from "react";
import React from "react";

function Cadastro() {
  const [data, setData] = useState({});
  const [estado, setEstado] = useState('')
  const [cidade, setCidade] = useState('')
  
  async function viaCep(cep) {
    let url = await `http://viacep.com.br/ws/${cep}/json/`;
    console.log(url);
    fetch(url, {}).then((response) => {
      response.json().then((data) => {
        setEstado(data.uf)
        setCidade(data.localidade)
      });
    });
  }

  const updateData = async (e) => {
    if (e.target.name === "cep" && e.target.value.length > 7) {
      let cep = await e.target.value;
      viaCep(cep);
    }
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
    fetch(/* porta do back */);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" mt-20  w-screen flex flex-col items-center"
    >
      <div className="col-span-6  sm:col-span-3">
        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
          Nome
        </label>
        <input
          type="text"
          name="first-name"
          onChange={updateData}
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
          type="text"
          name="last-name"
          id="last-name"
          onChange={updateData}
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
          type="text"
          name="email-address"
          id="email-address"
          onChange={updateData}
          autoComplete="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        <label htmlFor="cep" className="block text-sm font-medium text-gray-700">
          CEP
        </label>
        <input
          type="text"
          name="cep"
          id="cep"
          maxLength={8}
          onChange={updateData}
          autoComplete="cep"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          Cidade
        </label>
        <input
          value={cidade}
          type="text"
          name="city"
          id="city"
          onChange={updateData}
          autoComplete="address-level2"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
          Estado
        </label>
        <input
          value={estado}
          type="text"
          name="region"
          id="region"
          onChange={updateData}
          autoComplete="address-level1"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Senha
        </label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={updateData}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 my-4 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Enviar
      </button>
    </form>
  );
}

export default Cadastro;
