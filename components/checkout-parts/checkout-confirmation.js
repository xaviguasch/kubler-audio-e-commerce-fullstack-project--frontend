import React, { useState, useContext, useEffect } from 'react'

import { CartItemsContext } from '../../context/CartItemsProvider'

import Link from 'next/link'

import classes from './checkout-confirmation.module.css'

import IconConfirmationSVG from '../../public/assets/icons/icon-order-confirmation.svg'

function CheckoutConfirmation({ grandTotal }) {
  const { cartItems, setCartItems } = useContext(CartItemsContext)

  useEffect(() => {
    // Cleanup function on unmounting the component: It cleans the current cart items
    return () => {
      setCartItems([])
    }
  }, [])

  const confirmationBtnHandler = (e) => {
    setCartItems([])
  }

  const orderNum = Math.floor(Math.random() * 4000) + 100

  const todaysDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/')

  return (
    <div className={classes.CheckoutConfirmation}>
      <div>
        <IconConfirmationSVG />
      </div>
      <div className={classes.copy}>
        <h3 className={classes.title}>Thank You For Your Order</h3>
        <p className='text helper-text-diluted-black'>
          You will receive an email confirmation shortly.
        </p>
      </div>

      <div className={classes.orderInfo}>
        <div className={classes.upper}>
          <div className={classes.pair}>
            <span className='label helper-text-diluted-black'>Date:</span>
            <span className='checkout-info'>{todaysDate}</span>
          </div>
          <div className={classes.pair}>
            <span className='label helper-text-diluted-black'>Order Number:</span>
            <span className='checkout-info'>{orderNum}</span>
          </div>
        </div>

        <div className={classes.lower}>
          <span className={classes.grandTotal}>Grand Total</span>

          <span className={classes.price}>
            € {grandTotal.toLocaleString('en', { useGrouping: true })}
          </span>
        </div>
      </div>

      <div className={classes.buttonArea}>
        <Link href='/'>
          <button className={classes.button} onClick={confirmationBtnHandler}>
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CheckoutConfirmation
