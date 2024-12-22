import styles from "./Home.module.scss";
import SmallCard from "../components/SmallCard";
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  image_url: string;
  title: string;
  price: number;
  product_id: number;
}

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [oftenOrderData, setOftenOrderData] = useState<Product[]>([]);
  const [noveltiesData, setNoveltiesData] = useState<Product[]>([]);
  const [pastriesData, setPastriesData] = useState<Product[]>([]);
  const [lunchData, setLunchData] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);
    try {
      axios.get("/api/often-order").then((r) => {
        setOftenOrderData(r.data.products);
      });
      axios.get("api/categories/novelties").then((r) => {
        setNoveltiesData(r.data.products);
      });
      axios.get("api/categories/pastries").then((r) => {
        setPastriesData(r.data.products);
      });
      axios.get("api/categories/lunch").then((r) => {
        setLunchData(r.data.products);
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <h2 className={styles["oft-order-text"]}>Often Order</h2>
      {loading ? (
        <h3>Loading products...</h3>
      ) : (
        oftenOrderData.map((item) => (
          <SmallCard
            image_url={item.image_url}
            title={item.title}
            price={item.price}
            product_id={item.product_id}
          />
        ))
      )}

      <h1 className={styles["category-text"]}>Novelties</h1>
      {loading ? (
        <h3>Loading products...</h3>
      ) : (
        noveltiesData.map((item) => (
          <SmallCard
            image_url={item.image_url}
            title={item.title}
            price={item.price}
            product_id={item.product_id}
          />
        ))
      )}

      <h1 className={styles["category-text"]}>Pastires</h1>
      {loading ? (
        <h3>Loading products...</h3>
      ) : (
        pastriesData.map((item) => (
          <SmallCard
            image_url={item.image_url}
            title={item.title}
            price={item.price}
            product_id={item.product_id}
          />
        ))
      )}

      <h1 className={styles["category-text"]}>Lunch</h1>
      {loading ? (
        <h3>Loading products...</h3>
      ) : (
        lunchData.map((item) => (
          <SmallCard
            image_url={item.image_url}
            title={item.title}
            price={item.price}
            product_id={item.product_id}
          />
        ))
      )}
    </>
  );
};

export default Home;
