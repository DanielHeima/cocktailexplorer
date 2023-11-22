import { Drink } from "@/types/drink"
import { DrinkByIDResponse, DrinksResponse } from "@/types/responses"

export const getDrinkById = async (id: string | undefined): Promise<DrinkByIDResponse | undefined> => {
    if (!id) {
        console.error('Error: id is undefined');
        return;
    }
    const res = await fetch(`${process.env.BASE_URL}/api/drinks/${id}?token=${process.env.API_SECRET}`, {
        method: 'GET',
    });

    if (!res.ok) {
        console.error('Error: getDrinkById response not OK. Status: ', res.status);
        return;
    }

    return res.json();
}

export const getHomeDrinks = async (): Promise<DrinksResponse | undefined> => {
    const res: Response = await fetch(`${process.env.BASE_URL}/api/drinks?token=${process.env.API_SECRET}`, {
        method: 'GET',
    });

    if (!res.ok) {
        console.error('Error: getHomeDrinks response not OK.', res.status);
        return;
    }

    return res.json();
}

export const getDrinkJsonByNameSearch = async (keyword: string): Promise<DrinksResponse | undefined> => {
    const res: Response = await fetch(`/api/drinks/search/${keyword}?token=${process.env.API_SECRET}`, {
        method: 'GET',
    });

    if (!res.ok) {
        console.error('Error: getDrinkByNameSearch response not OK.', res.status);
        return;
    }

    return res.json();
}

export const getDrinksByNameSearch = async (keyword: string): Promise<Drink[] | undefined> => {
    const drinkJson: DrinksResponse | undefined = await getDrinkJsonByNameSearch(keyword);
    
    return drinkJson?.data?.drinks;
   
}

