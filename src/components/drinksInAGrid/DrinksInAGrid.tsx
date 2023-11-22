import { Drink } from '@/types/drink'
import React from 'react'
import Grid from '../grid/Grid'
import DrinkCard from '../cards/drinkCard/DrinkCard'

type DrinksInAGridProps = {
    drinks: Drink[]
}


const DrinksInAGrid = (props: DrinksInAGridProps) => {
    return (
        <Grid>
            {props.drinks.map((drink: Drink, idx: number) => {
                return (
                    <div key={idx}>
                        <DrinkCard drink={drink} />
                    </div>)
            })}
        </Grid>
    )
}

export default DrinksInAGrid