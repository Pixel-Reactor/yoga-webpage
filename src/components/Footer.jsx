import React from 'react'

const Footer = () => {
  return (
    <div className='bg-zinc-900/90 text-zinc-50/80 p-1 h-48 flex flex-col items-center'>
      <div className='flex items-center gap-2'> 
      <img src="/logo.png" alt="logo" className='w-12 mb-2 sm:m-4' />
     
      </div> 
      <p className=''>YOGACONHELE &copy; marca registrada</p> 
      <p className='text-xs'>Sitio web desarrollado por : </p>
      <p>pixel-reactor &copy;</p>
      <a href="https://www.pixel-reactor.com" target='_blank'>
        www.pixel-reactor.com
      </a>
    </div>
  )
}

export default Footer
