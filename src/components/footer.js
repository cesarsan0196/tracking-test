import React from 'react'

function Footer() {
    return (
        <>
        <p className="text-gray-600"> © {new Date().getFullYear()} Made by @casf&fredrare</p>
        <div className="flex-1"></div>
        <button
        className="shadow-md ml-auto border rounded-full ml-2 w-14 h-14 text-center leading-none text-green-200 bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
        <i className="fas fa-question fill-current"></i>
        </button>
            
        </>
    )
}

export default Footer
