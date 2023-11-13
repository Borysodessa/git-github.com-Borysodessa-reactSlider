import style from "./Mo.module.css";
import { useState } from "react";
import { RegionOfPurchase } from "./Regions";

export function MortageInfo({ checked }) {
  const [selectedRegion, setSelectedRegion] = useState(checked.regions[0]);

  return (
    <div className={style.infoWrap}>
      <div className={style.texts}>
        <div className={style.wrap}>
          <h1 className={style.title}>{checked.mortageTitle}</h1>
          <p className={style.region}>Регион приобретения</p>
          <RegionOfPurchase
            selectedRegion={selectedRegion}
            checked={checked}
            setSelectedRegion={setSelectedRegion}
          />
        </div>
        <div className={style.conditionsWrap}>
          <div>
            <p className={style.condidionTitle}>Процентная ставка</p>
            <span className={style.span}>{checked.rateValue}</span>
            <p className={style.condidionTitle}>Cрок кредита</p>
            <span className={style.span}>до {checked.creditTerm} лет</span>
          </div>
          <div>
            <p className={style.condidionTitle}>Сумма кредита</p>
            <span className={style.span}>от {checked.creditAmount} млн ₽</span>
            <p className={style.condidionTitle}>Первоначальный взнос</p>
            <span className={style.span}> от {checked.initialFee}%</span>
          </div>
        </div>
        <div>
          <p className={style.p}>
            {checked.spreading && "На что распространяется"}
          </p>
          <p className={style.weight}>{checked.spreading}</p>
        </div>
        <div>
          <p className={style.p}>
            {checked.whoСan && "Кто может воспользоваться"}
          </p>
          <p className={style.weight}>{checked.whoСan}</p>
        </div>
        <div className={style.toKnow}>
          <span className={style.toKnowSpan}>Узнать свои льготные ставки</span>
        </div>
      </div>
      <img className={style.pic} src={checked.backgroundImage} alt=""></img>
    </div>
  );
}
