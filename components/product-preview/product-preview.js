import React from 'react'

import classes from './product-preview.module.css'

function ProductPreview({ ppData }) {
  const { name, description, images, tag, isReveresed, slug } = ppData

  return (
    <li className={classes.ProductPreview}>
      <div>
        <img src={images.desktop} alt='' />
      </div>
      <div className={classes.copy}>
        {tag && <span className={classes.PPTag}>{tag}</span>}
        <h2 className='title'>{name}</h2>
        <p className='text'>{description}</p>
        <a className='button button--orange-matte' href={`/product-detail/${slug}`}>
          See product
        </a>
      </div>
    </li>
  )
}

export default ProductPreview
