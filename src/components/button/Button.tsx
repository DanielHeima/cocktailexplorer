import React from 'react'
import styles from './button.module.css'

type ButtonProps = {
  text: string,
  clickHandler: () => void
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={styles.button}
      onClick={props.clickHandler}
      role="button">
      {props.text}
    </button>
  )
}

export default Button