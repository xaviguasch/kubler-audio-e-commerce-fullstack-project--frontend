import React from 'react'

import classes from './checkout-summary.module.css'

import CartItem from '../layout/cart-item'

function CheckoutSummary({ dummyProducts }) {
  const price = 5396
  const shipping = 50
  const vat = 1079
  const grandTotal = 5446

  return (
    <div className={classes.CheckoutSummary}>
      <span className='title title--xs'>Summary</span>

      <ul className={classes.itemsList}>
        {dummyProducts
          .map((item) => <CartItem key={item.id} data={item} location='checkout' />)
          .slice(3)}
      </ul>

      <div className={classes.totalGroup}>
        <div className={classes.totalSubGroup}>
          <div className={classes.total}>
            <p className={classes.totalTag}>Total</p>
            <p className='price'>€ {price.toLocaleString('en', { useGrouping: true })}</p>
          </div>
          <div className={classes.total}>
            <p className={classes.totalTag}>Shipping</p>
            <p className='price'>
              € {shipping.toLocaleString('en', { useGrouping: true })}
            </p>
          </div>
          <div className={classes.total}>
            <p className={classes.totalTag}>Vat (included)</p>
            <p className='price'>€ {vat.toLocaleString('en', { useGrouping: true })}</p>
          </div>
        </div>

        <div className={classes.total}>
          <p className={classes.totalTag}>Grand Total</p>
          <p className='price'>
            € {grandTotal.toLocaleString('en', { useGrouping: true })}
          </p>
        </div>
      </div>

      <button className='button button--orange-matte'>Continue & pay</button>
    </div>
  )
}

export default CheckoutSummary
