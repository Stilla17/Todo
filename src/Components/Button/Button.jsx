import React from 'react'

const Button = ({ text, className, onClick }) => {
    return (
        <>
            <button onClick={onClick} className={`${className} text-white px-4 py-2 rounded-md`}>{text}</button>
        </>
    )
}

export default Button