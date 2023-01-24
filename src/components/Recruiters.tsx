import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";
import photo from "../assets/photo.png"
import flag from "../assets/flag.png"
const Recruiters = () => {
  return (
    <div className='bg-white dark:bg-darkBg px-[15px] flex flex-col gap-[30px] py-5 rounded-[10px]'>
      <h2 className='text-xl font-normal leading-[24px] dark:text-white' >New recruiters</h2>
      <div className='flex flex-col  gap-10'>
        <div className='flex items-center justify-between  gap-[24px]'>
          <div className='flex items-center gap-[10px]'>
            <img src={photo} className='w-[57px] h-[57px] rounded-full' />
            <div className='flex flex-col'>
              <h1 className='text-[16px] font-normal leading-[19px] text-black dark:text-white'>Aiony Haust</h1>
              <div className='flex items-center gap-[5px]'>
                <h6 className="text-[12px] leading-[14px] text-gray">Designer</h6>
                <div className='w-[4px] h-[4px] bg-gray-400  rounded-full ' ></div>
                <div className='text-[12px] flex items-center text-gray '>
                  <img src={flag} className='w-[14px]' />
                </div>
              </div>
              <h6 className="text-[12px] leading-[14px] text-blue">2hr ago</h6>
            </div>
          </div>
          <div>
            <button className='border border-[#D7E8FA] dark:border-darkBlue px-[14px] py-2 bg-[#F5F9FE] dark:bg-darkButtonBg rounded-3xl  '>
              <div className='flex items-center gap-[5px] text-blue'>
                <AiOutlinePlus />
                <h3 className='text-sm font-medium'>Follow</h3>
              </div>
            </button>
          </div>
        </div>        
        <div className='flex items-center gap-[5px] text-sm '>
          <h1 className='text-gray '>Wiew all</h1>
          <GrLinkNext color='red'/>
        </div>
      </div>
    </div>
  )
}

export default Recruiters




