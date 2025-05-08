import React from 'react'
import ThemeToggle from '../ThemeToogle'
import { useAuth } from '../AuthContext/AuthProvider'

const Header = () => {

  const { user } = useAuth()

  return (
    <header className='p-7 fixed top-0 right-0 w-[75%]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-4xl'>Good morning, <span className='text-[#D9D9D9]'>{user?.displayName?.split(" ")[0]}</span></h1>
      </div>
      <hr className='mt-10 opacity-5' />
    </header>
  )
}

export default Header