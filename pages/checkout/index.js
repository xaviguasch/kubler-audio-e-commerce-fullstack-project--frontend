import { useRouter } from 'next/router'

import classes from './index.module.css'

import Link from 'next/link'

import CheckoutForm from '../../components/checkout-parts/checkout-form'

const Checkout = ({}) => {
  const router = useRouter()

  return (
    <div className={`${classes.Checkout} h-padding`}>
      <p>go back placeholder</p>

      <div className={classes.checkoutLayout}>
        <CheckoutForm />

        <h2>Summary placeholder</h2>
      </div>
    </div>
  )
}

export default Checkout
