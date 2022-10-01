import classes from './company-motto.module.css'

const CompanyMotto = ({ companyMottoData }) => {
  return (
    <div>
      <div>
        <h2>{companyMottoData.title}</h2>
        <p>{companyMottoData.copy}</p>
      </div>
      <div>
        {' '}
        <img src={companyMottoData.images.desktop} alt='' />
      </div>
    </div>
  )
}

export default CompanyMotto
