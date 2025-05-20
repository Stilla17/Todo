import React from 'react'

const Loader = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-white">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-500 border-t-transparent"></div>
        </div>
    )
}

export default Loader
