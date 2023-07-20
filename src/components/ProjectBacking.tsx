import {
  bambooContext,
  digitsContext,
  blackContext,
  popUpContext,
  blackPledgeContext,
  bambooPledgeContext,
} from "../App";
import ThankYou from "./thanks";
import { useContext, useRef, useState } from "react";
import styles from "../styling/backingpage.module.css";

function BackingPage() {
  //contexts
  const {
    setShowBacking,
    showThanks,
    setShowThanks,
    selectedReward,
    setSelectedReward,
  } = useContext(popUpContext);
  const { currentDonation, setCurrentDonation } = useContext(digitsContext);
  const { bamboo, setBamboo } = useContext(bambooContext);
  const { black, setBlack } = useContext(blackContext);
  const { bambooPledgeInput, setbambooPledgeInput } =
    useContext(bambooPledgeContext);
  const { blackPledgeInput, setBlackPledgeInput } =
    useContext(blackPledgeContext);

  //refs
  const bambooAmntRef = useRef<HTMLInputElement>(null);
  const blackAmntRef = useRef<HTMLInputElement>(null);

  //states
  const [blackError, setBlackError] = useState<string>("");
  const [bambooError, setBambooError] = useState<string>("");

  //functions
  function bambooPledge(event: React.MouseEvent<HTMLButtonElement>) {
    event?.preventDefault();
    let bambooAmnt = Number(bambooAmntRef.current?.value);
    if (!bambooAmnt || bambooAmnt < 25) {
      setBambooError("Please enter a valid pledge amount");
      return;
    }
    setBamboo(bamboo + 1);
    setShowBacking(false);
    setShowThanks(true);
    setCurrentDonation(bambooAmnt + currentDonation);
    setShowThanks(true);
  }

  function blackPledge(event: React.MouseEvent<HTMLButtonElement>) {
    event?.preventDefault();
    let blackAmnt = Number(blackAmntRef.current?.value);
    if (!blackAmnt || blackAmnt < 75) {
      setBlackError("Please enter a valid pledge amount");
      return;
    }
    setBlack(black + 1);
    setShowBacking(false);
    setCurrentDonation(blackAmnt + currentDonation);
    setShowThanks(true);
  }
  function closingBtn() {
    setBlackPledgeInput(false);
    setbambooPledgeInput(false);
    setShowBacking(false);
  }
  function bambooDivClick() {
    setSelectedReward("bamboo");
    setBlackPledgeInput(false);
    setbambooPledgeInput(true);
    setBlackError("");
  }
  function blackDivClick() {
    setSelectedReward("black");
    setbambooPledgeInput(false);
    setBlackPledgeInput(true);
    setBambooError("");
  }
  function pledgeDivClick() {
    setShowThanks(true);
    setShowBacking(false);
  }
  // function mahogany() {
  //   setShowBacking(false);
  //   setShowThanks(true);
  // }
  return (
    <>
      <div className={styles.wholeBacking}>
        <div className={styles.backing}>
          <div className={styles.titles}>
            <div>
              <h2>Back this project</h2>
            </div>
            <div>
              <button className={styles.closeBtn} onClick={closingBtn}>
                x
              </button>
            </div>
          </div>
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
        </div>
        <div
          onClick={pledgeDivClick}
          className={styles.pledge}
          style={{ cursor: "pointer" }}
        >
          <h3>Pledge with no reward</h3>
          <p>
            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to receive product
            updates via email.
          </p>
        </div>

        <div
          onClick={bambooDivClick}
          style={{ cursor: "pointer" }}
          className={`${styles.bamboo} ${
            selectedReward === "bamboo" ? styles.highlight : ""
          }`}
        >
          <div className={styles.titles}>
            <h3>Bamboo Stand</h3>
            <h3 className={styles.greenTitles}>Pledge $25 or more</h3>
            <span>
              <strong id={styles.bambooStrong}>{101 - bamboo}</strong>
            </span>{" "}
            <span>left</span>
          </div>
          <p>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
          {/* bamboo on Select */}
          <hr />
          {bambooPledgeInput && (
            <div className={styles.pledgeEntry}>
              <p>Enter your pledge</p>{" "}
              <input type="text" placeholder="$25" ref={bambooAmntRef} />{" "}
              <button onClick={bambooPledge}>Continue</button>
            </div>
          )}
          {bambooError && <p className={styles.errorMessage}>{bambooError}</p>}
        </div>

        <div
          onClick={blackDivClick}
          style={{ cursor: "pointer" }}
          className={`${styles.blackEdition} ${
            selectedReward === "black" ? styles.highlight : ""
          }`}
        >
          <div className={styles.titles}>
            <h3>Black Edition Stand</h3>
            <h3 className={styles.greenTitles}>Pledge $75 or more</h3>
            <span>
              <strong id={styles.blackStrong}>{64 - black}</strong>
            </span>{" "}
            <span>left</span>
          </div>
          <p>
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
          {/* black on Select */}
          <hr />
          {blackPledgeInput && (
            <div className={styles.pledgeEntry}>
              <p>Enter your pledge</p>{" "}
              <input type="text" placeholder="$75" ref={blackAmntRef} />{" "}
              <button onClick={blackPledge}>Continue</button>
            </div>
          )}
          {blackError && <p className={styles.errorMessage}>{blackError}</p>}
        </div>
        <div className={styles.mahogany}>
          <div className={styles.titles}>
            <h3>Mahogany Special Edition</h3>
            <h3 className={styles.greenTitles}>Pledge $200 or more</h3>
            <span>
              <strong id={styles.mahoganyStrong}>0</strong>
            </span>{" "}
            <span>left</span>
          </div>
          <p>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>
          {/* mahogany on Select */}
          {/* <div className={styles.pledgeEntry}>
          <hr />
            <p>Enter your pledge</p> <input type="text" placeholder="$200" />{" "}
            <button onClick={mahogany} disabled={true}>
              Continue
            </button>
          </div> */}
        </div>
      </div>
      <div className="thanks">{showThanks && <ThankYou />}</div>
    </>
  );
}
export default BackingPage;
