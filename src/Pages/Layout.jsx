import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router'
import Nav from '../Components/Nav/Nav'

const Layout = () => {
    return (
        <>
            <div className='flex'>
                <Nav />
                <div>
                    <Header />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout