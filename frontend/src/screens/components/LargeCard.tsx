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
  const buyFood = () => {
    console.log(product_id);
    // todo
    // it is planned to create like a pop up that shows some ingridients or smth
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
