import Head from 'next/head'
import CategoryCard from '../components/CategoryCard'
import styles from '../styles/Home.module.css';
import Banner from '../components/Banner';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Department of Physics BSMRSTU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style = {{position: 'relative'}} className={styles.main}>
       
        <Banner />
        <CategoryCard />
        <Footer />
      </main>
     
    </div>
  )
}
