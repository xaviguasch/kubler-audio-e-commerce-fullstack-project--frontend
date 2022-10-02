import React, { useState } from 'react'

import classes from './navbar.module.css'

import Link from 'next/link'

function Navbar({ position, hamburgerIcon }) {
  return (
    <nav className={classes.Navbar}>
      <div className='hamburger'>
        <img src={hamburgerIcon} alt='' />
      </div>
      <ul className={classes.hidden}>
        <li>
          <Link href='/home'>home</Link>
        </li>
        <li>
          <Link href='/headphones'>headphones</Link>
        </li>
        <li>
          <Link href='/speakers'>speakers</Link>
        </li>
        <li>
          <Link href='/earphones'>earphones</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
