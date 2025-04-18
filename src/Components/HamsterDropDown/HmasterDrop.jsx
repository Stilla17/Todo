import React from "react";
import { RxCross2 } from "react-icons/rx";

const HmasterDrop = () => {
  return (
    <>
       <div className="bg-[#2C2F35] shadow-[4px_4px_10px_5px_#00000040] w-[375px] h-[502px] rounded-[20px] py-[35px] pl-[31px] pr-[25px] absolute mt-[-570px]">
                <RxCross2 className="text-white font-bold text-[44px] "/>
      
                <div className="flex flex-wrap gap-[12px] mt-[25px]">
                 
                <div onClick={ProfitHour} className="bg-zinc-800 text-white rounded-2xl p-4 w-full max-w-md flex flex-col h-[109px] gap-4 shadow-lg">
                   <div className="flex items-center gap-4 border-[#FFFFFF33] border-b h-[54px]">
                      <img className="w-[56px] h-[32px]" src={Exclude} alt="" />
                    <div>
      
                   <div className="w-[118px] h-[42px] ">
                      
                     <div className="text-[9px] font-bold">Тоp 10 cmc pairs</div>
                     <div className="text-[7px] text-gray-300">Profit per hour</div>
                     <div className="text-yellow-400 text-[8px] flex gap-[2px]"><img className="w-[11px] h-[11px]" src={DropCoin} alt="" /> {state.LevelOne}</div>
      
                   </div>
      
                     </div>
                   </div>
      
                  <div className="flex items-center gap-[12px] text-base h-[24px]">
                    <div className="text-sm px-3 py-1 border-r-1 border-[#FFFFFF33] ">lvl 1</div>
                    <div className="font-semibold text-[12px] flex"><img className="h-[15px] w-[15px]" src={DropCoin} alt="" /> {state.OnePrise}</div>
                  </div>
                </div>
      
                <div className="bg-zinc-800 text-white rounded-2xl p-4 w-full max-w-md flex flex-col h-[109px] gap-4 shadow-lg">
                   <div className="flex items-center gap-4 border-[#FFFFFF33] border-b h-[54px]">
                      <img className="w-[48px] h-[48px]" src={Meme} alt="" />
                    <div>
      
                   <div className="w-[118px] h-[42px] ">
                      
                     <div className="text-[9px] font-bold">Mene Coin</div>
                     <div className="text-[7px] text-gray-300">Profit per hour</div>
                     <div className="text-yellow-400 text-[8px] flex gap-[2px]"><img className="w-[11px] h-[11px]" src={DropCoin} alt="" /> 375</div>
      
                   </div>
      
                     </div>
                   </div>
      
                  <div className="flex items-center gap-[12px] text-base h-[24px]">
                    <div className="text-sm px-3 py-1 border-r-1 border-[#FFFFFF33] ">lvl 1</div>
                    <div className="font-semibold text-[12px] flex"><img className="h-[15px] w-[15px]" src={DropCoin} alt="" /> 2.3K</div>
                  </div>
                </div>
      
                <div className="bg-zinc-800 text-white rounded-2xl p-4 w-full max-w-md flex flex-col h-[109px] gap-4 shadow-lg">
                   <div className="flex items-center gap-4 border-[#FFFFFF33] border-b h-[54px]">
                      <img className="w-[32px] h-[15px]" src={x10} alt="" />
                    <div>
      
                   <div className="w-[118px] h-[42px] ">
                      
                     <div className="text-[9px] font-bold">Margin trading x10</div>
                     <div className="text-[7px] text-gray-300">Profit per hour</div>
                     <div className="text-yellow-400 text-[8px] flex gap-[2px]"><img className="w-[11px] h-[11px]" src={DropCoin} alt="" /> 997</div>
      
                   </div>
      
                     </div>
                   </div>
      
                  <div className="flex items-center gap-[12px] text-base h-[24px]">
                    <div className="text-sm px-3 py-1 border-r-1 border-[#FFFFFF33] ">lvl 1</div>
                    <div className="font-semibold text-[12px] flex"><img className="h-[15px] w-[15px]" src={DropCoin} alt="" /> 11.2K</div>
                  </div>
                </div>
      
                </div>
      
                </div>  
    </>
  );
};

export default HmasterDrop;
