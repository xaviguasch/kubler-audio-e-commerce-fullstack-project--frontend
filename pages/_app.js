// Later we will have to fetch this from the client because
// here we can't use getStaticProps, we will have to do useEffect()
import { COPY_DATA, DUMMY_PRODUCTS } from '../dummy-data'

import CartItemsProvider from '../context/CartItemsProvider'

import Layout from '../components/layout/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <CartItemsProvider>
      <Layout copyData={COPY_DATA} dummyData={DUMMY_PRODUCTS}>
        <Component {...pageProps} />
      </Layout>
    </CartItemsProvider>
  )
}

export default MyApp
