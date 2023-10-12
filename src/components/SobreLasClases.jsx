import React, { useRef, useEffect } from "react";
import { Handler } from "../context/Context";

const AboutClases = (props) => {
  const { about } = Handler();
  useEffect(() => {
    const updateTop = () => {
      const top = about.current.getBoundingClientRect().top;
      const height = Math.round(about.current.getBoundingClientRect().height);
      
      if (top < 0 && top * -1 < height) {
        props.isOn(1);
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

  return (
    <div
      ref={about}
      className=" h-full bg-gradient-to-t flex justify-center from-zinc-900/90 via-stone-800/90 to-amber-950/90  overflow-hidden py-10 "
    >
      <div className="bg-[url('/llleaves.svg')] bg-no-repeat bg-cover bg-center w-full h-full">
        <div className="max-w-4xl mx-auto ">
          <h1 className="text-sm w-full text-center text-zinc-100 font-[Dosis] flex items-center justify-center gap-2 z-10">
            Sobre las clases
          </h1>
          <h2 className="text-3xl text-center w-full text-zinc-100 font-[Dosis] flex justify-center items-center gap-2 z-10">
            LA PRÁCTICA DEL YOGA
          </h2>
          <div className="flex flex-col sm:flex-row items-center  relative">
            <p className=" font-[Dosis] text-justify sm:p-4 leading-7 font-light rounded-lg mt-10 text-zinc-300 text-xl p-5">
            En las clases trabajaremos de manera progresiva y adaptada a tu nivel. En cada clase nos enfocaremos en diferentes puntos, buscando liberar y fortalecer el cuerpo en su totalidad. 
Empezaremos calentando el cuerpo y entrando en la práctica con unos saludos al sol. Después, enfocaremos las asanas (posturas) al objetivo de este día y terminaremos con una deliciosa relajación guiada en savasana. En las clases de una hora y cuarto incluiremos también el trabajo energético con pranayamas, donde veremos poco a poco diferentes maneras de controlar y enfocar la energía con la respiración.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutClases;
