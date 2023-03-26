"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import live from '../../../../public/home/view-life.jpg'
import './view-life.css'

const ViewLife = () => {
    const [matchs, setMach] = useState([]);

    useEffect(() => {
        fetch('https://v3.football.api-sports.io/leagues/', {
            method: "GET",
            headers: {
                "x-rapidapi-key": "17410b01e7c00ad8b34a7fbe278aacc2",
                "x-rapidapi-host": "v3.football.api-sports.io"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setMach(data.response)
            })
            .catch((error) => console.log("error", error))
    }, [])


    console.log("MATCH", matchs)

    return (
        <div className='container-view-life'>
            <div className="live-home">
                <Image src={live} alt="Live View Home" />
            </div>
            <div className="categories">
                <div className="list-live">
                    <p className='title-en-vivo'>En <span>vivo</span> ahora</p>
                    <Link href="/">Live 1</Link>
                    <Link href="/">Live 1</Link>
                    <Link href="/">Live 1</Link>
                    <Link href="/">Live 1</Link>
                    <Link href="/">Live 1</Link>
                </div>
                <div className="container-list-leagues">
                    <p className='title-en-vivo'>Ligas</p>
                    <ul className='list-leagues'>
                        {
                            matchs.map((match: any, i) => (
                                <li key={i} className="name-league">{match.league.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ViewLife