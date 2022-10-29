import React from 'react'

import Link from 'next/link'

import classes from './product-preview.module.css'

function ProductPreview({ ppData }) {
  const { name, description, images, tag, isReveresed, slug } = ppData

  console.log(images)
  return (
    <li className={classes.ProductPreview}>
      <div className={classes.imageContainer}>
        <picture>
          <source srcSet={images.desktop} media='(min-width: 900px)' alt='' />
          <source srcSet={images.tablet} media='(min-width: 600px)' alt='' />
          <img src={images.desktop} alt='' />
        </picture>
      </div>
      <div className={classes.copy}>
        {tag && <span className={classes.PPTag}>{tag}</span>}
        <h2 className='title'>{name}</h2>
        <p className='text'>{description}</p>

        <Link href={`/product-detail/${slug}`}>
          <a className='button button--orange-matte'>See product</a>
        </Link>
      </div>
    </li>
  )
}

export default ProductPreview
