import {AiFillCaretDown} from 'react-icons/ai'

const Header = (props) => {
  return (
    <div 
    className={
      ` h-28 sm:h-20  w-full flex sm:flex-row flex-col transition-all duration-1000 items-center justify-center fixed top-1  py-2 z-50
      ${props.scroll > 300 ? ' bg-zinc-900/60': 'bg-transparent'} `}>
      <img src="/logo.png" alt="logo" className='w-12 mb-2 sm:m-4' />
        <ul className="flex gap-10 font-[Dosis] text-xs font-semibold text-zinc-100/70 ">
        <li className={`${props.scroll < 300? 'border-b-2 border-amber-500' : 'rotate-180'} px-2 flex items-center gap-1`}>INICIO </li>
        <li className='flex items-center gap-1'>CLASES <span className={`rotate-180`}><AiFillCaretDown/></span> </li>
        <li className='flex items-center gap-1'>SOBRE MI <span className={`rotate-180`}><AiFillCaretDown/></span></li>
        <li className='flex items-center gap-1'>CONTACTO <span className={`rotate-180`}><AiFillCaretDown/></span></li>
        </ul>
    </div>
   
  )
}

export default Header
