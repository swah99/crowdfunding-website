import BackingPage from "./ProjectBacking";
import { useContext } from "react";
import {
  digitsContext,
  popUpContext,
  bambooContext,
  blackContext,
  bambooPledgeContext,
  blackPledgeContext,
} from "../App";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "../styling/mainpage.module.css";

function MainPage() {
  //context
  const { showBacking, setShowBacking, setSelectedReward } =
    useContext(popUpContext);
  const { currentDonation } = useContext(digitsContext);
  const { bamboo } = useContext(bambooContext);
  const { black } = useContext(blackContext);
  const { setbambooPledgeInput } = useContext(bambooPledgeContext);
  const { setBlackPledgeInput } = useContext(blackPledgeContext);
  /*states*/
  const [showMenu, setShowMenu] = useState(false);
  const totalDonation = 89914 + currentDonation;
  const widthPercentage = Math.min((totalDonation / 100000) * 100, 100);
  /*functions*/
  function bamboofunction() {
    setSelectedReward("bamboo");
    setbambooPledgeInput(true);
    setShowBacking(true);
  }
  function blackfunction() {
    setSelectedReward("black");
    setBlackPledgeInput(true);
    setShowBacking(true);
  }
  function backingfunction() {
    setShowBacking(true);
    setBlackPledgeInput(false);
    setbambooPledgeInput(false);
    setSelectedReward("");
  }
  return (
    <>
      <header>
        <div>
          <h2
            className={styles.pageTitle}
            onClick={() => window.location.reload()}
            style={{ cursor: "pointer" }}
          >
            crowdfund
          </h2>
        </div>
        {showMenu ? (
          <AiOutlineClose
            className={styles.closeIcon}
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <AiOutlineMenu
            className={styles.menuIcon}
            onClick={() => setShowMenu(true)}
          />
        )}
        {
          <div className={`${styles.text} ${showMenu ? styles.menuBar : ""}`}>
            <p>About</p>
            <p>Discover</p>
            <p>Get Started</p>
          </div>
        }
      </header>
      <svg
        className={styles.mastercraftLogo}
        width="55"
        height="55"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56 56"
        preserveAspectRatio="xMidYMid meet"
      >
        <g fill="none" fill-rule="evenodd">
          <circle fill="#000" cx="28" cy="28" r="28" />
          <g fill-rule="nonzero">
            <path
              d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z"
              fill="#444"
            />
            <path
              d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z"
              fill="#FFF"
            />
          </g>
        </g>
      </svg>
      <div className={styles.info}>
        <div className={styles.intro}>
          <h2> Mastercraft Bamboo Monitor Riser</h2>
          <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <button onClick={backingfunction}>Back this project</button>
          <div className={styles.bookmark}>
            <svg
              width="45"
              height="45"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56 56"
              preserveAspectRatio="xMidYMid meet"
            >
              <g fill="none" fill-rule="evenodd">
                <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
              </g>
            </svg>
            <p>Bookmark</p>
          </div>
        </div>
        <div className={styles.backing}>
          <div className={styles.backingAmnt}>
            <div className={styles.rightB}>
              <strong>${totalDonation.toLocaleString()}</strong>{" "}
              <p>of $100,000 backed</p>
            </div>{" "}
            <div className={styles.rightB}>
              {<strong>{(5007 - black - bamboo).toLocaleString()}</strong>}{" "}
              <p>total backers</p>
            </div>{" "}
            <div>
              <strong>56</strong> <p>days left</p>
            </div>
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.innerBar}
              style={{ width: `${widthPercentage}%` }}
            ></div>
          </div>
        </div>
        <div className={styles.wholeAbout}>
          <div className={styles.aboutProject}>
            <h3>About this project</h3>{" "}
            <p>
              <p>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
                platform that elevates your screen to a more comfortable viewing
                height. Placing your monitor at eye level has the potential to
                improve your posture and make you more comfortable while at
                work, helping you stay focused on the task at hand.
              </p>{" "}
              <p>
                Featuring artisan craftsmanship, the simplicity of design
                creates extra desk space below your computer to allow notepads,
                pens, and USB sticks to be stored under the stand.
              </p>
            </p>
          </div>
          <div className={styles.bambooStand}>
            <div className={styles.aboutTitles}>
              <h4>Bamboo Stand</h4>{" "}
              <h4 className={styles.greenTitles}>Pledge $25 or more</h4>
            </div>{" "}
            <p>
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </p>{" "}
            <div className={styles.donorsandbtn}>
              <div className={styles.donorsLeft}>
                <span>
                  <strong>{101 - bamboo}</strong>
                </span>{" "}
                <span>left</span>
              </div>{" "}
              <div className={styles.rewardBtn}>
                <button onClick={bamboofunction}>Select Reward</button>
              </div>
            </div>
          </div>
          <div className={styles.blackEditionStand}>
            <div className={styles.aboutTitles}>
              <h4>Black Edition Stand</h4>{" "}
              <h4 className={styles.greenTitles}>Pledge $75 or more </h4>
            </div>
            <p>
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>{" "}
            <div className={styles.donorsandbtn}>
              <div className={styles.donorsLeft}>
                <span>
                  <strong>{64 - black}</strong>
                </span>{" "}
                <span>left</span>
              </div>{" "}
              <div className={styles.rewardBtn}>
                <button onClick={blackfunction}>Select Reward</button>
              </div>
            </div>
          </div>
          <div
            className={`${styles.mahoganySpecialEdition} ${styles.outOfStock}`}
          >
            <div className={styles.aboutTitles}>
              <h4>Mahogany Special Edition</h4>{" "}
              <h4 className={styles.greenTitles}>Pledge $200 or more</h4>
            </div>{" "}
            <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </p>{" "}
            <div className={styles.donorsandbtn}>
              <div className={styles.donorsLeft}>
                <span>
                  <strong>0</strong>
                </span>{" "}
                <span>left</span>
              </div>{" "}
              <div>
                <button className={styles.mahoganyRewardBtn}>
                  Out of Stock
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="popup">{showBacking && <BackingPage />}</div>
    </>
  );
}
export default MainPage;
