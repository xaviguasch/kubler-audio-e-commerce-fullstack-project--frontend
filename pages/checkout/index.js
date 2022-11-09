import React, { useState } from 'react'

import { useRouter } from 'next/router'

import classes from './index.module.css'

import Link from 'next/link'

import CheckoutForm from '../../components/checkout-parts/checkout-form'
import CheckoutSummary from '../../components/checkout-parts/checkout-summary'
import CheckoutConfirmation from '../../components/checkout-parts/checkout-confirmation'

import { DUMMY_PRODUCTS } from '../../dummy-data'

const Checkout = ({ dummyProducts }) => {
  const [isPaid, setIsPaid] = useState(false)

  const isPaidHandler = () => {
    setIsPaid(!isPaid)
  }

  const router = useRouter()

  return (
    <div className={`${classes.Checkout} h-padding`}>
      <p>go back placeholder</p>

      {isPaid ? (
        <CheckoutConfirmation />
      ) : (
        <div className={classes.checkoutLayout}>
          <CheckoutForm />

          <CheckoutSummary dummyProducts={dummyProducts} isPaidHandler={isPaidHandler} />
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
