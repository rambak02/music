import clsx from "clsx";
import styles from "./Search.module.css"

export const Search = () => {
  return (
    <div className={clsx(styles.centerblock__search, styles.search)}>
    <svg className={styles.search__svg}>
      <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
    </svg>
    <input
      className={styles.search__text}
      type="search"
      placeholder="Поиск"
      name="search"
    />
  </div>
  );
};
