import Link from 'next/link'

import classes from './showcase.module.css'

function Showcase({ showcaseData }) {
  console.log(showcaseData)
  return (
    <div className={`${classes.Showcase} h-padding`}>
      <div className={`${classes.showcaseItem} ${classes.showcaseItemA}`}>
        <img
          className={classes.imgA}
          src={showcaseData.speakerZx9.images.desktop}
          alt=''
        />

        <div className={classes.copy}>
          <h2 className={`title title--l helper-text-white ${classes.widthHelper}`}>
            {showcaseData.speakerZx9.name}
          </h2>
          <p className='text helper-text-semi-diluted-white'>
            {showcaseData.speakerZx9.copy}
          </p>

          <Link href={showcaseData.speakerZx9.url}>
            <a className='button button--black'>See product</a>
          </Link>
        </div>
      </div>

      <div
        className={`${classes.showcaseItem} ${classes.showcaseItemB}`}
        style={{
          backgroundImage: `url(${showcaseData.speakerZx7.images.mobile})`,
        }}
      >
        <h2 className='title'>{showcaseData.speakerZx7.name}</h2>
        <Link href={showcaseData.speakerZx7.url}>
          <a className='button button--transparent'>See product</a>
        </Link>
      </div>

      <div className={`${classes.showcaseItem} ${classes.showcaseItemC}`}>
        <div className={classes.showcaseImgContainer}>
          <img src={showcaseData.yx1Earphones.images.mobile} alt='' />
        </div>
        <div className={classes.showcaseCopyContainer}>
          <h2 className='title'>{showcaseData.yx1Earphones.name}</h2>
          <Link href={showcaseData.yx1Earphones.url}>
            <a className='button button--transparent'>See product</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Showcase

{
  /* <Link href={heroCopy.url}>
<a className='button button--orange-matte'> {heroCopy.buttonText}</a>
</Link> */
}
