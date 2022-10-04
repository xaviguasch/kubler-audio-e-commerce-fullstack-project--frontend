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
          <a className='button button--black' href='/'>
            See product
          </a>
        </div>
      </div>

      <div
        className={`${classes.showcaseItem} ${classes.showcaseItemB}`}
        style={{
          backgroundImage: `url(${showcaseData.speakerZx7.images.mobile})`,
        }}
      >
        <h2 className='title'>{showcaseData.speakerZx7.name}</h2>
        <a className='button button--transparent' href='/'>
          See product
        </a>
      </div>

      <div className={`${classes.showcaseItem} ${classes.showcaseItemC}`}>
        <div className='showcaseImgContainer'>
          <img src={showcaseData.yx1Earphones.images.mobile} alt='' />
        </div>
        <div className='showcaseCopyContainer'>
          <h2 className='title'>{showcaseData.yx1Earphones.name}</h2>
          <a className='button button--transparent' href='/'>
            See product
          </a>
        </div>
      </div>
    </div>
  )
}

export default Showcase
