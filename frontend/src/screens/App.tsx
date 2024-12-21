import Navigation from "./components/Navigation";
import styles from "./App.module.scss";

const App = () => {
  return (
    <>
      <div className={styles["content-wrapper"]}>
        <div className={styles["nothing"]} />
        <Navigation />
        <div className={styles["nothing"]} />
      </div>
    </>
  );
};

export default App;
