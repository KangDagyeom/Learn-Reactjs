import React from 'react'
import { logo } from '../utils/utils';
const Navbar = () => {
    return (
        <div>
            <header class="text-white py-1.5 px-1.5 flex items-center justify-between" style={{ backgroundColor: '#006341' }}></header>
            <nav className='flex w-full screen-max-width'>
                <img src={logo} alt="" />
            </nav>
        </div>


    )
}

export default Navbar
