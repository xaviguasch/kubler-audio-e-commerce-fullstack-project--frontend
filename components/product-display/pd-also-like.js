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
              <picture>
                <source srcSet={other.image.desktop} media='(min-width: 900px)' alt='' />
                <source srcSet={other.image.tablet} media='(min-width: 600px)' alt='' />
                <img src={other.image.mobile} alt='' />
              </picture>
              <h2 className={classes.productName}>{other.name}</h2>
              <Link
                href={`/product-detail/${other.slug}`}
                className='button button--orange-matte'
              >
                <a className='button button--orange-matte'>See Product</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PDAlsoLike
