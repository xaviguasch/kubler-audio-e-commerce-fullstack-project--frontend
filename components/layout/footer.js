import React from 'react'

import IconsGroup from '../ui/icons-group'

import classes from './footer.module.css'

import Navbar from '../ui/navbar'

function Footer({ copyData }) {
  return (
    <div className={`${classes.Footer} h-padding`}>
      <div>
        <h2 className='logo logo--l'>{copyData.footerCopy.title}</h2>
      </div>

      <Navbar position='nav_footer' />
      <p className='text helper-text-diluted-white'>{copyData.footerCopy.copy}</p>
      <span className='text helper-text-diluted-white helper-text-bold'>
        {copyData.footerCopy.copyright}
      </span>
      <IconsGroup />
    </div>
  )
}

export default Footer
