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
                    <div className='ml-[26%] h-[calc(100vh-120px)] overflow-y-auto mt-[120px] pr-4'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout