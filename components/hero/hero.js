function Hero({ heroCopy }) {
  const backgroundImgDesktop = heroCopy.backgroundImg.desktop

  return (
    <div>
      <span>{heroCopy.tag}</span>
      <h1>{heroCopy.productName}</h1>
      <p>{heroCopy.productCopy}</p>
      <a href='/'>{heroCopy.buttonText}</a>
      <img src={backgroundImgDesktop} alt='' />
    </div>
  )
}

export default Hero
