import React, { useState } from 'react'

import Link from 'next/link'
import Navbar from '../ui/navbar'

import classes from './header.module.css'

import IconCartSVG from '../../public/assets/icons/icon-cart.svg'

function Header({ cartModalHandler }) {
  return (
    <header className={`${classes.Header} h-padding`}>
      <Navbar position='nav_header' />

      <h2 className='logo'>KublerAudio</h2>

      <IconCartSVG className={classes.icon} onClick={cartModalHandler} />
    </header>
  )
}

export default Header
