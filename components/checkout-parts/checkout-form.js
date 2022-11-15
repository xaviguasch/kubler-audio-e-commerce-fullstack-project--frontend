import React, { useState } from 'react'

import classes from './checkout-form.module.css'

function checkoutForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [card, setCard] = useState('')
  const [cvv, setCvv] = useState('')
  const [expireDate, setExpireDate] = useState('')

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
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
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
                value={email}
                onChange={(e) => {
                  setEmail(e.target.email)
                }}
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
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.phone)
                }}
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
                value={address}
                onChange={(e) => {
                  setAddress(e.target.address)
                }}
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
                value={zipcode}
                onChange={(e) => {
                  setZipcode(e.target.zipCode)
                }}
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
                value={city}
                onChange={(e) => {
                  setCity(e.target.city)
                }}
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
                value={country}
                onChange={(e) => {
                  setCountry(e.target.country)
                }}
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
                placeholder='4604299379994544'
                value={card}
                onChange={(e) => {
                  setCard(e.target.card)
                }}
              />
            </div>

            <div className={classes.formInputAndLabel}>
              <label className='label' htmlFor='cvv'>
                CVV
              </label>
              <input
                type='number'
                className={classes.inputCheckout}
                id='cvv'
                placeholder='6891'
                value={cvv}
                onChange={(e) => {
                  setCvv(e.target.cvv)
                }}
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
                value={expireDate}
                onChange={(e) => {
                  setExpireDate(e.target.creditCardDate)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default checkoutForm
