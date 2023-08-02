import Image from 'next/image'
import styles from './page.module.css'
import EyeCatcher from '@/components/eyecatcher/EyeCatcher'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <EyeCatcher />
        <div className={styles.content}>
        
        </div>
      </div>
    </>
  )
}
