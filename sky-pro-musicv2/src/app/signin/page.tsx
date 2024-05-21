import styles from "./page.module.css";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

export default function SigninPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin} action="#">
            <a href="../">
              <div className={styles.modalLogo}>
                <Image
                  width={140}
                  height={21}
                  src="/img/logo_modal.png"
                  alt="Логотип"
                />
              </div>
            </a>
            <input
              className={clsx(styles.modalInput, styles.login)}
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className={clsx(styles.modalInput, styles.password)}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button className={styles.modalBtnEnter}>
              <Link href="/">Войти</Link>
            </button>
            <button className={styles.modalBtnSignup}>
              <Link href="/signup">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
