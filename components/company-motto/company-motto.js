import classes from './company-motto.module.css'

const CompanyMotto = ({ companyMottoData }) => {
  return (
    <div className={classes.CompanyMotto}>
      <div className={classes.imageContainer}>
        <picture>
          <source
            srcSet={companyMottoData.images.desktop}
            media='(min-width: 900px)'
            alt=''
          />
          <source
            srcSet={companyMottoData.images.tablet}
            media='(min-width: 600px)'
            alt=''
          />
          <img src={companyMottoData.images.mobile} alt='' />
        </picture>
      </div>
      <div className={classes.copyContainer}>
        <h2 className='title'>{companyMottoData.title}</h2>
        <p className='text helper-text-diluted-black'>{companyMottoData.copy}</p>
      </div>
    </div>
  )
}

export default CompanyMotto
