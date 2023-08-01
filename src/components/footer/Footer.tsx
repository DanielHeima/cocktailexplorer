import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© {new Date().getFullYear()} Daníel Helgi</div>
    </div>
  )
}

export default Footer