import React, { useState } from 'react'

import classes from './navbar.module.css'

import Link from 'next/link'

import HamburgerSVG from '../../public/assets/icons/icon-hamburger.svg'

function Navbar({ position }) {
  return (
    <nav className={`${classes.Navbar} ${classes[position]} `}>
      <div className={classes.hamburgerContainer}>
        <HamburgerSVG />
      </div>

      <ul className={classes.linkList}>
        <li>
          <Link href='/home'>
            <a className='nav-link'>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/headphones'>
            <a className='nav-link'>Headphones</a>
          </Link>
        </li>
        <li>
          <Link href='/speakers'>
            <a className='nav-link'>Speakers</a>
          </Link>
        </li>
        <li>
          <Link href='/earphones'>
            <a className='nav-link'>Headphones</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
