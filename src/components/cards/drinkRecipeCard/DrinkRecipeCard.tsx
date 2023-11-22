import { Drink } from '@/types/drink'
import { getIngredients, getMeasurements } from '@/utils/drinkData';
import styles from './drinkrecipecard.module.css'
import React from 'react'

const DrinkRecipeCard = (props: { drink: Drink }) => {
    const drink = props.drink;

    const ingredients: string[] = getIngredients(drink);
    const measurements: string[] = getMeasurements(drink);

    if ((ingredients.length === 0) || (measurements.length === 0)) {
        return (
            <></>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.ingredients}>
                {ingredients.map((val, idx) => {
                    return (
                        <div key={idx} className={styles.ingName}>
                            🕺 {val}
                        </div>
                    )
                })}
            </div>

            <div className={styles.measurements}>
                {measurements.map((val, idx) => {
                    return (
                        <div key={idx} className={styles.measurement}>
                            {val}
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default DrinkRecipeCard;