import { loadStripe } from "@stripe/stripe-js";
import { useCookies } from "react-cookie";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const range = (n) => Array.from(Array(n), (_, k) => k+1);

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies([
    "mob_small",
    "mob_big",
  ]);
  if (!cookies) return;

  const Select = (props) => {
    return (
      <select
        className={styles.select}
        id={props.id}
        name={props.id}
        value={cookies[props.id]}
        onChange={(e) => {
          setCookie(props.id, e.target.value);
        }}
      >
        {range(9).map((i) => (
          <option key={props.id + i}>{i}</option>
        ))}
      </select>
    );
  };
  return (
    <div>
      <header className={styles.header}>
        <a href="/">
          <h2 className={styles.title}>チャリにパソコンをつみたい</h2>
        </a>

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
        <h1 className={styles.cartTitle}>カート</h1>
        <form
          className={styles.cartForm}
          action="/api/checkout_sessions"
          method="POST"
        >
          <div className={styles.cartItemRow}>
            {cookies.mob_small && (
              <p>
                <span className={styles.cartItemName}>Small</span>
                {cookies.mob_small && (
                  <Select id="mob_small" selectedCount={cookies.mob_small} />
                )}
                <span
                  className={styles.cartItemRemoveBtn}
                  onClick={() => {
                    removeCookie("mob_small");
                  }}
                >
                  ｜<span className={styles.deleteText}>削除</span>
                </span>
              </p>
            )}
          </div>

          {cookies.mob_big && (
            <p>
              <span className={styles.cartItemName}>Big</span>
              <Select id="mob_big" selectedCount={cookies.mob_big} />
              <span
                className={styles.cartItemRemoveBtn}
                onClick={() => {
                  removeCookie("mob_big");
                }}
              >
                ｜<span className={styles.deleteText}>削除</span>
              </span>
            </p>
          )}
          {cookies.mob_small || cookies.mob_big ? (
            <button type="submit" className={styles.checkoutBtn}>
              決済に進む
            </button>
          ) : (
            <p>カートに商品が入っていません。</p>
          )}
        </form>
      </main>
    </div>
  );
}
