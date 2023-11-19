import Image from 'next/image'
import Grid from '@/components/grid/Grid';
import styles from './page.module.css'
import EyeCatcher from '@/components/eyecatcher/EyeCatcher'
import DrinkCard from '@/components/drinkCard/DrinkCard';
import { Drink } from '@/types/drink';
import { DrinksResponse } from '@/types/responses';
import { getHomeDrinks } from '@/services/drinkService';

export default async function Home() {
  const res: DrinksResponse | undefined = await getHomeDrinks();
  const drinks: Drink[] | undefined = res?.data?.drinks;

  if (!drinks) {
    return;
  }
  
  return (
    <>
      <div className={styles.container}>
        <EyeCatcher />
        <div className={styles.content}>
          <Grid>
            {drinks.map((drink: Drink, idx: number) => {
              return <>
                <DrinkCard 
                  key={idx} 
                  drink={drink} />
              </>
            })}
          </Grid>
        </div>
      </div>
    </>
  )
}
