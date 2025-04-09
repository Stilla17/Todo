import { useEffect, useState } from "react";
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Buttons from './../buttons/Buttons.jsx';
import HmasterCoin from './../../assets/img/Group.png';
import GroupBGicoin from './../../assets/img/GroupBGicoin.png';
import Booost from './../../assets/img/Vector.png';
import dude from './../../assets/img/dude.png';
import Coins from './../../assets/img/Coins.png';
import Mine from './../../assets/img/MIne.png';
import hamster from './../../assets/img/hamster.png';
import Binanse from './../../assets/img/Union.png';
import DropCoin from './DropCoin.png';
import Exclude from './../../assets/img/Exclude.png';
import x10 from './../../assets/img/x10.png';
import Meme from './../../assets/img/Meme.png';

const Combat = () => {
    const [state, setSate] = useState({
       count: 20000, 
       Boost: 6500,  
       isLvlOneActive: false, 
       isLvlTwoActive: false, 
       isLvlThreeActive: false, 
       EranTap: 1,
       OneActive: false,
       TwoActive: false,
       threeActive: false, 
       LevelOne: 120,
       OnePrise: 192,
      });
  
      // console.log(Boost);

      const notifySuccess = () => {
        toast.success('Operatsiya bajarildi !', {
          position: "top-center",
          autoClose: 3000, 
          hideProgressBar: true, 
          closeOnClick: true,
          pauseOnHover: true, 
        });
      };

      const notifyError = () => {
        toast.error('Operatsiy bajarila olmaydi !', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      };

      const handleLvlOne = () => {
        setSate(prev => {
         if (prev.count >= 1000){
           notifySuccess()
           return{
            ...prev,
            count: prev.count - 1000,  
            isLvlOneActive: true
           }
         }else{
           notifyError()
           return prev;
         }
        })
       }

       const handleLvltWO = () => {
        setSate(prev => {
         if (prev.count >= 2500){
           notifySuccess()
           return{
            ...prev,
            count: prev.count - 2500,  
            isLvlTwoActive: true
           }
         }else{
           notifyError()
           return prev;
         }
        })
       }
 
       const handleLvlThree  = () => {
        setSate(prev => {
         if (prev.count >= 6000){
           notifySuccess()
           return{
            ...prev,
            count: prev.count - 6000,  
            isLvlThreeActive: true
           }
         }else{
           notifyError()
           return prev;
         }
        })
       }
       
       const handleHamster = () => {
         setSate(prev => {
           if (prev.Boost < 0){
             return prev
            }
            
            let counterr = 1
            
            if (prev.isLvlOneActive){
              counterr = 2
            }else if(prev.isLvlTwoActive){
              counterr = 3
            }else if(prev.isLvlThreeActive){
              counterr = 4
            }
            
            return {
              ...prev,
              count: prev.count + counterr,
              Boost: prev.Boost - 1
            }
          })
        }
        const getEarnTap = () => {
         if (state.isLvlThreeActive) return '+4';
         if (state.isLvlTwoActive) return '+3';
         if (state.isLvlOneActive) return '+2';
         return '+1';
       };
      
      useEffect(() => {
       const inturval = setInterval(() => {
        setSate(prev => {
          if (prev.Boost < 6500) {
            return {...prev ,
             Boost: prev.Boost + 1
            }
          }
            return prev
        })
       }, 3000)
  
       return () =>  clearInterval(inturval)
      }, [])


      const ProfitHour =  () => {
       setSate(prev => {
        if (prev.count >= prev.OnePrise) {
          notifySuccess()
          return{
           ...prev,
           count: prev.count - prev.OnePrise, 
           LevelOne: prev.LevelOne * 2,
           OnePrise: prev.OnePrise * 2 
          }
        }else{
          notifyError()
          return prev;
        }
       })      
      }
      
      useEffect(() => {
        const interval  = setInterval(() => {
          setSate(prev => ({
            ...prev,
            count: prev.count + prev.LevelOne
          }))
        }, 3600000);
      
        return () => clearInterval(interval)
      }, [])




      // const bomm = () => {
      //   let utterance = new SpeechSynthesisUtterance("bombardino crokadilo chun chun chun chung sabiro");
      //   speechSynthesis.speak(utterance);
      // }

  
      const maxBoost = 6500
      const boostPercent = (state.Boost / maxBoost) * 100
  
    return (
      <>
      <ToastContainer />
        <div className="w-[428px] h-[926px] bg-[#2C2F35] rounded-[50px]">
          <div className="h-[60px] w-[100%]  flex justify-center items-end mb-[56px]">
            <h1 className="text-center text-white text-[16px] font-bold">Hamster Kombat</h1>
          </div>
          <div className="flex gap-[9px] justify-center items-center">
            <details>
              <summary className="list-none [&::-webkit-details-marker]:hidden">
            <Buttons
              text={"Earn per tap"}
              counter={getEarnTap()}
              Textclass={"text-[#F79841] w-[65px]"}
            />
              </summary>

              <div className="w-[240px] h-[223px] bg-[#2C2F35] shadow-[4px_4px_10px_5px_#00000040] rounded-[20px] flex flex-wrap gap-[14px] absolute mt-[19px] pl-[32px] pr-[22px] py-[42px]">
                <div className="flex justify-end">
                  <RxCross2 className="text-white font-bold text-[25px]"/>
                </div>

                <div onClick={handleLvlOne} className="bg-[#32363C] rounded-[15px] text-white text-[9px] flex items-center justify-between w-[190px] h-[27px] px-[8px]">
                  <div className="flex gap-[12px] items-center">
                    <div className="w-[28px] border-r-[0.50px] border-[#FFFFFF33] ">lvl 1</div>
                    <h2 className="flex gap-[3px] text-[11px]">+2 <img className=" h-[15px] w-[15px]" src={DropCoin} alt="" /></h2>
                  </div>
                  <h2 className="text-[11px] flex">-1000 <img className="h-[15px] w-[15px]" src={DropCoin} alt="" /></h2>
                </div>

                <div onClick={handleLvltWO} className="bg-[#32363C] rounded-[15px] text-white text-[9px] flex items-center justify-between w-[190px] h-[27px] px-[8px]">
                  <div className="flex gap-[12px] items-center">
                    <div className="w-[28px] border-r-[0.50px] border-[#FFFFFF33] ">lvl 2</div>
                    <h2 className="flex gap-[3px] text-[11px]">+3 <img className=" h-[15px] w-[15px]" src={DropCoin} alt="" /></h2>
                  </div>
                  <h2 className="text-[11px] flex">-2500 <img className="h-[15px] w-[15px]" src={DropCoin} alt="" /></h2>
                </div>

                <div onClick={handleLvlThree} className="bg-[#32363C] rounded-[15px] text-white text-[9px] flex items-center justify-between w-[190px] h-[27px] px-[8px]">
                  <div className="flex gap-[12px] items-center">
                    <div className="w-[28px] border-r-[0.50px] border-[#FFFFFF33] ">lvl 3</div>
                    <h2 className="flex gap-[3px] text-[11px]">+4 <img className=" h-[15px] w-[15px]" src={DropCoin} alt="" /></h2>
                  </div>
                  <h2 className="text-[11px] flex">-6000 <img className="h-[15px] w-[15px]" src={DropCoin} alt="" /></h2>
                </div>

              </div>

            </details>
            <Buttons
              text={"Coins to level up"}
              counter={"-"}
              ImgClass={"hidden"}
              Textclass={"text-[#6F72E2]"}
            />
            <Buttons
              text={"Profit per hour"}
              counter={state.LevelOne}
              Textclass={"text-[#84CB69]"}
            />
          </div>
  
          {/* center */}
  
          <div className="w-[100%] h-[529px] flex flex-wrap justify-center items-center">
            <h1 className="flex items-center justify-center gap-[8px] text-white text-[40px] font-bold w-[428px]">
              <img src={GroupBGicoin} alt="" />
              {state.count}
            </h1>
  
              <img
              onClick={handleHamster}
                src={HmasterCoin}
                alt=""
              />
          </div>
  
        {/* foter */}
  
        <div className="mb-[22px] px-[5px]">
        <div className="border-red-500 flex justify-between items-center mb-[22px] px-[10px]">
            <div className="flex gap-[9px]">
              <img src={Booost} alt="" />
              <h2 className="font-bold text-white">6500/{state.Boost}</h2>
            </div>
            <h2 className="text-white font-bold text-[14px]">Boost</h2>
          </div>
          <div style={{width: `${boostPercent}%`, transition: 1} } className={`h-[10px] rounded-md bg-orange-500  transition-all duration-[1000ms] ease-in-out bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500`}>
  
          </div>
        </div>
        
          <div className="flex gap-[10px] rounded-[8px] justify-center items-center w-[368px] h-[60px] mx-auto bg-[#32363CB2]">
        <details>
          <summary className="list-none [&::-webkit-details-marker]:hidden">
          <div className="w-[65px] h-[50px] flex flex-wrap items-center justify-center text-center rounded-[8px] text-white hover:bg-[#212429]">
              <div className="w-[50px] flex justify-center">
              <img src={Binanse} alt="" />
              </div>
              <h2 className="text-[9px] font-bold">Exchange</h2>
            </div>
          </summary>

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
        </details>
            <div className="w-[65px] h-[50px] flex flex-wrap items-center justify-center text-center rounded-[8px] text-white hover:bg-[#212429]">
              <div className="w-[50px] flex justify-center">
              <img src={Mine} alt="" />
              </div>
              <h2 className="text-[9px] font-bold">Mine</h2>
            </div>
            <div className="w-[65px] h-[50px] flex flex-wrap items-center justify-center text-center rounded-[8px] text-white hover:bg-[#212429]">
              <div className="w-[50px] flex justify-center">
              <img src={dude} alt="" />
              </div>
              <h2 className="text-[9px] font-bold">Friends</h2>
            </div>
            <div className="w-[65px] h-[50px] flex flex-wrap items-center justify-center text-center rounded-[8px] text-white hover:bg-[#212429]">
              <div className="w-[50px] flex justify-center ">
              <img src={Coins} alt="" />
              </div>
              <h2 className="text-[9px] font-bold">Earn</h2>
            </div>
            <div className="w-[65px] h-[50px] flex flex-wrap items-center justify-center text-center rounded-[8px] text-white hover:bg-[#212429]">
              <div className="w-[50px] flex justify-center">
              <img src={hamster} alt="" />
              </div>
              <h2 className="text-[9px] font-bold">Airdrop</h2>
            </div>
          </div>
  
        </div>
        {/* <img onClick={bomm} className="rounded-[50px]" src="https://i1.sndcdn.com/artworks-4fPGk176hMQgdghK-zFMj5Q-t500x500.jpg" alt="" /> */}
      </>
    );
}

export default Combat
