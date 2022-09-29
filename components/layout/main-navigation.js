import Link from 'next/link'

import classes from './main-navigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <div className={classes.logo}>KublerAudio</div>
        </a>
      </Link>
      <nav>
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

        <button>Shop</button>
      </nav>
    </header>
  )
}

export default MainNavigation
