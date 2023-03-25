"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import live from '../../../../public/home/view-life.jpg'
import './view-life.css'
import axios from 'axios';

const ViewLife = () => {

    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/',
        headers: {
          'X-RapidAPI-Key': 'fd35567da4msh9b4ebc9bbdc746cp1a5647jsna05913a2dd7e',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });

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
                <div className="list-leagues">
                    <p className='title-en-vivo'>Ligas</p>
                    <Link href="/">Liga 1</Link>
                    <Link href="/">Liga 1</Link>
                    <Link href="/">Liga 1</Link>
                    <Link href="/">Liga 1</Link>
                    <Link href="/">Liga 1</Link>
                </div>
            </div>
        </div>
    )
}

export default ViewLife