import { Drink, IngredientKeyEnum, MeasurementKeyEnum } from '@/types/drink'

export const getIngredients = (drink: Drink): string[] => {
  const ingredients: string[] = [];

  Object.keys(IngredientKeyEnum).forEach((key, idx) => {
    const ing: string | null = drink[key as keyof Drink];
    if (ing) {
      ingredients.push(ing);
    }
  })

  return ingredients;
}

export const getMeasurements = (drink: Drink): string[] => {
  const measurements: string[] = [];

  Object.keys(MeasurementKeyEnum).forEach((key, idx) => {
    const meas: string | null = drink[key as keyof Drink];
    if (meas) {
      measurements.push(meas);
    }
  })

  return measurements;
}

export const getTags = (drink: Drink): string[] => {
  if (drink.strTags) {
    return drink.strTags.split(',');
  } 
  return [];
}
