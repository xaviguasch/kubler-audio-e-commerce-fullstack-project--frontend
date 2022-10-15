import React, { useState, useEffect } from 'react'

import classes from './cart.module.css'

function Cart({ isOpen, cartModalHandler }) {
  // Check if document is finally loaded

  return (
    <div className={classes.Cart} onClick={cartModalHandler}>
      <div className={classes.container}>
        <h3>Cart Component</h3>
        <button
          className='button'
          onClick={(e) => {
            e.stopPropagation()
            console.log('hola')
          }}
        >
          click me
        </button>
      </div>
    </div>
  )
}

export default Cart
