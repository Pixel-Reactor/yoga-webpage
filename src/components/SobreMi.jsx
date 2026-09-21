import React, { useState, useEffect } from "react";
import { Handler } from "../context/Context";
import { FaChevronUp } from "react-icons/fa";
import { useI18n } from "../i18n/I18nContext.jsx";

const About = (props) => {
  const { about } = Handler();
    const { t } = useI18n();
    const [expanded, setExpanded] = useState(false);

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
          <h1 className="text-sm w-full text-center text-zinc-100 font-[Dosis] flex items-center justify-center gap-2 z-10 my-2">
            {t("about.practiceEyebrow")}
          </h1>
          <h2 className="text-3xl text-shadow-w-xs text-center w-full text-zinc-100 font-[Dosis] flex justify-center items-center gap-2 z-10">
            {t("about.practiceTitle")}
          </h2>
          <div className="flex flex-col items-center relative">
      <p
        className={`font-[Dosis] leading-7 font-light rounded-lg mt-10 text-zinc-300 text-lg p-5 transition-all duration-300 relative `}
        style={{
          maxHeight: expanded ? "none" : "300px",
          overflow: "hidden",
        }}
      >
        {t("about.practiceText")}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-amber-400 mt-5 mb-5 font-[Dosis] border rounded-full px-4 py-1 flex items-center justify-center mx-auto"
      >
        {expanded ? t("about.less") : t("about.more")} <FaChevronUp size={12} className={`inline-block ml-1 transition-transform duration-300 ${expanded ? '' : 'transform rotate-180'}`} />
      </button>
    </div>
        </div>
        <div className="max-w-4xl mx-auto ">
          <h1 className="text-sm w-full text-center text-zinc-100 font-[Dosis] flex items-center justify-center gap-2 z-10 my-2">
            {t("about.classesEyebrow")}
          </h1>
          <h2 className="text-3xl text-shadow-w-xs text-center w-full text-zinc-100 font-[Dosis] flex justify-center items-center gap-2 z-10">
            {t("about.classesTitle")}
          </h2>
          <div className="flex flex-col sm:flex-row items-center  relative">
            <p className=" font-[Dosis] leading-7 font-light rounded-lg mt-10 text-zinc-300 text-lg p-5 transition-all duration-300">
              {t("about.classesText")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
