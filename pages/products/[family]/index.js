import { useRouter } from 'next/router'
import ProductFamily from '../../../components/product-family/product-family'

import { MAPPING_DATA } from '../../../dummy-data'
import { COPY_DATA } from '../../../dummy-data'

const CategoryProjectPage = ({ mappingData, copyData }) => {
  const router = useRouter()

  const { family } = router.query

  return (
    <div>
      <ProductFamily
        thumbnailData={mappingData.thumbnailRow}
        productData={mappingData.productPreviews[family]}
        familyName={family}
        companyMottoData={copyData.companyMotto}
      />
    </div>
  )
}

export async function getStaticProps(context) {
  const family = context.params.family

  return {
    props: {
      mappingData: MAPPING_DATA,
      copyData: COPY_DATA,
    },
    revalidate: 30,
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { family: 'headphones' } },
      { params: { family: 'earphones' } },
      { params: { family: 'speakers' } },
    ],
    // The fallback needs to be REVISITED
    fallback: 'blocking',
  }
}

export default CategoryProjectPage
