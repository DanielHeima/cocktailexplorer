import React from 'react'
import { Drink } from '@/types/drink'
import Image from 'next/image'
import styles from './drinkcard.module.css'
import Link from 'next/link'
import { getIngredients } from '@/app/utils/drinkData'

type DrinkCardProps = {
  id?: number;
  drink?: Drink;
}

const getData = async () => {
  const res = await fetch("http://127.0.0.1:3000/api/test?secret=123", {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();
}

type Data = {
  data: {
    drinks: Drink[]
  }
}

const DrinkCard = async (props: DrinkCardProps) => {

  // if (!props.id) {
  // fetch by id
  const data: Data | undefined = await getData();
  const drinks: Drink[] | undefined = data?.data?.drinks;
  let drink: Drink | undefined;
  if (drinks) {
    drink = drinks[0];
  }
  // } 
  // || !props.drink) {  
  if (!drink) {
    return
    <>
    </>
  }

  console.log(getIngredients(drink));

  return (
    <div className={styles.container}>
      <Link href={`/drinks/${drink.idDrink}`}>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <Image
              src={drink.strDrinkThumb ? drink.strDrinkThumb : ''}
              alt={drink.strDrink ? drink.strDrink : ''}
              objectFit='cover'
              fill={true}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.title}>
              <h1>{drink.strDrink}</h1>
            </div>
            <div className={styles.desc}>
              <div className={styles.ingredients}>
              {getIngredients(drink).map((value, idx, arr) => {
                return <>
                  {idx < arr.length - 1 ? value + ' · ' : value}
                </>
              })}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default DrinkCard