import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Intro = (props) => {
  const [mandala, setmandala] = useState({
    position: "absolute",
    top: "0px",
    opacity: 1,
  });
  const [picture, setpicture] = useState({
    transform: `translateX(0px) rotateY(180deg)`,
    opacity: 1,
  });
  useEffect(() => {
    const scroll = props.scroll / 20;
    const opacity = props.scroll / 1000;

    console.log(opacity);

    if (props.scroll > 300) {
      setmandala({
        ...mandala,
        top: `${100 - Math.round(scroll)}px`,
        opacity: 1 - opacity,
      });
      setpicture({
        ...picture,
        transform: `translateX(${30 + scroll}px) rotateY(180deg) `,
        opacity: 1 - opacity,
      });
    } else {
      setmandala({
        ...mandala,
        top: "-50px",
        opacity: 1,
      });
      setpicture({
        ...picture,
        transform: `translateX(0px) rotateY(180deg) `,
        opacity: 1,
      });
    }
  }, [props.scroll]);
  return (
    <div className="select-none bg-gradient-to-t  from-zinc-900/90 via-stone-800/90 to-amber-950/90 flex flex-col items-center w-full sm:h-[650px] h-[980px] overflow-hidden">
      <div className="bg-[url('/sssquiggly.svg')] bg-no-repeat bg-cover bg-center w-full h-full pt-24 sm:pt-1 ">
        <div className="flex flex-col sm:flex-row  sm:justify-between max-w-4xl mt-0 sm:mt-16  mx-auto">
          <div className=" p-8 pr-0 sm:mt-20 z-0 flex justify-between sm:flex-col  ">
            <div className="">
             
             
              <h1 className="font-[Dosis] text-3xl sm:font-4xl   font-medium text-zinc-200">
                CLASES VINYASA
              </h1> 
              <h2 className="font-mono text-5xl bg-gradient-to-b from-slate-50 via-zinc-300 to-slate-250  bg-clip-text text-transparent   tracking-tighter [word-spacing:-24px] sm:text-6xl md:text-7xl  mt-2 font-extrabold text-zinc-200 drop-shadow-2xl">
              YOGA CON HELE
              </h2> 
              <p className="leading-6 max-w-xs   mt-3 text-zinc-200  font-sans font-light ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. vero
                molestiae dicta aliquid pariatur fugiat, earum hic.
              </p>
              <button
              type="button"
              class="text-white bg-slate-800/90 hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 mt-2"
            >
             
              Reserva clase de prueba
            </button>
            </div>
           
            <div className="my-4 flex flex-col h-full justify-center sm:flex-row sm:justify-start">
              <FaWhatsapp className="text-green-700/80 m-4 " size={22} />
              <BsInstagram className="text-pink-400/60 m-4" size={20} />
            </div>
          </div>
          <div className="p-6 flex  h-full min-h-[500px] justify-end sm:p-6 relative overflow-visible z-50">
            <img
              src="/mandala.png"
              alt="mandala"
              draggable={false}
              style={mandala}
              className={`left-[-40%]  max-w-lg lg:max-w-xl transition-all duration-500  animate-spin-slow opacity-60`}
            />
            <img
              src="/intronobg.png"
              alt="helena"
              draggable={false}
              style={picture}
              className=" brightness-120    min-w-[20rem] object-contain max-w-[21rem] sm:max-w-[22rem] md:max-w-[21rem] transition-all duration-500 z-50 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
