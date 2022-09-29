import { DUMMY_PRODUCTS } from '../dummy-data'
import { COPY_DATA } from '../dummy-data'
import { IMAGES_DATA } from '../dummy-data'

import Hero from '../components/hero/hero'
import ThumbnailRow from '../components/thumbnails/ThumbnailRow'

function HomePage(props) {
  return (
    <div>
      <Hero heroCopy={COPY_DATA.hero} />
      <ThumbnailRow thumbnailData={IMAGES_DATA.thumbnailRow} />
    </div>
  )
}

export default HomePage
