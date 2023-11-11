import Image from 'next/image'
import Grid from '@/components/grid/Grid';
import styles from './page.module.css'
import EyeCatcher from '@/components/eyecatcher/EyeCatcher'
import DrinkCard from '@/components/drinkCard/DrinkCard';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <EyeCatcher />
        <div className={styles.content}>
          <Grid>
            <DrinkCard id={1} />
            <DrinkCard id={2} />
            <DrinkCard id={3} />
            <DrinkCard id={4} />
            <DrinkCard id={4} />
            <DrinkCard id={4} />
            <DrinkCard id={4} />
            <DrinkCard id={4} />
            <DrinkCard id={4} />
            <DrinkCard id={4} />
          </Grid>
        </div>
      </div>
    </>
  )
}
