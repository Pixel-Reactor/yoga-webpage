import React from "react";
import {FaWhatsapp} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
const Contactos = () => {
  return (
    <div className="bg-gradient-to-t dark  from-zinc-900/90 via-stone-800/90 to-amber-950/90  font-[Dosis] ">
        <div className="bg-[url('/ooorganize.svg')] bg-no-repeat bg-cover bg-center w-full h-full p-10 ">
            <div className="p-6 max-w-xl">
      <div className="text-4xl tracking-tight  text-gray-900 dark:text-white">
        <h4 className="my-3 text-center md:text-left">Te Animas?</h4>
        <p className="text-lg text-center md:text-left font-light text-gray-500 sm:text-xl dark:text-gray-400">
        ¿ Estás preparad@ para empezar?   <br />   
        ¿ tienes alguna pregunta? <br /> no dudes en contactar conmigo! <br />
          utiliza los botones para Whats'App y Instagram o rellena el formulario.
        </p>
      </div>
      <div className="my-4 flex gap-4 w-full justify-center">
            <FaWhatsapp className="text-green-700" size={22}/>
            <BsInstagram className="text-pink-400" size={20}/>
            </div>
      <form>  
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="my-6 ">
          <label
           htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Correo electronico
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
      
     
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enviar
        </button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default Contactos;
