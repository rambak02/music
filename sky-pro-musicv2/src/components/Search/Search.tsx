import clsx from "clsx";
import styles from "./Search.module.css";
import { useAppDispatch } from "@/hooks/store";
import { useState } from "react";
import { setFilter } from "@/store/features/playlistSlice";

export const Search = () => {
  const dispatch = useAppDispatch();

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
        onChange={(e) => dispatch(setFilter({ searchString: e.target.value }))}
      />
    </div>
  );
};
