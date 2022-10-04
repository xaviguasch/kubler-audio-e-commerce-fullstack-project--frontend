import classes from './company-motto.module.css'

const CompanyMotto = ({ companyMottoData }) => {
  return (
    <div className={`${classes.CompanyMotto} h-padding`}>
      <div className={classes.imageContainer}>
        <img src={companyMottoData.images.mobile} alt='' />
      </div>
      <div className={classes.copyContainer}>
        <h2 className='title title--s'>{companyMottoData.title}</h2>
        <p className='text helper-text-diluted-black'>{companyMottoData.copy}</p>
      </div>
    </div>
  )
}

export default CompanyMotto
