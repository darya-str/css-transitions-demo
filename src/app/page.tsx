import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Products } from "./components/products-list/Products";
import { Product } from "./components/product/Product";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header />
          <Product />
          <p className={styles.text}>
            Brand is a full-service agency, busy designing and building
            beautiful digital products, brands, and experiences.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <Products />
      </div>
      <div className={styles.container}>
        <Footer />
      </div>
    </div>
  );
}
