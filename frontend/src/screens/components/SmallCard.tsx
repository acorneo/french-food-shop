import styles from "./SmallCard.module.scss";

interface SmallCardProps {
  image_url: string;
  title: string;
  price: number;
  product_id: number;
}

const SmallCard: React.FC<SmallCardProps> = ({
  image_url,
  title,
  price,
  product_id, // product id: created to validate price from backend or smth
}) => {
  const buyFood = () => {
    console.log(product_id);
    // todo
    // it is planned to create like a pop up that shows some ingridients or smth
  };

  return (
    <div className={styles["card"]} onClick={() => buyFood()}>
      <img src={image_url} alt="Picture" />
      <div className={styles["text"]}>
        <p className={styles["title"]}>
          <b>{title}</b>
        </p>
        <p className={styles["price"]}>From {price}$</p>
      </div>
    </div>
  );
};

export default SmallCard;
