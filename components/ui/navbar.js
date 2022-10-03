import React, { useState } from 'react'

import classes from './navbar.module.css'

import Link from 'next/link'

import HamburgerSVG from '../../public/assets/icons/icon-hamburger.svg'

function Navbar({ position }) {
  return (
    <nav className={classes.Navbar}>
      <div className='hamburger'>
        <HamburgerSVG />
      </div>
      <ul className={classes.hidden}>
        <li>
          <Link href='/home'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/headphones'>
            <a>Headphones</a>
          </Link>
        </li>
        <li>
          <Link href='/speakers'>
            <a>Speakers</a>
          </Link>
        </li>
        <li>
          <Link href='/earphones'>
            <a>Headphones</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
