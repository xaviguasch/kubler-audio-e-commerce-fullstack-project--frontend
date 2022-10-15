import React from 'react'

import classes from './pd-gallery.module.css'

function PDGallery({ productInfo }) {
  const { gallery } = productInfo

  return (
    <div className={classes.PDGallery}>
      <img className={classes.gridImg} src={gallery.first.mobile} alt='' />
      <img className={classes.gridImg} src={gallery.second.mobile} alt='' />
      <img className={classes.gridImg} src={gallery.third.mobile} alt='' />
    </div>
  )
}

export default PDGallery
