import React, { useState, useContext } from 'react'

import { useRouter } from 'next/router'

import classes from './index.module.css'

import Link from 'next/link'

import { CartItemsContext } from '../../context/CartItemsProvider'

import CheckoutForm from '../../components/checkout-parts/checkout-form'
import CheckoutSummary from '../../components/checkout-parts/checkout-summary'
import CheckoutConfirmation from '../../components/checkout-parts/checkout-confirmation'

import { DUMMY_PRODUCTS } from '../../dummy-data'

const Checkout = ({ dummyProducts }) => {
  const [isPaid, setIsPaid] = useState(false)
  const [grandTotal, setGrandTotal] = useState(0)

  const { cartItems, setCartItems } = useContext(CartItemsContext)

  const router = useRouter()

  const formSubmitHandler = (e) => {
    e.preventDefault()

    setIsPaid(true)
  }

  return (
    <div className={`${classes.Checkout} h-padding`}>
      <button
        className='button button--empty'
        type='button'
        onClick={() => router.back()}
      >
        Go Back{' '}
      </button>

      {isPaid ? (
        <CheckoutConfirmation grandTotal={grandTotal} />
      ) : cartItems.length === 0 ? (
        <h2>Empty Cart (provisional)</h2>
      ) : (
        <div className={classes.checkoutLayout}>
          <form action='' className={classes.formCheckoutWrapper}>
            <CheckoutForm />

            <CheckoutSummary setGrandTotal={setGrandTotal} />

            <button
              className='button button--orange-matte'
              type='submit'
              onClick={formSubmitHandler}
            >
              Continue & pay
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      dummyProducts: DUMMY_PRODUCTS,
    },
    revalidate: 30,
  }
}

export default Checkout
