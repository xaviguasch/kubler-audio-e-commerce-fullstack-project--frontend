import ProductFamily from '../../components/product-family/product-family'

import { MAPPING_DATA } from '../../dummy-data'
import { COPY_DATA } from '../../dummy-data'

function Speakers() {
  return (
    <div>
      <ProductFamily
        thumbnailData={MAPPING_DATA.thumbnailRow}
        productData={MAPPING_DATA.productPreviews.speakers}
        familyName='speakers'
        companyMottoData={COPY_DATA.companyMotto}
      />
    </div>
  )
}

export default Speakers
