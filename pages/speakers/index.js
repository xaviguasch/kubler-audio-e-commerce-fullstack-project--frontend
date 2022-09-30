import ProductFamily from '../../components/product-family/product-family'

import { IMAGES_DATA } from '../../dummy-data'

function Speakers() {
  return (
    <div>
      Speakers
      <ProductFamily thumbnailData={IMAGES_DATA.thumbnailRow} familyName='headphones' />
    </div>
  )
}

export default Speakers
