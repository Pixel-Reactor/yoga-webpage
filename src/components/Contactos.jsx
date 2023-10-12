import React, { useEffect,  useState } from "react";

import { Handler } from "../context/Context";
import axios from "axios";
const Contactos = (props) => {
  const { contact } = Handler();
  const [sending, setsending] = useState(false);
  const [sendmsg, setsendmsg] = useState({
    on: false,
    success: false,
    text: "",
  });
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
      ...message,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setsending(true);
    const res = await axios.post(
      import.meta.env.VITE_API_URL + "/send/form/",
      message
    );
    if (res.status === 200){
      setsending(false);
      setsendmsg({on:true,success:true,text:res.data.text})
    } else {
      setsending(false);
      setsendmsg({on:true,success:false,text:res.data.text})
    }
  };

  return (
    <div
      ref={contact}
      className="bg-gradient-to-t dark relative from-zinc-900/90 via-stone-800/90 to-amber-950/90  font-[Dosis] "
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
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {sending ? (
                <>
                  <div className="flex justify-center items-center gap-3">
                    <span>Enviando</span>
                    <div class="sk-chase">
                      <div class="sk-chase-dot"></div>
                      <div class="sk-chase-dot"></div>
                      <div class="sk-chase-dot"></div>
                      <div class="sk-chase-dot"></div>
                      <div class="sk-chase-dot"></div>
                      <div class="sk-chase-dot"></div>
                    </div>
                  </div>
                </>
              ) : (
                "Enviar"
              )}
            </button>
          </form>
        </div>
        {sendmsg.on && (
          <div
            id="toast-success"
            class="flex items-center fixed top-20 left-0 right-0 mx-auto  w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert"
          >
            {sendmsg.success ? (
              <div class="inline-flex items-center  justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="sr-only">Check icon</span>
              </div>
            ) : (
              <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                </svg>
                <span class="sr-only">Warning icon</span>
              </div>
            )}
           
            <div class="ml-3 text-sm font-normal">
            {sendmsg.text}
            </div>
            <button
              type="button"
              onClick={() => setsendmsg({ ...sendmsg, on: false })}
              class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contactos;
