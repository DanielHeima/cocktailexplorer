import React from 'react'
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

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Cocktail Explorer
      </Link>
      <div className={styles.links}>
        {/* <DarkModeToggle /> */}
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar