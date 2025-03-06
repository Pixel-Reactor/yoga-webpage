import {AiFillCaretDown} from 'react-icons/ai'
import { useEffect,useRef,useState } from 'react'
import { Handler } from "../context/Context";

const Header = (props) => {
 
  const { Scrollto, contact,about, home,prices ,classes} = Handler();
  
  
  return (
    <div 
    className={
      ` h-12 w-full  flex flex-row  transition-all duration-1000 items-center justify-center fixed top-1  py-2 z-50 
      ${props.scroll > 300 ? ' bg-zinc-900/60': 'bg-transparent'} `}>
     
        <ul className="flex gap-4 md:gap-16 font-[Dosis] text-xs font-semibold text-zinc-100/70  overflow-x-auto">
        <li className=''> <img src="/logo.png" alt="logo" className='w-12 ' /></li>
        <li 
        onClick={()=>Scrollto(home)}
        className={`transition-all  flex items-center justify-between  ${props.sectionOn === 0 && 'text-amber-400 text-lg'}`}> INICIO </li>
        <li 
        onClick={()=>Scrollto(about)}
        className={`transition-all  flex items-center gap-1 ${props.sectionOn === 1 && 'text-amber-400 text-lg'}`}>PRÁCTICA </li>
        <li 
        onClick={()=>Scrollto(classes)}
        className={`transition-all  flex items-center gap-1 ${props.sectionOn === 2 && 'text-amber-400 text-lg'}`}>CLASES </li>
        <li 
        onClick={()=>Scrollto(prices)}
        className={`transition-all flex items-center gap-1 ${props.sectionOn === 3 && 'text-amber-400 text-lg'}`}>PRECIOS </li>
        <li 
        onClick={()=>Scrollto(contact)}
        className={`transition-all flex items-center gap-1 ${props.sectionOn === 4 && 'text-amber-400 text-lg'}`}>CONTACTO </li>
        </ul>
    </div>
   
  )
}

export default Header
