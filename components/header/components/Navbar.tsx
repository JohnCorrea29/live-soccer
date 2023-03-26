"use client"
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='container-nav-bar'>
        <nav className='nav-bar'>
            <Link href="/analyts" className='nav-bar-link'>Analisis</Link>
            <Link href="/" className='nav-bar-link'>Predicciones</Link>
            <Link href="/" className='nav-bar-link'>Competiciones</Link>
        </nav>
    </div>
  )
}

export default Navbar