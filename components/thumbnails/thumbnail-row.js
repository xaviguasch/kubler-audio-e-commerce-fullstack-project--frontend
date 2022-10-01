import classes from './thumbnail-row.module.css'

import ThumbnailItem from './thumbnail-item'

function ThumbnailRow({ thumbnailData }) {
  console.log(thumbnailData)

  return (
    <div>
      <ul>
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
