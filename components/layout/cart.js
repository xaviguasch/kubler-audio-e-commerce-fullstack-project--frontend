import React, { useState, useEffect } from 'react'

import Link from 'next/link'

import CartItem from './cart-item'

import classes from './cart.module.css'

function Cart({ isOpen, modalCartHandler, dummyData }) {
  // Check if document is finally loaded

  console.log(dummyData)
  // dummy price
  const price = 10999

  // HARDCODED DATA, PROVISIONAL!!!!

  return (
    <div className={classes.Cart} onClick={modalCartHandler}>
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

          <Link href='/checkout'>
            <a
              className='button button--orange-matte'
              onClick={(e) => {
                e.stopPropagation()
                cartModalHandler()
              }}
            >
              Checkout
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
