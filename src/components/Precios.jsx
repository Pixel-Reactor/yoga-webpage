import React from "react";

const Precios = () => {
  return (
    <section className="bg-gradient-to-t  from-zinc-900/90 via-stone-800/90 font-[Dosis] to-amber-950/90 py-10">
      
      <div className="py-8 px-4   max-w-screen-3xl lg:py-16 lg:px-6 relative"> 
      <div className="z-0 absolute top-[-135px] left-0 right-0 mx-auto w-96 ">
            <img
          
              src="/cccoil.svg"
              alt="vortex"
              width="350px"
              height="350px"
            />
          </div>
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight  text-gray-900 dark:text-white">
            Elige tu plan de clases
          </h2>
          <p className="mb-5 font-extralight text-gray-500 sm:text-lg dark:text-gray-400">
            Elige las clases que quieres hacer en la semana , tendrás acceso a tanto a las clases online como las presenciales.
          </p>
        </div>
       
        <div className="py-10 md:flex  sm:gap-6   ">
          <div className="flex flex-col  p-6 mx-auto my-5  max-w-xs text-center text-gray-900  rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/80 via-zinc-800/90 to-zinc-900/80  dark:text-white">
            <h3 className="mb-4 text-2xl ">1 Clase por semana</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Best option for personal .
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl ">€29</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
          </div>

          <div className="flex flex-col  p-6 mx-auto my-5  max-w-xs text-center text-gray-900  rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/80 via-zinc-800/90 to-zinc-900/80  dark:text-white">
            <h3 className="mb-4 text-2xl ">2 Clases por semana</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Relevant for multiple users
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">€99</span>
              <span
                className="text-gray-500 dark:text-gray-400"
              >
                /month
              </span>
            </div>
          </div>

          <div className="flex flex-col  p-6 mx-auto my-5  max-w-xs text-center text-gray-900  rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/80 via-zinc-800/90 to-zinc-900/80  dark:text-white">
            <h3 className="mb-4 text-2xl ">Privadas</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Clases privadas inviduales o grupales
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl ">€499</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Precios;
