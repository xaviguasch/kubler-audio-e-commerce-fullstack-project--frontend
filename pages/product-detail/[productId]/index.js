import { useRouter } from 'next/router'

import { DUMMY_PRODUCTS } from '../../../dummy-data'
import { MAPPING_DATA } from '../../../dummy-data'
import { COPY_DATA } from '../../../dummy-data'

import ThumbnailRow from '../../../components/thumbnails/thumbnail-row'
import CompanyMotto from '../../../components/company-motto/company-motto'

import ProductDisplay from '../../../components/product-display/product-display'

const ProductDetailPage = ({ productInfo, mappingData, copyData }) => {
  const router = useRouter()

  return (
    <div>
      <ProductDisplay productInfo={productInfo} />
      <ThumbnailRow thumbnailData={mappingData.thumbnailRow} />

      <CompanyMotto companyMottoData={copyData.companyMotto} />
    </div>
  )
}

export async function getStaticProps(context) {
  const productId = context.params.productId
  const product = DUMMY_PRODUCTS.filter((product) => product.slug === productId)[0]

  return {
    props: {
      productInfo: product,
      mappingData: MAPPING_DATA,
      copyData: COPY_DATA,
    },
    revalidate: 30,
  }
}

export async function getStaticPaths() {
  const products = DUMMY_PRODUCTS

  const paths = products.map((product) => ({ params: { productId: product.slug } }))

  return {
    paths: paths,
    fallback: false,
  }
}

export default ProductDetailPage
