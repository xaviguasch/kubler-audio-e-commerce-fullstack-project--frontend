import classes from './thumbnail-item.module.css'

function ThumbnailItem({ thumbnailItemData }) {
  const thumbnailImgs = thumbnailItemData.images

  return (
    <div>
      <h3>{thumbnailItemData.name}</h3>
      <a href='/'>Shop</a>
      <img src={thumbnailImgs.desktop} alt='' />
    </div>
  )
}

export default ThumbnailItem
