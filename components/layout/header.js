import Link from 'next/link'
import Navigation from '../ui/navigation'

import classes from './header.module.css'

function Header() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <div className={classes.logo}>KublerAudio</div>
        </a>
      </Link>
      <nav>
        <Navigation />

        <button>Shop</button>
      </nav>
    </header>
  )
}

export default Header
