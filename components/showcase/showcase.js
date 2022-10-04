import classes from './showcase.module.css'

function Showcase({ showcaseData }) {
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
          <a className='button button--black' href='/'>
            See product
          </a>
        </div>
      </div>
      <div className={`${classes.showcaseItem}`}>
        <h2>{showcaseData.speakerZx7.name}</h2>
        <img src={showcaseData.speakerZx7.images.desktop} alt='' />
      </div>
      <div className={`${classes.showcaseItem}`}>
        <h2>{showcaseData.yx1Earphones.name}</h2>
        <img src={showcaseData.yx1Earphones.images.desktop} alt='' />
      </div>
    </div>
  )
}

export default Showcase
