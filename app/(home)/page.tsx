import React from 'react'
import MiniBanner from './components/mini-banner/mini-banner'
import ViewLife from './components/view-live/view-life'

export default function Page(){
  return (
    <div className='container'>
      <MiniBanner/>
      <ViewLife/>
    </div>
  )
}