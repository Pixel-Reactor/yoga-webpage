import Intro from "./components/Intro.jsx";
import Header from "./components/Header.jsx";
import React,{ useEffect, useState,Suspense} from "react";
import About from "./components/SobreMi.jsx";
import Clases from "./components/Clases.jsx";
import Precios from "./components/Precios.jsx";
import Contactos from "./components/Contactos.jsx";
import Footer from "./components/Footer.jsx";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  const [scroll, setscroll] = useState(Number);
  const ScrollListener = () => {
    setscroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", ScrollListener);

    return () => {
      window.removeEventListener("scroll", ScrollListener);
    };
  }, []);

  return ( 
    <div className="bg-slate-500 fixed top-0 left-0 w-screen h-screen">
    <div className="dark min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-zinc-300 to-black  ">
    
       <div className=" fixed right-4 p-0 bottom-4 z-50 bg-zinc-900/80 border-2 border-amber-700/30 rounded-full">
        <FaWhatsapp className="text-green-700/80 m-3 " size={30} />
        </div>
      
      <Header scroll={scroll} />
      <Intro scroll={scroll} />
      <div className="  bg-gradient-to-t from-amber-950/90 via-stone-900/90 to-zinc-900/90 h-32"></div>
      <About />
      <div className="  bg-gradient-to-t from-amber-950/90 via-stone-900/90 to-zinc-900/90 h-32"></div>

      <Clases />
      <div className="  bg-gradient-to-t from-amber-950/90 via-stone-900/90 to-zinc-900/90 h-32"></div>
      
       <Precios />
      <div className="  bg-gradient-to-t from-amber-950/90 via-stone-900/90 to-zinc-900/90 h-32"></div>
      
      <Contactos />
      <Footer />
    
      </div>  
      </div>  
  );
}

export default App;
