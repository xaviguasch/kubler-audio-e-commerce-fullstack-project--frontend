import React, { useState, useContext } from 'react'

import Link from 'next/link'

import { CartItemsContext } from '../../context/CartItemsProvider'

import CartItem from './cart-item'

import classes from './cart.module.css'

function Cart({ isOpen, modalCartHandler, dummyData }) {
  const { cartItems, setCartItems } = useContext(CartItemsContext)

  const totalPrice = cartItems.reduce((acc, currV) => acc + currV.price, 0)

  const removeAllBtnHandler = (e) => {
    e.preventDefault()

    return setCartItems([])
  }

  return (
    <div className={classes.Cart} onClick={modalCartHandler}>
      <div className={classes.container}>
        <div className={classes.upper}>
          <span className='title title--xs'>Cart ({cartItems.length})</span>
          <button className={classes.btn} onClick={removeAllBtnHandler}>
            Remove All
          </button>
        </div>

        <ul className={classes.cartList}>
          {cartItems.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}
        </ul>

        <div className={classes.lower}>
          <div className={classes.total}>
            <p className={classes.totalTag}>Total</p>
            <p className='price'>
              € {totalPrice.toLocaleString('en', { useGrouping: true })}
            </p>
          </div>

          <Link href='/checkout'>
            <a className='button button--orange-matte'>Checkout</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
