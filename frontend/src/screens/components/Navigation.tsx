import LogoImage from "../../assets/logo.png";
import CartImage from "../../assets/cart.svg";
import { LunchLink, NoveltiesLink, PastriesLink } from "../../constants";
import styles from "./Navigation.module.scss";
import { useCart } from "../../CartContext";
import { useEffect, useState } from "react";

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
  const { cart } = useCart();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [cart]);

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
        <NavigationLink title="Lunch" link={LunchLink} />
      </div>
      <div className={`${styles["nav-cart"]} ${animate ? styles.animate : ""}`}>
        <img src={CartImage} alt="Cart" />
        <h4>
          <a href="/cart">Cart</a>
        </h4>
      </div>
    </div>
  );
};

export default Navigation;
