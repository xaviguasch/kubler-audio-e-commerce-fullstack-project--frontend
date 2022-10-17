import React, { useState, useEffect } from 'react'

import CartItem from './cart-item'

import classes from './cart.module.css'

function Cart({ isOpen, cartModalHandler, dummyData }) {
  // Check if document is finally loaded

  console.log(dummyData)
  // dummy price
  const price = 10999

  // HARDCODED DATA, PROVISIONAL!!!!

  return (
    <div className={classes.Cart} onClick={cartModalHandler}>
      <div className={classes.container}>
        <div className={classes.upper}>
          <span className='title title--xs'>Cart (3)</span>
          <button className={classes.btn}>Remove All</button>
        </div>

        <ul className={classes.cartList}>
          {dummyData.map((item) => <CartItem key={item.id} data={item} />).slice(3)}
        </ul>

        <div className={classes.lower}>
          <div className={classes.total}>
            <p className={classes.totalTag}>Total</p>
            <p className='price'>€ {price.toLocaleString('en', { useGrouping: true })}</p>
          </div>

          <button
            className='button button--orange-matte'
            onClick={(e) => {
              e.stopPropagation()
              console.log('hola')
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
