import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router'
import Nav from '../Components/Nav/Nav'

const Layout = () => {
    return (
        <>
            <div className='flex'>
                <Nav />
                <div className='flex w-full flex-col '>
                    <Header />
                    <div className='ml-[26%] mt-[120px] bg-amber-200'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout