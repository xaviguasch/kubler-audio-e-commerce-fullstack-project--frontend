import Link from 'next/link'

function Navigation() {
  return (
    <ul>
      <li>
        <Link href='/home'>home</Link>
      </li>
      <li>
        <Link href='/headphones'>headphones</Link>
      </li>
      <li>
        <Link href='/speakers'>speakers</Link>
      </li>
      <li>
        <Link href='/earphones'>earphones</Link>
      </li>
    </ul>
  )
}

export default Navigation
