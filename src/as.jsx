import "./styles.css";

import { useState } from "react";
import { mortageNameButtons } from "./components/base";
import { SliderButtons } from "./components/sliderButtons";
import { MortageInfo } from "./components/mortgage_information";
import cl from "classnames";

export function App() {
  const [checked, setChecked] = useState(mortageNameButtons[2]);
  const trans = -(checked.id - 1) * 141 + "%";
  console.log(trans);
  return (
    <section className="mainSection">
      <div className="sliderButtons">
        <SliderButtons
          mortageNameButtons={mortageNameButtons}
          checked={checked}
          setChecked={setChecked}
        />
      </div>
      <div
        className="mortgageTermsWrap"
        style={{ transform: "translate(-141%, 0)" }}
      >
        <MortageInfo checked={mortageNameButtons[0]} />
        <MortageInfo checked={mortageNameButtons[1]} />
        <MortageInfo checked={mortageNameButtons[2]} />
        <MortageInfo checked={mortageNameButtons[3]} />
        <MortageInfo checked={mortageNameButtons[4]} />
      </div>
    </section>
  );
}
