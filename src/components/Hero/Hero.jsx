import React from 'react'

export const Hero = () => {
  return (
    <div className='flex flex-col gap-9 w-4/5 mx-auto scale-in'>
      <div className='flex justify-end gap-4'>
          <h1 className='mr-auto font-semibold'>My work</h1>
          <h1 className='font-semibold'>All</h1>
          <h1  className='font-semibold'>Front End</h1>
          <h1  className='font-semibold'>Back End</h1>
          <h1  className='font-semibold'>Fullstack</h1>
      </div>
      <div className='grid grid-cols-3 gap-8 m-3 ' style={{ gridTemplateRows: '400px 400px 400px' }}>
        <div className='bg-yellow-200  rounded-md'></div>
        <div className='bg-yellow-200 rounded-md'></div>
        <div className='bg-yellow-200 rounded-md'></div>
        <div className='bg-yellow-200 rounded-md'></div>
        <div className='bg-yellow-200 rounded-md'></div>
        <div className='bg-yellow-200 rounded-md'></div>
        <div className='bg-yellow-200 rounded-md'></div>
        <div className='bg-yellow-200 rounded-md'></div>
      </div>
    </div>
  )
}
