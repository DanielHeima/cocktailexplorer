import Image from 'next/image'
import Grid from '@/components/grid/Grid';
import styles from './page.module.css'
import EyeCatcher from '@/components/eyecatcher/EyeCatcher'
import DrinkCard from '@/components/drinkCard/DrinkCard';
import { Drink } from '@/types/drink';
import { Res } from '@/types/res';

const getHomeDrinks = async (): Promise<Res | undefined> => {
  const res = await fetch(`${process.env.BASE_URL}/api/drinks?secret=${process.env.API_SECRET}`, {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
    // return;
  }

  return res.json();
}

export default async function Home() {
  const res = await getHomeDrinks();
  const drinks: Drink[] | undefined = res?.data?.drinks;
  console.log(res);
  // const drinks: Drink[] = data?.drinks;
  // console.log(data?.drinks);

  if (!drinks) {
    return <>
    </>
  }
  
  return (
    <>
      <div className={styles.container}>
        <EyeCatcher />
        <div className={styles.content}>
          <Grid>
            {drinks.map((drink: Drink, idx: number) => {
              return <>
                <DrinkCard drink={drink} />
              </>
            })}
          </Grid>
        </div>
      </div>
    </>
  )
}
