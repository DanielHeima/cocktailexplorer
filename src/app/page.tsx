import Image from 'next/image'
import Grid from '@/components/grid/Grid';
import styles from './page.module.css'
import EyeCatcher from '@/components/eyecatcher/EyeCatcher'
import DrinkCard from '@/components/cards/drinkCard/DrinkCard';
import { Drink } from '@/types/drink';
import { DrinksResponse } from '@/types/responses';
import { getHomeDrinks } from '@/services/drinkService';
import DrinksInAGrid from '@/components/drinksInAGrid/DrinksInAGrid';
import Link from 'next/link';
import Letters from '@/components/letters/Letters';

export default async function Home() {
  const res: DrinksResponse | undefined = await getHomeDrinks();
  const drinks: Drink[] | undefined = res?.data?.drinks;

  return (
    <div className={styles.container}>
      <EyeCatcher />
      <div className={styles.content}>
        <DrinksInAGrid drinks={drinks} />
        <Letters />
      </div>
    </div>
  )
}
