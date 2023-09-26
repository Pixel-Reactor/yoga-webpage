import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiLinkExternal } from "react-icons/bi";
const Clases = () => {
  return (
    <div className=" h-full bg-gradient-to-t flex justify-center from-zinc-900/90 via-stone-800/90 to-amber-950/90  overflow-hidden py-10 ">
      <div className="bg-[url('/llleaves.svg')] bg-no-repeat bg-cover bg-center w-full h-full   p-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-sm text-zinc-100 font-[Dosis] flex items-center gap-2 z-10">
            TODOS LOS NIVELES
          </h3>
          <h3 className="text-3xl text-zinc-100 font-[Dosis] flex items-center gap-2 z-10">
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
          <div className="flex flex-col mt-10 p-6 sm:flex-row text-zinc-50 w-full justify-between">
            <div>
              <img
                src="/presencial.png"
                alt="presencial"
                className="min-w-[18rem] max-w-xs"
              />
            </div>
            <div className="h-full flex gap-3 items-left flex-col mt-6 justify-center sm:mt-20 max-w-sm ">
              <p className="font-[Dosis]  text-2xl">PRESENCIAL</p>
              <p className="font-sans leading-6 font-extralight text-lg">
                <span className="flex gap-2 items-center">
                  <AiOutlineCalendar /> Todos los Miércoles{" "}
                </span>
                <span className="flex gap-2 items-center">
                  <GoLocation /> La Verbena <br />
                  Calle Juan Zofio 49,28026 Madrid
                </span>
                <a
                  href="https://maps.app.goo.gl/sgm1rB51J7czscD38"
                  target="_blank"
                >
                  <button className="mt-3 flex items-center gap-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <span>
                      <BiLinkExternal />
                    </span>{" "}
                    Abrir en Google Maps
                  </button>
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-10 p-6 sm:flex-row-reverse text-zinc-50 w-full justify-between">
            <div className="relative flex items-center justify-center">
              <img
                src="/laptop.png"
                alt="presencial"
                className=" max-w-xs w-[300px] h-[200px] object-contain"
              />
              <img
                src="/helebg.jpg"
                alt="presencial"
                className=" w-[234px] rounded-sm h-[149px] top-[20px]  object-cover absolute"
              />
            </div>
            <div className="h-full flex items-left flex-col mt-6 justify-center sm:mt-6 gap-3 max-w-sm ">
              <p className="font-[Dosis]  text-2xl">ONLINE</p>
              <span className="flex gap-2 items-center font-sans leading-6 font-extralight text-lg">
                <AiOutlineCalendar /> Domingo - Martes - Jueves{" "}
              </span>
              <p className="font-sans leading-6 font-extralight text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.,
                veritatis ipsam atque placeat harum adipisci!
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
