import React, { useState, useEffect, useRef } from 'react'
import { useAuth } from '../AuthContext/AuthProvider'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { FiBell, FiLogOut } from 'react-icons/fi'
import './../../i18.js';

const Header = () => {
  const { user, logOut } = useAuth()
  const { i18n, t } = useTranslation()
  const navigate = useNavigate()

  const [isBellActive, setIsBellActive] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  const toggleBell = () => {
    setIsBellActive(prev => !prev)
  }

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev)
  }

  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/signin')
    } catch (error) {
      console.error("Logout xatoligi:", error)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header
      className={`p-5 fixed top-0 right-0 w-[75%] z-50 shadow transition-colors duration-300 
        ${user ? 'dark:bg-gray-900' : 'bg-red-100 dark:bg-red-900'}`}>
      <div className='flex items-center justify-between flex-wrap gap-4'>
        <h1 className='text-2xl md:text-4xl font-semibold'>
          {t('Good morning')},{' '}
          <span className='text-gray-400'>
            {user?.displayName?.split(" ")[0] || t("Guest")}
          </span>
        </h1>

        <div className='flex items-center gap-4'>
          <FiBell
            size={24}
            onClick={toggleBell}
            className={`cursor-pointer transition-colors duration-300 
              ${isBellActive ? 'text-yellow-400 dark:text-yellow-300' : 'text-gray-700 dark:text-gray-300'}`}
          />

          <select
            onChange={changeLanguage}
            value={i18n.language}
            className='border p-1 rounded dark:bg-gray-700 dark:text-white'
          >
            <option value="en">English</option>
            <option value="uz">O‘zbek</option>
            <option value="ru">Русский</option>
          </select>

          <div className="relative" ref={dropdownRef}>
            <img
              src={user?.photoURL || '/default-avatar.png'}
              alt="profile"
              className='w-10 h-10 rounded-full object-cover border cursor-pointer'
              onClick={toggleDropdown}
            />

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-white dark:bg-gray-800 rounded-md shadow-lg py-3 z-50">
                <div className="flex items-center gap-3 px-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                  <img
                    src={user?.photoURL || '/default-avatar.png'}
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {user?.displayName || t("Guest")}
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-900 text-sm mt-2"
                >
                  <FiLogOut size={16} /> {t('Log Out')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
