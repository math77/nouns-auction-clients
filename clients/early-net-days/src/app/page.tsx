'use client';

import Navbar from '@/components/Navbar/Navbar'
import Bid from '@/components/Bid/Bid'
import Noun from '@/components/Noun/Noun'

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.infogrid}>
        <Navbar />
        <div className={styles.content}>
          <div>
            <h1 style={{ color: '#FFC110', marginTop: '10px' }}>
              One Noun, Every Day, Forever.  
            </h1>
            <p>
              Behold, an infinite work of art! Nouns is a community-owned brand that 
              makes a positive impact by funding ideas and fostering collaboration. 
            </p>
            <Noun />
            <Bid />
          </div>
        </div>
      </div>
    </main>
  )
}
