import LogoImage from "../../assets/logo.png";
import CartImage from "../../assets/cart.svg";
import {
  CombosLink,
  LunchLink,
  NoveltiesLink,
  OtherGoodsLink,
  PastriesLink,
} from "../../constants";
import styles from "./Navigation.module.scss";

interface NavigationProps {
  title: string;
  link: string;
}

const NavigationLink: React.FC<NavigationProps> = ({ title, link }) => {
  return (
    <p className={styles["nav-link"]}>
      <a href={link}>{title}</a>
    </p>
  );
};

const Navigation = () => {
  return (
    <div className={styles["nav-container"]}>
      <div className={styles["nav-logo"]}>
        <img src={LogoImage} alt="Logo" />
        <h4>
          <a href="/">
            Croissant
            <br />
            World
          </a>
        </h4>
      </div>
      <div className={styles["nav-links"]}>
        <NavigationLink title="Novelties" link={NoveltiesLink} />
        <NavigationLink title="Pastries" link={PastriesLink} />
        <NavigationLink title="Combos" link={CombosLink} />
        <NavigationLink title="Lunch" link={LunchLink} />
        <NavigationLink title="Other Goods" link={OtherGoodsLink} />
      </div>
      <div className={styles["nav-cart"]}>
        <img src={CartImage} alt="Cart" />
        <h4>
          <a href="/cart">Cart</a>
        </h4>
      </div>
    </div>
  );
};

export default Navigation;
