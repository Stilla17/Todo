import React from 'react'
import Input from '../Input/input'
import { FcGoogle } from "react-icons/fc";
import WalkingBro from './../../assets/Img/Walking around-bro 1.png';
const SignIn = () => {
  return (
    <>
    <div className='w-[100%] h-[100vh] flex justify-center items-center'>
      <div className=' bg-[#C6F4C2] flex rounded-[40px] py-[109px] px-[103px]'>
        <div className='flex w-[1025px] justify-between'>
            <img src={WalkingBro} alt="" />
            <div className='w-[375px] font-[Roboto]'>
                <h2 className='text-[64px] font-bold mb-[40px] text-center'>Sign in</h2>
                <Input />
                <button className='bg-[#00FF445C] w-[375px] mx-auto rounded-[9px] px-[26px] py-[16px] flex items-center gap-[35px] text-[16px] mb-[71px]'><FcGoogle className='w-[26px] h-[26px]'/> Sign in with Google</button>
                <button className='bg-[#92E3A9] rounded-[10px] px-[39px] py-[20px] text-[26px] '>Login In</button>
        <div className='w-[100%] flex justify-end'>
            <h2><a href="#">Create an account</a></h2>
        </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignIn
