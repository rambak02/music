import clsx from "clsx";
import styles from "./NavBar.module.css";
import Image from "next/image";


export const NavBar = () => {
  return (
    <div className={styles.main__nav}>
      <div className={styles.nav__logo}>
        <Image
          src="/img/logo.png"
          alt="logo"
          width={113}
          height={17}
        />
      </div>
      <div className={styles.nav__burger}>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
      <div className={styles.nav__menu}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <a href="#" className={styles.menu__link}>
              Главное
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="#" className={styles.menu__link}>
              Мой плейлист
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="../signin.html" className={styles.menu__link}>
              Войти
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
