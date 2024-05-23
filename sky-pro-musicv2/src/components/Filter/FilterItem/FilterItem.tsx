"use client";
import clsx from "clsx";
import styles from "./FilterItem.module.css";
import { FilterItemType } from "@/types/type";

export const FilterItem = ({
  title,
  list,
  value,
  onClick,
  isOpen,
}: FilterItemType) => {
  return (
    <div>
      <div
        className={clsx(styles.filter__button, styles._btnText)}
        onClick={() => onClick(value)}
      >
        {title}
      </div>
      {isOpen && (
        <div className={styles.filterContainer}>
        <ul className={styles.filterList}>
          {list.map((item) => (
            <li className={styles.filterListItem} key={item}>{item}</li>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
};
