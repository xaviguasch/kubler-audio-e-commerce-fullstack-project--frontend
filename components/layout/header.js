import React, { useState } from 'react'

import Link from 'next/link'
import Navbar from '../ui/navbar'

import classes from './header.module.css'

import IconCartSVG from '../../public/assets/icons/icon-cart.svg'

function Header() {
  return (
    <header className={`${classes.Header} h-padding`}>
      <Navbar position='nav_header' />

      <h2 className='logo'>KublerAudio</h2>

      <Link href='/'>
        <a>
          <IconCartSVG />
        </a>
      </Link>
    </header>
  )
}

export default Header
