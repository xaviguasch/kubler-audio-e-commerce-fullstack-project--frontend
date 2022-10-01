import SectionHeader from '../ui/section-header'
import ProductPreviewGroup from '../product-preview-group/product-preview-group'
import ThumbnailRow from '../thumbnails/thumbnail-row'
import CompanyMotto from '../company-motto/company-motto'

function ProductFamily({ thumbnailData, familyName, productData, companyMottoData }) {
  if (productData) {
    return (
      <div>
        <h3>product Family Page</h3>

        <SectionHeader familyName={familyName} />
        <ProductPreviewGroup previewData={productData} />
        <ThumbnailRow thumbnailData={thumbnailData} />
        <CompanyMotto companyMottoData={companyMottoData} />
      </div>
    )
  } else {
    ;<div>
      <p>Loading...</p>
    </div>
  }
}

export default ProductFamily
