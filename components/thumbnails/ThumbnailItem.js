import classes from './ThumbnailItem.module.css'

function ThumbnailItem({ thumbnailItemData }) {
  const thumbnailImgs = thumbnailItemData.images
  return (
    <div>
      <h3>{thumbnailItemData.name}</h3>
      <a href='/'>Shop</a>
    </div>
  )
}

export default ThumbnailItem
