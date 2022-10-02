import React, { useState } from 'react'

import Link from 'next/link'
import Navbar from '../ui/navbar'

import classes from './header.module.css'

function Header({ icons }) {
  return (
    <header className={`${classes.Header} h-padding`}>
      <Navbar position='nav_header' hamburgerIcon={icons.hamburger} />

      <h2 className='logo'>KublerAudio</h2>

      <Link href='/'>
        <img src={icons.iconCart} alt='' />
      </Link>
    </header>
  )
}

export default Header
