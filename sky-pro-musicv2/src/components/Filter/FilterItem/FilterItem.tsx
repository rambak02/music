"use client";
import clsx from "clsx";
import styles from "./FilterItem.module.css";
import { TrackType } from "@/types/type";
import { useAppDispatch } from "@/hooks/store";
import { setFilter } from "@/store/features/playlistSlice";
export type FilterItemType = {
  title: string;
  list: string[];
  value: string;
  tracks: TrackType[];
  isOpen: boolean;
  onClick: (value: string) => void;
  selected: string[] | string;
};

export const FilterItem = ({
  title,
  list,
  value,
  onClick,
  isOpen,
  selected
}: FilterItemType) => {
  const dispatch = useAppDispatch();
  const toggleFiler = (item: string) => {
    if (value === "release") {
      dispatch(setFilter({ orderSorting: item }));
      return;
    }
    if (selected instanceof Array) {
      dispatch(
        setFilter({
          [value]: selected.includes(item)
            ? selected.filter((el) => el !== item)
            : [...selected, item],
        })
      );
    }
  };
  return (
    <div>
      <div
        className={clsx(styles.filter__button, styles._btnText, {
          [styles.openFilter]: isOpen,
        })}
        onClick={() => onClick(value)}
      >
        {selected.length > 0 && value !== "release" ? (
          <div className={styles.filterCount}>{selected.length}</div>
        ) : null}
        {title}
      </div>
      {isOpen && (
        <div className={styles.filterContainer}>
          <ul className={styles.filterList}>
            {list.map((item, index) => (
               <li
               key={index}
               onClick={() => toggleFiler(item)}
               className={clsx(styles.listItem, {
                 [styles.listItemActive]:
                   value === "release"
                     ? selected === item
                     : selected.includes(item),
               })}
             >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};