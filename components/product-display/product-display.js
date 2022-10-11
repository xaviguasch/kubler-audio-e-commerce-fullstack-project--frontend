import React from 'react'

import classes from './product-display.module.css'

import Link from 'next/link'

import PDMain from './pd-main'
import PDFeatures from './pd-features'

function ProductDisplay({ productInfo }) {
  const {
    name,
    image,
    category,
    categoryImage,
    isItNew,
    price,
    description,
    features,
    includes,
    gallery,
    others,
  } = productInfo
  return (
    <div>
      <PDMain productInfo={productInfo} />

      <PDFeatures productInfo={productInfo} />

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

      <div>
        <h3>You May Also Like</h3>

        <ul>
          {others.map((other) => {
            return (
              <li key={other.name}>
                <img src={other.image.mobile} alt='' />
                <Link href={`/product-detail/${other.slug}`}>
                  <button>See Product</button>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ProductDisplay
