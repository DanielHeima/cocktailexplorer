import React from 'react'
import styles from './page.module.css'
import { getDrinkById } from '@/services/drinkService'
import { DrinkByIDResponse } from '@/types/responses'
import { Drink } from '@/types/drink'

type DrinkParams = {
  params: {id: string}
}

const DrinkPage = async ({params}: DrinkParams) => {
  const res: DrinkByIDResponse | undefined = await getDrinkById(params.id);
  const drink: Drink | undefined = res?.data?.drinks?.[0];

  if (!drink) {
    return;
  }

  return (
    <div>{drink.strDrink}</div>
  )
}

export default DrinkPage