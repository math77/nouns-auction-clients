import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.infogrid}>
        <div className={styles.header}>
          <Image
            src="/logo-nouns.gif"
            alt="Nouns Logo"
            className={styles.vercelLogo}
            width={420}
            height={122}
            priority
          />
          <button style={{ padding: '0.3rem' }}>
            connect e-wallet
          </button>
        </div>
        <div className={styles.content}>
          <div>
            <h1 style={{ color: '#FFC110', marginTop: '10px' }}>
              One Noun, Every Day, Forever.  
            </h1>
            <p>
              Behold, an infinite work of art! Nouns is a community-owned brand that 
              makes a positive impact by funding ideas and fostering collaboration. 
            </p>
            <h3 style={{ marginTop: '10px', textAlign: 'center' }}>noun #789</h3>
            <Image
              src="/noun.png"
              alt="noun test"
              width={350}
              height={350}
              priority
            />
            <h3>current bid: Ξ 0.03</h3>
            <input typee="text" placeholder="Ξ 0.01 or more" required />
            <button style={{ padding: '0.4rem' }}>place bid</button>
            <h2>Bid history</h2>
          </div>
        </div>
      </div>
    </main>
  )
}
