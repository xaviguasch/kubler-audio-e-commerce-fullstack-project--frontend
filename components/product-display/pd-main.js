import React from 'react'

import classes from './pd-main.module.css'

function PDMain({ productInfo }) {
  const { name, image, isItNew, price, description } = productInfo

  return (
    <div className={classes.PDMain}>
      <div className={classes.pictureContainer}>
        <picture>
          <source srcSet={image.desktop} media='(min-width: 900px)' alt='' />
          <source srcSet={image.tablet} media='(min-width: 600px)' alt='' />
          <img src={image.mobile} alt='' />
        </picture>
      </div>

      <div className={classes.containerInfo}>
        <div className={classes.copy}>
          {isItNew ? <span className={classes.PDMTag}>New Product</span> : null}
          <h2 className='title--show'>{name}</h2>
          <p className='text helper-text-diluted-black'>{description}</p>
          <p className='price'>€ {price.toLocaleString('en', { useGrouping: true })}</p>
        </div>

        <div>
          <form action=''>
            <button className='button button--orange-matte'>Add to Cart</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PDMain
