import { Drink, IngredientKeyType,IngredientKeyEnum, KeyNumber } from '@/types/drink'

export const getIngredients= (drink: Drink): string[] => {
  let ingredients: string[] = [];

  Object.keys(IngredientKeyEnum).forEach((key) => {
    let ing: string | null = drink[key as keyof Drink];
    if (ing) {
      ingredients.push(ing);
    }
  })

  return ingredients;
}
