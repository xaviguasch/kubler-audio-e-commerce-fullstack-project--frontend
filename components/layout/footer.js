import React from 'react'

import IconsGroup from '../ui/icons-group'

import classes from './footer.module.css'

import Navbar from '../ui/navbar'

function Footer({ copyData }) {
  return (
    <div className={`${classes.Footer} h-padding`}>
      <div className={classes.FooterContent}>
        <div className={classes.titleArea}>
          <h2 className='logo logo--l'>{copyData.footerCopy.title}</h2>
        </div>

        <div className={classes.navInFooterContainer}>
          <Navbar position='nav_footer' />
        </div>
        <p className={`text helper-text-diluted-white ${classes.copyText}`}>
          {copyData.footerCopy.copy}
        </p>
        <span
          className={`text helper-text-diluted-white helper-text-bold ${classes.copyRight}`}
        >
          {copyData.footerCopy.copyright}
        </span>
        <div className={classes.iconsGroupContainer}>
          <IconsGroup />
        </div>
      </div>
    </div>
  )
}

export default Footer
