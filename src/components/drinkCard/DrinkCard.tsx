import React from 'react'
import { Drink } from '@/types/drink'
import Image from 'next/image'
import styles from './drinkcard.module.css'
import Link from 'next/link'
import { getIngredients } from '@/utils/drinkData'
import { Res } from '@/types/res'

type DrinkCardProps = {
  id?: string | undefined;
  drink?: Drink | undefined;
}

type DrinkByIDRes = {
  data:{
    drinks: {
      0: Drink
    }
  }
}

const getDrinkById = async (id: string | undefined): Promise<DrinkByIDRes | undefined>  => {
  if (!id) {
    return;
  }
  const res = await fetch(`${process.env.BASE_URL}/api/drinks/${id}?secret=${process.env.API_SECRET}`, {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();
}

const DrinkCard = async (props: DrinkCardProps) => {

  let drink: Drink | undefined;
  if (props.id) {
  // fetch by id
    const res: DrinkByIDRes | undefined = await getDrinkById(props.id);
    console.log(res);
    const drink: Drink | undefined = res?.data?.drinks?.[0];

    console.log(drink);
  } else {
    drink = props.drink;
  }

  // } 
  // || !props.drink) {  
  if (!drink) {
    return
    <>
    <p>asdf</p>
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