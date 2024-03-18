"use client";

import { useInView } from "react-intersection-observer";
import { mainProduct } from "@/app/constants/products";
import styles from "./product.module.css";

export const Product = () => {
  const [textRef, isTextInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [circleRef, isCircleInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [imageRef, isImageInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className={styles.mainProductContainer} ref={circleRef}>
      <div
        ref={textRef}
        className={
          isTextInView
            ? styles.mainProductTextVisible
            : styles.mainProductTextHidden
        }
      >
        <p className={styles.mainProductText}>Featured project</p>
        <p
          className={
            isTextInView ? styles.mainProductTitle : styles.mainTextHidden
          }
        >
          <span className={styles.mainProductBrandName}>
            {mainProduct.title}
          </span>
          <br />
          <span className={styles.mainProductDescription}>
            {mainProduct.description}
          </span>
        </p>
      </div>
      <div
        ref={imageRef}
        className={
          isImageInView
            ? styles.mainProductImageVisible
            : styles.mainProductImageHidden
        }
      >
        <div className={styles.mainProductImageWrapper}>
          {mainProduct.image}
        </div>
      </div>
      <div
        className={
          isCircleInView
            ? styles.decorativeCircleVisible
            : styles.decorativeCircleHidden
        }
      />
    </div>
  );
};
