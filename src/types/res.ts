import { Drink } from "./drink"

export interface Res {
    data: {
        drinks: Drink[]
    }
}