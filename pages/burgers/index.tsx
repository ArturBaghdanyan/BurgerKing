import Link from "next/link";
import styles from '../../styles/burgers.module.css';
import Image from 'next/image';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/items');
  const data = await res.json();

  return {
    props: { burgers: data }
  }
};


const Burgers = ({ burgers }: any) => {
  return (
    <div>
      <h1>Our burgers</h1>
      <p>
        {burgers.map((burger: any) => (
          <Link href={`/burgers/${burger.id}`} key={burger.id}>
            <div className={styles.burgerCard}>
            <div className={styles.imageContainer}>
              <Image
                src={`${burger.image}`}
                alt={`${burger.image}`}
                fill
              />
            </div>
            <div>
              <h3>{burger.name}</h3>
              <p>{burger.desc}</p>
            </div>
            </div>
          </Link>
      ))}
        <Link href='/'>Come back initial page</Link>
      </p>
    </div>
  )
}
export default Burgers;
