import { createContext, useState, Dispatch, SetStateAction } from "react";
import MainPage from "./components/Main page";
import BackingPage from "./components/ProjectBacking";
import ThankYou from "./components/thanks";

//props
interface Props {
  showBacking: boolean;
  setShowBacking: Dispatch<SetStateAction<boolean>>;
  showThanks: boolean;
  setShowThanks: Dispatch<SetStateAction<boolean>>;
  selectedReward: string;
  setSelectedReward: Dispatch<SetStateAction<string>>;
}
interface donationProps {
  currentDonation: number;
  setCurrentDonation: Dispatch<SetStateAction<number>>;
}
interface bambooProps {
  bamboo: number;
  setBamboo: Dispatch<SetStateAction<number>>;
}
interface blackProps {
  black: number;
  setBlack: Dispatch<SetStateAction<number>>;
}
interface bambooPledgeProps {
  bambooPledgeInput: boolean;
  setbambooPledgeInput: Dispatch<SetStateAction<boolean>>;
}
interface blackPledgeProps {
  blackPledgeInput: boolean;
  setBlackPledgeInput: Dispatch<SetStateAction<boolean>>;
}
//contexts
export const digitsContext = createContext<donationProps>({
  currentDonation: 0,
  setCurrentDonation: () => {},
});

export const popUpContext = createContext<Props>({
  showBacking: false,
  setShowBacking: () => {},
  showThanks: false,
  setShowThanks: () => {},
  selectedReward: "",
  setSelectedReward: () => {},
});

export const bambooContext = createContext<bambooProps>({
  bamboo: 0,
  setBamboo: () => {},
});
export const blackContext = createContext<blackProps>({
  black: 0,
  setBlack: () => {},
});
export const bambooPledgeContext = createContext<bambooPledgeProps>({
  bambooPledgeInput: false,
  setbambooPledgeInput: () => {},
});
export const blackPledgeContext = createContext<blackPledgeProps>({
  blackPledgeInput: false,
  setBlackPledgeInput: () => {},
});
//app component
function App() {
  const [showBacking, setShowBacking] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [currentDonation, setCurrentDonation] = useState(0);
  const [bamboo, setBamboo] = useState(0);
  const [black, setBlack] = useState(0);
  const [bambooPledgeInput, setbambooPledgeInput] = useState(false);
  const [blackPledgeInput, setBlackPledgeInput] = useState(false);
  const [selectedReward, setSelectedReward] = useState("");

  return (
    <>
      <popUpContext.Provider
        value={{
          showBacking,
          setShowBacking,
          showThanks,
          setShowThanks,
          selectedReward,
          setSelectedReward,
        }}
      >
        <digitsContext.Provider value={{ currentDonation, setCurrentDonation }}>
          <bambooContext.Provider value={{ bamboo, setBamboo }}>
            <blackContext.Provider value={{ black, setBlack }}>
              <bambooPledgeContext.Provider
                value={{ bambooPledgeInput, setbambooPledgeInput }}
              >
                <blackPledgeContext.Provider
                  value={{ blackPledgeInput, setBlackPledgeInput }}
                >
                  {showBacking ? (
                    <BackingPage />
                  ) : showThanks ? (
                    <ThankYou />
                  ) : (
                    <MainPage />
                  )}
                </blackPledgeContext.Provider>
              </bambooPledgeContext.Provider>
            </blackContext.Provider>
          </bambooContext.Provider>
        </digitsContext.Provider>
      </popUpContext.Provider>
    </>
  );
}

export default App;
