"use client"

import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Something",
    url: "/",
  },
  {
    id: 3,
    title: "Another thing",
    url: "/",
  },
  {
    id: 4,
    title: "Cocktails",
    url: "/",
  }
];

const Navbar = (): React.JSX.Element => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);    
  }

  return (
    <div className={`${styles.container} ${scrolled ? styles.scrolled : ""}`} >
      <Link href="/" className={styles.logo}>
        Cocktail Explorer
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div >
  )
}

export default Navbar