'use client'
import SearchBar from '@/components/searchbar/SearchBar'
import React, { ChangeEvent, Suspense, useEffect, useRef, useState } from 'react'
import styles from './page.module.css'
import { Drink } from '@/types/drink'
import { useRouter } from 'next/navigation'
import { getDrinksByNameSearch } from '@/services/drinkService'
import { DrinksResponse } from '@/types/responses'
import Grid from '@/components/grid/Grid'
import DrinkCard from '@/components/cards/drinkCard/DrinkCard'
import DrinksInAGrid from '@/components/drinksInAGrid/DrinksInAGrid'
import { LinearProgress, CircularProgress } from '@mui/material'

const SearchPage = () => {
  const [inputText, setInputText] = useState("");
  const [drinks, setDrinks] = useState<Drink[]>([])
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [nothingFound, setNothingFound] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  useEffect(() => {
    console.log('search useeffect');
    if (!inputText)
      return;

    setIsLoading(true);
    fetch(`/api/drinks/search/${inputText}?token=${process.env.API_SECRET}`)
      .then((res: Response) => {
        setNothingFound(false);

        if (!res.ok) {
          console.error('1 SearchPage error in useEffect');
          setIsError(true);
          setIsLoading(false);
          return;
        }
        return res.json();
      })
      .then((dr: DrinksResponse | undefined) => {
        console.log(dr);
        if (!dr) {
          return;
        }
        const drinksHopefully: Drink[] = dr?.data?.drinks;
        console.log(drinksHopefully);
        if (drinksHopefully) {
          setDrinks(drinksHopefully);
        } else {
          setNothingFound(true);
        }

        setIsLoading(false);
        return;
      })
      .catch(e => {
        console.log(e);
      })

  }, [toggleSearch])

  const searchHandler = () => {
    console.log('toggle');
    setToggleSearch(!toggleSearch);
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }

  const handleEnterKey = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter') {
      searchHandler();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEnterKey)
    return () => {
      document.removeEventListener('keydown', handleEnterKey)
    }
  }, [inputText])

  return (
    <>
      <div className={`${styles.searchBarContainer}`} >
        <div className={`${drinks.length > 0 ? styles.higher : ''} ${styles.searchBar}`}>
          <SearchBar
            searchHandler={searchHandler}
            handleInputChange={handleInputChange}
          />
          {isLoading && <div className={styles.loadingContainer}>
            <LinearProgress />
          </div>}
        </div>
      </div>
      <div className={styles.container}>
        {drinks.length > 0 &&
          (
            <Suspense fallback={<CircularProgress/>}>
              <div id="results" className={styles.results}>
                <h1 className={styles.resultsTitle}>Results</h1>
                <DrinksInAGrid drinks={drinks} />
              </div>
            </Suspense>
          )}
      </div>
    </>
  )
}

export default SearchPage