import Navigation from "./components/Navigation";
import styles from "./App.module.scss";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className={styles["content-wrapper"]}>
        <div className={styles["nothing"]} />
        <div className="main">
          <Navigation />
          <Home />
        </div>
        <div className={styles["nothing"]} />
      </div>
    </>
  );
};

export default App;
