import React from 'react'

import Link from 'next/link'

import classes from './icons-group.module.css'

import { ReactComponent as FacebookIcon } from '../../public/assets/shared/desktop/icon-facebook.svg'

function IconsGroup() {
  return (
    <ul className={classes.IconsGroup}>
      <li>
        <Link href='/'>
          <img src={'./assets/shared/desktop/icon-facebook.svg'} alt='' />
        </Link>
        <Link href='/'>
          <img src={'./assets/shared/desktop/icon-twitter.svg'} alt='' />
        </Link>
        <Link href='/'>
          <img src={'./assets/shared/desktop/icon-instagram.svg'} alt='' />
        </Link>
      </li>
    </ul>
  )
}

export default IconsGroup
