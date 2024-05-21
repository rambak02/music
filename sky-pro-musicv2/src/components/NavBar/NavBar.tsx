import clsx from "clsx";
import styles from "./NavBar.module.css";
import Image from "next/image";


export const NavBar = () => {
  return (
    <div className={styles.mainNav}>
      <div className={styles.navLogo}>
        <Image
          src="/img/logo.png"
          alt="logo"
          width={113}
          height={17}
        />
      </div>
      <div className={styles.navBurger}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      <div className={styles.navMenu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>
              Главное
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>
              Мой плейлист
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="../signin.html" className={styles.menuLink}>
              Войти
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
