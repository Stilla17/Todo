import { useState } from "react";
import "./App.css";
import Buttons from "./companentos/buttons/buttons";
import HmasterCoin from "./assets/img/Group.png";
import GroupBGicoin from "./assets/img/GroupBGicoin.png";
import Booost from './assets/img/Vector.png';
import dude from './assets/img/dude.png';
import Coins from './assets/img/Coins.png';
import Mine from './assets/img/MIne.png';
import hamster from './assets/img/hamster.png';
import Binanse from './assets/img/Union.png';


function App() {
  const [count, setCount] = useState(0);
  const [Boost, setBosst] = useState(6500);

  return (
    <>
      <div className="w-[428px] h-[926px] bg-[#2C2F35] rounded-[50px]">
        <div className="h-[60px] w-[100%]  flex justify-center items-end mb-[56px]">
          <h1 className="text-center text-white text-[16px] font-bold">Hamster Kombat</h1>
        </div>
        <div className="flex gap-[9px] justify-center items-center">
          <Buttons
            text={"Earn per tap"}
            counter={"-"}
            Textclass={"text-[#F79841] w-[65px]"}
          />
          <Buttons
            text={"Coins to level up"}
            counter={"-"}
            ImgClass={"hidden"}
            Textclass={"text-[#6F72E2]"}
          />
          <Buttons
            text={"Profit per hour"}
            counter={"-"}
            Textclass={"text-[#84CB69]"}
          />
        </div>

        {/* center */}

        <div className="w-[100%] h-[529px] flex flex-wrap justify-center items-center">
          <h1 className="flex items-center justify-center gap-[8px] text-white text-[40px] font-bold w-[428px]">
            <img src={GroupBGicoin} alt="" />
            {count}
          </h1>

          <div onClick={() => setCount((count) => count + 1)}>
            <img
              onClick={() => setBosst((Boost) => Boost - 2)}
              src={HmasterCoin}
              alt=""
            />
          </div>
        </div>

      {/* foter */}

        <div className="border-red-500 flex justify-between items-center mb-[22px] px-[10px]">
          <div className="flex gap-[9px]">
            <img src={Booost} alt="" />
            <h2 className="font-bold text-white">6500/{Boost}</h2>
          </div>
          <h2 className="text-white font-bold text-[14px]">Boost</h2>
        </div>
      
        <div className="flex gap-[10px] rounded-[8px] justify-center items-center w-[368px] h-[60px] mx-auto bg-[#32363CB2]">
          <div className="w-[65px] h-[50px] flex flex-wrap items-center justify-center text-center rounded-[8px] text-white hover:bg-[#212429]">
            <div className="w-[50px] flex justify-center">
            <img src={Binanse} alt="" />
            </div>
            <h2 className="text-[9px] font-bold">Exchange</h2>
          </div>
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
    </>
  );
}

export default App;
