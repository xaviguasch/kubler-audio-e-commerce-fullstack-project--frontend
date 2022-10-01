import ProductPreview from '../product-preview/product-preview'

function ProductPreviewGroup({ previewData }) {
  console.log(previewData)
  return (
    <div>
      {previewData.map((pData) => (
        <ProductPreview key={pData.name} ppData={pData} />
      ))}
    </div>
  )
}

export default ProductPreviewGroup
