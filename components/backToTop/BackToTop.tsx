"use client"
import React, { useState, useEffect } from 'react'
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
        <button className='back-to-top' onClick={() => { handlerClickBackToTop() }}>Top</button>
    )
}

export default BackToTop