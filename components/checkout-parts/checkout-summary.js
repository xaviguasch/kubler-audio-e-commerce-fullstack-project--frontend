import React, { useState, useContext, useEffect } from 'react'

import classes from './checkout-summary.module.css'

import CartItem from '../layout/cart-item'

import { CartItemsContext } from '../../context/CartItemsProvider'

function CheckoutSummary({ setGrandTotal }) {
  const { cartItems, setCartItems } = useContext(CartItemsContext)

  const totalPrice = cartItems.reduce((acc, currV) => acc + currV.price, 0)

  const shipping = 50
  const vat = totalPrice * 0.2
  const grandTotal = Number(totalPrice + vat + shipping).toFixed(1)

  useEffect(() => {
    setGrandTotal(grandTotal)
  }, [grandTotal])

  return (
    <div className={classes.CheckoutSummary}>
      <span className='title title--xs'>Summary</span>

      <ul className={classes.itemsList}>
        {cartItems.map((item) => (
          <CartItem key={item.id} data={item} location='checkout' />
        ))}
      </ul>

      <div className={classes.totalGroup}>
        <div className={classes.totalSubGroup}>
          <div className={classes.total}>
            <p className={classes.totalTag}>Total</p>
            <p className={classes.price}>
              € {totalPrice.toLocaleString('en', { useGrouping: true })}
            </p>
          </div>
          <div className={classes.total}>
            <p className={classes.totalTag}>Shipping</p>
            <p className={classes.price}>
              € {shipping.toLocaleString('en', { useGrouping: true })}
            </p>
          </div>
          <div className={classes.total}>
            <p className={classes.totalTag}>Vat (included)</p>
            <p className={classes.price}>
              € {vat.toLocaleString('en', { useGrouping: true })}
            </p>
          </div>
        </div>

        <div className={classes.total}>
          <p className={classes.totalTag}>Grand Total</p>
          <p className={classes.priceOrange}>
            € {new Intl.NumberFormat().format(grandTotal)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary
