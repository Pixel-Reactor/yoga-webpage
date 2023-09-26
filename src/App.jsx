import Intro from "./components/Intro.jsx";
import Header from "./components/Header.jsx";
import { useEffect, useState } from "react";
import Clases from "./components/Clases.jsx";
import Precios from './components/Precios.jsx'
import Contactos from "./components/Contactos.jsx";
import Footer from "./components/Footer.jsx";
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
    <div className="dark min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-zinc-300 to-black  ">
      <Header scroll={scroll} />
      <Intro scroll={scroll} />
      <div className="  bg-gradient-to-t from-amber-950/90 via-stone-900/90 to-zinc-900/90 h-32"></div>

      <Clases />
      <div className="  bg-gradient-to-t from-amber-950/90 via-stone-900/90 to-zinc-900/90 h-32"></div>
      <Precios/>
      <div className="  bg-gradient-to-t from-amber-950/90 via-stone-900/90 to-zinc-900/90 h-32"></div>
    
    
      <Contactos/>
      <Footer/>
    </div>
  );
}

export default App;
