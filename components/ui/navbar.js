import React, { useState } from 'react'

import classes from './navbar.module.css'

import Link from 'next/link'

import HamburgerSVG from '../../public/assets/icons/icon-hamburger.svg'

function Navbar({ position, onHandleNavOpen, mobileNavOpen }) {
  const handleNavBtnClick = () => {
    onHandleNavOpen(true)
  }

  // Close the open nav modal on mobile after clicking a link
  const handleNavOpenClick = () => {
    onHandleNavOpen(false)
  }

  return (
    <nav className={`${classes.Navbar} ${classes[position]} `}>
      <div className={classes.hamburgerContainer} onClick={handleNavBtnClick}>
        <HamburgerSVG />
      </div>

      <ul
        className={`${classes.linkList} ${
          mobileNavOpen ? classes.modalLinkList : null
        }  `}
        onClick={mobileNavOpen ? handleNavOpenClick : null}
      >
        <li>
          <Link href='/'>
            <a className='nav-link'>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/products/headphones'>
            <a className='nav-link'>Headphones</a>
          </Link>
        </li>
        <li>
          <Link href='/products/speakers'>
            <a className='nav-link'>Speakers</a>
          </Link>
        </li>
        <li>
          <Link href='/products/earphones'>
            <a className='nav-link'>Earphones</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
