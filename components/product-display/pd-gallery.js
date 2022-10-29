import React from 'react'

import classes from './pd-gallery.module.css'

function PDGallery({ productInfo }) {
  const { gallery } = productInfo

  return (
    <div className={classes.PDGallery}>
      <picture className={classes.picA}>
        <source srcSet={gallery.first.desktop} media='(min-width: 900px)' alt='' />
        <source srcSet={gallery.first.tablet} media='(min-width: 600px)' alt='' />
        <img className={classes.gridImg} src={gallery.first.mobile} alt='' />
      </picture>
      <picture className={classes.picB}>
        <source srcSet={gallery.second.desktop} media='(min-width: 900px)' alt='' />
        <source srcSet={gallery.second.tablet} media='(min-width: 600px)' alt='' />

        <img className={classes.gridImg} src={gallery.second.mobile} alt='' />
      </picture>
      <picture className={classes.picC}>
        <source srcSet={gallery.third.desktop} media='(min-width: 900px)' alt='' />
        <source srcSet={gallery.third.tablet} media='(min-width: 600px)' alt='' />
        <img className={classes.gridImg} src={gallery.third.mobile} alt='' />
      </picture>
    </div>
  )
}

export default PDGallery
