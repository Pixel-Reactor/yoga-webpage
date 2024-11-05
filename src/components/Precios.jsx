import React,{useEffect,useRef} from "react";
import { Handler } from "../context/Context";

const Precios = (props) => {
  const { prices } = Handler();

  
  useEffect(() => {
    const updateTop = (ref)=>{ 
      const rect = prices.current.getBoundingClientRect() ;
      if(    
       rect.top <= window.innerHeight/2 &&
       rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)
       ){
       props.isOn(3)
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
    <section id='prices' ref={prices} className="bg-gradient-to-t  from-zinc-900/90 via-stone-800/90 font-[Dosis] to-amber-950/90 py-10">
      
      <div  className="py-8 px-4 mt-20  max-w-screen-3xl lg:py-16 lg:px-6 relative"> 
      <div className="z-0 absolute top-[-135px] left-0 right-0 mx-auto w-96 ">
            <img
              src="/cccoil.svg"
              alt="vortex"
              width="350px"
              height="350px"
            />
          </div>
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight  text-gray-900 dark:text-white text-shadow-w-s">
            Elige tu plan de clases
          </h2>
          <p className="mb-5 font-extralight text-gray-100 sm:text-lg dark:text-gray-200 text-shadow-w-s">
          Elige las clases en las que quieras participar durante la semana. Tendrás acceso tanto a las clases online como a las presenciales.  </p>
        </div>
       
        <div className="py-10 md:flex md:flex-wrap sm:gap-6   ">
      
          <div className="hover:scale-105 transition-all flex flex-col min-w-[300px] justify-between shadow-amber-800/60 shadow-xl  p-2 mx-auto my-5  max-w-xs text-center text-gray-900  rounded-xl border-2 border-zinc-50  dark:border-amber-500/30 xl:p-8 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/80 via-zinc-800/90 to-zinc-900/80  dark:text-white">
          <div className="border border-zinc-100/60 border-dashed shadow-xs shadow-white p-2 rounded-md w-full h-full ">
          <h3 className="mb-4 text-2xl ">ONLINE</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-200">
            1 clase por semana
            </p>
           
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl ">€30</span>
              <span className="text-gray-500 dark:text-gray-400">/mes</span>
            </div>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-200">
            2 clases por semana
            </p>
          
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl ">€40</span>
              <span className="text-gray-500 dark:text-gray-400">/mes</span>
            </div>
            </div>
          </div>

       
          <div  className="flex flex-col hover:scale-105 transition-all justify-between shadow-amber-800/60 shadow-xl  p-2 mx-auto my-5  max-w-xs text-center text-gray-900  rounded-xl border-2 border-zinc-50  dark:border-amber-500/30 xl:p-8 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/80 via-zinc-800/90 to-zinc-900/80  dark:text-white">
          <div className="border w-full h-full border-zinc-100/60 border-dashed shadow-xs shadow-white p-2 rounded-md">

            <h3 className="mb-4 text-2xl ">A DOMICILIO</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-200">
              Clases privadas inviduales o grupales
            </p>
            <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-2xl ">desde</span>
              <span className="mr-2 text-5xl ">€30</span>
              <span className="text-gray-500 dark:text-gray-400">/sesión</span>
              
            </div>
          </div>
         </div>


          <div  className="flex flex-col hover:scale-105 transition-all min-w-[300px] justify-between shadow-amber-800/60 shadow-xl  p-2 mx-auto my-5  max-w-xs text-center text-gray-900  rounded-xl border-2 border-zinc-50  dark:border-amber-500/30 xl:p-8 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/80 via-zinc-800/90 to-zinc-900/80  dark:text-white">
          <div className="border w-full h-full border-zinc-100/60 border-dashed shadow-xs shadow-white p-2 rounded-md">

            <h3 className="mb-4 text-2xl ">CLASES COLECTIVAS EN <br /> "La Verbena"</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-200">
            1 clase a la semana
            </p>
            <div className="flex justify-center items-baseline my-8">
        
              <span className="mr-2 text-5xl ">€35</span>
              <span className="text-gray-500 dark:text-gray-400">/més</span>
              
            </div>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-200">
            2 clases a la semana
            </p>
            <div className="flex justify-center items-baseline my-8">
        
              <span className="mr-2 text-5xl ">€50</span>
              <span className="text-gray-500 dark:text-gray-400">/més</span>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Precios;
