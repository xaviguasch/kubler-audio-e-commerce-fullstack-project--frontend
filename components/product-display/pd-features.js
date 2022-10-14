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
    <div className={classes.PDFeatures}>
      <div className={classes.container}>
        <h3 className='title title--s__alt'>Features</h3>
        <div className={classes.featuresInfo}>
          {features.split('\n').map((i) => (
            <p className='text helper-text-diluted-black'>{i}</p>
          ))}
        </div>
      </div>

      <div className={classes.container}>
        <h3 className='title title--s__alt'>In The Box</h3>
        <ul>
          {includes.map((extras) => {
            return (
              <li key={extras.item} className={classes.boxPair}>
                <span className='box-units'>{extras.quantity}x</span>
                <span className='text helper-text-diluted-black'>{extras.item}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default PDFeatures
