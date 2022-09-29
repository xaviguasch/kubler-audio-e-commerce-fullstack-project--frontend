import { DUMMY_PRODUCTS } from '../dummy-data'
import { COPY } from '../dummy-data'

import Hero from '../components/hero/hero'

function HomePage(props) {
  return (
    <div>
      <Hero heroCopy={COPY.hero} />

      <ul>
        {DUMMY_PRODUCTS.map((prod) => (
          <li key={prod.id}>{prod.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
