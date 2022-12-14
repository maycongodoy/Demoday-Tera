import React from "react";
import { useForm } from "react-hook-form";

import { toast } from "react-hot-toast";

//importe axios
import { createUser } from "../../services/api";

function Login() {

  const { register, getValues } = useForm(); // Preenche os campos do formulário

 
  async function handleDados() {
    //pegar dos valores do imput
    const dados = getValues();
    const response = await createUser.post("/v1/user/auth", dados)
      .then((response) => {
        //salva no localstorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.user._id);

        toast(response.data.message);
        window.location.assign("/")

      })
      .catch(err => toast(err.message));
  }

  return (

    <form className="bg-theme-social mt-20  w-screen flex flex-col items-center">
      <div className="text-4xl py-12"> <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="currentColor"
        className="bi bi-person-circle translate-x-5"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
      </svg>Login</div>
      <div className="col-span-6 sm:col-span-4">
        <label
          htmlFor="email-address"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          required
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
          {...register("password")}
          type="password"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <button
        onClick={async (dados) => {
          await handleDados(dados);
        }}
        type="button"
        className="bg-orange-300 hover:bg-green-500 text-black-700 font-semibold hover:text-white py-2 my-4 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Enviar
      </button>
    </form>
  );
}

export default Login;
