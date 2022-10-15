import { Fragment, useState } from 'react'

import Header from './header'
import Footer from './footer'

import Cart from './cart'

function Layout(props) {
  const [isOpen, setIsOpen] = useState(false)

  if (typeof window === 'object') {
    // stops scrolling when the overlay is open

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }

  const cartModalHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Fragment>
      <Header cartModalHandler={cartModalHandler} />
      {isOpen && <Cart isOpen={isOpen} cartModalHandler={cartModalHandler} />}
      <main>{props.children}</main>
      <Footer copyData={props.copyData} />
    </Fragment>
  )
}

export default Layout
