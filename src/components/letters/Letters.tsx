import Link from "next/link";
import styles from './letters.module.css'


const Letters = async () => {
  return <div className={styles.container}>
    {alphabet.map((letter, idx, arr) => {
      return <div className={styles.letterAndSlash} key={idx}>
        <Link href={`/by-letter/${letter}`}><span className={styles.letter}>{letter}</span>{idx < arr.length - 1 ? " / " : ""}</Link>
      </div>
    })}
  </div>
}

export const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default Letters;