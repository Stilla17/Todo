import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { MdWork } from "react-icons/md";

const SignInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-[36px] rounded-lg space-y-4">
    <div className="flex items-center border-b w-[375px] border-black py-2">
      <FaUser className="text-black mr-3" />
      <input
        type="text"
        placeholder="Your name"
        className="bg-transparent outline-none flex-1 text-black placeholder-black"
        required
      />
    </div>
    
    <div className="flex items-center border-b w-[375px] border-black py-2">
    <MdEmail className="text-black mr-3"/>
      <input
        type="email"
        placeholder="Your Emile"
        className="bg-transparent outline-none flex-1 text-black placeholder-black"
        required
      />
    </div>

    <div className="flex items-center w-[375px] border-b border-black py-2 relative">
      <FaLock className="text-black mr-3" />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="bg-transparent outline-none flex-1 text-black placeholder-black"
        required
      />
      <button
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-2 text-black"
      >
        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
      </button>
    </div>

    <div className="flex items-center border-b w-[375px] border-black py-2">
    <MdWork className="text-black mr-3"/>
      <input
        type="email"
        placeholder="Work name"
        className="bg-transparent outline-none flex-1 text-black placeholder-black"
        required
      />
    </div>
  </div>
  );
};

export default SignInput;
