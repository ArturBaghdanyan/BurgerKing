import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>burgers</title>
    </Head>
      <div className={`${styles.container}`}>
        <h1 className={`${styles.title}`}>Welcome Burger King page</h1>
        <div className={styles.mainImage}>
          <Image src='/assets/fatburger.png' alt="fatburger" width={400} height={300} />
        </div>
        <Link href='/burgers' className={styles.btn}>All Burgers</Link>
      </div>
    </>
  )
}
