import { Drink } from "./drink"

export interface DrinksResponse {
    data: {
        drinks: Drink[]
    }
}

export interface DrinkByIDResponse {
    data: {
        drinks: {
            0: Drink
        }
    }
}