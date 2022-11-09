import React from 'react'

import classes from './checkout-form.module.css'

function checkoutForm() {
  return (
    <div className={classes.checkoutForm}>
      <h2 className='title'>Checkout</h2>

      <div className={classes.formContainer}>
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
              <label className='label' htmlFor='cardNumber'>
                Card Number
              </label>
              <input
                type='text'
                className={classes.inputCheckout}
                id='cardNumber'
                placeholder='4604299379994544
'
              />
            </div>

            <div className={classes.formInputAndLabel}>
              <label className='label' htmlFor='cvv'>
                CVV
              </label>
              <input
                type='text'
                className={classes.inputCheckout}
                id='cvv'
                placeholder='6891'
              />
            </div>

            <div className={classes.formInputAndLabel}>
              <label className='label' htmlFor='creditCardDate'>
                Expire Date
              </label>
              <input
                type='text'
                className={classes.inputCheckout}
                id='creditCardDate'
                placeholder='MM/YY'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default checkoutForm
