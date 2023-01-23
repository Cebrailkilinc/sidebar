import React from 'react';
import photo from "../assets/photo.png";
import {MdSend} from "react-icons/md"

const Share = () => {
  return (
    <div className='flex items-center gap-[10px] w-full'>
        <div>
            <img className='w-[55px] h-[55px] rounded-full ' src={photo} />
        </div>
        <div>
            <input placeholder='Write...' className='border border-[#E5E5E5] py-3 px-[15px] placeholder:text-base rounded-3xl'/>
        </div>
        <div>
            <button>asads</button>
        </div>
    </div>
  )
}

export default Share