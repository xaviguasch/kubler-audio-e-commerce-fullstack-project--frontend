import Link from 'next/link'

function Hero({ heroCopy }) {
  return (
    <div
      style={{
        backgroundImage: `url(${heroCopy.backgroundImg.mobile})`,
      }}
    >
      <div className='copy'>
        <span>{heroCopy.tag}</span>
        <h1>{heroCopy.productName}</h1>
        <p>{heroCopy.productCopy}</p>
        <Link href='/'>{heroCopy.buttonText}</Link>
      </div>
    </div>
  )
}

export default Hero
