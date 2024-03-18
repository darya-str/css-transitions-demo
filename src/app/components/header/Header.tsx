import styles from "./header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <p className={styles.logo}>LOGO.</p>
    <ul className={styles.headerList}>
      <li className={styles.headerListItem}>SERVICES</li>
      <li className={styles.headerListItem}>CLIENTS</li>
      <li className={styles.headerListItem}>CAREERS</li>
      <li className={styles.headerListItem}>ABOUT</li>
      <li className={styles.headerLastListItem}>CONTACT</li>
    </ul>
  </header>
);
