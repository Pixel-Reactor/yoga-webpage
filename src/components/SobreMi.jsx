import React, { useRef, useEffect } from "react";
import { Handler } from "../context/Context";

const About = (props) => {
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
              Enhorabuena, si ya has llegado aquí es porque estás buscando algo
              más por tu salud, ya que sea mental o física. Y la buena noticia
              es que la una va de la mano de la otra, así que tanto si estás
              buscando recuperarte de una lesión o ganar fuerza y flexibilidad,
              si buscas desestresarte o distraerte, en tu mundo interior y
              conocerte más íntimamente, la práctica del yoga puede ser de
              verdadera ayuda/ el conocimiento de uno mismo a través de la
              práctica de asanas “posturas” y pranayamas «respiración» y de
              Dharana “concentración" y Dayana “meditación” es un camino hermoso
              e infinito. Que requiere la paciencia y disciplina, pero que
              ofrece verdaderos beneficios que son absolutamente palpables desde
              la primera clase. Tanto si ya has practicado yoga como si eres
              recién llegado en este maravilloso mundo, te invito a probar mis
              clases. Trabajaremos la fuerza, la flexibilidad, el equilibrio
              apoyado en una respiración consciente y correcta que acompaña el
              proceso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
