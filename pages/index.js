import { DUMMY_PRODUCTS } from '../dummy-data'

function HomePage(props) {
  return (
    <div>
      <h1>KublerAudio Home Page!</h1>

      <ul>
        {DUMMY_PRODUCTS.map((prod) => (
          <li key={prod.id}>{prod.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
