import { useEffect, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiLinkExternal } from "react-icons/bi";
import { Handler } from "../context/Context";
import { useI18n } from "../i18n/I18nContext.jsx";

const Clases = (props) => {
  const { classes } = Handler();
  const { t } = useI18n();
  const [ubicacion, setUbicacion] = useState("USERA");

  const datos = {
    USERA: {
      mañanas: t("classes.schedule.mornings"),
      tardes: t("classes.schedule.afternoons"),
      direccion: "La Verbena, Calle Juan Zofio 49, 28026 Madrid",
      mapsLink: "https://maps.app.goo.gl/sgm1rB51J7czscD38",
      mapEmbed:
        "https://www.google.com/maps?q=La%20Verbena%20Calle%20Juan%20Zofio%2049%2028026%20Madrid&output=embed",
    },
  };

  const info = datos[ubicacion];

  useEffect(() => {
    const updateTop = () => {
      const rect = classes.current.getBoundingClientRect();

      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        props.isOn(2);
      }
    };

    window.addEventListener("resize", updateTop);
    window.addEventListener("scroll", updateTop);

    return () => {
      window.removeEventListener("resize", updateTop);
      window.removeEventListener("scroll", updateTop);
    };
  }, []);

  return (
    <div
      ref={classes}
      className="h-full overflow-hidden bg-gradient-to-t from-zinc-900/90 via-stone-800/90 to-amber-950/90 py-10 text-zinc-100"
    >
      <div className="h-full w-full bg-[url('/llleaves.svg')] bg-cover bg-center bg-no-repeat p-3 sm:p-6">
        <div className="mx-auto max-w-6xl w-full">
          <div className="relative mb-8 px-2 pl-5 sm:px-4 sm:pl-32">
            <div className="absolute -left-9 -top-16 z-0 sm:-left-0 sm:-top-16">
              <img
                className="animate-spin-slow-reverse opacity-70"
                src="/vvvortex.svg"
                alt="vortex"
                width="190px"
                height="190px"
              />
            </div>
            <p className="mb-2 text-xs uppercase tracking-[0.28em] text-zinc-200/80">
              {t("classes.eyebrow")}
            </p>
            <h3 className="text-3xl text-zinc-100 font-[Dosis] text-shadow-w-s sm:text-4xl">
              {t("classes.title")}
            </h3>
            <p className="mt-2 text-sm text-zinc-200/80">
              {t("classes.subtitle")}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/10 p-2 shadow-[0_25px_70px_rgba(0,0,0,0.28)] backdrop-blur-[2px] sm:p-6 lg:p-8">
            <div className="relative z-10 grid gap-6 lg:grid-cols-[1.1fr_1.4fr] lg:items-center">
              <div className="flex justify-center">
                <img
                  src="/presencial.png"
                  alt="presencial"
                  className="max-w-[17rem] drop-shadow-2xl sm:max-w-[20rem]"
                />
              </div>

              <div className="rounded-xl border border-amber-200/10 bg-zinc-950/15 p-4 sm:p-5">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <p className="text-2xl font-[Dosis] text-zinc-100 text-shadow-w-s underline underline-offset-4">
                    {t("classes.inPerson")}
                  </p>
                  <span className="rounded-md border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-200">
                    {t("classes.city")}
                  </span>
                </div>

                <div className="mb-5 grid grid-cols-1 gap-2 rounded-lg bg-zinc-900/20 p-2 sm:grid-cols-1">
                  {Object.keys(datos).map((loc) => (
                    <button
                      key={loc}
                      className={`rounded-md px-4 py-2.5 text-sm font-medium transition-all ${
                        ubicacion === loc
                          ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20"
                          : "bg-zinc-800/80 text-zinc-200 hover:bg-zinc-700"
                      }`}
                      onClick={() => setUbicacion(loc)}
                    >
                      {loc}
                    </button>
                  ))}
                </div>

                <div className="space-y-5 text-zinc-100">
                  {info.mañanas && (
                    <div className="flex items-start gap-3 rounded-lg border border-zinc-700/30 bg-zinc-900/10 p-3">
                      <span className="mt-0.5 text-amber-300">
                        <AiOutlineCalendar size={22} />
                      </span>
                      <div className="flex-1">
                        <p className="text-sm uppercase tracking-[0.2em] text-zinc-300/80">
                          {t("classes.mornings")}
                        </p>
                        <div className="mt-1 space-y-1 font-medium text-zinc-100">
                          {info.mañanas.map((hora, i) => (
                            <p key={i}>{hora}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3 rounded-lg border border-zinc-700/30 bg-zinc-900/10 p-3">
                    <span className="mt-0.5 text-amber-300">
                      <AiOutlineCalendar size={22} />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm uppercase tracking-[0.2em] text-zinc-300/80">
                        {t("classes.afternoons")}
                      </p>
                      <div className="mt-1 space-y-1 font-medium text-zinc-100">
                        {info.tardes.map((item, idx) => (
                          <p key={idx}>{item}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-zinc-700/30 bg-zinc-900/10 p-3">
                    <span className="mt-0.5 text-amber-300">
                      <GoLocation size={22} />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm uppercase tracking-[0.2em] text-zinc-300/80">
                        {t("classes.address")}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-zinc-100/90">
                        {info.direccion}
                      </p>
                    </div>
                  </div>

                 
                  <div className="overflow-hidden rounded-xl border border-white/10">
                    <iframe
                      title="Mapa de La Verbena"
                      src={info.mapEmbed}
                      className="h-[220px] w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/15 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.2)] backdrop-blur-[2px] sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-2xl font-[Dosis] text-zinc-100 text-shadow-w-s underline underline-offset-4">
                 {t("classes.online")}
                </p>
                <span className="rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-200">
                  {t("classes.onlineBadge")}
                </span>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-zinc-700/30 bg-zinc-900/10 p-3">
                <span className="mt-0.5 text-amber-300">
                  <AiOutlineCalendar size={22} />
                </span>
                <div className="flex-1">
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-300/80">
                    {t("classes.afternoons")}
                  </p>
                  <p className="mt-1 font-medium text-zinc-100">{t("classes.schedule.online")}</p>
                </div>
              </div>

              <div className="mt-5 relative flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-zinc-900/20 p-3">
                <img
                  src="/laptop.png"
                  alt="clase online"
                  loading="lazy"
                  className="max-w-[18rem] object-contain drop-shadow-2xl"
                />
                <img
                  src="/yogaconhele-mats.png"
                  alt="mats yoga"
                  loading="lazy"
                  className="absolute left-1/2 top-[16px] h-[144px] w-[225px] -translate-x-1/2 rounded-sm object-cover"
                />
              </div>

              <p className="mt-5 leading-7 text-zinc-200/90">
                {t("classes.onlineText")}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/15 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.2)] backdrop-blur-[2px] sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-2xl font-[Dosis] text-zinc-100 text-shadow-w-s underline underline-offset-4">
                  {t("classes.private")}
                </p>
                <span className="rounded-md border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-200">
                  {t("classes.privateBadge")}
                </span>
              </div>

              <div className="mb-5 flex justify-center">
                <img
                  src="/img3.png"
                  alt="Privadas"
                  className="max-w-[14rem] drop-shadow-2xl"
                  loading="lazy"
                />
              </div>

              <p className="leading-7 text-zinc-200/90">
                {t("classes.privateText")}
              </p>

              <div className="mt-4 rounded-lg border border-zinc-700/30 bg-zinc-900/10 p-3 text-sm text-zinc-200/90">
                {t("classes.privateNote")}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Clases;
