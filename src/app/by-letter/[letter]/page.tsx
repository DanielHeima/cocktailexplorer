import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import {  getDrinksByFirstLetter } from '@/services/drinkService'
import {  DrinksResponse } from '@/types/responses'
import { Drink } from '@/types/drink'
import { notFound } from 'next/navigation'
import Letters from '@/components/letters/Letters'
import { alphabet } from '@/components/letters/Letters'
import DrinksInAGrid from '@/components/drinksInAGrid/DrinksInAGrid'
import EyeCatcher from '@/components/eyecatcher/EyeCatcher'

type Params = {
  params: { letter: string }
}

const ByLetterPage = async ({ params }: Params) => {
  const letter = params.letter;
  if (!alphabet.includes(letter)) {
    return notFound();
  }

  const res: DrinksResponse | undefined = await getDrinksByFirstLetter(letter);
  const drinks: Drink[] | undefined = res?.data?.drinks;

  return (
    <div>
      <DrinksInAGrid drinks={drinks} />
      <Letters />
    </div>
  )
}

export default ByLetterPage
