import React from 'react'

function ProductPreview({ ppData }) {
  const { name, description, images, tag, isReveresed } = ppData

  console.log(ppData)

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
        <img src={images.desktop} alt='' />
      </div>
    </div>
  )
}

export default ProductPreview
