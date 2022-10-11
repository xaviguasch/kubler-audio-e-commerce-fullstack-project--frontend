import React from 'react'

import classes from './pd-gallery.module.css'

function PDGallery({ productInfo }) {
  const { gallery } = productInfo

  return (
    <div>
      <p>Gallery</p>
      <div>
        <img src={gallery.first.mobile} alt='' />
        <img src={gallery.second.mobile} alt='' />
      </div>
      <div>
        <img src={gallery.third.mobile} alt='' />
      </div>
    </div>
  )
}

export default PDGallery
