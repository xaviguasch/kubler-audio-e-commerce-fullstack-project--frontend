import classes from './showcase.module.css'

function Showcase({ showcaseData }) {
  console.log(showcaseData)
  return (
    <div>
      <div>
        <h2>{showcaseData.speakerZx9.name}</h2>
        <p>{showcaseData.speakerZx9.copy}</p>
        <img src={showcaseData.speakerZx9.images.desktop} alt='' />
      </div>
      <div>
        <h2>{showcaseData.speakerZx7.name}</h2>
        <img src={showcaseData.speakerZx7.images.desktop} alt='' />
      </div>
      <div>
        <h2>{showcaseData.yx1Earphones.name}</h2>
        <img src={showcaseData.yx1Earphones.images.desktop} alt='' />
      </div>
    </div>
  )
}

export default Showcase
