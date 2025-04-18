import React from 'react'
import Coin from './../../assets/img/GroupCoin.png';

const Buttons = ({text, counter, Textclass, ImgClass}) => {
  return (
    <>
      <div className='rounded-[10px] gap-[7px] pt-2 pb-2 pr-[30px] pl-[30px] bg-[#32363C] flex justify-center items-center'>
        <div>
            <h2 className={`font-bold text-[11px] text-center ${Textclass}`}>{text}</h2>
            <h2 className='text-white flex gap-[3px] items-center text-center'><img className={`${ImgClass}`} src={Coin} alt="" /> {counter}</h2>
        </div>
      </div>
    </>
  )
}

export default Buttons
