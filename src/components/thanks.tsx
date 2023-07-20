import { useContext } from "react";
import { popUpContext } from "../App";
import styles from "../styling/thanks.module.css";

function ThankYou() {
  const { setShowBacking, setShowThanks } = useContext(popUpContext);
  function handleClick() {
    setShowBacking(false);
    setShowThanks(false);
  }
  return (
    <>
      <div className={styles.thanksPage}>
        <svg
          width="15%"
          height="15%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <g fill="none" fill-rule="evenodd">
            <circle fill="#3CB3AB" cx="32" cy="32" r="32" />
            <path
              stroke="#FFF"
              stroke-width="5"
              d="M20 31.86L28.093 40 44 24"
            />
          </g>
        </svg>
        <h2>Thanks for your support!</h2>{" "}
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>{" "}
        <button onClick={handleClick} className={styles.goitBtn}>
          Got it!
        </button>
      </div>
    </>
  );
}
export default ThankYou;
