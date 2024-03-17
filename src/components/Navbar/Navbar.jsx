import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center fade-in-slide-down'>
      <div className='w-9 h-9 bg-slate-600 rounded-full'></div>
      <button className='text-xs py-2 px-3 rounded-lg bg-slate-400 text-black'>Contact Me</button>
    </div>
  )
}
