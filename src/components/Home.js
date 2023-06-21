import React from 'react'
import Navbar from './Navbar'
import BackgroundImage from '../img/background.svg';
import SecT from './SecT';
import Box from './Box';

export default function Home() {
  return (
<div style={{ background: `url(${BackgroundImage}) no-repeat center/cover` }}>
        <Box/>
        <Navbar/>
        <hr style={{ border: '1px solid rgba(255, 255, 255, 0.7)' }} />
        <SecT/>
    </div>
  )
}
