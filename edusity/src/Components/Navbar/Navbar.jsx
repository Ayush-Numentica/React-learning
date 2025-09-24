import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { useEffect, useState } from 'react';

const Navbar = () => {


    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 500 ? setSticky(true) : setSticky(false);
        })
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }



    return (
        <nav className={`container ${sticky ? 'dark-nav' : ""}`}>
            <img src={logo} alt="" className='logo' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><a href="#hero">About</a></li>
                <li><a href="#program">Program</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#campus">Campus</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact"><button className='btn'>Contact Us</button></a></li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
        </nav>
    )
}

export default Navbar
