import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Recruiters from './components/Recruiters'
import Content from './components/Content'
import Share from './components/Share'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full  h-screen  dark:bg-black bg-[#F1F1F1]'>
      <div className='flex items-center justify-center  gap-[28px]'>
        <div className="">
          <Profile/>
        </div>
        <div className="">
          <Share/>
        </div>
        <div >
          <Recruiters />
        </div>
      </div>
    </div>
  )
}

export default App
