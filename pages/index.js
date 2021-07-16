import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>モブ｜MOB</title>
        <link rel="icon" href="/bike.favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h2 className={styles.title}>チャリにパソコンをつみたい</h2>
      </header>

      <main className={styles.main}>
        <section className={styles.page1}>
          <div className={styles.mainImg1}>
            <Image src="/top1.jpg" alt="img" width={700} height={500} />
          </div>
          <div className={styles.mainImg2}>
            <Image src="/top2.jpg" alt="img" width={700} height={500} />
          </div>
        </section>
        <section className={styles.page2}>
          <text className={styles.storyText}>
            風を切ってビューンビューン走る、
            <br />
            <p>あの清々しくて心地よい感覚が好きで自転車に乗っている。</p>
            <br />
            そして、贅沢かもしれないけれど、
            <br />
            行く先々でパソコンを開いてクリエイティブな作業がしたい。
            <br />
            <p>お気に入りのカフェ、打ち合わせ先、そして仕事場で。</p>
            <br />
            ここで問題だ。
            <br />
            さてどうやって自転車でパソコンを持ち運ぶ？
            <br />
            リュックに入れる、うん、それが一般的だと思う。僕もそうしてきた。
            <br />
            でも、パソコンとかを入れた重いバックパックを背負って、
            <br />
            15分30分チャリ乗ったらさ、これからの夏は特にそうだけど、
            <br />
            目的地に着いた時には、背中は汗びっしょり、肩もちょっぴり疲れてる。
            <br />
            <p>これからが本番だと言うのに。</p>
            <br />
            それがずっと嫌で、悶々としてきた。
            <br />
            ググっても、良いものが見つからないし。
            <br />
            そんなある夜中2時に、突然この製品の青写真が頭に浮かんで。
          </text>
        </section>
        <section className={styles.page3}>
          <div>
            <Image src="/on-ride.jpg" alt="img" width={700} height={500} />
          </div>
        </section>
        <section className={styles.page4}>
          <div className={styles.productSpec1}>
            <Image
              src="/product-detail.jpg"
              alt="img"
              width={700}
              height={500}
            />
          </div>
          <div className={styles.productSpec2}>
            <Image
              src="/product-detail-2.jpg"
              alt="img"
              width={700}
              height={500}
            />
          </div>
        </section>
        <section className={styles.page5}>
          <h2 className={styles.releaseDateText}>8/5 より予約販売開始</h2>
          <a
            className={styles.alermBtn}
            href="http://eepurl.com/hDHrTz"
            target="_blank"
            rel="noopener noreferrer"
          >
            お知らせを受け取る
          </a>
        </section>
      </main>
      <footer>
        <p className={styles.footerText}>©️ モブ｜MOB</p>
      </footer>
    </div>
  );
}
