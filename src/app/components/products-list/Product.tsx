"use client";

import { useInView } from "react-intersection-observer";
import styles from "./products.module.css";

interface ProductProps {
  title: string;
  domains: string;
  image: JSX.Element;
}

export const Product = ({ title, domains, image }: ProductProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      key={title}
      className={
        inView ? styles.productContainer : styles.hiddenProductContainer
      }
      ref={ref}
    >
      <div className={styles.productImage}>{image}</div>
      <h5 className={styles.productTitle}>{title}</h5>
      <p className={styles.productDomains}>{domains}</p>
    </div>
  );
};
