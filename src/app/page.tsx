import Image from 'next/image'
import Grid from '@mui/material/Grid';
import styles from './page.module.css'
import EyeCatcher from '@/components/eyecatcher/EyeCatcher'
import DrinkCard from '@/components/drinkCard/DrinkCard';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <EyeCatcher />
        <div className={styles.content}>
          {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}> */}
          <DrinkCard id={1} />
          {/* </Grid>
            <Grid item xs={6}>
              <DrinkCard id={2}/>
            </Grid>
            <Grid item xs={6}>
              <DrinkCard id={3}/>
            </Grid>
            <Grid item xs={6}>
              <DrinkCard id={4}/>
            </Grid>
          </Grid>    */}
        </div>
      </div>
    </>
  )
}
