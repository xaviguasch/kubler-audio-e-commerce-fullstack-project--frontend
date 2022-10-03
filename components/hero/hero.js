import Link from 'next/link'

import classes from './hero.module.css'

function Hero({ heroCopy }) {
  return (
    <div
      className={`${classes.Hero} h-padding`}
      style={{
        backgroundImage: `url(${heroCopy.backgroundImg.mobile})`,
      }}
    >
      <div className={classes.copy}>
        <div className='title-area'>
          <span className='tag helper-text-diluted-white'>{heroCopy.tag}</span>
          <h1 className='title title--l helper-text-white'>{heroCopy.productName}</h1>
        </div>
        <p className='text helper-text-semi-diluted-white'>{heroCopy.productCopy}</p>
        <Link href='/'>
          <a className='button'> {heroCopy.buttonText}</a>
        </Link>
      </div>
    </div>
  )
}

export default Hero
