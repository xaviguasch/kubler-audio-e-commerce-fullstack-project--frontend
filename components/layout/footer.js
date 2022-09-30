import React from 'react'

import { COPY_DATA } from '../../dummy-data'

function Footer() {
  return (
    <div>
      <div>
        <h3>{COPY_DATA.footerCopy.title}</h3>
        <p>{COPY_DATA.footerCopy.copy}</p>
        <span>{COPY_DATA.footerCopy.copyright}</span>
      </div>
    </div>
  )
}

export default Footer
