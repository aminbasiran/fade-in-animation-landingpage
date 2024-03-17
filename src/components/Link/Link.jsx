import React from 'react'

export const Link = () => {
  return (
    <div className='fixed right-4 top-[350px] flex flex-col gap-4 scale-in'>
      <div className='text-black p-2 rounded-md bg-yellow-200'>Github</div>
      <div className='text-black bg-yellow-200 p-2 rounded-md'>LinkedIn</div>
      <div className='text-black bg-yellow-200 p-2 rounded-md'>Facebook</div>
    </div>
  )
}
