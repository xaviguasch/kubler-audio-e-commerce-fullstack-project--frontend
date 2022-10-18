import { COPY_DATA } from '../dummy-data'
import { MAPPING_DATA } from '../dummy-data'

import classes from './index.module.css'

import Hero from '../components/hero/hero'
import ThumbnailRow from '../components/thumbnails/thumbnail-row'
import Showcase from '../components/showcase/showcase'
import CompanyMotto from '../components/company-motto/company-motto'

function HomePage({ copyData, mappingData }) {
  return (
    <div>
      <Hero heroCopy={copyData.hero} />
      <div className={classes.container}>
        <ThumbnailRow thumbnailData={mappingData.thumbnailRow} />

        <Showcase showcaseData={copyData.showcase} />

        <CompanyMotto companyMottoData={copyData.companyMotto} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      copyData: COPY_DATA,
      mappingData: MAPPING_DATA,
    },
    revalidate: 1800, // If a new requests comes 30min after the last time
    // the page was generated, then it will be
  }
}

export default HomePage
