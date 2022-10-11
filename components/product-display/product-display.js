import React from 'react'

import classes from './product-display.module.css'

import Link from 'next/link'

import PDMain from './pd-main'
import PDFeatures from './pd-features'
import PDGallery from './pd-gallery'
import PDAlsoLike from './pd-also-like'

function ProductDisplay({ productInfo }) {
  return (
    <div className={classes.ProductDisplay}>
      <PDMain productInfo={productInfo} />

      <PDFeatures productInfo={productInfo} />

      <PDGallery productInfo={productInfo} />

      <PDAlsoLike productInfo={productInfo} />
    </div>
  )
}

export default ProductDisplay
