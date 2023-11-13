import "./styles.css";

import { useState } from "react";
import { mortageNameButtons } from "./components/base";
import { SliderButtons } from "./components/sliderButtons";
import { MortageInfo } from "./components/mortgage_information";
import cl from "classnames";

export function App() {
  const [checked, setChecked] = useState(mortageNameButtons[0]);
  const trans = (checked.id - 1) * -141 + "%";
  console.log(`translate(${trans} , 0)`);
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
        key={checked}
        className="mortgageTermsWrap"
        style={{
          transform: `translate(${trans}, 0)`,
          transitionDuration: "1000ms",
          transitionProperty: "transform",
        }}
      >
        <MortageInfo key={checked.id} checked={mortageNameButtons[0]} />
        <MortageInfo key={checked.id + 1} checked={mortageNameButtons[1]} />
        <MortageInfo key={checked.id + 2} checked={mortageNameButtons[2]} />
        <MortageInfo key={checked.id + 3} checked={mortageNameButtons[3]} />
        <MortageInfo key={checked.id + 4} checked={mortageNameButtons[4]} />
      </div>
    </section>
  );
}
