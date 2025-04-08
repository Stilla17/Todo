import React from 'react'
import { FcGoogle } from "react-icons/fc";
import WalkingBro from './../../assets/Img/Walking around-bro 1.png';
import { LuUpload } from "react-icons/lu";
import SignInput from '../LoginInput/LoginInput';
import FillBro from './../../assets/Img/Fill out-bro 1.png';
const Login = () => {
  return (
    <>
    <div className='w-[100%] h-[100vh] flex justify-center items-center'>
      <div className=' bg-[#C6F4C2] flex rounded-[40px] py-[109px] px-[103px]'>
        <div className='flex w-[1025px] justify-between'>
            <div className='w-[375px]  font-[Roboto]'>
                <h2 className='text-[64px] font-bold mb-[40px] text-center'>Sign in</h2>
                <SignInput />
                <button className='bg-white rounded-[25px] px-[26px] py-[11px] flex items-center gap-[35px] text-[16px] mb-[71px]'>Upload avatar <LuUpload className='w-[24px] h-[24px]'/> </button>
                <button className='bg-[#92E3A9] rounded-[10px] px-[39px] py-[20px] text-[26px] '>Registar</button>
            </div>
            <img src={FillBro} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
