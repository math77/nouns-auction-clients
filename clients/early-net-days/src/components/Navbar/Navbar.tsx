import Image from 'next/image'
import Link from 'next/link'

import styles from './Navbar.module.css'


const Navbar = () => {
  return (
    <div>
      <div className={styles.header}>
        <Link href="/">
          <Image
            src="/logo-nouns2.gif"
            alt="Nouns Logo"
            width={320}
            height={102}
            priority
          />
        </Link>
        <button className={styles.connect}>
          connect e-wallet
        </button>
      </div>
      <div className={styles.menu}>
        <Link href="/">home</Link>
        <Link href="/nouns">all nouns</Link>
        <a href="https://nouns.wtf/" target="_blank">nouns wtf</a>
        <a href="https://twitter.com/nounsdao" target="_blank">nouns twitter</a>
      </div>
    </div>
  )
}

export default Navbar