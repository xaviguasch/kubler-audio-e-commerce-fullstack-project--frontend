import classes from './thumbnail-row.module.css'

import ThumbnailItem from './thumbnail-item'

function ThumbnailRow({ thumbnailData }) {
  return (
    <div className={`${classes.ThumbnailRow} h-padding`}>
      <ul className={classes.thumbnailList}>
        {thumbnailData.map((data) => (
          <li key={data.name}>
            <ThumbnailItem thumbnailItemData={data} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ThumbnailRow
