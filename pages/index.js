import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mob</title>
        <link rel="icon" href="/bike.favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h2 className={styles.title}>チャリにパソコンをのせたい</h2>
      </header>

      <main className={styles.main}>
        <div className={styles.mainImg1}>
          <Image src="/sample-photo-1.png" alt="img" width={700} height={500} />
        </div>
        <div className={styles.mainImg2}>
          <Image
            src="/Adobe Illustrator 2021 2021-04-15 at 18.54.19@2x.png"
            alt="img"
            width={700}
            height={500}
          />
        </div>
      </main>
    </div>
  );
}
