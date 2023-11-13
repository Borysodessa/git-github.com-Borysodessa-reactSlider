import { useState } from "react";
import arrow from "./images/arrow.svg";
import styles from "./Region.module.css";

export function RegionOfPurchase({
  setSelectedRegion,
  selectedRegion,
  checked,
}) {
  const [open, setOpen] = useState(false);

  function onClick() {
    let newOpen = open;
    newOpen = !newOpen;
    setOpen(newOpen);
  }

  function handleClickCity(e) {
    setSelectedRegion(e.target.textContent);
    setOpen(!open);
  }

  const regions = checked.regions;

  return (
    <div>
      <div className={styles.sityWrap}>
        <p className={styles.selectedRegion}>{selectedRegion}</p>
        {!open && (
          <img
            className={styles.arrow}
            src={arrow}
            onClick={onClick}
            alt=""
          ></img>
        )}
      </div>
      {open && (
        <div className={styles.regionsWrap}>
          {regions.map((region, i) => (
            <div key={i} className={styles.regionWrap}>
              <p className={styles.region} onClick={handleClickCity}>
                {region}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
