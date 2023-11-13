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
        {mortageNameButtons.map((mortageNameButton) => (
          <MortageInfo checked={mortageNameButtons[mortageNameButton.id - 1]} />
        ))}
      </div>
    </section>
  );
}
