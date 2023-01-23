import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";
import photo from "../assets/photo.png"
import flag from "../assets/flag.png"
const Recruiters = () => {
  return (
    <div className='bg-white px-[15px] flex flex-col gap-[30px] py-5 rounded-[10px]'>
      <h2 className='text-xl font-normal leading-[24px]' >New recruiters</h2>
      <div className='flex flex-col  gap-10'>
        <div className='flex items-center justify-between  gap-[23px]'>
          <div className='flex items-center gap-[10px]'>
            <img src={photo} className='w-[57px] h-[57px] rounded-full' />
            <div className='flex flex-col'>
              <h1 className='text-[16px] font-normal leading-[19px] text-black'>Aiony Haust</h1>
              <div className='flex items-center gap-[5px]'>
                <h6 className="text-[12px] leading-[14px] text-[#999999]">Designer</h6>
                <div className='w-[4px] h-[4px] bg-gray-400 rounded-full ' ></div>
                <div className='text-[12px] flex items-center text-[#999999] '>
                  <img src={flag} className='w-[14px]' />
                </div>
              </div>
              <h6 className="text-[12px] leading-[14px] text-[#2E89E4]">2hr ago</h6>
            </div>
          </div>
          <div>
            <button className='border border-[#D7E8FA] px-[13px] py-2 bg-[#F5F9FE] rounded-3xl '>
              <div className='flex items-center gap-[5px] text-[#2E89E4]'>
                <AiOutlinePlus />
                <h3 className='text-sm font-medium'>Follow</h3>
              </div>
            </button>
          </div>
        </div>        
        <div className='flex items-center gap-[5px] text-sm '>
          <h1 className='text-[#999999] '>Wiew all</h1>
          <GrLinkNext color='red'/>
        </div>
      </div>
    </div>
  )
}

export default Recruiters




