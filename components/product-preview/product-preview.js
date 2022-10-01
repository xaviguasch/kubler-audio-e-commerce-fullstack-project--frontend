import React from 'react'

function ProductPreview({ ppData }) {
  const { name, description, image, tag, isReveresed } = ppData

  return (
    <div>
      <p>product preview</p>
      <div>
        {tag && <span>{tag}</span>}
        <h2>{name}</h2>
        <p>{description}</p>
        <a href='/'>See product</a>
      </div>
      <div>
        <img src={image} alt='' />
      </div>
    </div>
  )
}

export default ProductPreview
