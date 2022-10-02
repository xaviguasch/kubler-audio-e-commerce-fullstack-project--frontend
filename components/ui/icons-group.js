import React from 'react'

import Link from 'next/link'

import classes from './icons-group.module.css'

function IconsGroup({ socialIcons }) {
  return (
    <ul className={classes.IconsGroup}>
      <li>
        <Link href='/'>
          <img src={socialIcons.facebook} alt='' />
        </Link>
        <Link href='/'>
          <img src={socialIcons.instagram} alt='' />
        </Link>
        <Link href='/'>
          <img src={socialIcons.twitter} alt='' />
        </Link>
      </li>
    </ul>
  )
}

export default IconsGroup
