import Link from 'next/link'

import classes from './thumbnail-item.module.css'

import IconArrowRightSVG from '../../public/assets/icons/icon-arrow-right.svg'

function ThumbnailItem({ thumbnailItemData }) {
  return (
    <div className={classes.ThumbnailItemData}>
      <img src={thumbnailItemData.thumbnailImg} className={classes.thumbnailImg} alt='' />
      <div className={classes.thumbnailContainer}>
        <p className='title title--xs'>{thumbnailItemData.name}</p>
        <Link href='/'>
          <div className={classes.btnContainer}>
            <a className={classes.btn}>Shop</a>
            <IconArrowRightSVG />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ThumbnailItem
