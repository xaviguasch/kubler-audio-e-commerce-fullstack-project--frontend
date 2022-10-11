import React from 'react'

import classes from './product-display.module.css'

import Link from 'next/link'

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
      <div>
        <div>
          <img src={image.mobile} alt='' />
        </div>
        <div>
          {isItNew ? <span>New Product</span> : null}
          <h2>{name}</h2>
          <p>{description}</p>
          <p>{price}</p>

          <div>
            <form action=''>
              <input type='number' name='' id='' />
              <button>Add to Cart</button>
            </form>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h3>Features</h3>
          <p>{features}</p>
        </div>
        <div>
          <h3>In The Box</h3>
          <ul>
            {includes.map((extras) => {
              return (
                <div key={extras.item}>
                  <li>
                    <span>{extras.quantity}x</span>
                    <span>{extras.item}</span>
                  </li>
                </div>
              )
            })}
          </ul>
        </div>
      </div>

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
