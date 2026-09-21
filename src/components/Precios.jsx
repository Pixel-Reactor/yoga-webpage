import React,{useEffect, useState} from "react";
import { Handler } from "../context/Context";
import { useI18n } from "../i18n/I18nContext.jsx";

const Precios = (props) => {
  const { prices } = Handler();
  const { t } = useI18n();

  const [sitio, setSitio] = useState("La Verbena");

  const precios = {
    "La Verbena": t("prices.collectiveOptions"),
   
  };
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
    <section id='prices' ref={prices} className="bg-gradient-to-t from-zinc-900/90 via-stone-800/90 to-amber-950/90 py-10 font-[Dosis]">
      <div className="relative max-w-screen-3xl px-4 py-8 mt-20 lg:px-6 lg:py-16">
        <div className="absolute left-0 right-0 top-[-135px] z-0 mx-auto w-96 opacity-70">
          <img src="/cccoil.svg" alt="vortex" width="350px" height="350px" />
        </div>

        <div className="relative z-10 mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-zinc-200/80">
            {t("prices.eyebrow")}
          </p>
          <h2 className="mb-4 text-4xl tracking-tight text-gray-900 text-shadow-w-s dark:text-white">
            {t("prices.title")}
          </h2>
          <p className="font-extralight text-gray-100 text-shadow-w-s sm:text-lg dark:text-gray-200">
            {t("prices.text")}
          </p>
        </div>

        <div className="relative z-10 grid gap-5 py-8 md:grid-cols-3">
          <div className="mx-auto my-2 w-full max-w-xs rounded-[2rem] border border-white/10 bg-[radial-gradient(ellipse_at_center,_rgba(20,20,20,0.75),_rgba(10,10,10,0.88))] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 xl:p-5">
            <div className="flex h-full flex-col gap-5 rounded-[1.5rem] border border-dashed border-zinc-200/20 bg-zinc-900/10 p-3 sm:p-4">
              <div className="flex w-full justify-center">
                {Object.keys(precios).map((s) => (
                  <button
                    key={s}
                    className={`w-full rounded-lg px-3 py-2 text-sm font-semibold transition-all ${
                      sitio === s
                        ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20"
                        : "bg-zinc-800 text-white hover:bg-zinc-700"
                    }`}
                    onClick={() => setSitio(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <h3 className="text-xl font-bold uppercase text-zinc-50">
                {t("prices.collectiveTitle")} {sitio}
              </h3>

              <div className="space-y-4">
                {precios[sitio].map((item, index) => (
                  <div key={index} className="rounded-xl border border-white/5 bg-white/3 p-3">
                    <p className="text-sm text-zinc-200/80">{item.classes}</p>
                    <div className="mt-2 flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-semibold text-white">€{item.price}</span>
                      <span className="text-sm text-zinc-300">{t("prices.perMonth")}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto my-2 w-full max-w-xs rounded-[2rem] border border-white/10 bg-[radial-gradient(ellipse_at_center,_rgba(20,20,20,0.75),_rgba(10,10,10,0.88))] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 xl:p-5">
            <div className="flex h-full flex-col gap-5 rounded-[1.5rem] border border-dashed border-zinc-200/20 bg-zinc-900/10 p-3 sm:p-4">
              <h3 className="text-xl font-bold uppercase text-zinc-50">{t("prices.onlineTitle")}</h3>
              <p className="text-zinc-200/80">{t("prices.onlineFrequency")}</p>

              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-semibold text-white">€30</span>
                <span className="text-sm text-zinc-300">{t("prices.perMonth")}</span>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/3 p-3 text-sm text-zinc-200/80">
                {t("prices.onlineNote")}
              </div>
            </div>
          </div>

          <div className="mx-auto my-2 w-full max-w-xs rounded-[2rem] border border-white/10 bg-[radial-gradient(ellipse_at_center,_rgba(20,20,20,0.75),_rgba(10,10,10,0.88))] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 xl:p-5">
            <div className="flex h-full flex-col gap-5 rounded-[1.5rem] border border-dashed border-zinc-200/20 bg-zinc-900/10 p-3 sm:p-4">
              <h3 className="text-2xl font-bold uppercase text-zinc-50">{t("prices.homeTitle")}</h3>
              <p className="text-zinc-200/80">{t("prices.homeDescription")}</p>

              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl text-zinc-300">{t("prices.from")}</span>
                <span className="text-5xl font-semibold text-white">€30</span>
                <span className="text-sm text-zinc-300">{t("prices.perSession")}</span>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/3 p-3 text-sm text-zinc-200/80">
                {t("prices.homeNote")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Precios;
