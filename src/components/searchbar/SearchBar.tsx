'use client'

import Button from '@/components/button/Button'
import styles from './searchbar.module.css'
import { ChangeEvent } from 'react'


type SearchBarProps = {
  searchHandler: () => void
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = (props: SearchBarProps) => {
  return (
      <div className={styles.container}>
        <input
          onChange={props.handleInputChange}
          autoFocus={true}
          className={styles.input}
          placeholder='What do you fancy...'>
        </input>
        <div className={styles.button}>
          <Button
            clickHandler={props.searchHandler}
            text='Go' />
        </div>
      </div>
  )
}

export default SearchBar