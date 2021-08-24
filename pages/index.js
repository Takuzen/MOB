import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useCookies } from "react-cookie";

export default function Home() {
  const [cookies, setCookie] = useCookies([]);
  const updateCookie = (item, count) => {
    const current = cookies[`mob_${item}`];
    setCookie(
      `mob_${item}`,
      current && parseInt(current) ? parseInt(current) + count : count
    );
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>MOB</title>
        <link rel="icon" href="/bike.favicon.ico" />
        <meta property="og:title" content="チャリにパソコンをつみたい" />
        <meta property="og:description" content="自転車用PCバッグ" />
        <meta property="og:image" content="/ogp.jpg" />
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
          <a className={styles.campaignText} href="#shop">
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
            ラック要らずで、大切なパソコンを守りながら、
            <br />
            <p>自転車と共にどこへでも連れて行けるように設計したけど、</p>
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
            <p>外でデッサンする為のスケッチパッドでも好きに入れておくれ。</p>
          </text>
        </section>

        <section className={styles.page3}>
          <div className={styles.gif}>
            <Image src="/0126840.jpg" alt="jpg" width={700} height={500} />
          </div>
        </section>

        <section className={styles.page2}>
          <text className={styles.storyText}>
            裏地は、コットン100%の生地を橙色の縦縞柄に鮮やかに染め上げたものを使いました。
            <p>
              マジックテープを開け閉めする時に、ポジティブな気持ちを喚起できれば嬉しいです。
            </p>
          </text>
        </section>

        <section className={styles.page3}>
          <div className={styles.gif}>
            <Image src="/0126834.jpg" alt="jpg" width={700} height={500} />
          </div>
        </section>

        <section className={styles.page2}>
          <text className={styles.storyText}>
            サイズは、身軽派にも、本格派にも、対応できるように2つ用意した。
            <br />
          </text>
        </section>
        <section className={styles.page3} id="shop">
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
            <h2>¥ 13,000</h2>
            <br />
          </text>
          <a
            className={styles.orderBtn}
            href="/cart"
            onClick={() => {
              updateCookie("small", 1);
            }}
          >
            カートに入れる
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
            <h2>¥ 15,000</h2>
            <br />
          </text>
          <a
            className={styles.orderBtn}
            href="/cart"
            onClick={() => {
              updateCookie("big", 1);
            }}
          >
            カートに入れる
          </a>
        </section>

        <section className={styles.page2}>
          <text className={styles.storyText}>
            もう少しだけ、こだわりをね。
            <br />
            <p>まずは構造。</p>
            <p>3層構成で、</p>
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
            革は、大丈夫、ちゃんと防水です！
            <br></br>
            汚れたらシャワーヘッドの水でガシガシ洗ってください。
            <br />
          </text>
        </section>

        <section className={styles.page3}>
          <div className={styles.gif}>
            <Image
              src="/portrait-water-proof.gif"
              alt="gif"
              width={700}
              height={500}
            />
          </div>
        </section>

        <section className={styles.page2}>
          <text className={styles.storyText}>
            縫製は蔵前の革職人が丁寧に仕上げている。見て、この均一で美しい縫い目。
            <p></p>
          </text>
        </section>

        <section className={styles.page3}>
          <div className={styles.gif}>
            <Image src="/0126835.jpg" alt="jpg" width={700} height={500} />
          </div>
        </section>

        <section className={styles.page2}>
          <text className={styles.storyText}>
            バックルは、三叉を受ける側が金属で、
            <p>
              プラスチックのものより頑丈で美しいだけでなく、カチカチ付け外し時の感触が心地良くて、最高なんだよね。
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
            <h2>生産パートナー</h2>
            <br />
          </text>
        </section>

        <section className={styles.page2}>
          <div className={styles.productSpec1}>
            <Image
              src="/ikedasan-pf-sq.png"
              alt="png"
              width={400}
              height={400}
            />
          </div>
        </section>

        <section className={styles.page2}>
          <text className={styles.storyText}>
            <h3>池田耕平 / Kouhei Ikeda</h3>
            <br />
            革鞄・革小物のメーカーで経験を積んだ後に複数メーカーからサンプル製作の依頼を受けるサンプル職人として活躍、同時に自身の皮革ブランド
            PRO-MENER（プロムネ）を運営している。
          </text>
        </section>

        <hr />

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
