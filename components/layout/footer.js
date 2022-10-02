import React from 'react'

import IconsGroup from '../ui/icons-group'

import Navigation from '../ui/Navigation'

function Footer({ copyData }) {
  return (
    <div>
      <div>
        <h3>{copyData.footerCopy.title}</h3>
        <p>{copyData.footerCopy.copy}</p>
        <span>{copyData.footerCopy.copyright}</span>
      </div>
      <Navigation />
      <IconsGroup socialIcons={copyData.socialIcons} />
    </div>
  )
}

export default Footer
