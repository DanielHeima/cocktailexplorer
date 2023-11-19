import { Drink } from "@/types/drink"
import { DrinkByIDResponse, DrinksResponse } from "@/types/responses"

export const getDrinkById = async (id: string | undefined): Promise<DrinkByIDResponse | undefined> => {
    if (!id) {
        console.error('Error: id is undefined');
        return;
    }
    const res = await fetch(`${process.env.BASE_URL}/api/drinks/${id}?secret=${process.env.API_SECRET}`, {
        method: 'GET',
    });

    console.log('getDrinkById res', res);

    if (!res.ok) {
        console.error('Error: getDrinkById response not ok.', res);
        return;
    }

    return res.json();
}

export const getHomeDrinks = async (): Promise<DrinksResponse | undefined> => {
    const res: Response = await fetch(`${process.env.BASE_URL}/api/drinks?secret=${process.env.API_SECRET}`, {
        method: 'GET',
    });

    if (!res.ok) {
        console.error('Error: getHomeDrinks response not ok.', res);
        return;
    }

    return res.json();
}