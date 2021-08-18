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
            href="https://us6.list-manage.com/contact-form?u=658c42124313d8aff4cb34f19&form_id=0394e06ff568255d12c480cac4ae4c01"
          >
            現在予約受付中！
          </a>
        </section>
        <section className={styles.page1}>
          <div className={styles.mainImg}>
            <Image src="/main-img.png" alt="img" width={1439} height={636} />
          </div>
          <div className={styles.mainImgMobile}>
            <Image
              src="/mob-hp-top-mobile.png"
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
            行く先々でパソコンを開いて作業がしたい。お気に入りのカフェ、打ち合わせ先、そして仕事場で。
            <br />
            <br />
            でも、パソコンとかを入れた重いバックパックを背負って、
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
            <br />
            <br />
            MOB 代表
            <br />鄧 卓然
          </text>
        </section>
        <section className={styles.page3}>
          <div className={styles.gif}>
            <Image src="/7s-use.gif" alt="gif" width={700} height={500} />
          </div>
        </section>
        <section className={styles.page2}>
          <text className={styles.storyText}>
            大切なパソコンを、
            <br />
            <p>
              守りながら自転車と共にどこへでも連れて行けるように設計したけど、
            </p>
          </text>
        </section>
        <section className={styles.page3}>
          <div className={styles.gif}>
            <Image src="/_DSC0225.jpg" alt="jpg" width={700} height={500} />
          </div>
        </section>
        <section className={styles.page2}>
          <text className={styles.storyText}>
            ここはあなたの創造力を働かせて、
            <br />
            <p>お気に入りの雑誌でも、</p>
            <p>外でデッサンする為のスケッチパッドでも入れておくれ。</p>
          </text>
        </section>
        <section className={styles.page3}>
          <div className={styles.gif}>
            <Image src="/0126840.jpg" alt="jpg" width={700} height={500} />
          </div>
        </section>
        <section className={styles.page2}>
          <text className={styles.storyText}>
            少しだけこだわりを紹介させてほしい。
            <br />
            <p>まずは構造から。</p>
            <p>3層になっており、</p>
            <p>防水の革、緩衝防熱のクッション、そして人肌にあたる裏地だ。</p>
            <p></p>
          </text>
        </section>
        <section className={styles.page3}>
          <div className={styles.gif}>
            <Image src="/0126843.jpg" alt="jpg" width={700} height={500} />
          </div>
        </section>
        <section className={styles.page2}>
          <text className={styles.storyText}>
            バックルは、三叉を受ける側が金属で、
            <p>
              ただプラスチックのものより頑丈で美しいだけでなく、カチカチ付け外し時の感触が心地が最高なんだよね。
            </p>
          </text>
        </section>
        <section className={styles.page3}>
          <div className={styles.gif}>
            <Image src="/0126833.jpg" alt="jpg" width={700} height={500} />
          </div>
        </section>
        <section className={styles.page2}>
          <text className={styles.storyText}>
            サイズは、身軽派にも、本格派にも、対応できるように2つ用意した。
            <br />
          </text>
        </section>
        <section className={styles.page3}>
          <div className={styles.productSpec1}>
            <Image
              src="/product-sq-omote.png"
              alt="img"
              width={400}
              height={400}
            />
          </div>
        </section>
        <section className={styles.page2}>
          <text className={styles.storyText}>
            <h2>SMALL</h2>
            <p>Mac13インチと、それ同等の大きさのパソコンが収まる</p>
            <h2>¥ 15,630</h2>
            <br />
          </text>
          <a
            className={styles.orderBtn}
            href="https://us6.list-manage.com/contact-form?u=658c42124313d8aff4cb34f19&form_id=0394e06ff568255d12c480cac4ae4c01

            "
          >
            予約注文する
          </a>
        </section>
        <section className={styles.page3}>
          <div className={styles.productSpec1}>
            <Image
              src="/product-sq-omote.png"
              alt="img"
              width={400}
              height={400}
            />
          </div>
        </section>
        <section className={styles.page2}>
          <text className={styles.storyText}>
            <h2>BIG</h2>
            <p>Mac15インチと、それ同等の大きさのパソコンが収まる</p>
            <h2>¥ 17,830</h2>
            <br />
          </text>
          <a
            className={styles.orderBtn}
            href="https://us6.list-manage.com/contact-form?u=658c42124313d8aff4cb34f19&form_id=0394e06ff568255d12c480cac4ae4c01

            "
          >
            予約注文する
          </a>
        </section>
        <section className={styles.page5}>
          <h2 className={styles.contactText}>お問い合わせ</h2>
          <p>takuzen0430[at]gmail.com</p>
        </section>
      </main>
      <footer>
        <p className={styles.footerText}></p>
      </footer>
    </div>
  );
}
