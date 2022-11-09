import React from 'react'

import classes from './cart-item.module.css'

function CartItem({ data, location }) {
  return (
    <div className={classes.CartItem}>
      <div className={classes.left}>
        <div className={classes.imageContainer}>
          <img src={data.image.mobile} alt={data.name} />
        </div>
        <div className={classes.itemInfo}>
          <span className='title title--xs'>{data.name.split(' ')[0]}</span>
          <span className={classes.price}>
            € {data.price.toLocaleString('en', { useGrouping: true })}
          </span>
        </div>
      </div>
      <div className={classes.right}>
        <span className='box-units'>1x</span>
      </div>
    </div>
  )
}

export default CartItem
