"use client"
import clsx from "clsx";
import styles from "./Search.module.css";
import { useAppDispatch } from "@/hooks/store";

import { resetFilters, setFilter } from "@/store/features/playlistSlice";
import { useState } from "react";

export const Search = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchEvent = event.target.value;
    setSearch(searchEvent);
    if (searchEvent.trim() === "") {
      dispatch(resetFilters());
    } else {
      dispatch(setFilter({ searchString: searchEvent }));
    }
  };
  return (
    <div className={clsx(styles.centerblock__search, styles.search)}>
      <svg className={styles.search__svg}>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
       value={search}
        className={styles.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={handleSearch}
      />
    </div>
  );
};
