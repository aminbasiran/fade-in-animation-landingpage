import { useState } from 'react'
import './App.css'
import {Greeting,Navbar,Link,Hero} from "./components"

function App() {

  return (
    <div className='flex flex-col gap-3'>
      <Navbar/>
      <Greeting/>
      <Hero/>
      <Link/>
      <div className='absolute w-[120px] aspect-square rounded-full bg-yellow-300 top-[10px] left-[500px] blur-[80px] -z-20 '></div>
    </div>
  )
}

export default App
