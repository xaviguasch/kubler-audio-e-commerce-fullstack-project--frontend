import classes from './ThumbnailRow.module.css'

import ThumbnailItem from './ThumbnailItem'

function ThumbnailRow({ thumbnailData }) {
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
