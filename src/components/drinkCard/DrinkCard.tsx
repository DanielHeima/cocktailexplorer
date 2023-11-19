import React from 'react'
import { Drink } from '@/types/drink'
import { DrinkByIDResponse } from '@/types/responses'
import Image from 'next/image'
import Link from 'next/link'
import styles from './drinkcard.module.css'
import { getIngredients } from '@/utils/drinkData'
import { getDrinkById } from '@/services/drinkService'

type DrinkCardProps = {
  id?: string | undefined;
  drink?: Drink | undefined;
}

const DrinkCard = async (props: DrinkCardProps) => {

  let drink: Drink | undefined;
  if (props.id) {
    const res: DrinkByIDResponse | undefined = await getDrinkById(props.id);
    drink = res?.data?.drinks?.[0];
  } else {
    drink = props.drink;
  }

  if (!drink) {
    return;
  }

  return (
    <div className={styles.container}>
      <Link href={`/drinks/${drink.idDrink}`}>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <Image
              src={drink.strDrinkThumb ? drink.strDrinkThumb : ''}
              alt={drink.strDrink ? drink.strDrink : ''}
              style={{objectFit: "cover"}}
              fill={true}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.title}>
              <h2>{drink.strDrink}</h2>
            </div>
            <div className={styles.desc}>
              <div className={styles.ingredients}>
              {getIngredients(drink).map((value, idx, arr) => {
                return (
                  <span key={idx}>{idx < arr.length - 1 ? value + ' · ' : value}</span>
                )
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