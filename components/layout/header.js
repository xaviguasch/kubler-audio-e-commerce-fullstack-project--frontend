import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import Navbar from '../ui/navbar'

import useDeviceSize from '../../hooks/useDeviceSize'

import classes from './header.module.css'

import IconCartSVG from '../../public/assets/icons/icon-cart.svg'

function Header({ modalCartHandler }) {
  // Uses custom hook to get the width, because window isn't available
  // on load with Next.js
  const [width, height] = useDeviceSize()

  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(width)

  const handleNavOpen = () => {
    setMobileNavOpen((prev) => !prev)
  }

  // closes the navigation modal on mobile if you resize the window
  // while the modal still open
  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    if (windowWidth >= 900) {
      setMobileNavOpen(false)
    }

    // Cleanup function:
    return () => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
    }
  }, [windowWidth])

  return (
    <header className={`${classes.Header} h-padding`}>
      <Navbar
        position='nav_header'
        onHandleNavOpen={handleNavOpen}
        mobileNavOpen={mobileNavOpen}
      />

      <h2 className={classes.logo}>KublerAudio</h2>

      <IconCartSVG className={classes.icon} onClick={modalCartHandler} />
    </header>
  )
}

export default Header
