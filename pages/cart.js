import { loadStripe } from "@stripe/stripe-js";
import { useCookies } from "react-cookie";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const range = n => Array.from(Array(n), (_, k) => k);

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['mob_small', 'mob_big']);
  if (!cookies) return;

  const Select = props => {
    return (
      <select id={props.id} name={props.id} value={cookies[props.id]} onChange={e => {
        setCookie(props.id, e.target.value);
      }}>
        {range(9).map(i => <option key={props.id + i}>{i}</option>)}
      </select>
    );
  };
  return (
    <div>
      <a href="/">トップに戻る</a>
      <h1>カート</h1>
      <form action="/api/checkout_sessions" method="POST">
        {cookies.mob_small &&
          <p>
            <span>Small</span>
            {cookies.mob_small &&
              <Select id='mob_small' selectedCount={cookies.mob_small} />
            }
            <span onClick={() => { removeCookie('mob_small'); }}>削除</span>
          </p>
        }
        {cookies.mob_big &&
          <p>
            <span>Big</span>
            <Select id='mob_big' selectedCount={cookies.mob_big} />
            <span onClick={() => { removeCookie('mob_big'); }}>削除</span>
          </p>
        }
        {cookies.mob_small || cookies.mob_big
          ? <button type="submit">決済に進む</button>
          : <p>カートに商品が入っていません。</p>
        }
      </form>
    </div>
  );
};
