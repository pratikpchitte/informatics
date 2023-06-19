import React from 'react'
import Navbar from './Navbar'
import BackgroundImage from '../img/background.svg';
import SecT from './SecT';

export default function Home() {
  return (
<div style={{ background: `url(${BackgroundImage}) no-repeat center/cover` }}>
        <Navbar/>
        <SecT/>
    </div>
  )
}
