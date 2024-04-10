import preferential from "./images/preferential.png";
import family from "./images/family.png";
import it from "./images/IT_specialists.png";
import country from "./images/country.png";
import eastFarEastern from "./images/eastFarEastern.png";

export const mortageNameButtons = [
  {
    id: "1",
    nameOfMortgage: "Льготн",
    rateValue: "9%",
    mortageTitle: "Льготная ипотека",
    backgroundImage: preferential,
    creditTerm: 30,
    creditAmount: 12,
    initialFee: 15,
    spreading: "Квартиры у застройщиков",
    regions: ["Москва", "Санкт - Петербург"],
  },
  {
    id: "2",
    nameOfMortgage: "Семейная",
    rateValue: "6%",
    mortageTitle: "Семейная ипотека",
    backgroundImage: family,
    creditTerm: 30,
    creditAmount: 12,
    initialFee: 15,
    spreading: "Новостройки, ИЖС",
    whoСan:
      "Семьи, в которых с 1 января 2018 года по 31 декабря 2022 года родился первый ребенок или последующие дети; семьи, в которых воспитывается ребенок с инвалидностью; родители усыновленных (удочеренных) детей.",
    regions: ["Москва", "Московская область", "Санкт - Петербург"],
  },
  {
    id: "3",
    nameOfMortgage: "IT-специалсты",
    rateValue: "5%",
    mortageTitle: "Ипотека для IT-специалистов",
    backgroundImage: it,
    creditTerm: 30,
    creditAmount: 18,
    initialFee: 15,
    spreading: "Квартиры у застройщиков",
    whoСan:
      "Сотрудники IT-компании, которая аккредитована Минцифры РФ и соответствует условиям; заработная плата до вычета налога не менее 150 тыс. рублей.",
    regions: ["Москва", "Московская область", "Санкт - Петербург", "ДФО"],
  },
  {
    id: "4",
    nameOfMortgage: "Сельская",
    rateValue: "3%",
    mortageTitle: "Сельская ипотека",
    backgroundImage: country,
    creditTerm: 25,
    creditAmount: 5,
    initialFee: 10,
    spreading: "Квартира, ИЖС, земельный участок",
    whoСan:
      "Семьи, в которых с 1 января 2018 года по 31 декабря 2022 года родился первый ребенок или последующие дети; семьи, в которых воспитывается ребенок с инвалидностью; родители усыновленных (удочеренных) детей.",
    regions: [
      "Московская область",
      "ДФО",
      "Ленинградская область",
      "Другой регион",
    ],
  },
  {
    id: "5",
    nameOfMortgage: "Дальневосточная",
    rateValue: "2%",
    mortageTitle: "Дальневосточная ипотека",
    backgroundImage: eastFarEastern,
    creditTerm: 20,
    creditAmount: 6,
    initialFee: 15,
    whoСan:
      "Квартиры в новостройках, объекты ИЖС на территории Дальнего Востока, вторичка в моногородах ДФО.",
    regions: ["ДФО"],
  },
];
