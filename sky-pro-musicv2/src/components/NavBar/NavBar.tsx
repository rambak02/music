"use client";

import clsx from "clsx";
import styles from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../public/img/logo.png";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { useRouter } from "next/navigation";
import { logout } from "@/store/features/authSlice";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const user = useAppSelector((state) => state.auth.user);
  const handleLogoutUser = () => {
    dispatch(logout());
    navigate.push("/signin");
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.mainNav}>
      <div className={styles.navLogo}>
        <Image src={logo} width={113.33} height={17} alt="logo" priority />
      </div>
      <div
        className={clsx(styles.navBurger, { [styles.open]: isOpen })}
        onClick={toggleMenu}
      >
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      <div
        className={clsx(styles.navMenu, styles.closeMenu, {
          [styles.openMenu]: isOpen,
        })}
      >
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link href="/" className={styles.menuLink}>
              Главное
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/tracks/favoritePage" className={styles.menuLink}>
              Мой плейлист
            </Link>
          </li>

          <li className={styles.menuItem}>
            {user ? (
              <p onClick={handleLogoutUser} className={styles.menuLink}>
                Выйти
              </p>
            ) : (
              <Link href="/signin" className={styles.menuLink}>
                Войти
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
