import React from 'react'
import styles from './grid.module.css'

const Grid = ({
  children,
}: {
  children: React.ReactNode  
}) => {
  return (
    <div className={styles.content}>
      {children}
    </div>
  )
}

export default Grid