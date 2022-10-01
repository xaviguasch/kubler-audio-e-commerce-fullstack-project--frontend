import { Fragment } from 'react'

import Header from './header'
import Footer from './footer'

function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer copyData={props.copyData} />
    </Fragment>
  )
}

export default Layout
