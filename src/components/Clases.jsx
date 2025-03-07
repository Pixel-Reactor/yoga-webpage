import React, { useEffect } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiLinkExternal } from "react-icons/bi";
import { Handler } from "../context/Context";

const Clases = (props) => {
  const { classes } = Handler();

  useEffect(() => {
    const updateTop = (ref) => {
      const rect = classes.current.getBoundingClientRect();

      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        props.isOn(2)
      }
    }
    window.addEventListener('resize', updateTop);
    window.addEventListener('scroll', updateTop);

    // Limpia los event listeners cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', updateTop);
      window.removeEventListener('scroll', updateTop);
    };
  }, []);
  return (
    <div ref={classes} className=" h-full bg-gradient-to-t flex justify-center from-zinc-900/90 via-stone-800/90 to-amber-950/90  overflow-hidden py-10 ">
      <div className="bg-[url('/llleaves.svg')] font-[dosis] bg-no-repeat bg-cover bg-center w-full h-full p-2">
        <div className="max-w-5xl mx-auto  w-full">
          <h3 className="text-sm text-zinc-100 font-[Dosis] flex items-center gap-2 z-10">
            TODOS LOS NIVELES
          </h3>
          <h3 className="text-3xl text-zinc-100 font-[Dosis] flex items-center gap-2 z-10 text-shadow-w-s">
            CLASES VINYASA YOGA
          </h3>
          <h3 className="text-sm text-zinc-100 font-[Dosis] flex items-center gap-2 z-10">
            PRESENCIAL - ONLINE - PRIVADAS
          </h3>
          <div className="z-0 absolute translate-y-[-160px] translate-x-[-130px] ">
            <img
              className="animate-spin-slow-reverse"
              src="/vvvortex.svg"
              alt="vortex"
              width="280px"
              height="280px"
            />
          </div>
          <div className="flex flex-col  py-6 sm:flex-row sm:items-center text-zinc-50 w-full justify-between ">
            <div>
              <img
                src="/presencial.png"
                alt="presencial"
                className="min-w-[18rem] max-w-xs drop-shadow-2xl"
              />
            </div>
            <div className="h-full flex gap-4 items-start flex-col justify-center   mt-5 sm:mt-0 max-w-md  ">
              <p className="  text-2xl text-shadow-w-s underline underline-offset-4">PRESENCIAL</p>
              <p className=" leading-6 font-extralight text-lg  flex flex-col gap-6">
                <span className="flex gap-2 items-center justify-between">
                  <span className="flex flex-col items-center sm:flex-row sm:gap-3  w-20 sm:w-44">
                    <AiOutlineCalendar size={25} />
                    <span>Mañanas</span>
                  </span>
                  <span className="flex flex-col items-start">
                    <span className="font-semibold">Miércoles a las 10:00h</span>
                    <span className="font-semibold">Sábados a las 10:30h</span></span>
                </span>
                <span className="flex gap-2 items-center justify-between">
                  <span className="flex flex-col items-center sm:flex-row sm:gap-3  w-20 sm:w-44">
                    <AiOutlineCalendar size={25} />
                    <span>Tardes</span>
                  </span>

                  <span className="font-semibold">Lunes, Miércoles - 18:30h</span>
                </span>
                <span className="flex gap-2 items-center justify-between">
                  <span className="w-28 sm:w-20 flex items-center  justify-center sm:justify-start "> 
                    <GoLocation size={25} />
                    </span>
                  <span className="text-right">La Verbena
                    Calle Juan Zofio 49,28026 Madrid
                    </span>
                </span>
                <a
                  href="https://maps.app.goo.gl/sgm1rB51J7czscD38"
                  target="_blank"
                >
                  <button className="w-full shadow-sm shadow-white/50 max-w-sm text-center flex justify-center items-center gap-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <span>
                      <BiLinkExternal size={25} />
                    </span>{" "}
                    Abrir en Google Maps
                  </button>
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-10 p-6 sm:flex-row-reverse sm:items-center text-zinc-50 w-full justify-between">
            <div className="relative flex items-center justify-center max-w-[300px] min-w-[300px] max-h-[200px] min-h-[200px] ">
              <img
                src="/laptop.png"
                alt="presencial"
                loading="lazy"
                className="  max-w-[300px] min-w-[300px] max-h-[200px] min-h-[200px]  object-contain drop-shadow-2xl"
              />
              <img
                src="/helebg.jpg"
                alt="presencial"
                loading="lazy"
                className=" w-[234px] rounded-sm h-[149px] top-[20px]   object-cover absolute"
              />
            </div>
            <div className="h-full flex items-left flex-col mt-6 justify-center sm:mt-6 gap-3 max-w-sm ">
              <p className="font-[Dosis]  text-2xl text-shadow-w-s underline underline-offset-4">ONLINE</p>
              <span className="flex gap-2 items-center  leading-6  justify-between text-lg ">
                <span className="flex flex-col items-center sm:flex-row sm:gap-3  w-20 sm:w-44">
                  <AiOutlineCalendar size={25} />
                   <span>Tardes </span>
                   </span>
                   <span className="font-semibold text-right">Martes y Jueves a las las 19:30h</span>
              </span>
              <p className=" leading-6 font-extralight text-lg">
                Clases online en grupos reducidos para poder atenderte y acompañarte de la mejor manera posible.
                Cuando la distancia y el tiempo no lo permiten, las clases online son una excelente alternativa.
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-10 p-6 sm:flex-row sm:gap-4 text-zinc-50 w-full justify-between">
            <div className="sm:mt-16">
              <img
                src="/img3.png"
                alt="Privadas"
                className="min-w-[18rem] max-w-xs drop-shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="h-full flex gap-3 items-left  flex-col mt-6 justify-center sm:mt-20 max-w-sm  ">
              <p className="font-[Dosis]  text-2xl text-shadow-w-s underline underline-offset-4">PRIVADAS</p>

              <p className=" leading-6 font-extralight text-lg">
                Opción para aquellos que tengan un horario complicado de compaginar con otras clases o que requieran atención especial.
                Buscaremos lo que mejor se adapte a ti y profundizaremos en la práctica.
                <br />
                <br />
                <span className="font-semibold"> &#40; Hasta 4 personas &#41;</span>
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Clases;
