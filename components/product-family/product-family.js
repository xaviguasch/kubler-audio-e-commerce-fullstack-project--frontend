import SectionHeader from '../ui/section-header'
import ProductPreviewGroup from '../product-preview-group/product-preview-group'
import ThumbnailRow from '../thumbnails/thumbnail-row'
import CompanyMotto from '../company-motto/company-motto'

function ProductFamily({ thumbnailData, familyName, productData, companyMottoData }) {
  console.log(companyMottoData)

  return (
    <div>
      <SectionHeader familyName={familyName} />
      <ProductPreviewGroup previewData={productData} />
      <ThumbnailRow thumbnailData={thumbnailData} />
      <CompanyMotto companyMottoData={companyMottoData} />
    </div>
  )
}

export default ProductFamily
