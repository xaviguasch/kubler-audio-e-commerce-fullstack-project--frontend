import React from 'react'

import classes from './pd-features.module.css'

function PDFeatures({ productInfo }) {
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
  )
}

export default PDFeatures
