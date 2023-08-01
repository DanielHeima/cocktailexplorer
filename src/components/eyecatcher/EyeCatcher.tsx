import React from 'react'
import Image from 'next/image'
import styles from './eyecatcher.module.css'

const rollers: string[] = ["Tickle", "Catch", "Suit", "Take"]

const EyeCatcher = () => {
  return (
    <div className={styles.container}>
      <div className={styles.split}>
        <div className={styles.texts}>
          <div className={styles.logoAndTitle}>
            <div className={styles.imgContainer}>
              <Image src="/coctailcatcher.png" fill={true} objectFit='contain' alt="Logo" />
            </div>
            <h1 className={styles.title}>Cocktail explorer</h1>
          </div>
          <div className={styles.subTitle}>
            {/* <TextLoop springConfig={{ stiffness: 180, damping: 8 }}> */}
            {/* <div>Tickle</div> */}
            {/* <div>Catch</div>
            <div>Suit</div>
          <div>Take</div> */}
            {/* </TextLoop> */}
            <p>Tickle your fancy!</p>
          </div>
          <p className={styles.desc}>All your favourite cocktails in one place.</p>
        </div>
      </div>
      <div className={styles.split}>
        <div className={styles.imgContainer}>
          {/* <Image src="/coctailcatcher.png" fill={true} objectFit='contain' alt="Logo" /> */}
        </div>
      </div>
    </div>
  )
}

export default EyeCatcher