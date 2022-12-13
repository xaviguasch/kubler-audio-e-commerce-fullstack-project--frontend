import Link from 'next/link'

import classes from './hero.module.css'

function Hero({ heroCopy }) {
  const css = `
  @media (max-width: 650px) {
      .backimageHero {
          background-image: url(${heroCopy.backgroundImg.mobile});
      }
  }
  @media (min-width: 600px) {
      .backimageHero {
        background-image: url(${heroCopy.backgroundImg.tablet});
      }
  }
  @media (min-width: 900px) {
    .backimageHero {
      background-image: url(${heroCopy.backgroundImg.desktop});
    }
}
`

  return (
    <div className={`${classes.Hero} h-padding backimageHero`}>
      <style scoped>{css}</style>
      <div className={classes.wrapper}>
        <div className={classes.copy}>
          <div className='title-area'>
            <span className='tag helper-text-diluted-white'>{heroCopy.tag}</span>
            <h1 className='title title--l helper-text-white'>{heroCopy.productName}</h1>
          </div>
          <p className='text helper-text-semi-diluted-white'>{heroCopy.productCopy}</p>
          <Link href={heroCopy.url}>
            <a className='button button--orange-matte'> {heroCopy.buttonText}</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
