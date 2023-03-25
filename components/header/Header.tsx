"use client"
import Image from 'next/image'
import React from 'react'
import Navbar from './components/Navbar'
import logo from '../../public/header/logo.jpg'
import './header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <Image src={logo} alt="Logo Live Soccer" className='header-logo'/>
      <Navbar/>
    </div>
  )
}

export default Header