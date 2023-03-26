"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import iconTop from '../../public/backToTop/back-to-top.svg'
import './back-to-top.css'

const BackToTop = () => {
    const [backTop, setBackTop] = useState<boolean>(false);

    useEffect(() => {
        if (backTop) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            const timer = setTimeout(() => {
                setBackTop(false)
            }, 0)
            return () => clearTimeout(timer)
        }
    }, [backTop])

    const handlerClickBackToTop = () => {
        setBackTop(true)
    }

    return (
        <button className='back-to-top' onClick={() => { handlerClickBackToTop() }}>
            <Image src={iconTop} alt="Icon top" className='icon-top'/>
        </button>
    )
}

export default BackToTop