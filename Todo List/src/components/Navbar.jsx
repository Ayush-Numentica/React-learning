import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between bg-slate-900 text-white py-3'>
            <div className="logo">
                <span className='font-bold text-xl mx-9'>iTask</span>
            </div>
            <ul className="flex gap-8 mx-9">
                <li className='cursor-pointer rounded-lg transform transition duration-300 transition-all hover:scale-110 hover:font-bold' >Home</li>
                <li className='cursor-pointer rounded-lg transform transition duration-300 transition-all hover:scale-110 hover:font-bold font-medium' >Your Tasks</li>
            </ul>

        </nav>
    )
}

export default Navbar
