import React from "react";
import { RxCross2 } from "react-icons/rx";

const HmasterDrop = () => {
  return (
    <>
      <div className="w-[240px] h-[223px] bg-[#2C2F35] shadow-[4px_4px_10px_5px_#00000040] rounded-[20px] flex flex-wrap gap-[14px] absolute mt-[19px] pl-[32px] pr-[22px] py-[42px]">
                     <div className="flex justify-end">
                       <RxCross2 className="text-white font-bold text-[25px]"/>
                     </div>
     
                     <div className="bg-[#32363C] rounded-[15px] text-white text-[9px] flex items-center justify-between w-[190px] h-[27px] px-[8px]">
                       <div className="flex gap-[12px] items-center">
                         <div className="w-[28px] border-r-[0.50px] border-[#FFFFFF33] ">lvl 1</div>
                         <h2 className="flex gap-[3px] text-[11px]">+2 <img className=" h-[15px] w-[15px]" src={DropCoin} alt="" /></h2>
                       </div>
                       <h2 className="text-[11px] flex">-1000 <img className="h-[15px] w-[15px]" src={DropCoin} alt="" /></h2>
                     </div>
     
                     <div className="bg-[#32363C] rounded-[15px] text-white text-[9px] flex items-center justify-between w-[190px] h-[27px] px-[8px]">
                       <div className="flex gap-[12px] items-center">
                         <div className="w-[28px] border-r-[0.50px] border-[#FFFFFF33] ">lvl 2</div>
                         <h2 className="flex gap-[3px] text-[11px]">+3 <img className=" h-[15px] w-[15px]" src={DropCoin} alt="" /></h2>
                       </div>
                       <h2 className="text-[11px] flex">-2500 <img className="h-[15px] w-[15px]" src={DropCoin} alt="" /></h2>
                     </div>
     
                     <div className="bg-[#32363C] rounded-[15px] text-white text-[9px] flex items-center justify-between w-[190px] h-[27px] px-[8px]">
                       <div className="flex gap-[12px] items-center">
                         <div className="w-[28px] border-r-[0.50px] border-[#FFFFFF33] ">lvl 3</div>
                         <h2 className="flex gap-[3px] text-[11px]">+4 <img className=" h-[15px] w-[15px]" src={DropCoin} alt="" /></h2>
                       </div>
                       <h2 className="text-[11px] flex">-6000 <img className="h-[15px] w-[15px]" src={DropCoin} alt="" /></h2>
                     </div>
     
                   </div>
    </>
  );
};

export default HmasterDrop;
