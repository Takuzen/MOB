import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MOB</title>
        <link rel="icon" href="/bike.favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h2 className={styles.title}>チャリにパソコンをつみたい</h2>

        <a
          className={styles.logoInstagram}
          href="https://www.instagram.com/mobtokyo/"
        >
          <Image
            src="/logo-instagram.svg"
            alt="logo-instagram"
            width={30}
            height={30}
          ></Image>
        </a>
      </header>

      <main className={styles.main}>
        <section className={styles.campaignHeader}>
          <a
            className={styles.campaignText}
            href="http://eepurl.com/hDHrTz"
            target="_blank"
            rel="noopener noreferrer"
          >
            マクアケにて 8.17 より予約開始
          </a>
        </section>
        <section className={styles.page1}>
          <div className={styles.mainImg}>
            <Image src="/main-img.png" alt="img" width={1439} height={636} />
          </div>
          <div className={styles.mainImgMobile}>
            <Image
              src="/mainImgMobile.png"
              alt="img"
              width={376}
              height={399}
            />
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
            さてどうやって自転車でパソコンを持ち運ぶ？
            <br />
            リュックに入れる、うん、それが一般的だと思う。僕もそうしてきた。
            <br />
            でも、パソコンとかを入れた重いバックパックを背負って、
            <br />
            15分30分チャリ乗ったらさ、夏は特にそうだけど、
            <br />
            目的地に着いた時には、背中は汗びっしょり、肩もちょっぴり疲れてる。
            <br />
            <p>これからが本番だと言うのに。</p>
            <br />
            それがずっと嫌で、悶々としてきた。
            <br />
            ググっても、良いものが見つからないし。
            <br />
            そんなある夜中2時に、ふとこの製品の青写真が頭に浮かんで。
          </text>
        </section>
        <section className={styles.page3}>
          <div className={styles.gif}>
            <Image src="/7s-use.gif" alt="gif" width={700} height={500} />
          </div>
        </section>
        <section className={styles.page4}>
          <div className={styles.productSpec1}>
            <Image
              src="/product-sq-omote.png"
              alt="img"
              width={400}
              height={400}
            />
          </div>
          <div className={styles.productSpec2}>
            <Image
              src="/product-sq-ura.png"
              alt="img"
              width={400}
              height={400}
            />
          </div>
        </section>
        <section className={styles.page5}>
          <h2 className={styles.contactText}>お問い合わせ</h2>
          <p>takuzen[at]gmail.com</p>
        </section>
      </main>
      <footer>
        <p className={styles.footerText}></p>
      </footer>
    </div>
  );
}
