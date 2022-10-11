import React from 'react'

import Link from 'next/link'

import classes from './pd-also-like.module.css'

function PDAlsoLike({ productInfo }) {
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
  )
}

export default PDAlsoLike
