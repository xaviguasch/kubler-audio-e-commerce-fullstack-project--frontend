import React from 'react'

import Link from 'next/link'

import classes from './icons-group.module.css'

function IconsGroup({ icons }) {
  return (
    <ul className={classes.IconsGroup}>
      <li>
        <Link href='/'>
          <img src={icons.facebook} alt='' />
        </Link>
        <Link href='/'>
          <img src={icons.twitter} alt='' />
        </Link>
        <Link href='/'>
          <img src={icons.instagram} alt='' />
        </Link>
      </li>
    </ul>
  )
}

export default IconsGroup
