import LogoImage from "../../assets/logo.png";
import {
  CombosLink,
  LunchLink,
  NoveltiesLink,
  OtherGoodsLink,
  PastriesLink,
} from "../../constants";

interface NavigationProps {
  title: string;
  link: string;
}

const NavigationLink: React.FC<NavigationProps> = ({ title, link }) => {
  return (
    <p className="nav-link">
      <a href={link}>{title}</a>
    </p>
  );
};

const Navigation = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img src={LogoImage} alt="Logo" />
      </div>
      <div className="nav-links">
        <NavigationLink title="Novelties" link={NoveltiesLink} />
        <NavigationLink title="Pastries" link={PastriesLink} />
        <NavigationLink title="Combos" link={CombosLink} />
        <NavigationLink title="Lunch" link={LunchLink} />
        <NavigationLink title="Other Goods" link={OtherGoodsLink} />
      </div>
    </div>
  );
};

export default Navigation;
