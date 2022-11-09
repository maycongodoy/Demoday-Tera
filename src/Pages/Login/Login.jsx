import { useForm } from "react-hook-form";
import React from "react";

function Login() {
  const { register, getValues } = useForm(); // Preenche os campos do formulário

  const onSubmit = (e) => {};

  function handleDados() {
    const dados = getValues();
    console.log(dados);
    api.post("/v1/login", dados).then((response) => {
      console.log(response);
    });
  }

  return (
    <form className=" mt-20  w-screen flex flex-col items-center">
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
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
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
        onClick={handleDados}
        type="button"
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 my-4 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Enviar
      </button>
    </form>
  );
}

export default Login;
