"use client"
import Image from 'next/image'
import React from 'react'
import Navbar from './components/Navbar'
import logoWhite from '../../public/header/logo-white.png'
import { useRouter } from 'next/navigation'
import './header.css'

const Header = () => {
  const router = useRouter();

  return (
    <div className='header-container'>
      <div className="header-sub-container">
        <Image src={logoWhite} alt="Logo Live Soccer" className='header-logo' onClick={() => router.push('/')} />
        <Navbar />
      </div>
    </div>
  )
}

export default Header