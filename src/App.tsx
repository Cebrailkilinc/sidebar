import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Recruiters from './components/Recruiters'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-[1920px] h-screen px-[320px] dark:bg-black bg-[#F1F1F1]'>
      <div className='flex items-center justify-between gap-[28px]'>
        <div className="">Profile</div>
        <div className="">
          <Content/>
        </div>
        <div className="">
          <Recruiters />
        </div>
      </div>
    </div>
  )
}

export default App
