import { useRouter } from 'next/router'

import classes from './index.module.css'

import Link from 'next/link'

const Checkout = ({}) => {
  const router = useRouter()

  return (
    <div className={`${classes.Checkout} h-padding`}>
      <p>go back placeholder</p>

      <div className={classes.checkoutCard}>
        <h2 className='title'>Checkout</h2>

        <form>
          <div className={classes.formSection}></div>
          <div className={classes.formSection}></div>
          <div className={classes.formSection}></div>
        </form>
      </div>
    </div>
  )
}

export default Checkout
