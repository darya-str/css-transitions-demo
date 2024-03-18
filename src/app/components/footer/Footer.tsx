import { RocketIcon } from "@/app/icons/rocket";
import { AccessibilityIcon } from "@/app/icons/accessibility";
import { PlantIcon } from "@/app/icons/plant";
import { SatelliteIcon } from "@/app/icons/satellite";
import { EventIcon } from "@/app/icons//event";
import { DiamondIcon } from "@/app/icons/diamond";
import styles from "./footer.module.css";

export const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.logo}>LOGO.</p>
    <ul className={styles.footerList}>
      <li className={styles.footerFirstListItem}>Privacy</li>
      <li className={styles.footerListItem}>
        <RocketIcon />
      </li>
      <li className={styles.footerListItem}>
        <AccessibilityIcon />
      </li>
      <li className={styles.footerListItem}>
        <PlantIcon />
      </li>
      <li className={styles.footerListItem}>
        <SatelliteIcon />
      </li>
      <li className={styles.footerListItem}>
        <EventIcon />
      </li>
      <li className={styles.footerListItem}>
        <DiamondIcon />
      </li>
    </ul>
  </footer>
);
