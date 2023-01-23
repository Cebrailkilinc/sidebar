import React from 'react';
import photo from "../assets/photo.png";
import { MdSend } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import {BiVideo} from "react-icons/bi";
import {RxCalendar} from "react-icons/rx"

const Share = () => {
    return (
        <div className='px-[37px] pt-[15px] pb-[32px] bg-white dark:bg-darkBg   rounded-xl'>
            <div className='flex items-center gap-[10px] '>
                <div>
                    <img className='w-[55px] h-[55px]  rounded-full ' src={photo} />
                </div>
                <div>
                    <input placeholder='Write...' className='border border-[#E5E5E5] dark:bg-darkButtonBg dark:text-white dark:border-none py-[9px] px-[15px] w-[400px] placeholder:text-base rounded-3xl outline-none' />
                </div>
                <div>
                    <button className='bg-blue p-[13px] rounded-full'>
                        <MdSend className="text-white" />
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center gap-[20px] mt-[17px]'>
                <div className='flex items-center gap-[10px] text-base'>
                    <MdOutlineImage size={31} className='text-fireRed' />
                    <h2 className='text-base dark:text-white'>Picture</h2>
                </div>
                <div className='flex items-center gap-[10px] text-base'>
                    <BiVideo size={31} className='text-blue' />
                    <h2 className='text-base dark:text-white'>Video</h2>
                </div>
                <div className='flex items-center gap-[10px] text-base'>
                    <RxCalendar size={31} className='text-purpleCalendar' />
                    <h2 className='text-base dark:text-white'>Activity</h2>
                </div>
            </div>
        </div>
    )
}

export default Share