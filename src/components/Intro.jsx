import React,{ useState, useEffect,Suspense ,useRef} from "react";
import { Handler } from "../context/Context";


const Intro = (props) => {
  const { home,Scrollto,contact } = Handler();

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


    if (props.scroll > 400) {
      setmandala({
        ...mandala,
        top: `-${ Math.round(scroll)}px`,
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
  useEffect(() => {
    const updateTop = ()=>{ 
     const rect =home.current.getBoundingClientRect() ;
    
     if(    
      rect.top <= 0 &&
      rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)
      ){
      props.isOn(0)
    }
  }
    window.addEventListener('resize', updateTop);
    window.addEventListener('scroll', updateTop);

    
    return () => {
      window.removeEventListener('resize', updateTop);
      window.removeEventListener('scroll', updateTop);
    };
  }, []);

 
  useEffect(() => {
    const updateTop = ()=>{ 
     const top = home.current.getBoundingClientRect().top ;
     const height = Math.round(home.current.getBoundingClientRect().height )

     if(top < 0 && (top * -1) < height){props.isOn(0)}
     
    }
   
    window.addEventListener('resize', updateTop);
    window.addEventListener('scroll', updateTop);

    // Limpia los event listeners cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize',updateTop);
      window.removeEventListener('scroll',updateTop);
    };
  }, []);
 
 
  return (

    <div ref={home} className="select-none bg-gradient-to-t  from-zinc-900/90 via-stone-800/90 to-amber-950/90 flex flex-col items-center w-full sm:h-[650px]  overflow-hidden">
      <div className="bg-[url('/sssquiggly.svg')] bg-no-repeat bg-cover bg-center w-full h-full pt-24 sm:pt-1 ">
        <div className="flex flex-col sm:flex-row  sm:justify-between max-w-4xl mt-0 sm:mt-16  mx-auto">
          <div className=" p-8 pr-0 sm:mt-8 z-0 flex justify-between sm:flex-col  ">
            <div className="">
              <h1 className="font-[Dosis] text-3xl sm:font-4xl   font-medium text-zinc-200">
                CLASES VINYASA
              </h1>
              <h2 className="font-mono text-5xl bg-gradient-to-b from-slate-50 via-zinc-300 to-slate-250  bg-clip-text text-transparent   tracking-tighter [word-spacing:-24px] sm:text-6xl md:text-7xl  mt-2 font-extrabold text-zinc-200 drop-shadow-2xl">
                YOGA CON HELE
              </h2>
              <p className="leading-7 max-w-xs  font-[dosis] mt-3 text-zinc-200  font-normal ">
              Conócete y profundiza en tí  a través de esta maravillosa práctica milenaria que ofrece multitud de beneficios absolutamente palpables desde la primera clase.
                
              </p>
              <button
                type="button"
                onClick={()=>Scrollto(contact)}
                className="text-white border border-amber-500 bg-slate-800/90 hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 mt-2"
              >
                Reserva clase de prueba
              </button>
            </div>

           
          </div>
          <div className="p-6 flex  h-full min-h-[500px] justify-end sm:p-6 relative overflow-visible ">
           <Suspense fallback={'loading'} ><img
              src="/mandala.png"
              alt="mandala"
              draggable={false}
              style={mandala}
              className={`left-[-40%]  max-w-lg lg:max-w-xl transition-all duration-500  animate-spin-slow opacity-60`}
            /></Suspense>
           <Suspense fallback={'loading'}><img
              src="/intronobg.png"
              alt="helena"
              draggable={false}
              style={picture}
              className=" brightness-120    min-w-[20rem] object-contain max-w-[21rem] sm:max-w-[22rem] md:max-w-[21rem] transition-all duration-500 "
            /></Suspense> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
