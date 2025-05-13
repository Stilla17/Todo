import React, { useEffect } from 'react'
import Input from '../Input/input'
import { FcGoogle } from "react-icons/fc";
import WalkingBro from './../../assets/Img/Walking around-bro 1.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAuth } from '../AuthContext/AuthProvider';
import { signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";

const SignIn = () => {
  const navigate = useNavigate();  
  const { login } = useAuth();

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    setPersistence(auth, browserLocalPersistence)  // Ensure session persists
      .then(() => signInWithPopup(auth, provider))
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        login(user)
        console.log("User:", user);
        login(user);  // Store user state in context or localStorage
        navigate('/');
      })
      .catch((error) => {
        console.error("Error during sign in:", error);
      });
  };

  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center'>
      <div className=' bg-[#C6F4C2] flex rounded-[40px] py-[20px] px-[103px]'>
        <div className='flex w-[1025px] justify-between'>
          <img src={WalkingBro} alt="" />
          <div className='w-[375px] font-[Roboto]'>
            <h2 className='text-[64px] font-bold mb-[40px] text-center'>Sign in</h2>
            <Input />
            <button onClick={handleGoogleSignIn} className='bg-[#00FF445C] w-[375px] mx-auto rounded-[9px] px-[26px] py-[16px] flex items-center gap-[35px] text-[16px] mb-[71px]'>
              <FcGoogle className='w-[26px] h-[26px]' /> Sign in with Google
            </button>
            <button className='bg-[#92E3A9] rounded-[10px] px-[39px] py-[20px] text-[26px] '>Login In</button>
            <div className='w-[100%] flex justify-end'>
              <h2><Link to='/signup'>Create an account</Link></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default SignIn;
