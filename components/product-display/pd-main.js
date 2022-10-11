import React from 'react'

import classes from './pd-main.module.css'

function PDMain({ productInfo }) {
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
  )
}

export default PDMain
