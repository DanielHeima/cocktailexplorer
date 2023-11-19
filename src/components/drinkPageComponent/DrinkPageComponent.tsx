import { Drink } from "@/types/drink";
import React from "react";
import styles from "./drinkpagecomponent.module.css";
import Image from 'next/image';
import DrinkRecipeCard from "../drinkRecipeCard/DrinkRecipeCard";

export const DrinkPageComponent = (props: { drink: Drink; }) => {
    const drink = props.drink;
    return (
        <div className={styles.container}>
            <div className={styles.recipe}>
                <div className={styles.text}>
                    <div className={styles.title}>
                        <h1>{drink.strDrink}</h1>
                    </div>
                    <div className={styles.recipeCard}>
                        <DrinkRecipeCard drink={drink} />
                    </div>
                    <div className={styles.desc}>
                        <p>🍸 {drink.strInstructions}</p>
                    </div>
                </div>
                <div className={styles.pictureContainer}>
                    <div className={styles.picture}>
                        <Image src={drink.strDrinkThumb ? drink.strDrinkThumb : ''}
                            alt={'Drink Thumbnail'}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} // optional
                        />
                    </div>
                    <div className={styles.pictureAttr}>
                        <p>{drink.strImageAttribution ? '©' + drink.strImageAttribution : ''}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
