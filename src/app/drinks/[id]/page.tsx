import React from 'react'
import styles from './page.module.css'
import { getDrinkById } from '@/services/drinkService'
import { DrinkByIDResponse } from '@/types/responses'
import { Drink } from '@/types/drink'
import { notFound } from 'next/navigation'
import { DrinkPageComponent } from "@/components/drinkPageComponent/DrinkPageComponent"

type DrinkParams = {
  params: {id: string}
}

const DrinkPage = async ({params}: DrinkParams) => {
  const res: DrinkByIDResponse | undefined = await getDrinkById(params.id);
  const drink: Drink | undefined = res?.data?.drinks?.[0];

  if (!drink) {
    return notFound();
  }

  return (
    <DrinkPageComponent drink={drink}/>
  )
}

export default DrinkPage