import { DUMMY_PRODUCTS } from '../dummy-data'
import { COPY_DATA } from '../dummy-data'
import { IMAGES_DATA } from '../dummy-data'

import Hero from '../components/hero/hero'
import ThumbnailRow from '../components/thumbnails/thumbnail-row'
import Showcase from '../components/showcase/showcase'
import CompanyMotto from '../components/company-motto/company-motto'

function HomePage(props) {
  return (
    <div>
      <Hero heroCopy={COPY_DATA.hero} />
      <ThumbnailRow thumbnailData={IMAGES_DATA.thumbnailRow} />

      <Showcase showcaseData={COPY_DATA.showcase} />

      <CompanyMotto companyMottoData={COPY_DATA.companyMotto} />
    </div>
  )
}

export default HomePage
