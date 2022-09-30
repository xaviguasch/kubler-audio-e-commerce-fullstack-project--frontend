import React from 'react'

import SectionHeader from '../ui/section-header'
import ProductPreviewGroup from '../product-preview-group/product-preview-group'
import ThumbnailRow from '../thumbnails/thumbnail-row'

function ProductFamily({ thumbnailData, familyName }) {
  console.log(thumbnailData, familyName)

  return (
    <div>
      <SectionHeader familyName={familyName} />
      <ProductPreviewGroup />
      <ThumbnailRow />
    </div>
  )
}

export default ProductFamily
