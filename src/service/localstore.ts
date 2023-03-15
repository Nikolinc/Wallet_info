import home from "../pages/home";
import { IHome } from "../types/home";
import Logo from "../assets/Logo.svg";

const descriotion =
  "Open-source blockchain platform for creating cryptocurrencies and" +
  "decentralized applications. Commissions for transactions in the" +
  "TMY Chain network are paid in TMY coin. Open-source blockchain" +
  "platform for creating cryptocurrencies and decentralized" +
  " applications. Commissions for transactions in the TMY Chain" +
  "network are paid in TMY coin.";

class Home implements IHome {
  image: string;
  name: string;
  description: string;

  constructor() {
    this.image = Logo;
    this.name = "TMY Chain";
    this.description = descriotion;
  }
}

export function setDate(home: IHome) {
  localStorage.clear();
  let serialObj = JSON.stringify(home);
  localStorage.setItem("data", serialObj);
}
export function getDate() {
  const homeJson = localStorage.getItem("data");
  let returnObj = homeJson !== null ? JSON.parse(homeJson) : new Home();
  return returnObj;
}
