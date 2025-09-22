import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useEffect,useState } from 'react';

const Navbar = () => {


    const[sticky,setSticky]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 500 ? setSticky(true):setSticky(false);
        })
    },[])
  return (
    <nav className={`container ${sticky ? 'dark-nav':""}`}>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Program</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="">Campus</a></li>
            <li><a href="">Testimonials</a></li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
