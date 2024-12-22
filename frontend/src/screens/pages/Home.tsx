import LemonadeImage from "../../assets/lemonade.png";
import styles from "./Home.module.scss";
import SmallCard from "../components/SmallCard";

const Home = () => {
  return (
    <>
      <h2 className={styles["oft-order-text"]}>Often Order</h2>
      <SmallCard
        image_url={LemonadeImage}
        title="Lemonade"
        price={1.99}
        product_id={1000 - 7}
      />
    </>
  );
};

export default Home;
