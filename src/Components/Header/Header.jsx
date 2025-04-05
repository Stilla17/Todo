import React from 'react'

import ThemeToggle from '../ThemeToogle'

const Header = () => {
  return (
    <header className='p-7 fixed top-0 right-0 w-[75%]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-4xl'>Good morning, <span className='text-[#D9D9D9]'>Melissa</span></h1>
        <div className='flex items-center gap-12'>
          <input type="text"
            placeholder='Search'
            className='px-[20px] rounded py-[10px] bg-[#DEF7E5]' />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header