import ProductPreview from '../product-preview/product-preview'
import classes from './product-preview-group.module.css'

function ProductPreviewGroup({ previewData }) {
  console.log(previewData)

  return (
    <div className={`${classes.ProductPreviewGroup} h-padding`}>
      <ul className={classes.PPGList}>
        {previewData.map((pData) => (
          <ProductPreview key={pData.name} ppData={pData} />
        ))}
      </ul>
    </div>
  )
}

export default ProductPreviewGroup
