import React from 'react'

import classes from './checkout-confirmation.module.css'

import IconConfirmationSVG from '../../public/assets/icons/icon-order-confirmation.svg'

function CheckoutConfirmation() {
  const orderNum = Math.floor(Math.random() * 4000) + 100

  const todaysDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/')

  const price = 5446

  return (
    <div className={classes.CheckoutConfirmation}>
      <div>
        <IconConfirmationSVG />
      </div>
      <div className={classes.copy}>
        <h3>Thank You For Your Order</h3>
        <p>You will receive an email confirmation shortly.</p>
      </div>
      <div className={classes.orderInfo}>
        <div>
          <div>
            <span>Date:</span>
            <span>{todaysDate}</span>
          </div>
          <div>
            <span>Order Number:</span>
            <span>{orderNum}</span>
          </div>
        </div>
        <div>
          <span>Grand Total</span>

          <span className='price'>
            € {price.toLocaleString('en', { useGrouping: true })}
          </span>
        </div>
      </div>

      <div className={classes.buttonArea}>
        <button>Back To Home</button>
      </div>
    </div>
  )
}

export default CheckoutConfirmation
