import { useEffect,useRef,useState } from 'react'
import { Handler } from "../context/Context";
import { useI18n } from '../i18n/I18nContext.jsx';

const Header = (props) => {
 
  const { Scrollto, contact,about, home,prices ,classes} = Handler();
  const { language, languages, setLanguage, t } = useI18n();
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef(null);
  const activeLanguage = languages.find(({ code }) => code === language) || languages[0];

  useEffect(() => {
    const closeLanguageMenu = (event) => {
      if (!languageMenuRef.current?.contains(event.target)) {
        setLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', closeLanguageMenu);
    return () => document.removeEventListener('mousedown', closeLanguageMenu);
  }, []);
  
  
  return (
    <div 
    className={
      ` h-12 w-full  flex flex-row  transition-all duration-1000 items-center justify-center fixed top-1  py-2 z-50 cursor-pointer select-none 
      ${props.scroll > 300 ? ' bg-zinc-900/60': 'bg-transparent'} `}>
     
        <ul className="flex gap-4 md:gap-16 font-[Dosis] text-xs font-semibold text-zinc-100/70  overflow-x-auto pr-16">
        <li className=''> <img src="/logo.png" alt="logo" className='w-12 ' /></li>
        <li 
        onClick={()=>Scrollto(home)}
        className={`transition-all  flex items-center justify-between  ${props.sectionOn === 0 && 'text-amber-400 text-lg'}`}> {t('nav.home')} </li>
        <li 
        onClick={()=>Scrollto(about)}
        className={`transition-all  flex items-center gap-1 ${props.sectionOn === 1 && 'text-amber-400 text-lg'}`}>{t('nav.practice')} </li>
        <li 
        onClick={()=>Scrollto(classes)}
        className={`transition-all  flex items-center gap-1 ${props.sectionOn === 2 && 'text-amber-400 text-lg'}`}>{t('nav.classes')} </li>
        <li 
        onClick={()=>Scrollto(prices)}
        className={`transition-all flex items-center gap-1 ${props.sectionOn === 3 && 'text-amber-400 text-lg'}`}>{t('nav.prices')} </li>
        <li 
        onClick={()=>Scrollto(contact)}
        className={`transition-all flex items-center gap-1 ${props.sectionOn === 4 && 'text-amber-400 text-lg'}`}>{t('nav.contact')} </li>
        </ul>
        <div ref={languageMenuRef} className="absolute right-3 top-1/2 -translate-y-1/2 font-[Dosis]">
          <button
            type="button"
            onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-amber-300/30 bg-orange-950/85 text-base text-white shadow-lg shadow-black/20 transition hover:bg-orange-900/90"
            aria-label="Seleccionar idioma"
          >
            <p>{activeLanguage.flag}</p>
          </button>

          {languageMenuOpen && (
            <div className="absolute right-0 mt-2 w-32 overflow-hidden rounded-lg border border-amber-400/20 bg-zinc-950/95 text-xs text-zinc-100 shadow-xl shadow-black/30 backdrop-blur-sm">
              {languages.map(({ code, label, name, flag }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    setLanguage(code);
                    setLanguageMenuOpen(false);
                  }}
                  className={`grid w-full grid-cols-[1.25rem_1fr_1.5rem] items-center gap-2 px-3 py-2 text-left leading-none transition ${
                    language === code
                      ? 'bg-amber-400/20 text-amber-100'
                      : 'hover:bg-zinc-800/80'
                  }`}
                >
                  <span className="flex items-center justify-center text-sm leading-none">{flag}</span>
                  <span className="leading-none">{name}</span>
                  <span className="text-right text-[10px] leading-none text-zinc-400">{label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
    </div>
   
  )
}

export default Header
