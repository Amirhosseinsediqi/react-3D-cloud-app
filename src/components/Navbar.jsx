import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { BiHome } from 'react-icons/bi';

import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
} from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo)
    };

    return (
        <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
            <div>
                <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BEACHES.</h1>
            </div>
            <ul className='hidden md:flex'>
                <li className='li-hover'> <i class="fa-solid fa-house"></i> Home</li>
                <li className='li-hover mx-5'> <i class="fa-solid fa-question"></i> About</li>
                <li className='li-hover mx-5'> <i class="fa-solid fa-phone"></i> Support</li>
                <li className='li-hover mx-5'> <i class="fa-solid fa-sitemap"></i> Platforms</li>
                <li className='li-hover'> <i class="fa-solid fa-dollar-sign"></i> Pricing</li>
            </ul>
            <div className='hidden md:flex'>
                <BiSearch className='mr-5' size={20} />
                <BsPerson size={20} />
            </div>

            {/* Hamburger */}
            <div onClick={handleNav} className='md:hidden z-10'>
                {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
            </div>

            {/* Mobile menu dropdown */}
            <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
                <ul>
                    <h1>BEACHES.</h1>
                    <li className='border-b'>Home</li>
                    <li className='border-b'>Destinations</li>
                    <li className='border-b'>Travel</li>
                    <li className='border-b'>View</li>
                    <li className='border-b'>Book</li>
                    <div className='flex flex-col'>
                        <button className='my-6'>Search</button>
                        <button>Account</button>
                    </div>
                    <div className='flex justify-between my-6'>
                        <FaFacebook className='icon' />
                        <FaTwitter className='icon' />
                        <FaYoutube className='icon' />
                        <FaPinterest className='icon' />
                        <FaInstagram className='icon' />
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;