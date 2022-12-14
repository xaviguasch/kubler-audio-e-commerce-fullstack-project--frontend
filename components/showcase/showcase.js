import Link from 'next/link'

import classes from './showcase.module.css'

function Showcase({ showcaseData }) {
  const css = `
    .backImageShowcaseItemB {
        background-image: url(${showcaseData.speakerZx7.images.mobile});
    }
    @media (min-width: 600px) {
        .backImageShowcaseItemB {
          background-image: url(${showcaseData.speakerZx7.images.tablet});
        }
    }
    @media (min-width: 900px) {
      .backImageShowcaseItemB {
        background-image: url(${showcaseData.speakerZx7.images.desktop});
      }
    }
  `

  return (
    <div className={classes.Showcase}>
      <div className={`${classes.showcaseItem} ${classes.showcaseItemA}`}>
        <div className={classes.imgAContainer}>
          <img
            className={classes.imgA}
            src={showcaseData.speakerZx9.images.desktop}
            alt=''
          />
        </div>

        <div className={classes.copyAContainer}>
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
      </div>

      <div
        className={`${classes.showcaseItem} ${classes.showcaseItemB} backImageShowcaseItemB`}
      >
        <style scoped>{css}</style>

        <h2 className='title--show'>{showcaseData.speakerZx7.name}</h2>
        <Link href={showcaseData.speakerZx7.url}>
          <a className='button button--transparent'>See product</a>
        </Link>
      </div>

      <div className={`${classes.showcaseItem} ${classes.showcaseItemC}`}>
        <div className={classes.showcaseImgContainer}>
          <picture>
            <source
              srcSet={showcaseData.yx1Earphones.images.desktop}
              media='(min-width: 900px)'
              alt=''
            />
            <source
              srcSet={showcaseData.yx1Earphones.images.tablet}
              media='(min-width: 600px)'
              alt=''
            />
            <img src={showcaseData.yx1Earphones.images.mobile} alt='' />
          </picture>
        </div>
        <div className={classes.showcaseCopyContainer}>
          <h2 className='title--show'>{showcaseData.yx1Earphones.name}</h2>
          <Link href={showcaseData.yx1Earphones.url}>
            <a className='button button--transparent'>See product</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Showcase
