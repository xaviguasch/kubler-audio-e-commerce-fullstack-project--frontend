import React from 'react'

import IconsGroup from '../ui/icons-group'

import { COPY_DATA } from '../../dummy-data'
import Navigation from '../ui/Navigation'

function Footer() {
  return (
    <div>
      <div>
        <h3>{COPY_DATA.footerCopy.title}</h3>
        <p>{COPY_DATA.footerCopy.copy}</p>
        <span>{COPY_DATA.footerCopy.copyright}</span>
      </div>
      <Navigation />
      <IconsGroup />
    </div>
  )
}

export default Footer
