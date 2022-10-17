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

        <form className={classes.formCheckout}>
          <div className={classes.formSection}>
            <h3 className='title title--form-section'>Billing Details</h3>

            <div className={classes.formGroup}>
              <div className={classes.formInputAndLabel}>
                <label className='label' htmlFor='name'>
                  Name
                </label>
                <input
                  type='text'
                  className={classes.inputCheckout}
                  id='name'
                  placeholder='Elliott Gould'
                />
              </div>

              <div className={classes.formInputAndLabel}>
                <label className='label' htmlFor='email'>
                  Email Address
                </label>
                <input
                  type='email'
                  className={classes.inputCheckout}
                  id='email'
                  placeholder='elliottgould@gmail.com'
                />
              </div>

              <div className={classes.formInputAndLabel}>
                <label className='label' htmlFor='phone'>
                  Phone Number
                </label>
                <input
                  type='phone'
                  className={classes.inputCheckout}
                  id='phone'
                  placeholder='+1 202-555-0136'
                />
              </div>
            </div>
          </div>

          <div className={classes.formSection}>
            <h3 className='title title--form-section'>Shipping Info</h3>

            <div className={classes.formGroup}>
              <div className={classes.formInputAndLabel}>
                <label className='label' htmlFor='address'>
                  Your Address
                </label>
                <input
                  type='text'
                  className={classes.inputCheckout}
                  id='address'
                  placeholder='1137 Williams Avenue'
                />
              </div>

              <div className={classes.formInputAndLabel}>
                <label className='label' htmlFor='zipCode'>
                  ZIP Code
                </label>
                <input
                  type='text'
                  className={classes.inputCheckout}
                  id='zipCode'
                  placeholder='10001'
                />
              </div>

              <div className={classes.formInputAndLabel}>
                <label className='label' htmlFor='city'>
                  City
                </label>
                <input
                  type='text'
                  className={classes.inputCheckout}
                  id='city'
                  placeholder='New York'
                />
              </div>

              <div className={classes.formInputAndLabel}>
                <label className='label' htmlFor='country'>
                  Country
                </label>
                <input
                  type='text'
                  className={classes.inputCheckout}
                  id='country'
                  placeholder='United States'
                />
              </div>
            </div>
          </div>

          <div className={classes.formSection}>
            <h3 className='title title--form-section'>Payment Details</h3>

            <div className={classes.formGroup}>
              <div className={classes.formInputAndLabel}>
                <span className={classes.radioLabel}>Payment Method</span>

                <div>
                  <input
                    type='radio'
                    name='payment-method'
                    id='eMoney'
                    value='eMoney'
                    checked={'eMoney'}
                  />
                  <label htmlFor='eMoney' className={classes.radioLabelOption}>
                    e-Money
                  </label>
                </div>
                <div>
                  <input
                    type='radio'
                    name='payment-method'
                    id='cash'
                    value='cash'
                    checked={'cash'}
                  />
                  <label htmlFor='cash' className={classes.radioLabelOption}>
                    Cash on Delivery
                  </label>
                </div>
              </div>

              <div className={classes.formInputAndLabel}>
                <label className='label' htmlFor='eMoneyNumber'>
                  e-Money Number
                </label>
                <input
                  type='text'
                  className={classes.inputCheckout}
                  id='eMoneyNumber'
                  placeholder='238521993
'
                />
              </div>

              <div className={classes.formInputAndLabel}>
                <label className='label' htmlFor='eMoneyPin'>
                  e-Money Pin
                </label>
                <input
                  type='text'
                  className={classes.inputCheckout}
                  id='eMoneyPin'
                  placeholder='6891'
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Checkout
