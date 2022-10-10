import classes from './section-header.module.css'

function SectionHeader({ familyName }) {
  return (
    <div className={`${classes.SectionHeader} h-padding`}>
      <h2 className='title title--s helper-text-white'>{familyName}</h2>
    </div>
  )
}

export default SectionHeader
