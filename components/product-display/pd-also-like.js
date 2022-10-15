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
    <div className={classes.PDAlsoLike}>
      <h3 className='title title--s__alt'>You May Also Like</h3>

      <ul className={classes.list}>
        {others.map((other) => {
          return (
            <li key={other.name} className={classes.item}>
              <img src={other.image.mobile} alt='' />
              <h2>{other.name}</h2>
              <Link
                href={`/product-detail/${other.slug}`}
                className='button button--orange-matte'
              >
                <button className='button button--orange-matte'>See Product</button>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PDAlsoLike
