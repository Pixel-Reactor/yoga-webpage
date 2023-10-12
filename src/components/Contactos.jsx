import React, { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Handler } from "../context/Context";

const Contactos = (props) => {
  const { contact } = Handler();
  const [message, setMessage] = useState({
    name: "",
    email: "",
    text: "",
  });
  useEffect(() => {
    const updateTop = () => {
      const rect = contact.current.getBoundingClientRect();

      if (
        rect.top <= window.innerHeight / 2 ||
        (document.documentElement.clientHeight / 2 &&
          rect.bottom <=
            (window.innerHeight + window.innerHeight / 2 ||
              document.documentElement.clientHeight +
                document.documentElement.clientHeight.innerHeight / 2))
      ) {
        props.isOn(4);
      }
    };
    window.addEventListener("resize", updateTop);
    window.addEventListener("scroll", updateTop);

    // Limpia los event listeners cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", updateTop);
      window.removeEventListener("scroll", updateTop);
    };
  }, []);
  const handleChange = (e) => {
    setMessage({
      ...message,[e.target.name]:e.target.value
    })
    console.log(message)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      ref={contact}
      className="bg-gradient-to-t dark  from-zinc-900/90 via-stone-800/90 to-amber-950/90  font-[Dosis] "
    >
      <div className="bg-[url('/ooorganize.svg')] bg-no-repeat bg-cover bg-center w-full h-full p-10 ">
        <div className="p-6 max-w-xl">
          <div className="text-4xl tracking-tight text-justify text-gray-900 dark:text-white">
            <h4 className="my-3 text-center md:text-left">Te Animas?</h4>
            <p className="text-lg text-center  font-light text-gray-500 sm:text-xl dark:text-gray-400">
              ¿ Estás preparad@ para empezar? <br />
              ¿ tienes alguna pregunta? <br /> no dudes en contactar conmigo!{" "}
              <br />
              utiliza el botón abajo para Whats'App o rellena el formulario.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={message.name}
                placeholder="tu nombre"
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
                name="email"
                onChange={handleChange}
                value={message.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ejemplo@gmail.com"
                required
              />
            </div>

            <div className="my-6 ">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mensaje
              </label>
              <textarea
                type=""
                id="text"
                name="text"
                value={message.text}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Pregunta algo aqui, o dejalo en blanco rellenando el campo email para que me ponga en contacto"
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
