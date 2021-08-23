import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.successMsgDiv}>
      <Image src="/mob-logo.png" alt="png" width={300} height={150}></Image>
      <h1 className={styles.successText}>予約注文が完了しました！</h1>
      <p className={styles.successTextSub}>
        追ってご記入いただいたメールアドレス宛に
        <br />
        確認のメールを差し上げます。
      </p>
      <a href="/" className={styles.goBackHomeBtn}>
        ホームへ戻る
      </a>
    </div>
  );
}
