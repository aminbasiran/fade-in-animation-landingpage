import React from 'react'

export const Greeting = () => {
  return (
    <div className='flex flex-col gap-3 scale-in'>
      <h1 className='text-5xl font-semibold'>Hello</h1>
      <h2 className='text-4xl font-semibold w-[600px] mx-auto'>I'm <span className='text-yellow-300'>Amin</span>, a full-stack developer based in Malaysia</h2>
    </div>
  )
}
