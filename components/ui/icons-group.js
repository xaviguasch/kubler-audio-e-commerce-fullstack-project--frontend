import React from 'react'

import Link from 'next/link'

import classes from './icons-group.module.css'

import FacebookSVG from '../../public/assets/icons/icon-facebook.svg'
import TwitterSVG from '../../public/assets/icons/icon-twitter.svg'
import InstagramSVG from '../../public/assets/icons/icon-instagram.svg'

function IconsGroup() {
  return (
    <ul className={classes.IconsGroup}>
      <li>
        <Link href='/'>
          <a>
            <FacebookSVG />
          </a>
        </Link>
      </li>

      <li>
        <Link href='/'>
          <a>
            <TwitterSVG />
          </a>
        </Link>
      </li>

      <li>
        <Link href='/'>
          <a>
            <InstagramSVG />
          </a>
        </Link>
      </li>
    </ul>
  )
}

export default IconsGroup
