import cl from "classnames";

export function SliderButtons({ mortageNameButtons, checked, setChecked }) {
  return mortageNameButtons.map((item) => (
    <label
      key={item.id}
      className={cl({
        sbtn: true,
        bg: true,
        bgChecked: item === checked,
      })}
    >
      <input
        style={{ display: "none" }}
        id="button"
        type="radio"
        name="slider"
        checked={checked === item}
        onChange={() => {
          setChecked(item);
        }}
      />

      <div className="sliderButtonWrap">
        <p
          className={cl({
            sbText: true,
            sbTextColor: true,
            sbTextColorChecked: item === checked,
          })}
        >
          {item.nameOfMortgage}
        </p>
        <span
          className={cl({
            sbSpan: true,
            sbText: true,
            sbTextColor: true,
            sbTextColorChecked: item === checked,
          })}
        >
          {item.rateValue}
        </span>
      </div>
    </label>
  ));
}
