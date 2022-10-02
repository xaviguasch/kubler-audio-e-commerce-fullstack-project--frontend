import React from 'react'

import IconsGroup from '../ui/icons-group'

import Navbar from '../ui/navbar'

function Footer({ copyData }) {
  return (
    <div>
      <div>
        <h3>{copyData.footerCopy.title}</h3>
        <p>{copyData.footerCopy.copy}</p>
        <span>{copyData.footerCopy.copyright}</span>
      </div>
      <Navbar position='nav_header' />
      <IconsGroup />
    </div>
  )
}

export default Footer
