import { useCart } from "../../CartContext";
import styles from "./LargeCard.module.scss";

interface LargeCardProps {
  image_url: string;
  title: string;
  price: number;
  product_id: number;
}

const LargeCard: React.FC<LargeCardProps> = ({
  image_url,
  title,
  price,
  product_id,
}) => {
  const { addToCart } = useCart();

  const buyFood = () => {
    console.log(product_id);
    addToCart({ image_url, title, price, product_id });
  };

  return (
    <div className={styles["card"]}>
      <img src={image_url} alt="" />
      <div className="text">
        <h4>{title}</h4>
        <div>
          <p>From {price}$</p>
          <button onClick={() => buyFood()}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
