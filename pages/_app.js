// Later we will have to fetch this from the client because
// here we can't use getStaticProps, we will have to do useEffect()
import { COPY_DATA } from '../dummy-data'

import Layout from '../components/layout/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout copyData={COPY_DATA}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
