import { Product } from "./Product";
import { products } from "@/app/constants/products";
import styles from "./products.module.css";

export const Products = () => {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsColumnLeft}>
        {products.slice(0, 2).map((product) => (
          <Product key={product.title} {...product} />
        ))}
      </div>
      <div className={styles.productsColumnRight}>
        {products.slice(2, 4).map((product) => (
          <Product key={product.title} {...product} />
        ))}
      </div>
    </div>
  );
};
