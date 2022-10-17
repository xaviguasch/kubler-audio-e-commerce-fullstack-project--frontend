import { useRouter } from 'next/router'

import classes from './index.module.css'

import Link from 'next/link'

import CheckoutForm from '../../components/checkout-parts/checkout-form'
import CheckoutSummary from '../../components/checkout-parts/checkout-summary'

import { DUMMY_PRODUCTS } from '../../dummy-data'

const Checkout = ({ dummyProducts }) => {
  const router = useRouter()

  return (
    <div className={`${classes.Checkout} h-padding`}>
      <p>go back placeholder</p>

      <div className={classes.checkoutLayout}>
        <CheckoutForm />

        <CheckoutSummary dummyProducts={dummyProducts} />
      </div>
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
