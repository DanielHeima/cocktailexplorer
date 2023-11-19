export interface Root {
  drinks: Drink[];
}

export interface Drink {
  idDrink: string;
  strDrink: string | null;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string | null;
  strIBA: string | null;
  strAlcoholic: string | null;
  strGlass: string | null;
  strInstructions: string | null;
  strInstructionsES: string | null;
  strInstructionsDE: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  "strInstructionsZH-HANS": string | null;
  "strInstructionsZH-HANT": string | null;
  strDrinkThumb: string | null;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strImageSource: string | null;
  strImageAttribution: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
}

export enum IngredientKeyEnum {
  "strIngredient1",
  "strIngredient2",
  "strIngredient3",
  "strIngredient4",
  "strIngredient5",
  "strIngredient6",
  "strIngredient7",
  "strIngredient8",
  "strIngredient9",
  "strIngredient10",
  "strIngredient11",
  "strIngredient12",
  "strIngredient13",
  "strIngredient14",
  "strIngredient15",
}

export enum MeasurementKeyEnum {
  "strMeasure1",
  "strMeasure2",
  "strMeasure3",
  "strMeasure4",
  "strMeasure5",
  "strMeasure6",
  "strMeasure7",
  "strMeasure8",
  "strMeasure9",
  "strMeasure10",
  "strMeasure11",
  "strMeasure12",
  "strMeasure13",
  "strMeasure14",
  "strMeasure15",
}

export enum MeasureKeyEnum {
  "strMeasure1",
  "strMeasure2",
  "strMeasure3",
  "strMeasure4",
  "strMeasure5",
  "strMeasure6",
  "strMeasure7",
  "strMeasure8",
  "strMeasure9",
  "strMeasure10",
  "strMeasure11",
  "strMeasure12",
  "strMeasure13",
  "strMeasure14",
  "strMeasure15",
}

export type IngredientKeyType =
  | "strIngredient1"
  | "strIngredient2"
  | "strIngredient3"
  | "strIngredient4"
  | "strIngredient5"
  | "strIngredient6"
  | "strIngredient7"
  | "strIngredient8"
  | "strIngredient9"
  | "strIngredient10"
  | "strIngredient11"
  | "strIngredient12"
  | "strIngredient13"
  | "strIngredient14"
  | "strIngredient15";

export type KeyNumber =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15;
