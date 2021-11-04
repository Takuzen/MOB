import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

export default function Home() {
  const router = useRouter();
  const [,, removeCookie] = useCookies([
    "mob_small",
    "mob_big",
  ]);
  const sessionId = router.query.session_id;
  if (sessionId) {
    removeCookie("mob_small");
    removeCookie("mob_big");
  }
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
