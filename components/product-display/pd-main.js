import React, { useState, useContext, useEffect } from 'react'

import classes from './pd-main.module.css'

import { CartItemsContext } from '../../context/CartItemsProvider'

function PDMain({ productInfo }) {
  const [isItemInCart, setIsItemInCart] = useState(false)

  const { name, image, isItNew, price, description } = productInfo

  const { cartItems, setCartItems } = useContext(CartItemsContext)

  const addToCartBtnHandler = (e) => {
    e.preventDefault()
    if (!isItemInCart) {
      const nextCartItems = [...cartItems]

      setCartItems([...nextCartItems, productInfo])
      setIsItemInCart(true)
    }
  }

  // Checks if the item is already in cart and disables the BUY button if so
  useEffect(() => {
    if (cartItems.find((el) => el.id === productInfo.id)) {
      setIsItemInCart(true)
    } else {
      setIsItemInCart(false)
    }
  }, [cartItems])

  return (
    <div className={classes.PDMain}>
      <div className={classes.pictureContainer}>
        <picture>
          <source srcSet={image.desktop} media='(min-width: 900px)' alt='' />
          <source srcSet={image.tablet} media='(min-width: 600px)' alt='' />
          <img src={image.mobile} alt='' />
        </picture>
      </div>

      <div className={classes.containerInfo}>
        <div className={classes.copy}>
          {isItNew ? <span className={classes.PDMTag}>New Product</span> : null}
          <h2 className='title--show'>{name}</h2>
          <p className='text helper-text-diluted-black'>{description}</p>
          <p className='price'>€ {price.toLocaleString('en', { useGrouping: true })}</p>
        </div>

        <div>
          <form action=''>
            <button
              className='button button--orange-matte'
              onClick={addToCartBtnHandler}
              disabled={isItemInCart}
            >
              {isItemInCart ? 'Already In Cart' : 'Add to Cart'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PDMain
