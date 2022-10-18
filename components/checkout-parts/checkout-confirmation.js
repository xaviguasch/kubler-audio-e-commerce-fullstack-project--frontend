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
            € {price.toLocaleString('en', { useGrouping: true })}
          </span>
        </div>
      </div>

      <div className={classes.buttonArea}>
        <button className={classes.button}>Back To Home</button>
      </div>
    </div>
  )
}

export default CheckoutConfirmation
