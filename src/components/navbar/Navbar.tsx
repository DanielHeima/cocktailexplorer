"use client"

import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

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
    checkScrollStatus();
    window.addEventListener('scroll', checkScrollStatus)
    return () => window.removeEventListener('scroll', checkScrollStatus)
  }, [])

  const checkScrollStatus = () => {
    setScrolled(window.scrollY > 0);
  }

  return (
    <div className={`${styles.container} ${scrolled ? styles.scrolled : ""}`} >
      <div>
        <Link href="/" className={styles.logo}>
          <div className={styles.imgContainer}>
            <Image src="/cocktailcatcher.png"
            fill={true} 
            objectFit='contain' 
            alt="Logo" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
           Cocktail Explorer
        </Link>
      </div>
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