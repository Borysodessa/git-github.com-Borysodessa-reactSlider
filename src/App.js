import "./styles.css";

import { useState } from "react";
import { mortageNameButtons } from "./components/base";
import { SliderButtons } from "./components/sliderButtons";
import { MortageInfo } from "./components/mortgage_information";

export function App() {
  const [checked, setChecked] = useState(mortageNameButtons[0]);
  const checkedIndex = mortageNameButtons.indexOf(checked);
  const trans = (-checkedIndex * 100) / mortageNameButtons.length + "%";
  const widthLength = mortageNameButtons.length * 100 + "%";
  return (
    <section className="mainSection" style={{ overflow: "hidden" }}>
      <div className="sliderButtons">
        <SliderButtons
          mortageNameButtons={mortageNameButtons}
          checked={checked}
          setChecked={setChecked}
        />
      </div>
      <div
        className="mortgageTermsWrap"
        style={{
          overflow: "hidden",
          width: widthLength,
          transform: `translate(${trans}, 0)`,
          transitionDuration: "1000ms",
          transitionProperty: "transform",
        }}
      >
        {mortageNameButtons.map((mortageNameButton) => (
          <MortageInfo checked={mortageNameButton} />
        ))}
      </div>
    </section>
  );
}
