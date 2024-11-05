import Intro from "./components/Intro.jsx";
import Header from "./components/Header.jsx";
import React, { useEffect, useState, Suspense } from "react";
import About from "./components/SobreMi.jsx";
import Clases from "./components/Clases.jsx";
import Precios from "./components/Precios.jsx";
import Contactos from "./components/Contactos.jsx";
import Footer from "./components/Footer.jsx";
import axios from "axios";
import { FaWhatsapp ,FaInstagram} from "react-icons/fa";

function App() {
  const [scroll, setscroll] = useState(Number);
  const [section, setsection] = useState(0);
  const ScrollListener = () => {
    setscroll(window.scrollY);
  };
  useEffect(() => {
    
    const GetVisit = async() =>{
      const visit =await axios.post(import.meta.env.VITE_API_URL+'/visit');
    
    }
    GetVisit();
   
    window.addEventListener("scroll", ScrollListener);
    return () => {
      window.removeEventListener("scroll", ScrollListener);
    };
  }, []);

  return (
    <div className="dark min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-zinc-300 to-black w-full ">
      <Header scroll={scroll} sectionOn={section} />
      <div className=" fixed right-4 p-0 bottom-10 z-50 bg-green-900/80 border-2 border-amber-700/30 rounded-full">
        <a href="https://wa.me/34744457548" target="_blank">
          <FaWhatsapp className="text-white m-3 " size={30} />
        </a>
      </div>
      <div className=" fixed right-4 p-0 bottom-28 z-50 bg-pink-500/80 border-2 border-white-900/30 rounded-full">
        <a href="https://www.instagram.com/yogaconhele/" target="_blank">
          <FaInstagram className="text-white m-3 " size={30} />
        </a>
      </div>

      <Intro isOn={setsection} />
      <div className="  bg-gradient-to-t from-amber-950/90 via-stone-900/90 to-zinc-900/90 h-32"></div>
      <About isOn={setsection} />
      <div className="  bg-gradient-to-t from-amber-950/90 via-stone-900/90 to-zinc-900/90 h-32"></div>

      <Clases isOn={setsection} />
      <div className="  bg-gradient-to-t from-amber-950/90 via-stone-900/90 to-zinc-900/90 h-32"></div>

     

      <Precios isOn={setsection} />
      <div className="  bg-gradient-to-t from-amber-950/90 via-stone-900/90 to-zinc-900/90 h-32"></div>

     
      <Contactos isOn={setsection} />
      <Footer />
    </div>
  );
}

export default App;
