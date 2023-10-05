import {AiFillCaretDown} from 'react-icons/ai'

const Header = (props) => {
  return (
    <div 
    className={
      ` h-20   w-full flex flex-row  transition-all duration-1000 items-center justify-center fixed top-1  py-2 z-50
      ${props.scroll > 300 ? ' bg-zinc-900/60': 'bg-transparent'} `}>
     
        <ul className="flex gap-9 font-[Dosis] text-xs font-semibold text-zinc-100/70 ">
          
        <li className={` pr-2  flex items-center justify-between gap-2`}> 
        <img src="/logo.png" alt="logo" className='w-12  ' />
        <span className={`${props.scroll < 300? 'border-b-2 border-amber-500' : 'rotate-180'}`}>INICIO </span>
        </li>
        <li className='flex items-center gap-1'>CLASES <span className={`rotate-180`}><AiFillCaretDown/></span> </li>
        <li className='flex items-center gap-1'>SOBRE MI <span className={`rotate-180`}><AiFillCaretDown/></span></li>
        <li className='flex items-center gap-1'>CONTACTO <span className={`rotate-180`}><AiFillCaretDown/></span></li>
        </ul>
    </div>
   
  )
}

export default Header
